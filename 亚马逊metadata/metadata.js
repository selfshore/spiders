var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    , d = /[\t\n\f\r ]/g,
    h = {
        encode: function (e) {
            e = String(e),
            /[^\0-\xFF]/.test(e) && a("The string to be encoded contains characters outside of the Latin1 range.");
            for (var t, r, o, n, d = e.length % 3, h = "", i = -1, f = e.length - d; ++i < f;)
                t = e.charCodeAt(i) << 16,
                    r = e.charCodeAt(++i) << 8,
                    o = e.charCodeAt(++i),
                    h += c.charAt((n = t + r + o) >> 18 & 63) + c.charAt(n >> 12 & 63) + c.charAt(n >> 6 & 63) + c.charAt(63 & n);
            return 2 == d ? (t = e.charCodeAt(i) << 8,
                r = e.charCodeAt(++i),
                h += c.charAt((n = t + r) >> 10) + c.charAt(n >> 4 & 63) + c.charAt(n << 2 & 63) + "=") : 1 == d && (n = e.charCodeAt(i),
                h += c.charAt(n >> 2) + c.charAt(n << 4 & 63) + "=="),
                h
        },
        decode: function (e) {
            var t = (e = String(e).replace(d, "")).length;
            t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
            (t % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(e)) && a("Invalid character: the string to be decoded is not correctly encoded.");
            for (var r, o, n = 0, h = "", i = -1; ++i < t;)
                o = c.indexOf(e.charAt(i)),
                    r = n % 4 ? 64 * r + o : o,
                n++ % 4 && (h += String.fromCharCode(255 & r >> (-2 * n & 6)));
            return h
        },
        version: "0.1.0"
    };
var M = function () {
    var _0Q = ['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65', '\x65\x6e\x63\x6f\x64\x65', 14507];

    function e() {
        var _zszZZzS2 = _0Q[2];
    }

    return e[_0Q[0]][_0Q[1]] = function (e) {
        var _Qo = ['\x65\x6e\x63\x6f\x64\x65'];
        return h[_Qo[0]](e);
    }
        ,
        e;
}();

function doEncrypt(r, t) {
    var _LiI = [24, '\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74', 16, 52, '\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65', '\x6c\x69\x73\x74\x55\x73\x65\x72\x61\x67\x65\x6e\x74\x49\x64', 0, 4, 8, 6, '\x6c\x65\x6e\x67\x74\x68', '\x63\x65\x69\x6c', '\x66\x6c\x6f\x6f\x72', '\x6a\x6f\x69\x6e', 2654435769, 255, 2, 3, 5, 1];
    if (_LiI[6] === r[_LiI[10]])
        return '';
    for (var e = Math[_LiI[11]](r[_LiI[10]] / _LiI[7]), o = [], i = _LiI[6]; i < e; i++)
        o[i] = (_LiI[15] & r[_LiI[1]](_LiI[7] * i)) + ((_LiI[15] & r[_LiI[1]](_LiI[7] * i + _LiI[19])) << _LiI[8]) + ((_LiI[15] & r[_LiI[1]](_LiI[7] * i + _LiI[16])) << _LiI[2]) + ((_LiI[15] & r[_LiI[1]](_LiI[7] * i + _LiI[17])) << _LiI[0]);
    var _0QO0QoQO = _LiI[5];
    for (var n = Math[_LiI[12]](_LiI[9] + _LiI[3] / e), a = o[_LiI[6]], c = o[e - _LiI[19]], d = _LiI[6]; n-- > _LiI[6];)
        for (var h = (d += _LiI[14]) >>> _LiI[16] & _LiI[17], u = _LiI[6]; u < e; u++)
            a = o[(u + _LiI[19]) % e],
                c = o[u] += (c >>> _LiI[18] ^ a << _LiI[16]) + (a >>> _LiI[17] ^ c << _LiI[7]) ^ (d ^ a) + (t[_LiI[17] & u ^ h] ^ c);
    for (var f = [], s = _LiI[6]; s < e; s++)
        f[s] = String[_LiI[4]](_LiI[15] & o[s], o[s] >>> _LiI[8] & _LiI[15], o[s] >>> _LiI[2] & _LiI[15], o[s] >>> _LiI[0] & _LiI[15]);
    return f[_LiI[13]]('');
}

function encrypt(r) {
    var base64encode = new M();
    return "ECdITeCs" + ":" + base64encode.encode(doEncrypt(r, [1888420705, 2576816180, 2347232058, 874813317]))
}

function utf8encode(r) {
    for (var o = [], t = 0; t < r["length"]; t++) {
        var e = r["charCodeAt"](t);
        e < 128 ? o["push"](String["fromCharCode"](e)) : e >= 128 && e < 2048 ? (o["push"](String["fromCharCode"](e >> 6 | 192)), o["push"](String["fromCharCode"](63 & e | 128))) : (o["push"](String["fromCharCode"](e >> 12 | 224)), o["push"](String["fromCharCode"](e >> 6 & 63 | 128)), o["push"](String["fromCharCode"](63 & e | 128)));
    }

    return o["join"]("");
}

function hexencode(t) {
    return ["0123456789ABCDEF"["charAt"](t >>> 28 & 15), "0123456789ABCDEF"["charAt"](t >>> 24 & 15), "0123456789ABCDEF"["charAt"](t >>> 20 & 15), "0123456789ABCDEF"["charAt"](t >>> 16 & 15), "0123456789ABCDEF"["charAt"](t >>> 12 & 15), "0123456789ABCDEF"["charAt"](t >>> 8 & 15), "0123456789ABCDEF"["charAt"](t >>> 4 & 15), "0123456789ABCDEF"["charAt"](15 & t)]["join"]("");
}

var L = function () {
    var _Li1 = ['\x63\x61\x6c\x63\x75\x6c\x61\x74\x65', '\x49\x45\x45\x45\x5f\x50\x4f\x4c\x59\x4e\x4f\x4d\x49\x41\x4c', '\x6c\x69\x73\x74', '\x70\x72\x6f\x74\x6f\x74\x79\x70\x65', 3988292384, '\x62\x41', '\x62\x75\x69\x6c\x64\x43\x72\x63\x54\x61\x62\x6c\x65'];
    var _s2$zzZZ2 = _Li1[5]
        , _O0QQoO0Q = _Li1[2];

    function r() {
    }

    return r[_Li1[3]][_Li1[6]] = function () {
        var _0oQ = [1, 8, 0, '\x49\x45\x45\x45\x5f\x50\x4f\x4c\x59\x4e\x4f\x4d\x49\x41\x4c', 256, '\x63\x72\x63\x54\x61\x62\x6c\x65'];
        this[_0oQ[5]] = [];
        for (var t = _0oQ[2]; t < _0oQ[4]; t++) {
            for (var e = t, c = _0oQ[2]; c < _0oQ[1]; c++)
                _0oQ[0] == (_0oQ[0] & e) ? e = e >>> _0oQ[0] ^ r[_0oQ[3]] : e >>>= _0oQ[0];
            this[_0oQ[5]][t] = e;
        }
    }
        ,
        r[_Li1[3]][_Li1[0]] = function (r) {
            var _OQQ = ['\x62\x75\x69\x6c\x64\x43\x72\x63\x54\x61\x62\x6c\x65', 0, 8, '\x6c\x65\x6e\x67\x74\x68', 255, '\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74', '\x63\x72\x63\x54\x61\x62\x6c\x65', 4294967295];
            this[_OQQ[6]] || this[_OQQ[0]]();
            var t, e = _OQQ[1];
            e ^= _OQQ[7];
            for (var c = _OQQ[1]; c < r[_OQQ[3]]; c++)
                t = _OQQ[4] & (e ^ r[_OQQ[5]](c)),
                    e = e >>> _OQQ[2] ^ this[_OQQ[6]][t];
            return _OQQ[7] ^ e;
        }
        ,
        r[_Li1[1]] = _Li1[4],
        r;
}();

function encode(t) {
    crc = new L();
    var c = utf8encode(JSON.stringify(t));
    return hexencode(crc["calculate"](c)) + "#" + c;
}

function generate_lsubid() {
    var t = 4022871197;
    function e(e) {
        e = typeof e === undefined || null === e ? "" : e["toString"]();

        for (var r = 0; r < e["length"]; r++) {
            var n = 0.02519603282416938 * (t += e["charCodeAt"](r));
            n -= t = n >>> 0, t = (n *= t) >>> 0, t += 4294967296 * (n -= t);
        }

        return 2.3283064365386963e-10 * (t >>> 0);
    }

    var r = e(" "),
        n = e(" "),
        i = e(" "),
        o = 1,
        a = [body, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36", new Date()["getTime"]()];

    for (var u in a) {
        a["hasOwnProperty"](u) && ((r -= e(a[u])) < 0 && (r += 1), (n -= e(a[u])) < 0 && (n += 1),
        (i -= e(a[u])) < 0 && (i += 1));
    }

    function s(t) {
        return ("0000000000" + (4294967296 * (e = 2091639 * r + 2.3283064365386963e-10 * o, r = n, n = i, i = e - (o = 0 | e)))["toString"]())["slice"](-t);
    }

    return "X" + s(2) + "-" + s(7) + "-" + s(7) + ":" + Math["floor"](new Date()["getTime"]() / 1000);
}

//body = document.body.innerHTML 当前页面的body
function get_metadata(body) {
    t = {
    "metrics": {"tz": 404, "fp2": 4749, "lsubid": 2875, "browser": 5854},
    "start": (new Date()).getTime(),
    "timeZone": 8,
    "flashVersion": null,
    "plugins": "Chrome PDF Plugin Chrome PDF Viewer Native Client ||1920-1080-1050-24-*-*-*",
    "dupedPlugins": "Chrome PDF Plugin Chrome PDF Viewer Native Client ||1920-1080-1050-24-*-*-*",
    "screenInfo": "1920-1080-1050-24-*-*-*",
    "lsUbid": generate_lsubid(body),
    "referrer": "https://www.amazon.com/gp/yourstore/home?ie=UTF8&action=sign-out&language=zh&path=%2Fgp%2Fyourstore%2Fhome&ref_=nav_AccountFlyout_signout&signIn=1&useRedirectOnSuccess=1&",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36",
    "location": "https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26action%3Dsign-out%26path%3D%252Fgp%252Fyourstore%252Fhome%26ref_%3Dnav_AccountFlyout_signout%26signIn%3D1%26useRedirectOnSuccess%3D1",
    "webDriver": null,
    "errors": [],
    "version": "4.0.0"
    }
    return encrypt(encode(t))
}
