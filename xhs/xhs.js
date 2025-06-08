const crypto = require('crypto');
const CryptoJS = require("crypto-js");

function Encrypt(word) {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    const key = CryptoJS.enc.Utf8.parse("7cc4adla5ay0701v");
    const iv = CryptoJS.enc.Utf8.parse("4uzjr7mbsibcaldp");
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.ciphertext.toString();
}

lookup = 'ZmserbBoHQtNP+wOcza/LpngG8yJq42KWYj0DSfdikx3VT16IlUAFM97hECvuRX5'

function tripletToBase64(e) {
    return lookup[e >> 18 & 63] + lookup[e >> 12 & 63] + lookup[e >> 6 & 63] + lookup[63 & e]
}

function encodeChunk(e, t, r) {
    for (var n, o = [], i = t; i < r; i += 3)
        n = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2]),
            o.push(tripletToBase64(n));
    return o.join("")
}

function encodeUtf8(e) {
    for (var t = encodeURIComponent(e), r = [], n = 0; n < t.length; n++) {
        var o = t.charAt(n);
        if ("%" === o) {
            var i = t.charAt(n + 1) + t.charAt(n + 2)
                , a = parseInt(i, 16);
            r.push(a),
                n += 2
        } else
            r.push(o.charCodeAt(0))
    }
    return r
}

function decodeUtf8(encodedBytes) {
    const bytes = new Uint8Array(encodedBytes);
    const decoder = new TextDecoder('utf-8');
    return decoder.decode(bytes);
}

function b64Encode(e) {
    for (var t, r = e.length, n = r % 3, o = [], i = 16383, a = 0, s = r - n; a < s; a += i)
        o.push(encodeChunk(e, a, a + i > s ? s : a + i));
    return 1 === n ? (t = e[r - 1],
        o.push(lookup[t >> 2] + lookup[t << 4 & 63] + "==")) : 2 === n && (t = (e[r - 2] << 8) + e[r - 1],
        o.push(lookup[t >> 10] + lookup[t >> 4 & 63] + lookup[t << 2 & 63] + "=")),
        o.join("")
}

function b64Decode(encodedStr) {
    const revLookup = {};
    for (let i = 0; i < lookup.length; i++) {
        revLookup[lookup[i]] = i;
    }

    const len = encodedStr.length;
    const output = [];
    let a, b, c, d;
    let byte1, byte2, byte3;

    for (let i = 0; i < len; i += 4) {
        const c1 = encodedStr[i];
        const c2 = encodedStr[i + 1];
        const c3 = encodedStr[i + 2];
        const c4 = encodedStr[i + 3];

        a = revLookup[c1];
        b = revLookup[c2];
        c = c3 === '=' ? 0 : revLookup[c3];
        d = c4 === '=' ? 0 : revLookup[c4];

        byte1 = (a << 2) | (b >>> 4);
        byte2 = ((b & 0b1111) << 4) | (c >>> 2);
        byte3 = ((c & 0b11) << 6) | d;

        if (c4 === '=') {
            if (c3 === '=') {
                output.push(byte1);
            } else {
                output.push(byte1, byte2);
            }
        } else {
            output.push(byte1, byte2, byte3);
        }
    }

    return output;
}


function rc4(data, key_) {
    let key = key_ || "xhswebmplfbt";
    var box = Array(256)
    for (var i = 0; i < 256; i++) {
        box[i] = i
    }
    var x = 0
    for (var i = 0; i < 256; i++) {
        x = (x + box[i] + key.charCodeAt(i % key.length)) % 256
        var temp = box[i]
        box[i] = box[x]
        box[x] = temp
    }

    var x = 0
    var y = 0
    var out = []
    for (var i = 0; i < data.length; i++) {
        var code = data.charCodeAt(i)

        var x = (x + 1) % 256
        var y = (y + box[x]) % 256
        var temp = box[x]
        box[x] = box[y]
        box[y] = temp

        var k = (box[x] + box[y]) % 256

        out.push(String.fromCharCode(code ^ box[k]))
    }
    return out.join('')
}

function MD5(input) {
    return crypto
        .createHash('md5')
        .update(input)
        .digest('hex');
}

function encrypt_sign(t, e) {
    var n = "A4NjFqYu5wPHsO0XTdDgMa2r1ZQocVte9UJBvk6/7=yRnhISGKblCWi+LpfE8xzm3"
        , r = "test"
        , o = (new Date).getTime();
    return {
        "X-s": function (t) {
            var e, r, o, i, a, u, c, s = "", l = 0;
            for (t = function (t) {
                t = t.replace(/\r\n/g, "\n");
                for (var e = "", n = 0; n < t.length; n++) {
                    var r = t.charCodeAt(n);
                    r < 128 ? e += String.fromCharCode(r) : r > 127 && r < 2048 ? (e += String.fromCharCode(r >> 6 | 192),
                        e += String.fromCharCode(63 & r | 128)) : (e += String.fromCharCode(r >> 12 | 224),
                        e += String.fromCharCode(r >> 6 & 63 | 128),
                        e += String.fromCharCode(63 & r | 128))
                }
                return e
            }(t); l < t.length;)
                i = (e = t.charCodeAt(l++)) >> 2,
                    a = (3 & e) << 4 | (r = t.charCodeAt(l++)) >> 4,
                    u = (15 & r) << 2 | (o = t.charCodeAt(l++)) >> 6,
                    c = 63 & o,
                    isNaN(r) ? u = c = 64 : isNaN(o) && (c = 64),
                    s = s + n.charAt(i) + n.charAt(a) + n.charAt(u) + n.charAt(c);
            return s
        }(MD5([o, r, t, JSON.stringify(e)].join(""))),
        "X-t": o
    }
}


var crc32 = function (e) {
    for (var t, r = [], n = 0; n < 256; n++) {
        t = n;
        for (var o = 0; o < 8; o++)
            t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
        r[n] = t
    }
    for (var i = -1, a = 0; a < e.length; a++)
        i = i >>> 8 ^ r[255 & (i ^ e.charCodeAt(a))];
    return (-1 ^ i) >>> 0
};

function genRandomString(e) {
    var CHARSET = "abcdefghijklmnopqrstuvwxyz1234567890";
    var storage = "";
    for (let i = 0; i < e; i++) {
        storage = storage + CHARSET[Math.floor(36 * Math.random())]
    }
    return storage
}

function allArg(urlpath, body,old_a1,old_xt) {
    var s = (+new Date).toString(16) + genRandomString(30) + 2 + "0000"
    var a1 = old_a1 || (s + crc32(s)).slice(0, 52);
    var x_t = old_xt || (new Date()).getTime();
    var payload = Encrypt(Buffer.from(`x1=${MD5('url=' + urlpath + JSON.stringify(body))};x2=0|0|0|1|0|0|1|0|0|0|1|0|0|0|0|1|0|0|0;x3=${a1};x4=${x_t};`).toString("base64"))
    var x_s = "XYW_" + Buffer.from(`{"signSvn":"56","signType":"x2","appId":"xhs-pc-web","signVersion":"1","payload":${payload}}`).toString("base64");
    var fingerprint = JSON.stringify({
        "x33": "0",
        "x34": "0",
        "x35": "0",
        "x36": "2",
        "x37": "0|0|0|0|0|0|0|0|0|1|0|0|0|0|0|0|0|0|0|0|0|0|0|0",
        "x38": "0|0|1|0|1|0|0|0|0|0|1|0|1|0|1|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0",
        "x39": "0",
        "x42": "3.3.5",
        "x43": genRandomString(8),
        "x44": (new Date()).getTime()-Math.floor(Math.random() * 4000 + 4000),
        "x45": "connecterror",
        "x46": "false",
        "x48": "",
        "x49": "{list:[],type:}",
        "x50": "",
        "x51": "",
        "x52": "",
        "x82": "U3|fe|toastLite"
    })
    var data = {
        "s0": 3,
        "s1": "",
        "x0": "1",
        "x1": "4.1.0",
        "x2": "Mac OS",
        "x3": "xhs-pc-web",
        "x4": "4.68.0",
        "x5": a1,
        "x6": "",
        "x7": "",
        "x8": b64Encode(encodeUtf8(rc4(fingerprint))),
        "x9": -167018369,
        "x10": 5,
        "x11": "normal"
    }
    var x_s_common = b64Encode(encodeUtf8(JSON.stringify(data)));
    var webid = MD5(a1)
    return [x_t,x_s,x_s_common,a1,webid]

}


// console.log(allArg("/api/sec/v1/sbtsource",{"callFrom": "web"}))
