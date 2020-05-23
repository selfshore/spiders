import json
import re
import time

import execjs
import requests
from urllib import request

import track
from jy import get_distance
from recover import img_recover


def get_html():
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Ch'
                             'rome/83.0.4103.56 Safari/537.36 Edg/83.0.478.33',
               }
    url = 'https://passport.bilibili.com/web/captcha/combine?plat=6'
    r = requests.get(url,headers=headers,)
    with open('mix.js', 'r', encoding='utf-8')as f:
        content = f.read()
    ctx = execjs.compile(content)
    gt = json.loads(r.text)["data"]["result"]["gt"]
    challenge = json.loads(r.text)["data"]["result"]["challenge"]
    res = ctx.call('first_w', gt, challenge)
    headers = {
        'Host': 'api.geetest.com',
        'Referer': 'https://passport.bilibili.com/login',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.56 Safari/537.36 Edg/83.0.478.33'
    }
    data = {
        'gt': gt,
        'callback':'geetest_' + str(int(time.time() * 1000))
    }
    session = requests.session()
    r = session.get('https://api.geetest.com/gettype.php',headers=headers, params=data,)
    data = {
        'gt': gt,
        'challenge': challenge,
        'lang': 'zh-cn',
        'pt': '0',
        'w': res,
        'callback': 'geetest_' + str(int(time.time() * 1000))
    }
    r = session.get('https://api.geetest.com/get.php',params=data, headers=headers,)
    ret_data = re.findall('.*?({.*?})\)',r.text)[0]
    ret_data = json.loads(ret_data)
    sec_w = ctx.call('ajaxphp',gt,challenge,ret_data["data"]["c"],ret_data["data"]["s"])
    data = {
        'gt': gt,
        'challenge': challenge,
        'lang': 'zh-cn',
        'pt': '0',
        'w': sec_w,
        'callback': 'geetest_' + str(int(time.time() * 1000))
    }
    r = session.get('https://api.geetest.com/ajax.php', params=data, headers=headers, )
    data = {"is_next":"true",
            "type":"slide3",
            "gt":gt,
            "challenge":challenge,
            "lang":"zh-cn",
            "https":"false",
            "protocol":"https://",
            "offline":"false",
            "product":"embed",
            "api_server":"api.geetest.com",
            "isPC":"true",
            "area":"#geetest-wrap",
            "width":"100%",
            "callback":"geetest_1590163487388"
            }
    r = session.get('https://api.geetest.com/get.php', params=data,headers=headers,)
    ret_data = re.findall('.*?({.*?})\)', r.text)[0]
    ret_data = json.loads(ret_data)
    request.urlretrieve('https://static.geetest.com/' + ret_data["bg"],'gap.webp')
    request.urlretrieve('https://static.geetest.com/' + ret_data["fullbg"],'full.webp')
    img_recover()
    distance = get_distance() - 5
    arr = track.choice_track(distance)
    devarr = []
    t = arr[-1][0]
    n = arr[-1][2]
    for i in range(len(arr)-1):
        devarr.append([arr[i+1][0]-arr[i][0],arr[i+1][1]-arr[i][1],arr[i+1][2]-arr[i][2]])
    three_w = ctx.call('D',arr,devarr,t,n,ret_data["c"],ret_data["s"],gt,ret_data["challenge"])
    data = {
        'gt': gt,
        'challenge': ret_data["challenge"],
        'lang': 'zh-cn',
        'pt': '0',
        'w': three_w,
        'callback': 'geetest_' + str(int(time.time() * 1000))
    }
    r = session.get('https://api.geetest.com/ajax.php', params=data, headers=headers, )
    print(r.text)


if __name__ == "__main__":
    get_html()
