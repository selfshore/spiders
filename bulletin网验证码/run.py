from urllib import request

import requests

from slide import get_distance


# https://bulletin.cebpubservice.com/VerificationCode/login.html?id=88&url=https://bulletin.cebpubservice.com/xxfbcmses/search/bulletin.html?searchDate=1995-06-24&dates=300&categoryId=88&industryName=&area=&status=&publishMedia=&sourceInfo=&showStatus=&word=
class HKCaptcha:
    def __init__(self):
        self.image_url = 'https://bulletin.cebpubservice.com/captcha/captcha/captchaImage'
        self.veify_url = 'https://bulletin.cebpubservice.com/captcha/captcha/checkCaptcha'
        self.headers = {
            "Accept": "application/json,text/javascript,*/*;q=0.01",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Content-Length": "0",
            "Host": "bulletin.cebpubservice.com",
            "Origin": "https://bulletin.cebpubservice.com",
            "Pragma": "no-cache",
            "Referer": "https://bulletin.cebpubservice.com/VerificationCode/login.html?id=88&url=https://bulletin.cebpubservice.com/xxfbcmses/search/bulletin.html?searchDate=1995-06-24&dates=300&categoryId=88&industryName=&area=&status=&publishMedia=&sourceInfo=&showStatus=&word=",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "User-Agent": "Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/83.0.4103.116Safari/537.36",
            "X-Requested-With": "XMLHttpRequest"
        }
        self.dataToken = None
        self.distance = None
        self.cookie_list = []

    def __get_image(self):
        response = requests.post(self.image_url, headers=self.headers)
        request.urlretrieve(
            'https://bulletin.cebpubservice.com/captcha/captcha/image/' + response.json()["sourceImgName"], 'init.png')
        request.urlretrieve('https://bulletin.cebpubservice.com/captcha/captcha/image/' + response.json()["bigImgName"],
                            'full_gap.png')
        self.dataToken = response.json()["dataToken"]

    def __get_position(self):
        self.distance = get_distance() - 10

    def __verify(self):
        data = {
            'dataToken': self.dataToken,
            'point': self.distance
        }
        response = requests.post(self.veify_url, headers=self.headers, data=data)
        return response.text

    def run(self):
        self.__get_image()
        self.__get_position()
        return self.__verify()


if __name__ == '__main__':
    qq = HKCaptcha()
    print(qq.run())
