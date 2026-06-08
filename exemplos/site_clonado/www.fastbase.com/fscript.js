var mg_found, g_sid = null;
if (mg_found == '$mg_found') {
    function mg_mg_found_init(f, m, a, b) {
        var k = this || self,
            l = function(a, b) {
                a = a.split(".");
                var c = k;
                a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
                for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
            };
        var n = function(a, b) {
                for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
            },
            p = function(a) {
                for (var b in a)
                    if (a.hasOwnProperty(b)) return !0;
                return !1
            };
        var q = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        var r = window,
            u = document,
            v = function(a, b) {
                u.addEventListener ? u.addEventListener(a, b, !1) : u.attachEvent && u.attachEvent("on" + a, b)
            };
        var w = {},
            x = function() {
                w.TAGGING = w.TAGGING || [];
                w.TAGGING[1] = !0
            };
        var y = /:[0-9]+$/,
            A = function(a, b) {
                b && (b = String(b).toLowerCase());
                if ("protocol" === b || "port" === b) a.protocol = z(a.protocol) || z(r.location.protocol);
                "port" === b ? a.port = String(Number(a.hostname ? a.port : r.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || r.location.hostname).replace(y, "").toLowerCase());
                var c = z(a.protocol);
                b && (b = String(b).toLowerCase());
                switch (b) {
                    case "url_no_magic":
                        b = "";
                        a && a.href && (b = a.href.indexOf("#"), b = 0 > b ? a.href : a.href.substr(0, b));
                        a = b;
                        break;
                    case "protocol":
                        a = c;
                        break;
                    case "host":
                        a = a.hostname.replace(y, "").toLowerCase();
                        break;
                    case "port":
                        a = String(Number(a.port) || ("http" == c ? 80 : "https" == c ? 443 : ""));
                        break;
                    case "path":
                        a.pathname || a.hostname || x();
                        a = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                        a = a.split("/");
                        a: if (b = a[a.length - 1], c = [], Array.prototype.indexOf) b = c.indexOf(b), b = "number" == typeof b ? b : -1;
                            else {
                                for (var d = 0; d < c.length; d++)
                                    if (c[d] === b) {
                                        b = d;
                                        break a
                                    }
                                b = -1
                            }
                        0 <= b && (a[a.length - 1] = "");
                        a = a.join("/");
                        break;
                    case "query":
                        a = a.search.replace("?", "");
                        break;
                    case "extension":
                        a = a.pathname.split(".");
                        a = 1 < a.length ? a[a.length - 1] : "";
                        a = a.split("/")[0];
                        break;
                    case "magic":
                        a = a.hash.replace("#", "");
                        break;
                    default:
                        a = a && a.href
                }
                return a
            },
            z = function(a) {
                return a ? a.replace(":", "").toLowerCase() : ""
            },
            B = function(a) {
                var b = u.createElement("a");
                a && (b.href = a);
                var c = b.pathname;
                "/" !== c[0] && (a || x(), c = "/" + c);
                a = b.hostname.replace(y, "");
                return {
                    href: b.href,
                    protocol: b.protocol,
                    host: b.host,
                    hostname: a,
                    pathname: c,
                    search: b.search,
                    hash: b.hash,
                    port: b.port
                }
            };

        function C() {
            for (var a = D, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
            return b
        }

        function E() {
            var a = "abcdefghijklmnopqrstuvwxyz";
            a += a.toLowerCase() + "9876543210-_";
            return a + "."
        }
        var D, F, G = function(a) {
                D = D || E();
                F = F || C();
                for (var b = [], c = 0; c < a.length; c += 3) {
                    var d = c + 1 < a.length,
                        e = c + 2 < a.length,
                        g = a.charCodeAt(c),
                        f = d ? a.charCodeAt(c + 1) : 0,
                        h = e ? a.charCodeAt(c + 2) : 0,
                        m = g >> 2;
                    g = (g & 3) << 4 | f >> 4;
                    f = (f & 15) << 2 | h >> 6;
                    h &= 63;
                    e || (h = 64, d || (f = 64));
                    b.push(D[m], D[g], D[f], D[h])
                }
                return b.join("")
            },
            H = function(a) {
                function b(m) {
                    for (; d < a.length;) {
                        var t = a.charAt(d++),
                            L = F[t];
                        if (null != L) return L;
                        if (!/^[\s\xa0]*$/.test(t)) throw Error("Unknown base64 encoding at char: " + t);
                    }
                    return m
                }
                D = D || E();
                F = F || C();
                for (var c = "", d = 0;;) {
                    var e = b(-1),
                        g = b(0),
                        f = b(64),
                        h = b(64);
                    if (64 === h && -1 === e) return c;
                    c += String.fromCharCode(e << 2 | g >> 4);
                    64 != f && (c += String.fromCharCode(g << 4 & 240 | f >> 2), 64 != h && (c += String.fromCharCode(f << 6 & 192 | h)))
                }
            };
        var I;

        function J(a, b) {
            if (!a || b === u.location.hostname) return !1;
            for (var c = 0; c < a.length; c++)
                if (a[c] instanceof RegExp) {
                    if (a[c].test(b)) return !0
                } else if (0 <= b.indexOf(a[c])) return !0;
            return !1
        }
        var O = function() {
                var a = K,
                    b = M,
                    c = N(),
                    d = function(f) {
                        a(f.target || f.srcElement || {})
                    },
                    e = function(f) {
                        b(f.target || f.srcElement || {})
                    };
                if (!c.init) {
                    v("mousedown", d);
                    v("keyup", d);
                    v("submit", e);
                    var g = HTMLFormElement.prototype.submit;
                    HTMLFormElement.prototype.submit = function() {
                        b(this);
                        g.call(this)
                    };
                    c.init = !0
                }
            },
            N = function() {
                var a = {};
                var b = r.magic_tag_data;
                r.magic_tag_data = void 0 === b ? a : b;
                a = r.magic_tag_data;
                b = a.gl;
                b && b.decorators || (b = {
                    decorators: []
                }, a.gl = b);
                return b
            };
        var P = /(.*?)\*(.*?)\*(.*)/,
            Q = /([^?#]+)(\?[^#]*)?(#.*)?/,
            R = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
            T = function(a) {
                var b = [],
                    c;
                for (c in a)
                    if (a.hasOwnProperty(c)) {
                        var d = a[c];
                        void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(G(String(d))))
                    }
                a = b.join("*");
                return ["1", S(a), a].join("*")
            },
            S = function(a, b) {
                a = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
                if (!(b = I)) {
                    b = Array(256);
                    for (var c = 0; 256 > c; c++) {
                        for (var d = c, e = 0; 8 > e; e++) d = d & 1 ? d >>> 1 ^ 3988292384 : d >>> 1;
                        b[c] = d
                    }
                }
                I = b;
                b = 4294967295;
                for (c = 0; c < a.length; c++) b = b >>> 8 ^ I[(b ^ a.charCodeAt(c)) & 255];
                return ((b ^ -1) >>> 0).toString(36)
            },
            ba = function(a) {
                return function(b) {
                    var c = B(r.location.href),
                        d = c.search.replace("?", "");
                    a: {
                        var e = d.split("&");
                        for (var g = 0; g < e.length; g++) {
                            var f = e[g].split("=");
                            if ("_gl" === decodeURIComponent(f[0]).replace(/\+/g, " ")) {
                                e = f.slice(1).join("=");
                                break a
                            }
                        }
                        e = void 0
                    }
                    b.query = U(e || "") || {};
                    e = A(c, "magic");
                    g = e.match(R);
                    b.magic = U(g && g[3] || "") || {};
                    a && aa(c, d, e)
                }
            };

        function V(a) {
            var b = R.exec(a);
            if (b) {
                var c = b[2],
                    d = b[4];
                a = b[1];
                d && (a = a + c + d)
            }
            return a
        }
        var aa = function(a, b, c) {
                function d(e, g) {
                    e = V(e);
                    e.length && (e = g + e);
                    return e
                }
                r.history && r.history.replaceState && (R.test(b) || R.test(c)) && (a = A(a, "path"), b = d(b, "?"), c = d(c, "#"), r.history.replaceState({}, void 0, "" + a + b + c))
            },
            U = function(a) {
                var b = void 0 === b ? 3 : b;
                try {
                    if (a) {
                        a: {
                            for (var c = 0; 3 > c; ++c) {
                                var d = P.exec(a);
                                if (d) {
                                    var e = d;
                                    break a
                                }
                                a = decodeURIComponent(a)
                            }
                            e = void 0
                        }
                        if (e && "1" === e[1]) {
                            var g = e[2],
                                f = e[3];
                            a: {
                                for (e = 0; e < b; ++e)
                                    if (g === S(f, e)) {
                                        var h = !0;
                                        break a
                                    }
                                h = !1
                            }
                            if (h) {
                                b = {};
                                var m = f ? f.split("*") : [];
                                for (f = 0; f < m.length; f += 2) b[m[f]] = H(m[f + 1]);
                                return b
                            }
                        }
                    }
                } catch (t) {}
            };

        function W(a, b, c) {
            function d(h) {
                h = V(h);
                var m = h.charAt(h.length - 1);
                h && "&" !== m && (h += "&");
                return h + f
            }
            c = void 0 === c ? !1 : c;
            var e = Q.exec(b);
            if (!e) return "";
            b = e[1];
            var g = e[2] || "";
            e = e[3] || "";
            var f = "_gl=" + a;
            c ? e = "#" + d(e.substring(1)) : g = "?" + d(g.substring(1));
            return "" + b + g + e
        }

        function X(a, b, c) {
            for (var d = {}, e = {}, g = N().decorators, f = 0; f < g.length; ++f) {
                var h = g[f];
                (!c || h.forms) && J(h.domains, b) && (h.magic ? n(e, h.callback()) : n(d, h.callback()))
            }
            p(d) && (b = T(d), c ? Y(b, a) : Z(b, a, !1));
            !c && p(e) && (c = T(e), Z(c, a, !0))
        }

        function Z(a, b, c) {
            b.href && (a = W(a, b.href, void 0 === c ? !1 : c), q.test(a) && (b.href = a))
        }

        function Y(a, b) {
            if (b && b.action) {
                var c = (b.method || "").toLowerCase();
                if ("get" === c) {
                    c = b.childNodes || [];
                    for (var d = !1, e = 0; e < c.length; e++) {
                        var g = c[e];
                        if ("_gl" === g.name) {
                            g.setAttribute("value", a);
                            d = !0;
                            break
                        }
                    }
                    d || (c = u.createElement("input"), c.setAttribute("type", "hidden"), c.setAttribute("name", "_gl"), c.setAttribute("value", a), b.appendChild(c))
                } else "post" === c && (a = W(a, b.action), q.test(a) && (b.action = a))
            }
        }
        var K = function(a) {
                try {
                    a: {
                        for (var b = 100; a && 0 < b;) {
                            if (a.href && a.nodeName.match(/^a(?:rea)?$/i)) {
                                var c = a;
                                break a
                            }
                            a = a.parentNode;
                            b--
                        }
                        c = null
                    }
                    if (c) {
                        var d = c.protocol;
                        "http:" !== d && "https:" !== d || X(c, c.hostname, !1)
                    }
                }
                catch (e) {}
            },
            M = function(a) {
                try {
                    if (a.action) {
                        var b = A(B(a.action), "host");
                        X(a, b, !0)
                    }
                } catch (c) {}
            };
        l("magic_tag_data.glBridge.auto", function(a, b, c, d) {
            O();
            a = {
                callback: a,
                domains: b,
                magic: "magic" === c,
                forms: !!d
            };
            N().decorators.push(a)
        });
        l("magic_tag_data.mg_bridge.decorate", function(a, b, c) {
            c = !!c;
            a = T(a);
            if (b.tagName) {
                if ("a" == b.tagName.toLowerCase()) return Z(a, b, c);
                if ("form" == b.tagName.toLowerCase()) return Y(a, b)
            }
            if ("string" == typeof b) return W(a, b, c)
        });
        l("magic_tag_data.glBridge.generate", T);
        l("magic_tag_data.glBridge.get", function(a, b) {
            var c = ba(!!b);
            b = N();
            b.data || (b.data = {
                query: {},
                magic: {}
            }, c(b.data));
            c = {};
            if (b = b.data) n(c, b.query), a && n(c, b.magic);
            return c
        });
    }
}
var gbl_init_val = {
    g_sid: '',
    gbl_id: '',
    gbl_dt: ''
};
const g_mtd = 'POST';
var mg_lang = 'en-US';
const headers = {
    'Content-Type': 'application/json'
};
const alpha = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const gbl_ls_nm = 'fb_ls_cmn';
var has_ua = false;
var fb_path = 'https://www.fastbase.com';
const api_path = 'https://api.fastbase.com';
var gbl_vst = {
    vst_id: '',
    fp_id: '',
    u_host: '',
    u_agnt: '',
    init_vst: false,
    init_host: false,
    msg: 'success'
};
var gbl_ua = {
    os_nm: '',
    os_ver: '',
    bwr_nm: '',
    bwr_ver: '',
    dvc_typ: '',
    dvc_mdl: '',
    dpr: 0,
    srn_wt: 0,
    srn_ht: 0,
    srn_rt: ''
};

function _fb_script_init(_load_fb_req) {
    try {
        const pre_on_load_evnt = window.onload;
        if (typeof pre_on_load_evnt !== 'function') {
            window.onload = _load_fb_req;
        } else {
            window.onload = function() {
                try {
                    if (pre_on_load_evnt) {
                        pre_on_load_evnt();
                    }
                    _load_fb_req();
                } catch (err) {
                    const _msg = err.message;
                    _pnt_err_log(_msg);
                }
            }
        }
        if (document.readyState === 'complete') {
            _load_fb_req();
        }
    } catch (err) {
        const _msg = err.message;
        _pnt_err_log(_msg);
    }
};
_fb_script_init(_load_fb_req);

function _fb_script_ext(_cls_fb_req) {
    try {
        const pre_un_load_evnt = window.onbeforeunload;
        window.onbeforeunload = function(event) {
            try {
                if (typeof pre_un_load_evnt === 'function') {
                    pre_un_load_evnt(event);
                }
                _cls_fb_req();
            } catch (err) {
                const _msg = err.message;
                _pnt_err_log(_msg);
            }
        }
    } catch (err) {
        const _msg = err.message;
        _pnt_err_log(_msg);
    }
};
_fb_script_ext(_cls_fb_req);
async function _load_fb_req() {
    try {
        g_sid = document.querySelector('script[src$="/fscript.js"]').id;
        gbl_init_val.g_sid = g_sid;
        await _fn_get_fb_dt();
        if (gbl_vst.vst_id) {
            _call_fb_req();
        } else {
            localStorage.removeItem(gbl_ls_nm);
        }
    } catch (err) {
        const _msg = err.message;
        _pnt_err_log(_msg);
    };
}

function _call_fb_req() {
    try {
        if (gbl_init_val.g_sid) {
            const _mg_req_path = fb_path + "/esabtsaf/fb_ws_service.asmx/ftag";
            const _mg_req_data = JSON.stringify({
                init_data: gbl_init_val,
                vst_data: gbl_vst,
                u_origin: origin,
                c_url: window.location.href
            });
            fetch(_mg_req_path, {
                method: g_mtd,
                headers: headers,
                body: _mg_req_data
            }).catch(err => _pnt_err_log(err.message));
        }
    } catch (err) {
        const _msg = err.message;
        _pnt_err_log(_msg);
    };
}
async function _fn_get_fb_dt() {
    try {
        _get_crnt_dt_tm();
        const host = window.location.host;
        const ls_data = localStorage.getItem(gbl_ls_nm);
        const cmn_dt = ls_data && JSON.parse(ls_data);
        if (cmn_dt ? .u_host === host) {
            Object.assign(gbl_vst, cmn_dt);
            localStorage.removeItem(gbl_ls_nm);
            gbl_vst.msg = 'success';
            gbl_vst.init_vst = false;
            gbl_vst.init_host = false;
            _fn_set_ls_data();
        } else {
            _fn_create_fresh_ls_data();
        }
    } catch (err) {
        const _msg = err.message;
        _pnt_err_log(_msg);
    };
}
async function _fn_create_fresh_ls_data() {
    try {
        await _fn_set_fp_info();
        await _fn_get_vst_dt();
        if (gbl_vst.vst_id) {
            /*has_ua = await _fn_set_ua_info();*/
            gbl_vst.u_host = window.location.host;
            gbl_vst.u_agnt = navigator.userAgent || '';
            _fn_set_ls_data();
        }
    } catch (err) {
        const _msg = err.message;
        _pnt_err_log(_msg);
    };
}

function _fn_set_ls_data() {
    try {
        const item = { ...gbl_vst
        };
        localStorage.setItem(gbl_ls_nm, JSON.stringify(item));
    } catch (err) {
        const _msg = err.message;
        _pnt_err_log(_msg);
    };
}
async function _fn_set_ua_info() {
    try {
        if (!has_ua) {
            _fn_ua_info(typeof window ? window : this);
        }
        const {
            os,
            device,
            browser
        } = new UAParser(navigator.userAgent).getResult();
        let {
            name: os_nm,
            version: os_ver
        } = os;
        let {
            type: dvc_typ,
            model: dvc_mdl
        } = device;
        let {
            name: bwr_nm,
            version: bwr_ver
        } = browser;
        if (!dvc_typ) {
            let ua_lcase = navigator.userAgent.toLowerCase();
            if (ua_lcase.includes("mobile")) {
                dvc_typ = 'mobile';
            } else if (ua_lcase.includes("tablet")) {
                dvc_typ = 'tablet';
            } else {
                dvc_typ = 'desktop';
            }
        }
        if (bwr_nm) {
            switch (bwr_nm.toLowerCase()) {
                case 'chrome headless':
                    bwr_nm = 'Chrome';
                    break;
                case 'chrome webview':
                    bwr_nm = 'Chrome';
                    break;
            }
        }
        gbl_ua.os_nm = (os_nm) ? os_nm : '';
        gbl_ua.os_ver = (os_ver) ? os_ver : '';
        gbl_ua.dvc_typ = (dvc_typ) ? dvc_typ : '';
        gbl_ua.dvc_mdl = (dvc_mdl) ? dvc_mdl : '';
        gbl_ua.bwr_nm = (bwr_nm) ? bwr_nm : '';
        gbl_ua.bwr_ver = (bwr_ver) ? bwr_ver : '';
        gbl_ua.dpr = parseFloat(window.devicePixelRatio.toFixed(2));
        gbl_ua.srn_wt = parseInt(window.screen.width);
        gbl_ua.srn_ht = parseInt(window.screen.height);
        const srn_wt_rt = (gbl_ua.srn_wt * gbl_ua.dpr),
            srn_ht_rt = (gbl_ua.srn_ht * gbl_ua.dpr);
        gbl_ua.srn_rt = '' + parseFloat(srn_wt_rt.toFixed(2)) + 'x' + parseFloat(srn_ht_rt.toFixed(2)) + '';
    } catch (err) {
        const _msg = err.message;
        _pnt_err_log(_msg);
    };
    return true;
}
async function _fn_set_fp_info() {
    try {
        if (!gbl_vst.fp_id) {
            gbl_vst.fp_id = await _fn_fp_info();
        }
    } catch (err) {
        const _msg = err.message;
        _pnt_err_log(_msg);
    };
}

function _get_crnt_dt_tm() {
    try {
        const _dt = new Date();
        const _pad = (num, size) => num.toString().padStart(size, '0');
        const [_day, _mo, _yr] = [_pad(_dt.getUTCDate(), 2), _pad(_dt.getUTCMonth() + 1, 2), _dt.getUTCFullYear()];
        const [_hr, _min, _sec, _msec] = [_pad(_dt.getUTCHours(), 2), _pad(_dt.getUTCMinutes(), 2), _pad(_dt.getUTCSeconds(), 2), _pad(_dt.getUTCMilliseconds(), 3)];
        gbl_init_val.gbl_dt = `${_day}/${_mo}/${_yr} ${_hr}:${_min}:${_sec}.${_msec}`;
        gbl_init_val.gbl_id = `${_day}${_mo}${_yr.toString().slice(-2)}${_hr}${_min}${_sec}${_msec}`;
    } catch (err) {
        const _msg = err.message;
        _pnt_err_log(_msg);
    };
}

function _fn_gnrt_no(length) {
    var mg_result = '';
    try {
        for (var mg = 0; mg < length; mg++) {
            mg_result += alpha.charAt(Math.floor(Math.random() * alpha.length));
        };
    } catch (err) {
        var _msg = err.message;
    };
    return mg_result;
}
async function _fn_get_vst_dt() {
    const fid = gbl_vst.fp_id;
    if (fid) {
        try {
            const fl_curl = window.location.href;
            const _mg_response = await fetch(`${api_path}/fb-script?fp=${fid}&url=${fl_curl}`, {
                method: 'GET',
                credentials: 'include'
            });
            if (_mg_response.ok) {
                const mg_dt = await _mg_response.json();
                gbl_vst.vst_id = mg_dt.data.vst_id || '';
                gbl_vst.msg = mg_dt.data.msg;
                gbl_vst.init_vst = mg_dt.data.init_vst;
                gbl_vst.init_host = mg_dt.data.init_host;
            }
        } catch (err) {
            const _msg = err.message;
            _pnt_err_log(_msg);
        };
    }
}

function _pnt_err_log(log) {
    try {
        const fn_name = new Error().stack ? .split('\n')[2] ? .match(/at (\w+)/) ? .[1] || 'anonymous';
        console.log(`log: ${fn_name}, msg:`, log);
    } catch (err) {
        console.log('_pnt_err_log');
    };
}

function _cls_fb_req() {
    //const ls_item = localStorage.getItem(gbl_ls_nm);
}

function _fn_ua_info(s, l) {
    "use strict";

    function i(i) {
        for (var e = {}, o = 0; o < i.length; o++) e[i[o].toUpperCase()] = i[o];
        return e
    }

    function P(i, e) {
        return typeof i === h && -1 !== j(e).indexOf(j(i))
    }

    function b(i, e) {
        if (typeof i === h) return i = i.replace(/^\s\s*/, c), typeof e == m ? i : i.substring(0, 500)
    }

    function w(i, e) {
        for (var o, a, r, n, t, s = 0; s < e.length && !n;) {
            for (var b = e[s], w = e[s + 1], d = o = 0; d < b.length && !n && b[d];)
                if (n = b[d++].exec(i))
                    for (a = 0; a < w.length; a++) t = n[++o], typeof(r = w[a]) === p && 0 < r.length ? 2 === r.length ? typeof r[1] == u ? this[r[0]] = r[1].call(this, t) : this[r[0]] = r[1] : 3 === r.length ? typeof r[1] !== u || r[1].exec && r[1].test ? this[r[0]] = t ? t.replace(r[1], r[2]) : l : this[r[0]] = t ? r[1].call(this, t, r[2]) : l : 4 === r.length && (this[r[0]] = t ? r[3].call(this, t.replace(r[1], r[2])) : l) : this[r] = t || l;
            s += 2
        }
    }

    function e(i, e) {
        for (var o in e)
            if (typeof e[o] === p && 0 < e[o].length) {
                for (var a = 0; a < e[o].length; a++)
                    if (P(e[o][a], i)) return "?" === o ? l : o
            } else if (P(e[o], i)) return "?" === o ? l : o;
        return i
    }

    function d(i, e) {
        if (typeof i === p && (e = i, i = l), !(this instanceof d)) return new d(i, e).getResult();
        var o = typeof s != m && s.navigator ? s.navigator : l,
            a = i || (o && o.userAgent ? o.userAgent : c),
            r = o && o.userAgentData ? o.userAgentData : l,
            n = e ? function(i, e) {
                var o, a = {};
                for (o in i) e[o] && e[o].length % 2 == 0 ? a[o] = e[o].concat(i[o]) : a[o] = i[o];
                return a
            }
            (Q, e) : Q,
            t = o && o.userAgent == a;
        return this.getBrowser = function() {
                var i, e = {};
                return e[v] = l, e[k] = l, w.call(e, a, n.browser), e[R] = typeof(i = e[k]) === h ? i.replace(/[^\d\.]/g, c).split(".")[0] : l, t && o && o.brave && typeof o.brave.isBrave == u && (e[v] = "Brave"), e
            },
            this.getCPU = function() {
                var i = {};
                return i[y] = l, w.call(i, a, n.cpu), i
            },
            this.getDevice = function() {
                var i = {};
                return i[x] = l, i[f] = l, i[g] = l, w.call(i, a, n.device), t && !i[g] && r && r.mobile && (i[g] = _), t && "Macintosh" == i[f] && o && typeof o.standalone != m && o.maxTouchPoints && 2 < o.maxTouchPoints && (i[f] = "iPad", i[g] = T), i
            },
            this.getEngine = function() {
                var i = {};
                return i[v] = l, i[k] = l, w.call(i, a, n.engine), i
            },
            this.getOS = function() {
                var i = {};
                return i[v] = l, i[k] = l, w.call(i, a, n.os), t && !i[v] && r && "Unknown" != r.platform && (i[v] = r.platform.replace(/chrome os/i, $).replace(/macos/i, X)), i
            },
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            },
            this.getUA = function() {
                return a
            }, this.setUA = function(i) {
                return a = typeof i === h && 500 < i.length ? b(i, 500) : i, this
            },
            this.setUA(a), this
    }
    var a, c = "",
        u = "function",
        m = "undefined",
        p = "object",
        h = "string",
        R = "major",
        f = "model",
        v = "name",
        g = "type",
        x = "vendor",
        k = "version",
        y = "architecture",
        o = "console",
        _ = "mobile",
        T = "tablet",
        r = "smarttv",
        n = "wearable",
        t = "embedded",
        S = "Amazon",
        q = "Apple",
        B = "ASUS",
        V = "BlackBerry",
        z = "Browser",
        N = "Chrome",
        A = "Firefox",
        E = "Google",
        D = "Huawei",
        I = "LG",
        L = "Microsoft",
        F = "Motorola",
        U = "Opera",
        C = "Samsung",
        G = "Sharp",
        O = "Sony",
        H = "Xiaomi",
        Z = "Zebra",
        W = "Facebook",
        $ = "Chromium OS",
        X = "Mac OS",
        j = function(i) {
            return i.toLowerCase()
        },
        K = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        },
        Q = {
            browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [k, [v, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [k, [v, "Edge"]],
                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                [v, k],
                [/opios[\/ ]+([\w\.]+)/i],
                [k, [v, U + " Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [k, [v, U]],
                [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                [k, [v, "Baidu"]],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                [v, k],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [k, [v, "UC" + z]],
                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                [k, [v, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [k, [v, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [k, [v, "IE"]],
                [/ya(?:search)?browser\/([\w\.]+)/i],
                [k, [v, "Yandex"]],
                [/slbrowser\/([\w\.]+)/i],
                [k, [v, "Smart Lenovo " + z]],
                [/(avast|avg)\/([\w\.]+)/i],
                [
                    [v, /(.+)/, "$1 Secure " + z], k
                ],
                [/\bfocus\/([\w\.]+)/i],
                [k, [v, A + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [k, [v, U + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [k, [v, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [k, [v, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [k, [v, U + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [k, [v, "MIUI " + z]],
                [/fxios\/([-\w\.]+)/i],
                [k, [v, A]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [
                    [v, "360 " + z]
                ],
                [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                [
                    [v, /(.+)/, "$1 " + z], k
                ],
                [/samsungbrowser\/([\w\.]+)/i],
                [k, [v, C + " Internet"]],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    [v, /_/g, " "], k
                ],
                [/metasr[\/ ]?([\d\.]+)/i],
                [k, [v, "Sogou Explorer"]],
                [/(sogou)mo\w+\/([\d\.]+)/i],
                [
                    [v, "Sogou Mobile"], k
                ],
                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                [v, k],
                [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                [v],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [
                    [v, W], k
                ],
                [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                [v, k],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [k, [v, "GSA"]],
                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                [k, [v, "TikTok"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [k, [v, N + " Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [
                    [v, N + " WebView"], k
                ],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [k, [v, "Android " + z]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [v, k],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [k, [v, "Mobile Safari"]],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [k, v],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [v, [k, e, {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [v, k],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [
                    [v, "Netscape"], k
                ],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [k, [v, A + " Reality"]],
                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                [v, k],
                [/(cobalt)\/([\w\.]+)/i],
                [v, [k, /master.|lts./, ""]]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [
                    [y, "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    [y, j]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    [y, "ia32"]
                ],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [
                    [y, "arm64"]
                ],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [
                    [y, "armhf"]
                ],
                [/windows (ce|mobile); ppc;/i],
                [
                    [y, "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [
                    [y, /ower/, c, j]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    [y, "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                [
                    [y, j]
                ]
            ],
            device: [
                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                [f, [x, C],
                    [g, T]
                ],
                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                [f, [x, C],
                    [g, _]
                ],
                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                [f, [x, q],
                    [g, _]
                ],
                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                [f, [x, q],
                    [g, T]
                ],
                [/(macintosh);/i],
                [f, [x, q]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [f, [x, G],
                    [g, _]
                ],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [f, [x, D],
                    [g, T]
                ],
                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                [f, [x, D],
                    [g, _]
                ],
                [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                [
                    [f, /_/g, " "],
                    [x, H],
                    [g, _]
                ],
                [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                    [f, /_/g, " "],
                    [x, H],
                    [g, T]
                ],
                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                [f, [x, "OPPO"],
                    [g, _]
                ],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [f, [x, "Vivo"],
                    [g, _]
                ],
                [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                [f, [x, "Realme"],
                    [g, _]
                ],
                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                [f, [x, F],
                    [g, _]
                ],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [f, [x, F],
                    [g, T]
                ],
                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                [f, [x, I],
                    [g, T]
                ],
                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                [f, [x, I],
                    [g, _]
                ],
                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                [f, [x, "Lenovo"],
                    [g, T]
                ],
                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                [
                    [f, /_/g, " "],
                    [x, "Nokia"],
                    [g, _]
                ],
                [/(pixel c)\b/i],
                [f, [x, E],
                    [g, T]
                ],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [f, [x, E],
                    [g, _]
                ],
                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                [f, [x, O],
                    [g, _]
                ],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                    [f, "Xperia Tablet"],
                    [x, O],
                    [g, T]
                ],
                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                [f, [x, "OnePlus"],
                    [g, _]
                ],
                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                [f, [x, S],
                    [g, T]
                ],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                    [f, /(.+)/g, "Fire Phone $1"],
                    [x, S],
                    [g, _]
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [f, x, [g, T]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [f, [x, V],
                    [g, _]
                ],
                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                [f, [x, B],
                    [g, T]
                ],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [f, [x, B],
                    [g, _]
                ],
                [/(nexus 9)/i],
                [f, [x, "HTC"],
                    [g, T]
                ],
                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                [x, [f, /_/g, " "],
                    [g, _]
                ],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [f, [x, "Acer"],
                    [g, T]
                ],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [f, [x, "Meizu"],
                    [g, _]
                ],
                [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                [f, [x, "Ulefone"],
                    [g, _]
                ],
                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                [x, f, [g, _]],
                [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                [x, f, [g, T]],
                [/(surface duo)/i],
                [f, [x, L],
                    [g, T]
                ],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [f, [x, "Fairphone"],
                    [g, _]
                ],
                [/(u304aa)/i],
                [f, [x, "AT&T"],
                    [g, _]
                ],
                [/\bsie-(\w*)/i],
                [f, [x, "Siemens"],
                    [g, _]
                ],
                [/\b(rct\w+) b/i],
                [f, [x, "RCA"],
                    [g, T]
                ],
                [/\b(venue[\d ]{2,7}) b/i],
                [f, [x, "Dell"],
                    [g, T]
                ],
                [/\b(q(?:mv|ta)\w+) b/i],
                [f, [x, "Verizon"],
                    [g, T]
                ],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [f, [x, "Barnes & Noble"],
                    [g, T]
                ],
                [/\b(tm\d{3}\w+) b/i],
                [f, [x, "NuVision"],
                    [g, T]
                ],
                [/\b(k88) b/i],
                [f, [x, "ZTE"],
                    [g, T]
                ],
                [/\b(nx\d{3}j) b/i],
                [f, [x, "ZTE"],
                    [g, _]
                ],
                [/\b(gen\d{3}) b.+49h/i],
                [f, [x, "Swiss"],
                    [g, _]
                ],
                [/\b(zur\d{3}) b/i],
                [f, [x, "Swiss"],
                    [g, T]
                ],
                [/\b((zeki)?tb.*\b) b/i],
                [f, [x, "Zeki"],
                    [g, T]
                ],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [
                    [x, "Dragon Touch"], f, [g, T]
                ],
                [/\b(ns-?\w{0,9}) b/i],
                [f, [x, "Insignia"],
                    [g, T]
                ],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [f, [x, "NextBook"],
                    [g, T]
                ],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [
                    [x, "Voice"], f, [g, _]
                ],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [
                    [x, "LvTel"], f, [g, _]
                ],
                [/\b(ph-1) /i],
                [f, [x, "Essential"],
                    [g, _]
                ],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [f, [x, "Envizen"],
                    [g, T]
                ],
                [/\b(trio[-\w\. ]+) b/i],
                [f, [x, "MachSpeed"],
                    [g, T]
                ],
                [/\btu_(1491) b/i],
                [f, [x, "Rotor"],
                    [g, T]
                ],
                [/(shield[\w ]+) b/i],
                [f, [x, "Nvidia"],
                    [g, T]
                ],
                [/(sprint) (\w+)/i],
                [x, f, [g, _]],
                [/(kin\.[onetw]{3})/i],
                [
                    [f, /\./g, " "],
                    [x, L],
                    [g, _]
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [f, [x, Z],
                    [g, T]
                ],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [f, [x, Z],
                    [g, _]
                ],
                [/smart-tv.+(samsung)/i],
                [x, [g, r]],
                [/hbbtv.+maple;(\d+)/i],
                [
                    [f, /^/, "SmartTV"],
                    [x, C],
                    [g, r]
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                    [x, I],
                    [g, r]
                ],
                [/(apple) ?tv/i],
                [x, [f, q + " TV"],
                    [g, r]
                ],
                [/crkey/i],
                [
                    [f, N + "cast"],
                    [x, E],
                    [g, r]
                ],
                [/droid.+aft(\w+)( bui|\))/i],
                [f, [x, S],
                    [g, r]
                ],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [f, [x, G],
                    [g, r]
                ],
                [/(bravia[\w ]+)( bui|\))/i],
                [f, [x, O],
                    [g, r]
                ],
                [/(mitv-\w{5}) bui/i],
                [f, [x, H],
                    [g, r]
                ],
                [/Hbbtv.*(technisat) (.*);/i],
                [x, f, [g, r]],
                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                [
                    [x, b],
                    [f, b],
                    [g, r]
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [
                    [g, r]
                ],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [x, f, [g, o]],
                [/droid.+; (shield) bui/i],
                [f, [x, "Nvidia"],
                    [g, o]
                ],
                [/(playstation [345portablevi]+)/i],
                [f, [x, O],
                    [g, o]
                ],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [f, [x, L],
                    [g, o]
                ],
                [/((pebble))app/i],
                [x, f, [g, n]],
                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                [f, [x, q],
                    [g, n]
                ],
                [/droid.+; (glass) \d/i],
                [f, [x, E],
                    [g, n]
                ],
                [/droid.+; (wt63?0{2,3})\)/i],
                [f, [x, Z],
                    [g, n]
                ],
                [/(quest( 2| pro)?)/i],
                [f, [x, W],
                    [g, n]
                ],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [x, [g, t]],
                [/(aeobc)\b/i],
                [f, [x, S],
                    [g, t]
                ],
                [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                [f, [g, _]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [f, [g, T]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [
                    [g, T]
                ],
                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                [
                    [g, _]
                ],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [f, [x, "Generic"]]
            ],
            engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [k, [v, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [k, [v, "Blink"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                [v, k],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [k, v]
            ],
            os: [
                [/microsoft (windows) (vista|xp)/i],
                [v, k],
                [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                [v, [k, e, K]],
                [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                    [k, e, K],
                    [v, "Windows"]
                ],
                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                [
                    [k, /_/g, "."],
                    [v, "iOS"]
                ],
                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                [
                    [v, X],
                    [k, /_/g, "."]
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [k, v],
                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                [v, k],
                [/\(bb(10);/i],
                [k, [v, V]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [k, [v, "Symbian"]],
                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                [k, [v, A + " OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [k, [v, "webOS"]],
                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                [k, [v, "watchOS"]],
                [/crkey\/([\d\.]+)/i],
                [k, [v, N + "cast"]],
                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                [
                    [v, $], k
                ],
                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                [v, k],
                [/(sunos) ?([\w\.\d]*)/i],
                [
                    [v, "Solaris"], k
                ],
                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                [v, k]
            ]
        },
        M = (d.VERSION = "1.0.37", d.BROWSER = i([v, k, R]), d.CPU = i([y]), d.DEVICE = i([f, x, g, o, _, r, T, n, t]), d.ENGINE = d.OS = i([v, k]), typeof exports != m ? (exports = typeof module != m && module.exports ? module.exports = d : exports).UAParser = d : typeof define === u && define.amd ? define(function() {
            return d
        }) : typeof s != m && (s.UAParser = d), typeof s != m && (s.jQuery || s.Zepto));
    M && !M.ua && (a = new d, M.ua = a.getResult(), M.ua.get = function() {
        return a.getUA()
    }, M.ua.set = function(i) {
        a.setUA(i);
        var e, o = a.getResult();
        for (e in o) M.ua[e] = o[e]
    })
};

function _fn_fp_info() {
    return new Promise((resolve) => {
        (function(name, context, definition) {
            const Fingerprint = definition();
            const fp = new Fingerprint({
                canvas: true,
                ie_activex: true,
                screen_resolution: true
            });
            const fid = fp.get();
            resolve(fid);
        })("Fingerprint", this, function() {
            "use strict";

            var Fingerprint = function(options) {
                var nativeForEach, nativeMap;
                nativeForEach = Array.prototype.forEach;
                nativeMap = Array.prototype.map;
                this.each = function(obj, iterator, context) {
                    if (obj === null) {
                        return;
                    }
                    if (nativeForEach && obj.forEach === nativeForEach) {
                        obj.forEach(iterator, context);
                    } else if (obj.length === +obj.length) {
                        for (var i = 0, l = obj.length; i < l; i++) {
                            if (iterator.call(context, obj[i], i, obj) === {}) return;
                        }
                    } else {
                        for (var key in obj) {
                            if (obj.hasOwnProperty(key)) {
                                if (iterator.call(context, obj[key], key, obj) === {}) return;
                            }
                        }
                    }
                };
                this.map = function(obj, iterator, context) {
                    var results = [];
                    if (obj == null) return results;
                    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
                    this.each(obj, function(value, index, list) {
                        results[results.length] = iterator.call(context, value, index, list);
                    });
                    return results;
                };
                if (typeof options == "object") {
                    this.hasher = options.hasher;
                    this.screen_resolution = options.screen_resolution;
                    this.screen_orientation = options.screen_orientation;
                    this.canvas = options.canvas;
                    this.ie_activex = options.ie_activex;
                } else if (typeof options == "function") {
                    this.hasher = options;
                }
            };
            Fingerprint.prototype = {
                get: function() {
                    var keys = [];
                    keys.push(navigator.userAgent);
                    keys.push(navigator.language);
                    keys.push(screen.colorDepth);
                    if (this.screen_resolution) {
                        var resolution = this.getScreenResolution();
                        if (typeof resolution !== "undefined") {
                            keys.push(this.getScreenResolution().join("x"));
                        }
                    }
                    keys.push(new Date().getTimezoneOffset());
                    keys.push(this.hasSessionStorage());
                    keys.push(this.hasLocalStorage());
                    keys.push(!!window.indexedDB);
                    if (document.body) {
                        keys.push(typeof document.body.addBehavior);
                    } else {
                        keys.push(typeof undefined);
                    }
                    keys.push(typeof window.openDatabase);
                    keys.push(navigator.cpuClass);
                    keys.push(navigator.platform);
                    keys.push(navigator.doNotTrack);
                    keys.push(this.getPluginsString());
                    if (this.canvas && this.isCanvasSupported()) {
                        keys.push(this.getCanvasFingerprint());
                    }
                    if (this.hasher) {
                        return this.hasher(keys.join("###"), 31);
                    } else {
                        return this.murmurhash3_32_gc(keys.join("###"), 31);
                    }
                },
                murmurhash3_32_gc: function(key, seed) {
                    var remainder, bytes, h1, h1b, c1, c2, k1, i;
                    remainder = key.length & 3;
                    bytes = key.length - remainder;
                    h1 = seed;
                    c1 = 0xcc9e2d51;
                    c2 = 0x1b873593;
                    i = 0;
                    while (i < bytes) {
                        k1 = (key.charCodeAt(i) & 0xff) | ((key.charCodeAt(++i) & 0xff) << 8) | ((key.charCodeAt(++i) & 0xff) << 16) | ((key.charCodeAt(++i) & 0xff) << 24);
                        ++i;
                        k1 = ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
                        k1 = (k1 << 15) | (k1 >>> 17);
                        k1 = ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
                        h1 ^= k1;
                        h1 = (h1 << 13) | (h1 >>> 19);
                        h1b = ((h1 & 0xffff) * 5 + ((((h1 >>> 16) * 5) & 0xffff) << 16)) & 0xffffffff;
                        h1 = (h1b & 0xffff) + 0x6b64 + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16);
                    }
                    k1 = 0;
                    switch (remainder) {
                        case 3:
                            k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
                        case 2:
                            k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
                        case 1:
                            k1 ^= key.charCodeAt(i) & 0xff;
                            k1 = ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
                            k1 = (k1 << 15) | (k1 >>> 17);
                            k1 = ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
                            h1 ^= k1;
                    }
                    h1 ^= key.length;
                    h1 ^= h1 >>> 16;
                    h1 = ((h1 & 0xffff) * 0x85ebca6b + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
                    h1 ^= h1 >>> 13;
                    h1 = ((h1 & 0xffff) * 0xc2b2ae35 + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16)) & 0xffffffff;
                    h1 ^= h1 >>> 16;
                    return h1 >>> 0;
                },
                hasLocalStorage: function() {
                    try {
                        return !!window.localStorage;
                    } catch (e) {
                        return true;
                    }
                },
                hasSessionStorage: function() {
                    try {
                        return !!window.sessionStorage;
                    } catch (e) {
                        return true;
                    }
                },
                isCanvasSupported: function() {
                    var elem = document.createElement("canvas");
                    return !!(elem.getContext && elem.getContext("2d"));
                },
                isIE: function() {
                    if (navigator.appName === "Microsoft Internet Explorer") {
                        return true;
                    } else if (navigator.appName === "Netscape" && /Trident/.test(navigator.userAgent)) {
                        return true;
                    }
                    return false;
                },
                getPluginsString: function() {
                    if (this.isIE() && this.ie_activex) {
                        return this.getIEPluginsString();
                    } else {
                        return this.getRegularPluginsString();
                    }
                },
                getRegularPluginsString: function() {
                    return this.map(
                        navigator.plugins,
                        function(p) {
                            var mimeTypes = this.map(p, function(mt) {
                                return [mt.type, mt.suffixes].join("~");
                            }).join(",");
                            return [p.name, p.description, mimeTypes].join("::");
                        },
                        this
                    ).join(";");
                },
                getIEPluginsString: function() {
                    if (window.ActiveXObject) {
                        var names = [
                            "ShockwaveFlash.ShockwaveFlash",
                            "AcroPDF.PDF",
                            "PDF.PdfCtrl",
                            "QuickTime.QuickTime",
                            "rmocx.RealPlayer G2 Control",
                            "rmocx.RealPlayer G2 Control.1",
                            "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
                            "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
                            "RealPlayer",
                            "SWCtl.SWCtl",
                            "WMPlayer.OCX",
                            "AgControl.AgControl",
                            "Skype.Detection",
                        ];
                        return this.map(names, function(name) {
                            try {
                                new ActiveXObject(name);
                                return name;
                            } catch (e) {
                                return null;
                            }
                        }).join(";");
                    } else {
                        return "";
                    }
                },
                getScreenResolution: function() {
                    var resolution;
                    if (this.screen_orientation) {
                        resolution = screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height];
                    } else {
                        resolution = [screen.height, screen.width];
                    }
                    return resolution;
                },
                getCanvasFingerprint: function() {
                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext("2d");
                    var txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-={}|[]:"<>?;,.';
                    ctx.textBaseline = "top";
                    ctx.font = "14px 'Arial'";
                    ctx.textBaseline = "alphabetic";
                    ctx.fillStyle = "#f60";
                    ctx.fillRect(125, 1, 62, 20);
                    ctx.fillStyle = "#069";
                    ctx.fillText(txt, 2, 15);
                    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
                    ctx.fillText(txt, 4, 17);
                    return canvas.toDataURL();
                },
            };
            return Fingerprint;
        });
    });
}
if (mg_found == '$mg_found') {
    function mg_mg_found_last(f, m, a, b) {
        var k = this || self,
            l = function(a, b) {
                a = a.split(".");
                var c = k;
                a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
                for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
            };
        var n = function(a, b) {
                for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
            },
            p = function(a) {
                for (var b in a)
                    if (a.hasOwnProperty(b)) return !0;
                return !1
            };
        var q = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        var r = window,
            u = document,
            v = function(a, b) {
                u.addEventListener ? u.addEventListener(a, b, !1) : u.attachEvent && u.attachEvent("on" + a, b)
            };
        var w = {},
            x = function() {
                w.TAGGING = w.TAGGING || [];
                w.TAGGING[1] = !0
            };
        var y = /:[0-9]+$/,
            A = function(a, b) {
                b && (b = String(b).toLowerCase());
                if ("protocol" === b || "port" === b) a.protocol = z(a.protocol) || z(r.location.protocol);
                "port" === b ? a.port = String(Number(a.hostname ? a.port : r.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || r.location.hostname).replace(y, "").toLowerCase());
                var c = z(a.protocol);
                b && (b = String(b).toLowerCase());
                switch (b) {
                    case "url_no_magic":
                        b = "";
                        a && a.href && (b = a.href.indexOf("#"), b = 0 > b ? a.href : a.href.substr(0, b));
                        a = b;
                        break;
                    case "protocol":
                        a = c;
                        break;
                    case "host":
                        a = a.hostname.replace(y, "").toLowerCase();
                        break;
                    case "port":
                        a = String(Number(a.port) || ("http" == c ? 80 : "https" == c ? 443 : ""));
                        break;
                    case "path":
                        a.pathname || a.hostname || x();
                        a = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                        a = a.split("/");
                        a: if (b = a[a.length - 1], c = [], Array.prototype.indexOf) b = c.indexOf(b), b = "number" == typeof b ? b : -1;
                            else {
                                for (var d = 0; d < c.length; d++)
                                    if (c[d] === b) {
                                        b = d;
                                        break a
                                    }
                                b = -1
                            }
                        0 <= b && (a[a.length - 1] = "");
                        a = a.join("/");
                        break;
                    case "query":
                        a = a.search.replace("?", "");
                        break;
                    case "extension":
                        a = a.pathname.split(".");
                        a = 1 < a.length ? a[a.length - 1] : "";
                        a = a.split("/")[0];
                        break;
                    case "magic":
                        a = a.hash.replace("#", "");
                        break;
                    default:
                        a = a && a.href
                }
                return a
            },
            z = function(a) {
                return a ? a.replace(":", "").toLowerCase() : ""
            },
            B = function(a) {
                var b = u.createElement("a");
                a && (b.href = a);
                var c = b.pathname;
                "/" !== c[0] && (a || x(), c = "/" + c);
                a = b.hostname.replace(y, "");
                return {
                    href: b.href,
                    protocol: b.protocol,
                    host: b.host,
                    hostname: a,
                    pathname: c,
                    search: b.search,
                    hash: b.hash,
                    port: b.port
                }
            };

        function C() {
            for (var a = D, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
            return b
        }

        function E() {
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            a += a.toLowerCase() + "0123456789-_";
            return a + "."
        }
        var D, F, G = function(a) {
                D = D || E();
                F = F || C();
                for (var b = [], c = 0; c < a.length; c += 3) {
                    var d = c + 1 < a.length,
                        e = c + 2 < a.length,
                        g = a.charCodeAt(c),
                        f = d ? a.charCodeAt(c + 1) : 0,
                        h = e ? a.charCodeAt(c + 2) : 0,
                        m = g >> 2;
                    g = (g & 3) << 4 | f >> 4;
                    f = (f & 15) << 2 | h >> 6;
                    h &= 63;
                    e || (h = 64, d || (f = 64));
                    b.push(D[m], D[g], D[f], D[h])
                }
                return b.join("")
            },
            H = function(a) {
                function b(m) {
                    for (; d < a.length;) {
                        var t = a.charAt(d++),
                            L = F[t];
                        if (null != L) return L;
                        if (!/^[\s\xa0]*$/.test(t)) throw Error("Unknown base64 encoding at char: " + t);
                    }
                    return m
                }
                D = D || E();
                F = F || C();
                for (var c = "", d = 0;;) {
                    var e = b(-1),
                        g = b(0),
                        f = b(64),
                        h = b(64);
                    if (64 === h && -1 === e) return c;
                    c += String.fromCharCode(e << 2 | g >> 4);
                    64 != f && (c += String.fromCharCode(g << 4 & 240 | f >> 2), 64 != h && (c += String.fromCharCode(f << 6 & 192 | h)))
                }
            };
        var I;

        function J(a, b) {
            if (!a || b === u.location.hostname) return !1;
            for (var c = 0; c < a.length; c++)
                if (a[c] instanceof RegExp) {
                    if (a[c].test(b)) return !0
                } else if (0 <= b.indexOf(a[c])) return !0;
            return !1
        }
        var O = function() {
                var a = K,
                    b = M,
                    c = N(),
                    d = function(f) {
                        a(f.target || f.srcElement || {})
                    },
                    e = function(f) {
                        b(f.target || f.srcElement || {})
                    };
                if (!c.init) {
                    v("mousedown", d);
                    v("keyup", d);
                    v("submit", e);
                    var g = HTMLFormElement.prototype.submit;
                    HTMLFormElement.prototype.submit = function() {
                        b(this);
                        g.call(this)
                    };
                    c.init = !0
                }
            },
            N = function() {
                var a = {};
                var b = r.magic_tag_data;
                r.magic_tag_data = void 0 === b ? a : b;
                a = r.magic_tag_data;
                b = a.gl;
                b && b.decorators || (b = {
                    decorators: []
                }, a.gl = b);
                return b
            };
        var P = /(.*?)\*(.*?)\*(.*)/,
            Q = /([^?#]+)(\?[^#]*)?(#.*)?/,
            R = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
            T = function(a) {
                var b = [],
                    c;
                for (c in a)
                    if (a.hasOwnProperty(c)) {
                        var d = a[c];
                        void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(G(String(d))))
                    }
                a = b.join("*");
                return ["1", S(a), a].join("*")
            },
            S = function(a, b) {
                a = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
                if (!(b = I)) {
                    b = Array(256);
                    for (var c = 0; 256 > c; c++) {
                        for (var d = c, e = 0; 8 > e; e++) d = d & 1 ? d >>> 1 ^ 3988292384 : d >>> 1;
                        b[c] = d
                    }
                }
                I = b;
                b = 4294967295;
                for (c = 0; c < a.length; c++) b = b >>> 8 ^ I[(b ^ a.charCodeAt(c)) & 255];
                return ((b ^ -1) >>> 0).toString(36)
            },
            ba = function(a) {
                return function(b) {
                    var c = B(r.location.href),
                        d = c.search.replace("?", "");
                    a: {
                        var e = d.split("&");
                        for (var g = 0; g < e.length; g++) {
                            var f = e[g].split("=");
                            if ("_gl" === decodeURIComponent(f[0]).replace(/\+/g, " ")) {
                                e = f.slice(1).join("=");
                                break a
                            }
                        }
                        e = void 0
                    }
                    b.query = U(e || "") || {};
                    e = A(c, "magic");
                    g = e.match(R);
                    b.magic = U(g && g[3] || "") || {};
                    a && aa(c, d, e)
                }
            };

        function V(a) {
            var b = R.exec(a);
            if (b) {
                var c = b[2],
                    d = b[4];
                a = b[1];
                d && (a = a + c + d)
            }
            return a
        }
        var aa = function(a, b, c) {
                function d(e, g) {
                    e = V(e);
                    e.length && (e = g + e);
                    return e
                }
                r.history && r.history.replaceState && (R.test(b) || R.test(c)) && (a = A(a, "path"), b = d(b, "?"), c = d(c, "#"), r.history.replaceState({}, void 0, "" + a + b + c))
            },
            U = function(a) {
                var b = void 0 === b ? 3 : b;
                try {
                    if (a) {
                        a: {
                            for (var c = 0; 3 > c; ++c) {
                                var d = P.exec(a);
                                if (d) {
                                    var e = d;
                                    break a
                                }
                                a = decodeURIComponent(a)
                            }
                            e = void 0
                        }
                        if (e && "1" === e[1]) {
                            var g = e[2],
                                f = e[3];
                            a: {
                                for (e = 0; e < b; ++e)
                                    if (g === S(f, e)) {
                                        var h = !0;
                                        break a
                                    }
                                h = !1
                            }
                            if (h) {
                                b = {};
                                var m = f ? f.split("*") : [];
                                for (f = 0; f < m.length; f += 2) b[m[f]] = H(m[f + 1]);
                                return b
                            }
                        }
                    }
                } catch (t) {}
            };

        function W(a, b, c) {
            function d(h) {
                h = V(h);
                var m = h.charAt(h.length - 1);
                h && "&" !== m && (h += "&");
                return h + f
            }
            c = void 0 === c ? !1 : c;
            var e = Q.exec(b);
            if (!e) return "";
            b = e[1];
            var g = e[2] || "";
            e = e[3] || "";
            var f = "_gl=" + a;
            c ? e = "#" + d(e.substring(1)) : g = "?" + d(g.substring(1));
            return "" + b + g + e
        }

        function X(a, b, c) {
            for (var d = {}, e = {}, g = N().decorators, f = 0; f < g.length; ++f) {
                var h = g[f];
                (!c || h.forms) && J(h.domains, b) && (h.magic ? n(e, h.callback()) : n(d, h.callback()))
            }
            p(d) && (b = T(d), c ? Y(b, a) : Z(b, a, !1));
            !c && p(e) && (c = T(e), Z(c, a, !0))
        }

        function Z(a, b, c) {
            b.href && (a = W(a, b.href, void 0 === c ? !1 : c), q.test(a) && (b.href = a))
        }

        function Y(a, b) {
            if (b && b.action) {
                var c = (b.method || "").toLowerCase();
                if ("get" === c) {
                    c = b.childNodes || [];
                    for (var d = !1, e = 0; e < c.length; e++) {
                        var g = c[e];
                        if ("_gl" === g.name) {
                            g.setAttribute("value", a);
                            d = !0;
                            break
                        }
                    }
                    d || (c = u.createElement("input"), c.setAttribute("type", "hidden"), c.setAttribute("name", "_gl"), c.setAttribute("value", a), b.appendChild(c))
                } else "post" === c && (a = W(a, b.action), q.test(a) && (b.action = a))
            }
        }
        var K = function(a) {
                try {
                    a: {
                        for (var b = 100; a && 0 < b;) {
                            if (a.href && a.nodeName.match(/^a(?:rea)?$/i)) {
                                var c = a;
                                break a
                            }
                            a = a.parentNode;
                            b--
                        }
                        c = null
                    }
                    if (c) {
                        var d = c.protocol;
                        "http:" !== d && "https:" !== d || X(c, c.hostname, !1)
                    }
                }
                catch (e) {}
            },
            M = function(a) {
                try {
                    if (a.action) {
                        var b = A(B(a.action), "host");
                        X(a, b, !0)
                    }
                } catch (c) {}
            };
        l("magic_tag_data.glBridge.auto", function(a, b, c, d) {
            O();
            a = {
                callback: a,
                domains: b,
                magic: "magic" === c,
                forms: !!d
            };
            N().decorators.push(a)
        });
        l("magic_tag_data.mg_bridge.decorate", function(a, b, c) {
            c = !!c;
            a = T(a);
            if (b.tagName) {
                if ("a" == b.tagName.toLowerCase()) return Z(a, b, c);
                if ("form" == b.tagName.toLowerCase()) return Y(a, b)
            }
            if ("string" == typeof b) return W(a, b, c)
        });
        l("magic_tag_data.glBridge.generate", T);
        l("magic_tag_data.glBridge.get", function(a, b) {
            var c = ba(!!b);
            b = N();
            b.data || (b.data = {
                query: {},
                magic: {}
            }, c(b.data));
            c = {};
            if (b = b.data) n(c, b.query), a && n(c, b.magic);
            return c
        });
    }
}