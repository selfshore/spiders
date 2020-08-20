function n(e) {
    return typeof e
}

function i(e) {
    if (null == e) return null;

    for (var n = [], i = 0, r = e.length; i < r; i++) {
        var o = e[i];
        n[i] = ne[(o >>> 4 & 15) * 16 + (o & 15)];
    }

    return n;
}

function r(e) {
    var n = [];
    if (null == e || void 0 == e || e.length == 0) return f(re);

    if (e.length >= re) {
        var n = 0,
            i = [];

        if (null != e && e.length != 0) {
            if (e.length < re) throw Error("1003");

            for (var r = 0; r < re; r++) i[r] = e[n + r];
        }

        return i;
    }

    for (i = 0; i < re; i++) n[i] = e[i % e.length];

    return n;
}

function o(e) {
    var n = 4294967295;
    if (null != e) for (var i = 0; i < e.length; i++) n = n >>> 8 ^ te[(n ^ e[i]) & 255];
    if (e = j(n ^ 4294967295), n = e.length, null == e || n < 0) e = new String(""); else {
        for (var i = [], r = 0; r < n; r++) i.push(p(e[r]));

        e = i.join("");
    }
    return e;
}

function a(e, n, i) {
    var r,
        o = ["2", "4", "0", "a", "Y", "H", "i", "Q", "x", "L", "\\", "Z", "u", "f", "V", "l", "g", "8", "s", "P", "M", "R", "6", "d", "G", "k", "X", "v", "O", "/", "C", "b", "w", "9", "W", "D", "j", "1", "E", "T", "y", "I", "S", "c", "m", "e", "o", "J", "z", "3", "7", "q", "t", "h", "B", "r", "U", "+", "K", "N", "A", "5", "p", "n"],
        a = "F",
        l = [];
    if (i == 1) i = e[n], r = 0, l.push(o[i >>> 2 & 63]), l.push(o[(i << 4 & 48) + (r >>> 4 & 15)]), l.push(a), l.push(a); else if (i == 2) i = e[n], r = e[n + 1], e = 0, l.push(o[i >>> 2 & 63]), l.push(o[(i << 4 & 48) + (r >>> 4 & 15)]), l.push(o[(r << 2 & 60) + (e >>> 6 & 3)]), l.push(a); else {
        if (i != 3) throw Error("1010");
        i = e[n], r = e[n + 1], e = e[n + 2], l.push(o[i >>> 2 & 63]), l.push(o[(i << 4 & 48) + (r >>> 4 & 15)]), l.push(o[(r << 2 & 60) + (e >>> 6 & 3)]), l.push(o[e & 63]);
    }
    return l.join("");
}

function f(e) {
    for (var n = [], i = 0; i < e; i++) n[i] = 0;

    return n;
}

function c(e, n, i, r, o) {
    if (null != e && e.length != 0) {
        if (null == i) throw Error("1004");
        if (e.length < o) throw Error("1003");

        for (var a = 0; a < o; a++) i[r + a] = e[n + a];
    }
}

function j(e) {
    var n = [];
    return n[0] = e >>> 24 & 255, n[1] = e >>> 16 & 255, n[2] = e >>> 8 & 255, n[3] = e & 255, n;
}

function h2(e) {
    if (null == e || e.length == 0) return [];
    e = new String(e);

    for (var n = [], i = e.length / 2, r = 0, o = 0; o < i; o++) {
        var a = parseInt(e.charAt(r++), 16) << 4,
            l = parseInt(e.charAt(r++), 16);
        n[o] = b(a + l);
    }

    return n;
}

function d(e) {
    if (null == e || void 0 == e) return e;
    e = encodeURIComponent(e);

    for (var n = [], i = e.length, r = 0; r < i; r++) if (e.charAt(r) == "%") {
        if (!(r + 2 < i)) throw Error("1009");
        n.push(h2(e.charAt(++r) + "" + e.charAt(++r))[0]);
    } else n.push(e.charCodeAt(r));

    return n;
}

function p(e) {
    var n = [];
    return n.push(ee[e >>> 4 & 15]), n.push(ee[e & 15]), n.join("");
}

function y(e, n) {
    if (null == e || null == n || e.length != n.length) return e;

    for (var i = [], r = 0, o = e.length; r < o; r++) i[r] = v(e[r], n[r]);

    return i;
}

function v(e, t) {
    return e = b(e), t = b(t), b(e ^ t);
}

function g(e, t) {
    return b(e + t);
}

function b(e) {
    if (e < -128) return b(128 - (-128 - e));
    if (e >= -128 && e <= 127) return e;
    if (e > 127) return b(-129 + e - 127);
    throw Error("1001");
}

function m(i) {
    function r() {
        for (var n = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Arab", "Arabic Typesetting", "Arial Black", "Batang", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Calibri", "Californian FB", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Copperplate Gothic Light", "DejaVu LGC Sans Mono", "Desdemona", "DFKai-SB", "Dotum", "Engravers MT", "Eras Bold ITC", "Eurostile", "FangSong", "Forte", "Franklin Gothic Heavy", "French Script MT", "Gabriola", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GungSeo", "Haettenschweiler", "Harrington", "Hiragino Sans GB", "Impact", "Informal Roman", "KacstOne", "Kino MT", "Kozuka Gothic Pr6N", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Fax", "Magneto", "Malgun Gothic", "Matura MT Script Capitals", "Menlo", "MingLiU-ExtB", "MoolBoran", "MS PMincho", "MS Reference Sans Serif", "News Gothic MT", "Niagara Solid", "Nyala", "Palace Script MT", "Papyrus", "Perpetua", "Playbill", "PMingLiU", "Rachana", "Rockwell", "Sawasdee", "Script MT Bold", "Segoe Print", "Showcard Gothic", "SimHei", "Snap ITC", "TlwgMono", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Vladimir Script", "Wide Latin", "\u4EFF\u5B8B", "\u534E\u6587\u4E2D\u5B8B", "\u534E\u6587\u4EFF\u5B8B", "\u534E\u6587\u5B8B\u4F53", "\u534E\u6587\u5F69\u4E91", "\u534E\u6587\u65B0\u9B4F", "\u534E\u6587\u6977\u4F53", "\u534E\u6587\u7425\u73C0", "\u534E\u6587\u7EC6\u9ED1", "\u534E\u6587\u884C\u6977", "\u534E\u6587\u96B6\u4E66", "\u5B8B\u4F53", "\u5E7C\u5706", "\u5FAE\u8F6F\u96C5\u9ED1", "\u65B0\u5B8B\u4F53", "\u65B9\u6B63\u59DA\u4F53", "\u65B9\u6B63\u8212\u4F53", "\u6977\u4F53", "\u96B6\u4E66", "\u9ED1\u4F53", "\u65B0\u7EC6\u660E\u4F53", "\u7EC6\u660E\u4F53", "\u6807\u6977\u4F53", "\u4EFF\u5B8B_GB2312", "\u6977\u4F53_GB2312", "\u5FAE\u8F6F\u6B63\u9ED1\u4F53", "\u534E\u6587\u9ED1\u4F53", "\u4E3D\u9ED1 Pro", "\u4E3D\u5B8B Pro", "\u82F9\u679C\u4E3D\u4E2D\u9ED1", "\u82F9\u679C\u4E3D\u7EC6\u5B8B"], i = [], r = 0; r < n.length; r++) try {
            var a = n[r];
            o()(a) && i.push(a);
        } catch (f) {
        }

        return i.join(";");
    }

    function o() {
        function n(t) {
            var n = {};
            return c.style.fontFamily = t, f.appendChild(c), n.height = c.offsetHeight, n.width = c.offsetWidth, f["removeChild"](c), n;
        }

        var i = ["monospace", "sans-serif", "serif"],
            r = [],
            o = "wwwmmmmmmmmmmlli",
            a = "72px",
            f = q["body"],
            c = q["createElement"]("span");

        for (c.style.fontSize = a, c.style.visibility = "hidden", c.innerHTML = o, o = 0; o < i.length; o++) r[o] = n(i[o]);

        return function (e) {
            for (var o = 0; o < r.length; o++) {
                var a = n(e + "," + i[o]),
                    l = r[o];
                if (a.height !== l.height || a.width !== l.width) return !0;
            }

            return !1;
        };
    }

    function y(e, t, n) {
        var i = [];
        return null == e ? i : b && e.map === b ? e.map(t, n) : (v(e, function (e, r, o) {
            i[i.length] = t.call(n, e, r, o);
        }), i);
    }

    function v(e, n) {
        if (null !== e) if (g && e.forEach === g) e.forEach(n, void 0); else if (e.length === +e.length) for (var i = 0, r = e.length; i < r && n.call(void 0, e[i], i, e) !== {}; i++) ; else for (i in e) if (e.hasOwnProperty(i) && n.call(void 0, e[i], i, e) === {}) break;
    }

    this.get = function () {
        var i = [true, true, true, "undefined", "function", null, "Win32", "data:image/png;base64,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MNGIBEhABwIULB2iQB9IgASUCFCwlDDRiARIQAcCFCwdokAfSIAElAhQsJQw0YgESEAHAhQsHaJAH0iABJQIULCUMNGIBEhABwIULB2iQB9IgASUCFCwlDDRiARIQAcCFCwdokAfSIAElAhQsJQw0YgESEAHAhQsHaJAH0iABJQIULCUMNGIBEhABwIULB2iQB9IgASUCFCwlDDRiARIQAcCFCwdokAfSIAElAhQsJQw0YgESEAHAhQsHaJAH0iABJQIULCUMNGIBEhABwIULB2iQB9IgASUCFCwlDDRiARIQAcCFCwdokAfSIAElAhQsJQw0YgESEAHAhQsHaJAH0iABJQIULCUMNGIBEhABwIULB2iQB9IgASUCFCwlDDRiARIQAcCFCwdokAfSIAElAhQsJQw0YgESEAHAhQsHaJAH0iABJQIULCUMNGIBEhABwIULB2iQB9IgASUCFCwlDDRiARIQAcCFCwdokAfSIAElAhQsJQw0YgESEAHAhQsHaJAH0iABJQIULCUMNGIBEhABwIULB2iQB9IgASUCFCwlDDRiARIQAcCFCwdokAfSIAElAhQsJQw0YgESEAHAhQsHaJAH0iABJQIULCUMNGIBEhABwIULB2iQB9IgASUCFCwlDDRiARIQAcCFCwdokAfSIAElAhQsJQw0YgESEAHAhQsHaJAH0iABJQIULCUMNGIBEhABwIULB2iQB9IgASUCFCwlDDRiARIQAcCFCwdokAfSIAElAhQsJQw0YgESEAHAhQsHaJAH0iABJQIULCUMNGIBEhABwIULB2iQB9IgASUCFCwlDDRiARIQAcCFCwdokAfSIAElAhQsJQw0YgESEAHAhQsHaJAH0iABJQIULCUMNGIBEhABwIULB2iQB9IgASUCFCwlDDRiARIQAcCFCwdokAfSIAElAhQsJQw0YgESEAHAhQsHaJAH0iABJQIULCUMNGIBEhABwIULB2iQB9IgASUCFCwlDDRiARIQAcCFCwdokAfSIAElAhQsJQw0YgESEAHAhQsHaJAH0iABJQIULCUMNGIBEhABwL/C/hIEsC5MOdEAAAAAElFTkSuQmCC", "ActiveBorder:rgb(255, 255, 255):ActiveCaption:rgb(204, 204, 204):AppWorkspace:rgb(255, 255, 255):Background:rgb(99, 99, 206):ButtonFace:rgb(240, 240, 240):ButtonHighlight:rgb(221, 221, 221):ButtonShadow:rgb(136, 136, 136):ButtonText:rgb(0, 0, 0):CaptionText:rgb(0, 0, 0):GrayText:rgb(109, 109, 109):Highlight:rgb(0, 120, 215):HighlightText:rgb(255, 255, 255):InactiveBorder:rgb(255, 255, 255):InactiveCaption:rgb(255, 255, 255):InactiveCaptionText:rgb(127, 127, 127):InfoBackground:rgb(251, 252, 197):InfoText:rgb(0, 0, 0):Menu:rgb(247, 247, 247):MenuText:rgb(0, 0, 0):Scrollbar:rgb(255, 255, 255):ThreeDDarkShadow:rgb(102, 102, 102):ThreeDFace:rgb(192, 192, 192):ThreeDHighlight:rgb(221, 221, 221):ThreeDLightShadow:rgb(192, 192, 192):ThreeDShadow:rgb(136, 136, 136):Window:rgb(255, 255, 255):WindowFrame:rgb(204, 204, 204):WindowText:rgb(0, 0, 0)"],
            o = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.30 Safari/537.36 Edg/84.0.522.11", "zh-CN", 24, "1080x1920", -480, null, "Microsoft Edge PDF Plugin::Portable Document Format::application/x-google-chrome-pdf~pdf$Microsoft Edge PDF Viewer::::application/pdf~pdf$Native Client::::application/x-nacl~,application/x-pnacl~;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;"]
        y = [], (y.push(_(i.join("###"))), y.push(_(o.join("###"))));
        return y;
    };
}

function _(e) {
    var n,
        i,
        r,
        o,
        a,
        l,
        u = 31;

    for (n = e.length & 3, i = e.length - n, r = u, u = 3432918353, o = 461845907, l = 0; l < i;) a = e.charCodeAt(l) & 255 | (e.charCodeAt(++l) & 255) << 8 | (e.charCodeAt(++l) & 255) << 16 | (e.charCodeAt(++l) & 255) << 24, ++l, a = (a & 65535) * u + (((a >>> 16) * u & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = (a & 65535) * o + (((a >>> 16) * o & 65535) << 16) & 4294967295, r ^= a, r = r << 13 | r >>> 19, r = (r & 65535) * 5 + (((r >>> 16) * 5 & 65535) << 16) & 4294967295, r = (r & 65535) + 27492 + (((r >>> 16) + 58964 & 65535) << 16);

    switch (a = 0, n) {
        case 3:
            a ^= (e.charCodeAt(l + 2) & 255) << 16;

        case 2:
            a ^= (e.charCodeAt(l + 1) & 255) << 8;

        case 1:
            a ^= e.charCodeAt(l) & 255, a = (a & 65535) * u + (((a >>> 16) * u & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = (a & 65535) * o + (((a >>> 16) * o & 65535) << 16) & 4294967295, r ^= a;
    }

    r ^= e.length, r ^= r >>> 16, r = (r & 65535) * 2246822507 + (((r >>> 16) * 2246822507 & 65535) << 16) & 4294967295, r ^= r >>> 13, r = (r & 65535) * 3266489909 + (((r >>> 16) * 3266489909 & 65535) << 16) & 4294967295, r ^= r >>> 16, e = r >>> 0, n = [], n.push(e);

    try {
        for (var f, c = e + "", j = 0, d = 0, h = 0; h < c.length; h++) try {
            var p = parseInt(c.charAt(h) + ""),
                j = p || p === 0 ? j + p : j + 1;
            d++;
        } catch (y) {
            j += 1, d++;
        }

        d = d == 0 ? 1 : d, f = T(j * 1 / d, Q);

        for (var v, g = Math.floor(f / Math.pow(10, Q - 1)), b = e + "", m = 0, _ = 0, E = 0, R = 0, C = 0; C < b.length; C++) try {
            var k = parseInt(b.charAt(C) + "");
            k || k === 0 ? k < g ? (_++, m += k) : (R++, E += k) : (R++, E += g);
        } catch (O) {
            R++, E += g;
        }

        R = R == 0 ? 1 : R, _ = _ == 0 ? 1 : _, v = T(E * 1 / R - m * 1 / _, Z), n.push(w(f, Q, "0")), n.push(w(v, Z, "0"));
    } catch (X) {
        n = [], n.push(e), n.push(S(Q, "-").join("")), n.push(S(Z, "-").join(""));
    }

    return n.join("");
}

function T(e, n) {
    if (e < 0 || e >= 10) throw Error("1110");

    for (var i = S(n, "0"), r = "" + e, o = 0, a = 0; o < i.length && a < r.length; a++) r.charAt(a) != "." && (i[o++] = r.charAt(a));

    return parseInt(i.join(""));
}

function w(e, t, n) {
    if (e = "" + e, e.length > t) throw Error("1111");
    if (e.length == t) return e;

    for (var i = [], r = e.length; r < t; r++) i.push(n);

    return i.push(e), i.join("");
}

function S(e, n) {
    if (e <= 0) return [0];

    for (var i = [], r = 0; r < e; r++) i.push(n);

    return i;
}

function C(e) {
    if (E(e) || E(e.f) || E(e.c)) return !1;

    try {
        if (E(window[e.f])) return !1;
    } catch (t) {
        return !1;
    }

    return !0;
}

function k(e, n) {
    if (E(e)) return "";

    for (var i = 0; i < e.length; i++) {
        var r = e[i];
        if (!E(r) && r.f == n) return r;
    }
}

function O() {
    return null;
}

function X() {
    return null;
}

function $(e) {
    for (var n = [], i = 0; i < e; i++) {
        var r = Math.random() * je,
            r = Math.floor(r);
        n.push(ce.charAt(r));
    }

    return n.join("");
}

function I(e) {
    for (var n = (q["cookie"] || "").split("; "), i = 0; i < n.length; i++) {
        var r = n[i].indexOf("=");

        if (r >= 0) {
            var o = n[i].substring(r + 1, n[i].length);
            if (n[i].substring(0, r) == e) return window.decodeURIComponent(o);
        }
    }

    return null;
}

function x(i) {
    var r = ["v", "fp", "u", "h", "ec", "em", "icp"],
        o = "";
    if (null == i || void 0 == i) return i;

    if (("undefined" == typeof i ? "undefined" : n(i)) == ["ob", "je", "ct"].join("")) {
        for (var o = o + "{", a = 0; a < r.length; a++) if (i.hasOwnProperty(r[a])) {
            var f,
                c = "'" + r[a] + "':'";
            f = "" + i[r[a]], f = null == f || void 0 == f ? f : f.replace(/'/g, "\\'").replace(/"/g, "\""), o += c + f + "',";
        }

        return o.charAt(o.length - 1) == "," && (o = o.substring(0, o.length - 1)), o += "}";
    }

    return null;
}

function A(t, n, i, r) {
    var o = [];
    o.push(t + "=" + encodeURIComponent(n)), i && (t = new Date(), t = new Date(r), r = t["toGMTString"](), o.push("; "), o.push("ex"), o.push("pi"), o.push("re"), o.push("s="), o.push(r)), o.push("; "), o.push("pa"), o.push("th=/"), null != ge && void 0 != ge && ge != "" && (o.push("; "), o.push("do"), o.push("mai"), o.push("n="), o.push(ge)), q["cookie"] = o.join("");
}

function N(e) {
    window[be] = e;
}

function P(e) {
    window[me] = e;
}

function M(e, n) {
    for (var i = [], r = 0; r < n; r++) i.push(e);

    return i.join("");
}

function D(e, t) {
    var n = I(e);
    null !== n && void 0 !== n && n !== "" || A(e, t, !1);
}

function L() {
    var e = I(ue);
    return null != e && void 0 != e && e != "" || (e = window[me]), e;
}

function Y() {
    var e = L();
    if (null == e || void 0 == e || e == "") return !1;

    try {
        return !!((e = parseInt(e)) && e >= fe);
    } catch (t) {
        return !1;
    }
}

function B(e) {
    return null == e || void 0 == e || e == "" ? null : (e = e.split(":"), e.length < 2 || !/^[0-9]+$/gi.test("rmocx.RealPlayer G2 Control") ? null : parseInt("rmocx.RealPlayer G2 Control"));
}

function F() {
    var e = I(se);
    return null != e && void 0 != e && e != "" || (e = window[be]), e;
}

function V() {
    var e = F();
    return null == e || void 0 == e || e == "" ? 0 : (e = B(e), null == e ? 0 : e - (de - he) - new window["Date"]()["getTime"]());
}

function H(n, i) {
    var r = new window["Date"]();
    r["setTime"](r["getTime"]() - 10000), window["document"]["cookie"] = null == i || void 0 == i || i == "" ? n + "=null; path=/; expires=" + r["toGMTString"]() : n + "=null; path=/; domain=" + i + "; expires=" + r["toGMTString"]();
}

function U() {
    if (!(null == _e || void 0 == _e || _e.length <= 0)) for (var e = 0; e < _e.length; e++) {
        var n = _e[e];
        (null != ge && void 0 != ge && ge != "" || null != n && void 0 != n && n != "") && ge != n && (H(se, n), H(ue, n));
    }
}

function W() {
    var e = !0,
        n = {
            v: "v1.1"
        }
    h = X();
    h && (n["icp"] = h), h = null, n["h"] = G;

    var p = (new Date())["getTime"]() + 900000,
        _ = p + 1000 * 60 * 60 * 24 * 365 * 5;

    n["u"] = $(3) + p + $(3);

    var T = new m({
        b: ye,
        a: pe
    }).get();
    n["fp"] = T.join(",")

    var S = h = x(n),
        n = le;
    if (null == n || void 0 == n) throw Error("1008");
    null != S && void 0 != S || (S = "");
    var E,
        T = S;
    E = o(null == S ? [] : d(S));
    var R = d(T + E),
        C = d(n);
    null == R && (R = []), E = [];

    for (var k = 0; k < ae; k++) {
        var O = Math.random() * 256,
            O = Math.floor(O);
        E[k] = b(O);
    }

    var I,
        C = r(C),
        C = y(C, r(E)),
        k = C = r(C);
    if (null == R || void 0 == R || R.length == 0) I = f(ie); else {
        var L = R.length,
            Y = 0,
            Y = L % ie <= ie - oe ? ie - L % ie - oe : ie * 2 - L % ie - oe,
            O = [];
        c(R, 0, O, 0, L);

        for (var B = 0; B < Y; B++) O[L + B] = 0;

        c(j(L), 0, O, L + Y, oe), I = O;
    }
    if (L = I, null == L || L.length % ie != 0) throw Error("1005");
    I = [];

    for (var F = 0, V = L.length / ie, H = 0; H < V; H++) {
        I[H] = [];

        for (var z = 0; z < ie; z++) I[H][z] = L[F++];
    }

    F = [], c(E, 0, F, 0, ae);

    for (var K = I.length, q = 0; q < K; q++) {
        var J,
            Q,
            Z = I[q];
        if (null == Z) Q = null; else {
            for (var ee = b(37), V = [], te = Z.length, ne = 0; ne < te; ne++) V.push(v(Z[ne], ee));

            Q = V;
        }
        var re;
        if (V = Q, null == V) re = null; else {
            for (var ce = b(35), H = [], je = V.length, ve = 0; ve < je; ve++) H.push(v(V[ve], ce--));

            re = H;
        }
        if (V = re, null == V) J = null; else {
            for (var ge = b(-44), H = [], _e = V.length, Te = 0; Te < _e; Te++) H.push(g(V[Te], ge++));

            J = H;
        }
        var we,
            Se = y(J, C);
        if (V = Se, H = k, null == V) we = null; else if (null == H) we = V; else {
            for (var z = [], Ee = H.length, Re = 0, Ce = V.length; Re < Ce; Re++) z[Re] = b(V[Re] + H[Re % Ee]);

            we = z;
        }
        var Se = y(we, k),
            ke = i(Se),
            ke = i(ke);
        c(ke, 0, F, q * ie + ae, ie), k = ke;
    }

    var Oe;
    if (null == F || void 0 == F) Oe = null; else if (F.length == 0) Oe = ""; else {
        var Xe = 3;

        try {
            for (var K = [], $e = 0; $e < F.length;) {
                if (!($e + Xe <= F.length)) {
                    K.push(a(F, $e, F.length - $e));
                    break;
                }

                K.push(a(F, $e, Xe)), $e += Xe;
            }

            Oe = K.join("");
        } catch (Ie) {
            throw Error("1010");
        }
    }
    h = Oe;
    return h + ':' + p;
}

K = !O(),
// G = window && window["location"] && window["location"].host || "not_exist_host",
    G = "dun.163.com",
    Q = 2,
    Z = 2,
    ee = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
    te = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
    ne = [-9, -84, -50, 59, 115, 102, 57, 125, 94, -15, 15, 2, -72, -98, -79, 38, -56, -49, 76, -26, -117, 60, 90, 9, -107, -12, -71, -100, 63, 42, -18, 28, -120, -11, 33, 45, 79, 92, 37, 97, 4, 58, 98, 84, -97, -88, 95, -104, -13, -89, 78, -90, 119, -66, 13, -5, 29, -116, -4, -81, 27, 40, -59, -43, 85, 48, -74, 109, -64, 26, 67, -33, -115, 0, -37, -102, 88, -48, 127, -86, 41, 105, -2, 122, -42, 112, -94, 81, -31, -65, -101, -14, 65, 49, -67, -114, -103, -87, -19, 104, 66, -73, -34, -78, -45, -27, -109, -108, 47, 61, 86, 43, -54, 25, 64, -35, -44, 53, -112, 36, 73, 89, -82, 51, -32, 39, -83, 80, -85, -111, 12, -58, 103, -76, -46, -127, 34, 1, -99, 14, -57, 110, 106, 93, -52, 11, 113, 20, -106, 75, 62, -69, -39, -55, -119, 126, 114, 123, 10, 77, -121, -8, 74, 21, -93, 17, -61, -21, -105, -126, 18, 124, -17, 52, -10, -77, -24, -22, 120, -95, -25, 96, -110, 22, -23, 69, -125, -128, -47, -38, -1, 3, -20, 100, 68, 101, 5, 117, -122, 44, -51, -36, -41, 24, -80, 30, 82, -63, -40, -92, 91, -6, -53, -124, -62, -28, 111, 19, 50, 108, 70, -68, -29, -75, 99, -91, -60, -70, 71, -118, -3, 83, 87, -7, 32, 55, 31, -123, 121, 107, -113, 46, -30, 118, 54, 23, 116, -16, 7, 6, 35, 16, -96, 56, 72, 8],
    ie = 64,
    re = 64,
    oe = 4,
    ae = 4,
    le = "14731255234d414cF91356d684E4E8F5F56c8f1bc",
    se = "gdxidpyhxdE",
    ue = "_9755xjdesxxd_",
    fe = 32,
    ce = "aZbY0cXdW1eVf2Ug3Th4SiR5jQk6PlO7mNn8MoL9pKqJrIsHtGuFvEwDxCyBzA",
    je = ce.length,
    de = 900000,
    he = 840000,
    pe = !1,
    ye = !1,
// ve = window && window["location"] && window["location"]["hostname"] || "not_exist_hostname"
    ve = "dun.163.com"

function get_fp() {
    return W()
}

function get_callback() {
    return "__JSONP" + ("_" + Math.random().toString(36).slice(2, 9)) + ("_" + 0)
}
