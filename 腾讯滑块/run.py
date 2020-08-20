import json
import random
import re
import time

import execjs
import requests
import base64
from urllib import request

from crack import get_distance
from track import generate_tracks


def tx_cap():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
    }
    r = requests.get(
        'https://www.sf-express.com/sf-service-owf-web/service/captcha/getJsUrl?lang=sc&region=cn&translate=',
        headers=headers)
    r = requests.get(r.text, headers=headers)
    url = re.findall('_="(.*?)";', r.text)[0]
    ua = base64.b64encode(headers['User-Agent'].encode()).decode()
    sess_url = 'https://captcha.guard.qcloud.com/cap_union_prehandle' + url + '&ua=' + ua + '&uid=&cap_cd=&lang=2052&random=0.2927051202751614&callback=_aq_385600&subsid=1'
    sess_r = requests.get(sess_url, headers=headers)
    result = json.loads(re.findall('{.*?}', sess_r.text)[0])
    tm = str(int(time.time() * 1000))
    vig_url = 'https://captcha.guard.qcloud.com/cap_union_new_show' + url + '&ua=' + ua + '&uid=&cap_cd=&lang=2052&random=0.2927051202751614' + '&sess=' \
              + result['sess'] + '&theme=&sid=' + result[
                  'sid'] + '&showtype=popup&fb=1&forcestyle=undefined&subsid=2&color=000000&uid=&cap_cd=&lang=2052&' \
                           'rnd=452324&TCapIframeLoadTime=65&prehandleLoadTime=58&createIframeStart=' + tm
    vsig_r = requests.get(vig_url, headers=headers)
    websig = re.findall('websig=(.*?)\";', vsig_r.text)[0]
    ot = re.findall('",ot="(.*?)",at', vsig_r.text)[0]
    key = re.findall('cdata:l,"(.*?)":', vsig_r.text)[0]
    vsig = re.findall('tt="(.*?)"', vsig_r.text)[0]
    all_bg_url = 'https://captcha.guard.qcloud.com/cap_union_new_getcapbysig' + url + '&ua=' + ua + '&uid=&cap_cd=&lang=2052&random=0.2927051202751614' + '&sess=' \
                 + result['sess'] + '&theme=&sid=' + result[
                     'sid'] + '&showtype=popup&fb=1&forcestyle=undefined&subsid=3&color=000000&uid=&cap_cd=&lang=' \
                              '2052&rnd=442416&TCapIframeLoadTime=66&prehandleLoadTime=49&createIframeStart=' + tm + '&rand=0.02786953727126984&websig=' + websig + '&vsig=' + vsig + '&img_index=1'
    gap_bg_url = all_bg_url.replace('&img_index=1', '&img_index=2').replace('subsid=3', 'subsid=4')
    request.urlretrieve(all_bg_url, '2.jpg')
    request.urlretrieve(gap_bg_url, '1.png')
    distance = get_distance()
    init_mousemove = [[95, 307, 1076], [8, -8, 4], [9, -8, 10], [10, -6, 3], [9, -7, 8], [7, -6, 8], [6, -4, 8],
                      [5, -3, 8], [2, -1, 8], [1, -2, 9], [2, -1, 6], [1, -1, 9], [0, -1, 110], [-1, 0, 63], [0, 1, 10],
                      [-1, 0, 6], [0, 1, 9], [-2, 1, 4], [-1, 2, 8], [-2, 1, 8], [0, 1, 9], [-1, 1, 7], [-2, 1, 8],
                      [-1, 2, 9], [-2, 1, 5], [-1, 2, 8], [-3, 1, 8], [-4, 2, 8], [-3, 1, 8], [-4, 2, 8], [-6, 1, 8],
                      [-4, 1, 6], [-6, 1, 8], [-6, 1, 8], [-5, 2, 8], [-6, 1, 9], [-6, 2, 9], [-5, 2, 8], [-6, 1, 5],
                      [-6, 1, 8], [-4, 0, 11], [-3, 0, 5], [-2, 0, 12], [-2, 0, 5], [-1, 0, 6], [-2, 0, 7], [-1, 0, 8],
                      [-1, 0, 8], [-2, 0, 8], [-1, 0, 9], [-1, 0, 6], [-1, -1, 9], [-1, 0, 6], [-1, 0, 10], [-1, 0, 6],
                      [-2, -1, 16], [-1, -1, 14], [-2, 0, 8], [-1, 0, 8], [-1, 0, 8], [-2, 0, 9], [-1, 0, 7],
                      [-1, 0, 7], [-1, 0, 7], [-1, 0, 17], [-2, 0, 15], [0, -1, 22], [0, -1, 48], [0, -1, 27],
                      [0, -1, 11], [0, -1, 23], [0, -1, 28], [1, -1, 22], [1, 0, 12], [0, -1, 13], [0, -1, 10],
                      [1, 0, 6], [0, -1, 27], [1, 0, 36], [0, -1, 9], [1, 0, 356]]
    x = random.randint(distance[0] + 38, distance[0] + 94)
    y = 0
    track = generate_tracks(x - 37)
    init_mousemove.extend(track)
    for i in init_mousemove:
        y += i[1]
    begin_tm = int(time.time() * 1000)
    slideValue = [[37, 278, 69]]
    slideValue.extend(track)
    data = {
        "mouseclick": [],
        "keyvalue": [],
        "user_Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.56 Safari/537.36 Edg/84.0.522.26",
        "resolutionx": 1920,
        "resolutiony": 1080,
        "winSize": [360, 360],
        "url": "https://captcha.guard.qcloud.com/cap_union_new_show",
        "refer": "https://www.sf-express.com/cn/sc/dynamic_function/waybill/",
        "begintime": begin_tm // 1000,
        "endtime": begin_tm // 1000 + 6,
        "platform": 1,
        "os": "other",
        "keyboards": 0,
        "flash": 0,
        "pluginNum": 3,
        "index": 1,
        "ptcz": "",
        "tokenid": 0,
        "a": 0,
        "btokenid": '',
        "tokents": begin_tm,
        "ips": {},
        "colorDepth": 24,
        "cookieEnabled": True,
        "timezone": 8,
        "wDelta": 0,
        "mousemove": init_mousemove,
        "keyUpCnt": 0,
        "keyUpValue": [],
        "mouseUpValue": [{"t": 6, "x": x, "y": y}],
        "mouseUpCnt": 1,
        "mouseDownValue": [],
        "mouseDownCnt": 0,
        "orientation": [],
        "bSimutor": 0,
        "focusBlur": {"in": [], "out": [], "t": []},
        "fVersion": 0,
        "charSet": "UTF-8",
        "resizeCnt": 0,
        "errors": [],
        "screenInfo": "1920-1080-1050-24-*-*-*",
        "ft": "qf_7P_n_H",
        "coordinate": [10, 64, 0.5],
        "clientType": "2",
        "trycnt": 1,
        "refreshcnt": 0,
        "slideValue": slideValue,
        "dragobj": 0,
    }
    with open('temp.js', 'r')as f:
        content = f.read()
    ctx = execjs.compile(content)
    result = ctx.call('ff', json.dumps(data))
    dt = {}
    for i in all_bg_url.split('?')[1].split('&'):
        lt = i.split('=')
        dt[lt[0]] = lt[1]
    del dt['img_index']
    del dt["random"]
    del dt["rand"]
    cdata = ctx.call('cdata', ot)
    ex_data = {
        "subsid": "2",
        "subcapclass": "10",
        "ans": str(distance[0] - 3) + ',' + str(distance[1] - 1) + ';',
        "cdata": cdata,
        "fpinfo": "undefined",
        "tlg": 1,
        "vlg": "0_0_0",
        "vmtime": "_",
        "vmData": ""
    }
    dt.update(ex_data)
    dt.update({key: result})
    headers = {
        "Host": "captcha.guard.qcloud.com",
        "Referer": all_bg_url,
        "User-Agent": "Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/83.0.4103.116Safari/537.36"
    }
    r = requests.post('https://captcha.guard.qcloud.com/cap_union_new_verify?random=1593273420672', data=dt,
                      headers=headers)
    print(r.text)


if __name__ == '__main__':
    tx_cap()
