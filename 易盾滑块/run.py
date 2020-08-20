import json
import re
from urllib import request

import execjs
import requests

from gap import get_gap
from track import get_track


def get_actoken_median(ctx, rdtm):
    """
    :param ctx: execjs处理得yidun.js对象
    :param rdtm:js里时间相关得值md5结果
    :return:did是d请求得第二个字符串
    """
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Length": "762",
        "Content-type": "application/x-www-form-urlencoded",
        "Host": "ac.dun.163yun.com",
        "Origin": "https://dun.163.com",
        "Pragma": "no-cache",
        "Referer": "https://dun.163.com/trial/jigsaw",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
    }
    param = ctx.call('request_d')
    data = {
        'd': param,
        'v': '663274be',
        'cb': '__wmjsonp_6d6c02f'
    }
    r = requests.post('https://ac.dun.163yun.com/v3/d', data=data, headers=headers)
    did = re.findall('"(.*?)"', r.text)[1]
    tid = re.findall('"(.*?)"', r.text)[0]
    param = ctx.call('verify_b', rdtm, tid, did)
    data = {
        'd': param,
        'v': '663274be',
        'cb': '__wmjsonp_6d6c02f'
    }

    # B请求是激活rdtm然后给actoken加密
    r = requests.post('https://ac.dun.163yun.com/v3/b', data=data, headers=headers)
    return did


def main(actoken=None):
    headers = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Host': 'c.dun.163yun.com',
        'Referer': 'https://dun.163.com/trial/jigsaw',
        'Pragma': 'no-cache',
        'Proxy-Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.'
                      '3904.108 Safari/537.36'
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
        "id": "07e2387ab53a4d6f930b8d9a9be71bdf",
        "fp": fp,
        "https": "true",
        "type": "2",
        "version": "2.14.1",
        "dpr": "1",
        "dev": "1",
        "cb": cb,
        "ipv6": "false",
        "runEnv": "10",
        "group": "",
        "scene": "",
        "width": "320",
        "token": "",
        "referer": "https://dun.163.com/trial/jigsaw",
        "callback": callback
    }
    r = requests.get('https://c.dun.163.com/api/v2/get', params=data, headers=headers)
    data_ = json.loads(re.findall('.*?\((.*?)\);', r.text)[0])
    token = data_['data']['token']
    request.urlretrieve(data_['data']['front'][0], 'img/1.png')
    request.urlretrieve(data_['data']['bg'][0], 'img/2.jpg')
    distance = get_gap() + 5
    trace = get_track(distance)
    left = trace[-1][0] - 10
    data_ = ctx.call('get_data', token, trace, left)
    cb = ctx.call('cb')

    # 下面actoken生成部分
    with open('yidun.js', 'r', encoding='utf-8')as f:
        content = f.read()
    ctx = execjs.compile(content)
    rdtm = ctx.call('rdtm')
    did = get_actoken_median(ctx, rdtm)
    if not actoken:
        actoken = ctx.call('actoken', rdtm, did)

    # 提交验证部分
    get_data = {
        "id": "07e2387ab53a4d6f930b8d9a9be71bdf",
        "token": token,
        "acToken": actoken,
        "data": data_,
        "width": "320",
        "type": "2",
        "version": "2.14.1",
        "cb": cb,
        "extraData": "",
        "runEnv": "10",
        "referer": "https://dun.163.com/trial/jigsaw",
        "callback": "__JSONP_48mk47t_1"
    }
    r = requests.get('https://c.dun.163.com/api/v2/check', headers=headers, params=get_data)

    global counter
    if counter == 1:
        print(r.text)
    else:
        counter += 1
        main(actoken)


if __name__ == '__main__':
    counter = 0
    main()
