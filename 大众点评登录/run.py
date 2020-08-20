import random

import execjs
import requests


def get_track():
    a = [0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 32]
    b = [0, 1, 1, 1, 1, -1, -2, -3, -5, -7, -8, -9, -10, -11, -13, -15, -18, -21, -27, -34, -41, -49, -58, -66, -74,
         -80, -86, -89, -91, -94]
    init_x = random.randint(135, 139)
    init_y = random.randint(240, 244)
    track = []
    for i in a:
        track.append(str(init_x + i) + ',' + str(init_y + b[a.index(i)]))
    return track


def get_cookie(user, pwd):
    mT = get_track()
    aT = [mT[0] + ",BUTTON", "217,55,A", "144,331,SPAN"]
    url = "https://account.dianping.com/account/ajax/checkRisk?riskChannel=201&user=" + user
    with open('gettk.js', 'r')as f:
        content = f.read()
    arr = []
    ctx = execjs.compile(content)
    res = ctx.call('get', arr, url, mT, aT)
    data = {
        'riskChannel': '201',
        'user': user,
        '_token': res
    }
    headers = {
        "Host": "account.dianping.com",
        "Origin": "https://account.dianping.com",
        "Referer": 'http://www.dianping.com/',
        "User-Agent": "Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/81.0.4044.138Safari/537.36"
    }
    r = requests.post('https://account.dianping.com/account/ajax/checkRisk', data=data, headers=headers)
    publickey = r.json()["msg"]["publicKey"]
    uuid = r.json()["msg"]['uuid']
    with open('temp.js', 'r', encoding='utf-8')as f:
        content = f.read()
    ctx2 = execjs.compile(content)
    res = ctx2.call('ep', publickey, str([pwd, uuid]))
    # cuid = ctx2.call('cuid')  这两个cookie参数必要，不要后面爬数据没结果。不属于登录部分，所以注释
    # s= ctx2.call('Vi')
    url = "https://account.dianping.com/account/ajax/passwordLogin?countrycode=86&username=%s&keepLogin=on&encryptPassword=%s" % (
    user, res)
    _token = ctx.call('get', arr, url, mT, aT)
    data = {
        "countrycode": "86",
        "username": user,
        "keepLogin": "on",
        "encryptPassword": res,
        "_token": _token
    }
    r = requests.post('https://account.dianping.com/account/ajax/passwordLogin', data=data, headers=headers)
    print(r.text)
    print(r.cookies)


if __name__ == '__main__':
    get_cookie('', '')
