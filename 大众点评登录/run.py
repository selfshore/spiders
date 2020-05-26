import execjs
import requests

def get_cookie(user,pwd):
    url = "https://account.dianping.com/account/ajax/checkRisk?riskChannel=201&user=" + user
    with open('gettk.js', 'r')as f:
        content = f.read()
    arr = []
    ctx = execjs.compile(content)
    res = ctx.call('get', arr, url)
    data = {
        'riskChannel': '201',
        'user': user,
        '_token': res
    }
    headers = {
                "Host":"account.dianping.com",
                "Origin":"https://account.dianping.com",
                "Referer":'http://www.dianping.com/',
                "User-Agent":"Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/81.0.4044.138Safari/537.36"
    }
    r = requests.post('https://account.dianping.com/account/ajax/checkRisk',data=data,headers=headers,verify=False)
    publickey = r.json()["msg"]["publicKey"]
    uuid = r.json()["msg"]['uuid']
    with open('temp.js', 'r', encoding='utf-8')as f:
        content = f.read()
    ctx2 = execjs.compile(content)
    res = ctx2.call('ep', publickey, str([pwd, uuid]))
    # cuid = ctx2.call('cuid')  这两个cookie参数必要，不要后面爬数据没结果。不属于登录部分，所以注释
    # s= ctx2.call('Vi')
    url = "https://account.dianping.com/account/ajax/passwordLogin?countrycode=86&username=%s&keepLogin=on&encryptPassword=%s" %(user, res)
    _token = ctx.call('get', arr, url)
    data = {
        "countrycode":"86",
        "username": user,
        "keepLogin": "on",
        "encryptPassword": res,
        "_token": _token
    }
    r = requests.post('https://account.dianping.com/account/ajax/passwordLogin',data=data,headers=headers,verify=False)
    print(r.cookies)

if __name__ == '__main__':
    get_cookie('', '')

