import re

import execjs
import requests
from requests.utils import dict_from_cookiejar

headers = {
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Host": "www.gsxt.gov.cn",
    "Pragma": "no-cache",
    "Proxy-Connection": "keep-alive",
    "Referer": "http://www.gsxt.gov.cn/index.html",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/83.0.4103.116Safari/537.36"
}
r = requests.get('http://www.gsxt.gov.cn/index.html', headers=headers)
cookie = dict_from_cookiejar(r.cookies)
js = 'function get_jsl(){document={};' + re.findall('<script>(.*?)location', r.text)[0] + 'return document.cookie}'
ctx = execjs.compile(js)
jsl_ck = ctx.call('get_jsl')
cookie.update({'__jsl_clearance': jsl_ck.split('=', 1)[1].split(';', 1)[0]})
r = requests.get('http://www.gsxt.gov.cn/index.html', headers=headers, cookies=cookie)
js = 'function jsl(){window = {navigator: {userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Geck' \
     'o) Chrome/83.0.4103.116 Safari/537.36"},outerWidth: 1920,outerHeight: 1050,};location = {reload:function () {' \
     '}};document = {};setTimeout = function (x) {x()};' + re.findall('<script>(.*?)</script>', r.text)[0] + ';return document.cookie}'
ctx = execjs.compile(js)
jsl_cookie = ctx.call('jsl')
jsl_cookie = re.findall('=(.*?);', jsl_cookie)[0]
cookie.update({"__jsl_clearance": jsl_cookie})
r = requests.get('http://www.gsxt.gov.cn/index.html', headers=headers, cookies=cookie)
print(r.text)

