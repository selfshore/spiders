import json
import re
import time
import logging
from urllib import request

import execjs
import requests

from track import slide_track
from gap_distance import get_distance
from recover import img_recover

logging.basicConfig(
    filename='captcha.txt',
    format='%(asctime)s %(message)s',
    datefmt='%m/%d/%Y %I:%M:%S %p',
)


class GeetestCaptcha:
    # https: // www.geetest.com / Register目标网址
    def __init__(self):
        self.headers = {
            "accept": "application/json,text/plain,*/*",
            "accept-encoding": "gzip,deflate,br",
            "accept-language": "zh-CN,zh;q=0.9",
            "cache-control": "no-cache",
            "content-length": "0",
            "origin": "https://www.geetest.com",
            "pragma": "no-cache",
            "referer": "https://www.geetest.com/Register",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "user-agent": "Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/83.0.4103.116Safari/537.36"
        }
        self.gt = None
        self.challenge = None
        self.c = None
        self.s = None
        self.w = None
        self.session = requests.session()

    def __get_gt(self):
        response = requests.post('https://www.geetest.com/api/user/register/register-sms', headers=self.headers)
        try:
            self.gt = response.json()["gt"]
            self.challenge = response.json()["challenge"]
        except Exception as e:
            logging.error('获取gt,challenge失败在get_gt函数处：%s' % e)
            raise e

    def __get_cookie(self):
        data = {
            'gt': self.gt,
            'callback': 'geetest_' + str(int(time.time() * 1000))
        }
        self.session.get('https://api.geetest.com/gettype.php', headers=self.headers, params=data)
        data = {
            'gt': self.gt,
            'challenge': self.challenge,
            'lang': 'zh-cn',
            'pt': '0',
            'w': '',
            'callback': 'geetest_' + str(int(time.time() * 1000))
        }
        self.session.get('https://api.geetest.com/ajax.php', params=data, headers=self.headers)

    def __get_image(self):
        data = {
            "is_next": "true",
            "type": "slide3",
            "gt": self.gt,
            "challenge": self.challenge,
            "lang": "zh-cn",
            "https": "true",
            "protocol": "https://",
            "offline": "false",
            "product": "embed",
            "api_server": "api.geetest.com",
            "isPC": "true",
            "width": "100%",
            "callback": "geetest_" + str(int(time.time() * 1000))
        }
        response = self.session.get('https://api.geetest.com/get.php', params=data, headers=self.headers)
        try:
            ret_data = re.findall('.*?({.*?})\)', response.text)[0]
            ret_data = json.loads(ret_data)
            self.c = ret_data["c"]
            self.s = ret_data["s"]
            self.challenge = ret_data['challenge']
            request.urlretrieve('https://static.geetest.com/' + ret_data["bg"], 'gap.jpg')
            request.urlretrieve('https://static.geetest.com/' + ret_data["fullbg"], 'full.jpg')
        except Exception as e:
            logging.error('不能获取到图片得url,在get_image函数处:%s' % e)
            raise e

    def __get_track(self):
        img_recover()
        distance = get_distance() - 5
        arr_track = slide_track.get(distance) or slide_track.get(distance - 1) or slide_track.get(
            distance + 1) or slide_track.get(distance + 2) or slide_track.get(distance - 2)
        with open('mix.js', 'r', encoding='utf-8')as f:
            content = f.read()
        ctx = execjs.compile(content)
        t = arr_track[-1][0]
        n = arr_track[-1][2]
        detail_track = []
        for i in range(len(arr_track) - 1):
            detail_track.append([arr_track[i + 1][0] - arr_track[i][0], arr_track[i + 1][1] - arr_track[i][1],
                                 arr_track[i + 1][2] - arr_track[i][2]])
        self.w = ctx.call('D', arr_track, detail_track, t, n, self.c, self.s, self.gt, self.challenge)

    def __verify(self):
        data = {
            'gt': self.gt,
            'challenge': self.challenge,
            'lang': 'zh-cn',
            'pt': '0',
            'w': self.w,
            'callback': 'geetest_' + str(int(time.time() * 1000))
        }
        response = self.session.get('https://api.geetest.com/ajax.php', params=data, headers=self.headers)
        print(response.text)

    def run(self):
        self.__get_gt()
        self.__get_cookie()
        self.__get_image()
        self.__get_track()
        self.__verify()


if __name__ == '__main__':
    captcha = GeetestCaptcha()
    captcha.run()
