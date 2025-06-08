#  Copyright (c) 2025 Yuese. All rights reserved.
# -*- coding: utf-8 -*-
"""
@Author: yuese
@Date: 2025/6/8 16:05
@File: example.py
"""
import json
import os

import execjs
import cv2
import numpy as np
import requests as req
from curl_cffi import requests
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


class Yidun:
    def __init__(self):
        module_dir = os.path.dirname(os.path.abspath(__file__))
        js_path = os.path.join(module_dir, 'ydfp.js')
        self.headers = {
            'Accept': '*/*',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Origin': 'https://www.zhihu.com',
            'Pragma': 'no-cache',
            'Referer': 'https://www.zhihu.com/signin?next=%2F',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
            'content-type': 'text/plain',
            'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
        }
        with open(js_path, "r", encoding="utf-8") as f:
            content = f.read()
        self.ctx = execjs.compile(content)
        self.dt = None
        self.proxies = None
        self.fp = None

    def clear_white(self, img):
        if img.shape[-1] == 4:
            alpha = img[:, :, 3]
            img = cv2.cvtColor(img, cv2.COLOR_BGRA2BGR)
            mask = (alpha > 0).astype(np.uint8) * 255
        else:
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            _, mask = cv2.threshold(255 - gray, 10, 255, cv2.THRESH_BINARY)

        coords = cv2.findNonZero(mask)
        if coords is not None:
            x, y, w, h = cv2.boundingRect(coords)
            return img[y:y + h, x:x + w]
        return img

    def preprocess_image(self, im):
        img = cv2.imdecode(np.array(bytearray(im), dtype='uint8'), cv2.IMREAD_UNCHANGED)
        img = self.clear_white(img)
        _, img_encoded = cv2.imencode('.jpg', img, [int(cv2.IMWRITE_JPEG_QUALITY), 95])
        return img_encoded.tobytes()

    def request_slide_verification(self, bg_path, gap_path):
        bg_img = self.preprocess_image(bg_path)
        gap_img = self.preprocess_image(gap_path)

        files = [
            ('bgImg', ('bg.jpg', bg_img, 'image/jpeg')),
            ('gapImg', ('gap.jpg', gap_img, 'image/jpeg'))
        ]
        api_url = ""
        request_data = {
            "name": "",
            "token": ""
        }
        if not api_url:
            raise Exception("个人接口，要算缺口距离自己处理！！!")
        response = req.post(api_url, files=files, data=request_data, proxies=self.proxies, verify=False)
        response.raise_for_status()
        distance = response.json().get('distance')
        print(f"Calculated Distance: {distance}")
        return distance

    def parse_jsonp_simple(self, jsonp_str):
        """
        通过查找括号位置截取 JSON 数据
        """
        start = jsonp_str.find('(') + 1
        end = jsonp_str.rfind(')')
        json_str = jsonp_str[start:end]
        return json.loads(json_str)

    def __get_captcha_up(self):
        data = self.ctx.call("up")
        data = json.dumps(data, separators=(',', ':'), ensure_ascii=False)

        response = requests.post('https://ir-sdk.dun.163.com/v4/j/up', headers=self.headers, data=data,
                                 proxies=self.proxies, verify=False)

        return response.text

    def __get_config_and_captcha_image(self, text):
        up_json = json.loads(text)
        conf_params = {
            'referer': 'https://www.zhihu.com/signin',
            'zoneId': '',
            'id': 'ffccaa537da544269b4c9c1dc84dcb73',
            'ipv6': 'false',
            'runEnv': '10',
            'iv': '4',
            'loadVersion': '2.5.3',
            'callback': '__JSONP_nxsql63_0',
        }

        response = requests.get('https://c.dun.163.com/api/v2/getconf', params=conf_params, headers=self.headers,
                                proxies=self.proxies, verify=False)
        conf = self.parse_jsonp_simple(response.text)
        self.dt = conf["data"]["dt"]
        self.fp = self.ctx.call("fp")
        cb = self.ctx.call("cb")
        params = {
            'referer': 'https://www.zhihu.com/signin',
            'zoneId': 'CN31',
            'dt': self.dt,
            'irToken': up_json["data"]["tk"],
            'id': 'ffccaa537da544269b4c9c1dc84dcb73',
            'fp': self.fp,
            'https': 'true',
            'type': '',
            'version': '2.28.5',
            'dpr': '2',
            'dev': '1',
            'cb': cb,
            'ipv6': 'false',
            'runEnv': '10',
            'group': '',
            'scene': '',
            'lang': 'zh-CN',
            'sdkVersion': '',
            'loadVersion': '2.5.3',
            'iv': '4',
            'user': '',
            'width': '320',
            'audio': 'false',
            'sizeType': '10',
            'smsVersion': 'v3',
            'token': '',
            'callback': '__JSONP_i_0',
        }
        response = requests.get('https://c.dun.163.com/api/v3/get', params=params, headers=self.headers,
                                proxies=self.proxies, verify=False)
        return response.text

    def __verify(self, text):
        img = self.parse_jsonp_simple(text)
        bg = img["data"]["bg"][0]
        puzzle = img["data"]["bg"][1]
        token = img["data"]["token"]
        bg_content = requests.get(bg, headers=self.headers, proxies=self.proxies).content
        puzzle_content = requests.get(puzzle, headers=self.headers, proxies=self.proxies).content
        distance = self.request_slide_verification(bg_content, puzzle_content)
        if isinstance(distance, str):
            raise Exception("缺口识别错误")
        distance = distance / 480 * 320
        data = self.ctx.call("verify", token, distance)
        cb = self.ctx.call("cb")
        params = {
            'referer': 'https://www.zhihu.com/signin',
            'zoneId': 'CN31',
            'dt': self.dt,
            'id': 'ffccaa537da544269b4c9c1dc84dcb73',
            'token': token,
            'data': data,
            'width': '320',
            'type': '2',
            'version': '2.28.5',
            'cb': cb,
            'user': '',
            'extraData': '',
            'bf': '0',
            'runEnv': '10',
            'sdkVersion': '',
            'loadVersion': '2.5.3',
            'iv': '4',
            'callback': '__JSONP_i_1',
        }

        response = requests.get('https://c.dun.163.com/api/v3/check', params=params, headers=self.headers,
                                proxies=self.proxies, verify=False)
        return response.text

    def run(self, flags=None):
        up_text = self.__get_captcha_up()
        img_text = self.__get_config_and_captcha_image(up_text)
        result = self.__verify(img_text)
        print("结果：", result)
        validateData = self.parse_jsonp_simple(result)
        validate = validateData["data"].get("validate")
        if flags:
            return [validate, self.fp]
        return validate


if __name__ == '__main__':
    captcha = Yidun()
    print(captcha.run())
