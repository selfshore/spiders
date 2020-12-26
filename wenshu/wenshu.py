# -*- coding: utf-8 -*-
'''
    author: noob
    filename: wenshu.py
    time: 2020-09-09
'''

import json
import re
from datetime import datetime
from jsonpath import jsonpath
from loguru import logger
import execjs
import requests
import urllib3
urllib3.disable_warnings()

class WenShu():
    def __init__(self):
        self.username =  input('请输入文书网账号(仅支持手机号),并以回车键结束：')
        self.password =  str(input('请输入密码,并以回车键结束：'))
        self.session = requests.session()
        self.session.headers =  {
                            'Connection': 'keep-alive',
                            'Cache-Control': 'max-age=0',
                            'Upgrade-Insecure-Requests': '1',
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
                            'Referer': 'http://wenshu.court.gov.cn/',
                            'Accept-Encoding': 'gzip, deflate',
                            'Accept-Language': 'zh-CN,zh;q=0.9',
                        }

        with open('cookie.js', encoding='utf-8') as f:
            self.first_cookie = f.read()

        with open('params_.js', encoding='utf-8') as f:
            self.params_ = f.read()

        self.params = execjs.compile(self.params_)

        self.login_url = 'https://wenshu.court.gov.cn/website/wenshu/181010CARHS5BS3C/index.html?open=login'
        self.login_api = 'https://account.court.gov.cn/api/login'
        self.verify_api = 'https://wenshu.court.gov.cn/tongyiLogin/authorize'

        self.numlist = [103, 0, 102, 203, 224, 181, 108, 240, 101, 126, 103, 11, 102, 203, 225, 181, 208, 180, 100, 127]
        self.numdict = {}
        self.num_result = []
        self.cookie_name = 'HM4hUBT0dDOn443T'


    def get_html(self):

        response = self.session.get(self.login_url,verify=False)
        self.html = response.content.decode()

    def do_html(self):
        self.content = re.findall(r'<meta content="(.*?)"><!', self.html)[0]
        innerjs = re.findall(r'r="m">(.*?)</script>', self.html)[0]
        ret = 'ret' + re.findall(r'(=_\$\S{2}\.call\(_\$\S{2},_\$\S{2}\))', self.html)[0]
        js = ret[-5:-1]
        self.innerjs1 = innerjs.replace(ret, f'ret=123;xxx={js}')
        self.get_cookie(self.first_cookie)

    def get_cookie(self,get_cookie_js):
        ctx = execjs.compile(get_cookie_js)
        result = ctx.call('xx', self.innerjs1, self.content)
        js1 = result[0]
        numstr = re.search(r'((_\$[\w\W]{2}\._\$[\w\W]{2}=_\$[\w\W]{2};){20})?var _\$[\w\W]{2}=64;', js1).group(1)
        numb = re.findall(r'(_\$\S{2})=_\$\S{2}', numstr)
        for i in range(20):
            self.numdict[numb[i]] = self.numlist[i]
        for i in range(4):
            self.num_result.append(self.numdict[result[i+1]])
        self.cookie = ctx.call('cookie', self.innerjs1, self.content, self.num_result)
        self.session.cookies.update({self.cookie_name: self.cookie})
        self.fakecookie = self.session.cookies[self.cookie_name]
        self.session.get(self.login_url, verify=False)

    def verfy_user(self):
        password = self.params.call('get_pwd', self.password)
        data = {
            'username': self.username,
            'password': password,
            'appDomain': 'null'
        }
        res = self.session.post(self.login_api, data=data,verify=False)
        r = self.session.post(self.verify_api,verify=False)
        r = self.session.get(r.text)
        self.html = r.content.decode()
        self.get_user()

    def get_user(self):
        token = self.params.call('token')
        pid = self.params.call('pid')
        cipher = self.params.call('cipher')

        data = {
                's8': '03',
                'pageId': pid,
                'cfg': 'com.lawyee.wbsttools.web.parse.dto.AppUserDTO@currentUser',
                '__RequestVerificationToken': token
        }

        url = 'https://wenshu.court.gov.cn/website/parse/rest.q4w'
        self.session.post(url, data=data)

        self.get_msg(pid, cipher, token)

    def get_msg(self,pid,cipher,token):
        data = {
                'pageId': pid,
                's8': '03',
                'sortFields': 's50:desc',
                'ciphertext': cipher,
                'pageNum': '1',
                'queryCondition': '[{"key":"s8","value":"03"}]',
                'cfg': 'com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@queryDoc',
                '__RequestVerificationToken': token
            }
        url = 'https://wenshu.court.gov.cn/website/parse/rest.q4w'

        response1 = self.session.post(url, data=data)

        try:
            res = response1.json()
            key = res["secretKey"]
            text = res["result"]
            now_time = str(datetime.now().strftime('%Y%m%d'))
            result = self.params.call('decrypt', text,key,now_time)
            result = json.loads(result)
            result = jsonpath(result, '$..resultList')[0]
            for i in result:
                logger.info(f'解密结果:{i}')
        except:
            self.html = response1.content.decode()
            self.do_html()
            self.get_user()

    def run(self):
        self.get_html()
        self.do_html()
        self.verfy_user()

if __name__ == '__main__':
    wenshu = WenShu()
    wenshu.run()

