import re
import time

import execjs
import requests
from requests.utils import dict_from_cookiejar


def airplane(depart, arrival, departureTime, ArrivalTime):
    city_dict = {"北京": "PEK", "上海": "SHA", "重庆": "CKG", "昆明": "KMG", "成都": "CTU", "西安": "XIY", "深圳": "SZX", "厦门": "XMN",
                 "杭州": "HGH", "青岛": "TAO", "哈尔滨": "HRB", "郑州": "CGO", "广州": "CAN", "海口": "HAK", "贵阳": "KWE",
                 "长沙": "CSX",
                 "乌鲁木齐": "URC", "济南": "TNA", "天津": "TSN", "南京": "NKG", "阿克苏": "AKU", "安庆": "AQG", "阿勒泰": "AAT",
                 "安康": "AKA", "鞍山": "AOG", "阿坝": "AHJ", "安顺": "AVA", "阿尔山": "YIE", "阿里": "NGQ", "阿拉善右旗": "RHT",
                 "阿拉善左旗": "AXF", "澳门": "MFM", "包头": "BAV", "北海": "BHY", "保山": "BSD", "百色": "AEB", "巴彦淖尔": "RLK",
                 "毕节": "BFJ", "博乐": "BPL", "白城": "DBC", "长春": "CGQ", "常州": "CZX", "常德": "CGD", "长治": "CIH", "赤峰": "CIF",
                 "朝阳": "CHG", "长白山": "NBS", "池州": "JUH", "昌都": "BPX", "承德": "CDE", "长海": "CNI", "沧源": "CWJ",
                 "大连": "DLC",
                 "丹东": "DDG", "大理": "DLU", "大同": "DAT", "东营": "DOY", "敦煌": "DNH", "达州": "DAX", "达县(达州)": "DAX", "大庆":
                     "DQA", "稻城": "DCY", "德令哈": "HXD", "恩施": "ENH", "鄂尔多斯": "DSN", "二连浩特": "ERL", "额济纳旗": "EJN",
                 "福州": "FOC", "阜阳": "FUG", "富蕴": "FYN", "佛山": "FUO", "抚远": "FYJ", "桂林": "KWL", "赣州": "KOW", "广元": "GYS",
                 "格尔木": "GOQ", "广汉": "GHN", "固原": "GYU", "果洛": "GMQ", "甘南(夏河)": "GXH", "高雄": "KHH", "光化": "LHK",
                 "合肥": "HFE", "呼和浩特": "HET", "海拉尔": "HLD", "邯郸": "HDG", "黄山": "TXN", "和田": "HTN", "惠州": "HUZ",
                 "汉中": "HZG", "黄龙(九寨沟)": "JZH", "衡阳": "HNY", "黑河": "HEK", "哈密": "HMI", "淮安": "HIA", "河池": "HCJ",
                 "怀化": "HJJ", "恒春": "HCN", "花莲": "HUN", "黄岩(台州)": "HYN", "花土沟": "HTT", "霍林郭勒": "HUO", "揭阳": "SWA",
                 "佳木斯": "JMU", "景洪(西双版纳)": "JHG", "锦州": "JNZ", "景德镇": "JDZ", "九江": "JIU", "济宁": "JNG", "井冈山": "JGS",
                 "吉安(井冈山)": "JGS", "嘉峪关": "JGN", "九寨沟": "JZH", "加格达奇": "JGD", "鸡西": "JXA", "金昌": "JIC", "金门": "KNH",
                 "嘉义": "CYI", "晋江(泉州)": "JJN", "建三江": "JSJ", "喀什": "KHG", "库尔勒": "KRL", "库车": "KCA", "克拉玛依": "KRY",
                 "喀纳斯": "KJI", "康定": "KGT", "凯里": "KJH", "兰州": "LHW", "丽江": "LJG", "拉萨": "LXA", "柳州": "LZH",
                 "洛阳": "LYA",
                 "连云港": "LYG", "临沂": "LYI", "泸州": "LZO", "临沧": "LNJ", "黎平": "HZH", "荔波": "LLB", "梁平": "LIA",
                 "临汾": "LFQ",
                 "林芝": "LZY", "吕梁": "LLV", "六盘水": "LPF", "绿岛": "GNI", "兰屿": "KYD", "林西": "LXI", "澜沧": "JMJ",
                 "连城": "LCX",
                 "牡丹江": "MDG", "绵阳": "MIG", "满洲里": "NZH", "芒市": "LUM", "梅县": "MXZ", "漠河": "OHE", "马祖": "MFK",
                 "马公": "MZG",
                 "南宁": "NNG", "宁波": "NGB", "南昌": "KHN", "南阳": "NNY", "南通": "NTG", "南充": "NAO", "宁蒗": "NLH",
                 "攀枝花": "PZI",
                 "普洱": "SYM", "屏东": "PIF", "齐齐哈尔": "NDG", "秦皇岛": "BPE", "衢州": "JUZ", "庆阳": "IQN", "且末": "IQM",
                 "黔江": "JIQ",
                 "琼海": "BAR", "七美": "CMJ", "泉州": "JJN", "日喀则": "RKZ", "日照": "RIZ", "沈阳": "SHE", "三亚": "SYX",
                 "石家庄": "SJW",
                 "思茅(普洱)": "SYM", "松原": "YSQ", "十堰": "WDS", "神农架": "HPG", "石河子": "SHF", "上饶": "SQD", "三明": "SQJ",
                 "三沙": "XYI", "邵阳": "WGN", "莎车": "QSZ", "太原": "TYN", "通辽": "TGO", "铜仁": "TEN", "塔城": "TCG", "通化": "TNH",
                 "唐山": "TVS", "吐鲁番": "TLQ", "腾冲": "TCZ", "天水": "THQ", "台北": "TPE", "台南": "TNN", "台东": "TTT",
                 "台中": "RMQ",
                 "台州": "HYN", "泰州(扬州)": "YTY", "武汉": "WUH", "温州": "WNZ", "无锡": "WUX", "威海": "WEH", "万州": "WXN",
                 "万县(万州)": "WXN", "潍坊": "WEF", "武夷山": "WUS", "乌海": "WUA", "乌兰浩特": "HLH", "梧州": "WUZ", "文山": "WNH",
                 "乌兰察布": "UCB", "望安": "WOT", "乌拉特中旗": "WZQ", "西宁": "XNN", "徐州": "XUZ", "西双版纳": "JHG", "西昌": "XIC",
                 "兴义": "ACX", "香格里拉": "DIG", "锡林浩特": "XIL", "襄阳(中国)": "XFN", "襄樊(襄阳)": "XFN", "夏河": "GXH", "忻州": "WUT",
                 "香港": "HKG", "新源": "NLT", "信阳": "XAI", "银川": "INC", "烟台": "YNT", "延吉": "YNJ", "宜昌": "YIH", "义乌": "YIW",
                 "运城": "YCU", "宜宾": "YBP", "榆林": "UYN", "盐城": "YNZ", "伊宁": "YIN", "延安": "ENY", "扬州": "YTY", "伊春": "LDS",
                 "玉树": "YUS", "营口": "YKH", "宜春": "YIC", "永州": "LLF", "珠海": "ZUH", "张家界": "DYG", "湛江": "ZHA",
                 "舟山": "HSN",
                 "昭通": "ZAT", "遵义": "ZYI", "张掖": "YZY", "中卫": "ZHY", "张家口": "ZQZ", "扎兰屯": "NZL"}
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrom"
                             "e/81.0.4044.129 Safari/537.36",
               'csht': '',
               'pre': '',
               'Cache-Control': 'no-cache',
               'Pragma': 'no-cache',
               'Accept-Language': 'zh-CN,zh;q=0.9',
               'Content-Type': 'application/json; charset=utf-8',
               'X-Requested-With': 'XMLHttpRequest',
               'Host': 'flight.qunar.com',
               'Sec-Fetch-Dest': 'empty',
               'Sec-Fetch-Mode': 'cors',
               'Sec-Fetch-Site': 'same-origin',
               'Referer': 'https://flight.qunar.com/site/oneway_list.htm?searchDepartureAirport=%E6%B7%B1%E5%9C%B3&se'
                          'archArrivalAirport=%E4%B8%8A%E6%B5%B7&searchDepartureTime=2020-05-19&searchArrivalTime=20'
                          '20-05-22&nextNDays=0&startSearch=true&fromCode=SZX&toCode=SHA&from=qunarindex&lowestPrice=null',
               'w': '0'
               }
    headers2 = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrom"
                              "e/81.0.4044.129 Safari/537.36"}
    session = requests.session()
    r = session.get('https://www.qunar.com/', headers=headers2)
    data = {
        'jsonpCallback': 'jQuery172023444984329029928_' + str(int(time.time() * 1000)),
        'conf_type': '4',
        'confKey': 'json.trainCalendarConfig',
        '_': str(int(time.time() * 1000))
    }
    r = session.get('https://touch.train.qunar.com/api/train/trainHotConf', headers=headers2, params=data)
    cookie = dict_from_cookiejar(session.cookies)
    fromplace = city_dict[depart]
    toplace = city_dict[arrival]
    url = f"https://flight.qunar.com/site/oneway_list.htm?searchDepartureAirport={depart}&searchArrivalAirport={arrival}&searchDepartureTime={departureTime}&searchArrivalTime={ArrivalTime}&nextNDays=0&startSearch=true&fromCode={fromplace}&toCode={toplace}&from=qunarindex&lowestPrice=null"
    r = session.get(url, headers=headers2)
    with open('header_arg.js', 'r')as f:
        content = f.read()
    ctx = execjs.compile(content)
    headers_arg = ctx.call('res', 'QN48=' + cookie['QN48'])
    content = re.findall('<script>(.*?)encodeURIComponent', r.text)[0].rsplit(';', 1)[0].replace('try{(function(){', '')
    arg1 = content.rsplit('var', 1)[1].strip().split('=')[0]
    arg2 = re.findall('.*var(.*?)=\[\];.*', content)[0]
    encrypt = re.findall('.*?window\[.*?\]=.*?;(function.*?})var', r.text)[1]
    fuc_name = encrypt.split('function', 1)[1].strip().split('(', 1)[0]
    js = 'function res(){' + 'window = {location: {host: "flight.qunar.com",href:"%s",hostname: "flight.qunar.com"}};loca' \
                             'tion = {href: window.location.href};' % url + content + ';' + encrypt + ';return ' + fuc_name \
         + '(' + arg2 + ',' + arg1 + ')' + '}'
    ctx = execjs.compile(js)
    result = ctx.call('res')
    headers['pre'] = result
    headers.update(headers_arg[1])
    data = {
        "departureCity": depart,
        "arrivalCity": arrival,
        "departureDate": departureTime,
        "ex_track": "",
        "__m__": headers_arg[0],
        "st": str(int(time.time() * 1000)),
        "sort": "",
        "_v": "4"
    }
    r = session.get('https://flight.qunar.com/touch/api/domestic/wbdflightlist', headers=headers, params=data)
    t1000 = re.sub('\(new Image\).*?,', '', r.json()['t1000'])
    js = 'function parse(){' + 'window = {open:true, navigator:{webdriver:undefined}};' + 'a=' + r.text + ';b=' + t1000 + ';b(a);return a}'
    ctx = execjs.compile(js)
    data = ctx.call('parse')
    print(data)


if __name__ == '__main__':
    airplane('深圳', '北京', '2020-09-08', '2020-09-10')
