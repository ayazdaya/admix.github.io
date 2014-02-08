var tabMenuOptions = {
    menuId: "tabmenu",
    linkIdToMenuHtml: null,
    preview: true,
    delay: 200,
    speed: .04
};

var tabmenu = new McTabMenu(tabMenuOptions);

/* Tab Menu v2013.3.18. Copyright www.menucool.com */
function McTabMenu(k) {
    var a = "length",
        j = function (e) {
            var b = e.childNodes,
                d = [];
            if (b)
                for (var c = 0, f = b[a]; c < f; c++) b[c].nodeType == 1 && d.push(b[c]);
            return d
        }, m = "nodeName",
        f = "parentNode",
        L = function (b, d) {
            var c = b[a];
            while (c--)
                if (b[c] === d) return true;
            return false
        }, g = "style",
        h = "className",
        p = function (a, c) {
            var b = false;
            if (a[h]) b = L(a[h].split(" "), c);
            return b
        }, l = "display",
        t = function (a, b) {
            if (a[h] == "") a[h] = b;
            else if (!p(a, b)) a[h] += " " + b
        }, e = "replace",
        I = function (a, b) {
            var c = new RegExp("(^| )" + b + "( |$)");
            a[h] = a[h][e](c, "$1");
            a[h] = a[h][e](/ $/, "")
        }, d, r, b, C = document,
        o = "createElement",
        s = "getElementById",
        P = ["$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22"],
        i = function (a, b) {
            return a.getElementsByTagName(b)
        }, J = function () {
            var c = 50,
                b = navigator.userAgent,
                a;
            if ((a = b.indexOf("MSIE ")) != -1) c = parseInt(b.substring(a + 5, b.indexOf(".", a)));
            return c
        }, N = J() < 9,
        F = function () {
            d = {
                a: k.license || "",
                b: k.menuId,
                c: k.preview,
                d: k.delay,
                e: k.speed,
                f: k.linkIdToMenuHtml
            }
        }, D = function (a) {
            return a[e](/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2")
        }, B = function (e, b) {
            for (var d = [], c = 0; c < e[a]; c++) d[d[a]] = String.fromCharCode(e.charCodeAt(c) - (b && b > 7 ? b : 3));
            return d.join("")
        }, G = function (f, d) {
            var e = function (b) {
                for (var d = b.substr(0, b[a] - 1), f = b.substr(b[a] - 1, 1), e = "", c = 0; c < d[a]; c++) e += d.charCodeAt(c) - f;
                return unescape(e)
            }, b = D(document.domain) + Math.random(),
                c = e(b);
            r = "%66%75%6E%63%74%69%6F%6E%20%71%51%28%73%2C%6B%29%7B%76%61%72%20%72%3D%27%27%3B%66%6F%72%28%76%61%72%20%69%";
            if (c[a] == 39) try {
                b = (new Function("$", "_", B(r))).apply(this, [c, d]);
                r = b
            } catch (g) {}
        }, c = function (a, b) {
            return b ? C[a](b) : C[a]
        }, O = [/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/, /.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/, /.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)+$/],
        n = function (d, e) {
            if (d) {
                d.o = e;
                var c = j(d),
                    b = c[a];
                if (N)
                    while (b--) c[b][g].filter = "alpha(opacity=" + e * 100 + ")";
                else
                    while (b--) c[b][g].opacity = e
            }
        }, u = function (d, e) {
            for (var b = 0; b < d[a]; b++)
                if (p(d[b], "active") && d[b] != e) {
                    var c = i(d[b], "ul")[0];
                    n(c, 0);
                    c[g][l] = "none";
                    I(d[b], "active")
                }
            t(e, "active");
            c = i(e, "ul")[0];
            c[g][l] = "block";
            return c
        }, M = function (d, b) {
            var c = function (c) {
                var b = c.charCodeAt(0).toString();
                return b.substring(b[a] - 1)
            };
            return d + c(b[2]) + b[0] + c(b[1])
        }, q = function (a) {
            if (a[f].id == d.b) t(a, "active");
            else {
                t(a, "subActive");
                q(a[f][f])
            }
        }, A = function (a) {
            this.a = null;
            this.b = null;
            this.c = null;
            this.d(a)
        };
    A.prototype = {
        d: function (a) {
            this.e(a);
            this.f(a);
            this.g(a);
            this.i();
            this.k()
        },
        m: function (b, c) {
            var a = u(b, c);
            this.o(a)
        },
        f: function (a) {
            G(a, d.a)
        },
        e: function (i) {
            i[g].letterSpacing = "-4px";
            for (var e = j(i), b = 0, k = e[a]; b < k; b++) {
                var h = j(e[b]);
                if (h[a])
                    if (h[0][m] != "A") {
                        var f = c(o, "a");
                        e[b].insertBefore(f, e[b].firstChild);
                        var d;
                        while (d = f.nextSibling) {
                            if (d.nodeType == 1 && d[m] == "UL") break;
                            f.appendChild(d)
                        }
                    }
            }
        },
        n: function (b) {
            var a = u(b, this.a);
            this.o(a)
        },
        g: function (m) {
            for (var h = -1, j = -1, k = c("location").href.toLowerCase()[e]("www.", "")[e](/([\-\[\].$()*+?])/g, "\\$1") + "$", l = new RegExp(k, "i"), f, g = i(m, "a"), b = 0; b < g[a]; b++)
                if (g[b].href) {
                    f = g[b].href[e]("www.", "").match(l);
                    if (f && f[0][a] >= j) {
                        h = b;
                        j = f[0][a]
                    }
                }
            if (h == -1) {
                k = c("location").href.toLowerCase()[e]("www.", "")[e](/([\-\[\].$()*+])/g, "\\$1")[e](/([?&#])([^?&#]+)/g, "($1$2)?")[e](/\(\?/g, "(\\?");
                l = new RegExp(k, "i");
                for (b = 0; b < g[a]; b++)
                    if (g[b].href) {
                        f = g[b].href[e]("www.", "").match(l);
                        if (f && f[0][a] > j) {
                            h = b;
                            j = f[0][a]
                        }
                    }
            }
            if (h == -1) h = 0;
            (new Function("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", function (d) {
                for (var b = [], c = 0, e = d[a]; c < e; c++) b[b[a]] = String.fromCharCode(d.charCodeAt(c) - 4);
                return b.join("")
            }("n,f2tevirxRshi-?zev$rAQexl_g,+yhukvt+-a,-?zev$xA4?mj,r@25-xAm?ipwi$mj,r@259-xAm2ri|xWmfpmrk?ipwi$mj,r@26**m2tevirxRshi2rshiReqi%A+FSH]+-xAm2tevirxRshi?zev$pAi,k,g,+kvthpu+---0qAe2e\u0080\u0080+9+0rA/q2glevEx,4-0sA,k,g,+kvthpu+--2vitpegi,h_r16a0l_r16a--2wtpmx,++-?mj,%p\u0080\u0080p2wyfwxvmrk,406-AA+ps+\u0080\u0080e2eAAj,r/+g+0s--\u0081ipwi$mj,x-x2tevirxRshi2mrwivxFijsvi,k,g,+jylh{l[l{Uvkl+-0g,+W|yjohzl'[hi'Tlu|'Spjluzl'Yltpukly+--0x-?vixyvr$xlmw?"))).apply(this, [d, g[h], B, O, D, M, c, P, m, q]).p = m
        },
        i: function () {
            for (var e = j(this.p), f = 0; f < e[a]; f++) {
                if (i(e[f], "ul")[a]) {
                    var k = i(e[f], "ul")[0];
                    if (d.c) i(e[f], "ul")[0].o = 1
                } else {
                    k = c(o, "ul");
                    k.innerHTML = "<li><a>&nbsp;</a></li>";
                    e[f].appendChild(k)
                } if (f == 0) k[g][l] = p(e[0], "active") ? "block" : "none";
                if (d.c) {
                    if (p(e[f], "active")) {
                        this.a = e[f];
                        n(k, 1)
                    } else n(k, 0);
                    e[f].onmouseover = function () {
                        b.l(e, this)
                    };
                    e[f].onmouseout = function () {
                        b.j(e)
                    }
                }
            }
            var m = c(o, "li");
            m[h] = "dummy";
            m.innerHTML = "<a>&nbsp;</a>";
            this.p.appendChild(m)
        },
        l: function (a, c) {
            clearTimeout(b.b);
            this.b = setTimeout(function () {
                b.m(a, c)
            }, d.d)
        },
        j: function (a) {
            clearTimeout(b.b);
            this.b = setTimeout(function () {
                b.n(a)
            }, d.d + 50)
        },
        k: function () {
            for (var e = j(this.p), d = 0, h = e[a]; d < h; d++) {
                var f = i(e[d], "ul");
                if (f[a])
                    for (var c = j(f[0]), b = 0; b < c[a]; b++)
                        if (i(c[b], "ul")[a]) {
                            c[b].onmouseover = function () {
                                i(this, "ul")[0][g][l] = "block"
                            };
                            c[b].onmouseout = function () {
                                i(this, "ul")[0][g][l] = "none"
                            }
                        }
            }
        },
        o: function (a) {
            clearTimeout(b.c);
            if (a.o < 1) {
                n(a, a.o + d.e);
                this.c = setTimeout(function () {
                    b.o(a)
                }, 16)
            } else delete this.c
        }
    };
    var E = function (b) {
        var a;
        if (window.XMLHttpRequest) a = new XMLHttpRequest;
        else a = new ActiveXObject("Microsoft.XMLHTTP");
        a.onreadystatechange = function () {
            if (a.readyState == 4 && a.status == 200) {
                var d = a.responseText,
                    i = /^[\s\S]*<body[^>]*>([\s\S]+)<\/body>[\s\S]*$/i;
                if (i.test(d)) d = d[e](i, "$1");
                d = d[e](/^\s+|\s+$/g, "");
                var h = c(o, "div");
                h[g].padding = "0";
                h[g].margin = "0";
                b[f].insertBefore(h, b);
                h.innerHTML = d;
                b[g][l] = "none";
                x()
            }
        };
        a.open("GET", b.href, true);
        a.send()
    }, w = function () {
            if (d.f) {
                var a = c(s, d.f);
                if (a) E(a);
                else alert('Cannot find the anchor (id="' + d.f + '")')
            } else x()
        }, x = function () {
            var a = c(s, d.b);
            if (a) b = new A(a)
        }, K = function (e) {
            var b = false;

            function a() {
                if (b) return;
                b = true;
                setTimeout(e, 4)
            }
            if (c("addEventListener")) document.addEventListener("DOMContentLoaded", a, false);
            else if (c("attachEvent")) {
                try {
                    var f = window.frameElement != null
                } catch (g) {}
                if (c("documentElement").doScroll && !f) {
                    function d() {
                        if (b) return;
                        try {
                            c("documentElement").doScroll("left");
                            a()
                        } catch (e) {
                            setTimeout(d, 10)
                        }
                    }
                    d()
                }
                document.attachEvent("onreadystatechange", function () {
                    c("readyState") === "complete" && a()
                })
            }
            if (window.addEventListener) window.addEventListener("load", a, false);
            else window.attachEvent && window.attachEvent("onload", a)
        };
    F();
    K(w);
    // var y = function (a) {
    //     return a[f].id == d.b ? a : a[f][f][f] ? y(a[f][f]) : null
    // }, v = function (a) {
    //         if (b && b.p) {
    //             var d = a[m] == "A",
    //                 c;
    //             if (a[m] == "LI") c = a;
    //             else if (d)
    //                 if (a[f][m] == "LI") c = a[f];
    //             if (c) b.a = y(c);
    //             if (!c || !b.a) {
    //                 alert("Improper link ID");
    //                 return
    //             }
    //             clearTimeout(b.b);
    //             b.m(j(b.p), b.a);
    //             q(c)
    //         } else setTimeout(function () {
    //             v(a)
    //         }, 4)
    //     }, H = 0,
    //     z = function (a) {
    //         var b = c(s, a);
    //         if (b) v(b);
    //         else ++H < 50 && setTimeout(function () {
    //             z(a)
    //         }, 90)
    //     };
    // return {
    //     init: w,
    //     select: function (li_id) {
    //         z(li_id)
    //     }
    // }
}
