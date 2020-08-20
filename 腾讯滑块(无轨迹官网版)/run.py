import json
import os
import re
import time

import requests

from crack import get_distance


def main():
    headers = {
        "Host": "t.captcha.qq.com",
        "Referer": "https://007.qq.com/online.html?ADTAG=index.head",
        "User-Agent": "Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/83.0.4103.116Safari/537.36"
    }
    data = {
        "aid": "2100049389",
        "protocol": "https",
        "accver": "1",
        "showtype": "popup",
        "ua": "TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzgzLjAuNDEwMy4xMTYgU2FmYXJpLzUzNy4zNg==",
        "noheader": "1",
        "fb": "1",
        "enableDarkMode": "0",
        "fpinfo": "fpsig=undefined",
        "grayscale": "1",
        "clientype": "2",
        "cap_cd": "",
        "uid": "",
        "wxLang": "",
        "subsid": "1",
        "callback": "_aq_445906",
        "sess": ""
    }
    r = requests.get('https://t.captcha.qq.com/cap_union_prehandle', headers=headers, params=data)
    dt = json.loads(re.findall('{.*?}', r.text)[0])
    tm = int(time.time() * 1000)
    data2 = {
        "aid": "2100049389",
        "protocol": "https",
        "accver": "1",
        "showtype": "popup",
        "ua": "TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzgzLjAuNDEwMy4xMTYgU2FmYXJpLzUzNy4zNg==",
        "noheader": "1",
        "fb": "1",
        "enableDarkMode": "0",
        "fpinfo": "fpsig=undefined",
        "grayscale": "1",
        "clientype": "2",
        "subsid": "2",
        "sess": dt["sess"],
        "fwidth": "0",
        "sid": dt['sid'],
        "forcestyle": "undefined",
        "wxLang": "",
        "tcScale": "1",
        "uid": "",
        "cap_cd": "",
        "rnd": "130877",
        "TCapIframeLoadTime": "undefined",
        "prehandleLoadTime": "11200",
        "createIframeStart": tm
    }
    r = requests.get('https://t.captcha.qq.com/cap_union_new_show', params=data2, headers=headers)
    image = re.findall('&image=(.*?)"', r.text)[0]
    sess = re.findall('sess:"(.*?)",', r.text)[0]
    data3 = {
        "index": "1",
        "image": image + "?aid=2100049389",
        "protocol": "https",
        "accver": "1",
        "showtype": "popup",
        "ua": "TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzgzLjAuNDEwMy4xMTYgU2FmYXJpLzUzNy4zNg==",
        "noheader": "1",
        "fb": "1",
        "enableDarkMode": "0",
        "fpinfo": "fpsig=undefined",
        "grayscale": "1",
        "clientype": "2",
        "subsid": "3",
        "sess": sess,
        "fwidth": "0",
        "sid": dt['sid'],
        "forcestyle": "undefined",
        "wxLang": "",
        "tcScale": "1",
        "uid": "",
        "cap_cd": "",
        "rnd": "130877",
        "TCapIframeLoadTime": "undefined",
        "prehandleLoadTime": "35",
        "createIframeStart": tm,
        "rand": "44091785",
        "websig": "",
        "vsig": "",
        "img_index": "1"
    }
    r = requests.get('https://t.captcha.qq.com/hycdn', params=data3, headers=headers)
    with open('2.jpg', 'ab')as f:
        f.write(r.content)
    data3.update({"img_index": 2, "index": 2, "subsid": 4})
    r = requests.get('https://t.captcha.qq.com/hycdn', params=data3, headers=headers)
    with open('1.png', 'ab')as f:
        f.write(r.content)
    distance = get_distance()
    data4 = {
        "0": "Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/83.0.4103.116Safari/537.36",
        "1": "zh-CN",
        "2": "1.8",
        "3": "1.8",
        "4": "24",
        "5": "4",
        "6": "-480",
        "7": "1",
        "8": "1",
        "9": "1",
        "10": "u",
        "11": "function",
        "12": "u",
        "13": "Win32",
        "14": "0",
        "15": "9dcc2da81f0e59e03185ad3db82acb70",  # 2
        "16": "5e7610e44033141ccbae047dad72c820",  # 4
        "17": "a1835c959081afa32e01bd14786db9b0",  # 3
        "18": "0",
        "19": "9c39fe2ad81644d19ccb1c7b65809bb0",  # 9
        "20": "10501920241080192024",
        "21": "1;",
        "22": "1;1;1;1;1;1;1;0;1;object0UTF-8",
        "23": "0",
        "24": "0;0",
        "25": "f5bfdb391ff0c6cad8aa99c6d094afe0",  # 1
        "26": "48000_2_1_0_2_explicit_speakers",
        "27": "d7959e801195e05311be04517d04a520",  # 2
        "28": "ANGLE(Intel(R)HDGraphics630Direct3D11vs_5_0ps_5_0)",
        "29": "953e8506ed87372296cbc240468dd280",  # 8
        "30": "a23a38527a38dcea2f63d5d078443f70",  # 8
        "31": "0",
        "32": "0",
        "33": "0",
        "34": "0",
        "35": "0",
        "36": "0",
        "37": "0",
        "38": "0",
        "39": "0",
        "40": "0",
        "41": "0",
        "42": "0",
        "43": "0",
        "44": "0",
        "45": "0",
        "46": "0",
        "47": "0",
        "48": "0",
        "49": "0",
        "50": "0",
        "fesig": "16676171007707817841",  # 0
        "ut": "1060",
        "appid": "0",
        "refer": "https://t.captcha.qq.com/cap_union_new_show",
        "domain": "t.captcha.qq.com",
        "fph": "",
        "fpv": "0.0.15",
        "ptcz": "",
        "callback": "_fp_090306"
    }
    headers2 = {
        "Host": "ssl.captcha.qq.com",
        "User-Agent": "Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/83.0.4103.116Safari/537.36"
    }
    r = requests.get('https://ssl.captcha.qq.com/dfpReg', headers=headers2, params=data4)
    fpsig = re.findall(':"(\w+)"', r.text)[0]
    data5 = {
        'app_data': dt['sid'],
        't': '1955297332?t=' + str(tm / 1000)
    }
    r = requests.get('https://t.captcha.qq.com/tdc.js', params=data5, headers=headers)
    eks = re.findall('info="(.*?)";', r.text)[0]
    data6 = {
        "aid": "2100049389",
        "protocol": "https",
        "accver": "1",
        "showtype": "popup",
        "ua": "TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzgzLjAuNDEwMy4xMTYgU2FmYXJpLzUzNy4zNg==",
        "noheader": "1",
        "fb": "1",
        "enableDarkMode": "0",
        "fpinfo": "fpsig=" + fpsig,
        "grayscale": "1",
        "clientype": "2",
        "subsid": "2",
        "sess": sess,
        "fwidth": "0",
        "sid": dt['sid'],
        "forcestyle": "undefined",
        "wxLang": "",
        "tcScale": "1",
        "uid": "",
        "cap_cd": "",
        "rnd": "130877",
        "TCapIframeLoadTime": "undefined",
        "prehandleLoadTime": "35",
        "createIframeStart": tm,
        "cdata": "0",
        "ans": str(distance[0] - 3) + ',' + str(distance[1] - 1) + ';',
        "vsig": "",
        "websig": "",
        "subcapclass": "",
        "collect": "1234567890asdfghjklqwe",
        "tlg": "5184",
        "eks": eks,
        "vlg": "0_0_1"
    }
    r = requests.post('https://t.captcha.qq.com/cap_union_new_verify', data=data6, headers=headers)
    print(r.text)
    os.remove('1.png')
    os.remove('2.jpg')
    os.remove('3.png')


if __name__ == '__main__':
    main()
