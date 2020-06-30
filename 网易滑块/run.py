import json
import re
from urllib import request

import execjs
import requests

from gap import get_gap
from track import get_track


def main():
    headers = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'DNT': '1',
        'Host': 'c.dun.163yun.com',
        'Referer': 'https://dun.163.com/trial/jigsaw',
        'Pragma': 'no-cache',
        'Proxy-Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
    }
    with open('mm.js', 'r', encoding='utf-8')as f:
        content = f.read()
    ctx = execjs.compile(content)
    fp = ctx.call('get_fp')
    callback = ctx.call('get_callback')
    with open('tnp.js', 'r')as f:
        content = f.read()
    ctx = execjs.compile(content)
    cb = ctx.call('cb')
    data = {
        "id":"07e2387ab53a4d6f930b8d9a9be71bdf",
        "fp":  fp,
        "https":"true",
        "type":"2",
        "version":"2.13.6",
        "dpr":"1",
        "dev":"1",
        "cb":cb,
        "ipv6":"false",
        "runEnv":"10",
        "group":"",
        "scene":"",
        "width":"320",
        "token":"",
        "referer":"https://dun.163.com/trial/jigsaw",
        "callback":callback
    }
    r = requests.get('https://c.dun.163.com/api/v2/get', params=data, headers=headers)
    data = json.loads(re.findall('.*?\((.*?)\);', r.text)[0])
    token = data['data']['token']
    request.urlretrieve(data['data']['front'][0], 'img/1.png')
    request.urlretrieve(data['data']['bg'][0], 'img/2.jpg')
    distance = get_gap() + 5
    trace = get_track(distance)
    left = trace[-1][0] - 10
    data = ctx.call('get_data', token, trace, left)
    cb = ctx.call('cb')
    get_data = {
        "id": "07e2387ab53a4d6f930b8d9a9be71bdf",
        "token": token,
        "acToken": "",
        "data": data,
        "width": "320",
        "type": "2",
        "version": "2.13.6",
        "cb": cb,
        "extraData": "",
        "runEnv": "10",
        "referer": "https://dun.163.com/trial/jigsaw",
        "callback": "__JSONP_hhjwbon_4"
    }
    r = requests.get('https://c.dun.163.com/api/v2/check', headers=headers, params=get_data)
    print(r.text)


if __name__ == '__main__':
    main()


