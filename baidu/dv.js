parmas = {
    mouseDown: "",
    keyDown: "",
    mouseMove: "",
    version: 26,
    loadTime: (new Date).getTime()/1000,
    browserInfo: "1,2,79",
    token: "tk" + Math.random() + (new Date).getTime(),
    location: "http://index.baidu.com/v2/index.html#/,undefined",
    screenInfo: "0,0,1903,700,1920,1080,1920,1920,1050"
}
function o(e) {
    for (var t = [], n = 0; n < e.length; n++)
        for (var r = e[n][0]; r <= e[n][1]; r++)
            t.push(String.fromCharCode(r));
    return t
};
function n(e) {
    var t = [[48, 57], [65, 90], [97, 122], [45, 45], [126, 126]]
        , n = o(t)
        , a = o(t.slice(1));
    e && (n = r(n, e),
        a = r(a, e)),
        this.dict = n,
        this.dict2 = a
};
function r(e, t) {
    for (var n = t.split(""), r = 0; r < e.length; r++) {
        var o = r % n.length;
        o = n[o].charCodeAt(0),
            o %= e.length;
        var a = e[r];
        e[r] = e[o],
            e[o] = a
    }
    return e
};
function S(e, t) {
    var r = new n(t)
        , o = {
        flashInfo: 0,
        mouseDown: 1,
        keyDown: 2,
        mouseMove: 3,
        version: 4,
        loadTime: 5,
        browserInfo: 6,
        token: 7,
        location: 8,
        screenInfo: 9
    }
        , a = [r.iary([2])];
    for (var i in e) {
        var d = e[i];
        if (void 0 !== d && void 0 !== o[i]) {
            var c;
            "number" == typeof d ? (c = d >= 0 ? 1 : 2,
                d = r.int(d)) : "boolean" == typeof d ? (c = 3,
                d = r.int(d ? 1 : 0)) : "object" == typeof d && d instanceof Array ? (c = 4,
                d = r.bary(d)) : (c = 0,
                d = r.str(d + "")),
            d && a.push(r.iary([o[i], c, d.length]) + d)
        }
    }
    return a.join("")
};
n.prototype = {
    "int": function(e) {
        return a(e, this.dict)
    },
    iary: function(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            var r = a(e[n], this.dict2);
            t += r.length > 1 ? r.length - 2 + r : r
        }
        return t
    },
    bary: function(e) {
        for (var t = 0, n = {}, r = 0; r < e.length; r++)
            e[r] > t && (t = e[r],
                n[e[r]] = !0);
        var o = parseInt(t / 6);
        o += t % 6 ? 1 : 0;
        for (var a = "", r = 0; o > r; r++) {
            for (var i = 6 * r, d = 0, c = 0; 6 > c; c++)
                n[i] && (d += Math.pow(2, c)),
                    i++;
            a += this.dict[d]
        }
        return a
    },
    str: function(e) {
        for (var t = [], n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            r >= 1 && 127 >= r ? t.push(r) : r > 2047 ? (t.push(224 | r >> 12 & 15),
                t.push(128 | r >> 6 & 63),
                t.push(128 | r >> 0 & 63)) : (t.push(192 | r >> 6 & 31),
                t.push(128 | r >> 0 & 63))
        }
        for (var o = "", n = 0, a = t.length; a > n; ) {
            var i = t[n++];
            if (n >= a) {
                o += this.dict[i >> 2],
                    o += this.dict[(3 & i) << 4],
                    o += "__";
                break
            }
            var d = t[n++];
            if (n >= a) {
                o += this.dict[i >> 2],
                    o += this.dict[(3 & i) << 4 | (240 & d) >> 4],
                    o += this.dict[(15 & d) << 2],
                    o += "_";
                break
            }
            var c = t[n++];
            o += this.dict[i >> 2],
                o += this.dict[(3 & i) << 4 | (240 & d) >> 4],
                o += this.dict[(15 & d) << 2 | (192 & c) >> 6],
                o += this.dict[63 & c]
        }
        return o
    }
};
function a(e, t) {
    var n = ""
        , r = Math.abs(parseInt(e));
    if (r)
        for (; r; )
            n += t[r % t.length],
                r = parseInt(r / t.length);
    else
        n = t[0];
    return n
}
function d(e) {
    x = e.token + "@" + S(e, e.token)
    return x
};
function f() {
    return d(parmas)
}
