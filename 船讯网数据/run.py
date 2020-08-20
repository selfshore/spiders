import time

import execjs
import requests


def get_vector_data():
    headers = {
        'Host': 'www.shipxy.com',
        'Referer': 'http://www.shipxy.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36'
    }
    data = {"scode": "417149",
            "level": "11",
            "area": "121106414,38873869,122424774,39083429",
            "enc": "0",
            "src": "0",
            "_t": str(int(time.time() * 1000))
            }
    r = requests.get('http://www.shipxy.com/ship/getareashipssimple', params=data, headers=headers)
    data = r.json()["data"]
    with open('demix.js', 'r')as f:
        content = f.read()
    ctx = execjs.compile(content)
    result = ctx.call('p', data, 1)
    return result


if __name__ == '__main__':
    print(get_vector_data())
