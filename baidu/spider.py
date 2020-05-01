import base64
import json
import random
import re
import time

import requests
from Crypto.Cipher import PKCS1_v1_5
from Crypto.PublicKey import RSA

from callback_ import get_callback, get_callback_p
from gid import get_gid
from part_params import get_params, get_dv, get_fs, get_traceid


def login(username, password):
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KH'
                             'TML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
               'Host': 'passport.baidu.com',
                'Referer': 'http://index.baidu.com/v2/index.html',
               'Connection': 'keep - alive',
               'Content - Type': 'application / x - www - form - urlencoded',
               'Cookie':'BAIDUID=F08E5BE59F45BCB7A0C6F7C7BBE1CA44:FG=1'
               }

    tt = str(int(time.time() * 1000))
    gid = get_gid()
    time_ = get_params()['time']
    alg = get_params()['alg']
    sig = get_params()['sig']
    elapsed = get_params()['elapsed']
    shaOne = get_params()['shaOne']
    callback = get_callback()
    url = 'https://passport.baidu.com/v2/api/?getapi&token=&tpl=nx&subpro=&apiver=v3&tt=%s' \
          '&class=login&gid=%s&logintype=basicLogin&traceid=&time=%s&alg=%s&sig=%s&elapsed=' \
          '%s&shaOne=%s&callback=%s' % (tt, gid, time_, alg, sig, elapsed, shaOne, callback)
    response = requests.get(url, headers=headers)
    token = re.findall('.*?"token" : "(.*?)",.*', response.text)[0]


    # 获取token

    ak = "1e3f2dd1c81f2075171a547893391274"
    callback = "jsonpCallbackA1" + str(int(10000 * random.random() + 500))
    V = str(int(10000 * random.random() + 500))
    t = str(int(time.time() * 1000))
    data_ak = {
        'ak': ak,
        'callback': callback,
        'v': V,
        't': t
    }
    response = requests.get('https://passport.baidu.com/viewlog', params=data_ak, headers=headers)
    content = re.findall('.*?\((.*?)\)$', response.text)[0]
    content = json.loads(content)
    content = content['data']
    # 第一次获取ds-tk

    data_key = {"token":token,
            "tpl": "nx",
            "subpro": "",
            "apiver": "v3",
            "tt": str(int(time.time() * 1000)),
            "gid": get_gid(),
            "traceid": "",
            "callback": get_callback()
            }
    data_key.update(get_params())
    response = requests.get('https://passport.baidu.com/v2/getpublickey', params=data_key, headers=headers)
    content_ = re.findall('.*?\((.*?)\)$', response.text)[0]
    publickey = eval(content_)['pubkey']
    key = eval(content_)['key']
    # 获取公钥

    rsakey = RSA.import_key(publickey)
    cipher = PKCS1_v1_5.new(rsakey)
    passwd = base64.b64encode(cipher.encrypt(password.encode()))
    passwd = str(passwd, encoding='utf-8')
    # 密码加密

    data_second_dstk = {"ak": "1e3f2dd1c81f2075171a547893391274",
            "as": content['as'],
            "fs": get_fs(content['as']),
            "tk": content['tk'],
            "callback": "jsonpCallbackb6110",
            "v": str(int(10000 * random.random() + 500)),
            "t": str(int(time.time() * 1000))
            }
    response = requests.get('https://passport.baidu.com/viewlog', params=data_second_dstk, headers=headers)
    content2 = re.findall('.*?\((.*?)\)$', response.text)[0]
    content2 = json.loads(content2)
    content2 = content2['data']
    # 第二次请求viewlog


    data = {
        "staticpage": "http://index.baidu.com/v2/static/passport/v3Jump.html",
        "charset": "utf-8",
        "token": token,
        "tpl": "nx",
        "subpro": "",
        "apiver": "v3",
        "tt": int(time.time() * 1000),
        "codestring": "",
        "safeflg": "0",
        "u": "http://index.baidu.com/?tpl=login&redirect=http%3A%2F%2Findex.baidu.com%2Fv2%2Findex.html%23%2F",
        "isPhone": "",
        "detect": "1",
        "gid": get_gid(),
        "quick_user": "0",
        "logintype": "basicLogin",
        "logLoginType": "pc_basicLogin",
        "idc": "",
        "mkey": "",
        "loginmerge": "true",
        "username": username,
        "password": passwd,
        "mem_pass": "on",
        "rsakey": key,
        "crypttype": 12,
        "ppui_logintime": 8764,
        "countrycode": "",
        "fp_uid": "",
        "fp_info": "",
        "supportdv": "1",
        "ds": content2['ds'],
        "tk": content2['tk'],
        "dv": get_dv(),
        "extrajson": "",
        'fuid': "FOCoIC3q5fKa8fgJnwzbE67EJ49BGJeplOzf+4l4EOvDuu2RXBRv6R3A1AZMa49I27C0gDDLrJyxcIIeAeEhD8JYsoLTpBiaCXhLqvzbzmvy3SeAW17tKgNq/Xx+RgOdb8TWCFe62MVrDTY6lMf2GrfqL8c87KLF2qFER3obJGnAsbibcn5ack0BwYnHSkDquG9bVVVHYAXpUYJ0Gz/cjDgkEzvTndD5TIJMSPsWB3j7azSWJmndwgxbn1raawTLLNpFNI4UdwxNs00/rzmto+1GndupQWBh42Q/dotBPmRiMCHwDzJ+36zcHhG0pG7xXOMFhzdVk7wLcUko9/9Wk2o5+u8MmuLwtWfGsGcBRSpw7VjnwyAujMqdpAhot9ZEgzimn27UHu3ZjxLFAf9eelIjIiyKdCCs8GFWKPsmSuq3srmNqss5Z8Pib9zOtxZfd5M2RtLZ6XQnb6lvKhclvZAMY6hD6NV2hb1GxsKYhanIXnnIkSO22UutZs8Cyb0+eFyFpJLbuE2Ollwun8iq6E75S1+ewTrtpKL6/CAiixL/gmE5X42pRWowiO0/OGtF+/geIrmTvn+xVA1gAbbf1lkKhylX1zGsOVlJip30kecMEGvjdNWpsel/qfsfe5JBpqDTksMVoBr7nszRboiUHbedcq1mi/UXvX2b3lxbCLu4KolXBxJldrkn2iDpkVQOiLETSFloIVkHdy3+I2JUr1LsplAz0hMkWt/tE4tXVUV7QcTDTZWS/2mCoS/GV3N9awQ6iM6hs/BWjlgnEa1+5jnb+Qs1HlH5UnJ52Bca7MFyA0vkGn1SqVrmeuZ/fgr05FKazXcZ/j40FJv+iLGBn3nkkgHlne61I8I7KhtQgIlMsqLMBtXw2Dg9b3t+spd2ehkdz1RzKClZ1jwpcc+I6uVVSgDer1SVxMp5Y/x4LS4cdLaJXUNu3pqVmRtfPj+wRHelTudApmj/iQ/1fJwiv8mDdcxFKeoIFQmVqAoAU+3YcXQt2xKThZZyV1v3sCvnzidUZtKM9cRRUfRWBtQSb50APM+gs/408xg7KHCB8AOKpZpfIpPhQ0RJhew8GR0aTqYsJo1IRCwM3UbbrvtJ7eqPMNzJcGcSYcQWm1FubInMonve94c+p8Vi2wc72MfReeFiTzMp1G6pDt2e40gPDGbdQI+jba4UjRlyA+9CbTW6Mt45W/80hW/gFEKh9+Klyky6FPenbJgt/vQK9TAiTA==",
        "traceid": get_traceid(),
        "callback": get_callback_p(),
}
    data.update(get_params(data=data))
    for key in data:
        if not isinstance(data[key], str):
            data[key] = str(data[key])

    session = requests.session()
    response = session.post('https://passport.baidu.com/v2/api/?login', data=data, headers=headers)

    print(response.cookies)
    print(response.text)


if __name__ == '__main__':
    login(username='',password='')

