import execjs
import requests
from lxml import etree
from requests.utils import dict_from_cookiejar


def login(username, password):
    headers = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, li'
                             'ke Gecko) Chrome/83.0.4103.61 Safari/537.36 Edg/83.0.478.37'}
    index_res = requests.get('https://www.zhihu.com/signin?next=%2F', headers=headers, verify=False)
    cookie = dict_from_cookiejar(index_res.cookies)
    xsrf = cookie.get('_xsrf')
    script = etree.HTML(index_res.text).xpath('//script/text()')[2]
    with open('imm_c.js', 'r')as f:
        js = f.read()
    ctx = execjs.compile(js)
    sessionid = ctx.call('c')
    with open('temp.js', 'r')as f:
        content = f.read()
    ctx = execjs.compile(content)
    xabaparam = ctx.call('param', script)

    headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
        'x-xsrftoken': xsrf,
        'x-zse-83': '3_2.0',
        'x-zse-86': '1.0_a0F8609yUqxxk0N0h9x02Qeqk72XQ8F0f0xq27LqeX2X'
    }
    for i in range(2):
        uuid_first_r = requests.post('https://www.zhihu.com/udid', headers=headers, cookies=cookie, verify=False)
    cookie.update(dict_from_cookiejar(uuid_first_r.cookies))
    xzse86 = ctx.call('get_86', cookie['d_c0'])[:-4]

    headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
        'x-requested-with': 'fetch',
        'x-zse-83': '3_2.0',
        'x-zse-86': xzse86,
        'x-ab-param': xabaparam
    }
    captcha_r = requests.get('https://www.zhihu.com/api/v3/oauth/captcha?lang=en', headers=headers, cookies=cookie,
                             verify=False)
    print(captcha_r.text)
    cookie.update(dict_from_cookiejar(captcha_r.cookies))
    r_param = ctx.call('r_param', sessionid)

    headers = {
        'content-type': 'text/plain;charset=UTF-8',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
        'x-requested-with': 'fetch',
        'x-zse-83': '3_2.0',
    }
    r_r = requests.post('https://www.zhihu.com/zbst/events/r', data=r_param, headers=headers, cookies=cookie,
                        verify=False)
    print(r_r.text)

    arg_list = ctx.call('get_c', r_r.json()["nonce"], sessionid)
    cookie.update({'JOID': arg_list[1][5:], 'osd': arg_list[2], 'SESSIONID': sessionid})
    x86 = ctx.call('get_86', cookie['d_c0'], arg_list[0])[:-4]
    headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
        'x-requested-with': 'fetch',
        'x-zse-83': '3_2.0',
        'x-zse-86': x86,
        'x-ab-param': xabaparam,
        'x-zst-81': arg_list[0]
    }
    r = requests.get('https://www.zhihu.com/api/v3/oauth/captcha?lang=cn', headers=headers, cookies=cookie,
                     verify=False)
    cookie.update(dict_from_cookiejar(r.cookies))
    formdata = ctx.call('p', username, password)
    headers = {
        'content-type': 'application/x-www-form-urlencoded',
        'origin': 'https://www.zhihu.com',
        'referer': 'https://www.zhihu.com/signin?next=%2F',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
        'x-xsrftoken': xsrf,
        'x-zse-83': '3_2.0',
        'x-requested-with': 'fetch',
        'x-ab-param': xabaparam,
    }
    r = requests.post('https://www.zhihu.com/api/v3/oauth/sign_in', data=formdata, headers=headers, cookies=cookie,
                      verify=False)

    print(r.text)
    print(r.cookies)


if __name__ == '__main__':
    login('', '')
