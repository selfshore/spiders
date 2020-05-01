const CryptoJS = require('crypto-js');
function ent(e,nameL) {
    var t = nameL + "appsapi0"
        , n = CryptoJS.enc.Utf8.parse(t)
        , i = CryptoJS.enc.Utf8.parse(e)
        , o = CryptoJS.AES.encrypt(i, n, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return o.toString()
}
var time = (new Date()).getTime()
// var msg = `{"cl":[{"x":883,"y":149,"t":${time}},{"x":919,"y":233,"t":${time + 539}},{"x":899,"y":62,"t":${time + 1508}},{"x":905,"y":29,"t":${time + 1872}}],"mv":[{"fx":1009,"fy":19,"t":${time - 1293}},{"fx":947,"fy":245,"t":${time - 552}},{"fx":963,"fy":193,"t":${time - 395}},{"fx":916,"fy":150,"t":${time - 238}},{"fx":884,"fy":149,"t":${time + 160}},{"fx":917,"fy":224,"t":${time + 318}},{"fx":918,"fy":235,"t":${time + 911}},{"fx":897,"fy":250,"t":${time + 1067}},{"fx":901,"fy":128,"t":${time + 1225}},{"fx":898,"fy":63,"t":${time + 1690}},{"fx":904,"fy":31,"t":${time + 2095}},{"fx":906,"fy":46,"t":${time + 2267}},{"fx":909,"fy":59,"t":${time + 2424}},{"fx":914,"fy":71,"t":${time + 2582}},{"fx":914,"fy":76,"t":${time + 3175}},{"fx":917,"fy":164,"t":${time + 3332}}],"sc":[],"kb":[{"key":"a","t":${time + 2285}}],"cr":{"screenTop":23,"screenLeft":0,"clientWidth":1905,"clientHeight":257,"screenWidth":1920,"screenHeight":1080,"availWidth":1920,"availHeight":1008,"outerWidth":1920,"outerHeight":991,"scrollWidth":1905,"scrollHeight":1905},"ac_c":0,"simu":0}`
var msg = `{"cl":[{"x":972,"y":236,"t":${time}}],"mv":[{"fx":989,"fy":238,"t":${time - 460}},{"fx":987,"fy":239,"t":${time - 449}},{"fx":986,"fy":241,"t":${time - 444}},{"fx":984,"fy":242,"t":${time - 434}},{"fx":984,"fy":243,"t":${time - 427}},{"fx":983,"fy":245,"t":${time - 419}},{"fx":982,"fy":246,"t":${time - 400}},{"fx":981,"fy":246,"t":${time -328}},{"fx":980,"fy":246,"t":${time -315}},{"fx":979,"fy":245,"t":${time - 310}},{"fx":978,"fy":244,"t":${time - 302}},{"fx":977,"fy":243,"t":${time - 294}},{"fx":975,"fy":241,"t":${time - 285}},{"fx":975,"fy":240,"t":${time - 278}},{"fx":974,"fy":239,"t":${time - 268}},{"fx":973,"fy":238,"t":${time - 262}},{"fx":973,"fy":237,"t":${time - 248}},{"fx":973,"fy":236,"t":${time - 240}},{"fx":972,"fy":236,"t":${time - 223}}], "sc":[], "kb":[], "simu":0, "cr":{"screenTop":23,"screenLeft":0,"clientWidth":1905,"clientHeight":257,"screenWidth":1920,"screenHeight":1080,"availWidth":1920,"availHeight":1008,"outerWidth":1920,"outerHeight":991,"scrollWidth":1905,"scrollHeight":1905}, "ac_c":0}`
function result(nameL) {
    return ent(msg,nameL)
}