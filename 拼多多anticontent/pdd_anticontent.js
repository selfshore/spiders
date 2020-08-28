var crypto = require("crypto");
function md5(s) {
    return crypto.createHash('md5').update(String(s)).digest('hex');
}

//===================================压缩算法

var tt = {}, ii = {}, deflate_arr = {} ,rrr = {},ee={},compress_arr = {};
function array_change(t) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , a = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
    function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    t.assign = function(e) {
        for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
            var r = t.shift();
            if (r) {
                if ("object" !== (void 0 === r ? "undefined" : n(r)))
                    throw new TypeError(r + "must be non-object");
                for (var a in r)
                    i(r, a) && (e[a] = r[a])
            }
        }
        return e
    }
        ,
        t.shrinkBuf = function(e, t) {
            return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t,
                e)
        }
    ;
    var o = {
        arraySet: function(e, t, r, n, a) {
            if (t.subarray && e.subarray)
                e.set(t.subarray(r, r + n), a);
            else
                for (var i = 0; i < n; i++)
                    e[a + i] = t[r + i]
        },
        flattenChunks: function(e) {
            var t, r, n, a, i, o;
            for (n = 0,
                     t = 0,
                     r = e.length; t < r; t++)
                n += e[t].length;
            for (o = new Uint8Array(n),
                     a = 0,
                     t = 0,
                     r = e.length; t < r; t++)
                i = e[t],
                    o.set(i, a),
                    a += i.length;
            return o
        }
    }
        , s = {
        arraySet: function(e, t, r, n, a) {
            for (var i = 0; i < n; i++)
                e[a + i] = t[r + i]
        },
        flattenChunks: function(e) {
            return [].concat.apply([], e)
        }
    };
    t.setTyped = function(e) {
        e ? (t.Buf8 = Uint8Array,
            t.Buf16 = Uint16Array,
            t.Buf32 = Int32Array,
            t.assign(t, o)) : (t.Buf8 = Array,
            t.Buf16 = Array,
            t.Buf32 = Array,
            t.assign(t, s))
    }
        ,
        t.setTyped(a)
}
function init_change(t) {
    "use strict";
    var n = tt;
    function a(e) {
        for (var t = e.length; --t >= 0; )
            e[t] = 0
    }
    var i = 0
        , o = 256
        , s = o + 1 + 29
        , c = 30
        , u = 19
        , h = 2 * s + 1
        , f = 15
        , l = 16
        , p = 256
        , d = 16
        , _ = 17
        , m = 18
        , g = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
        , v = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
        , S = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
        , y = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
        , E = new Array(2 * (s + 2));
    a(E);
    var w = new Array(2 * c);
    a(w);
    var b = new Array(512);
    a(b);
    var O = new Array(256);
    a(O);
    var A = new Array(29);
    a(A);
    var I, C, T, D = new Array(c);
    function P(e, t, r, n, a) {
        this.static_tree = e,
            this.extra_bits = t,
            this.extra_base = r,
            this.elems = n,
            this.max_length = a,
            this.has_stree = e && e.length
    }
    function k(e, t) {
        this.dyn_tree = e,
            this.max_code = 0,
            this.stat_desc = t
    }
    function R(e) {
        return e < 256 ? b[e] : b[256 + (e >>> 7)]
    }
    function N(e, t) {
        e.pending_buf[e.pending++] = 255 & t,
            e.pending_buf[e.pending++] = t >>> 8 & 255
    }
    function x(e, t, r) {
        e.bi_valid > l - r ? (e.bi_buf |= t << e.bi_valid & 65535,
            N(e, e.bi_buf),
            e.bi_buf = t >> l - e.bi_valid,
            e.bi_valid += r - l) : (e.bi_buf |= t << e.bi_valid & 65535,
            e.bi_valid += r)
    }
    function M(e, t, r) {
        x(e, r[2 * t], r[2 * t + 1])
    }
    function L(e, t) {
        var r = 0;
        do {
            r |= 1 & e,
                e >>>= 1,
                r <<= 1
        } while (--t > 0);return r >>> 1
    }
    function j(e, t, r) {
        var n, a, i = new Array(f + 1), o = 0;
        for (n = 1; n <= f; n++)
            i[n] = o = o + r[n - 1] << 1;
        for (a = 0; a <= t; a++) {
            var s = e[2 * a + 1];
            0 !== s && (e[2 * a] = L(i[s]++, s))
        }
    }
    function W(e) {
        var t;
        for (t = 0; t < s; t++)
            e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < c; t++)
            e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < u; t++)
            e.bl_tree[2 * t] = 0;
        e.dyn_ltree[2 * p] = 1,
            e.opt_len = e.static_len = 0,
            e.last_lit = e.matches = 0
    }
    function U(e) {
        e.bi_valid > 8 ? N(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
            e.bi_buf = 0,
            e.bi_valid = 0
    }
    function G(e, t, r, n) {
        var a = 2 * t
            , i = 2 * r;
        return e[a] < e[i] || e[a] === e[i] && n[t] <= n[r]
    }
    function H(e, t, r) {
        for (var n = e.heap[r], a = r << 1; a <= e.heap_len && (a < e.heap_len && G(t, e.heap[a + 1], e.heap[a], e.depth) && a++,
            !G(t, n, e.heap[a], e.depth)); )
            e.heap[r] = e.heap[a],
                r = a,
                a <<= 1;
        e.heap[r] = n
    }
    function Q(e, t, r) {
        var n, a, i, s, c = 0;
        if (0 !== e.last_lit)
            do {
                n = e.pending_buf[e.d_buf + 2 * c] << 8 | e.pending_buf[e.d_buf + 2 * c + 1],
                    a = e.pending_buf[e.l_buf + c],
                    c++,
                    0 === n ? M(e, a, t) : (M(e, (i = O[a]) + o + 1, t),
                    0 !== (s = g[i]) && x(e, a -= A[i], s),
                        M(e, i = R(--n), r),
                    0 !== (s = v[i]) && x(e, n -= D[i], s))
            } while (c < e.last_lit);M(e, p, t)
    }
    function K(e, t) {
        var r, n, a, i = t.dyn_tree, o = t.stat_desc.static_tree, s = t.stat_desc.has_stree, c = t.stat_desc.elems, u = -1;
        for (e.heap_len = 0,
                 e.heap_max = h,
                 r = 0; r < c; r++)
            0 !== i[2 * r] ? (e.heap[++e.heap_len] = u = r,
                e.depth[r] = 0) : i[2 * r + 1] = 0;
        for (; e.heap_len < 2; )
            i[2 * (a = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1,
                e.depth[a] = 0,
                e.opt_len--,
            s && (e.static_len -= o[2 * a + 1]);
        for (t.max_code = u,
                 r = e.heap_len >> 1; r >= 1; r--)
            H(e, i, r);
        a = c;
        do {
            r = e.heap[1],
                e.heap[1] = e.heap[e.heap_len--],
                H(e, i, 1),
                n = e.heap[1],
                e.heap[--e.heap_max] = r,
                e.heap[--e.heap_max] = n,
                i[2 * a] = i[2 * r] + i[2 * n],
                e.depth[a] = (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1,
                i[2 * r + 1] = i[2 * n + 1] = a,
                e.heap[1] = a++,
                H(e, i, 1)
        } while (e.heap_len >= 2);e.heap[--e.heap_max] = e.heap[1],
            function(e, t) {
                var r, n, a, i, o, s, c = t.dyn_tree, u = t.max_code, l = t.stat_desc.static_tree, p = t.stat_desc.has_stree, d = t.stat_desc.extra_bits, _ = t.stat_desc.extra_base, m = t.stat_desc.max_length, g = 0;
                for (i = 0; i <= f; i++)
                    e.bl_count[i] = 0;
                for (c[2 * e.heap[e.heap_max] + 1] = 0,
                         r = e.heap_max + 1; r < h; r++)
                    (i = c[2 * c[2 * (n = e.heap[r]) + 1] + 1] + 1) > m && (i = m,
                        g++),
                        c[2 * n + 1] = i,
                    n > u || (e.bl_count[i]++,
                        o = 0,
                    n >= _ && (o = d[n - _]),
                        s = c[2 * n],
                        e.opt_len += s * (i + o),
                    p && (e.static_len += s * (l[2 * n + 1] + o)));
                if (0 !== g) {
                    do {
                        for (i = m - 1; 0 === e.bl_count[i]; )
                            i--;
                        e.bl_count[i]--,
                            e.bl_count[i + 1] += 2,
                            e.bl_count[m]--,
                            g -= 2
                    } while (g > 0);for (i = m; 0 !== i; i--)
                        for (n = e.bl_count[i]; 0 !== n; )
                            (a = e.heap[--r]) > u || (c[2 * a + 1] !== i && (e.opt_len += (i - c[2 * a + 1]) * c[2 * a],
                                c[2 * a + 1] = i),
                                n--)
                }
            }(e, t),
            j(i, u, e.bl_count)
    }
    function q(e, t, r) {
        var n, a, i = -1, o = t[1], s = 0, c = 7, u = 4;
        for (0 === o && (c = 138,
            u = 3),
                 t[2 * (r + 1) + 1] = 65535,
                 n = 0; n <= r; n++)
            a = o,
                o = t[2 * (n + 1) + 1],
            ++s < c && a === o || (s < u ? e.bl_tree[2 * a] += s : 0 !== a ? (a !== i && e.bl_tree[2 * a]++,
                e.bl_tree[2 * d]++) : s <= 10 ? e.bl_tree[2 * _]++ : e.bl_tree[2 * m]++,
                s = 0,
                i = a,
                0 === o ? (c = 138,
                    u = 3) : a === o ? (c = 6,
                    u = 3) : (c = 7,
                    u = 4))
    }
    function B(e, t, r) {
        var n, a, i = -1, o = t[1], s = 0, c = 7, u = 4;
        for (0 === o && (c = 138,
            u = 3),
                 n = 0; n <= r; n++)
            if (a = o,
                o = t[2 * (n + 1) + 1],
                !(++s < c && a === o)) {
                if (s < u)
                    do {
                        M(e, a, e.bl_tree)
                    } while (0 != --s);
                else
                    0 !== a ? (a !== i && (M(e, a, e.bl_tree),
                        s--),
                        M(e, d, e.bl_tree),
                        x(e, s - 3, 2)) : s <= 10 ? (M(e, _, e.bl_tree),
                        x(e, s - 3, 3)) : (M(e, m, e.bl_tree),
                        x(e, s - 11, 7));
                s = 0,
                    i = a,
                    0 === o ? (c = 138,
                        u = 3) : a === o ? (c = 6,
                        u = 3) : (c = 7,
                        u = 4)
            }
    }
    a(D);
    var F = !1;
    function V(e, t, r, a) {
        x(e, (i << 1) + (a ? 1 : 0), 3),
            function(e, t, r, a) {
                U(e),
                    N(e, r),
                    N(e, ~r),
                    n.arraySet(e.pending_buf, e.window, t, r, e.pending),
                    e.pending += r
            }(e, t, r)
    }
    t._tr_init = function(e) {
        F || (function() {
            var e, t, r, n, a, i = new Array(f + 1);
            for (r = 0,
                     n = 0; n < 28; n++)
                for (A[n] = r,
                         e = 0; e < 1 << g[n]; e++)
                    O[r++] = n;
            for (O[r - 1] = n,
                     a = 0,
                     n = 0; n < 16; n++)
                for (D[n] = a,
                         e = 0; e < 1 << v[n]; e++)
                    b[a++] = n;
            for (a >>= 7; n < c; n++)
                for (D[n] = a << 7,
                         e = 0; e < 1 << v[n] - 7; e++)
                    b[256 + a++] = n;
            for (t = 0; t <= f; t++)
                i[t] = 0;
            for (e = 0; e <= 143; )
                E[2 * e + 1] = 8,
                    e++,
                    i[8]++;
            for (; e <= 255; )
                E[2 * e + 1] = 9,
                    e++,
                    i[9]++;
            for (; e <= 279; )
                E[2 * e + 1] = 7,
                    e++,
                    i[7]++;
            for (; e <= 287; )
                E[2 * e + 1] = 8,
                    e++,
                    i[8]++;
            for (j(E, s + 1, i),
                     e = 0; e < c; e++)
                w[2 * e + 1] = 5,
                    w[2 * e] = L(e, 5);
            I = new P(E,g,o + 1,s,f),
                C = new P(w,v,0,c,f),
                T = new P(new Array(0),S,0,u,7)
        }(),
            F = !0),
            e.l_desc = new k(e.dyn_ltree,I),
            e.d_desc = new k(e.dyn_dtree,C),
            e.bl_desc = new k(e.bl_tree,T),
            e.bi_buf = 0,
            e.bi_valid = 0,
            W(e)
    }
        ,
        t._tr_stored_block = V,
        t._tr_flush_block = function(e, t, r, n) {
            var a, i, s = 0;
            e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function(e) {
                var t, r = 4093624447;
                for (t = 0; t <= 31; t++,
                    r >>>= 1)
                    if (1 & r && 0 !== e.dyn_ltree[2 * t])
                        return 0;
                if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26])
                    return 1;
                for (t = 32; t < o; t++)
                    if (0 !== e.dyn_ltree[2 * t])
                        return 1;
                return 0
            }(e)),
                K(e, e.l_desc),
                K(e, e.d_desc),
                s = function(e) {
                    var t;
                    for (q(e, e.dyn_ltree, e.l_desc.max_code),
                             q(e, e.dyn_dtree, e.d_desc.max_code),
                             K(e, e.bl_desc),
                             t = u - 1; t >= 3 && 0 === e.bl_tree[2 * y[t] + 1]; t--)
                        ;
                    return e.opt_len += 3 * (t + 1) + 5 + 5 + 4,
                        t
                }(e),
                a = e.opt_len + 3 + 7 >>> 3,
            (i = e.static_len + 3 + 7 >>> 3) <= a && (a = i)) : a = i = r + 5,
                r + 4 <= a && -1 !== t ? V(e, t, r, n) : 4 === e.strategy || i === a ? (x(e, 2 + (n ? 1 : 0), 3),
                    Q(e, E, w)) : (x(e, 4 + (n ? 1 : 0), 3),
                    function(e, t, r, n) {
                        var a;
                        for (x(e, t - 257, 5),
                                 x(e, r - 1, 5),
                                 x(e, n - 4, 4),
                                 a = 0; a < n; a++)
                            x(e, e.bl_tree[2 * y[a] + 1], 3);
                        B(e, e.dyn_ltree, t - 1),
                            B(e, e.dyn_dtree, r - 1)
                    }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1),
                    Q(e, e.dyn_ltree, e.dyn_dtree)),
                W(e),
            n && U(e)
        }
        ,
        t._tr_tally = function(e, t, r) {
            return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255,
                e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t,
                e.pending_buf[e.l_buf + e.last_lit] = 255 & r,
                e.last_lit++,
                0 === t ? e.dyn_ltree[2 * r]++ : (e.matches++,
                    t--,
                    e.dyn_ltree[2 * (O[r] + o + 1)]++,
                    e.dyn_dtree[2 * R(t)]++),
            e.last_lit === e.lit_bufsize - 1
        }
        ,
        t._tr_align = function(e) {
            x(e, 2, 3),
                M(e, p, E),
                function(e) {
                    16 === e.bi_valid ? (N(e, e.bi_buf),
                        e.bi_buf = 0,
                        e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf,
                        e.bi_buf >>= 8,
                        e.bi_valid -= 8)
                }(e)
        }
}
function oo(e, t, r, n) {
    for (var a = 65535 & e | 0, i = e >>> 16 & 65535 | 0, o = 0; 0 !== r; ) {
        r -= o = r > 2e3 ? 2e3 : r;
        do {
            i = i + (a = a + t[n++] | 0) | 0
        } while (--o);a %= 65521,
            i %= 65521
    }
    return a | i << 16 | 0
}
function sss(e, t, r, a) {
    var i = n
        , o = a + r;
    e ^= -1;
    for (var s = a; s < o; s++)
        e = e >>> 8 ^ i[255 & (e ^ t[s])];
    return -1 ^ e
}
function ys(t) {
    "use strict";
    var n, a = tt, i = ii, o = oo, s = sss, c = {"0":"","1":"stream end","2":"need dictionary","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}, u = 0, h = 4, f = 0, l = -2, p = -1, d = 1, _ = 4, m = 2, g = 8, v = 9, S = 286, y = 30, E = 19, w = 2 * S + 1, b = 15, O = 3, A = 258, I = A + O + 1, C = 42, T = 103, D = 113, P = 666, k = 1, R = 2, N = 3, x = 4;
    function M(e, t) {
        return e.msg = c[t],
            t
    }
    function L(e) {
        return (e << 1) - (e > 4 ? 9 : 0)
    }
    function j(e) {
        for (var t = e.length; --t >= 0; )
            e[t] = 0
    }
    function W(e) {
        var t = e.state
            , r = t.pending;
        r > e.avail_out && (r = e.avail_out),
        0 !== r && (a.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out),
            e.next_out += r,
            t.pending_out += r,
            e.total_out += r,
            e.avail_out -= r,
            t.pending -= r,
        0 === t.pending && (t.pending_out = 0))
    }
    function U(e, t) {
        i._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
            e.block_start = e.strstart,
            W(e.strm)
    }
    function G(e, t) {
        e.pending_buf[e.pending++] = t
    }
    function H(e, t) {
        e.pending_buf[e.pending++] = t >>> 8 & 255,
            e.pending_buf[e.pending++] = 255 & t
    }
    function Q(e, t) {
        var r, n, a = e.max_chain_length, i = e.strstart, o = e.prev_length, s = e.nice_match, c = e.strstart > e.w_size - I ? e.strstart - (e.w_size - I) : 0, u = e.window, h = e.w_mask, f = e.prev, l = e.strstart + A, p = u[i + o - 1], d = u[i + o];
        e.prev_length >= e.good_match && (a >>= 2),
        s > e.lookahead && (s = e.lookahead);
        do {
            if (u[(r = t) + o] === d && u[r + o - 1] === p && u[r] === u[i] && u[++r] === u[i + 1]) {
                i += 2,
                    r++;
                do {} while (u[++i] === u[++r] && u[++i] === u[++r] && u[++i] === u[++r] && u[++i] === u[++r] && u[++i] === u[++r] && u[++i] === u[++r] && u[++i] === u[++r] && u[++i] === u[++r] && i < l);if (n = A - (l - i),
                    i = l - A,
                n > o) {
                    if (e.match_start = t,
                        o = n,
                    n >= s)
                        break;
                    p = u[i + o - 1],
                        d = u[i + o]
                }
            }
        } while ((t = f[t & h]) > c && 0 != --a);return o <= e.lookahead ? o : e.lookahead
    }
    function K(e) {
        var t, r, n, i, c, u, h, f, l, p, d = e.w_size;
        do {
            if (i = e.window_size - e.lookahead - e.strstart,
            e.strstart >= d + (d - I)) {
                a.arraySet(e.window, e.window, d, d, 0),
                    e.match_start -= d,
                    e.strstart -= d,
                    e.block_start -= d,
                    t = r = e.hash_size;
                do {
                    n = e.head[--t],
                        e.head[t] = n >= d ? n - d : 0
                } while (--r);t = r = d;
                do {
                    n = e.prev[--t],
                        e.prev[t] = n >= d ? n - d : 0
                } while (--r);i += d
            }
            if (0 === e.strm.avail_in)
                break;
            if (u = e.strm,
                h = e.window,
                f = e.strstart + e.lookahead,
                l = i,
                p = void 0,
            (p = u.avail_in) > l && (p = l),
                r = 0 === p ? 0 : (u.avail_in -= p,
                    a.arraySet(h, u.input, u.next_in, p, f),
                    1 === u.state.wrap ? u.adler = o(u.adler, h, p, f) : 2 === u.state.wrap && (u.adler = s(u.adler, h, p, f)),
                    u.next_in += p,
                    u.total_in += p,
                    p),
                e.lookahead += r,
            e.lookahead + e.insert >= O)
                for (c = e.strstart - e.insert,
                         e.ins_h = e.window[c],
                         e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + O - 1]) & e.hash_mask,
                    e.prev[c & e.w_mask] = e.head[e.ins_h],
                    e.head[e.ins_h] = c,
                    c++,
                    e.insert--,
                    !(e.lookahead + e.insert < O)); )
                    ;
        } while (e.lookahead < I && 0 !== e.strm.avail_in)
    }
    function q(e, t) {
        for (var r, n; ; ) {
            if (e.lookahead < I) {
                if (K(e),
                e.lookahead < I && t === u)
                    return k;
                if (0 === e.lookahead)
                    break
            }
            if (r = 0,
            e.lookahead >= O && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + O - 1]) & e.hash_mask,
                r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                e.head[e.ins_h] = e.strstart),
            0 !== r && e.strstart - r <= e.w_size - I && (e.match_length = Q(e, r)),
            e.match_length >= O)
                if (n = i._tr_tally(e, e.strstart - e.match_start, e.match_length - O),
                    e.lookahead -= e.match_length,
                e.match_length <= e.max_lazy_match && e.lookahead >= O) {
                    e.match_length--;
                    do {
                        e.strstart++,
                            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + O - 1]) & e.hash_mask,
                            r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                            e.head[e.ins_h] = e.strstart
                    } while (0 != --e.match_length);e.strstart++
                } else
                    e.strstart += e.match_length,
                        e.match_length = 0,
                        e.ins_h = e.window[e.strstart],
                        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
            else
                n = i._tr_tally(e, 0, e.window[e.strstart]),
                    e.lookahead--,
                    e.strstart++;
            if (n && (U(e, !1),
            0 === e.strm.avail_out))
                return k
        }
        return e.insert = e.strstart < O - 1 ? e.strstart : O - 1,
            t === h ? (U(e, !0),
                0 === e.strm.avail_out ? N : x) : e.last_lit && (U(e, !1),
            0 === e.strm.avail_out) ? k : R
    }
    function B(e, t) {
        for (var r, n, a; ; ) {
            if (e.lookahead < I) {
                if (K(e),
                e.lookahead < I && t === u)
                    return k;
                if (0 === e.lookahead)
                    break
            }
            if (r = 0,
            e.lookahead >= O && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + O - 1]) & e.hash_mask,
                r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                e.head[e.ins_h] = e.strstart),
                e.prev_length = e.match_length,
                e.prev_match = e.match_start,
                e.match_length = O - 1,
            0 !== r && e.prev_length < e.max_lazy_match && e.strstart - r <= e.w_size - I && (e.match_length = Q(e, r),
            e.match_length <= 5 && (e.strategy === d || e.match_length === O && e.strstart - e.match_start > 4096) && (e.match_length = O - 1)),
            e.prev_length >= O && e.match_length <= e.prev_length) {
                a = e.strstart + e.lookahead - O,
                    n = i._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - O),
                    e.lookahead -= e.prev_length - 1,
                    e.prev_length -= 2;
                do {
                    ++e.strstart <= a && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + O - 1]) & e.hash_mask,
                        r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                        e.head[e.ins_h] = e.strstart)
                } while (0 != --e.prev_length);if (e.match_available = 0,
                    e.match_length = O - 1,
                    e.strstart++,
                n && (U(e, !1),
                0 === e.strm.avail_out))
                    return k
            } else if (e.match_available) {
                if ((n = i._tr_tally(e, 0, e.window[e.strstart - 1])) && U(e, !1),
                    e.strstart++,
                    e.lookahead--,
                0 === e.strm.avail_out)
                    return k
            } else
                e.match_available = 1,
                    e.strstart++,
                    e.lookahead--
        }
        return e.match_available && (n = i._tr_tally(e, 0, e.window[e.strstart - 1]),
            e.match_available = 0),
            e.insert = e.strstart < O - 1 ? e.strstart : O - 1,
            t === h ? (U(e, !0),
                0 === e.strm.avail_out ? N : x) : e.last_lit && (U(e, !1),
            0 === e.strm.avail_out) ? k : R
    }
    function F(e, t, r, n, a) {
        this.good_length = e,
            this.max_lazy = t,
            this.nice_length = r,
            this.max_chain = n,
            this.func = a
    }
    function V(e) {
        var t;
        return e && e.state ? (e.total_in = e.total_out = 0,
            e.data_type = m,
            (t = e.state).pending = 0,
            t.pending_out = 0,
        t.wrap < 0 && (t.wrap = -t.wrap),
            t.status = t.wrap ? C : D,
            e.adler = 2 === t.wrap ? 0 : 1,
            t.last_flush = u,
            i._tr_init(t),
            f) : M(e, l)
    }
    function z(e) {
        var t, r = V(e);
        return r === f && ((t = e.state).window_size = 2 * t.w_size,
            j(t.head),
            t.max_lazy_match = n[t.level].max_lazy,
            t.good_match = n[t.level].good_length,
            t.nice_match = n[t.level].nice_length,
            t.max_chain_length = n[t.level].max_chain,
            t.strstart = 0,
            t.block_start = 0,
            t.lookahead = 0,
            t.insert = 0,
            t.match_length = t.prev_length = O - 1,
            t.match_available = 0,
            t.ins_h = 0),
            r
    }
    function Y(e, t, r, n, i, o) {
        if (!e)
            return l;
        var s = 1;
        if (t === p && (t = 6),
            n < 0 ? (s = 0,
                n = -n) : n > 15 && (s = 2,
                n -= 16),
        i < 1 || i > v || r !== g || n < 8 || n > 15 || t < 0 || t > 9 || o < 0 || o > _)
            return M(e, l);
        8 === n && (n = 9);
        var c = new function() {
                this.strm = null,
                    this.status = 0,
                    this.pending_buf = null,
                    this.pending_buf_size = 0,
                    this.pending_out = 0,
                    this.pending = 0,
                    this.wrap = 0,
                    this.gzhead = null,
                    this.gzindex = 0,
                    this.method = g,
                    this.last_flush = -1,
                    this.w_size = 0,
                    this.w_bits = 0,
                    this.w_mask = 0,
                    this.window = null,
                    this.window_size = 0,
                    this.prev = null,
                    this.head = null,
                    this.ins_h = 0,
                    this.hash_size = 0,
                    this.hash_bits = 0,
                    this.hash_mask = 0,
                    this.hash_shift = 0,
                    this.block_start = 0,
                    this.match_length = 0,
                    this.prev_match = 0,
                    this.match_available = 0,
                    this.strstart = 0,
                    this.match_start = 0,
                    this.lookahead = 0,
                    this.prev_length = 0,
                    this.max_chain_length = 0,
                    this.max_lazy_match = 0,
                    this.level = 0,
                    this.strategy = 0,
                    this.good_match = 0,
                    this.nice_match = 0,
                    this.dyn_ltree = new a.Buf16(2 * w),
                    this.dyn_dtree = new a.Buf16(2 * (2 * y + 1)),
                    this.bl_tree = new a.Buf16(2 * (2 * E + 1)),
                    j(this.dyn_ltree),
                    j(this.dyn_dtree),
                    j(this.bl_tree),
                    this.l_desc = null,
                    this.d_desc = null,
                    this.bl_desc = null,
                    this.bl_count = new a.Buf16(b + 1),
                    this.heap = new a.Buf16(2 * S + 1),
                    j(this.heap),
                    this.heap_len = 0,
                    this.heap_max = 0,
                    this.depth = new a.Buf16(2 * S + 1),
                    j(this.depth),
                    this.l_buf = 0,
                    this.lit_bufsize = 0,
                    this.last_lit = 0,
                    this.d_buf = 0,
                    this.opt_len = 0,
                    this.static_len = 0,
                    this.matches = 0,
                    this.insert = 0,
                    this.bi_buf = 0,
                    this.bi_valid = 0
            }
        ;
        return e.state = c,
            c.strm = e,
            c.wrap = s,
            c.gzhead = null,
            c.w_bits = n,
            c.w_size = 1 << c.w_bits,
            c.w_mask = c.w_size - 1,
            c.hash_bits = i + 7,
            c.hash_size = 1 << c.hash_bits,
            c.hash_mask = c.hash_size - 1,
            c.hash_shift = ~~((c.hash_bits + O - 1) / O),
            c.window = new a.Buf8(2 * c.w_size),
            c.head = new a.Buf16(c.hash_size),
            c.prev = new a.Buf16(c.w_size),
            c.lit_bufsize = 1 << i + 6,
            c.pending_buf_size = 4 * c.lit_bufsize,
            c.pending_buf = new a.Buf8(c.pending_buf_size),
            c.d_buf = 1 * c.lit_bufsize,
            c.l_buf = 3 * c.lit_bufsize,
            c.level = t,
            c.strategy = o,
            c.method = r,
            z(e)
    }
    n = [new F(0,0,0,0,function(e, t) {
            var r = 65535;
            for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5); ; ) {
                if (e.lookahead <= 1) {
                    if (K(e),
                    0 === e.lookahead && t === u)
                        return k;
                    if (0 === e.lookahead)
                        break
                }
                e.strstart += e.lookahead,
                    e.lookahead = 0;
                var n = e.block_start + r;
                if ((0 === e.strstart || e.strstart >= n) && (e.lookahead = e.strstart - n,
                    e.strstart = n,
                    U(e, !1),
                0 === e.strm.avail_out))
                    return k;
                if (e.strstart - e.block_start >= e.w_size - I && (U(e, !1),
                0 === e.strm.avail_out))
                    return k
            }
            return e.insert = 0,
                t === h ? (U(e, !0),
                    0 === e.strm.avail_out ? N : x) : (e.strstart > e.block_start && (U(e, !1),
                    e.strm.avail_out),
                    k)
        }
    ), new F(4,4,8,4,q), new F(4,5,16,8,q), new F(4,6,32,32,q), new F(4,4,16,16,B), new F(8,16,32,32,B), new F(8,16,128,128,B), new F(8,32,128,256,B), new F(32,128,258,1024,B), new F(32,258,258,4096,B)],
        t.deflateInit = function(e, t) {
            return Y(e, t, g, 15, 8, 0)
        }
        ,
        t.deflateInit2 = Y,
        t.deflateReset = z,
        t.deflateResetKeep = V,
        t.deflateSetHeader = function(e, t) {
            return e && e.state ? 2 !== e.state.wrap ? l : (e.state.gzhead = t,
                f) : l
        }
        ,
        t.deflate = function(e, t) {
            var r, a, o, c;
            if (!e || !e.state || t > 5 || t < 0)
                return e ? M(e, l) : l;
            if (a = e.state,
            !e.output || !e.input && 0 !== e.avail_in || a.status === P && t !== h)
                return M(e, 0 === e.avail_out ? -5 : l);
            if (a.strm = e,
                r = a.last_flush,
                a.last_flush = t,
            a.status === C)
                if (2 === a.wrap)
                    e.adler = 0,
                        G(a, 31),
                        G(a, 139),
                        G(a, 8),
                        a.gzhead ? (G(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)),
                            G(a, 255 & a.gzhead.time),
                            G(a, a.gzhead.time >> 8 & 255),
                            G(a, a.gzhead.time >> 16 & 255),
                            G(a, a.gzhead.time >> 24 & 255),
                            G(a, 9 === a.level ? 2 : a.strategy >= 2 || a.level < 2 ? 4 : 0),
                            G(a, 255 & a.gzhead.os),
                        a.gzhead.extra && a.gzhead.extra.length && (G(a, 255 & a.gzhead.extra.length),
                            G(a, a.gzhead.extra.length >> 8 & 255)),
                        a.gzhead.hcrc && (e.adler = s(e.adler, a.pending_buf, a.pending, 0)),
                            a.gzindex = 0,
                            a.status = 69) : (G(a, 0),
                            G(a, 0),
                            G(a, 0),
                            G(a, 0),
                            G(a, 0),
                            G(a, 9 === a.level ? 2 : a.strategy >= 2 || a.level < 2 ? 4 : 0),
                            G(a, 3),
                            a.status = D);
                else {
                    var p = g + (a.w_bits - 8 << 4) << 8;
                    p |= (a.strategy >= 2 || a.level < 2 ? 0 : a.level < 6 ? 1 : 6 === a.level ? 2 : 3) << 6,
                    0 !== a.strstart && (p |= 32),
                        p += 31 - p % 31,
                        a.status = D,
                        H(a, p),
                    0 !== a.strstart && (H(a, e.adler >>> 16),
                        H(a, 65535 & e.adler)),
                        e.adler = 1
                }
            if (69 === a.status)
                if (a.gzhead.extra) {
                    for (o = a.pending; a.gzindex < (65535 & a.gzhead.extra.length) && (a.pending !== a.pending_buf_size || (a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
                        W(e),
                        o = a.pending,
                    a.pending !== a.pending_buf_size)); )
                        G(a, 255 & a.gzhead.extra[a.gzindex]),
                            a.gzindex++;
                    a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
                    a.gzindex === a.gzhead.extra.length && (a.gzindex = 0,
                        a.status = 73)
                } else
                    a.status = 73;
            if (73 === a.status)
                if (a.gzhead.name) {
                    o = a.pending;
                    do {
                        if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
                            W(e),
                            o = a.pending,
                        a.pending === a.pending_buf_size)) {
                            c = 1;
                            break
                        }
                        c = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0,
                            G(a, c)
                    } while (0 !== c);a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
                    0 === c && (a.gzindex = 0,
                        a.status = 91)
                } else
                    a.status = 91;
            if (91 === a.status)
                if (a.gzhead.comment) {
                    o = a.pending;
                    do {
                        if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
                            W(e),
                            o = a.pending,
                        a.pending === a.pending_buf_size)) {
                            c = 1;
                            break
                        }
                        c = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0,
                            G(a, c)
                    } while (0 !== c);a.gzhead.hcrc && a.pending > o && (e.adler = s(e.adler, a.pending_buf, a.pending - o, o)),
                    0 === c && (a.status = T)
                } else
                    a.status = T;
            if (a.status === T && (a.gzhead.hcrc ? (a.pending + 2 > a.pending_buf_size && W(e),
            a.pending + 2 <= a.pending_buf_size && (G(a, 255 & e.adler),
                G(a, e.adler >> 8 & 255),
                e.adler = 0,
                a.status = D)) : a.status = D),
            0 !== a.pending) {
                if (W(e),
                0 === e.avail_out)
                    return a.last_flush = -1,
                        f
            } else if (0 === e.avail_in && L(t) <= L(r) && t !== h)
                return M(e, -5);
            if (a.status === P && 0 !== e.avail_in)
                return M(e, -5);
            if (0 !== e.avail_in || 0 !== a.lookahead || t !== u && a.status !== P) {
                var d = 2 === a.strategy ? function(e, t) {
                    for (var r; ; ) {
                        if (0 === e.lookahead && (K(e),
                        0 === e.lookahead)) {
                            if (t === u)
                                return k;
                            break
                        }
                        if (e.match_length = 0,
                            r = i._tr_tally(e, 0, e.window[e.strstart]),
                            e.lookahead--,
                            e.strstart++,
                        r && (U(e, !1),
                        0 === e.strm.avail_out))
                            return k
                    }
                    return e.insert = 0,
                        t === h ? (U(e, !0),
                            0 === e.strm.avail_out ? N : x) : e.last_lit && (U(e, !1),
                        0 === e.strm.avail_out) ? k : R
                }(a, t) : 3 === a.strategy ? function(e, t) {
                    for (var r, n, a, o, s = e.window; ; ) {
                        if (e.lookahead <= A) {
                            if (K(e),
                            e.lookahead <= A && t === u)
                                return k;
                            if (0 === e.lookahead)
                                break
                        }
                        if (e.match_length = 0,
                        e.lookahead >= O && e.strstart > 0 && (n = s[a = e.strstart - 1]) === s[++a] && n === s[++a] && n === s[++a]) {
                            o = e.strstart + A;
                            do {} while (n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && n === s[++a] && a < o);e.match_length = A - (o - a),
                            e.match_length > e.lookahead && (e.match_length = e.lookahead)
                        }
                        if (e.match_length >= O ? (r = i._tr_tally(e, 1, e.match_length - O),
                            e.lookahead -= e.match_length,
                            e.strstart += e.match_length,
                            e.match_length = 0) : (r = i._tr_tally(e, 0, e.window[e.strstart]),
                            e.lookahead--,
                            e.strstart++),
                        r && (U(e, !1),
                        0 === e.strm.avail_out))
                            return k
                    }
                    return e.insert = 0,
                        t === h ? (U(e, !0),
                            0 === e.strm.avail_out ? N : x) : e.last_lit && (U(e, !1),
                        0 === e.strm.avail_out) ? k : R
                }(a, t) : n[a.level].func(a, t);
                if (d !== N && d !== x || (a.status = P),
                d === k || d === N)
                    return 0 === e.avail_out && (a.last_flush = -1),
                        f;
                if (d === R && (1 === t ? i._tr_align(a) : 5 !== t && (i._tr_stored_block(a, 0, 0, !1),
                3 === t && (j(a.head),
                0 === a.lookahead && (a.strstart = 0,
                    a.block_start = 0,
                    a.insert = 0))),
                    W(e),
                0 === e.avail_out))
                    return a.last_flush = -1,
                        f
            }
            return t !== h ? f : a.wrap <= 0 ? 1 : (2 === a.wrap ? (G(a, 255 & e.adler),
                G(a, e.adler >> 8 & 255),
                G(a, e.adler >> 16 & 255),
                G(a, e.adler >> 24 & 255),
                G(a, 255 & e.total_in),
                G(a, e.total_in >> 8 & 255),
                G(a, e.total_in >> 16 & 255),
                G(a, e.total_in >> 24 & 255)) : (H(a, e.adler >>> 16),
                H(a, 65535 & e.adler)),
                W(e),
            a.wrap > 0 && (a.wrap = -a.wrap),
                0 !== a.pending ? f : 1)
        }
        ,
        t.deflateEnd = function(e) {
            var t;
            return e && e.state ? (t = e.state.status) !== C && 69 !== t && 73 !== t && 91 !== t && t !== T && t !== D && t !== P ? M(e, l) : (e.state = null,
                t === D ? M(e, -3) : f) : l
        }
        ,
        t.deflateSetDictionary = function(e, t) {
            var r, n, i, s, c, u, h, p, d = t.length;
            if (!e || !e.state)
                return l;
            if (2 === (s = (r = e.state).wrap) || 1 === s && r.status !== C || r.lookahead)
                return l;
            for (1 === s && (e.adler = o(e.adler, t, d, 0)),
                     r.wrap = 0,
                 d >= r.w_size && (0 === s && (j(r.head),
                     r.strstart = 0,
                     r.block_start = 0,
                     r.insert = 0),
                     p = new a.Buf8(r.w_size),
                     a.arraySet(p, t, d - r.w_size, r.w_size, 0),
                     t = p,
                     d = r.w_size),
                     c = e.avail_in,
                     u = e.next_in,
                     h = e.input,
                     e.avail_in = d,
                     e.next_in = 0,
                     e.input = t,
                     K(r); r.lookahead >= O; ) {
                n = r.strstart,
                    i = r.lookahead - (O - 1);
                do {
                    r.ins_h = (r.ins_h << r.hash_shift ^ r.window[n + O - 1]) & r.hash_mask,
                        r.prev[n & r.w_mask] = r.head[r.ins_h],
                        r.head[r.ins_h] = n,
                        n++
                } while (--i);r.strstart = n,
                    r.lookahead = O - 1,
                    K(r)
            }
            return r.strstart += r.lookahead,
                r.block_start = r.strstart,
                r.insert = r.lookahead,
                r.lookahead = 0,
                r.match_length = r.prev_length = O - 1,
                r.match_available = 0,
                e.next_in = u,
                e.input = h,
                e.avail_in = c,
                r.wrap = s,
                f
        }
        ,
        t.deflateInfo = "pako deflate (from Nodeca project)"
}
function r15(t) {
    "use strict";
    var n = tt
        , a = !0
        , i = !0;
    try {
        String.fromCharCode.apply(null, [0])
    } catch (e) {
        a = !1
    }
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (e) {
        i = !1
    }
    for (var o = new n.Buf8(256), s = 0; s < 256; s++)
        o[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
    function c(e, t) {
        if (t < 65534 && (e.subarray && i || !e.subarray && a))
            return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
        for (var r = "", o = 0; o < t; o++)
            r += String.fromCharCode(e[o]);
        return r
    }
    o[254] = o[254] = 1,
        t.string2buf = function(e) {
            var t, r, a, i, o, s = e.length, c = 0;
            for (i = 0; i < s; i++)
                55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (a = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (a - 56320),
                    i++),
                    c += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
            for (t = new n.Buf8(c),
                     o = 0,
                     i = 0; o < c; i++)
                55296 == (64512 & (r = e.charCodeAt(i))) && i + 1 < s && 56320 == (64512 & (a = e.charCodeAt(i + 1))) && (r = 65536 + (r - 55296 << 10) + (a - 56320),
                    i++),
                    r < 128 ? t[o++] = r : r < 2048 ? (t[o++] = 192 | r >>> 6,
                        t[o++] = 128 | 63 & r) : r < 65536 ? (t[o++] = 224 | r >>> 12,
                        t[o++] = 128 | r >>> 6 & 63,
                        t[o++] = 128 | 63 & r) : (t[o++] = 240 | r >>> 18,
                        t[o++] = 128 | r >>> 12 & 63,
                        t[o++] = 128 | r >>> 6 & 63,
                        t[o++] = 128 | 63 & r);
            return t
        }
        ,
        t.buf2binstring = function(e) {
            return c(e, e.length)
        }
        ,
        t.binstring2buf = function(e) {
            for (var t = new n.Buf8(e.length), r = 0, a = t.length; r < a; r++)
                t[r] = e.charCodeAt(r);
            return t
        }
        ,
        t.buf2string = function(e, t) {
            var r, n, a, i, s = t || e.length, u = new Array(2 * s);
            for (n = 0,
                     r = 0; r < s; )
                if ((a = e[r++]) < 128)
                    u[n++] = a;
                else if ((i = o[a]) > 4)
                    u[n++] = 65533,
                        r += i - 1;
                else {
                    for (a &= 2 === i ? 31 : 3 === i ? 15 : 7; i > 1 && r < s; )
                        a = a << 6 | 63 & e[r++],
                            i--;
                    i > 1 ? u[n++] = 65533 : a < 65536 ? u[n++] = a : (a -= 65536,
                        u[n++] = 55296 | a >> 10 & 1023,
                        u[n++] = 56320 | 1023 & a)
                }
            return c(u, n)
        }
        ,
        t.utf8border = function(e, t) {
            var r;
            for ((t = t || e.length) > e.length && (t = e.length),
                     r = t - 1; r >= 0 && 128 == (192 & e[r]); )
                r--;
            return r < 0 ? t : 0 === r ? t : r + o[e[r]] > t ? r : t
        }
}
function r16(ee) {
    "use strict";
    ee.exports = function() {
        this.input = null,
            this.next_in = 0,
            this.avail_in = 0,
            this.total_in = 0,
            this.output = null,
            this.next_out = 0,
            this.avail_out = 0,
            this.total_out = 0,
            this.msg = "",
            this.state = null,
            this.data_type = 2,
            this.adler = 0
    }
}
function compress(t) {
    "use strict";
    var n = deflate_arr
        , a = tt
        , i = rrr
        , o = {"0":"","1":"stream end","2":"need dictionary","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}
        , s = ee.exports
        , c = Object.prototype.toString
        , u = 0
        , h = -1
        , f = 0
        , l = 8;
    function p(e) {
        if (!(this instanceof p))
            return new p(e);
        this.options = a.assign({
            level: h,
            method: l,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: f,
            to: ""
        }, e || {});
        var t = this.options;
        t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
            this.err = 0,
            this.msg = "",
            this.ended = !1,
            this.chunks = [],
            this.strm = new s,
            this.strm.avail_out = 0;
        var r = n.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
        if (r !== u)
            throw new Error(o[r]);
        if (t.header && n.deflateSetHeader(this.strm, t.header),
            t.dictionary) {
            var d;
            if (d = "string" == typeof t.dictionary ? i.string2buf(t.dictionary) : "[object ArrayBuffer]" === c.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary,
            (r = n.deflateSetDictionary(this.strm, d)) !== u)
                throw new Error(o[r]);
            this._dict_set = !0
        }
    }
    function d(e, t) {
        var r = new p(t);
        if (r.push(e, !0),
            r.err)
            throw r.msg || o[r.err];
        return r.result
    }
    p.prototype.push = function(e, t) {
        var r, o, s = this.strm, h = this.options.chunkSize;
        if (this.ended)
            return !1;
        o = t === ~~t ? t : !0 === t ? 4 : 0,
            "string" == typeof e ? s.input = i.string2buf(e) : "[object ArrayBuffer]" === c.call(e) ? s.input = new Uint8Array(e) : s.input = e,
            s.next_in = 0,
            s.avail_in = s.input.length;
        do {
            if (0 === s.avail_out && (s.output = new a.Buf8(h),
                s.next_out = 0,
                s.avail_out = h),
            1 !== (r = n.deflate(s, o)) && r !== u)
                return this.onEnd(r),
                    this.ended = !0,
                    !1;
            0 !== s.avail_out && (0 !== s.avail_in || 4 !== o && 2 !== o) || ("string" === this.options.to ? this.onData(i.buf2binstring(a.shrinkBuf(s.output, s.next_out))) : this.onData(a.shrinkBuf(s.output, s.next_out)))
        } while ((s.avail_in > 0 || 0 === s.avail_out) && 1 !== r);return 4 === o ? (r = n.deflateEnd(this.strm),
            this.onEnd(r),
            this.ended = !0,
        r === u) : 2 !== o || (this.onEnd(u),
            s.avail_out = 0,
            !0)
    }
        ,
        p.prototype.onData = function(e) {
            this.chunks.push(e)
        }
        ,
        p.prototype.onEnd = function(e) {
            e === u && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)),
                this.chunks = [],
                this.err = e,
                this.msg = this.strm.msg
        }
        ,
        t.Deflate = p,
        t.deflate = d,
        t.deflateRaw = function(e, t) {
            return (t = t || {}).raw = !0,
                d(e, t)
        }
        ,
        t.gzip = function(e, t) {
            return (t = t || {}).gzip = !0,
                d(e, t)
        }
}
array_change(tt)
init_change(ii)
ys(deflate_arr)
r15(rrr)
r16(ee)
compress(compress_arr)

//=========================================
// url当前页面得网址
// uid:api_uid  html返回得cookie
// user_id:pdd_user_id登录后的一个cookie,登录时得默认为空
function f(url,uid,user_id) {
    var pdd_user_id= user_id ||'',api_uid = uid;
    var B = {};
    var pdd_encode;
    function iii(e, t, r) {
        if ((t -= (e += "").length) <= 0)
            return e;
        if (r || 0 === r || (r = " "),
        " " == (r += "") && t < 10)
            return n[t] + e;
        for (var a = ""; 1 & t && (a += r),
            t >>= 1; )
            r += r;
        return a + e
    }
    function encode_() {
        c = "slice",
            u = "unshift",
            h = "toString",
            f = "parseInt",
            l = "substring",
            p = "charCodeAt",
            d = "length",
            _ = "concat",
            m = "push",
            g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"["split"](""),
            v = {};
        function S(e) {
            return e["replace"](/[+\/=]/g, function (e) {
                return v[e];
            });
        }
        v["+"] = "-", v["/"] = "_", v["="] = "";
        var E = {};

        E["base64"] = function (e) {
            for (var t = function (e, t) {
                return e < t;
            }, r = function (e, t) {
                return e + t;
            }, n = function (e, t) {
                return e + t;
            }, a = function (e, t) {
                return e >>> t;
            }, i = function (e, t) {
                return e & t;
            }, o = function (e, t) {
                return e | t;
            }, s = function (e, t) {
                return e << t;
            }, c = function (e, t) {
                return e >>> t;
            }, u = function (e, t) {
                return e & t;
            }, h = function (e, t) {
                return e === t;
            }, l = function (e, t) {
                return e + t;
            }, p = function (e, t) {
                return e >>> t;
            }, _ = function (e, t) {
                return e & t;
            }, m = function (e, t) {
                return e << t;
            }, v = void 0, E = void 0, w = void 0, b = "", O = e[d], A = 0, I = function (e, t) {
                return e * t;
            }(y[f](function (e, t) {
                return e / t;
            }(O, 3)), 3); t(A, I);) v = e[A++], E = e[A++], w = e[A++], b += r(n(n(g[a(v, 2)], g[i(o(s(v, 4), a(E, 4)), 63)]), g[i(o(s(E, 2), c(w, 6)), 63)]), g[u(w, 63)]);

            var C = function (e, t) {
                return e - t;
            }(O, I);

            return h(C, 1) ? (v = e[A], b += l(l(g[p(v, 2)], g[_(s(v, 4), 63)]), "==")) : h(C, 2) && (v = e[A++], E = e[A], b += l(l(function (e, t) {
                return e + t;
            }(g[p(v, 2)], g[_(function (e, t) {
                return e | t;
            }(m(v, 4), p(E, 4)), 63)]), g[_(m(E, 2), 63)]), "=")), function (e, t) {
                return e(t);
            }(S, b);
        };

        E["charCode"] = function (e) {
            for (var t = function (e, t) {
                return e < t;
            }, r = function (e, t) {
                return e >= t;
            }, n = function (e, t) {
                return e <= t;
            }, a = function (e, t) {
                return e | t;
            }, i = function (e, t) {
                return e & t;
            }, o = function (e, t) {
                return e >> t;
            }, s = function (e, t) {
                return e <= t;
            }, c = function (e, t) {
                return e >= t;
            }, u = function (e, t) {
                return e <= t;
            }, h = function (e, t) {
                return e >> t;
            }, f = function (e, t) {
                return e | t;
            }, l = function (e, t) {
                return e & t;
            }, g = [], v = 0, S = 0; t(S, e[d]); S += 1) {
                var y = e[p](S);
                r(y, 0) && n(y, 127) ? (g["push"](y), v += 1) : n(128, 80) && n(y, 2047) ? (v += 2, g[m](a(192, i(31, o(y, 6)))), g[m](a(128, i(63, y)))) : (r(y, 2048) && s(y, 55295) || c(y, 57344) && u(y, 65535)) && (v += 3, g[m](a(224, i(15, h(y, 12)))), g[m](f(128, i(63, h(y, 6)))), g[m](f(128, l(63, y))));
            }

            for (var E = 0; t(E, g[d]); E += 1) g[E] &= 255;

            return u(v, 255) ? [0, v][_](g) : [h(v, 8), l(v, 255)][_](g);
        };

        E.es = function (e) {
            e || (e = "");
            var t = e[l](0, 255),
                r = [],
                n = E.charCode(t)[c](2);
            return r[m](n[d]), r = r[_](n);
        };

        E.en = function (e) {
            var t = function (e, t) {
                    return e !== t;
                },
                r = function (e, t) {
                    return e % t;
                },
                n = function (e, t) {
                    return e < t;
                },
                a = function (e, t) {
                    return e * t;
                },
                i = function (e, t) {
                    return e * t;
                },
                o = function (e, t) {
                    return e + t;
                };

            e || (e = 0);
            var s = y[f](e),
                c = [];
            !function (e, t) {
                return e > t;
            }(s, 0) ? c[m](1) : c[m](0);

            for (var p = Math.abs(s)[h](2).split(""), _ = 0; t(r(p[d], 8), 0); _ += 1) p[u]("0");

            p = p.join("");

            for (var g = Math.ceil(function (e, t) {
                return e / t;
            }(p[d], 8)), v = 0; n(v, g); v += 1) {
                var S = p[l](a(v, 8), i(o(v, 1), 8));
                c[m](y[f](S, 2));
            }

            var E = c[d];
            return c[u](E), c;
        };

        E.sc = function (e) {
            e || (e = "");
            var t = e[d] > 255 ? e[l](0, 255) : e;
            return E.charCode(t)["slice"](2);
        };

        E.nc = function (e) {
            var t = function (e, t) {
                    return e * t;
                },
                r = function (e, t) {
                    return e < t;
                },
                n = function (e, t) {
                    return e * t;
                },
                a = function (e, t) {
                    return e + t;
                };

            e || (e = 0);
            var o = Math.abs(y[f](e))[h](2),
                s = Math.ceil(function (e, t) {
                    return e / t;
                }(o[d], 8));

            o = function (e, t, r, n) {
                return e(t, r, n);
            }(i, o, t(s, 8), "0");

            for (var c = [], u = 0; r(u, s); u += 1) {
                var p = o[l](t(u, 8), n(a(u, 1), 8));
                c[m](y[f](p, 2));
            }

            return c;
        };

        E.va = function (e) {
            var t = function (e, t) {
                    return e >= t;
                },
                r = function (e, t) {
                    return e - t;
                },
                n = function (e, t) {
                    return e === t;
                },
                a = function (e, t) {
                    return e & t;
                },
                o = function (e, t) {
                    return e + t;
                },
                c = function (e, t) {
                    return e >>> t;
                },
                u = "map";

            e || (e = 0);
            for (var p = Math.abs(parseInt(e)), _ = p[h](2), g = [], v = (_ = function (e, t, r, n) {
                return e(t, r, n);
            }(iii, _, function (e, t) {
                return e * t;
            }(Math.ceil(function (e, t) {
                return e / t;
            }(_[d], 7)), 7), "0"))[d]; t(v, 0); v -= 7) {
                var S = _[l](r(v, 7), v);

                if (n(a(p, -128), 0)) {
                    g["push"](o("0", S));
                    break;
                }

                g["push"](o("1", S)), p = c(p, 7);
            }

            return g["map"](function (e) {
                return parseInt(e, 2);
            });
        };

        E.ek = function (e) {
            function a(e) {
                return typeof e
            }
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                r = {
                    YCslw: function (e, t) {
                        return e !== t;
                    },
                    RgriL: function (e, t) {
                        return e === t;
                    },
                    vlZcP: "[object Array]",
                    NyooN: function (e, t) {
                        return e === t;
                    },
                    NiElf: "string",
                    BstjM: "number",
                    WYTPE: function (e, t) {
                        return e > t;
                    },
                    KCHer: function (e, t) {
                        return e <= t;
                    },
                    SwJiS: function (e, t) {
                        return e + t;
                    },
                    jwjBN: function (e, t, r, n) {
                        return e(t, r, n);
                    },
                    abyYL: function (e, t) {
                        return e + t;
                    },
                    zqnjT: "000",
                    IwXCL: function (e, t) {
                        return e - t;
                    },
                    zYOsJ: function (e, t) {
                        return e > t;
                    }
                };
            if (!e) return [];
            var n = [],
                o = 0;
            r.YCslw(t, "") && (r.RgriL(Object.prototype[h].call(t), r.vlZcP) && (o = t[d]), r.NyooN(void 0 === t ? "undefined" : a(t), r.NiElf) && (o = (n = E.sc(t))[d]), r.NyooN(void 0 === t ? "undefined" : a(t), r.BstjM) && (o = (n = E.nc(t))[d]));
            var u = Math.abs(e)[h](2),
                l = "";
            l = r.WYTPE(o, 0) && r.KCHer(o, 7) ? r.SwJiS(u, r.jwjBN(i, o[h](2), 3, "0")) : r.abyYL(u, r.zqnjT);
            var p = [parseInt(l["slice"](Math.max(r.IwXCL(l["length"], 8), 0)), 2)];
            return r.zYOsJ(o, 7) ? p[_](E.va(o), n) : p[_](n);
        };

        E["ecl"] = function (e) {
            for (var t = function (e, t) {
                return e < t;
            }, r = [], n = e[h](2).split(""), a = 0; t(n[d], 16); a += 1) n[u](0);

            return n = n.join(""), r[m](y[f](n[l](0, 8), 2), y[f](n[l](8, 16), 2)), r;
        };

        E["encode"] = function (e) {
            for (var t = {
                ruOQW: "0|7|1|8|9|2|5|6|4|3",
                IOPuJ: function (e, t) {
                    return e < t;
                },
                yZVLA: function (e, t) {
                    return e < t;
                },
                DMfaj: "4|5|8|6|1|2|7|3|0|9",
                EQeOY: function (e, t) {
                    return e | t;
                },
                SLAgv: function (e, t) {
                    return e << t;
                },
                oHtye: function (e, t) {
                    return e & t;
                },
                tgeDe: function (e, t) {
                    return e - t;
                },
                vhxrm: function (e, t) {
                    return e >> t;
                },
                RkSVL: function (e, t) {
                    return e - t;
                },
                ltuPG: function (e, t) {
                    return e(t);
                },
                SQNzX: function (e, t) {
                    return e - t;
                },
                qGiuF: function (e, t) {
                    return e(t);
                },
                vqEsN: function (e, t) {
                    return e & t;
                },
                ECGuI: function (e, t) {
                    return e + t;
                },
                MmXbI: function (e, t) {
                    return e + t;
                },
                DGENX: "9240gsB6PftGXnlQTw_pdvz7EekDmuAWCVZ5UF-MSK1IHOchoaxqYyj8Jb3LrNiR"
            }, r = t.ruOQW.split("|"), n = 0;;) {
                switch (r[n++]) {
                    case "0":
                        var a = {
                            lZVwo: function (e, r) {
                                return t.IOPuJ(e, r);
                            }
                        };
                        continue;

                    case "1":
                        var i = {
                            "_ê": new Array(4095),
                            "_bÌ": -1,
                            "_á": function (e) {
                                this._bÌ++, this._ê[this._bÌ] = e;
                            },
                            "_bÝ": function () {
                                return this._bÌ--, a.lZVwo(this._bÌ, 0) && (this._bÌ = 0), this._ê[this._bÌ];
                            }
                        };
                        continue;

                    case "2":
                        var o, c, u, h;
                        continue;

                    case "3":
                        return g.replace(/=/g, "");

                    case "4":
                        for (_ = 0; t.yZVLA(_, e[d]); _ = m._bK) for (var f = t.DMfaj.split("|"), l = 0;;) {
                            switch (f[l++]) {
                                case "0":
                                    i._bÌ -= 3;
                                    continue;

                                case "1":
                                    c = t.EQeOY(t.SLAgv(t.oHtye(i._ê[t.tgeDe(i._bÌ, 2)], 3), 4), t.vhxrm(i._ê[t.tgeDe(i._bÌ, 1)], 4));
                                    continue;

                                case "2":
                                    u = t.EQeOY(t.SLAgv(t.oHtye(i._ê[t.RkSVL(i._bÌ, 1)], 15), 2), t.vhxrm(i._ê[i._bÌ], 6));
                                    continue;

                                case "3":
                                    t.ltuPG(isNaN, i._ê[t.SQNzX(i._bÌ, 1)]) ? u = h = 64 : t.qGiuF(isNaN, i._ê[i._bÌ]) && (h = 64);
                                    continue;

                                case "4":
                                case "5":
                                    i._á(m._bf());

                                    continue;

                                case "6":
                                    o = t.vhxrm(i._ê[t.SQNzX(i._bÌ, 2)], 2);
                                    continue;

                                case "7":
                                    h = t.vqEsN(i._ê[i._bÌ], 63);
                                    continue;

                                case "8":
                                    i._á(m._bf());

                                    continue;

                                case "9":
                                    g = t.ECGuI(t.ECGuI(t.ECGuI(t.MmXbI(g, i._ê[o]), i._ê[c]), i._ê[u]), i._ê[h]);
                                    continue;
                            }

                            break;
                        }

                        continue;

                    case "5":
                        for (var _ = 0; t.yZVLA(_, v[d]); _++) i._á(v.charAt(_));

                        continue;

                    case "6":
                        i._á("=");

                        continue;

                    case "7":
                        var m = {
                            "_bÇ": e,
                            _bK: 0,
                            _bf: function () {
                                return e[p](this._bK++);
                            }
                        };
                        continue;

                    case "8":
                        var g = "";
                        continue;

                    case "9":
                        var v = t.DGENX;
                        continue;
                }

                break;
            }
        };
        pdd_encode = E;
    }
    encode_();
    function ss(e, t, r) {
        if ("string" != typeof e)
            throw new Error("The string parameter must be a string.");
        if (e.length < 1)
            throw new Error("The string parameter must be 1 character or longer.");
        if ("number" != typeof t)
            throw new Error("The length parameter must be a number.");
        if ("string" != typeof r && r)
            throw new Error("The character parameter must be a string.");
        var n = -1;
        for (t -= e.length,
             r || 0 === r || (r = " "); ++n < t; )
            e += r;
        return e
    }
    function nn(e) {
        e = e || 21;
        for (var t = ""; 0 < e--; )
            t += "_~varfunctio0125634789bdegjhklmpqswxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[64 * Math.random() | 0];
        return t
    }
    function nano_fp() {
        e = Date.now()
        r = String(e)["slice"](0,10)
        n = nn()
        a = (r + "_" + n)["split"]("")["reduce"](function(e, t) {
            return e + t["charCodeAt"](0)
        }, 0) % 1e3
        t = "nano_fp"
        c = ss(String(a), 3, "0")
        m =  pdd_encode["encode"]("" + r + c)["replace"](/=/g, "") + "_" + n;
        ['cookie', 'storage'].forEach(function (a) {
        try {
            var i = "nano_" + a + "_fp";
            B[i] = m
        } catch (e) {}
        })
        return m
    }
    var nano_fp_ck = nano_fp();
    function ue(url) {
        i = pdd_encode.sc(url);
        return []["concat"](pdd_encode.ek(7), pdd_encode.va(i["length"]), i, pdd_encode.va(0), [])
    }
    function fe() {
        return []["concat"](pdd_encode.ek(9, "3378536142949659-" + (new Date()).getTime()))
    }
    function le() {
        return []["concat"](pdd_encode.ek(10), pdd_encode.va(2304))
    }
    function pe(url) {
        return []["concat"](pdd_encode.ek(11, md5(url)))
    }
    function ge() {
        // 与useragent有关  "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
        return [120,139,1,77,111,122,105,108,108,97,47,53,46,48,32,40,105,80,104,111,110,101,59,32,67,80,85,32,105,80,104,111,110,101,32,79,83,32,49,51,95,50,95,51,32,108,105,107,101,32,77,97,99,32,79,83,32,88,41,32,65,112,112,108,101,87,101,98,75,105,116,47,54,48,53,46,49,46,49,53,32,40,75,72,84,77,76,44,32,108,105,107,101,32,71,101,99,107,111,41,32,86,101,114,115,105,111,110,47,49,51,46,48,46,51,32,77,111,98,105,108,101,47,49,53,69,49,52,56,32,83,97,102,97,114,105,47,54,48,52,46,49]
    }
    function ve() {
        var n = []
            , a = {};
        return a["nano_cookie_fp"] = 16,
            a["nano_storage_fp"] = 17,
            Object.keys(B)["forEach"](function(t) {
                var r = []["concat"](pdd_encode.ek(a[t], B[t]));
                n["push"](r)
            }),
            n
    }
    function Se() {
        //referer相关 "https://wap.yangkeduo.com/index.html"
        return [144,36,104,116,116,112,115,58,47,47,119,97,112,46,121,97,110,103,107,101,100,117,111,46,99,111,109,47,105,110,100,101,120,46,104,116,109,108]
    }
    function ye() {
        return []['concat'](pdd_encode.ek(19, pdd_user_id))
    }
    function Ee() {
        return []['concat'](pdd_encode.ek(20, api_uid))
    }
    function Ie(url) {
        var e;
        var n = (e = [])["concat"].apply(e, [[], [], ue(url), [64,247,2,155,5], fe(), le(), pe(url), [97,121], [105,121], [113,99], ge()].concat(function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];

                return r;
            }

            return Array.from(e);
        }(ve()), [Se(), ye(), Ee()]));

        for (var a = n["length"]["toString"](2)["split"](""), i = 0; a["length"] < 16; i += 1)
            a["unshift"]("0");
        a = a["join"]("");
        var o = [];
        o["push"](parseInt(a["substring"](0, 8), 2), parseInt(a["substring"](8, 16), 2)), n = []["concat"]([2], [1, 0, 0], o, n);
        var u = compress_arr["deflate"](n),
            f = []["map"]["call"](u, function (e) {
                return String["fromCharCode"](e);
            });
        return "0ao"+ pdd_encode["encode"](f["join"](""));
    }
    return [Ie(url),nano_fp_ck]
}

//
// url = 'https://wap.yangkeduo.com/login.html?from=https%3A%2F%2Fwap.yangkeduo.com%2Fgoods.html%3Fgoods_id%3D86253867950%26refer_page_el_sn%3D233771%26refer_page_name%3Dlogin%26refer_page_id%3D10169_1598586166453_tbsl10dqv3%26refer_page_sn%3D10169%26page_from%3D88%26refer_subjects_id%3D14%26refer_abtest_info%3D%257B%257D%26page_id%3D10014_1598586316770_eqmzl2nuw0%26is_back%3D1&refer_page_name=goods_detail&refer_page_id=10014_1598586316770_eqmzl2nuw0&refer_page_sn=10014&page_id=10169_1598586868180_zzo1rhhg07&is_back=1'
// console.log(f(url,'CiGInV9Ij7+wwwBZP5DhAg=='))