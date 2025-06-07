from curl_cffi import requests
import execjs


class XHS:
    def __init__(self):
        with open("xhs.js", "r", encoding="utf-8") as file:
            content = file.read()
        self.ctx = execjs.compile(content)
        self.headers = {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'pragma': 'no-cache',
            'priority': 'u=0, i',
            'referer': 'https://www.xiaohongshu.com/',
            'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        }
        self.a1 = ""
        self.x_t = ""
        self.cookies = {}

    def __getAbRequestId(self):
        response = requests.get('https://www.xiaohongshu.com/explore', headers=self.headers)
        self.cookies.update(response.cookies)

    def __getSessionId(self):
        [x_t, x_s, x_s_common, a1, webid] = self.ctx.call("allArg", "/api/sns/web/v1/login/activate", {})
        self.a1 = a1
        self.x_t = x_t
        self.cookies.update({
            'a1': a1,
            'webId': webid,
        })
        self.headers.update({
            'Host': 'edith.xiaohongshu.com',
            'x-t': x_t,
            'x-s-common': x_s_common,
            'accept': 'application/json, text/plain, */*',
            'content-type': 'application/json;charset=UTF-8',
            'x-s': x_s,
            'x-mns': 'unload'
        })
        json_data = {}
        response = requests.post(
            'https://edith.xiaohongshu.com/api/sns/web/v1/login/activate',
            cookies=self.cookies,
            headers=self.headers,
            json=json_data,
        )
        self.cookies = response.cookies

    def __homefeed(self):
        json_data = {
            'cursor_score': '',
            'num': 30,
            'refresh_type': 1,
            'note_index': 32,
            'unread_begin_note_id': '',
            'unread_end_note_id': '',
            'unread_note_count': 0,
            'category': 'homefeed_recommend',
            'search_key': '',
            'need_num': 10,
            'image_formats': [
                'jpg',
                'webp',
                'avif',
            ],
            'need_filter_image': False,
        }
        [x_t, x_s, x_s_common, a1, webid] = self.ctx.call("allArg", "/api/sns/web/v1/homefeed", json_data, self.a1,
                                                          self.x_t)
        self.headers.update({
            'x-t': x_t,
            'x-s-common': x_s_common,
            'x-s': x_s,
        })
        response = requests.post('https://edith.xiaohongshu.com/api/sns/web/v1/homefeed', cookies=self.cookies,
                                 headers=self.headers, json=json_data)
        return response.text

    def run(self):
        self.__getAbRequestId()
        self.__getSessionId()
        return self.__homefeed()


if __name__ == '__main__':
    crawler = XHS()
    print(crawler.run())
