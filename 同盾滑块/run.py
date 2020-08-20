import time

import execjs
import requests
from urllib import request

from crack import get_distance
from recover import img_recv
from track import get_track


def main():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KtmL, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
    }
    # 获取id值部分
    with open('id.js', 'r', encoding='utf-8')as f:
        content = f.read()
    ctx = execjs.compile(content)
    url = ctx.call('pp')
    r = requests.get(url, headers=headers)
    id_val = r.text.split(':')[1].split('}')[0]

    # 获取验证码图片部分
    tokens = id_val.split('|')[1]
    arg_list = ctx.call('pp', tokens)
    with open('imgs.js', 'r', encoding='utf-8')as f:
        content = f.read()
    ctx = execjs.compile(content)
    tm = int(time.time()) * 1000
    p_val = ctx.call('get_p', arg_list[0], arg_list[1], 1, tm, '', '', '')
    params = {
        'p1': p_val['p1'],
        'p2': p_val['p2']
    }
    del p_val['p1']
    del p_val['p2']
    r = requests.post('https://sphinx.tongdun.net/sphinx/validatecode/v1', params=params, data=p_val, headers=headers)
    validateCodeObj = r.json()["validateCodeObj"]
    slideBgi = validateCodeObj['slideBgi']
    slideImage = validateCodeObj['slideImage']
    request.urlretrieve('https://static.tongdun.net' + slideBgi, '2.jpeg')
    request.urlretrieve('https://static.tongdun.net' + slideImage, '1.png')
    with open('pincuo.js', 'r', encoding='utf-8')as f:
        content = f.read()
    ctx2 = execjs.compile(content)
    bg = ctx2.call('distance', validateCodeObj['bgImageSplitSequence'], validateCodeObj['imageGeneral'])
    img_recv(bg)
    distance = get_distance()
    track = get_track(distance)
    sec_p_val = ctx.call('get_p', arg_list[0], arg_list[1], 3, tm, track, validateCodeObj, distance)
    params2 = {
        'p1': sec_p_val['p1'],
        'p2': sec_p_val['p2']
    }
    del sec_p_val['p1']
    del sec_p_val['p2']
    rr = requests.post('https://sphinx.tongdun.net/sphinx/validatecode/v1', params=params2, data=sec_p_val,
                       headers=headers)
    if rr.json().get("validateToken"):
        print(rr.json()["validateToken"])
    else:
        print('未通过')


if __name__ == '__main__':
    main()
