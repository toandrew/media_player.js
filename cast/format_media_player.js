// Copyright Google Inc. All Rights Reserved.
(function() {
    'use strict';
    var h, aa = aa || {},
        m = this,
        ba = function(a) {
            a = a.split(".");
            for (var b = m, c; c = a.shift();)
                if (null != b[c]) b = b[c];
                else return null;
            return b
        },
        ca = function() {},
        da = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        ea = function(a) {
            var b = da(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        n = function(a) {
            return "string" == typeof a
        },
        fa = function(a) {
            return "function" == da(a)
        };
    Math.random();
    var ga = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ha = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        ia = function(a, b, c) {
            ia = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ga : ha;
            return ia.apply(null, arguments)
        },
        ja = Date.now || function() {
            return +new Date
        },
        r = function(a, b) {
            var c = a.split("."),
                d = m;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
        },
        s = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.p = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.jh = function(a, c, f) {
                return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
            }
        };
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return ia.apply(null, c)
        }
        return ia(this, a)
    };
    var ka = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ka);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    s(ka, Error);
    ka.prototype.name = "CustomError";
    var la = function(a, b) {
            var c = String(b).toLowerCase(),
                d = String(a.substr(0, b.length)).toLowerCase();
            return 0 == (c < d ? -1 : c == d ? 0 : 1)
        },
        ma = function(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
            return d + c.join("%s")
        },
        na = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        va = function(a) {
            if (!oa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(pa, "&amp;")); - 1 != a.indexOf("<") && (a =
                a.replace(qa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ra, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(sa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ta, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ua, "&#0;"));
            return a
        },
        pa = /&/g,
        qa = /</g,
        ra = />/g,
        sa = /"/g,
        ta = /'/g,
        ua = /\x00/g,
        oa = /[\x00&<>"']/,
        wa = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    Math.random();
    var xa = function(a, b) {
        b.unshift(a);
        ka.call(this, ma.apply(null, b));
        b.shift()
    };
    s(xa, ka);
    xa.prototype.name = "AssertionError";
    var ya = function(a, b) {
        throw new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var t = Array.prototype,
        za = t.indexOf ? function(a, b, c) {
            return t.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (n(a)) return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Aa = t.lastIndexOf ? function(a, b, c) {
            return t.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
        } : function(a, b, c) {
            c = null == c ? a.length - 1 : c;
            0 > c && (c = Math.max(0, a.length + c));
            if (n(a)) return n(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
            for (; 0 <= c; c--)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ba = t.forEach ? function(a, b, c) {
            t.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Da = function(a) {
            var b;
            t: {
                b = Ca;
                for (var c = a.length, d = n(a) ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break t
                    }
                b = -1
            }
            return 0 > b ? null : n(a) ? a.charAt(b) : a[b]
        },
        Ea = function(a, b) {
            var c = za(a, b),
                d;
            (d = 0 <= c) && t.splice.call(a, c, 1);
            return d
        },
        Fa = function(a) {
            return t.concat.apply(t, arguments)
        },
        Ga = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c =
                        Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
    var Ha = function() {
            this.eg = ja()
        },
        Ia = new Ha;
    Ha.prototype.set = function(a) {
        this.eg = a
    };
    Ha.prototype.reset = function() {
        this.set(ja())
    };
    Ha.prototype.get = function() {
        return this.eg
    };
    var Ja = function(a) {
        this.Vg = a || "";
        this.Wg = Ia
    };
    h = Ja.prototype;
    h.Tf = !0;
    h.Vf = !0;
    h.Yg = !0;
    h.Xg = !0;
    h.Wf = !1;
    h.Zg = !1;
    var Ka = function(a) {
            return 10 > a ? "0" + a : String(a)
        },
        La = function(a, b) {
            var c = (a.Nb - b) / 1E3,
                d = c.toFixed(3),
                e = 0;
            if (1 > c) e = 2;
            else
                for (; 100 > c;) e++, c *= 10;
            for (; 0 < e--;) d = " " + d;
            return d
        },
        Ma = function(a) {
            Ja.call(this, a)
        };
    s(Ma, Ja);
    var Na = "StopIteration" in m ? m.StopIteration : Error("StopIteration"),
        Oa = function() {};
    Oa.prototype.next = function() {
        throw Na;
    };
    Oa.prototype.gh = function() {
        return this
    };
    var Pa = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        Qa = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Ra = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Ta = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Sa.length; f++) c = Sa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var Ua = function(a, b) {
        this.ua = {};
        this.O = [];
        this.ka = this.w = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof Ua ? (c = a.ib(), d = a.ha()) : (c = Ra(a), d = Qa(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
        }
    };
    h = Ua.prototype;
    h.na = function() {
        return this.w
    };
    h.ha = function() {
        Va(this);
        for (var a = [], b = 0; b < this.O.length; b++) a.push(this.ua[this.O[b]]);
        return a
    };
    h.ib = function() {
        Va(this);
        return this.O.concat()
    };
    h.bd = function(a) {
        return Wa(this.ua, a)
    };
    h.equals = function(a, b) {
        if (this === a) return !0;
        if (this.w != a.na()) return !1;
        var c = b || Xa;
        Va(this);
        for (var d, e = 0; d = this.O[e]; e++)
            if (!c(this.get(d), a.get(d))) return !1;
        return !0
    };
    var Xa = function(a, b) {
        return a === b
    };
    Ua.prototype.pa = function() {
        return 0 == this.w
    };
    Ua.prototype.clear = function() {
        this.ua = {};
        this.ka = this.w = this.O.length = 0
    };
    Ua.prototype.remove = function(a) {
        return Wa(this.ua, a) ? (delete this.ua[a], this.w--, this.ka++, this.O.length > 2 * this.w && Va(this), !0) : !1
    };
    var Va = function(a) {
        if (a.w != a.O.length) {
            for (var b = 0, c = 0; b < a.O.length;) {
                var d = a.O[b];
                Wa(a.ua, d) && (a.O[c++] = d);
                b++
            }
            a.O.length = c
        }
        if (a.w != a.O.length) {
            for (var e = {}, c = b = 0; b < a.O.length;) d = a.O[b], Wa(e, d) || (a.O[c++] = d, e[d] = 1), b++;
            a.O.length = c
        }
    };
    h = Ua.prototype;
    h.get = function(a, b) {
        return Wa(this.ua, a) ? this.ua[a] : b
    };
    h.set = function(a, b) {
        Wa(this.ua, a) || (this.w++, this.O.push(a), this.ka++);
        this.ua[a] = b
    };
    h.forEach = function(a, b) {
        for (var c = this.ib(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    h.clone = function() {
        return new Ua(this)
    };
    h.gh = function(a) {
        Va(this);
        var b = 0,
            c = this.O,
            d = this.ua,
            e = this.ka,
            f = this,
            g = new Oa;
        g.next = function() {
            for (;;) {
                if (e != f.ka) throw Error("The map has changed since the iterator was created");
                if (b >= c.length) throw Na;
                var g = c[b++];
                return a ? g : d[g]
            }
        };
        return g
    };
    var Wa = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Ya = function(a) {
            if ("function" == typeof a.ha) return a.ha();
            if (n(a)) return a.split("");
            if (ea(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Qa(a)
        },
        Za = function(a, b, c) {
            if ("function" == typeof a.forEach) a.forEach(b, c);
            else if (ea(a) || n(a)) Ba(a, b, c);
            else {
                var d;
                if ("function" == typeof a.ib) d = a.ib();
                else if ("function" != typeof a.ha)
                    if (ea(a) || n(a)) {
                        d = [];
                        for (var e = a.length, f = 0; f < e; f++) d.push(f)
                    } else d = Ra(a);
                else d = void 0;
                for (var e = Ya(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
            }
        };
    var $a;
    t: {
        var ab = m.navigator;
        if (ab) {
            var bb = ab.userAgent;
            if (bb) {
                $a = bb;
                break t
            }
        }
        $a = ""
    }
    var cb = function(a) {
        return -1 != $a.indexOf(a)
    };
    var db = cb("Opera") || cb("OPR"),
        eb = cb("Trident") || cb("MSIE"),
        fb = cb("Gecko") && -1 == $a.toLowerCase().indexOf("webkit") && !(cb("Trident") || cb("MSIE")),
        gb = -1 != $a.toLowerCase().indexOf("webkit"),
        hb = function() {
            var a = m.document;
            return a ? a.documentMode : void 0
        },
        jb = function() {
            var a = "",
                b;
            if (db && m.opera) return a = m.opera.version, fa(a) ? a() : a;
            fb ? b = /rv\:([^\);]+)(\)|;)/ : eb ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : gb && (b = /WebKit\/(\S+)/);
            b && (a = (a = b.exec($a)) ? a[1] : "");
            return eb && (b = hb(), b > parseFloat(a)) ? String(b) : a
        }(),
        kb = {},
        lb = function(a) {
            var b;
            if (!(b = kb[a])) {
                b = 0;
                for (var c = na(String(jb)).split("."), d = na(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        k = d[f] || "",
                        l = /(\d*)(\D*)/g,
                        q = /(\d*)(\D*)/g;
                    do {
                        var p = l.exec(g) || ["", "", ""],
                            u = q.exec(k) || ["", "", ""];
                        if (0 == p[0].length && 0 == u[0].length) break;
                        b = wa(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || wa(0 == p[2].length, 0 == u[2].length) || wa(p[2], u[2])
                    } while (0 == b)
                }
                b = kb[a] = 0 <= b
            }
            return b
        },
        mb = m.document,
        nb = mb && eb ? hb() || ("CSS1Compat" ==
            mb.compatMode ? parseInt(jb, 10) : 5) : void 0;
    var pb = function(a) {
            var b;
            b || (b = ob(a || arguments.callee.caller, []));
            return b
        },
        ob = function(a, b) {
            var c = [];
            if (0 <= za(b, a)) c.push("[...circular reference...]");
            else if (a && 50 > b.length) {
                c.push(qb(a) + "(");
                for (var d = a.arguments, e = 0; d && e < d.length; e++) {
                    0 < e && c.push(", ");
                    var f;
                    f = d[e];
                    switch (typeof f) {
                        case "object":
                            f = f ? "object" : "null";
                            break;
                        case "string":
                            break;
                        case "number":
                            f = String(f);
                            break;
                        case "boolean":
                            f = f ? "true" : "false";
                            break;
                        case "function":
                            f = (f = qb(f)) ? f : "[fn]";
                            break;
                        default:
                            f = typeof f
                    }
                    40 < f.length && (f = f.substr(0,
                        40) + "...");
                    c.push(f)
                }
                b.push(a);
                c.push(")\n");
                try {
                    c.push(ob(a.caller, b))
                } catch (g) {
                    c.push("[exception trying to get caller]\n")
                }
            } else a ? c.push("[...long stack...]") : c.push("[end]");
            return c.join("")
        },
        qb = function(a) {
            if (rb[a]) return rb[a];
            a = String(a);
            if (!rb[a]) {
                var b = /function ([^\(]+)/.exec(a);
                rb[a] = b ? b[1] : "[Anonymous]"
            }
            return rb[a]
        },
        rb = {};
    var sb = function(a, b, c, d, e) {
        this.reset(a, b, c, d, e)
    };
    sb.prototype.bb = 0;
    sb.prototype.Me = null;
    sb.prototype.Le = null;
    var tb = 0;
    sb.prototype.reset = function(a, b, c, d, e) {
        this.bb = "number" == typeof e ? e : tb++;
        this.Nb = d || ja();
        this.Wb = a;
        this.$g = b;
        this.Sf = c;
        delete this.Me;
        delete this.Le
    };
    sb.prototype.Se = function() {
        return this.Wb
    };
    sb.prototype.Ye = function(a) {
        this.Wb = a
    };
    sb.prototype.getMessage = function() {
        return this.$g
    };
    var ub = function(a) {
            this.Rb = a;
            this.gd = this.Ve = this.Wb = this.Sd = null
        },
        v = function(a, b) {
            this.name = a;
            this.value = b
        };
    v.prototype.toString = function() {
        return this.name
    };
    var vb = new v("SHOUT", 1200),
        wb = new v("SEVERE", 1E3),
        xb = new v("WARNING", 900),
        yb = new v("INFO", 800),
        zb = new v("CONFIG", 700),
        Ab = new v("FINE", 500),
        Bb = [new v("OFF", Infinity), vb, wb, xb, yb, zb, Ab, new v("FINER", 400), new v("FINEST", 300), new v("ALL", 0)],
        Cb = null,
        Db = function(a) {
            if (!Cb) {
                Cb = {};
                for (var b = 0, c; c = Bb[b]; b++) Cb[c.value] = c, Cb[c.name] = c
            }
            if (a in Cb) return Cb[a];
            for (b = 0; b < Bb.length; ++b)
                if (c = Bb[b], c.value <= a) return c;
            return null
        };
    h = ub.prototype;
    h.getName = function() {
        return this.Rb
    };
    h.getParent = function() {
        return this.Sd
    };
    h.getChildren = function() {
        this.Ve || (this.Ve = {});
        return this.Ve
    };
    h.Ye = function(a) {
        this.Wb = a
    };
    h.Se = function() {
        return this.Wb
    };
    var Eb = function(a) {
        if (a.Wb) return a.Wb;
        if (a.Sd) return Eb(a.Sd);
        ya("Root logger has no level set.");
        return null
    };
    ub.prototype.log = function(a, b, c) {
        if (a.value >= Eb(this).value)
            for (fa(b) && (b = b()), a = this.ag(a, b, c, ub.prototype.log), b = "log:" + a.getMessage(), m.console && (m.console.timeStamp ? m.console.timeStamp(b) : m.console.markTimeline && m.console.markTimeline(b)), m.msWriteProfilerMark && m.msWriteProfilerMark(b), b = this; b;) {
                c = b;
                var d = a;
                if (c.gd)
                    for (var e = 0, f = void 0; f = c.gd[e]; e++) f(d);
                b = b.getParent()
            }
    };
    ub.prototype.ag = function(a, b, c, d) {
        a = new sb(a, String(b), this.Rb);
        if (c) {
            a.Me = c;
            var e;
            d = d || ub.prototype.ag;
            try {
                var f;
                var g = ba("window.location.href");
                if (n(c)) f = {
                    message: c,
                    name: "Unknown error",
                    lineNumber: "Not available",
                    fileName: g,
                    stack: "Not available"
                };
                else {
                    var k, l;
                    b = !1;
                    try {
                        k = c.lineNumber || c.kh || "Not available"
                    } catch (q) {
                        k = "Not available", b = !0
                    }
                    try {
                        l = c.fileName || c.filename || c.sourceURL || m.$googDebugFname || g
                    } catch (p) {
                        l = "Not available", b = !0
                    }
                    f = !b && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {
                        message: c.message ||
                            "Not available",
                        name: c.name || "UnknownError",
                        lineNumber: k,
                        fileName: l,
                        stack: c.stack || "Not available"
                    }
                }
                e = "Message: " + va(f.message) + '\nUrl: <a href="view-source:' + f.fileName + '" target="_new">' + f.fileName + "</a>\nLine: " + f.lineNumber + "\n\nBrowser stack:\n" + va(f.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + va(pb(d) + "-> ")
            } catch (u) {
                e = "Exception trying to expose exception! You win, we lose. " + u
            }
            a.Le = e
        }
        return a
    };
    ub.prototype.info = function(a, b) {
        this.log(yb, a, b)
    };
    ub.prototype.config = function(a, b) {
        this.log(zb, a, b)
    };
    var Fb = {},
        Gb = null,
        Hb = function() {
            Gb || (Gb = new ub(""), Fb[""] = Gb, Gb.Ye(zb))
        },
        Ib = function() {
            Hb();
            return Gb
        },
        w = function(a) {
            Hb();
            var b;
            if (!(b = Fb[a])) {
                b = new ub(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1),
                    c = w(a.substr(0, c));
                c.getChildren()[d] = b;
                b.Sd = c;
                Fb[a] = b
            }
            return b
        };
    var Jb = function() {
        this.bh = ia(this.ah, this);
        this.Od = new Ma;
        this.Od.Vf = !1;
        this.Od.Wf = !1;
        this.$f = this.Od.Tf = !1;
        this.Uf = "";
        this.Ug = {}
    };
    Jb.prototype.ah = function(a) {
        if (!this.Ug[a.Sf]) {
            var b;
            b = this.Od;
            var c = [];
            c.push(b.Vg, " ");
            if (b.Vf) {
                var d = new Date(a.Nb);
                c.push("[", Ka(d.getFullYear() - 2E3) + Ka(d.getMonth() + 1) + Ka(d.getDate()) + " " + Ka(d.getHours()) + ":" + Ka(d.getMinutes()) + ":" + Ka(d.getSeconds()) + "." + Ka(Math.floor(d.getMilliseconds() / 10)), "] ")
            }
            b.Yg && c.push("[", La(a, b.Wg.get()), "s] ");
            b.Xg && c.push("[", a.Sf, "] ");
            b.Zg && c.push("[", a.Se().name, "] ");
            c.push(a.getMessage());
            b.Wf && a.Me && c.push("\n", a.Le);
            b.Tf && c.push("\n");
            b = c.join("");
            if (c = Kb) switch (a.Se()) {
                case vb:
                    Lb(c,
                        "info", b);
                    break;
                case wb:
                    Lb(c, "error", b);
                    break;
                case xb:
                    Lb(c, "warn", b);
                    break;
                default:
                    Lb(c, "debug", b)
            } else this.Uf += b
        }
    };
    var Mb = null,
        Kb = m.console,
        Lb = function(a, b, c) {
            if (a[b]) a[b](c);
            else a.log(c)
        };
    var Nb = /^(-)?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/,
        Ob = function(a, b, c, d, e, f) {
            n(a) ? (this.Yb = "y" == a ? b : 0, this.Xb = "m" == a ? b : 0, this.rb = "d" == a ? b : 0, this.sb = "h" == a ? b : 0, this.tb = "n" == a ? b : 0, this.ub = "s" == a ? b : 0) : (this.Yb = a || 0, this.Xb = b || 0, this.rb = c || 0, this.sb = d || 0, this.tb = e || 0, this.ub = f || 0)
        };
    Ob.prototype.equals = function(a) {
        return a.Yb == this.Yb && a.Xb == this.Xb && a.rb == this.rb && a.sb == this.sb && a.tb == this.tb && a.ub == this.ub
    };
    Ob.prototype.clone = function() {
        return new Ob(this.Yb, this.Xb, this.rb, this.sb, this.tb, this.ub)
    };
    Ob.prototype.add = function(a) {
        this.Yb += a.Yb;
        this.Xb += a.Xb;
        this.rb += a.rb;
        this.sb += a.sb;
        this.tb += a.tb;
        this.ub += a.ub
    };
    var x = function() {
        this.ed = this.ed;
        this.Td = this.Td
    };
    x.prototype.ed = !1;
    x.prototype.dispose = function() {
        this.ed || (this.ed = !0, this.t())
    };
    x.prototype.t = function() {
        if (this.Td)
            for (; this.Td.length;) this.Td.shift()()
    };
    var y = function(a, b) {
            a && a.log(wb, b, void 0)
        },
        z = function(a, b) {
            a && a.log(xb, b, void 0)
        },
        A = function(a, b) {
            a && a.info(b, void 0)
        },
        B = function(a, b) {
            a && a.log(Ab, b, void 0)
        };
    var Pb = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.$b = !1;
        this.Yf = !0
    };
    Pb.prototype.t = function() {};
    Pb.prototype.dispose = function() {};
    Pb.prototype.stopPropagation = function() {
        this.$b = !0
    };
    Pb.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Yf = !1
    };
    var Qb = function(a) {
        Qb[" "](a);
        return a
    };
    Qb[" "] = ca;
    var Rb;
    (Rb = !eb) || (Rb = eb && 9 <= nb);
    var Sb = Rb,
        Tb = eb && !lb("9");
    !gb || lb("528");
    fb && lb("1.9b") || eb && lb("8") || db && lb("9.5") || gb && lb("528");
    fb && !lb("8") || eb && lb("9");
    var Ub = function(a, b) {
        Pb.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.Ib = this.state = null;
        a && this.init(a, b)
    };
    s(Ub, Pb);
    Ub.prototype.init = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (fb) {
                var e;
                t: {
                    try {
                        Qb(d.nodeName);
                        e = !0;
                        break t
                    } catch (f) {}
                    e = !1
                }
                e || (d = null)
            }
        } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = gb || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = gb || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY :
            a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.state = a.state;
        this.Ib = a;
        a.defaultPrevented && this.preventDefault()
    };
    Ub.prototype.stopPropagation = function() {
        Ub.p.stopPropagation.call(this);
        this.Ib.stopPropagation ? this.Ib.stopPropagation() : this.Ib.cancelBubble = !0
    };
    Ub.prototype.preventDefault = function() {
        Ub.p.preventDefault.call(this);
        var a = this.Ib;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Tb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    Ub.prototype.t = function() {};
    var Vb = "closure_listenable_" + (1E6 * Math.random() | 0),
        Wb = 0;
    var Xb = function(a, b, c, d, e) {
            this.Zb = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.dd = !!d;
            this.Rd = e;
            this.key = ++Wb;
            this.removed = this.Qd = !1
        },
        Yb = function(a) {
            a.removed = !0;
            a.Zb = null;
            a.proxy = null;
            a.src = null;
            a.Rd = null
        };
    var Zb = function(a) {
        this.src = a;
        this.U = {};
        this.fd = 0
    };
    Zb.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.U[f];
        a || (a = this.U[f] = [], this.fd++);
        var g = $b(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Qd = !1)) : (b = new Xb(b, this.src, f, !!d, e), b.Qd = c, a.push(b));
        return b
    };
    Zb.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.U)) return !1;
        var e = this.U[a];
        b = $b(e, b, c, d);
        return -1 < b ? (Yb(e[b]), t.splice.call(e, b, 1), 0 == e.length && (delete this.U[a], this.fd--), !0) : !1
    };
    var ac = function(a, b) {
        var c = b.type;
        c in a.U && Ea(a.U[c], b) && (Yb(b), 0 == a.U[c].length && (delete a.U[c], a.fd--))
    };
    Zb.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.U)
            if (!a || c == a) {
                for (var d = this.U[c], e = 0; e < d.length; e++) ++b, Yb(d[e]);
                delete this.U[c];
                this.fd--
            }
        return b
    };
    Zb.prototype.Xe = function(a, b, c, d) {
        a = this.U[a.toString()];
        var e = -1;
        a && (e = $b(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    Zb.prototype.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return Pa(this.U, function(a) {
            for (var g = 0; g < a.length; ++g)
                if (!(c && a[g].type != d || e && a[g].dd != b)) return !0;
            return !1
        })
    };
    var $b = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.removed && f.Zb == b && f.dd == !!c && f.Rd == d) return e
        }
        return -1
    };
    var bc = "closure_lm_" + (1E6 * Math.random() | 0),
        cc = {},
        dc = 0,
        C = function(a, b, c, d, e) {
            if ("array" == da(b))
                for (var f = 0; f < b.length; f++) C(a, b[f], c, d, e);
            else if (c = ec(c), a && a[Vb]) a.listen(b, c, d, e);
            else {
                if (!b) throw Error("Invalid event type");
                var f = !!d,
                    g = fc(a);
                g || (a[bc] = g = new Zb(a));
                c = g.add(b, c, !1, d, e);
                c.proxy || (d = gc(), c.proxy = d, d.src = a, d.Zb = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(hc(b.toString()), d), dc++)
            }
        },
        gc = function() {
            var a = ic,
                b = Sb ? function(c) {
                    return a.call(b.src, b.Zb, c)
                } : function(c) {
                    c =
                        a.call(b.src, b.Zb, c);
                    if (!c) return c
                };
            return b
        },
        jc = function(a, b, c, d, e) {
            if ("array" == da(b))
                for (var f = 0; f < b.length; f++) jc(a, b[f], c, d, e);
            else c = ec(c), a && a[Vb] ? a.Ta.remove(String(b), c, d, e) : a && (a = fc(a)) && (b = a.Xe(b, c, !!d, e)) && kc(b)
        },
        kc = function(a) {
            if ("number" != typeof a && a && !a.removed) {
                var b = a.src;
                if (b && b[Vb]) ac(b.Ta, a);
                else {
                    var c = a.type,
                        d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c, d, a.dd) : b.detachEvent && b.detachEvent(hc(c), d);
                    dc--;
                    (c = fc(b)) ? (ac(c, a), 0 == c.fd && (c.src = null, b[bc] = null)) : Yb(a)
                }
            }
        },
        hc =
        function(a) {
            return a in cc ? cc[a] : cc[a] = "on" + a
        },
        mc = function(a, b, c, d) {
            var e = 1;
            if (a = fc(a))
                if (b = a.U[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.dd == c && !f.removed && (e &= !1 !== lc(f, d))
                    }
                return Boolean(e)
        },
        lc = function(a, b) {
            var c = a.Zb,
                d = a.Rd || a.src;
            a.Qd && kc(a);
            return c.call(d, b)
        },
        ic = function(a, b) {
            if (a.removed) return !0;
            if (!Sb) {
                var c = b || ba("window.event"),
                    d = new Ub(c, this),
                    e = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    t: {
                        var f = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break t
                        } catch (g) {
                            f = !0
                        }
                        if (f ||
                            void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (f = d.currentTarget; f; f = f.parentNode) c.push(f);
                    for (var f = a.type, k = c.length - 1; !d.$b && 0 <= k; k--) d.currentTarget = c[k],
                    e &= mc(c[k], f, !0, d);
                    for (k = 0; !d.$b && k < c.length; k++) d.currentTarget = c[k],
                    e &= mc(c[k], f, !1, d)
                }
                return e
            }
            return lc(a, new Ub(b, this))
        },
        fc = function(a) {
            a = a[bc];
            return a instanceof Zb ? a : null
        },
        nc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        ec = function(a) {
            if (fa(a)) return a;
            a[nc] || (a[nc] = function(b) {
                return a.handleEvent(b)
            });
            return a[nc]
        };
    var oc = function() {
        x.call(this);
        this.Ta = new Zb(this);
        this.fh = this;
        this.Oe = null
    };
    s(oc, x);
    oc.prototype[Vb] = !0;
    h = oc.prototype;
    h.addEventListener = function(a, b, c, d) {
        C(this, a, b, c, d)
    };
    h.removeEventListener = function(a, b, c, d) {
        jc(this, a, b, c, d)
    };
    h.dispatchEvent = function(a) {
        var b, c = this.Oe;
        if (c)
            for (b = []; c; c = c.Oe) b.push(c);
        var c = this.fh,
            d = a.type || a;
        if (n(a)) a = new Pb(a, c);
        else if (a instanceof Pb) a.target = a.target || c;
        else {
            var e = a;
            a = new Pb(d, c);
            Ta(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var g = b.length - 1; !a.$b && 0 <= g; g--) f = a.currentTarget = b[g], e = pc(f, d, !0, a) && e;
        a.$b || (f = a.currentTarget = c, e = pc(f, d, !0, a) && e, a.$b || (e = pc(f, d, !1, a) && e));
        if (b)
            for (g = 0; !a.$b && g < b.length; g++) f = a.currentTarget = b[g], e = pc(f, d, !1, a) && e;
        return e
    };
    h.t = function() {
        oc.p.t.call(this);
        this.Ta && this.Ta.removeAll(void 0);
        this.Oe = null
    };
    h.listen = function(a, b, c, d) {
        return this.Ta.add(String(a), b, !1, c, d)
    };
    var pc = function(a, b, c, d) {
        b = a.Ta.U[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.removed && g.dd == c) {
                var k = g.Zb,
                    l = g.Rd || g.src;
                g.Qd && ac(a.Ta, g);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.Yf
    };
    oc.prototype.Xe = function(a, b, c, d) {
        return this.Ta.Xe(String(a), b, c, d)
    };
    oc.prototype.hasListener = function(a, b) {
        return this.Ta.hasListener(void 0 !== a ? String(a) : void 0, b)
    };
    var qc = function(a, b, c) {
        if (fa(a)) c && (a = ia(a, c));
        else if (a && "function" == typeof a.handleEvent) a = ia(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : m.setTimeout(a, b || 0)
    };
    var rc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
        tc = function(a) {
            if (sc) {
                sc = !1;
                var b = m.location;
                if (b) {
                    var c = b.href;
                    if (c && (c = (c = tc(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname) throw sc = !0, Error();
                }
            }
            return a.match(rc)
        },
        sc = gb;
    var uc = function() {};
    uc.prototype.bg = null;
    var wc = function(a) {
        var b;
        (b = a.bg) || (b = {}, vc(a) && (b[0] = !0, b[1] = !0), b = a.bg = b);
        return b
    };
    var xc, yc = function() {};
    s(yc, uc);
    var zc = function(a) {
            return (a = vc(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        vc = function(a) {
            if (!a.dg && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.dg = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.dg
        };
    xc = new yc;
    var D = function(a) {
        oc.call(this);
        this.headers = new Ua;
        this.xd = a || null;
        this.jb = !1;
        this.vd = this.l = null;
        this.pf = this.Hc = "";
        this.Ma = 0;
        this.Mc = "";
        this.Hb = this.re = this.ud = this.se = !1;
        this.Ka = 0;
        this.N = null;
        this.Oc = "";
        this.wd = this.vc = !1
    };
    s(D, oc);
    D.prototype.a = w("goog.net.XhrIo");
    var Ac = /^https?$/i,
        Bc = ["POST", "PUT"],
        Cc = function(a) {
            a.Oc = "arraybuffer"
        };
    D.prototype.send = function(a, b, c, d) {
        if (this.l) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Hc + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.Hc = a;
        this.Mc = "";
        this.Ma = 0;
        this.pf = b;
        this.se = !1;
        this.jb = !0;
        this.l = this.qe();
        this.vd = this.xd ? wc(this.xd) : wc(xc);
        this.l.onreadystatechange = ia(this.tf, this);
        try {
            B(this.a, Dc(this, "Opening Xhr")), this.re = !0, this.l.open(b, String(a), !0), this.re = !1
        } catch (e) {
            B(this.a, Dc(this, "Error opening Xhr: " + e.message));
            Ec(this, e);
            return
        }
        a = c || "";
        var f =
            this.headers.clone();
        d && Za(d, function(a, b) {
            f.set(b, a)
        });
        d = Da(f.ib());
        c = m.FormData && a instanceof m.FormData;
        !(0 <= za(Bc, b)) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function(a, b) {
            this.l.setRequestHeader(b, a)
        }, this);
        this.Oc && (this.l.responseType = this.Oc);
        "withCredentials" in this.l && (this.l.withCredentials = this.vc);
        try {
            Fc(this), 0 < this.Ka && (this.wd = Gc(this.l), B(this.a, Dc(this, "Will abort after " + this.Ka + "ms if incomplete, xhr2 " + this.wd)), this.wd ? (this.l.timeout =
                this.Ka, this.l.ontimeout = ia(this.oa, this)) : this.N = qc(this.oa, this.Ka, this)), B(this.a, Dc(this, "Sending request")), this.ud = !0, this.l.send(a), this.ud = !1
        } catch (g) {
            B(this.a, Dc(this, "Send error: " + g.message)), Ec(this, g)
        }
    };
    var Gc = function(a) {
            return eb && lb(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout
        },
        Ca = function(a) {
            return "content-type" == a.toLowerCase()
        };
    D.prototype.qe = function() {
        return this.xd ? zc(this.xd) : zc(xc)
    };
    D.prototype.oa = function() {
        "undefined" != typeof aa && this.l && (this.Mc = "Timed out after " + this.Ka + "ms, aborting", this.Ma = 8, B(this.a, Dc(this, this.Mc)), this.dispatchEvent("timeout"), this.abort(8))
    };
    var Ec = function(a, b) {
            a.jb = !1;
            a.l && (a.Hb = !0, a.l.abort(), a.Hb = !1);
            a.Mc = b;
            a.Ma = 5;
            Hc(a);
            Ic(a)
        },
        Hc = function(a) {
            a.se || (a.se = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    D.prototype.abort = function(a) {
        this.l && this.jb && (B(this.a, Dc(this, "Aborting")), this.jb = !1, this.Hb = !0, this.l.abort(), this.Hb = !1, this.Ma = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Ic(this))
    };
    D.prototype.t = function() {
        this.l && (this.jb && (this.jb = !1, this.Hb = !0, this.l.abort(), this.Hb = !1), Ic(this, !0));
        D.p.t.call(this)
    };
    D.prototype.tf = function() {
        this.ed || (this.re || this.ud || this.Hb ? Jc(this) : this.dh())
    };
    D.prototype.dh = function() {
        Jc(this)
    };
    var Jc = function(a) {
            if (a.jb && "undefined" != typeof aa)
                if (a.vd[1] && 4 == Kc(a) && 2 == Lc(a)) B(a.a, Dc(a, "Local request error detected and ignored"));
                else if (a.ud && 4 == Kc(a)) qc(a.tf, 0, a);
            else if (a.dispatchEvent("readystatechange"), 4 == Kc(a)) {
                B(a.a, Dc(a, "Request complete"));
                a.jb = !1;
                try {
                    var b = Lc(a),
                        c, d;
                    t: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            d = !0;
                            break t;
                        default:
                            d = !1
                    }
                    if (!(c = d)) {
                        var e;
                        if (e = 0 === b) {
                            var f = tc(String(a.Hc))[1] || null;
                            if (!f && self.location) var g = self.location.protocol,
                                f = g.substr(0, g.length - 1);
                            e = !Ac.test(f ? f.toLowerCase() : "")
                        }
                        c = e
                    }
                    if (c) a.dispatchEvent("complete"), a.dispatchEvent("success");
                    else {
                        a.Ma = 6;
                        var k;
                        try {
                            k = 2 < Kc(a) ? a.l.statusText : ""
                        } catch (l) {
                            B(a.a, "Can not get status: " + l.message), k = ""
                        }
                        a.Mc = k + " [" + Lc(a) + "]";
                        Hc(a)
                    }
                } finally {
                    Ic(a)
                }
            }
        },
        Ic = function(a, b) {
            if (a.l) {
                Fc(a);
                var c = a.l,
                    d = a.vd[0] ? ca : null;
                a.l = null;
                a.vd = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    y(a.a, "Problem encountered resetting onreadystatechange: " + e.message)
                }
            }
        },
        Fc = function(a) {
            a.l &&
                a.wd && (a.l.ontimeout = null);
            "number" == typeof a.N && (m.clearTimeout(a.N), a.N = null)
        };
    D.prototype.vb = function() {
        return !!this.l
    };
    var Kc = function(a) {
            return a.l ? a.l.readyState : 0
        },
        Lc = function(a) {
            try {
                return 2 < Kc(a) ? a.l.status : -1
            } catch (b) {
                return -1
            }
        },
        Mc = function(a) {
            try {
                if (!a.l) return null;
                if ("response" in a.l) return a.l.response;
                switch (a.Oc) {
                    case "":
                    case "text":
                        return a.l.responseText;
                    case "arraybuffer":
                        if ("mozResponseArrayBuffer" in a.l) return a.l.mozResponseArrayBuffer
                }
                y(a.a, "Response type " + a.Oc + " is not supported on this browser");
                return null
            } catch (b) {
                return B(a.a, "Can not get response: " + b.message), null
            }
        };
    D.prototype.getResponseHeader = function(a) {
        return this.l && 4 == Kc(this) ? this.l.getResponseHeader(a) : void 0
    };
    D.prototype.getAllResponseHeaders = function() {
        return this.l && 4 == Kc(this) ? this.l.getAllResponseHeaders() : ""
    };
    var Dc = function(a, b) {
        return b + " [" + a.pf + " " + a.Hc + " " + Lc(a) + "]"
    };
    var Nc = function() {
            this.ea = [];
            this.S = []
        },
        Oc = function(a) {
            0 == a.ea.length && (a.ea = a.S, a.ea.reverse(), a.S = [])
        },
        Pc = function(a) {
            Oc(a);
            return a.ea.pop()
        },
        Qc = function(a) {
            Oc(a);
            a = a.ea;
            return a[a.length - 1]
        };
    h = Nc.prototype;
    h.na = function() {
        return this.ea.length + this.S.length
    };
    h.pa = function() {
        return 0 == this.ea.length && 0 == this.S.length
    };
    h.clear = function() {
        this.ea = [];
        this.S = []
    };
    h.contains = function(a) {
        return 0 <= za(this.ea, a) || 0 <= za(this.S, a)
    };
    h.remove = function(a) {
        var b = Aa(this.ea, a);
        if (0 > b) return Ea(this.S, a);
        t.splice.call(this.ea, b, 1);
        return !0
    };
    h.ha = function() {
        for (var a = [], b = this.ea.length - 1; 0 <= b; --b) a.push(this.ea[b]);
        for (var c = this.S.length, b = 0; b < c; ++b) a.push(this.S[b]);
        return a
    };
    var E = function(a, b) {
        var c;
        if (a instanceof E) this.ma = void 0 !== b ? b : a.ma, Rc(this, a.Va), c = a.Ub, F(this), this.Ub = c, c = a.Wa, F(this), this.Wa = c, Sc(this, a.uc), c = a.Ha, F(this), this.Ha = c, Tc(this, a.Ua.clone()), c = a.Tb, F(this), this.Tb = c;
        else if (a && (c = tc(String(a)))) {
            this.ma = !!b;
            Rc(this, c[1] || "", !0);
            var d = c[2] || "";
            F(this);
            this.Ub = Uc(d);
            d = c[3] || "";
            F(this);
            this.Wa = Uc(d, !0);
            Sc(this, c[4]);
            d = c[5] || "";
            F(this);
            this.Ha = Uc(d, !0);
            Tc(this, c[6] || "", !0);
            c = c[7] || "";
            F(this);
            this.Tb = Uc(c)
        } else this.ma = !!b, this.Ua = new Vc(null, 0, this.ma)
    };
    h = E.prototype;
    h.Va = "";
    h.Ub = "";
    h.Wa = "";
    h.uc = null;
    h.Ha = "";
    h.Tb = "";
    h.ih = !1;
    h.ma = !1;
    h.toString = function() {
        var a = [],
            b = this.Va;
        b && a.push(Wc(b, Xc, !0), ":");
        if (b = this.Wa) {
            a.push("//");
            var c = this.Ub;
            c && a.push(Wc(c, Xc, !0), "@");
            a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
            b = this.uc;
            null != b && a.push(":", String(b))
        }
        if (b = this.Ha) this.Wa && "/" != b.charAt(0) && a.push("/"), a.push(Wc(b, "/" == b.charAt(0) ? Yc : Zc, !0));
        (b = this.Ua.toString()) && a.push("?", b);
        (b = this.Tb) && a.push("#", Wc(b, $c));
        return a.join("")
    };
    h.resolve = function(a) {
        var b = this.clone(),
            c = !!a.Va;
        c ? Rc(b, a.Va) : c = !!a.Ub;
        if (c) {
            var d = a.Ub;
            F(b);
            b.Ub = d
        } else c = !!a.Wa;
        c ? (d = a.Wa, F(b), b.Wa = d) : c = null != a.uc;
        d = a.Ha;
        if (c) Sc(b, a.uc);
        else if (c = !!a.Ha) {
            if ("/" != d.charAt(0))
                if (this.Wa && !this.Ha) d = "/" + d;
                else {
                    var e = b.Ha.lastIndexOf("/"); - 1 != e && (d = b.Ha.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                for (var d = 0 == e.lastIndexOf("/", 0), e = e.split("/"), f = [], g = 0; g < e.length;) {
                    var k = e[g++];
                    "." == k ? d && g == e.length && f.push("") :
                        ".." == k ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(k), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? (F(b), b.Ha = d) : c = "" !== a.Ua.toString();
        c ? Tc(b, Uc(a.Ua.toString())) : c = !!a.Tb;
        c && (a = a.Tb, F(b), b.Tb = a);
        return b
    };
    h.clone = function() {
        return new E(this)
    };
    var Rc = function(a, b, c) {
            F(a);
            a.Va = c ? Uc(b, !0) : b;
            a.Va && (a.Va = a.Va.replace(/:$/, ""))
        },
        Sc = function(a, b) {
            F(a);
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.uc = b
            } else a.uc = null
        },
        Tc = function(a, b, c) {
            F(a);
            b instanceof Vc ? (a.Ua = b, a.Ua.We(a.ma)) : (c || (b = Wc(b, ad)), a.Ua = new Vc(b, 0, a.ma))
        },
        F = function(a) {
            if (a.ih) throw Error("Tried to modify a read-only Uri");
        };
    E.prototype.We = function(a) {
        this.ma = a;
        this.Ua && this.Ua.We(a);
        return this
    };
    var Uc = function(a, b) {
            return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
        },
        Wc = function(a, b, c) {
            return n(a) ? (a = encodeURI(a).replace(b, bd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        bd = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Xc = /[#\/\?@]/g,
        Zc = /[\#\?:]/g,
        Yc = /[\#\?]/g,
        ad = /[\#\?@]/g,
        $c = /#/g,
        Vc = function(a, b, c) {
            this.da = a || null;
            this.ma = !!c
        },
        dd = function(a) {
            if (!a.F && (a.F = new Ua, a.w = 0, a.da))
                for (var b = a.da.split("&"), c = 0; c < b.length; c++) {
                    var d = b[c].indexOf("="),
                        e = null,
                        f = null;
                    0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
                    e = decodeURIComponent(e.replace(/\+/g, " "));
                    e = cd(a, e);
                    a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
                }
        };
    h = Vc.prototype;
    h.F = null;
    h.w = null;
    h.na = function() {
        dd(this);
        return this.w
    };
    h.add = function(a, b) {
        dd(this);
        this.da = null;
        a = cd(this, a);
        var c = this.F.get(a);
        c || this.F.set(a, c = []);
        c.push(b);
        this.w++;
        return this
    };
    h.remove = function(a) {
        dd(this);
        a = cd(this, a);
        return this.F.bd(a) ? (this.da = null, this.w -= this.F.get(a).length, this.F.remove(a)) : !1
    };
    h.clear = function() {
        this.F = this.da = null;
        this.w = 0
    };
    h.pa = function() {
        dd(this);
        return 0 == this.w
    };
    h.bd = function(a) {
        dd(this);
        a = cd(this, a);
        return this.F.bd(a)
    };
    h.ib = function() {
        dd(this);
        for (var a = this.F.ha(), b = this.F.ib(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    h.ha = function(a) {
        dd(this);
        var b = [];
        if (n(a)) this.bd(a) && (b = Fa(b, this.F.get(cd(this, a))));
        else {
            a = this.F.ha();
            for (var c = 0; c < a.length; c++) b = Fa(b, a[c])
        }
        return b
    };
    h.set = function(a, b) {
        dd(this);
        this.da = null;
        a = cd(this, a);
        this.bd(a) && (this.w -= this.F.get(a).length);
        this.F.set(a, [b]);
        this.w++;
        return this
    };
    h.get = function(a, b) {
        var c = a ? this.ha(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    h.toString = function() {
        if (this.da) return this.da;
        if (!this.F) return "";
        for (var a = [], b = this.F.ib(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ha(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        return this.da = a.join("&")
    };
    h.clone = function() {
        var a = new Vc;
        a.da = this.da;
        this.F && (a.F = this.F.clone(), a.w = this.w);
        return a
    };
    var cd = function(a, b) {
        var c = String(b);
        a.ma && (c = c.toLowerCase());
        return c
    };
    Vc.prototype.We = function(a) {
        a && !this.ma && (dd(this), this.da = null, this.F.forEach(function(a, c) {
            var d = c.toLowerCase();
            c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.da = null, this.F.set(cd(this, d), Ga(a)), this.w += a.length))
        }, this));
        this.ma = a
    };
    Vc.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) Za(arguments[b], function(a, b) {
            this.add(b, a)
        }, this)
    };
    r("cast.player.api.VERSION", "1.0.0");
    r("cast.player.api.ErrorCode", {
        MANIFEST: 0,
        PLAYBACK: 1,
        MEDIAKEYS: 2,
        NETWORK: 3
    });
    r("cast.player.api.HlsSegmentFormat", {
        MPEG2_TS: 0,
        MPEG_AUDIO_ES: 1
    });
    r("cast.player.api.CaptionsType", {
        WEBVTT: "webvtt",
        TTML: "ttml",
        CEA608: "cea608"
    });
    r("cast.player.api.ContentProtection", {
        CLEARKEY: "clearkey",
        PLAYREADY: "playready",
        WIDEVINE: "widevine"
    });
    r("cast.player.api.LoggerLevel", {
        DEBUG: 0,
        INFO: 800,
        ERROR: 1E3,
        NONE: Infinity
    });
    var G = function() {
        this.timeoutInterval = 3E4;
        this.headers = this.url = null;
        this.withCredentials = !1;
        this.contentProtection = this.content = null
    };
    r("cast.player.api.RequestInfo", G);
    G.prototype.timeoutInterval = G.prototype.timeoutInterval;
    G.prototype.url = G.prototype.url;
    G.prototype.headers = G.prototype.headers;
    G.prototype.withCredentials = G.prototype.withCredentials;
    G.prototype.content = G.prototype.content;
    G.prototype.protectionSystem = G.prototype.yf;
    var H = function(a, b, c) {
        this.url = a;
        this.errorCode = b;
        this.status = c
    };
    r("cast.player.api.RequestStatus", H);
    H.prototype.url = H.prototype.url;
    H.prototype.errorCode = H.prototype.errorCode;
    H.prototype.status = H.prototype.status;
    var I = function(a, b, c, d) {
        this.codecs = a;
        this.mimeType = b;
        this.bitrates = c;
        this.language = d || null
    };
    r("cast.player.api.StreamInfo", I);
    I.prototype.codecs = I.prototype.codecs;
    I.prototype.mimeType = I.prototype.mimeType;
    I.prototype.bitrates = I.prototype.bitrates;
    I.prototype.language = I.prototype.language;
    window.VTTCue = window.VTTCue || window.TextTrackCue;
    var ed = function(a) {
        Ib().Ye(Db(a))
    };
    r("cast.player.api.setLoggerLevel", ed);
    var fd = Mb = new Jb;
    if (1 != fd.$f) {
        var gd = Ib(),
            hd = fd.bh;
        gd.gd || (gd.gd = []);
        gd.gd.push(hd);
        fd.$f = !0
    }
    ed(1E3);
    var J = function(a) {
        this.initialBandwidth = 2097152;
        this.autoResumeDuration = 10;
        this.autoPauseDuration = 1;
        this.mediaElement = a.mediaElement;
        this.url = a.url;
        this.licenseUrl = a.licenseUrl || null;
        this.licenseCustomData = a.licenseCustomData || null;
        this.processLicense = this.processMetadata = this.prepareLicenseRequest = this.getQualityLevel = this.trackBandwidth = this.updateCaptionsRequestInfo = this.updateSegmentRequestInfo = this.updateLicenseRequestInfo = this.updateManifestRequestInfo = this.onError = null
    };
    r("cast.player.api.Host", J);
    J.prototype.onError = J.prototype.onError;
    J.prototype.updateManifestRequestInfo = J.prototype.updateManifestRequestInfo;
    J.prototype.updateLicenseRequestInfo = J.prototype.updateLicenseRequestInfo;
    J.prototype.updateSegmentRequestInfo = J.prototype.updateSegmentRequestInfo;
    J.prototype.updateCaptionsRequestInfo = J.prototype.updateCaptionsRequestInfo;
    J.prototype.trackBandwidth = J.prototype.trackBandwidth;
    J.prototype.getQualityLevel = J.prototype.getQualityLevel;
    J.prototype.prepareLicenseRequest = J.prototype.prepareLicenseRequest;
    J.prototype.processMetadata = J.prototype.processMetadata;
    J.prototype.processLicense = J.prototype.processLicense;
    var K = function(a, b, c) {
        if (a.onError) a.onError(b, c)
    };
    var jd = function(a, b) {
            var c;
            b ? (c = new Uint8Array(new ArrayBuffer(16)), c.set(a), id(c.subarray(0, 4)), id(c.subarray(4, 6)), id(c.subarray(6, 8))) : c = a;
            this.ad = c
        },
        kd = new jd([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]),
        ld = new jd([237, 239, 139, 169, 121, 214, 74, 206, 163, 200, 39, 220, 213, 29, 33, 237]);
    jd.prototype.equals = function(a) {
        if (null === a) return !1;
        var b = this.ad;
        a = a.ad;
        for (var c = 0; 16 > c; c++)
            if (b[c] !== a[c]) return !1;
        return !0
    };
    var id = function(a) {
            for (var b = 0, c = a.length - 1; b < c; b++, c--) {
                var d = a[b];
                a[b] = a[c];
                a[c] = d
            }
        },
        md = function(a) {
            for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
            return b
        };
    var od = function(a) {
        this.G = nd(a)
    };
    od.prototype.reset = function(a) {
        this.G = nd(a)
    };
    var nd = function(a) {
        for (var b = -1, c = 0; c < a.length; c++) {
            var d = parseInt(a.charAt(c), 10);
            if (isNaN(d)) throw Error("Invalid positive base 10 integer string");
            0 > b && d && (b = c)
        }
        return a.substr(b, a.length)
    };
    od.prototype.toString = function() {
        return this.G
    };
    od.prototype.add = function(a) {
        if (0 > a || Math.floor(a) != a) throw Error("Value must be a positive integer");
        var b = a + "",
            c = Math.max(b.length, this.G.length);
        a = [];
        for (var d = 0, e = 0; e < c; e++) {
            var f = d + parseInt(e < b.length ? b.charAt(b.length - 1 - e) : "0", 10) + parseInt(e < this.G.length ? this.G.charAt(this.G.length - 1 - e) : "0", 10);
            10 <= f ? (d = 1, f -= 10) : d = 0;
            a.push(f)
        }
        b = 0 < d ? "1" : "";
        for (e = a.length - 1; 0 <= e; e--) b += a[e];
        this.G = b
    };
    var pd = function(a, b) {
        if (b.G.length < a.G.length) return !0;
        if (b.G.length > a.G.length) return !1;
        for (var c = 0; c < b.G.length; c++) {
            var d = parseInt(a.G.charAt(c), 10),
                e = parseInt(b.G.charAt(c), 10);
            if (d < e) return !1;
            if (d > e) break
        }
        return !0
    };
    var qd = function(a) {
            this.buffer = a;
            this.cg = new DataView(a.buffer, a.byteOffset);
            this.offset = 0
        },
        rd = function(a) {
            return a.buffer[a.offset++]
        },
        sd = function(a) {
            var b = a.cg.getUint16(a.offset);
            a.offset += 2;
            return b
        },
        L = function(a) {
            var b = a.cg.getUint32(a.offset);
            a.offset += 4;
            return b
        },
        td = function(a) {
            var b = L(a);
            a = L(a);
            return 4294967296 * b + a
        },
        ud = function(a, b) {
            var c = a.buffer.subarray(a.offset, a.offset + b);
            a.offset += b;
            return c
        },
        vd = function(a, b) {
            a.offset += b
        };
    var wd = function(a) {
            this.buffer = new Uint8Array(new ArrayBuffer(a ? a : 2E4));
            this.offset = 0
        },
        xd = function(a) {
            return a.buffer.subarray(0, a.offset)
        },
        N = function(a, b) {
            M(a, [b >> 24, b >> 16, b >> 8, b])
        },
        M = function(a, b) {
            var c = b.length;
            if (!(a.offset + c <= a.buffer.length)) {
                for (var d = a.buffer.length; d < a.offset + c;) d *= 2;
                d = new Uint8Array(new ArrayBuffer(d));
                d.set(a.buffer, 0);
                a.buffer = d
            }
            a.buffer.set(b, a.offset);
            a.offset += c
        };
    var yd = function(a) {
        this.name = a
    };
    yd.prototype.parse = function() {};
    var O = function(a) {
        this.name = a;
        this.value = null
    };
    s(O, yd);
    O.prototype.parse = function(a) {
        this.value = parseInt(a, 10)
    };
    var P = function(a, b) {
        this.name = a;
        this.value = b || null
    };
    s(P, yd);
    P.prototype.parse = function(a) {
        this.value = a
    };
    var zd = function(a) {
        this.name = a;
        this.value = null
    };
    s(zd, yd);
    zd.prototype.parse = function(a) {
        this.value = "true" === a.toLowerCase()
    };
    var Ad = function(a) {
        O.call(this, a)
    };
    s(Ad, O);
    Ad.prototype.parse = function(a) {
        if (a = a.match(Nb)) {
            var b = !(a[6] || a[7] || a[8]);
            if (b && !(a[2] || a[3] || a[4]) || b && a[5]) a = null;
            else {
                var b = parseInt(a[2], 10) || 0,
                    c = parseInt(a[3], 10) || 0,
                    d = parseInt(a[4], 10) || 0,
                    e = parseInt(a[6], 10) || 0,
                    f = parseInt(a[7], 10) || 0,
                    g = parseFloat(a[8]) || 0;
                a = a[1] ? new Ob(-b, -c, -d, -e, -f, -g) : new Ob(b, c, d, e, f, g)
            }
        } else a = null;
        this.value = 60 * (60 * (24 * a.rb + a.sb) + a.tb) + a.ub
    };
    var Bd = function(a) {
        this.name = a;
        this.value = null
    };
    s(Bd, yd);
    Bd.prototype.parse = function(a) {
        a = a.toUpperCase();
        0 <= a.indexOf("9A04F079-9840-4286-AB92-E65BE0885F95") ? this.value = kd : 0 <= a.indexOf("EDEF8BA9-79D6-4ACE-A3C8-27DCD51D21ED") && (this.value = ld)
    };
    var Q = function(a, b) {
        for (var c in b)
            if (b.hasOwnProperty(c) && b[c] instanceof yd) {
                var d = b[c],
                    e = a.getNamedItem(d.name);
                e && d.parse(e.value)
            }
    };
    var R = function(a) {
        x.call(this);
        this.He = a;
        this.Ge = this.$c = null;
        this.Y = 0;
        this.e = new D;
        C(this.e, "success", this.Ec, !1, this);
        C(this.e, "error", this.yb, !1, this);
        C(this.e, "timeout", this.Ff, !1, this);
        C(this.e, "ready", this.je, !1, this)
    };
    s(R, x);
    R.prototype.t = function() {
        this.e.dispose();
        R.p.t.call(this)
    };
    R.prototype.load = function(a) {
        this.$c = a.url;
        this.Ge = a.headers;
        this.e.vc = a.withCredentials;
        this.e.Ka = Math.max(0, a.timeoutInterval);
        this.Y = 0;
        this.e.send(this.$c, void 0, void 0, this.Ge)
    };
    R.prototype.abort = function() {
        this.e.abort()
    };
    R.prototype.getUrl = function() {
        return this.$c
    };
    var Cd = function(a) {
        return new H(a.$c, a.e.Ma, Lc(a.e))
    };
    R.prototype.Ec = function(a) {
        a = Mc(a.target);
        this.Y = 0;
        this.He.Ba(a)
    };
    R.prototype.yb = function() {
        408 === Lc(this.e) ? this.Ff() : (this.Y = 0, this.He.Ba(null))
    };
    R.prototype.Ff = function() {
        this.Y++;
        3 < this.Y && (this.Y = 0, this.He.Ba(null))
    };
    R.prototype.je = function() {
        0 < this.Y && this.e.send(this.$c, void 0, void 0, this.Ge)
    };
    var Dd = function(a, b) {
            var c = md(window.atob(b.trim())),
                d = "";
            if (c[7] << 8 | 1 !== c[6]) return null;
            for (var e = c[9] << 8 | c[8], e = e + 10, f = 10; f < e; f += 2) d += String.fromCharCode(c[f + 1] << 8 | c[f]);
            f = e = null;
            for (d = (new DOMParser).parseFromString(d.trim(), "text/xml").childNodes[0].firstElementChild.firstElementChild; null != d; d = d.nextElementSibling) "LA_URL" === d.nodeName ? f = d.textContent : "KID" === d.nodeName && (e = md(window.atob(d.textContent)));
            return e ? {
                systemId: a,
                Gd: c,
                Hd: new jd(e, !0),
                url: f,
                Ae: 8
            } : null
        },
        S = function(a) {
            this.host = a;
            this.Ra = this.Kb = this.uri = null;
            this.Q = !1;
            this.duration = -1;
            this.n = []
        };
    S.prototype.getStreamCount = function() {
        return this.n.length
    };
    r("cast.player.common.StreamingProtocolBase.prototype.getStreamCount", S.prototype.getStreamCount);
    S.prototype.enableStream = function(a, b) {
        var c = this.n[a];
        3 !== c.type && (c.ca = !0);
        c.index = -1;
        c.C = -1;
        c.enabled = b
    };
    r("cast.player.common.StreamingProtocolBase.prototype.enableStream", S.prototype.enableStream);
    S.prototype.isStreamEnabled = function(a) {
        return this.n[a].enabled
    };
    r("cast.player.common.StreamingProtocolBase.prototype.isStreamEnabled", S.prototype.isStreamEnabled);
    S.prototype.getQualityLevel = function(a) {
        return this.n[a].C
    };
    r("cast.player.common.StreamingProtocolBase.prototype.getQualityLevel", S.prototype.getQualityLevel);
    S.prototype.getStreamInfo = function(a) {
        a = this.n[a];
        for (var b = [], c = 0; c < a.s.length; c++) b.push(a.s[c].V);
        return new I(a.codecs, a.mimeType, b, a.language)
    };
    r("cast.player.common.StreamingProtocolBase.prototype.getStreamInfo", S.prototype.getStreamInfo);
    h = S.prototype;
    h.Ba = function() {
        for (var a = !0, b = !0, c = 0; c < this.n.length; c++) {
            var d = this.n[c];
            1 === d.type ? (d.enabled = a, a = !1) : 2 === d.type && (d.enabled = b, b = !1)
        }
        this.Ra.Fd();
        this.Ra = null
    };
    h.load = function(a) {
        this.Ra = a;
        this.Zf()
    };
    h.Zf = function() {
        var a = this.host.url;
        this.uri = new E(a);
        var b = new G;
        b.url = a;
        this.host.updateManifestRequestInfo && this.host.updateManifestRequestInfo(b);
        this.Kb = new R(this);
        this.Kb.load(b)
    };
    h.pb = function() {
        this.Kb && (this.Kb.dispose(), this.Kb = null)
    };
    h.Md = function(a, b, c) {
        a = this.n[a];
        a.C = b;
        3 !== a.type && (a.ca = !0);
        Ed(c)
    };
    h.Ed = function() {
        return null
    };
    h.updateLicenseRequestInfo = function() {};
    h.Xf = function() {
        return this.Q ? -1 : this.duration
    };
    h.qa = function(a) {
        a = this.n[a];
        var b = a.C;
        if (0 > b) return null;
        a = a.s[b];
        var c = a.g;
        if (0 === c.length) return null;
        var b = c[0].time,
            d = c.length - 1,
            c = c[d].time + c[d].duration;
        this.Q && (c -= 20, c < b && (c = b));
        return {
            start: b - a.B,
            end: c - a.B
        }
    };
    h.seek = function(a, b) {
        var c = this.n[a],
            d = c.s[c.C],
            e = d.g,
            f = this.qa(a);
        if (!f) return !1;
        b < f.start && (b = f.start);
        b > f.end && (b = f.end);
        b += d.B;
        for (d = e.length - 1; 0 <= d; d--)
            if (b >= e[d].time) return c.index = 0 < d ? d - 1 : 0, !0;
        return !1
    };
    h.cb = function(a) {
        a = this.n[a];
        var b = a.index + 1;
        return b < a.s[a.C].g.length ? (a.index = b, !0) : !1
    };
    h.eb = function(a) {
        var b = this.n[a];
        a = b.index;
        b = b.s[b.C].g;
        return !this.Q && a === b.length - 1
    };
    h.va = function(a) {
        var b = this.n[a],
            c = b.C;
        return 0 <= c && (a = b.index, 0 <= a) ? (b = b.s[c], c = b.g, {
            time: c[a].time - b.B,
            duration: c[a].duration
        }) : {
            time: 0,
            duration: 0
        }
    };
    h.reset = function(a) {
        this.n[a].index = -1
    };
    h.Df = function(a) {
        return this.n[a].ca
    };
    h.Ie = function() {
        return null
    };
    h.updateSegmentRequestInfo = function() {};
    h.Ob = function() {};
    var Fd = function() {
        this.f = null;
        this.Tc = this.Sc = this.Cf = this.Fe = this.Ld = this.Zc = this.r = 0
    };
    Fd.prototype.pa = function() {
        return null === this.f
    };
    Fd.prototype.init = function(a) {
        this.f = a;
        this.Tc = this.Sc = this.Fe = this.Ld = this.Zc = this.r = 0
    };
    Fd.prototype.parse = function() {
        for (var a = this.r; this.r < this.f.length && !(524288 < this.r - a);) {
            for (; this.r < this.f.length && 71 !== this.f[this.r];) this.r++;
            if (this.r + 188 > this.f.length) break;
            var b = this.r + 188,
                c = b - 1;
            this.r++;
            var d = this.f[this.r] & 64,
                e = this.f[this.r] & 31;
            this.r++;
            e = e << 8 | this.f[this.r];
            this.r++;
            var f = (this.f[this.r] & 48) >> 4;
            this.r++;
            f & 2 && (this.r += this.f[this.r] + 1);
            if (0 === e || e === this.Zc)
                if (d && this.r++, c = this.f[this.r], this.r++, 0 == c)
                    for (c = this.r, d = this.f[c] & 15, c++, d = d << 8 | this.f[c], c++, e = c, c += 5; c < e +
                        d;)
                        if (f = this.f[c], c++, f = (f << 8) + this.f[c], c++, 0 === f) c += 2;
                        else {
                            this.Zc = this.f[c] & 31;
                            c++;
                            this.Zc = (this.Zc << 8) + this.f[c];
                            break
                        } else {
                if (2 == c)
                    for (d = c = this.r, e = this.f[c] & 15, c++, e = e << 8 | this.f[c], c++, c += 5, c += 2, f = this.f[c] & 15, c++, f = f << 8 | this.f[c], c += f + 1; c < d + e;) {
                        f = this.f[c];
                        c++;
                        var g = this.f[c] & 31;
                        c++;
                        g = g << 8 | this.f[c];
                        c++;
                        switch (f) {
                            case 27:
                                this.Ld = g;
                                break;
                            case 15:
                                this.Fe = g;
                                break;
                            case 21:
                                this.Cf = g
                        }
                        f = this.f[c] & 15;
                        c++;
                        f = f << 8 | this.f[c];
                        c += f + 1
                    }
            } else if (e === this.Cf) d && this.If(this.r);
            else if (e === this.Ld || e === this.Fe) d &&
                this.De(this.r), e === this.Ld && this.Hf(this.r, c);
            this.r = b
        }
    };
    var Gd = function(a, b) {
        var c = ((a.f[b] & 14) << 13) / 1.373291015625,
            c = c + (a.f[b + 1] << 6) / 1.373291015625,
            c = c + (a.f[b + 2] & 254) / 5.4931640625,
            c = c + a.f[b + 3] / 703.125;
        return c += (a.f[b + 4] & 254) / 18E4
    };
    Fd.prototype.De = function(a) {
        if (0 === this.f[a] && 0 === this.f[a + 1] && 1 === this.f[a + 2]) {
            a += 7;
            var b = this.f[a] >> 6 & 3;
            a++;
            var c = this.f[a];
            a++;
            this.r = a + c;
            2 === b ? this.Tc = this.Sc = Gd(this, a) : 3 === b && (this.Sc = Gd(this, a), this.Tc = Gd(this, a + 5))
        }
    };
    Fd.prototype.If = function() {};
    Fd.prototype.Hf = function() {};
    var Hd = function() {};
    r("cast.player.core.CurrentTimeCallback", Hd);
    Hd.prototype.fc = function() {};
    var Id = function() {};
    r("cast.player.core.PlayerCallbacks", Id);
    Id.prototype.zc = function() {};
    Id.prototype.vf = function() {};
    Id.prototype.Ef = function() {};
    var Jd = function(a, b, c) {
        this.c = a;
        this.h = b;
        this.Lb = c;
        this.xb = this.c.initialBandwidth;
        this.Cc = 0;
        this.pd = null
    };
    Jd.prototype.a = w("cast.player.core.QualityManager");
    Jd.prototype.oe = function(a, b) {
        var c = Date.now();
        if (!b && null !== this.pd && 1E4 > c - this.pd) return a;
        this.pd = c;
        for (var c = .7 * this.xb, d = -1, e = Number.MAX_VALUE, f = 0, g = 0; g < this.Lb.length; g++) {
            if (c >= this.Lb[g]) {
                var k = c - this.Lb[g];
                k < e && (d = g, e = k)
            }
            this.Lb[f] > this.Lb[g] && (f = g)
        }
        c = 0 > d ? f : d;
        this.c.getQualityLevel && (c = this.c.getQualityLevel(this.h, c));
        c !== a && A(this.a, this.h + ": from " + this.Lb[a] + " to " + this.Lb[c]);
        return c
    };
    var Kd = function() {};
    r("cast.player.core.ProcessSourceDataCallback", Kd);
    Kd.prototype.Id = function() {};
    var Ld = function(a, b, c, d) {
        x.call(this);
        this.qg = d;
        this.Z = c;
        this.h = a;
        this.zd = !1;
        this.ia = null;
        this.ra = this.Z.addSourceBuffer(b.mimeType + '; codecs="' + b.codecs + '"');
        this.Db = new Nc;
        this.Nc = 0;
        C(this.ra, "updateend", this.Af, !1, this)
    };
    s(Ld, x);
    h = Ld.prototype;
    h.t = function() {
        this.Db.clear();
        jc(this.ra, "updateend", this.Af, !1, this);
        "closed" !== this.Z.readyState && this.Z.removeSourceBuffer(this.ra);
        Ld.p.t.call(this)
    };
    h.a = w("cast.player.core.SourceBufferManager");
    h.ya = function(a) {
        return this.ia ? this.ia.time + this.ia.duration - a + this.Nc : 0
    };
    h.reset = function() {
        this.ia = null;
        this.Kc() ? Md(this) : (A(this.a, this.h + ": queue abort"), this.Db.S.push({
            ve: 0,
            ue: null
        }));
        this.Kc() ? Nd(this) : (A(this.a, this.h + ": queue remove"), this.Db.S.push({
            ve: 1,
            ue: null
        }))
    };
    h.Kc = function() {
        return !this.zd && this.Db.pa()
    };
    h.Af = function() {
        for (var a = this.ra.buffered, b = 0; b < a.length; b++) A(this.a, this.h + ": " + a.start(b) + " - " + a.end(b));
        A(this.a, this.h + ": updateend");
        for (this.zd = !1; !this.Db.pa();) switch (a = Pc(this.Db), b = a.ue, a.ve) {
            case 2:
                A(this.a, this.h + ": dequeue append");
                this.Nc -= b.interval.duration;
                Od(this, b.data, b.interval, b.B, b.K);
                return;
            case 1:
                A(this.a, this.h + ": dequeue remove");
                Nd(this);
                return;
            case 0:
                A(this.a, this.h + ": dequeue abort"), Md(this)
        }
    };
    var Od = function(a, b, c, d, e) {
            e ? (Md(a), c.time = Pd(a, c.time), a.ra.timestampOffset = c.time - d, A(a.a, a.h + ": timestampOffset = " + a.ra.timestampOffset)) : c.time = Pd(a, c.time);
            A(a.a, a.h + ": append");
            a.zd = !0;
            a.ra.appendBuffer(b);
            a.ia = c;
            a.qg.Id(b, a.ra.timestampOffset)
        },
        Md = function(a) {
            "open" === a.Z.readyState ? (A(a.a, a.h + ": abort"), a.ra.abort()) : z(a.a, a.h + ": unable to abort")
        },
        Nd = function(a) {
            A(a.a, a.h + ": remove");
            a.zd = !0;
            a.ra.remove(0, a.Z.duration)
        };
    Ld.prototype.append = function(a, b, c, d) {
        this.Kc() ? Od(this, a, b, c, d) : (A(this.a, this.h + ": queue append"), this.Nc += b.duration, this.Db.S.push({
            ve: 2,
            ue: {
                data: a,
                interval: b,
                B: c,
                K: d
            }
        }))
    };
    var Pd = function(a, b) {
        if (!a.ia) return b;
        for (var c = a.ra.buffered, d = c.length - 1; 0 <= d; d--) {
            var e = c.end(d);
            if (b >= c.start(d) && b <= e) break;
            if (e < b) {
                A(a.a, "adjustTime: " + b + " : " + e);
                b = e;
                break
            }
        }
        return b
    };
    var Qd = function() {
        this.Nd = 30
    };
    Qd.prototype.a = w("cast.player.core.TtmlParser");
    var Rd = /([0-9]*\.?[0-9]+)?(h|ms|m|s|f)/,
        Sd = function(a, b) {
            for (var c = 0; c < a.length; c++)
                if (a[c].localName === b) return a[c];
            return null
        },
        Td = function(a, b) {
            var c = b.split(":");
            if (1 === c.length) {
                var d = 0;
                if (c = c[0].match(Rd)) {
                    var e = parseFloat(c[1]);
                    switch (c[2]) {
                        case "h":
                            d = 3600 * e;
                            break;
                        case "m":
                            d = 60 * e;
                            break;
                        case "s":
                            d = e;
                            break;
                        case "ms":
                            d = e / 1E3;
                            break;
                        case "f":
                            d = e / a.Nd
                    }
                } else z(a.a, "unsupported time expression: " + b);
                return d
            }
            d = 3600 * parseInt(c[0], 10) + 60 * parseInt(c[1], 10) + parseFloat(c[2]);
            4 === c.length && (d += parseInt(c[3],
                10) / a.Nd);
            return d
        },
        Ud = function(a) {
            var b = "";
            a = a.childNodes;
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                d.nodeType === Node.TEXT_NODE ? (d = d.textContent.trim()) && (b += d) : "span" === d.localName ? (b += Ud(d), (d = d.attributes.getNamedItem("tts:fontStyle")) && "italic" === d.value && (b = "<i>" + b + "</i>")) : "br" === d.localName && (b += "\n")
            }
            return b
        };
    Qd.prototype.parse = function(a, b) {
        var c = [],
            d = (new DOMParser).parseFromString(a, "text/xml"),
            e = Sd(d.childNodes, "tt");
        if (!e) return z(this.a, "missing tt"), c;
        d = Sd(e.childNodes, "body");
        if (!d) return z(this.a, "missing body"), c;
        (e = e.attributes.getNamedItem("ttp:frameRate")) ? this.Nd = parseInt(e.value, 10): (z(this.a, "defaulting frameRate to30"), this.Nd = 30);
        d = Sd(d.childNodes, "div");
        if (!d) return z(this.a, "missing div"), c;
        for (e = 0; e < d.childNodes.length; e++) {
            var f = d.childNodes[e];
            if ("p" === f.localName) {
                for (var g = null,
                        k = null, l = Ud(f), q = 0; q < f.attributes.length; q++) {
                    var p = f.attributes[q];
                    "begin" === p.localName ? g = Td(this, p.value) + b : "end" === p.localName && (k = Td(this, p.value) + b)
                }
                l && null !== g && null !== k ? c.push(new VTTCue(g, k, l)) : z(this.a, "skipped cue, begin=" + g + ", end=" + k + ", text=" + a)
            }
        }
        return c
    };
    var Vd = function() {};
    Vd.prototype.a = w("cast.player.core.WebvttParser");
    var Wd = /\n\s*\n/,
        Xd = /MPEGTS:([\d]*)/,
        Yd = /align:(start|middle|end)/,
        Zd = /position:(\d*)%/,
        $d = /LOCAL:((?:[\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3})/,
        ae = /((?:[\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3})[\t ]+--\x3e[\t ]+((?:[\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3})/;
    Vd.prototype.parse = function(a, b) {
        for (var c = a.split(Wd), d = b, e = 0, f = 0, g = c[0].split("\n"), k = 0; k < g.length; k++)
            if (0 === g[k].indexOf("X-TIMESTAMP-MAP")) {
                var l = g[k].match($d);
                l && (e = be(this, l[1]));
                (l = g[k].match(Xd)) && (f = parseInt(l[1], 10) / 9E4);
                break
            }
        b = d + (f - e);
        if (isNaN(b)) return z(this.a, "invalid time offset"), [];
        d = [];
        for (e = 1; e < c.length; e++)
            if (c[e]) {
                for (var q = c[e], k = b, p = null, g = f = null, l = q.split("\n"), u = void 0, u = 0; u < l.length; u++)
                    if (p = l[u].match(ae)) {
                        f = l[u].match(Yd);
                        g = l[u].match(Zd);
                        break
                    }
                p ? (q = be(this, p[1]), p =
                    be(this, p[2]), l = l.slice(u + 1).join("\n"), isNaN(q) || isNaN(p) || !l ? (z(this.a, "skipped cue, begin=" + q + ", end=" + p + ", text=" + l), f = null) : (k = new VTTCue(q + k, p + k, l), f && (k.align = f[1]), g && (k.position = g[1]), f = k)) : (z(this.a, "no timestamps in cue=" + q), f = null);
                f && d.push(f)
            }
        return d
    };
    var be = function(a, b) {
        var c = b.split(":");
        if (3 < c.length) return z(a.a, "unexpected time format=" + b), 0;
        for (var d = 0, e = 0; e < c.length; e++) d = 60 * d + parseFloat(c[e]);
        return d
    };
    var ce = function(a, b, c) {
        x.call(this);
        this.q = b;
        this.Wc = document.createElement("track");
        this.Wc.src = "";
        this.Wc.kind = "captions";
        this.q.appendChild(this.Wc);
        this.Pb = this.Wc.track;
        this.Pb.mode = "showing";
        this.Rg = a;
        this.Fb = c;
        "ttml" === c ? this.Qe = new Qd : "webvtt" === c && (this.Qe = new Vd);
        this.ia = null;
        this.Pe = 0
    };
    s(ce, x);
    ce.prototype.t = function() {
        de(this);
        this.Pb.mode = "disabled";
        this.q.removeChild(this.Wc);
        ce.p.t.call(this)
    };
    var de = function(a) {
        var b = a.Pb.cues;
        if (b)
            for (; 0 < b.length;) a.Pb.removeCue(b[0])
    };
    h = ce.prototype;
    h.reset = function() {
        de(this);
        this.ia = null;
        this.Pe = 0
    };
    h.Kc = function() {
        return !0
    };
    h.append = function(a, b, c, d) {
        d && (this.Pe = b.time - c);
        var e = 0;
        switch (this.Fb) {
            case "ttml":
                e = b.time;
                break;
            case "webvtt":
                e = this.Pe
        }
        c = ee(this);
        d = 0 < c.length ? c[c.length - 1].startTime : -Infinity;
        for (a = this.Qe.parse(decodeURIComponent(escape(String.fromCharCode.apply(null, a))), e); 0 < a.length;) {
            var e = a.pop(),
                f = !1;
            if (e.startTime < d || .1 >= Math.abs(e.startTime - d))
                for (var g = c.length - 1; 0 <= g; g--)
                    if (c[g].text === e.text && .1 >= Math.abs(c[g].startTime - e.startTime) && .1 >= Math.abs(c[g].endTime - e.endTime)) {
                        f = !0;
                        break
                    }
            f || this.addCue(e)
        }
        this.ia =
            b
    };
    h.ya = function(a) {
        return this.ia ? this.ia.time + this.ia.duration - a : 0
    };
    h.addCue = function(a) {
        this.Pb.addCue(a)
    };
    var ee = function(a) {
        for (var b = [], c = a.Pb.cues, d = a.Rg.fc(), e = 0; e < c.length;) {
            var f = c[e];
            f.endTime < d ? a.Pb.removeCue(f) : (b.push(f), e++)
        }
        return b
    };
    ce.prototype.parse = function(a, b) {
        for (var c = this.Qe.parse(a, b); 0 < c.length;) this.addCue(c.pop())
    };
    var fe = function(a, b, c, d) {
        ce.call(this, a, b.mediaElement, c);
        a = new G;
        a.url = d;
        b.updateCaptionsRequestInfo && b.updateCaptionsRequestInfo(a);
        this.ga = new R(this);
        this.ga.load(a)
    };
    s(fe, ce);
    fe.prototype.t = function() {
        this.ga.dispose();
        fe.p.t.call(this)
    };
    fe.prototype.reset = function() {};
    fe.prototype.Ba = function(a) {
        a && this.parse(a, 0)
    };
    var ge = function(a) {
        D.call(this);
        this.Vb = null;
        this.fe = a
    };
    s(ge, D);
    ge.prototype.qe = function() {
        this.Vb && (this.Vb.onprogress = null);
        this.Vb = ge.p.qe.call(this);
        this.Vb.onprogress = this.fe;
        return this.Vb
    };
    ge.prototype.t = function() {
        this.Vb && (this.Vb.onprogress = null);
        ge.p.t.call(this)
    };
    var he = function(a, b, c, d, e) {
        x.call(this);
        this.wa = a;
        this.c = b;
        this.o = c;
        this.h = d;
        c = c.getStreamInfo(d);
        this.cc = la(c.mimeType, "text/") ? new ce(a, b.mediaElement, c.codecs) : new Ld(d, c, e, a);
        this.kd = !1;
        this.k = 1;
        this.hd = 0;
        this.jd = !1;
        this.Y = 0;
        this.wc = this.ec = this.md = !1;
        this.dc = new Nc;
        this.R = new G;
        this.e = new ge(this.fe.bind(this));
        Cc(this.e);
        C(this.e, "success", this.Ec, !1, this);
        C(this.e, "error", this.yb, !1, this);
        C(this.e, "timeout", this.yb, !1, this);
        C(this.e, "ready", this.je, !1, this);
        this.ld = new Jd(b, d, this.o.getStreamInfo(this.h).bitrates)
    };
    s(he, x);
    he.prototype.a = w("cast.player.core.SegmentManager");
    he.prototype.t = function() {
        this.cc.dispose();
        this.e.dispose();
        he.p.t.call(this)
    };
    he.prototype.oe = function() {
        ie(this, !0)
    };
    var ie = function(a, b) {
            var c = a.o.getQualityLevel(a.h),
                d = a.ld.oe(c, b);
            if (d === c) return !1;
            a.kd = !0;
            a.o.Md(a.h, d, a);
            return !0
        },
        je = function(a, b, c, d, e) {
            a.ec ? (A(a.a, a.h + ": segment processed"), a.ec = !1, a.cc.append(b, c, d, e)) : A(a.a, a.h + ": not processing");
            a.dc.pa() || (A(a.a, a.h + ": dequeue segment"), a.yc(Pc(a.dc)), a.wa.zc(a.h))
        },
        ke = function(a, b) {
            a.ec ? (A(a.a, a.h + ": queue segment"), a.dc.S.push(b)) : a.yc(b)
        };
    h = he.prototype;
    h.yc = function(a) {
        A(this.a, this.h + ": process segment");
        this.ec = !0;
        this.o.Ob(this.h, a, this)
    };
    h.reset = function() {
        A(this.a, this.h + ": reset");
        this.k = 1;
        this.hd = 0;
        this.jd = !1;
        this.Y = 0;
        this.ec = this.md = !1;
        this.dc.clear();
        this.wc || this.e.abort();
        this.o.reset(this.h);
        this.cc.reset();
        this.wa.zc(this.h)
    };
    h.Ec = function(a) {
        a = Mc(a.target);
        var b = this.ld,
            c = Date.now() - this.hd,
            d = a.byteLength;
        b.c.trackBandwidth && b.c.trackBandwidth(b.h, c, d);
        0 >= c ? z(b.a, "bad time on success") : (c = 8E3 * d / c, b.xb = .8 * c + (1 - .8) * b.xb, A(b.a, b.h + ": current=" + c.toFixed(2) + ", average=" + b.xb.toFixed(2)));
        this.Y = b.Cc = 0;
        this.jd = !1;
        ke(this, new Uint8Array(a));
        if (this.wc) this.wc = !1;
        else if (ie(this, 10 > this.cc.ya(this.wa.fc())), this.kd) return;
        2 > this.dc.na() && this.wa.zc(this.h)
    };
    h.je = function() {
        this.md && (le(this), this.md = !1)
    };
    h.yb = function() {
        var a = this.ld,
            b = Date.now() - this.hd;
        a.c.trackBandwidth && a.c.trackBandwidth(a.h, b, a.Cc);
        0 >= b ? (z(a.a, "bad time on error"), a.xb = 0) : a.xb = 8E3 * a.Cc / b;
        a.Cc = 0;
        a.pd = null;
        A(a.a, a.h + ": current=" + a.xb.toFixed(2));
        0 === this.Y && ie(this, !0) ? this.jd = !0 : (this.Y++, 3 < this.Y ? (this.k = -1, K(this.c, 3, new H(this.R.url, this.e.Ma, Lc(this.e)))) : le(this))
    };
    h.fe = function(a) {
        this.ld.Cc = a.loaded
    };
    h.ya = function(a) {
        return this.cc.ya(a)
    };
    var Ed = function(a) {
            a.kd = !1;
            a.wa.Ef();
            if (a.o.Df(a.h)) {
                var b = a.o.Ie(a.h);
                if (!b) {
                    a.wc = !0;
                    le(a);
                    return
                }
                ke(a, b)
            }
            a.wa.zc(a.h)
        },
        le = function(a) {
            a.e.vb() ? a.md = !0 : (a.hd = Date.now(), a.o.updateSegmentRequestInfo(a.h, a.R), a.R.timeoutInterval = Math.max(2E3 * (a.wc ? 0 : a.o.va(a.h).duration), 1E4), a.c.updateSegmentRequestInfo && a.c.updateSegmentRequestInfo(a.R), a.e.vc = a.R.withCredentials, a.e.Ka = Math.max(0, a.R.timeoutInterval), a.e.send(a.R.url, void 0, void 0, a.R.headers))
        };
    he.prototype.vb = function() {
        return 0 < this.k || this.ec || this.e.vb() || !this.cc.Kc()
    };
    he.prototype.ke = function() {
        return !this.kd && 2 > this.dc.na() && !this.e.vb()
    };
    he.prototype.le = function() {
        if (0 < this.Y || this.jd) le(this);
        else if (1 === this.k) {
            var a = this.wa.fc();
            this.o.seek(this.h, a) ? (A(this.a, this.h + ": seek success " + a), this.k = 2, this.wa.vf(this.h), le(this)) : A(this.a, this.h + ": seek failure " + a)
        } else this.o.cb(this.h) && le(this), this.o.eb(this.h) && (this.k = 0)
    };
    var ne = function(a) {
            this.duration = new Ad("mediaPresentationDuration");
            this.type = new P("type");
            for (this.og = new Ad("minimumUpdatePeriod"); a;) {
                if ("MPD" === a.nodeName) {
                    Q(a.attributes, this);
                    break
                }
                a = a.nextElementSibling
            }
            this.de = null;
            if (a)
                for (a = a.firstElementChild; null !== a; a = a.nextElementSibling)
                    if ("Period" === a.nodeName) {
                        this.de = new me(a);
                        break
                    }
        },
        oe = function(a) {
            this.name = a;
            this.end = this.start = null
        };
    s(oe, yd);
    oe.prototype.parse = function(a) {
        a = a.split("-");
        this.start = parseInt(a[0], 10);
        this.end = parseInt(a[1], 10)
    };
    var pe = function(a) {
            this.media = new P("media");
            Q(a.attributes, this)
        },
        qe = function(a) {
            this.Cg = new P("sourceURL");
            this.lc = new oe("range");
            Q(a.attributes, this)
        },
        re = function(a) {
            this.duration = new O("duration");
            this.Dc = new O("timescale");
            this.B = new O("presentationTimeOffset");
            this.xa = new O("startNumber");
            this.Kd = new oe("indexRange");
            Q(a.attributes, this);
            this.tc = this.Yc = null;
            for (a = a.firstElementChild; null !== a; a = a.nextElementSibling) switch (a.nodeName) {
                case "Initialization":
                    this.Yc = new qe(a);
                    break;
                case "SegmentTimeline":
                    this.tc = [];
                    for (var b = a.firstElementChild; null !== b; b = b.nextElementSibling) {
                        var c = 1,
                            d = b.attributes.getNamedItem("r");
                        d && (c += parseInt(d.value, 10));
                        if (d = b.attributes.getNamedItem("d"))
                            for (var d = parseInt(d.value, 10), e = 0; e < c; e++) this.tc.push(d)
                    }
            }
        };
    re.prototype.la = function(a) {
        null === a.duration.value && (a.duration = this.duration);
        null === a.Dc.value && (a.Dc = this.Dc);
        null === a.B.value && (a.B = this.B);
        null === a.xa.value && (a.xa = this.xa);
        null === a.Kd.start && (a.Kd = this.Kd);
        null === a.Yc && (a.Yc = this.Yc);
        null === a.tc && (a.tc = this.tc)
    };
    var se = function(a) {
        re.call(this, a);
        this.g = [];
        for (a = a.firstElementChild; null !== a; a = a.nextElementSibling) switch (a.nodeName) {
            case "SegmentURL":
                this.g.push(new pe(a))
        }
    };
    s(se, re);
    se.prototype.la = function(a) {
        se.p.la.call(this, a);
        0 === a.g.length && (a.g = this.g)
    };
    var te = function(a) {
        this.media = new P("media");
        this.init = new P("initialization");
        re.call(this, a)
    };
    s(te, re);
    te.prototype.la = function(a) {
        te.p.la.call(this, a);
        null === a.media.value && (a.media = this.media);
        null === a.init.value && (a.init = this.init)
    };
    var ue = function(a) {
            this.eh = new Bd("schemeIdUri");
            Q(a.attributes, this);
            this.lb = null;
            var b = this.eh.value;
            if (b)
                if (b.equals(kd)) {
                    for (a = a.firstElementChild; null !== a; a = a.nextElementSibling)
                        if ("mspr:pro" === a.nodeName) {
                            this.lb = Dd(kd, a.childNodes[0].nodeValue);
                            return
                        }
                    this.lb = {
                        systemId: kd,
                        Gd: null,
                        Hd: null,
                        url: null,
                        Ae: 0
                    }
                } else b.equals(ld) && (this.lb = {
                    systemId: ld,
                    Gd: null,
                    Hd: null,
                    url: null,
                    Ae: 0
                })
        },
        ve = function(a) {
            this.kc = [];
            this.gb = this.D = this.hb = this.url = null;
            for (a = a.firstElementChild; null !== a; a = a.nextElementSibling) switch (a.nodeName) {
                case "BaseURL":
                    this.url =
                        a.textContent;
                    break;
                case "ContentProtection":
                    var b = new ue(a);
                    b.lb && this.kc.push(b.lb);
                    break;
                case "SegmentBase":
                    this.gb = new re(a);
                    break;
                case "SegmentTemplate":
                    this.D = new te(a);
                    break;
                case "SegmentList":
                    this.hb = new se(a)
            }
        };
    ve.prototype.la = function(a) {
        a.D ? this.D && this.D.la(a.D) : a.D = this.D;
        a.gb ? this.gb && this.gb.la(a.gb) : a.gb = this.gb;
        a.hb ? this.hb && this.hb.la(a.hb) : a.hb = this.hb;
        a.url = a.url || this.url;
        0 === a.kc.length && (a.kc = this.kc)
    };
    var we = function(a) {
        this.mimeType = new P("mimeType");
        this.codecs = new P("codecs");
        Q(a.attributes, this);
        ve.call(this, a)
    };
    s(we, ve);
    we.prototype.la = function(a) {
        we.p.la.call(this, a);
        a.mimeType.value = a.mimeType.value || this.mimeType.value;
        a.codecs.value = a.codecs.value || this.codecs.value
    };
    var xe = function(a, b) {
        this.id = new P("id");
        this.fg = new O("bandwidth");
        we.call(this, a);
        b.la(this);
        if (this.mimeType.value) switch (this.mimeType.value.toLowerCase()) {
            case "application/ttml+xml":
                this.codecs.value = "ttml";
                this.mimeType.value = "text/mp4";
                break;
            case "text/vtt":
                this.codecs.value = "webvtt"
        }
        "avc1" === this.codecs.value && (this.codecs.value = "avc1.4d40")
    };
    s(xe, we);
    var ye = function(a, b) {
        this.language = new P("lang");
        we.call(this, a);
        b.la(this);
        this.s = [];
        for (var c = a.firstElementChild; null !== c; c = c.nextElementSibling) "Representation" === c.nodeName && this.s.push(new xe(c, this))
    };
    s(ye, we);
    var me = function(a) {
        ve.call(this, a);
        this.n = [];
        for (a = a.firstElementChild; null !== a; a = a.nextElementSibling) switch (a.nodeName) {
            case "AdaptationSet":
                this.n.push(new ye(a, this))
        }
    };
    s(me, ve);
    var ze = function(a, b, c, d, e) {
        this.c = a;
        this.Sb = !1;
        this.Uc = b;
        window.crypto.subtle.decrypt({
            name: "AES-CBC",
            iv: d
        }, c, e).then(this.Tg.bind(this), this.Sg.bind(this))
    };
    ze.prototype.cancel = function() {
        this.Sb = !0
    };
    ze.prototype.Sg = function() {
        this.Sb || K(this.c, 2)
    };
    ze.prototype.Tg = function(a) {
        this.Sb || this.Uc(new Uint8Array(a))
    };
    var Ae = function(a, b, c) {
        this.c = a;
        this.Sb = !1;
        this.Uc = b;
        window.crypto.subtle.importKey("raw", c, {
            name: "AES-CBC"
        }, !0, ["decrypt"]).then(this.pe.bind(this), this.Qg.bind(this))
    };
    Ae.prototype.cancel = function() {
        this.Sb = !0
    };
    Ae.prototype.Qg = function() {
        this.Sb || K(this.c, 2)
    };
    Ae.prototype.pe = function(a) {
        this.Sb || this.Uc(a)
    };
    var Be = function(a) {
        this.sg = new E(a);
        this.k = 0;
        this.qd = this.Xa = this.he = this.Cb = null;
        this.bb = 0;
        this.hf = this.gf = this.ge = !1;
        this.J = {
            bf: !1,
            Q: !0,
            Xd: 0,
            g: [],
            ic: [],
            Yd: []
        }
    };
    Be.prototype.a = w("cast.player.hls.Parser");
    Be.prototype.parse = function(a) {
        var b = a.split("\n");
        for (a = 0; a < b.length; a++)
            if (!Ce(this, b[a])) return z(this.a, "failed to parse HLS playlist"), this.J = null;
        if (this.gf && this.hf)
            for (a = 0; a < this.J.ic.length;) b = this.J.ic[a].codecs, 0 === b.indexOf("mp4a.") && 0 > b.indexOf(",") ? (z(this.a, "filtered out " + b + " stream"), this.J.ic.splice(a, 1)) : a++;
        return this.J
    };
    var De = function(a, b) {
            var c = new E(b);
            c.Va || (b = a.sg.resolve(c).toString());
            return b
        },
        Ce = function(a, b) {
            b = b.trim();
            if (!b) return !0;
            if ("#" !== b[0]) {
                var c;
                c = b;
                if (3 != a.k && 4 != a.k) T(a, "URI"), c = !1;
                else {
                    c = De(a, c);
                    if (3 == a.k) {
                        if (a.Xa) {
                            a.Cb.$e = a.Xa;
                            var d = a.Cb,
                                e;
                            if (a.qd) e = a.qd;
                            else {
                                e = a.Cb.jc;
                                for (var f = new Uint8Array(16), g = 15; 0 <= g; g--) f[g] = e & 255, e >>= 8;
                                e = f
                            }
                            d.Zd = e
                        }
                        a.Cb.url = c;
                        a.J.g.push(a.Cb)
                    } else 4 == a.k && (a.he.url = c, a.J.ic.push(a.he));
                    a.k = 2;
                    c = !0
                }
                return c
            }
            c = "#EXTINF:";
            if (0 === b.indexOf(c) && (d = b.indexOf(","), 0 <= d)) return c =
                b.substr(c.length, d - c.length), 2 != a.k && 1 != a.k ? (T(a, "EXTINF"), c = !1) : (a.Cb = {
                    jc: a.bb,
                    url: "",
                    cf: null,
                    aa: 0,
                    duration: parseFloat(c),
                    Ze: a.ge,
                    $e: null,
                    Zd: null,
                    K: !1
                }, a.ge = !1, a.bb += 1, a.k = 3, c = !0), c;
            c = "#EXT-X-KEY:";
            if (0 === b.indexOf(c)) return Ee(a, b.substr(c.length));
            if (0 === b.indexOf("#EXT-X-DISCONTINUITY")) return 2 != a.k && 1 != a.k ? (T(a, "EXT-X-DISCONTINUITY"), c = !1) : (a.ge = !0, a.k = 2, c = !0), c;
            c = "#EXT-X-BYTERANGE:";
            if (0 === b.indexOf(c)) return c = b.substr(c.length), 3 != a.k ? (T(a, "EXT-X-BYTERANGE"), c = !1) : (c = c.split("@"), d = parseInt(c[1],
                10), a.Cb.cf = {
                start: d,
                end: d + parseInt(c[0], 10) - 1
            }, c = !0), c;
            if (0 === b.indexOf("#EXTM3U")) return 0 != a.k ? (T(a, "EXTM3U"), c = !1) : (a.k = 1, c = !0), c;
            if (0 === b.indexOf("#EXT-X-ENDLIST")) return 2 != a.k && 1 != a.k ? (T(a, "EXT-X-ENDLIST"), c = !1) : (a.J.Q = !1, c = !0), c;
            c = "#EXT-X-STREAM-INF:";
            if (0 === b.indexOf(c)) return e = b.substr(c.length), 1 != a.k && 2 != a.k ? (T(a, "EXT-X-STREAM-INF"), c = !1) : (f = e.match("BANDWIDTH=([0-9]+)")) ? (c = parseInt(f[1], 10), d = "video/mp2t", (f = e.match('CODECS="([^"]*)"')) ? (e = f[1], 0 === e.indexOf("mp4a.") && 0 > e.indexOf(",") ?
                (a.gf = !0, d = "audio/mp4") : a.hf = !0) : e = "avc1.4d40,mp4a.40.2", a.he = {
                url: "",
                V: c,
                mimeType: d,
                codecs: e,
                Wd: !0,
                language: null
            }, a.J.bf = !0, a.k = 4, c = !0) : (z(a.a, "no BANDWIDTH attribute"), c = !1), c;
            c = "#EXT-X-TARGETDURATION:";
            if (0 === b.indexOf(c)) return c = b.substr(c.length), 1 != a.k ? (T(a, "EXT-X-TARGETDURATION"), c = !1) : (a.J.Xd = parseInt(c, 10), c = !0), c;
            c = "#EXT-X-MEDIA-SEQUENCE:";
            if (0 === b.indexOf(c)) return c = b.substr(c.length), 1 != a.k ? (T(a, "EXT-X-MEDIA-SEQUENCE"), c = !1) : (a.bb = parseInt(c, 10), a.k = 1, c = !0), c;
            c = "#EXT-X-MEDIA:";
            if (0 ===
                b.indexOf(c)) t: if (c = b.substr(c.length), 2 != a.k && 1 != a.k) T(a, "EXT-X-MEDIA"), c = !1;
                else {
                    var g = f = e = d = null,
                        k = !1,
                        l = c.match("TYPE=([^,]*)");
                    if (null !== l) switch (l[1]) {
                        case "SUBTITLES":
                            d = "webvtt";
                            e = "text/vtt";
                            break;
                        case "AUDIO":
                            d = "mp4a.40.2";
                            e = "audio/mp4";
                            break;
                        default:
                            c = !0;
                            break t
                    }
                    l = c.match('URI="([^"]*)"');
                    null !== l && (f = De(a, l[1]));
                    l = c.match('LANGUAGE="([^"]*)",?(.*)');
                    null !== l && (g = l[1]);
                    l = c.match("DEFAULT=(YES|NO)");
                    null !== l && (k = "YES" === l[1]);
                    f && a.J.Yd.push({
                        url: f,
                        V: 0,
                        mimeType: e,
                        codecs: d,
                        Wd: k,
                        language: g
                    });
                    c = !0
                } else c = !0;
            return c
        },
        T = function(a, b) {
            z(a.a, "unexpected " + b + ": state " + a.k)
        },
        Ee = function(a, b) {
            if (2 != a.k && 3 != a.k && 1 != a.k) return T(a, "EXT-X-KEY"), !1;
            a.Xa = null;
            a.qd = null;
            if (0 <= b.indexOf("METHOD=NONE")) return !0;
            if (0 > b.indexOf("METHOD=AES-128")) return z(a.a, "unsupported KEY"), !1;
            for (var c = b.split(","), d = 0; d < c.length; d++) {
                b = c[d];
                var e = 'URI="',
                    f = b.indexOf(e);
                if (0 <= f) a.Xa = De(a, b.substr(f + e.length, b.length - e.length - 1));
                else if (e = "IV=0", f = b.indexOf(e), 0 <= f) {
                    for (var g = a, e = b.substr(f + e.length + 1), f = new Uint8Array(16),
                            k = 15, l = e.length - 2; 0 <= l; l -= 2, k--) f[k] = parseInt(e.substr(l, 2), 16);
                    g.qd = f
                }
            }
            return !0
        };
    var Fe = function() {
        this.Fa = -1;
        this.J = null
    };
    h = Fe.prototype;
    h.a = w("cast.player.hls.Iterator");
    h.update = function(a) {
        if (!(0 > this.Fa)) {
            for (var b = this.J.g[this.Fa], c = a.g, d = -1, e = b.jc, f = 0; f < c.length; f++)
                if (c[f].jc === e) {
                    d = f;
                    break
                }
            var g = 0,
                f = 0;
            0 > d ? (z(this.a, "update: " + e + " not found"), 0 < c.length && (c[0].Ze = !0, g = b.aa + b.duration), c.splice(0, 0, b), d = 0, f = 1) : g = b.aa - c[d].aa;
            for (; f < c.length; f++) c[f].aa += g;
            this.Fa = d
        }
        this.J = a
    };
    h.next = function() {
        var a = this.Fa + 1;
        return a < this.J.g.length ? (this.Fa = a, !0) : !1
    };
    h.eb = function() {
        return !this.J.Q && this.Fa === this.J.g.length - 1
    };
    h.qa = function() {
        var a = this.J.g,
            b = a[0].aa,
            c = a.length - 1,
            a = a[c].aa + a[c].duration;
        this.Q && (a -= 3 * this.J.Xd, a < b && (a = b));
        return {
            start: b,
            end: a
        }
    };
    h.seek = function(a) {
        var b = this.qa();
        if (!b) return !1;
        for (var c = this.J.g, d = 0; d < c.length; d++) c[d].K = !1;
        a < b.start && (a = b.start);
        a > b.end && (a = b.end);
        for (d = c.length - 1; 0 <= d; d--)
            if (a >= c[d].aa) return this.Fa = 0 < d ? d - 1 : 0, c[this.Fa].K = !0;
        return !1
    };
    var Ge = function(a) {
        return 0 > a.Fa ? null : a.J.g[a.Fa]
    };
    var He = function(a, b, c) {
        x.call(this);
        this.c = a;
        this.Ic = b;
        this.ga = new R(this);
        this.N = null;
        this.jg = this.Xc.bind(this);
        this.La = c;
        this.duration = -1;
        this.kb = null
    };
    s(He, x);
    h = He.prototype;
    h.a = w("cast.player.hls.Playlist");
    h.t = function() {
        this.ga.dispose();
        null !== this.N && (clearTimeout(this.N), this.N = null);
        He.p.t.call(this)
    };
    h.load = function() {
        this.Xc()
    };
    h.pb = function() {
        this.duration = -1;
        this.kb = null;
        this.ga.abort();
        null !== this.N && (clearTimeout(this.N), this.N = null)
    };
    h.Xc = function() {
        A(this.a, "update: " + this.La.url);
        var a = new G;
        a.url = this.La.url;
        this.c.updateManifestRequestInfo && this.c.updateManifestRequestInfo(a);
        this.ga.load(a)
    };
    h.Ba = function(a) {
        if (a)
            if (this.kb = (new Be(this.La.url)).parse(a)) {
                a = 0;
                for (var b = this.kb.g, c = 0; c < b.length; c++) b[c].aa = a, a += b[c].duration;
                this.kb.Q ? (a = 1E3 * this.kb.Xd, this.N = setTimeout(this.jg, a), A(this.a, "update in: " + a)) : this.duration = a;
                this.Ic.ie(this)
            } else this.c.onError(0);
        else this.c.onError(3, Cd(this.ga))
    };
    var Ie = function(a, b, c, d) {
        x.call(this);
        this.c = a;
        this.ga = new R(this);
        this.Ra = b;
        this.Ic = c;
        this.bc = d;
        this.nb = [];
        this.Aa = []
    };
    s(Ie, x);
    Ie.prototype.t = function() {
        this.ga.dispose();
        for (var a = 0; a < this.Aa.length; a++) this.Aa[a].dispose();
        for (a = this.Aa.length = 0; a < this.nb.length; a++) this.nb[a].dispose();
        this.nb.length = 0;
        Ie.p.t.call(this)
    };
    Ie.prototype.load = function() {
        var a = new G;
        a.url = this.c.url;
        this.c.updateManifestRequestInfo && this.c.updateManifestRequestInfo(a);
        this.ga.load(a)
    };
    Ie.prototype.Ba = function(a) {
        if (a) {
            var b = this.ga.getUrl();
            if (b)
                if (a = (new Be(b)).parse(a)) {
                    if (a.bf)
                        for (b = 0; b < a.ic.length; b++) {
                            var c = new He(this.c, this.Ic, a.ic[b]);
                            this.nb.push(c)
                        } else {
                            var d;
                            this.bc ? (c = "avc1.4d40,mp4a.40.2", d = "video/mp2t") : (c = "mp4a.40.2", d = "audio/mp4");
                            c = new He(this.c, this.Ic, {
                                url: b,
                                V: 0,
                                mimeType: d,
                                codecs: c,
                                Wd: !0,
                                language: null
                            });
                            this.nb.push(c)
                        }
                    for (b = 0; b < a.Yd.length; b++) c = new He(this.c, this.Ic, a.Yd[b]), this.Aa.push(c);
                    this.Ra.Fd()
                } else K(this.c, 0)
        } else K(this.c, 3, Cd(this.ga))
    };
    var Je = function(a, b) {
            var c = b || 0,
                d = c;
            if (73 !== a[d++] || 68 !== a[d++] || 51 !== a[d++]) return null;
            var d = d + 3,
                e = a[d++] << 21 | a[d++] << 14 | a[d++] << 7 | a[d++];
            return a.subarray(c, d + e)
        },
        Ke = function(a, b) {
            Fd.call(this);
            this.hc = null;
            this.Rc = b;
            this.Ee = Infinity;
            for (this.init(a); !(this.r >= this.f.length);) this.parse()
        };
    s(Ke, Fd);
    Ke.prototype.kf = function() {
        return this.Ee
    };
    Ke.prototype.De = function(a) {
        Ke.p.De.call(this, a);
        null === this.hc && (this.hc = this.Tc);
        var b = this.hc,
            c = this.Tc,
            d = Math.floor(b / 95443.7176888889),
            e = 95443.7176888889 * (d - 1) + c;
        a = 95443.7176888889 * (d + 0) + c;
        var c = 95443.7176888889 * (d + 1) + c,
            d = Math.abs(e - b),
            f = Math.abs(a - b),
            b = Math.abs(c - b),
            g = d;
        f < d && (e = a, g = f);
        b < g && (e = c);
        a = e;
        a < this.Ee && (this.Ee = a)
    };
    Ke.prototype.If = function(a) {
        this.Rc && 0 === this.f[a] && 0 === this.f[a + 1] && 1 === this.f[a + 2] && 189 === this.f[a + 3] && (a = Je(this.f, a + 9 + this.f[a + 8]), null !== a && this.Rc("ID3", a))
    };
    var Le = [96E3, 88200, 64E3, 48E3, 44100, 32E3, 24E3, 22050, 16E3, 12E3, 11025, 8E3, 7350],
        Me = function(a) {
            y(w("cast.player.mp4.base"), a)
        },
        Ne = function(a, b, c) {
            if (0 > a || 32 <= a) return Me("Invalid object type id: " + a), null;
            var d = Le.indexOf(b);
            return 0 > d ? (Me("Invalid sample rate: " + b), null) : 0 > c || 16 < c ? (Me("Invalid channels: " + c), null) : new Uint8Array([a << 3 | d >> 1, d << 7 | c << 3])
        };
    var Oe = function(a) {
        qd.call(this, a)
    };
    s(Oe, qd);
    var Pe = function(a) {
        wd.call(this, a)
    };
    s(Pe, wd);
    var Qe = function(a, b, c) {
        (new DataView(a.buffer, a.byteOffset, a.byteLength)).setUint32(b, c)
    };
    var Re = function(a) {
            this.A = new Oe(a);
            this.qb = 0;
            this.sc = this.Rb = null;
            this.Pd = a;
            this.Ia = 0;
            this.qb = L(this.A);
            this.Ia = 4;
            this.Rb = L(this.A);
            this.Ia += 4;
            1 === this.qb && (this.qb = td(this.A), this.Ia += 8);
            1970628964 === this.Rb && (this.sc = new jd(ud(this.A, 16)), this.Ia += 16)
        },
        Se = function(a) {
            switch (a.Rb) {
                case 1836019574:
                case 1836019558:
                case 1836475768:
                case 1953653099:
                case 1953653094:
                case 1701082227:
                case 1835297121:
                case 1835626086:
                case 1684631142:
                case 1937007212:
                    return !0;
                default:
                    return !1
            }
        };
    Re.prototype.getName = function() {
        return this.Rb
    };
    var Te = function(a) {
            return a.Pd.subarray(0, a.qb)
        },
        U = function(a) {
            return Te(a).subarray(a.Ia)
        };
    Re.prototype.i = function(a) {
        M(a, this.Pd.subarray(0, this.qb))
    };
    var V = function(a) {
        Re.call(this, a);
        this.qc = this.ka = 0;
        a = L(this.A);
        this.Ia += 4;
        this.ka = a >>> 24;
        this.qc = a & 16777215
    };
    s(V, Re);
    var Ue = function(a) {
        V.call(this, a)
    };
    s(Ue, V);
    var Ve = new jd([212, 128, 126, 242, 202, 57, 70, 149, 142, 84, 38, 203, 158, 70, 167, 159]);
    Ue.prototype.$d = function(a) {
        for (var b = this.ka, c = rd(this.A), d = Array(c), e = 0; e < c; e++) {
            var f, g, k;
            if (1 === b) {
                f = L(this.A);
                var l = L(this.A);
                g = L(this.A);
                var q = L(this.A);
                k = f;
                var p = l,
                    u = new od(Math.floor(4294967296 * k / 1E4).toString() + "0000");
                u.add(k % 1E4 * 7296 % 1E4);
                u.add(p);
                k = u;
                f = 4294967296 / a * f + l / a;
                g = 4294967296 / a * g + q / a
            } else q = L(this.A), g = L(this.A), k = new od(q.toString()), f = q / a, g /= a;
            d[e] = {
                time: f,
                duration: g,
                Za: k,
                offset: 0,
                size: 0,
                url: null
            }
        }
        return d
    };
    var We = function(a) {
        V.call(this, a)
    };
    s(We, V);
    We.prototype.$d = function() {
        var a = this.ka;
        vd(this.A, 4);
        var b = L(this.A),
            c = 0 == a ? L(this.A) : td(this.A),
            d = 0 == a ? L(this.A) : td(this.A),
            d = d + (Te(this).byteOffset + this.qb);
        vd(this.A, 2);
        for (var a = sd(this.A), e = Array(a), f = 0, g = 0, k = 0; k < a; k++) f = L(this.A) & 2147483647, g = L(this.A), vd(this.A, 4), e[k] = {
            time: c / b,
            duration: g / b,
            Za: null,
            offset: d,
            size: f,
            url: null
        }, c += g, d += f;
        return e
    };
    var Xe = function(a) {
        V.call(this, a);
        this.Jd = new Uint8Array([]);
        this.ee = null;
        this.Ce = !1;
        a = new Oe(U(this));
        var b = this.qc;
        b & 1 && vd(a, 20);
        var c = L(a);
        this.ee = a.buffer.subarray(a.offset);
        this.Ce = b & 2 ? !0 : !1;
        this.Jd = new Uint8Array(new ArrayBuffer(c));
        for (b = 0; b < c; b++)
            if (this.Ce) {
                vd(a, 8);
                var d = 6 * sd(a);
                this.Jd[b] = 10 + d;
                vd(a, d)
            } else this.Jd[b] = 8, vd(a, 8)
    };
    s(Xe, V);
    var Ye = new jd([162, 57, 79, 82, 90, 155, 79, 20, 162, 68, 108, 66, 124, 100, 141, 244]),
        Ze = function(a) {
            V.call(this, a)
        };
    s(Ze, V);
    Ze.prototype.Ud = function(a) {
        Qe(U(this), 4, a)
    };
    var $e = function(a) {
        V.call(this, a)
    };
    s($e, V);
    var af = function(a) {
        V.call(this, a)
    };
    s(af, V);
    var bf = function(a) {
        Re.call(this, a)
    };
    s(bf, Re);
    bf.prototype.Ud = function(a, b) {
        var c = cf(U(this), 1953653094, void 0, void 0);
        if (c) {
            var d = cf(U(c), 1953658222, void 0, void 0);
            d && d.Ud(a - this.Pd.byteOffset);
            b && (c = cf(U(c), 1935763823, void 0, void 0)) && Qe(U(c), 4, b - this.Pd.byteOffset)
        }
    };
    var df = function(a, b) {
            var c = cf(a, 1836019558),
                d = U(cf(a, 1835295092)).byteOffset;
            b ? c.Ud(d + b, d) : c.Ud(d)
        },
        ef = function(a) {
            switch (a.getName()) {
                case 1836019558:
                    return new bf(Te(a));
                case 1953658222:
                    return new Ze(Te(a));
                case 1935763823:
                    return new af(Te(a));
                case 1936286840:
                    return new We(Te(a));
                case 1952868452:
                    return new $e(Te(a));
                case 1970628964:
                    var b = a.sc;
                    return Ye.equals(b) ? new Xe(Te(a)) : Ve.equals(b) ? new Ue(Te(a)) : a;
                case 1702061171:
                case 1751411826:
                case 1835296868:
                case 1835427940:
                case 1836476516:
                case 1886614376:
                case 1935763823:
                case 1935763834:
                case 1935894637:
                case 1937011571:
                case 1952804451:
                case 1952867444:
                case 1952868452:
                case 1953196132:
                case 1953654136:
                case 1953658222:
                    return new V(Te(a));
                default:
                    return a
            }
        },
        cf = function(a, b, c, d) {
            for (var e = 0; e < a.length;) {
                var f = new Re(a.subarray(e)),
                    e = e + f.qb;
                if (f.getName() === b && (1970628964 !== b || c && c.equals(f.sc))) return ef(f);
                if (d && Se(f) && (f = cf(U(f), b, c, d))) return f
            }
            return null
        },
        ff = function(a, b) {
            for (var c = 0, d = []; c < a.length;) {
                var e = new Re(a.subarray(c)),
                    c = c + e.qb;
                d.push(ef(e));
                b && Se(e) && (d = d.concat(ff(U(e), !0)))
            }
            return d
        };
    var W = function(a) {
        S.call(this, a);
        this.zb = [];
        this.ac = this.Zf.bind(this);
        this.N = null
    };
    s(W, S);
    W.prototype.a = w("cast.player.dash.Protocol");
    W.prototype.pb = function() {
        W.p.pb.call(this);
        null !== this.N && (clearTimeout(this.N), this.N = null)
    };
    W.prototype.Ed = function() {
        for (var a = [], b = 0; b < this.zb.length; b++) this.zb[b].systemId.equals(kd) ? a.push("playready") : this.zb[b].systemId.equals(ld) && a.push("widevine");
        return a
    };
    W.prototype.updateLicenseRequestInfo = function(a) {
        var b;
        switch (a.yf) {
            case "playready":
                b = kd;
                break;
            case "widevine":
                b = ld;
                break;
            default:
                return
        }
        for (var c = 0; c < this.zb.length; c++)
            if (this.zb[c].systemId.equals(b)) {
                a.headers = {};
                a.headers["content-type"] = "text/xml;charset=utf-8";
                a.url = this.zb[c].url;
                break
            }
    };
    var gf = function(a, b, c) {
        if (b) {
            null !== b.xa.value && (c.xa = b.xa.value);
            var d = b.Dc.value || 1;
            c.B = (b.B.value || 0) / d;
            var e = new od("0"),
                f = b.g,
                g = b.tc,
                k = 0;
            g ? k = g.length : f && 0 < f.length && (k = f.length);
            for (var l = 0; l < k; l++) {
                var q = g ? g[l] : b.duration.value || 0,
                    p = {
                        time: parseInt(e.toString(), 10) / d + c.B,
                        Za: new od(e.toString()),
                        duration: q / d,
                        url: f && 0 < f.length ? a.resolve(new E(f[l].media.value)).toString() : null
                    };
                c.g.push(p);
                e.add(q)
            }
            if (f = b.Yc) {
                e = d = null;
                if (g = f.lc) null !== g.start && (d = g.start), null !== g.end && (e = g.end);
                (g = b.Kd) && null !==
                    g.end && (e = g.end);
                b = f.Cg.value;
                a = {
                    url: b ? a.resolve(new E(b)).toString() : null,
                    lc: null !== d && null !== e ? {
                        start: d,
                        end: e
                    } : null,
                    data: null
                };
                c.od = a
            }
        }
    };
    h = W.prototype;
    h.ze = function(a) {
        if (a.de) {
            this.Q = "dynamic" === a.type.value;
            a.duration.value && (this.duration = a.duration.value);
            a = a.de.n;
            for (var b = 0; b < a.length; b++) {
                var c = a[b],
                    d = c.s,
                    e = d[0],
                    f = e.mimeType.value;
                if (null === f) {
                    y(this.a, "no mime type");
                    K(this.host, 0);
                    break
                }
                var g = !0;
                if (la(f, "audio/")) f = 1;
                else if (la(f, "video/")) f = 2;
                else if (la(f, "text/")) f = 3, g = !1;
                else continue;
                c = {
                    type: f,
                    enabled: !1,
                    ca: g,
                    K: !0,
                    index: -1,
                    C: -1,
                    s: [],
                    language: c.language.value,
                    mimeType: e.mimeType.value || "",
                    codecs: e.codecs.value || ""
                };
                for (g = 0; g < d.length; g++) {
                    e =
                        d[g];
                    e.kc && (this.zb = e.kc);
                    var k = this.uri.resolve(new E(e.url)).toString(),
                        f = {
                            V: e.fg.value || 0,
                            id: e.id.value,
                            B: 0,
                            g: [],
                            url: k,
                            xa: 0,
                            od: null
                        };
                    e.url && "/" !== k[k.length - 1] && (k += "/");
                    k = new E(k);
                    gf(k, e.gb, f);
                    var l = e.hb;
                    l && gf(k, l, f);
                    l = e.D;
                    e = f;
                    l && (gf(k, l, e), k = {
                        duration: (l.duration.value || 0) / (l.Dc.value || 1),
                        url: k.resolve(new E(l.media.value)).toString(),
                        init: k.resolve(new E(l.init.value)).toString()
                    }, e.D = k);
                    c.s.push(f)
                }
                this.n.push(c)
            }
        }
    };
    h.Ba = function(a) {
        if (a) {
            var b = null !== this.N,
                c = this.n;
            this.n = [];
            var d = (new DOMParser).parseFromString(a, "text/xml"),
                d = new ne(d.firstChild);
            this.ze(d);
            this.Q && (d = d.og.value, null !== d && (this.N = setTimeout(this.ac, 1E3 * d)));
            if (b)
                for (a = 0; a < c.length; a++) {
                    b = this.n[a];
                    d = c[a];
                    b.enabled = d.enabled;
                    b.C = d.C;
                    b.ca = d.ca;
                    for (var e = 0; e < b.s.length; e++) b.s[e].B = d.s[e].B;
                    e = d.index;
                    0 > e || (e = e + d.s[0].xa - b.s[0].xa, 0 > e ? (b.index = 0, b.K = !0) : (b.index = e, b.K = d.K))
                } else W.p.Ba.call(this, a)
        } else K(this.host, 3, Cd(this.Kb))
    };
    h.qa = function(a) {
        var b = this.n[a],
            b = b.s[b.C];
        return 0 === b.g.length && b.D ? (a = this.duration, this.Q && (a -= 20), {
            start: 0,
            end: a
        }) : W.p.qa.call(this, a)
    };
    h.seek = function(a, b) {
        var c = this.n[a],
            d = c.s[c.C];
        if (0 === d.g.length && d.D) {
            var e = this.qa(a);
            b < e.start && (b = e.start);
            b > e.end && (b = e.end);
            b += d.B;
            e = Math.floor(b / d.D.duration);
            d = Math.ceil(this.duration / d.D.duration);
            c.index = e < d ? e : d - 1;
            return !0
        }
        return W.p.seek.call(this, a, b)
    };
    h.cb = function(a) {
        var b = this.n[a],
            c = b.s[b.C];
        return 0 === c.g.length && c.D ? (a = b.index + 1, a < Math.ceil(this.duration / c.D.duration) ? (b.index = a, !0) : !1) : W.p.cb.call(this, a)
    };
    h.eb = function(a) {
        var b = this.n[a],
            c = b.s[b.C];
        return 0 === c.g.length && c.D ? b.index === Math.ceil(this.duration / c.D.duration) - 1 : W.p.eb.call(this, a)
    };
    h.va = function(a) {
        var b = this.n[a],
            c = b.s[b.C];
        if (c.D) {
            b = b.index;
            if (0 > b) return {
                time: 0,
                duration: 0
            };
            0 < c.g.length ? (a = c.g[b].duration, c = c.g[b].time) : (a = c.D.duration, c = b * a);
            return {
                time: c,
                duration: a
            }
        }
        return W.p.va.call(this, a)
    };
    h.updateSegmentRequestInfo = function(a, b) {
        var c = this.n[a],
            d = c.s[c.C],
            e = c.index;
        if (d.D) {
            var f = d.D,
                g = c.ca ? f.init : f.url,
                g = g.replace("$RepresentationID$", d.id),
                g = g.replace("$Bandwidth$", d.V);
            c.ca || (g = g.replace("$Number$", (e + d.xa).toString()), g = g.replace("$Time$", 0 < d.g.length ? d.g[e].Za.toString() : e * f.duration));
            b.url = g
        } else {
            var k = f = null;
            if (c.ca) c = d.od, g = c.url ? c.url : d.url, c.lc && (f = c.lc.start, k = c.lc.end);
            else if (e < d.g.length) c = d.g[e], c.url ? g = c.url : (g = d.url, f = c.offset, k = c.offset + c.size - 1);
            else {
                y(this.a, "invalid segment info");
                K(this.host, 0);
                return
            }
            b.url = g;
            b.headers = {};
            null !== f && null !== k && (b.headers.Range = "bytes=" + f + "-" + k)
        }
    };
    h.Ob = function(a, b, c) {
        var d = this.n[a],
            e = d.s[d.C];
        if (d.ca)
            if (d.ca = !1, d = (d = cf(b, 1836019574)) ? Te(d) : null, null === d) y(this.a, "no init"), K(this.host, 1);
            else {
                if (!e.D && 0 === e.g.length) {
                    b = (b = cf(b, 1936286840)) ? b.$d() : null;
                    if (!b) {
                        z(this.a, "no segments");
                        return
                    }
                    e.g = b
                }
                je(c, d, {
                    time: this.va(a).time,
                    duration: 0
                }, 0, !1)
            } else a = this.va(a), je(c, b, a, a.time + e.B, d.K), d.K = !1
    };
    var X = function(a, b) {
        this.Dg = a;
        this.sc = b ? b : null;
        this.b = null
    };
    X.prototype.i = function(a) {
        var b = xd(a).length;
        this.b = a;
        this.Be();
        this.m();
        a = xd(a).length - b;
        this.b.buffer.set([a >> 24, a >> 16, a >> 8, a], b)
    };
    X.prototype.Be = function() {
        N(this.b, 0);
        N(this.b, this.Dg);
        this.sc && M(this.b, this.sc.ad)
    };
    X.prototype.m = function() {
        throw Error("writeBody() should be  overriden.");
    };
    var Y = function(a, b, c) {
        X.call(this, a);
        this.ka = b;
        this.qc = c
    };
    s(Y, X);
    Y.prototype.Be = function() {
        Y.p.Be.call(this);
        N(this.b, this.ka << 24 | this.qc & 16777215)
    };
    var hf = function(a) {
        Y.call(this, 1935763823, 0, 0);
        this.r = a
    };
    s(hf, Y);
    hf.prototype.m = function() {
        N(this.b, 1);
        N(this.b, this.r)
    };
    var jf = function(a) {
        Y.call(this, 1952867444, 1, 0);
        this.Vc = a
    };
    s(jf, Y);
    jf.prototype.m = function() {
        var a = this.b,
            b = this.Vc;
        N(a, b / 4294967296);
        N(a, b % 4294967296)
    };
    var kf = function(a, b) {
        Y.call(this, 1935763834, 0, 0);
        this.Jf = a;
        this.Lf = b
    };
    s(kf, Y);
    kf.prototype.m = function() {
        M(this.b, [this.Jf]);
        N(this.b, this.Lf.length);
        0 === this.Jf && M(this.b, this.Lf)
    };
    var lf = function(a, b) {
        Y.call(this, 1702061171, 0, 0);
        this.Hg = a;
        this.Ac = b
    };
    s(lf, Y);
    lf.prototype.m = function() {
        M(this.b, [3, 25, 0, 1, 0, 4, 17, this.Hg, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, this.Ac[0], this.Ac[1]])
    };
    var mf = function(a, b) {
        X.call(this, 1635148611);
        this.Mf = a;
        this.Kf = b
    };
    s(mf, X);
    mf.prototype.m = function() {
        M(this.b, [1, 77, 64, 30, 255, 225]);
        var a = this.Mf.length;
        M(this.b, [a >> 8, a]);
        M(this.b, this.Mf);
        M(this.b, [1]);
        a = this.Kf.length;
        M(this.b, [a >> 8, a]);
        M(this.b, this.Kf)
    };
    var nf = function() {
        Y.call(this, 1937011571, 0, 0)
    };
    s(nf, Y);
    nf.prototype.m = function() {
        N(this.b, 0)
    };
    var of = function(a, b) {
        Y.call(this, 1952804451, 0, 1);
        this.Fg = a;
        this.Gg = b
    };
    s(of, Y);
    of.prototype.m = function() {
        N(this.b, 256 | this.Fg);
        M(this.b, this.Gg.ad)
    };
    var pf = function(a, b) {
        Y.call(this, 1935894637, 0, 0);
        this.Jg = a;
        this.Kg = b
    };
    s(pf, Y);
    pf.prototype.m = function() {
        N(this.b, this.Jg);
        N(this.b, this.Kg)
    };
    var qf = function(a) {
        X.call(this, 1718775137);
        this.Ng = a
    };
    s(qf, X);
    qf.prototype.m = function() {
        N(this.b, this.Ng)
    };
    var rf = function(a) {
        Y.call(this, 1751411826, 0, 0);
        this.Pg = a
    };
    s(rf, Y);
    rf.prototype.m = function() {
        N(this.b, 0);
        N(this.b, this.Pg);
        M(this.b, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    };
    var sf = function(a) {
        Y.call(this, 1835296868, 0, 0);
        this.Na = a
    };
    s(sf, Y);
    sf.prototype.m = function() {
        N(this.b, 0);
        N(this.b, 0);
        N(this.b, this.Na);
        N(this.b, 0);
        M(this.b, [85, 196, 0, 0])
    };
    var tf = function(a, b) {
        Y.call(this, 1953196132, 0, 3);
        this.Lg = a;
        this.Ig = b
    };
    s(tf, Y);
    tf.prototype.m = function() {
        N(this.b, 0);
        N(this.b, 0);
        M(this.b, [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0]);
        N(this.b, this.Lg << 16);
        N(this.b, this.Ig << 16)
    };
    var uf = function() {
        Y.call(this, 1953654136, 0, 0)
    };
    s(uf, Y);
    uf.prototype.m = function() {
        M(this.b, [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    };
    var vf = function(a, b) {
        Y.call(this, 1886614376, 0, 0);
        this.Eg = a;
        this.wb = b
    };
    s(vf, Y);
    vf.prototype.m = function() {
        M(this.b, this.Eg.ad);
        N(this.b, this.wb.length);
        M(this.b, this.wb)
    };
    var wf = function(a) {
        Y.call(this, 1836476516, 0, 0);
        this.Na = a
    };
    s(wf, Y);
    wf.prototype.m = function() {
        N(this.b, 0);
        N(this.b, 0);
        N(this.b, this.Na);
        M(this.b, [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2])
    };
    var xf = function(a) {
        Y.call(this, 1952868452, 0, 8);
        this.Og = a
    };
    s(xf, Y);
    xf.prototype.m = function() {
        N(this.b, 1);
        N(this.b, this.Og)
    };
    var yf = function(a) {
        Y.call(this, 1953658222, 0, 513);
        this.Ne = a
    };
    s(yf, Y);
    yf.prototype.m = function() {
        N(this.b, this.Ne.length);
        N(this.b, 0);
        for (var a = 0; a < this.Ne.length; a++) N(this.b, this.Ne[a].length)
    };
    var zf = function(a) {
        Y.call(this, 1835427940, 0, 0);
        this.bb = a
    };
    s(zf, Y);
    zf.prototype.m = function() {
        N(this.b, this.bb)
    };
    var Af = function(a) {
        X.call(this, 1835295092);
        this.Rf = a
    };
    s(Af, X);
    Af.prototype.m = function() {
        for (var a = 0; a < this.Rf.length; a++) M(this.b, this.Rf[a])
    };
    var Df = function(a) {
        X.call(this, 1970628964, Bf);
        this.Mg = a
    };
    s(Df, X);
    var Bf = new jd([43, 248, 102, 128, 198, 229, 78, 36, 190, 35, 15, 129, 90, 96, 110, 178]);
    Df.prototype.m = function() {
        M(this.b, md(this.Mg))
    };
    var Ef = {
            clearkey: "org.w3.clearkey",
            playready: "com.microsoft.playready",
            widevine: "com.widevine.alpha"
        },
        Ff = function(a, b, c, d, e) {
            x.call(this);
            this.c = a;
            this.o = b;
            this.sd = e;
            this.wb = d;
            this.q = this.jf = this.lf = null;
            this.Bc = c;
            this.e = new D;
            Cc(this.e);
            C(this.e, "success", this.Ec, !1, this);
            C(this.e, "error", this.yb, !1, this);
            C(this.e, "timeout", this.yb, !1, this);
            this.hg = this.pg.bind(this);
            this.oa = null
        };
    s(Ff, x);
    Ff.prototype.a = w("cast.player.core.MediaKeySession");
    Ff.prototype.t = function() {
        this.q && (jc(this.q, "webkitkeymessage", this.ff, !1, this), jc(this.q, "webkitkeyerror", this.ef, !1, this), this.q = null);
        this.e.dispose();
        null !== this.oa && (clearTimeout(this.oa), this.oa = null);
        Ff.p.t.call(this)
    };
    var Gf = function(a) {
        A(a.a, "create session");
        a.q = a.c.mediaElement;
        C(a.q, "webkitkeymessage", a.ff, !1, a);
        C(a.q, "webkitkeyerror", a.ef, !1, a);
        var b = a.c.licenseCustomData;
        if (b) {
            var c = new Pe(a.wb.length + b.length + 16);
            M(c, a.wb);
            (new Df(b)).i(c);
            b = xd(c)
        } else b = a.wb;
        a.q.webkitGenerateKeyRequest(Ef[a.Bc], b);
        a.oa = setTimeout(a.hg, 6E4)
    };
    h = Ff.prototype;
    h.pg = function() {
        A(this.a, "timeout");
        Hf(this.sd, this, !0);
        this.oa = null
    };
    h.Ec = function(a) {
        A(this.a, "xhr success");
        a = new Uint8Array(Mc(a.target));
        this.c.processLicense && (a = this.c.processLicense(a));
        this.q.webkitAddKey(Ef[this.Bc], a, this.wb, this.lf);
        Hf(this.sd, this, !0)
    };
    h.yb = function() {
        A(this.a, "xhr error");
        var a = new H(String(this.e.Hc), this.e.Ma, Lc(this.e));
        Hf(this.sd, this, !1);
        K(this.c, 2, a)
    };
    h.ff = function(a) {
        A(this.a, "keymessage");
        null !== this.oa && (clearTimeout(this.oa), this.oa = null);
        a = a.Ib;
        this.lf = a.sessionId;
        this.jf = a.message;
        this.c.prepareLicenseRequest && !this.c.prepareLicenseRequest() || this.ob()
    };
    h.ef = function() {
        A(this.a, "keyerror");
        Hf(this.sd, this, !1);
        K(this.c, 2)
    };
    h.ob = function() {
        var a = new G;
        a.timeoutInterval = 18E4;
        a.yf = this.Bc;
        a.content = this.jf;
        this.o.updateLicenseRequestInfo(a);
        this.c.licenseUrl && (a.url = this.c.licenseUrl);
        this.c.updateLicenseRequestInfo && this.c.updateLicenseRequestInfo(a);
        this.e.vc = a.withCredentials;
        this.e.Ka = Math.max(0, a.timeoutInterval);
        this.e.send(a.url, "POST", a.content, a.headers)
    };
    var If = function(a, b, c) {
        x.call(this);
        this.c = a;
        this.o = b;
        this.Bc = c;
        this.Da = new Nc;
        C(this.c.mediaElement, "webkitneedkey", this.zf, !1, this)
    };
    s(If, x);
    If.prototype.a = w("cast.player.core.MediaKeysManager");
    If.prototype.t = function() {
        jc(this.c.mediaElement, "webkitneedkey", this.zf, !1, this);
        this.reset();
        If.p.t.call(this)
    };
    If.prototype.reset = function() {
        for (var a = this.Da.ha(), b = 0; b < a.length; b++) a[b].dispose();
        this.Da.clear()
    };
    var Hf = function(a, b, c) {
        Pc(a.Da);
        b.dispose();
        A(a.a, "key session ended: " + a.Da.na());
        c && !a.Da.pa() && (b = Qc(a.Da), Gf(b))
    };
    If.prototype.zf = function(a) {
        (a = a.Ib.initData) ? (a = new Ff(this.c, this.o, this.Bc, a, this), this.Da.S.push(a), A(this.a, "needkey: " + this.Da.na()), 1 === this.Da.na() && Gf(a)) : A(this.a, "invalid init data")
    };
    If.prototype.ob = function() {
        Qc(this.Da).ob()
    };
    var Jf = function(a, b, c) {
        x.call(this);
        this.c = a;
        this.o = b;
        this.wa = c;
        this.L = [];
        this.pc = null;
        this.Z = new MediaSource;
        this.Bf = !1;
        C(this.Z, "sourceopen", this.xf, !1, this)
    };
    s(Jf, x);
    h = Jf.prototype;
    h.a = w("cast.player.core.MediaSourceManager");
    h.t = function() {
        Kf(this);
        this.o.pb();
        jc(this.Z, "sourceopen", this.xf, !1, this);
        Jf.p.t.call(this)
    };
    h.xf = function() {
        this.Bf ? this.update() : (this.o.load(this), this.Bf = !0)
    };
    h.Fd = function() {
        this.update()
    };
    h.endOfStream = function() {
        "open" === this.Z.readyState && this.Z.endOfStream()
    };
    h.load = function() {
        Kf(this);
        this.c.mediaElement.src = window.URL.createObjectURL(this.Z)
    };
    var Kf = function(a) {
        for (var b = 0; b < a.L.length; b++) a.L[b] && (a.L[b].dispose(), a.L[b] = null);
        a.L.length = 0;
        a.pc && (a.pc.dispose(), a.pc = null)
    };
    h = Jf.prototype;
    h.reset = function() {
        for (var a = 0; a < this.L.length; a++) this.L[a] && this.L[a].reset()
    };
    h.update = function() {
        for (var a = this.o.getStreamCount(), b = null, c = null, d = 0; d < a; d++)
            if (this.o.isStreamEnabled(d)) {
                var e = this.o.getStreamInfo(d).mimeType;
                la(e, "audio/") ? b ? z(this.a, "more than one audio stream enabled") : b = e : la(e, "video/") && (c ? z(this.a, "more than one video stream enabled") : c = e);
                this.L[d] || (this.L[d] = new he(this.wa, this.c, this.o, d, this.Z), this.L[d].oe())
            } else this.L[d] && (this.L[d].dispose(), this.L[d] = null);
        if (e = c ? c : b) {
            if (!this.pc && (a = e, b = this.o.Ed())) {
                c = null;
                for (d = 0; d < b.length; d++)
                    if ((e = Ef[b[d]]) &&
                        this.c.mediaElement.canPlayType(a, e)) {
                        c = b[d];
                        break
                    }
                c ? this.pc = new If(this.c, this.o, c) : z(this.a, "no supported key type")
            }
        } else z(this.a, "no enabled audio or video stream")
    };
    h.ke = function(a) {
        return this.L[a].ke()
    };
    h.le = function(a) {
        this.L[a].le()
    };
    h.vb = function(a) {
        return this.L[a].vb()
    };
    h.ya = function(a, b) {
        return this.L[a].ya(b)
    };
    h.ob = function() {
        this.pc.ob()
    };
    h.getStreamCount = function() {
        return this.L.length
    };
    var Lf = function(a, b, c) {
        X.call(this, 1836019558);
        this.j = {
            wg: a,
            vg: b,
            xg: c
        }
    };
    s(Lf, X);
    Lf.prototype.m = function() {
        (new zf(0)).i(this.b);
        (new Mf(this.j)).i(this.b)
    };
    var Mf = function(a) {
        X.call(this, 1953653094);
        this.j = a
    };
    s(Mf, X);
    Mf.prototype.m = function() {
        (new xf(this.j.wg)).i(this.b);
        (new jf(this.j.vg)).i(this.b);
        (new yf(this.j.xg)).i(this.b)
    };
    var Nf = function(a, b) {
        X.call(this, 1836019558);
        this.Vc = b;
        this.Bg = a
    };
    s(Nf, X);
    Nf.prototype.m = function() {
        for (var a = ff(U(this.Bg), void 0); 0 < a.length;) {
            var b = a.shift();
            switch (b.getName()) {
                case 1953653094:
                    (new Of(b, this.Vc)).i(this.b);
                    break;
                default:
                    b.i(this.b)
            }
        }
    };
    var Of = function(a, b) {
        X.call(this, 1953653094);
        this.Vc = b;
        this.yg = a
    };
    s(Of, X);
    Of.prototype.m = function() {
        for (var a = ff(U(this.yg), void 0), b = null; 0 < a.length;) {
            var c = a.shift();
            switch (c.getName()) {
                case 1970628964:
                    c instanceof Xe && (b = c);
                    break;
                case 1952868452:
                    Qe(U(c), 0, 1);
                    c.i(this.b);
                    break;
                case 1953658222:
                    (new Pf(c)).i(this.b);
                    break;
                default:
                    c.i(this.b)
            }
        }(new jf(this.Vc)).i(this.b);
        b && ((new kf(b.Ce ? 0 : 8, b.Jd)).i(this.b), (new hf(0)).i(this.b))
    };
    var Pf = function(a) {
        Y.call(this, 1953658222, a.ka, a.qc | 1);
        this.Gf = a
    };
    s(Pf, Y);
    Pf.prototype.m = function() {
        var a = new Oe(U(this.Gf));
        N(this.b, L(a));
        0 === (this.Gf.qc & 1) && N(this.b, 0);
        M(this.b, a.buffer.subarray(a.offset))
    };
    var Qf = function(a, b, c) {
            this.rg = a;
            this.$a = b;
            this.za = c
        },
        Rf = function(a, b, c, d) {
            this.width = a;
            this.height = b;
            this.Ab = c;
            this.Gc = d
        },
        Sf = function(a, b, c, d, e, f) {
            this.Oa = a;
            this.fb = b;
            this.ug = c;
            this.tg = d;
            this.audio = e;
            this.video = f
        },
        Tf = function(a) {
            X.call(this, 1836019574);
            this.j = a
        };
    s(Tf, X);
    Tf.prototype.m = function() {
        (new wf(this.j.fb)).i(this.b);
        var a = this.j.Oa;
        a && a.Gd && (new vf(a.systemId, a.Gd)).i(this.b);
        (new Uf(this.j)).i(this.b);
        (new Vf(this.j)).i(this.b)
    };
    var Vf = function(a) {
        X.call(this, 1953653099);
        this.j = a
    };
    s(Vf, X);
    Vf.prototype.m = function() {
        var a = 0,
            b = 0,
            c = this.j.video;
        c && (a = c.width, b = c.height);
        (new tf(a, b)).i(this.b);
        (new Wf(this.j)).i(this.b)
    };
    var Wf = function(a) {
        X.call(this, 1835297121);
        this.j = a
    };
    s(Wf, X);
    Wf.prototype.m = function() {
        (new sf(this.j.fb)).i(this.b);
        (new rf(this.j.tg)).i(this.b);
        (new Xf(this.j)).i(this.b)
    };
    var Xf = function(a) {
        X.call(this, 1835626086);
        this.j = a
    };
    s(Xf, X);
    Xf.prototype.m = function() {
        (new Yf(this.j)).i(this.b)
    };
    var Yf = function(a) {
        X.call(this, 1937007212);
        this.j = a
    };
    s(Yf, X);
    Yf.prototype.m = function() {
        (new Zf(this.j)).i(this.b);
        this.j.video && (new nf).i(this.b)
    };
    var Zf = function(a) {
        Y.call(this, 1937011556, 0, 0);
        this.j = a
    };
    s(Zf, Y);
    Zf.prototype.m = function() {
        N(this.b, 1);
        (this.j.video ? new $f(this.j) : new ag(this.j)).i(this.b)
    };
    var ag = function(a) {
        X.call(this, a.Oa ? 1701733217 : 1836069985);
        this.j = a
    };
    s(ag, X);
    ag.prototype.m = function() {
        M(this.b, [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0]);
        N(this.b, this.j.audio.$a << 16);
        (new lf(this.j.audio.rg, this.j.audio.za)).i(this.b);
        this.j.Oa && (new bg(this.j)).i(this.b)
    };
    var $f = function(a) {
        X.call(this, a.Oa ? 1701733238 : 1635148593);
        this.j = a
    };
    s($f, X);
    $f.prototype.m = function() {
        M(this.b, [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        var a = this.j.video.width;
        M(this.b, [a >> 8, a]);
        a = this.j.video.height;
        M(this.b, [a >> 8, a]);
        M(this.b, [0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
        (new mf(this.j.video.Ab, this.j.video.Gc)).i(this.b);
        this.j.Oa && (new bg(this.j)).i(this.b)
    };
    var Uf = function(a) {
        X.call(this, 1836475768);
        this.j = a
    };
    s(Uf, X);
    Uf.prototype.m = function() {
        (new uf).i(this.b)
    };
    var bg = function(a) {
        X.call(this, 1936289382);
        this.j = a
    };
    s(bg, X);
    bg.prototype.m = function() {
        (new qf(this.j.ug)).i(this.b);
        (new pf(1667591779, 0)).i(this.b);
        (new cg(this.j)).i(this.b)
    };
    var cg = function(a) {
        X.call(this, 1935894633);
        this.j = a
    };
    s(cg, X);
    cg.prototype.m = function() {
        var a = this.j.Oa;
        a && a.Hd && (new of(a.Ae, a.Hd)).i(this.b)
    };
    var dg = function(a, b, c, d, e) {
        Tf.call(this, new Sf(a, b, 1836069985, 1936684398, new Qf(c, d, e), null))
    };
    s(dg, Tf);
    var eg = function(a, b, c, d, e, f) {
        Tf.call(this, new Sf(a, b, 1635148593, 1986618469, null, new Rf(c, d, e, f)))
    };
    s(eg, Tf);
    var fg = function(a) {
        qd.call(this, a)
    };
    s(fg, qd);
    var gg = function(a, b, c, d) {
        this.ig = a.match("mp4a.67") ? 103 : 64;
        this.df = b;
        this.hc = c;
        this.Rc = d;
        this.ae = null;
        this.be = 0;
        this.Ac = null
    };
    gg.prototype.a = w("cast.player.hls.AacParser");
    var hg = function(a) {
        for (var b = new fg(a.df), c = [], d = null; b.offset < b.buffer.length;) {
            var e;
            if (e = Je(b.buffer, b.offset)) b.offset += e.length;
            if (e) a.Rc && a.Rc("ID3", e);
            else {
                d = b.buffer.subarray(b.offset);
                if (255 != d[0] || 240 != (d[1] & 240)) d = null;
                else {
                    e = ((d[3] & 3) << 11) + (d[4] << 3) + ((d[5] & 224) >> 5);
                    var f = d[2] >> 2 & 15,
                        g = d[1] & 1 ? 7 : 9;
                    b.offset += g;
                    d = {
                        profile: (d[2] >> 6 & 3) + 1,
                        $a: Le[f],
                        zg: (d[2] << 2 & 4) + (d[3] >> 6 & 3),
                        Ag: e - g
                    }
                }
                if (d) c.push(ud(b, d.Ag));
                else return y(a.a, "Neither ID3 nor ADTS header was found at " + b.buffer.subarray(b.offset).byteOffset), !1
            }
        }
        if (null === d) return y(a.a, "No ADTS header was found."), !1;
        b = Ne(d.profile, d.$a, d.zg);
        if (null === b) return y(a.a, "Cannot generate audio codec private data."), !1;
        a.ae = c;
        a.be = d.$a;
        a.Ac = b;
        return !0
    };
    gg.prototype.kf = function() {
        return this.hc
    };
    var ig = function(a, b, c) {
        x.call(this);
        this.c = a;
        this.bc = c;
        this.af = b;
        this.X = null;
        this.ab = new Fe;
        this.gg = this.yc.bind(this);
        this.kg = this.pe.bind(this);
        this.mf = this.lg.bind(this);
        this.Vd = this.td = null;
        this.nf = -1;
        this.Ja = new Nc;
        this.fa = null;
        this.e = new D;
        Cc(this.e);
        C(this.e, "success", this.mg, !1, this);
        C(this.e, "error", this.of, !1, this);
        C(this.e, "timeout", this.of, !1, this);
        this.R = new G;
        this.Fc = this.Xa = this.xc = this.Lc = null;
        this.gc = !0;
        this.ba = this.Ya = this.M = null
    };
    s(ig, x);
    h = ig.prototype;
    h.a = w("cast.player.hls.Adaptation");
    h.t = function() {
        this.reset();
        this.e.dispose()
    };
    h.reset = function() {
        this.gc = !0;
        this.Ja.clear();
        this.Ya = this.M = this.fa = null;
        this.e.abort();
        this.Lc && (this.Lc.cancel(), this.Lc = null);
        this.xc && (this.xc.cancel(), this.xc = null);
        null !== this.ba && clearTimeout(this.ba)
    };
    h.pe = function(a) {
        this.Lc = null;
        this.Fc = a;
        this.ba = setTimeout(this.mf, 0)
    };
    h.mg = function(a) {
        this.Lc = new Ae(this.c, this.kg, new Uint8Array(Mc(a.target)))
    };
    h.of = function() {
        K(this.c, 3, new H(this.R.url, this.e.Ma, Lc(this.e)))
    };
    h.lg = function() {
        var a = Qc(this.Ja);
        a.Zd && this.Fc && this.fa && (A(this.a, "decrypt segment"), this.xc = new ze(this.c, this.gg, this.Fc, a.Zd, this.fa), this.ba = this.fa = null)
    };
    h.yc = function(a) {
        A(this.a, "process segment");
        this.xc = null;
        var b = Pc(this.Ja),
            c;
        if (this.bc) c = new Ke(a, this.c.processMetadata);
        else {
            c = new gg(this.X.La.codecs, a, b.aa, this.c.processMetadata);
            a = c;
            if (hg(a)) {
                var d = new Pe(2 * a.df.length);
                (new dg(null, 1E6, a.ig, a.be, a.Ac)).i(d);
                (new Lf(1024E6 / a.be, 1E6 * a.hc, a.ae)).i(d);
                (new Af(a.ae)).i(d);
                a = xd(d);
                df(a)
            } else a = null;
            if (!a) {
                K(this.c, 1);
                return
            }
        }
        if (b.Ze || b.K) this.M = null, b.K = !1;
        b = {
            time: b.aa,
            duration: b.duration
        };
        d = c.kf();
        if (c = null === this.M && Infinity !== d) A(this.a, "start: " +
            d), this.M = d, this.Ya = b, this.af && (d = this.af, d.H && d.H.K(this.M, b));
        d = this.Vd;
        this.Vd = null;
        je(d, a, b, this.M || 0, c)
    };
    h.Ob = function(a, b) {
        this.Vd = b;
        var c = Qc(this.Ja).$e;
        c ? (this.fa = a, this.Xa === c && null !== this.Fc ? this.ba = setTimeout(this.mf, 0) : (this.Xa = c, this.Fc = null, this.R.url = this.Xa, this.c.updateLicenseRequestInfo && this.c.updateLicenseRequestInfo(this.R), this.e.vc = this.R.withCredentials, this.e.Ka = Math.max(0, this.R.timeoutInterval), this.e.send(this.R.url, void 0, void 0, this.R.headers))) : this.yc(a)
    };
    h.updateSegmentRequestInfo = function(a) {
        var b = Ge(this.ab);
        if (b) {
            this.gc && (b.K = !0, this.gc = !1);
            if (!this.Ja.pa()) {
                var c = this.Ja.ha()[this.Ja.na() - 1];
                c.jc === b.jc && (this.Ja.remove(c), A(this.a, "removed segment " + b.jc))
            }
            this.Ja.S.push(b);
            if (c = b.cf) a.headers = {}, a.headers.Range = "bytes=" + c.start + "-" + c.end;
            a.url = b.url
        }
    };
    h.va = function() {
        var a = Ge(this.ab);
        return a ? {
            time: a.aa,
            duration: a.duration
        } : {
            time: 0,
            duration: 0
        }
    };
    h.qa = function() {
        return this.ab.qa()
    };
    h.eb = function() {
        return this.ab.eb()
    };
    h.cb = function() {
        return this.ab.next()
    };
    h.seek = function(a) {
        return this.ab.seek(a)
    };
    h.ie = function() {
        this.X.kb && (this.ab.update(this.X.kb), this.td && (Ed(this.td), this.td = null))
    };
    h.Md = function(a, b, c) {
        this.nf = a;
        this.td = b;
        this.gc = !0;
        this.X && this.X.pb();
        this.X = c;
        c.load()
    };
    h.getQualityLevel = function() {
        return this.nf
    };
    h.K = function(a, b) {
        this.gc = !0;
        this.M = a;
        this.Ya = b
    };
    var jg = function(a) {
        ig.call(this, a, null, !1)
    };
    s(jg, ig);
    jg.prototype.cb = function() {
        return null === this.M || null === this.Ya ? !1 : jg.p.cb.call(this)
    };
    jg.prototype.seek = function(a) {
        return null === this.M || null === this.Ya ? !1 : jg.p.seek.call(this, a)
    };
    jg.prototype.Ob = function(a, b) {
        var c = Ge(this.ab),
            d = {
                time: c.aa,
                duration: c.duration
            },
            e = !1;
        if (null === this.M || null === this.Ya) a = new Uint8Array(0);
        else if (this.gc || c.K) d = this.Ya, e = !0;
        je(b, a, d, this.M || 0, e)
    };
    var Z = function(a, b) {
        this.c = a;
        this.bc = 1 !== b;
        this.$ = this.Ra = null;
        this.Mb = new ig(a, this, this.bc);
        this.H = this.W = null
    };
    Z.prototype.load = function(a) {
        this.Ra = a;
        this.$ = new Ie(this.c, this, this, this.bc);
        this.$.load()
    };
    Z.prototype.pb = function() {
        this.Mb.dispose();
        this.W && (this.W.dispose(), this.W = null);
        this.H && (this.H.dispose(), this.H = null);
        this.$ && (this.$.dispose(), this.$ = null)
    };
    Z.prototype.Fd = function() {
        for (var a = this.$.Aa, b = 0; b < a.length; b++) {
            var c = a[b].La;
            if (c.Wd && la(c.mimeType, "audio/")) {
                this.enableStream(b + 1, !0);
                break
            }
        }
        this.Ra.Fd();
        this.Ra = null
    };
    Z.prototype.getStreamCount = function() {
        return this.$.Aa.length + 1
    };
    r("cast.player.hls.Protocol.prototype.getStreamCount", Z.prototype.getStreamCount);
    Z.prototype.enableStream = function(a, b) {
        if (0 < a) {
            var c = this.$.Aa[a - 1],
                d = c.La.mimeType;
            la(d, "audio/") ? (this.W && (this.W.dispose(), this.W = null), b && (this.W = new ig(this.c, null, !1), this.W.X = c)) : la(d, "text/") && (this.H && (this.H.dispose(), this.H = null), b && (this.H = new jg(this.c), this.H.X = c, this.H.K(this.Mb.M, this.Mb.Ya)))
        }
    };
    r("cast.player.hls.Protocol.prototype.enableStream", Z.prototype.enableStream);
    Z.prototype.isStreamEnabled = function(a) {
        return null !== kg(this, a)
    };
    r("cast.player.hls.Protocol.prototype.isStreamEnabled", Z.prototype.isStreamEnabled);
    var kg = function(a, b) {
        var c;
        0 === b ? c = a.Mb : (c = a.$.Aa[b - 1], c = null !== a.W && a.W.X === c ? a.W : null !== a.H && a.H.X === c ? a.H : null);
        return c
    };
    Z.prototype.getQualityLevel = function(a) {
        return kg(this, a).getQualityLevel()
    };
    r("cast.player.hls.Protocol.prototype.getQualityLevel", Z.prototype.getQualityLevel);
    Z.prototype.getStreamInfo = function(a) {
        var b = [],
            c, d;
        if (0 === a) {
            b = [];
            c = this.$.nb;
            for (a = 0; a < c.length; a++) b.push(c[a].La.V);
            c = this.$.nb[0].La;
            d = c.codecs;
            if (this.W) {
                var e = c.codecs.split(",");
                for (a = 0; a < e.length; a++)
                    if (0 === e[a].indexOf("avc1.")) {
                        d = e[a];
                        break
                    }
            }
        } else c = this.$.Aa[a - 1].La, b.push(c.V), d = c.codecs;
        return new I(d, c.mimeType, b, c.language)
    };
    r("cast.player.hls.Protocol.prototype.getStreamInfo", Z.prototype.getStreamInfo);
    h = Z.prototype;
    h.Md = function(a, b, c) {
        kg(this, a).Md(b, c, 0 === a ? this.$.nb[b] : this.$.Aa[a - 1])
    };
    h.reset = function(a) {
        kg(this, a).reset()
    };
    h.qa = function(a) {
        return kg(this, a).qa()
    };
    h.ie = function(a) {
        (this.Mb.X === a ? this.Mb : null !== this.W && this.W.X === a ? this.W : null !== this.H && this.H.X === a ? this.H : null).ie()
    };
    h.updateLicenseRequestInfo = function() {};
    h.Xf = function() {
        var a = this.Mb.X;
        return a ? a.duration : -1
    };
    h.seek = function(a, b) {
        return kg(this, a).seek(b)
    };
    h.cb = function(a) {
        return kg(this, a).cb()
    };
    h.eb = function(a) {
        return kg(this, a).eb()
    };
    h.va = function(a) {
        return kg(this, a).va()
    };
    h.Df = function() {
        return !1
    };
    h.Ie = function() {
        return null
    };
    h.updateSegmentRequestInfo = function(a, b) {
        kg(this, a).updateSegmentRequestInfo(b)
    };
    h.Ob = function(a, b, c) {
        kg(this, a).Ob(b, c)
    };
    h.Ed = function() {
        return null
    };
    w("cast.player.smooth");
    var ng = function(a) {
            this.Q = new zd("IsLive");
            this.fb = new O("TimeScale");
            for (this.duration = new O("Duration"); a;) {
                if ("SmoothStreamingMedia" === a.nodeName) {
                    Q(a.attributes, this);
                    break
                }
                a = a.nextElementSibling
            }
            this.Pc = [];
            this.Oa = null;
            if (a)
                for (this.fb.value || (this.fb.value = 1E7), a = a.firstElementChild; null != a; a = a.nextElementSibling)
                    if ("StreamIndex" === a.nodeName) {
                        var b = new lg(a, this.fb.value);
                        0 < b.sa.length && this.Pc.push(b)
                    } else "Protection" === a.nodeName && (this.Oa = new mg(a.firstElementChild))
        },
        og = function(a) {
            for (var b =
                    a.length / 2, c = new Uint8Array(b), d = 0; d < b; d++) c[d] = parseInt(a.substr(2 * d, 2), 16);
            return c
        },
        pg = function(a, b) {
            P.call(this, a, b)
        };
    s(pg, P);
    pg.prototype.parse = function(a) {
        switch (a) {
            case "H264":
            case "AVC1":
                this.value = "avc1.4d40";
                break;
            case "AACL":
                this.value = "mp4a.40.2";
                break;
            case "AACH":
                this.value = "mp4a.40.5";
                break;
            case "TTML":
                this.value = "ttml";
                break;
            default:
                this.value = null
        }
    };
    var qg = function() {
        this.name = "CodecPrivateData";
        this.Gc = this.Ab = null
    };
    s(qg, yd);
    qg.prototype.parse = function(a) {
        a = a.split("00000001");
        3 === a.length && (this.Ab = og(a[1]), this.Gc = og(a[2]))
    };
    var rg = function() {
        this.name = "CodecPrivateData";
        this.value = null
    };
    s(rg, yd);
    rg.prototype.parse = function(a) {
        a && (this.value = og(a))
    };
    var sg = function(a) {
            this.V = new O("Bitrate");
            this.format = new pg("FourCC", a)
        },
        tg = function(a) {
            sg.call(this, "ttml");
            Q(a.attributes, this)
        };
    s(tg, sg);
    var ug = function(a) {
        sg.call(this, "avc1.4d40");
        this.width = new O("MaxWidth");
        this.height = new O("MaxHeight");
        this.za = new qg;
        Q(a.attributes, this)
    };
    s(ug, sg);
    var vg = function(a) {
        sg.call(this, "mp4a.40.2");
        this.$a = new O("SamplingRate");
        this.ng = new O("Channels");
        this.za = new rg;
        Q(a.attributes, this)
    };
    s(vg, sg);
    var lg = function(a, b) {
            this.type = new P("Type");
            this.url = new P("Url");
            this.name = new P("Name");
            this.language = new P("Language");
            Q(a.attributes, this);
            this.Qa = 0;
            switch (this.type.value) {
                case "video":
                    this.Qa = 2;
                    break;
                case "audio":
                    this.Qa = 1;
                    break;
                case "text":
                    this.Qa = 3
            }
            this.g = [];
            this.sa = [];
            for (var c = new od("0"), d = a.firstElementChild; null != d; d = d.nextElementSibling)
                if ("QualityLevel" === d.nodeName) {
                    var e = d,
                        f = void 0;
                    switch (this.Qa) {
                        case 2:
                            f = new ug(e);
                            break;
                        case 1:
                            f = new vg(e);
                            break;
                        case 3:
                            f = new tg(e);
                            break;
                        default:
                            f =
                                null
                    }
                    f && f.format.value && this.sa.push(f)
                } else if ("c" === d.nodeName) {
                var g = d,
                    e = c,
                    f = b,
                    k = g.attributes.getNamedItem("t");
                k && e.reset(k.value);
                var k = null,
                    l = -1;
                g.attributes.getNamedItem("d") && (k = parseInt(g.attributes.d.value, 10), l = k / f);
                for (var g = (g = g.attributes.getNamedItem("r")) ? parseInt(g.value, 10) : 1, q = 0; q < g; q++) this.g.push({
                    time: parseInt(e.toString(), 10) / f,
                    duration: l,
                    Za: new od(e.toString()),
                    offset: 0,
                    size: 0,
                    url: null
                }), null !== k && e.add(k)
            }
            c = this.g.length - 1;
            for (d = 0; d < c; d++)
                if (k = this.g[d], f = this.g[d + 1], null ===
                    k.duration) {
                    e = k;
                    f = f.Za;
                    k = k.Za;
                    if (f.G == k.G) f = 0;
                    else {
                        if (!pd(f, k)) throw Error("Value must be smaller than the current value");
                        for (var g = l = 0, q = 1, p = 0; p < f.G.length; p++) var u = parseInt(f.G.charAt(f.G.length - 1 - p), 10) - (p < k.G.length ? parseInt(k.G.charAt(k.G.length - 1 - p), 10) : 0) - g,
                            g = 0 > u ? 1 : 0,
                            l = l + (g ? 10 + u : u) * q,
                            q = 10 * q;
                        if (g) throw Error("Value must be smaller than the current value");
                        if (9007199254740992 < l) throw Error("Difference lost precision");
                        f = l
                    }
                    e.duration = f / b
                }
        },
        mg = function(a) {
            this.systemId = new Bd("SystemID");
            Q(a.attributes,
                this);
            this.lb = null;
            this.systemId.value && (this.lb = Dd(this.systemId.value, a.textContent))
        };
    var wg = function(a) {
        S.call(this, a);
        this.yd = null;
        this.Na = 1E7
    };
    s(wg, S);
    wg.prototype.a = w("cast.player.smooth.Protocol");
    var xg = function(a, b, c, d, e) {
            return {
                type: a,
                enabled: !1,
                mimeType: b,
                K: !0,
                s: [],
                language: d,
                ca: void 0 === e ? !0 : !1,
                codecs: c,
                index: -1,
                C: -1
            }
        },
        yg = function(a, b, c, d, e, f) {
            return {
                id: a,
                url: b || "",
                V: c,
                B: d,
                g: e,
                od: {
                    url: null,
                    lc: null,
                    data: f
                }
            }
        };
    wg.prototype.ze = function(a) {
        var b = a.Oa;
        if (b) {
            b = b.lb;
            if (null === b) {
                zg(this, "invalid protection info");
                return
            }
            this.yd = b
        }
        a.fb.value && (this.Na = a.fb.value);
        a.duration.value && (this.duration = a.duration.value / this.Na);
        a.Q.value && (this.Q = a.Q.value);
        for (var b = Infinity, c = 0; c < a.Pc.length; c++) {
            var d = a.Pc[c];
            (2 === d.Qa || 1 === d.Qa) && d.g[0].time < b && (b = d.g[0].time)
        }
        for (c = 0; c < a.Pc.length; c++) {
            d = a.Pc[c];
            if (0 === d.sa.length) {
                zg(this, "no quality levels");
                break
            }
            var e = d.sa[0].format.value;
            if (null === e) {
                zg(this, "unknown media format");
                break
            }
            if (2 === d.Qa) t: {
                var f = e,
                    g = b,
                    e = d.sa[0];
                if (null === e.za.Ab) zg(this, "no sps");
                else {
                    for (var e = f + e.za.Ab[3].toString(16).toLowerCase(), f = xg(2, "video/mp4", e, d.language.value), k = 0; k < d.sa.length; k++) {
                        e = d.sa[k];
                        if (null === e.V.value || null === e.width.value || null === e.height.value || null === e.za.Ab || null === e.za.Gc) {
                            zg(this, "invalid video quality");
                            break t
                        }
                        var l = this.yd,
                            q = this.Na,
                            p = e.width.value,
                            u = e.height.value,
                            ib = e.za.Ab,
                            Yg = e.za.Gc,
                            Cf = new Pe;
                        (new eg(l, q, p, u, ib, Yg)).i(Cf);
                        f.s.push(yg(d.name.value, d.url.value,
                            e.V.value, g, d.g, xd(Cf)))
                    }
                    this.n.push(f)
                }
            } else if (1 === d.Qa) t: {
                g = b;
                e = xg(1, "audio/mp4", e, d.language.value);
                for (f = 0; f < d.sa.length; f++) {
                    k = d.sa[f];
                    if (null === k.V.value || null === k.$a.value) {
                        zg(this, "invalid audio quality");
                        break t
                    }(l = k.za.value) || (l = k.ng.value, l = Ne(2, k.$a.value, null !== l ? l : 2));
                    u = l;
                    if (null === u) {
                        zg(this, "invalid audio codec private data");
                        break t
                    }
                    l = this.yd;
                    q = this.Na;
                    p = k.$a.value;
                    ib = new Pe;
                    (new dg(l, q, 64, p, u)).i(ib);
                    e.s.push(yg(d.name.value, d.url.value, k.V.value, g, d.g, xd(ib)))
                }
                this.n.push(e)
            } else if (3 ===
                d.Qa) {
                g = b;
                e = xg(3, "text/mp4", e, d.language.value, !1);
                for (f = 0; f < d.sa.length; f++) e.s.push(yg(d.name.value, d.url.value, d.sa[f].V.value || 0, g, d.g, null));
                this.n.push(e)
            }
        }
    };
    var zg = function(a, b) {
        y(a.a, b);
        K(a.host, 0)
    };
    h = wg.prototype;
    h.Ba = function(a) {
        if (a) {
            var b = (new DOMParser).parseFromString(a, "text/xml"),
                b = new ng(b.firstChild);
            this.ze(b);
            wg.p.Ba.call(this, a)
        } else K(this.host, 3, Cd(this.Kb))
    };
    h.Ed = function() {
        return ["playready"]
    };
    h.updateLicenseRequestInfo = function(a) {
        a.headers = {};
        a.headers["content-type"] = "text/xml;charset=utf-8";
        a.url = this.yd.url
    };
    h.Ie = function(a) {
        a = this.n[a];
        return a.s[a.C].od.data
    };
    h.updateSegmentRequestInfo = function(a, b) {
        var c = this.n[a],
            d = c.index,
            c = c.s[c.C],
            e = c.url,
            e = e.replace("{bitrate}", c.V.toString()),
            e = e.replace("{start time}", c.g[d].Za.toString());
        b.url = this.uri.resolve(new E(e)).toString().toString()
    };
    h.Ob = function(a, b, c) {
        var d = this.n[a],
            e = this.va(a);
        if (d.ca) d.ca = !1, je(c, b, {
            time: e.time,
            duration: 0
        }, 0, !1);
        else {
            if (this.Q) {
                a = this.n[a];
                var f = a.s[a.C].g;
                if (!(a.index + 1 < f.length)) {
                    var g;
                    g = this.Na;
                    var k = cf(b, 1970628964, Ve, !0);
                    g = k ? k.$d(g) : null;
                    if (null === g) z(this.a, "no new segments");
                    else
                        for (1E4 < f.length && a.index >= g.length && (f.splice(0, g.length), a.index -= g.length), f = f.concat(g), g = 0; g < a.s.length; g++) a.s[g].g = f
                }
            }
            f = d.index;
            a = d.s[d.C];
            g = a.g;
            if (3 === d.type) b = (b = cf(b, 1835295092)) ? U(b) : null;
            else {
                f = parseInt(g[f].Za.toString(),
                    10);
                g = ff(b);
                var k = new Pe(b.byteLength + 1024),
                    l = null;
                for (b = 0; 0 < g.length;) {
                    var q = g.shift();
                    switch (q.getName()) {
                        case 1836019558:
                            l = cf(U(q), 1970628964, Ye, !0);
                            (new Nf(q, f)).i(k);
                            break;
                        case 1835295092:
                            var p = null;
                            l && (p = l.ee ? l.ee : new Uint8Array([]));
                            b = p ? p.length : 0;
                            (new Af(p ? [p, U(q)] : [U(q)])).i(k);
                            break;
                        default:
                            q.i(k)
                    }
                }
                f = xd(k);
                df(f, b);
                b = f
            }
            null === b ? (y(this.a, "no media data"), K(this.host, 1)) : (je(c, b, e, e.time + a.B, d.K), d.K = !1)
        }
    };
    r("cast.player.api.CreateDashStreamingProtocol", function(a) {
        return new W(a)
    });
    r("cast.player.api.CreateHlsStreamingProtocol", function(a, b) {
        return new Z(a, b)
    });
    r("cast.player.api.CreateSmoothStreamingProtocol", function(a) {
        return new wg(a)
    });
    var Bg = function(a) {
            this.Pf = a;
            this.Te = this.Nb = this.mode = this.nd = 0;
            this.Ue = new Ag(this);
            this.Re = new Ag(this);
            this.Qb = [];
            this.reset()
        },
        Cg = function() {
            this.Fb = 0
        };
    Cg.prototype.set = function(a) {
        this.Fb = a
    };
    Cg.prototype.get = function() {
        return this.Fb
    };
    var Dg = function() {
        this.ye = this.wf = this.k = 0
    };
    Dg.prototype.clear = function() {
        this.k = 0
    };
    Dg.prototype.update = function() {
        this.k = 2 === this.k ? 1 : 0
    };
    Dg.prototype.matches = function(a, b) {
        return 0 !== this.k && a === this.wf && b === this.ye
    };
    var Eg = function() {
        this.timestamp = this.Sa = 0;
        this.cd = !1
    };
    Eg.prototype.reset = function() {
        this.timestamp = this.Sa = 0;
        this.cd = !1
    };
    var Fg = function(a) {
            this.Ca = [];
            for (var b = 0; 15 >= b; b++) {
                this.Ca[b] = [];
                for (var c = 0; 32 >= c; c++) this.Ca[b][c] = new Eg
            }
            this.v = this.ja = this.P = 0;
            this.style = new Cg;
            this.I = a;
            this.Qc = 0
        },
        Hg = function(a) {
            for (var b = "", c = a.I.Nb, d = c, e = 1; 15 >= e; ++e) {
                for (var f = "", g = !1, k = 1; 32 >= k; ++k) {
                    var l = a.Ca[e][k];
                    if (0 !== l.Sa) {
                        var q = String.fromCharCode(l.Sa);
                        " " !== q && (g = !0);
                        var f = f + q,
                            p = l.timestamp;
                        p < c && (c = p);
                        p > d && (d = p);
                        3 === a.style.Fb ? (!l.cd && " " === q && g && 32 > k && Gg(a.I.Pf, c, c, b ? b + "\n" + f : f), l.cd = !0) : l.reset()
                    }
                }
                f && (b = b ? b + "\n" + f : f)
            }
            b && Gg(a.I.Pf,
                c, d, b)
        };
    Fg.prototype.reset = function(a) {
        for (var b = 0; 15 >= b; b++)
            for (var c = 0; 32 >= c; c++) this.Ca[b][c].reset();
        this.Qc = a;
        this.v = 0;
        this.ja = this.P = 1
    };
    var Ig = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
        Jg = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
        Kg = function(a) {
            return a.Ca[a.P][a.ja]
        },
        Lg = function(a, b, c) {
            2 <= b && 1 < a.ja && (--a.ja, Kg(a).Sa = 0);
            var d = Kg(a);
            d.timestamp = a.I.Nb;
            t: {
                switch (b) {
                    case 0:
                        b = Ig[(c & 127) - 32];
                        break t;
                    case 1:
                        b = Jg[c & 15];
                        break t
                }
                b = 0
            }
            d.Sa = b;
            32 > a.ja && a.ja++
        },
        Mg = function(a, b, c, d) {
            for (var e = 0; e < d; e++)
                for (var f = 0; 32 >= f; f++) {
                    var g = a.Ca[b + e][f],
                        k = a.Ca[c + e][f];
                    g.Sa = k.Sa;
                    g.timestamp = k.timestamp;
                    g.cd = k.cd
                }
        },
        Ng = function(a, b, c) {
            for (var d = 0; d < c; d++)
                for (var e = 0; 32 >= e; e++) a.Ca[b + d][e].reset()
        },
        Og = function(a) {
            a.P = 0 < a.v ? a.v : 1;
            a.ja = 1;
            Ng(a, 0, 15)
        },
        Pg = function(a) {
            this.I = a;
            this.te = 0;
            this.style = new Cg;
            this.Je = new Fg(a);
            this.Ke = new Fg(a);
            this.H = new Fg(a);
            this.Ea =
                this.Je;
            this.oc = this.Ke;
            this.u = this.Ea
        };
    Pg.prototype.reset = function(a, b) {
        this.te = b;
        this.style.set(2);
        this.Ea = this.Je;
        this.oc = this.Ke;
        this.u = this.Ea;
        var c = (a << 2) + (b << 1) + 0;
        this.Je.reset(c);
        this.Ke.reset(c);
        this.H.reset((a << 2) + (b << 1) + 1)
    };
    var Qg = function(a, b) {
            var c = a.Ea;
            switch (a.style.get()) {
                case 4:
                    if (0 < c.v) break;
                case 1:
                case 2:
                    Hg(c), Og(a.Ea), Og(a.oc), c.P = 15, c.v = b
            }
            a.style.set(3);
            a.u = c;
            a.u.style = a.style;
            a.I.mode = 1 << c.Qc;
            c.ja = 1;
            c.v !== b && (c.v > b ? (Hg(c), Ng(c, c.P - c.v, b)) : c.P < b && (b = c.v), c.v = b)
        },
        Rg = function(a) {
            a.style.set(1);
            a.u = a.oc;
            a.u.v = 0;
            a.u.style = a.style;
            a.I.mode = 1 << a.u.Qc
        },
        Sg = function(a) {
            a.style.set(4);
            a.u = a.H;
            a.u.style = a.style;
            a.I.mode = 1 << a.u.Qc
        },
        Ag = function(a) {
            this.I = a;
            this.Jb = new Dg;
            this.xe = 0;
            this.Ad = new Pg(a);
            this.uf = new Pg(a);
            this.we =
                this.Ad
        };
    Ag.prototype.reset = function(a) {
        this.xe = a;
        this.Jb.clear();
        this.we = this.Ad;
        this.Ad.reset(a, 0);
        this.uf.reset(a, 1)
    };
    var Ug = function(a, b, c) {
        a.Jb.update();
        b = Tg(b, c, a.Jb);
        switch (b.result) {
            case 0:
                return;
            case 1:
            case 2:
                return
        }
        var d = b.Bd;
        c = b.Cd;
        if (32 <= d || !d) a.I.mode & a.I.nd && (b = d, b & 128 && (b = 127), c & 128 && (c = 127), a = a.we.u, b & 96 && Lg(a, 0, b), c & 96 && Lg(a, 0, c));
        else if (d & 16) t: if (!a.Jb.matches(d, c) && (b = a.Jb, b.wf = d, b.ye = c, b.k = 2, b = d & 8 ? a.uf : a.Ad, a.we = b, a.I.mode = 1 << (a.xe << 2) + (b.te << 1) + (4 === b.style.Fb ? 1 : 0), (a.I.mode | 1 << (a.xe << 2) + (b.te << 1) + (4 !== b.style.Fb ? 1 : 0)) & a.I.nd))
            if (c & 64) {
                a = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(d & 7) << 1 | c >> 5 & 1];
                c = c & 16 ? 4 * ((c & 14) >> 1) : 0;
                d = b.u;
                switch (b.style.get()) {
                    case 4:
                        a = d.P;
                        break;
                    case 3:
                        if (a !== d.P) {
                            if (a < d.v && (a = d.v, a === d.P)) break;
                            var e = 1 + d.P - d.v,
                                f = 1 + a - d.v;
                            Mg(d, f, e, d.v);
                            b = e;
                            var g = d.v;
                            f < e ? (e = f + g - e, 0 < e && (b += e, g -= e)) : (e = e + g - f, 0 < e && (g -= e));
                            Ng(d, b, g)
                        }
                }
                d.P = a;
                d.ja = c + 1
            } else switch (d & 7) {
                case 1:
                    switch (c & 112) {
                        case 32:
                            Lg(b.u, 0, 32);
                            break t;
                        case 48:
                            57 === c ? (b = b.u, Kg(b).Sa = 0, 32 > b.ja && b.ja++) : Lg(b.u, 1, c & 15);
                            break t
                    }
                    break;
                case 2:
                    if (c & 32) {
                        Lg(b.u, 2, c & 31);
                        break
                    }
                    break;
                case 3:
                    if (c & 32) {
                        Lg(b.u, 3, c & 31);
                        break
                    }
                    break;
                case 4:
                case 5:
                    if (32 <=
                        c && 47 >= c) {
                        switch (c) {
                            case 32:
                                Rg(b);
                                break;
                            case 33:
                                b = b.u;
                                1 < b.Dd && (--b.Dd, Kg(b).Sa = 0);
                                break;
                            case 36:
                                b = b.u;
                                a = Kg(b);
                                for (c = 0; 15 >= c; c++)
                                    for (d = 0; 32 >= d; d++)
                                        if (b.Ca[c][d] === a) {
                                            for (; 32 >= d; d++) b.Ca[c][d].reset();
                                            break
                                        }
                                break;
                            case 37:
                                Qg(b, 2);
                                break;
                            case 38:
                                Qg(b, 3);
                                break;
                            case 39:
                                Qg(b, 4);
                                break;
                            case 40:
                                Lg(b.u, 0, 32);
                                break;
                            case 41:
                                b.style.set(2);
                                b.u = b.Ea;
                                b.u.v = 0;
                                b.u.style = b.style;
                                b.I.mode = 1 << b.u.Qc;
                                break;
                            case 42:
                                a = b.H;
                                a.v = 15;
                                a.style.set(4);
                                Og(a);
                                Sg(b);
                                break;
                            case 43:
                                Sg(b);
                                break;
                            case 44:
                                a = b.Ea;
                                switch (b.style.get()) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        Hg(a)
                                }
                                Ng(a,
                                    0, 15);
                                break;
                            case 45:
                                i: {
                                    a = b.u;
                                    switch (b.style.get()) {
                                        default:
                                            case 2:
                                            case 1:
                                            break i;
                                        case 4:
                                                if (15 > a.P) {
                                                ++a.P;
                                                a.ja = 1;
                                                break i
                                            }
                                        case 3:
                                    }
                                    2 > a.v && (a.v = 2, a.P < a.v && (a.P = a.v));
                                    b = a.P - a.v + 1;
                                    Hg(a);
                                    Mg(a, b, b + 1, a.v - 1);
                                    Ng(a, a.P, 1)
                                }
                                break;
                            case 46:
                                Ng(b.oc, 0, 15);
                                break;
                            case 47:
                                Hg(b.Ea), a = b.oc, b.oc = b.Ea, b.Ea = a, Rg(b)
                        }
                        break
                    }
                    break;
                case 7:
                    switch (c) {
                        case 33:
                        case 34:
                        case 35:
                            b = b.u, 32 < (b.Dd += c & 3) && (b.Dd = 32)
                    }
            }
    };
    Bg.prototype.clear = function() {
        this.Te = this.Nb = this.mode = 0;
        this.Qb = [];
        this.reset()
    };
    Bg.prototype.reset = function() {
        this.mode = 0;
        this.Ue.reset(0);
        this.Re.reset(1)
    };
    var Vg = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139,
            12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255
        ],
        Tg = function(a, b, c) {
            if (255 === a && 255 === b || !a && !b) return {
                Bd: a,
                Cd: b,
                result: 0
            };
            a = Vg[a];
            b = Vg[b];
            if (a & 128) {
                if (!(b & 128) && 0 !== c.k && c.ye === b) return {
                    Bd: a,
                    Cd: b,
                    result: 1
                }
            } else if (b & 128 && 1 <= a && 31 >= a) return {
                Bd: a,
                Cd: b,
                result: 2
            };
            return {
                Bd: a,
                Cd: b,
                result: 3
            }
        },
        Wg = function(a, b, c) {
            255 === b && 255 === c || !b && !c ? (45 === ++a.Te && a.reset(), a.Ue.Jb.clear(), a.Re.Jb.clear()) : (a.Te = 0, Ug(a.Ue, b, c))
        },
        Xg = function(a) {
            a.Qb.sort(function(a, b) {
                var c = a.time - b.time;
                return 0 === c ? a.Qf - b.Qf : c
            });
            for (var b = 0; b < a.Qb.length; b++) {
                var c = a.Qb[b];
                a.Nb = c.time;
                0 === c.type ? Wg(a, c.Nf, c.Of) : 1 === c.type && a.nd & 496 && Ug(a.Re, c.Nf, c.Of)
            }
            a.Qb.length =
                0
        };
    var Zg = function(a) {
        Fd.call(this);
        this.Uc = a;
        this.Ga = 0;
        this.ta = new Uint8Array(1024)
    };
    s(Zg, Fd);
    Zg.prototype.init = function(a) {
        Zg.p.init.call(this, a);
        this.Ga = 0
    };
    Zg.prototype.Hf = function(a, b) {
        for (var c = 0;;) {
            var d;
            t: {
                d = a;
                for (var e = b, e = e - 3; d <= e;) {
                    if (0 === this.f[d] && 0 === this.f[d + 1]) {
                        if (0 === this.f[d + 2] && 1 === this.f[d + 3]) {
                            d += 4;
                            break t
                        }
                        if (1 === this.f[d + 2]) {
                            d += 3;
                            break t
                        }
                    }
                    d++
                }
                d = -1
            }
            e = 0 <= d;
            if (0 < this.Ga || 6 === c) {
                var c = e ? d - 1 : b,
                    f = c - a + 1;
                this.Ga + f > this.ta.length && $g(this);
                this.ta.set(this.f.subarray(a, c), this.Ga);
                this.Ga += f
            }
            if (!e) break;
            0 < this.Ga && $g(this);
            a = d;
            c = this.f[a++] & 31
        }
    };
    var $g = function(a) {
        for (var b, c = b = 0, d = 0; c < a.Ga;) 2 === b && 3 === a.ta[c] ? b = 0 : (0 === a.ta[c] ? b++ : b = 0, a.ta[d] = a.ta[c], d++), c++;
        b = c - d;
        for (c = 0; c + b < a.Ga;) {
            for (var e = 0; 255 === a.ta[c];) e += 255, c++;
            e += a.ta[c++];
            if (45 < e) break;
            for (d = 0; 255 === a.ta[c];) d += 255, c++;
            d += a.ta[c++];
            if (4 === e) {
                var e = a.Uc.I,
                    f = a.Sc,
                    g = new qd(a.ta.subarray(c, c + d));
                if (181 === rd(g) && 49 === sd(g) && 1195456820 === L(g) && 3 === rd(g)) {
                    var k = rd(g);
                    if (0 !== (k & 64)) {
                        k &= 31;
                        vd(g, 1);
                        for (var l = 0; l < k; l++) {
                            var q = rd(g),
                                p = (q & 4) >> 2,
                                u = rd(g),
                                ib = rd(g);
                            p && e.Qb.push({
                                time: f,
                                type: q &
                                    3,
                                Nf: u,
                                Of: ib,
                                Qf: e.Qb.length
                            })
                        }
                    }
                }
            }
            c += d
        }
        a.Ga = 0
    };
    var ah = function(a, b) {
        ce.call(this, a, b, "webvtt");
        this.a = w("cast.player.ts608.InbandCaptionsManager");
        this.I = new Bg(this);
        this.I.nd = 1;
        this.Eb = new Zg(this);
        this.M = 0;
        this.nc = null;
        this.mc = [];
        this.ac = this.ce.bind(this);
        this.ba = null;
        this.fa = new Nc
    };
    s(ah, ce);
    ah.prototype.t = function() {
        this.reset();
        ah.p.t.call(this)
    };
    ah.prototype.ce = function() {
        if (this.Eb.pa()) {
            var a = Pc(this.fa);
            this.M !== a.B && (this.I.clear(), this.nc = null);
            this.M = a.B;
            this.Eb.init(a.data)
        }
        this.Eb.parse();
        a = this.Eb;
        if (a.r >= a.f.length) {
            Xg(this.I);
            if (0 < this.mc.length) {
                for (ee(this); 0 < this.mc.length;) a = this.mc.pop(), a = new VTTCue(a.start, a.end, a.text), a.position = 20, a.align = "start", this.addCue(a);
                this.mc.length = 0
            }
            this.Eb.init(null)
        }
        this.fa.pa() && this.Eb.pa() ? this.ba = null : this.ba = setTimeout(this.ac, 20)
    };
    var Gg = function(a, b, c, d) {
        null !== a.nc && b < a.nc && (b = a.nc);.1 > c - b && (c = b + .1);
        a.nc = c;
        a.mc.push({
            start: b + a.M,
            end: c + a.M,
            text: d
        })
    };
    ah.prototype.Id = function(a, b) {
        1 < this.fa.na() ? z(this.a, "Dropped segment") : (this.fa.S.push({
            data: a,
            B: b
        }), A(this.a, "Pending " + this.fa.na()), null === this.ba && (this.ba = setTimeout(this.ac, 20)))
    };
    ah.prototype.reset = function() {
        ah.p.reset.call(this);
        this.M = 0;
        this.nc = null;
        this.mc.length = 0;
        this.Eb.init(null);
        this.I.clear();
        this.fa.clear();
        null !== this.ba && (clearTimeout(this.ba), this.ba = null)
    };
    var $ = function(a) {
        A(this.a, "Version: 1.0.0.2");
        this.c = a;
        this.o = null;
        this.Pa = 0;
        this.Bb = this.me = this.Gb = !1;
        this.rd = !0;
        this.mb = this.T = this.q = null;
        this.ne = !1;
        this.Jc = null;
        this.ac = this.ce.bind(this)
    };
    r("cast.player.api.Player", $);
    h = $.prototype;
    h.a = w("cast.player.api.Player");
    h.zc = function() {
        bh(this);
        this.Xc()
    };
    h.Id = function(a, b) {
        this.me && this.mb.Id(a, b)
    };
    h.vf = function(a) {
        this.Gb && (a = this.o.va(a).time, Infinity === this.Pa || this.Pa < a) && (this.Pa = a)
    };
    h.Ef = function() {
        var a = this.T,
            b = a.o.Xf();
        0 < b && !a.Z.duration && (a.Z.duration = parseFloat((b - 1E-4).toFixed(4)))
    };
    h.fc = function() {
        return this.Gb ? this.Pa : this.q.currentTime
    };
    var bh = function(a) {
        null !== a.Jc && (clearTimeout(a.Jc), a.Jc = null)
    };
    h = $.prototype;
    h.sf = function() {
        A(this.a, "seeking");
        this.ne ? this.ne = !1 : (this.mb && this.mb.reset(), this.T.reset())
    };
    h.qf = function() {
        y(this.a, "error");
        K(this.c, 1)
    };
    h.rf = function() {
        A(this.a, "loadedmetadata");
        this.Gb && 0 !== this.Pa && (this.ne = !0, this.q.currentTime !== this.Pa && (this.q.currentTime = this.Pa));
        this.Gb = !1
    };
    h.Xc = function() {
        this.rd = !1;
        for (var a = 0, b = 0, c = !0, d = this.fc(), e = this.T.getStreamCount(), f = 0; f < e; f++)
            if (this.o.isStreamEnabled(f) && (b++, this.T.vb(f))) {
                a++;
                var g = this.T.ya(f, d);
                B(this.a, f + ": time=" + d + " buffer=" + g);
                g < this.c.autoResumeDuration && (c = !1);
                var k = f;
                20 <= g || (g < this.c.autoPauseDuration && (g = this.o.getStreamInfo(k), la(g.mimeType, "text/") || (this.rd = !0)), this.T.ke(k) && this.T.le(k));
                if (!this.q) return
            }
        0 !== b && (this.rd ? !this.q.paused && this.q.duration - d > this.c.autoPauseDuration && (A(this.a, "auto pause " +
            d), this.Bb = !0, this.q.pause()) : this.Bb && c && (this.Bb = !1, this.q.paused && (A(this.a, "auto resume " + d), this.q.play())), 0 === a ? (A(this.a, "endOfStream " + d), this.T.endOfStream()) : this.Jc = setTimeout(this.ac, 400))
    };
    h.ce = function() {
        this.Jc = null;
        this.Xc()
    };
    h.load = function(a, b) {
        A(this.a, "load ");
        (this.o = a) ? (this.q = this.c.mediaElement, C(this.q, "error", this.qf, !1, this), C(this.q, "seeking", this.sf, !1, this), C(this.q, "loadedmetadata", this.rf, !1, this), this.Bb = this.q.autoplay, this.Pa = b || 0, this.Gb = !0, this.T = new Jf(this.c, this.o, this), this.T.load()) : y(this.a, "no protocol")
    };
    $.prototype.load = $.prototype.load;
    $.prototype.pb = function() {
        A(this.a, "unload ");
        ch(this);
        this.q && (this.T.dispose(), bh(this), this.Bb = !1, jc(this.q, "error", this.qf, !1, this), jc(this.q, "seeking", this.sf, !1, this), jc(this.q, "loadedmetadata", this.rf, !1, this), this.q = null)
    };
    $.prototype.unload = $.prototype.pb;
    $.prototype.reload = function() {
        this.Gb || (this.Pa = this.q.currentTime);
        this.Gb = !0;
        this.q.paused || (this.Bb = !0);
        bh(this);
        this.T.load()
    };
    $.prototype.reload = $.prototype.reload;
    $.State = {
        UNDERFLOW: 1,
        SEEKABLE: 2
    };
    $.prototype.getState = function(a) {
        var b;
        t: {
            b = -Infinity;
            for (var c = Infinity, d = this.T.getStreamCount(), e = 0; e < d; e++)
                if (this.o.isStreamEnabled(e)) {
                    var f = this.o.qa(e);
                    if (!f) {
                        b = null;
                        break t
                    }
                    f.start > b && (b = f.start);
                    f.end < c && (c = f.end)
                }
            b > c && (b = c);
            b = {
                start: b,
                end: c
            }
        }
        void 0 === a && (a = 1);
        c = {};
        a & 1 && (c.underflow = this.rd || this.Bb);
        a & 2 && (c.seekable = b ? {
            start: b.start,
            end: b.end
        } : null);
        return c
    };
    $.prototype.getState = $.prototype.getState;
    $.prototype.ya = function(a) {
        return this.T.ya(a, this.fc())
    };
    $.prototype.getBufferDuration = $.prototype.ya;
    $.prototype.ob = function() {
        this.T.ob()
    };
    $.prototype.startLicenseRequest = $.prototype.ob;
    var ch = function(a) {
        a.mb && (a.me = !1, a.mb.dispose(), a.mb = null)
    };
    $.prototype.hh = function(a, b, c) {
        b ? a ? "cea608" === b ? (this.me = !0, this.mb = new ah(this, this.c.mediaElement)) : c && (this.mb = new fe(this, this.c, b, c)) : ch(this) : this.T.update()
    };
    $.prototype.enableCaptions = $.prototype.hh;
}).call(window);
