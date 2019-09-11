export default ()=>{
    return (
        `
        <!DOCTYPE html>
<html class="bg-stripped animated fadeIn web-view" lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <script>
        window.NREUM || (NREUM = {});
        NREUM.info = {
            "beacon": "bam.nr-data.net",
            "errorBeacon": "bam.nr-data.net",
            "licenseKey": "6387e82dbf",
            "applicationID": "3081130",
            "transactionName": "IV9dR0RcDghRRk4AEBEfQFtZRA==",
            "queueTime": 0,
            "applicationTime": 44,
            "agent": ""
        }
    </script>
    <script>
        window.NREUM || (NREUM = {}), __nr_require = function(e, n, t) {
            function r(t) {
                if (!n[t]) {
                    var o = n[t] = {
                        exports: {}
                    };
                    e[t][0].call(o.exports, function(n) {
                        var o = e[t][1][n];
                        return r(o || n)
                    }, o, o.exports)
                }
                return n[t].exports
            }
            if ("function" == typeof __nr_require) return __nr_require;
            for (var o = 0; o < t.length; o++) r(t[o]);
            return r
        }({
            1: [function(e, n, t) {
                function r() {}

                function o(e, n, t) {
                    return function() {
                        return i(e, [c.now()].concat(u(arguments)), n ? null : this, t), n ? void 0 : this
                    }
                }
                var i = e("handle"),
                    a = e(3),
                    u = e(4),
                    f = e("ee").get("tracer"),
                    c = e("loader"),
                    s = NREUM;
                "undefined" == typeof window.newrelic && (newrelic = s);
                var p = ["setPageViewName", "setCustomAttribute", "setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease"],
                    d = "api-",
                    l = d + "ixn-";
                a(p, function(e, n) {
                    s[n] = o(d + n, !0, "api")
                }), s.addPageAction = o(d + "addPageAction", !0), s.setCurrentRouteName = o(d + "routeName", !0), n.exports = newrelic, s.interaction = function() {
                    return (new r).get()
                };
                var m = r.prototype = {
                    createTracer: function(e, n) {
                        var t = {},
                            r = this,
                            o = "function" == typeof n;
                        return i(l + "tracer", [c.now(), e, t], r),
                            function() {
                                if (f.emit((o ? "" : "no-") + "fn-start", [c.now(), r, o], t), o) try {
                                    return n.apply(this, arguments)
                                } catch (e) {
                                    throw f.emit("fn-err", [arguments, this, e], t), e
                                } finally {
                                    f.emit("fn-end", [c.now()], t)
                                }
                            }
                    }
                };
                a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","), function(e, n) {
                    m[n] = o(l + n)
                }), newrelic.noticeError = function(e, n) {
                    "string" == typeof e && (e = new Error(e)), i("err", [e, c.now(), !1, n])
                }
            }, {}],
            2: [function(e, n, t) {
                function r(e, n) {
                    if (!o) return !1;
                    if (e !== o) return !1;
                    if (!n) return !0;
                    if (!i) return !1;
                    for (var t = i.split("."), r = n.split("."), a = 0; a < r.length; a++)
                        if (r[a] !== t[a]) return !1;
                    return !0
                }
                var o = null,
                    i = null,
                    a = /Version\/(\S+)\s+Safari/;
                if (navigator.userAgent) {
                    var u = navigator.userAgent,
                        f = u.match(a);
                    f && u.indexOf("Chrome") === -1 && u.indexOf("Chromium") === -1 && (o = "Safari", i = f[1])
                }
                n.exports = {
                    agent: o,
                    version: i,
                    match: r
                }
            }, {}],
            3: [function(e, n, t) {
                function r(e, n) {
                    var t = [],
                        r = "",
                        i = 0;
                    for (r in e) o.call(e, r) && (t[i] = n(r, e[r]), i += 1);
                    return t
                }
                var o = Object.prototype.hasOwnProperty;
                n.exports = r
            }, {}],
            4: [function(e, n, t) {
                function r(e, n, t) {
                    n || (n = 0), "undefined" == typeof t && (t = e ? e.length : 0);
                    for (var r = -1, o = t - n || 0, i = Array(o < 0 ? 0 : o); ++r < o;) i[r] = e[n + r];
                    return i
                }
                n.exports = r
            }, {}],
            5: [function(e, n, t) {
                n.exports = {
                    exists: "undefined" != typeof window.performance && window.performance.timing && "undefined" != typeof window.performance.timing.navigationStart
                }
            }, {}],
            ee: [function(e, n, t) {
                function r() {}

                function o(e) {
                    function n(e) {
                        return e && e instanceof r ? e : e ? f(e, u, i) : i()
                    }

                    function t(t, r, o, i) {
                        if (!d.aborted || i) {
                            e && e(t, r, o);
                            for (var a = n(o), u = v(t), f = u.length, c = 0; c < f; c++) u[c].apply(a, r);
                            var p = s[y[t]];
                            return p && p.push([b, t, r, a]), a
                        }
                    }

                    function l(e, n) {
                        h[e] = v(e).concat(n)
                    }

                    function m(e, n) {
                        var t = h[e];
                        if (t)
                            for (var r = 0; r < t.length; r++) t[r] === n && t.splice(r, 1)
                    }

                    function v(e) {
                        return h[e] || []
                    }

                    function g(e) {
                        return p[e] = p[e] || o(t)
                    }

                    function w(e, n) {
                        c(e, function(e, t) {
                            n = n || "feature", y[t] = n, n in s || (s[n] = [])
                        })
                    }
                    var h = {},
                        y = {},
                        b = {
                            on: l,
                            addEventListener: l,
                            removeEventListener: m,
                            emit: t,
                            get: g,
                            listeners: v,
                            context: n,
                            buffer: w,
                            abort: a,
                            aborted: !1
                        };
                    return b
                }

                function i() {
                    return new r
                }

                function a() {
                    (s.api || s.feature) && (d.aborted = !0, s = d.backlog = {})
                }
                var u = "nr@context",
                    f = e("gos"),
                    c = e(3),
                    s = {},
                    p = {},
                    d = n.exports = o();
                d.backlog = s
            }, {}],
            gos: [function(e, n, t) {
                function r(e, n, t) {
                    if (o.call(e, n)) return e[n];
                    var r = t();
                    if (Object.defineProperty && Object.keys) try {
                        return Object.defineProperty(e, n, {
                            value: r,
                            writable: !0,
                            enumerable: !1
                        }), r
                    } catch (i) {}
                    return e[n] = r, r
                }
                var o = Object.prototype.hasOwnProperty;
                n.exports = r
            }, {}],
            handle: [function(e, n, t) {
                function r(e, n, t, r) {
                    o.buffer([e], r), o.emit(e, n, t)
                }
                var o = e("ee").get("handle");
                n.exports = r, r.ee = o
            }, {}],
            id: [function(e, n, t) {
                function r(e) {
                    var n = typeof e;
                    return !e || "object" !== n && "function" !== n ? -1 : e === window ? 0 : a(e, i, function() {
                        return o++
                    })
                }
                var o = 1,
                    i = "nr@id",
                    a = e("gos");
                n.exports = r
            }, {}],
            loader: [function(e, n, t) {
                function r() {
                    if (!E++) {
                        var e = x.info = NREUM.info,
                            n = l.getElementsByTagName("script")[0];
                        if (setTimeout(s.abort, 3e4), !(e && e.licenseKey && e.applicationID && n)) return s.abort();
                        c(y, function(n, t) {
                            e[n] || (e[n] = t)
                        }), f("mark", ["onload", a() + x.offset], null, "api");
                        var t = l.createElement("script");
                        t.src = "https://" + e.agent, n.parentNode.insertBefore(t, n)
                    }
                }

                function o() {
                    "complete" === l.readyState && i()
                }

                function i() {
                    f("mark", ["domContent", a() + x.offset], null, "api")
                }

                function a() {
                    return O.exists && performance.now ? Math.round(performance.now()) : (u = Math.max((new Date).getTime(), u)) - x.offset
                }
                var u = (new Date).getTime(),
                    f = e("handle"),
                    c = e(3),
                    s = e("ee"),
                    p = e(2),
                    d = window,
                    l = d.document,
                    m = "addEventListener",
                    v = "attachEvent",
                    g = d.XMLHttpRequest,
                    w = g && g.prototype;
                NREUM.o = {
                    ST: setTimeout,
                    SI: d.setImmediate,
                    CT: clearTimeout,
                    XHR: g,
                    REQ: d.Request,
                    EV: d.Event,
                    PR: d.Promise,
                    MO: d.MutationObserver
                };
                var h = "" + location,
                    y = {
                        beacon: "bam.nr-data.net",
                        errorBeacon: "bam.nr-data.net",
                        agent: "js-agent.newrelic.com/nr-1130.min.js"
                    },
                    b = g && w && w[m] && !/CriOS/.test(navigator.userAgent),
                    x = n.exports = {
                        offset: u,
                        now: a,
                        origin: h,
                        features: {},
                        xhrWrappable: b,
                        userAgent: p
                    };
                e(1), l[m] ? (l[m]("DOMContentLoaded", i, !1), d[m]("load", r, !1)) : (l[v]("onreadystatechange", o), d[v]("onload", r)), f("mark", ["firstbyte", u], null, "api");
                var E = 0,
                    O = e(5)
            }, {}]
        }, {}, ["loader"]);
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="../favicon.ico">

    <title>John Strangways - INFORMATION TECHNOLOGY PROFESSIONAL - VisualCV</title>
    <base href="">

    <meta name="description" content="

					INFORMATION TECHNOLOGY PROFESSIONAL 

		 - Odessa, FL">
    <meta name="author" content="VisualCV.com">

    <meta name="robots" content="noindex, nofollow">

    <link rel="canonical" href="index.html">
    <link rel="alternate" hreflang="x-default" href="index.html" />
    <link rel="alternate" hreflang="en" href="index.html" />

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="photo" />
    <meta name="twitter:site" content="@visualcv" />
    <meta name="twitter:image" content="https://www.visualcv.com/images/visualcv-resume-templates.jpg" />
    <meta name="twitter:url" content="https://www.visualcv.com" />

    <!-- Open Graph data -->
    <meta property="og:image" content="https://www.visualcv.com/images/visualcv-resume-templates.jpg" />

    <!-- Google Tag Manager -->
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKRGZV" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                '//www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-WKRGZV');
    </script>
    <!-- End Google Tag Manager -->

    <link rel="stylesheet" href="/css/template.css">
</head>

<body data-cv-id="1761321" class="cv-viewer">

    <header class="row centered vcv-header">
   
    </header>

    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600);
        @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
        .css-crop {
            width: 100%;
            height: 0;
            padding-bottom: 50%;
            background-repeat: no-repeat;
        }
        
        .css-crop.bg-cover {
            background-size: cover;
            /*-ms-behavior: url("/styles/backgroundsize.min.htc"); doesn't work on IE8-9...*/
            background-position: center;
        }
        
        .css-crop.bg-contain {
            background-size: contain;
            background-position: center;
        }
        
        .clear-margin {
            margin: 0;
            padding: 0;
        }
        
        .full-width {
            width: 100%;
        }
        
        .half-width {
            width: 50%;
        }
        
        .clickable {
            cursor: pointer;
        }
        
        .inline {
            display: inline;
        }
        
        .inline-block {
            display: inline-block !important;
        }
        
        .nomargin {
            margin: 0px !important;
        }
        
        .nowrap {
            white-space: nowrap;
        }
        
        .centered {
            display: block;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
        }
        
        .first {
            margin-top: 0px !important;
        }
        
        .last {
            margin-bottom: 0px !important;
        }
        
        .ellipsis {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
        }
        
        .mejs-overlay-button {
            display: none;
        }
        
        [data-id=new] [data-field=title] {
            display: none;
        }
        
        .cv-viewer p {
            min-height: 1em;
        }
        
        .cv-viewer .vcv-header {
            margin: 30px auto;
            max-width: 1020px;
            position: relative;
        }
        
        .cv-viewer .vcv-header #social-share {
            text-align: right;
            position: absolute;
            left: -80px;
            top: 80px;
            z-index: 1050;
            opacity: 0;
        }
        
        .cv-viewer .vcv-header #social-share .share-button {
            min-height: 30px;
        }
        
        .cv-viewer .vcv-header #social-share .share-button.subtle {
            opacity: 0.75;
        }
        
        .cv-viewer .vcv-header .banner-top {
            padding-left: 90px;
            position: relative;
            margin-top: -10px;
            margin-bottom: -30px;
            z-index: 0;
            opacity: 0.5;
            display: inline-block;
        }
        
        .cv-viewer .vcv-header .banner-top:hover {
            opacity: 0.8;
            -webkit-transition-property: transform opacity;
            -moz-transition-property: transform opacity;
            transition-property: transform opacity;
            -webkit-transition-duration: 0.5s;
            -moz-transition-duration: 0.5s;
            transition-duration: 0.5s;
        }
        
        .cv-viewer .vcv-logo {
            height: 40px;
            display: block;
            padding: 5px 0;
        }
        
        .cv-viewer .cv-container article .empty {
            display: none !important;
        }
        
        .cv-viewer footer.vcv-footer {
            margin-top: 100px;
            color: #333;
            text-align: center;
        }
        
        .cv-viewer footer .powered-by {
            margin-top: 0px;
        }
        
        .cv-viewer footer .updated-at {
            opacity: 0.5;
        }
        
        .cv-fullscreen {
            position: relative;
        }
        
        .cv-fullscreen .powered-by a {
            color: white;
        }
        
        .cv-fullscreen .vcv-header {
            display: none;
        }
        
        .cv-fullscreen .vcv-footer {
            width: 100%;
            position: absolute;
            bottom: 0px;
            color: white;
            margin-top: 50px;
        }
        
        .cv-fullscreen .vcv-footer .updated-at {
            display: block;
            margin-bottom: 1em;
            opacity: 0.75;
        }
        
        .editor-visible {
            display: none;
        }
        
        .cv-editor .cv-container {
            margin: 0px auto 150px auto;
        }
        
        .cv-editor .cv-container .editor-visible {
            display: block;
        }
        
        .cv-container,
        .cv-content {
            opacity: 1 !important;
        }
        
        .cv-container {
            display: block;
            margin: 0px auto 10px auto;
            min-height: 500px;
            padding: 50px 6.5%;
            max-width: 1020px;
            background: white;
            border-radius: 1px;
            z-index: 10;
        }
        
        .cv-container .nowrap-list li {
            white-space: nowrap;
        }
        
        .cv-container section {
            position: relative;
            word-wrap: break-word;
        }
        
        .cv-container article:after {
            content: '';
            display: block;
            clear: both;
        }
        
        .cv-container .main section:first-child .edit-section .sort-up,
        .cv-container .cv-content section:first-child .edit-section .sort-up {
            display: none;
        }
        
        .cv-container .main section:last-of-type .edit-section .sort-down,
        .cv-container .cv-content section:last-of-type .edit-section .sort-down {
            display: none;
        }
        
        .cv-container #profile .edit-section {
            display: none;
        }
        
        .cv-container #references .date-range {
            display: none !important;
        }
        
        .cv-container #references .article-body {
            width: 100%;
        }
        
        .cv-container svg {
            overflow: visible;
        }
        
        .cv-container table {
            width: 100%;
        }
        
        .cv-container .morris-hover {
            display: none !important;
        }
        
        .cv-container input[type=month] {
            position: relative;
            border: none;
            max-width: 100%;
            content: attr(placeholder);
            display: inline-block;
        }
        
        .cv-container input[type=month]:before {
            content: attr(placeholder);
            position: absolute;
        }
        
        .cv-container .gallery .asset-thumb {
            display: block;
        }
        
        .cv-container .asset label.empty {
            display: block !important;
        }
        
        .cv-container .btn {
            margin-bottom: 15px;
        }
        
        .cv-container .btn i.subtle {
            opacity: 0.2;
        }
        
        .cv-container .btn i {
            opacity: 0.5;
        }
        
        .cv-container .btn.btn-glass {
            background-color: rgba(255, 255, 255, 0.15);
            -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.05);
            box-shadow: 0 3px 0 rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.7);
        }
        
        .cv-container a[href] {
            color: #428bca;
        }
        
        .cv-container a[href] [data-bind=organization] {
            color: #428bca;
        }
        
        .cv-container [data-bind=organization_url] {
            display: block;
        }
        
        .cv-container [data-bind=end_date]:before {
            content: ' - ';
        }
        
        .cv-container .add-section {
            max-width: 850px;
            margin: 0px auto;
        }
        
        .cv-container .cv-content:after {
            content: '';
            display: block;
            clear: both;
        }
        
        .cv-container .cv-content .user-thumb {
            display: none;
        }
        
        .cv-container .cv-content .user-thumb.visible {
            display: inherit;
        }
        
        .cv-container .asset-thumb {
            position: relative;
            cursor: pointer;
            display: block;
        }
        
        .cv-container .asset-thumb .asset-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 15%;
            z-index: 100;
            opacity: 0.5;
        }
        
        .cv-container .asset-thumb .asset-overlay:hover {
            opacity: 0.75;
        }
        
        .cv-container .asset-thumb .asset-overlay.youtube {
            background-image: url("../images/icons/play.png");
        }
        
        .cv-container .asset-thumb .asset-overlay img {
            page-break-inside: avoid;
        }
        
        .cv-container .asset label.ellipsis > span {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
        }
        
        @media (max-width: 992px) {
            #social-share {
                display: none;
            }
            .vcv-header a {
                display: block;
                margin-bottom: 15px;
            }
            .vcv-header .vcv-logo {
                display: inline;
            }
            .vcv-header .btn {
                width: 100%;
            }
        }
        
        .pdf .cv-container .chart-container {
            width: 850px;
        }
        
        .pdf .cv-container .cv-content {
            padding: 0px;
        }
        
        .pdf .cv-container .portfolio .css-crop {
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        
        .pdf .cv-container .user-thumb {
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        
        .pdf body,
        .embed body {
            background: white !important;
        }
        
        .pdf .container,
        .embed .container {
            padding: 0px;
            margin: 0px auto;
            width: 100%;
        }
        
        .pdf .cv-container,
        .embed .cv-container {
            padding: 0px !important;
            margin-bottom: 0px !important;
            max-width: 100% !important;
            border: none;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        
        .pdf .cv-container section:last-of-type,
        .embed .cv-container section:last-of-type,
        .pdf .cv-container section:last-of-type article:last-of-type,
        .embed .cv-container section:last-of-type article:last-of-type,
        .pdf .cv-container section:last-of-type article:last-of-type,
        .embed .cv-container section:last-of-type article:last-of-type,
        .pdf .cv-container p:last-of-type,
        .embed .cv-container p:last-of-type,
        .pdf .cv-container .content-container,
        .embed .cv-container .content-container,
        .pdf .cv-container .cv-content,
        .embed .cv-container .cv-content {
            margin-bottom: 0px !important;
            padding-bottom: 0px !important;
        }
        
        .pdf .vcv-header,
        .embed .vcv-header,
        .pdf .vcv-footer,
        .embed .vcv-footer {
            display: none;
        }
        
        .pdf header,
        .embed header,
        .pdf .header-text,
        .embed .header-text {
            page-break-after: avoid;
            page-break-inside: avoid;
        }
        
        .pdf .no-page-break,
        .embed .no-page-break,
        .pdf .css-crop,
        .embed .css-crop,
        .pdf pre,
        .embed pre,
        .pdf blockquote,
        .embed blockquote,
        .pdf img,
        .embed img,
        .pdf svg,
        .embed svg,
        .pdf .chart-graph,
        .embed .chart-graph,
        .pdf .chart-container,
        .embed .chart-container,
        .pdf .asset,
        .embed .asset {
            page-break-inside: avoid;
        }
        
        .pdf .no-page-break p,
        .embed .no-page-break p {
            page-break-inside: avoid;
        }
        
        .pdf .page-break,
        .embed .page-break {
            page-break-before: always;
        }
        
        .pdf thead,
        .embed thead {
            display: table-header-group;
        }
        
        .pdf p,
        .embed p {
            orphans: 4;
            widows: 4;
        }
        
        @page {
            size: A4 portrait;
        }
        
        .cv-container {
            font-family: "Source Serif Pro", Georgia, Times, "Times New Roman", "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, serif;
            font-weight: 400;
            font-size: 15px;
            background: white;
            padding: 0px;
            color: #000;
        }
        
        .cv-container h1 {
            font-size: 350%;
            font-family: "Source Serif Pro", Georgia, Times, "Times New Roman", "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, serif;
            letter-spacing: -0.5px;
            color: #333;
        }
        
        .cv-container h2 {
            margin: 0px;
            font-family: "Source Serif Pro", Georgia, Times, "Times New Roman", "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, serif;
            font-size: 130%;
            margin-bottom: 0.2em;
            overflow: auto;
        }
        
        .cv-container h3,
        .cv-container h6,
        .cv-container label {
            font-family: "Montserrat", "Century Gothic", CenturyGothic, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
            text-transform: uppercase;
            font-size: 100%;
        }
        
        .cv-container h3,
        .cv-container h4,
        .cv-container h5 {
            font-weight: 600;
            letter-spacing: 1.5px;
            font-size: 115%;
            margin: 0px;
        }
        
        .cv-container h5 {
            font-weight: 400;
            color: #555;
        }
        
        .cv-container h6,
        .cv-container label {
            letter-spacing: 0.5px;
            margin: 0px;
        }
        
        .cv-container .date-range {
            max-width: 175px;
            text-align: left;
        }
        
        .cv-container .user-contact,
        .cv-container .user-links {
            font-family: "Montserrat", "Century Gothic", CenturyGothic, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
        }
        
        .cv-container .user-contact a,
        .cv-container .user-links a {
            text-decoration: underline;
        }
        
        .cv-container #profile {
            margin: 0px;
        }
        
        .cv-container #summary {
            font-size: 125%;
            margin: 0px;
        }
        
        .cv-container #summary .about-text {
            margin: 0px;
        }
        
        .cv-container #summary .clearfix {
            height: 1em;
        }
        
        .cv-container section {
            padding: 0px 8%;
            margin-bottom: 2.5em;
        }
        
        .cv-container .vcard {
            padding-top: 50px;
            padding-bottom: 10px;
        }
        
        .cv-container .vcard .full-name {
            font-weight: bold;
            margin: 0px;
        }
        
        .cv-container .vcard .given-name,
        .cv-container .vcard .family-name {
            text-transform: capitalize;
        }
        
        .cv-container .vcard,
        .cv-container .cv-summary {
            background: #f8f8f8;
        }
        
        .cv-container .vcard .user-contact li,
        .cv-container .cv-summary .user-contact li,
        .cv-container .vcard .user-links,
        .cv-container .cv-summary .user-links {
            font-weight: normal;
            font-size: 0.9em;
            color: #555;
        }
        
        .cv-container .vcard .user-contact li a,
        .cv-container .cv-summary .user-contact li a,
        .cv-container .vcard .user-links a,
        .cv-container .cv-summary .user-links a {
            white-space: nowrap;
            line-height: 1.5em;
        }
        
        .cv-container .vcard .css-crop,
        .cv-container .cv-summary .css-crop {
            width: 125px;
            height: 125px;
            float: left;
            margin: 0px 25px 25px 0px;
            border: 1px solid #000;
            border-radius: 100%;
            padding-bottom: 0px;
        }
        
        .cv-container .user-contact {
            margin-bottom: 1.5em;
            display: block;
            overflow: hidden;
        }
        
        .cv-container .user-contact li {
            margin-bottom: 0.25em;
            margin-left: 0.15em;
            padding: 0;
            list-style: none;
        }
        
        .cv-container .user-contact li li {
            display: inline-block;
        }
        
        .cv-container .user-contact li li:not(:last-child):after {
            content: "|";
            color: #CCC;
            margin: 0px 0.5em;
        }
        
        .cv-container .user-contact h5 {
            text-transform: initial;
        }
        
        .cv-container .user-contact p {
            margin-bottom: 2px;
        }
        
        .cv-container .user-contact .separator-h {
            margin: auto 10px;
        }
        
        .cv-container .user-links li {
            display: inline-block;
            margin-right: 0.5em;
        }
        
        .cv-container .title {
            color: #64b1f2;
            font-weight: normal;
        }
        
        .cv-container .article-body {
            margin: 0 0 2.5em 0px;
        }
        
        .cv-container .article-body h5 {
            margin-bottom: 0.25em;
        }
        
        .cv-container .portfolio .asset-thumb {
            position: relative;
            display: block;
            border: 1px solid #EEE;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .cv-container .portfolio .asset-thumb:hover .overlay {
            opacity: 0;
        }
        
        .cv-container .portfolio .asset-thumb:hover .portfolio-open {
            bottom: 0px;
        }
        
        .cv-container .portfolio a label {
            cursor: pointer;
        }
        
        .cv-container .portfolio .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 10;
            display: block;
            background: rgba(255, 255, 255, 0.9);
            transition: all 0.3s ease;
            background-position: center;
            background-repeat: no-repeat;
        }
        
        .cv-container .portfolio .image-asset .overlay {
            background-image: url("../themes/air/images/photo-thumb.png");
            background-size: 45px;
        }
        
        .cv-container .portfolio .document-asset .overlay {
            background-image: url("../themes/air/images/doc-thumb.png");
            background-size: 37px;
        }
        
        .cv-container .portfolio .youtube-asset .overlay {
            background-image: url("../themes/air/images/video-thumb.png");
            background-size: 45px;
        }
        
        .cv-container .portfolio label {
            min-height: 1em;
            margin-top: 0.5em;
            margin-bottom: 1em;
            font-size: 70%;
        }
        
        .cv-container .portfolio .css-crop {
            width: 100%;
            padding-bottom: 75%;
        }
        
        .cv-container .portfolio .portfolio-open {
            letter-spacing: 2px;
            color: white;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 12px;
            display: block;
            background: #000;
            text-align: right;
            font-family: "proxima-nova", sans-serif;
            padding: 12px 10px;
            position: absolute;
            bottom: -42px;
            width: 100%;
        }
        
        .cv-container .timeline {
            padding: 1px 0px 3.5em 0px;
            position: relative;
        }
        
        .cv-container .timeline .timeline-row:first-child {
            margin-top: 3em;
        }
        
        .cv-container .timeline:before {
            content: "";
            position: absolute;
            border-right: 1px solid rgba(0, 0, 0, 0.1);
            top: 0px;
            bottom: 0px;
            width: 30%;
        }
        
        .cv-container .timeline .timeline-left {
            width: 30%;
            float: left;
            clear: both;
            position: relative;
        }
        
        .cv-container .timeline .timeline-left.marked:after {
            content: "";
            position: absolute;
            width: 12px;
            height: 12px;
            background: #64b1f2;
            border-radius: 100%;
            box-shadow: 0px 0px 0px 2px white;
            top: 4px;
            right: -6px;
            z-index: 1;
        }
        
        .cv-container .timeline .timeline-right {
            padding-left: 33%;
        }
        
        @media (max-width: 768px) {
            .cv-container .timeline:before {
                width: 9px;
            }
            .cv-container .timeline:after {
                width: 10px;
            }
            .cv-container .timeline .timeline-left {
                padding-left: 10px;
                width: 100%;
                float: none;
            }
            .cv-container .timeline .timeline-left:after {
                left: 4px;
                top: 65px;
            }
            .cv-container .timeline .timeline-right {
                width: 100%;
            }
        }
        
        .cv-container .timeline {
            border-top: 1px solid #E5E5E5;
        }
        
        .cv-container .timeline .timeline-left {
            z-index: 1;
            padding-left: 8%;
        }
        
        .cv-container .timeline .timeline-left header {
            padding-bottom: 2.5em;
        }
        
        .cv-container .timeline .timeline-right {
            padding-right: 8%;
        }
        
        .cv-container .timeline .timeline-start {
            position: absolute;
            top: -1px;
            width: 11px;
            height: 11px;
            left: 30%;
        }
        
        .cv-container .timeline .timeline-start:before {
            content: '';
            position: absolute;
            border-left: 11px solid transparent;
            border-right: 11px solid transparent;
            border-top: 11px solid;
            border-top-color: #E5E5E5;
            top: 0px;
            right: -1px;
        }
        
        .cv-container .timeline .timeline-start:after {
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid #f8f8f8;
            content: '';
            top: -1px;
            right: 0px;
            position: absolute;
            z-index: 10;
        }
        
        .cv-container section.timeline-row {
            padding: 0px;
        }
        
        .cv-container .competency .competency-bar {
            margin: 0.5em 0px 0.75em;
            width: 100%;
            background-color: #EEE;
            border-radius: 2px;
            height: 8px;
            -webkit-transform: skewX(-45deg);
            -ms-transform: skewX(-45deg);
            -moz-transform-origin: skewX(-45deg);
            -o-transform-origin: skewX(-45deg);
            transform: skewX(-45deg);
        }
        
        .cv-container .competency .competency-level {
            background-color: #64b1f2;
            border-radius: 2px;
            height: 100%;
        }
        
        .cv-container .competency .competency-bar {
            height: 6px;
            width: 200px;
            -webkit-transform: skewX(0);
            -ms-transform: skewX(0);
            -moz-transform-origin: skewX(0);
            -o-transform-origin: skewX(0);
            transform: skewX(0);
        }
        
        .cv-container .strengths article h4 {
            font-family: "Montserrat", "Century Gothic", CenturyGothic, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
            text-transform: uppercase;
            font-size: 85%;
            letter-spacing: 0.75px;
        }
        
        .cv-container .strengths article:nth-child(2n+3) {
            clear: both;
        }
        
        .cv-container .gallery.row {
            margin-left: -5px;
            margin-right: -5px;
        }
        
        .cv-container .gallery .col-sm-4 {
            padding: 0px 5px;
        }
        
        .cv-container .user-contact {
            list-style: none;
            margin: 0px;
            width: auto;
        }
        
        .cv-container .user-contact i {
            text-align: center;
            width: 1.35em;
            color: #CCC;
        }
        
        .cv-container .user-contact li {
            display: inline-block;
            overflow: visible;
            word-break: break-all;
            white-space: nowrap;
        }
        
        .cv-container .user-contact li:last-child:after {
            display: none;
        }
        
        .cv-container .user-contact li:after {
            content: '|';
            color: #CCC;
            margin: 0px 0.5em;
        }
        
        .cv-container .user-contact li:before {
            font-family: FontAwesome;
            opacity: 0.25;
            font-size: 115%;
            margin-right: 0.25em;
            display: inline-block;
            width: 1em;
        }
        
        .cv-container .user-contact li.locality:before {
            content: "\\f041";
        }
        
        .cv-container .user-contact li.phone:before {
            content: "\\f095";
        }
        
        .cv-container .user-contact li.email:before {
            content: "\\f003";
        }
        
        .cv-container .portfolio .asset.col-sm-3 {
            padding-left: 8px;
            padding-right: 8px;
        }
        
        .cv-container .edit-new {
            width: 100%;
            margin-bottom: 0px;
        }
        
        .cv-container .section-placeholder {
            padding-bottom: 5em;
        }
        
        .cv-container .skills form {
            width: 100%;
            float: left;
        }
        
        @media (max-width: 768px) {
            .cv-container .vcard {
                text-align: center;
            }
            .cv-container .vcard .css-crop {
                float: none;
                margin: 0px auto 15px auto;
            }
            .cv-container .timeline .timeline-start {
                left: 8.5px;
            }
            .cv-container .timeline .timeline-left,
            .cv-container .timeline .timeline-right {
                padding: 0% 8% !important;
            }
            .cv-container .timeline .article-body {
                margin: 0px 0px 20px 0px;
            }
            .cv-container .timeline .holder,
            .cv-container .timeline .holder-rhomb {
                display: none;
            }
            .cv-container .competency .competency-bar {
                width: 100%;
            }
        }
        
        .pdf body > .container {
            padding: 0px;
        }
        
        .pdf .cv-container {
            margin: 0px;
        }
        
        .pdf .cv-container h1,
        .pdf .cv-container h3,
        .pdf .cv-container h4,
        .pdf .cv-container h5,
        .pdf .cv-container h6,
        .pdf .cv-container label {
            letter-spacing: initial !important;
        }
        
        .pdf .cv-container .vcard {
            padding-top: 10px;
        }
        
        .pdf .cv-container .portfolio .overlay {
            display: none;
        }
        
        .pdf .cv-container .chart-container {
            width: 650px !important;
        }
        
        @media (max-width: 768px) {
            .web-view .cv-container .user-contact li,
            .web-view .user-links li {
                width: 100%;
                margin: 0;
            }
            .web-view .cv-container .user-contact li:last-of-type,
            .web-view .user-links li:last-of-type,
            .web-view .cv-container .user-contact li.website,
            .web-view .user-links li.website {
                margin-top: 15px;
                float: left;
            }
            .web-view .cv-container .user-contact li:last-of-type a,
            .web-view .user-links li:last-of-type a,
            .web-view .cv-container .user-contact li.website a,
            .web-view .user-links li.website a {
                display: inline-block;
                margin-top: 0;
                padding: 15px 15px 15px 10px;
                transition: 200ms;
            }
            .web-view .cv-container .user-contact li:last-of-type a:active,
            .web-view .user-links li:last-of-type a:active,
            .web-view .cv-container .user-contact li.website a:active,
            .web-view .user-links li.website a:active {
                background-color: #e3e3e3;
                transition: 200ms;
            }
        }
    </style>
    <div>
        <div class="cv-container animated fadeIn">
            <div class="cv-content single-column">
                <section id="profile" class="vcard profile">
                    <article data-bind="content" class="">
                        <div class="user-thumb" data-bind="thumb">
                            <div class="css-crop bg-cover" style="background-image:url(https://www.visualcv.com/app/null)"></div>
                        </div>
                        <div class="fn user-title">
                            <h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">John Strangways</span></h1>
                            <h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">

					INFORMATION TECHNOLOGY PROFESSIONAL 

		</span></h2></div>
                        <ul class="user-contact nowrap-list">
                            <li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">Dover</span></li>
                            <li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">+17777777777</span></li>
                            <li class="email" data-bind="email"><a href="#"><span class="__cf_email__">johndoe@email.com</span></a></li>
                            </ul>
                        <ul class="user-links user-websites nowrap-list" data-bind="websites"></ul>
                        <div class="clearfix"></div>
                    </article>
                </section>
                <section id="summary" class="cv-summary text_story">
                    <article data-bind="content" class="">
                        <div id="react-tinymce-1031160" class="about-text mce-content-body" spellcheck="true" placeholder="Description"></div>
                    </article>
                    <div class="clearfix"></div>
                </section>
                <div class="timeline">
                    <section class="timeline-row dated_story" data-bind="sections" id="positions">
                        <div class="timeline-left">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Work experience</span></h3></header>
                        </div>
                        <div class="timeline-right"></div>
                        <div class="clearfix"></div>
                        <article data-bind="contents" class="empty empty empty empty ">
                            <div class="timeline-left marked">
                                <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2008</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Present</span></span></h6></div>
                            <div class="timeline-right">
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">

					Analyst (Contract) 

		</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">

					REHABILITATION SERVICES, INC., City, ST 

		</span></h5></div>
                                    <div id="react-tinymce-1031162" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p><span>Analyze treatment plans based upon medical diagnosis to coordinate and develop cost effective automated solutions with software provider, Methware. Documented and defined requirements for security permissions and roles. Created new security roles and permissions based upon industry and corporate best practices. Designed, documented and tested new security permissions or security change requests using Black Box and White Box scenarios. Processed company payroll using Peachtree Complete Accounting 2009. </span></p>
                                        <p><strong>Selected Achievements: </strong></p>
                                        <ul>
                                            <li>Designed security procedures and policies to support Methware change management.</li>
                                            <li><span>Delivered $18,000 in annual savings by implementing Methware patient inventory module. </span></li>
                                            <li><span>Authored step-by-step training materials in a user friendly approach. </span></li>
                                            <li><span>Reduced turnover 100% through proper application software training . <br/></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </article>
                        <article data-bind="contents" class="empty empty empty empty ">
                            <div class="timeline-left marked">
                                <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2000</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2008</span></span></h6></div>
                            <div class="timeline-right">
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">

							PeopleSoft Security Administrator/Business Analyst I 

		</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">

							COMMUNITY COLLEGE, City, ST

		</span></h5></div>
                                    <div id="react-tinymce-1031164" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p>Analyzed the pre-existing security architecture and retro-fitted security for the upgraded applications. Synchronized security roles and permissions with Houston Community College&rsquo;s best practices. Coordinated security permission enhancements with end users. Communicated system security changes and processes to appropriate personnel. Resolved security and permissions issues with users diplomatically. Implemented and maintained PeopleSoft Finance System. Authored process and procedure documentation in a user-friendly manner. Developed quality assurance test scripts for all patches, modifications and upgrades to ensure permissions were still valid. Performed comparative analysis in conjunction with Senior Business Analyst.</p>
                                        <p><strong>Selected Achievements: </strong></p>
                                        <ul>
                                            <li>Authored campus-wide training materials utilizing PeopleSoft User Productivity Kit (UPK).</li>
                                            <li>Conducted training classes and initiatives for the application development department.</li>
                                            <li>Ensured that end-users accessed the application with the appropriate permissions.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </article>
                        <article data-bind="contents" class="empty empty empty empty ">
                            <div class="timeline-left marked">
                                <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">1999</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2000</span></span></h6></div>
                            <div class="timeline-right">
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Network Administrator/System Support Engineer</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">

					SEAFOOD RESTAURANT, City, State 

		</span></h5></div>
                                    <div id="react-tinymce-1031166" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p><span>Worked within a dynamic, fast paced environment supporting multiple sites worldwide. Installed and configured Netware servers, desktop computers, desktop components and network printers. Conducted support and maintenance through debugging and testing for the purpose of remediation. Assigned security permissions according to corporate best practice standards. Liaised with users to analyze and design security enhancements. </span></p>
                                        <p><strong>Selected Achievements: </strong></p>
                                        <ul>
                                            <li>Facilitated support for 3000 worldwide users.</li>
                                            <li><span>Troubleshot, diagnosed and corrected deficiencies with users TCP/IP connections. <br/></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </article>
                    </section>
                    <section class="timeline-row dated_story" data-bind="sections" id="degrees">
                        <div class="timeline-left">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Education">Education</span></h3></header>
                        </div>
                        <div class="timeline-right"></div>
                        <div class="clearfix"></div>
                        <article data-bind="contents" class="empty empty empty empty ">
                            <div class="timeline-left marked">
                                <h6 class="date-range"><span data-bind="start_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                            <div class="timeline-right">
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">

					Bachelor of Science – Business Education 

		</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">

					Southern University</span></h5></div>
                                    <div id="react-tinymce-1031168" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p><span>City, State</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </article>
                        <article data-bind="contents" class="empty empty empty empty ">
                            <div class="timeline-left marked">
                                <h6 class="date-range"><span data-bind="start_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                            <div class="timeline-right">
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">

					Certified Novell Administrator, Netware 4.11 

		</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">

					CTREC 

		</span></h5></div>
                                    <div id="react-tinymce-1031170" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p><span>City, State</span></p>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </article>
                        <article data-bind="contents" class="empty empty empty empty ">
                            <div class="timeline-left marked">
                                <h6 class="date-range"><span data-bind="start_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                            <div class="timeline-right">
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">

					Certified Business Teacher (Life Certificate) 

		</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">State</span></h5></div>
                                    <div id="react-tinymce-1031172" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </article>
                    </section>
                    <section class="timeline-row strengths" data-bind="sections" id="strengths">
                        <div class="timeline-left">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Skills">Skills</span></h3></header>
                        </div>
                        <div class="timeline-right">
                            <div class="row">
                                <article class="col-sm-6 empty " data-bind="contents">
                                    <h4 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">

					Languages</span></h4>
                                    <div class="article-body competency">
                                        <div class="competency-bar">
                                            <div class="competency-level" data-bind="level" style="width:100%"></div>
                                        </div>
                                        <div id="react-tinymce-1031174" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                            <p><span>SQL, PeopleTools 1 &amp; 2, Application Designer, Oracle Query</span></p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </article>
                                <article class="col-sm-6 empty " data-bind="contents">
                                    <h4 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">

					Operating Systems 

		</span></h4>
                                    <div class="article-body competency">
                                        <div class="competency-bar">
                                            <div class="competency-level" data-bind="level" style="width:100%"></div>
                                        </div>
                                        <div id="react-tinymce-1031176" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                            <p><span>Windows Vista, XP Professional, 2000, 98, 95 and 3.x; Novell Netware 4.11</span></p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </article>
                                <article class="col-sm-6 empty " data-bind="contents">
                                    <h4 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">

					Browsers 

		</span></h4>
                                    <div class="article-body competency">
                                        <div class="competency-bar">
                                            <div class="competency-level" data-bind="level" style="width:100%"></div>
                                        </div>
                                        <div id="react-tinymce-1031178" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                            <p><span>Mozilla, Firebox, Netscape, Internet Explorer</span></p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </article>
                                <article class="col-sm-6 empty " data-bind="contents">
                                    <h4 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">

					Software 

		</span></h4>
                                    <div class="article-body competency">
                                        <div class="competency-bar">
                                            <div class="competency-level" data-bind="level" style="width:100%"></div>
                                        </div>
                                        <div id="react-tinymce-1031180" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                            <p><span>PeopleSoft Enterprise Management System 8, Methware IV, Crystal Report Writing 9, Mercury Vignette, Magic Service Desk, MS Office Suite, Microsoft Visio, Microsoft Project, Outlook, PC Anywhere, Go To Assist, TCP/IP protocols</span></p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section class="editor-visible">
                        <div class="col-sm-4 timetable-left"></div>
                        <div class="col-sm-8 timetable-right">
                            <div data-bind="add-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-section-btn"></span></div>
                        </div>
                        <div class="clearfix"></div>
                    </section>
                    <div class="timeline-start"></div>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>

    <footer class="vcv-footer">
        <p>
    
        </p>
    </footer>


</body>

</html>
        `
    )
}