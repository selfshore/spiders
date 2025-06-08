#  Copyright (c) 2025 Yuese. All rights reserved.
# -*- coding: utf-8 -*-
"""
@Author: yuese
@Date: 2025/6/8 17:03
@File: example.py
"""
import execjs
from curl_cffi import requests

from yidun.example import Yidun


class ZH:
    def __init__(self, username, password, fp, validate):
        self.username = username
        self.password = password
        self.fp = fp
        self.validate = validate
        self.headers = {
            'Accept': '*/*',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Origin': 'https://www.zhihu.com',
            'Pragma': 'no-cache',
            'Referer': 'https://www.zhihu.com/signin?next=%2F',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
            'content-type': 'text/plain',
            'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
        }
        with open("nonce.js", 'r', encoding='utf-8') as fp:
            nonce_js = fp.read()
        self.nonce_ctx = execjs.compile(nonce_js)
        with open("login.js", 'r', encoding='utf-8') as fp:
            login_js = fp.read()
        self.login_ctx = execjs.compile(login_js)
        with open("../yidun/ydfp.js", "r", encoding="utf-8") as f:
            yd_js = f.read()
        self.yd_ctx = execjs.compile(yd_js)
        self.cookies = {}
        self.proxies = None

    def __get_sessionId(self):
        response = requests.get("https://www.zhihu.com/api/v3/oauth/captcha/v2?type=captcha_sign_in",
                                headers=self.headers, proxies=self.proxies, verify=False)
        self.cookies.update(response.cookies)
        self.cookies.update({
            "gdxidpyhxdE": self.fp,
            "SESSIONID": self.yd_ctx.call("sessionId")
        })
        data = self.yd_ctx.call("encValidate", self.validate, self.fp)
        response = requests.put(
            'https://www.zhihu.com/api/v3/oauth/captcha/v2?' + data,
            cookies=self.cookies,
            headers=self.headers,
            data=data,
            proxies=self.proxies,
            verify=False
        )
        if not response.json().get("success"):
            raise Exception("验证码未通过知乎验证!!")
        self.cookies.update(response.cookies)

    def __get_nonce_and_verify_sessionId(self):
        body = self.nonce_ctx.call("getNonce", self.cookies["SESSIONID"], self.username)
        response = requests.post('https://www.zhihu.com/zbst/events/r', headers=self.headers, data=body,
                                 cookies=self.cookies, proxies=self.proxies, verify=False).json()
        nonce = response.get("nonce")
        if not nonce:
            raise Exception("未获取到nonce!!")

        x81 = self.nonce_ctx.call("x81", response.get("nonce"), self.cookies["SESSIONID"])
        self.headers.update(
            {'x-zse-93': '101_3_3.0'}
        )
        response = requests.post('https://www.zhihu.com/udid', headers=self.headers, cookies=self.cookies,
                                 proxies=self.proxies, verify=False)
        self.cookies.update(response.cookies)
        return x81

    def __login(self, x81):
        xsrf = self.cookies.get("_xsrf")
        self.headers.update({
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'origin': 'https://www.zhihu.com',
            'x-xsrftoken': xsrf,
            'x-zse-83': '3_3.0',
            'x-zst-81': x81,
        })
        pdData = self.login_ctx.call("loginData", self.username, self.password)
        response = requests.post('https://www.zhihu.com/api/v3/oauth/sign_in', cookies=self.cookies,
                                 headers=self.headers,
                                 data=pdData, proxies=self.proxies, verify=False)
        return response.text

    def run(self):
        self.__get_sessionId()
        x81 = self.__get_nonce_and_verify_sessionId()
        return self.__login(x81)


if __name__ == '__main__':
    username = "1989695873@qq.com"
    password = "<PASSWORD>123"
    captcha = Yidun()
    [validate, fp] = captcha.run(True)
    zh = ZH(username, password, fp, validate)
    print(zh.run())
