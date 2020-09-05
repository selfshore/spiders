import re

import execjs
import requests
from lxml import etree
from requests.utils import dict_from_cookiejar


headers1 = {
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Host": "wenshu.court.gov.cn",
    "Pragma": "no-cache",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/83.0.4103.116Safari/537.36"
}
r = requests.get('https://wenshu.court.gov.cn/', headers=headers1)
cookie = dict_from_cookiejar(r.cookies)
html = etree.HTML(r.text)
content = html.xpath('//meta/@content')[-1]
js = html.xpath('//script/text()')[0]
with open('文书网.js', 'r', encoding='utf-8')as f:
    wsw = f.read()
ctx = execjs.compile(wsw)
result = ctx.call('ck', js, content)
cookie_443T = re.findall('HM4hUBT0dDOn443T=(.*?);', result[0])[0]
cookie.update({'HM4hUBT0dDOnenable': 'true', 'HM4hUBT0dDOn443T': cookie_443T})
hddd = {
    "Accept": "application/json,text/javascript,*/*;q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "741",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    "Host": "wenshu.court.gov.cn",
    "Origin": "https://wenshu.court.gov.cn",
    "Pragma": "no-cache",
    "Referer": "https://wenshu.court.gov.cn/website/wenshu/181217BMTKHNT2W0/index.html?pageId=a5d332253ef97ea7b647c535af849565&s21=%E6%B7%B1%E5%9C%B3",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0(Linux;Android4.4.2;Nexus4Build/KOT49H)AppleWebKit/537.36(KHTML,likeGecko)Chrome/34.0.1847.114MobileSafari/537.36"
}
with open('DES.js', 'r', encoding='utf-8')as f:
    content = f.read()
ctx = execjs.compile(content)
ciphertext = ctx.call('cipher')
data = {
    "pageId": "690bb4f4c7df15b72c0ac87ec4d9cefa",
    "sortFields": "s50:desc",
    "ciphertext": ciphertext,
    "pageNum": "41",
    "pageSize": "15",
    "queryCondition": "[]",
    "cfg": "com.lawyee.judge.dc.parse.dto.SearchDataDsoDTO@queryDoc",
    "__RequestVerificationToken": "5I8xwUOieFbug4UX4z9LlTzQ"
}
r = requests.post(result[1]['1'], headers=hddd, data=data, cookies=cookie)

res = r.json()['result']
# res = "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"
# secretKey = r.json()['secretKey']
# secretKey = "gNPPzAOz9cs3ieS4LQ6Gu929"
# data = ctx.call('data', res, secretKey)
print(res)
