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
            "applicationTime": 52,
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

    <title>Barbara Coons - Financial Analyst &amp; Investment Banker - VisualCV</title>
    <base href="">

    <meta name="description" content="Financial Analyst &amp; Investment Banker - Odessa, FL">
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

<body data-cv-id="712309" class="cv-viewer">

    <header class="row centered vcv-header">
        
    </header>

    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700);
        @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:300,700);
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
            font-family: "Roboto", "Open Sans", "Century Gothic", CenturyGothic, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
            font-weight: 300;
            font-size: 15px;
            background: white;
            padding: 0px;
        }
        
        .cv-container .cv-content {
            padding: 3em 0px;
            margin: 0px;
            position: relative;
        }
        
        .cv-container .cv-content:before {
            content: " ";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 33%;
            height: 100%;
            background: #425370;
        }
        
        .cv-container h2,
        .cv-container h3,
        .cv-container h4,
        .cv-container h5,
        .cv-container h6,
        .cv-container label {
            margin-top: 0px;
            margin-bottom: 0.2em;
            font-weight: 300;
        }
        
        .cv-container h5 {
            margin: 0 0 0.2em;
        }
        
        .cv-container h1,
        .cv-container h3 {
            font-family: "Roboto Condensed", "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
        }
        
        .cv-container h1 {
            font-size: 225%;
            margin: 0px;
            line-height: 1em;
            text-transform: uppercase;
            font-weight: 200;
            color: white;
            text-align: center;
            margin-bottom: 0.25em;
        }
        
        .cv-container h2 {
            font-size: 150%;
            font-style: italic;
            text-align: center;
        }
        
        .cv-container h3 {
            font-weight: 700;
            font-size: 150%;
        }
        
        .cv-container h4,
        .cv-container h5 {
            font-weight: 400;
            font-size: 125%;
        }
        
        .cv-container h5 {
            color: #555555;
        }
        
        .cv-container h6 {
            font-size: 125%;
            color: #555555;
        }
        
        .cv-container strong {
            font-weight: 700;
        }
        
        .cv-container section {
            clear: both;
            margin-bottom: 2.5em;
        }
        
        .cv-container section header {
            width: 100%;
            margin-bottom: 2.25em;
            text-align: left;
        }
        
        .cv-container section header .header-text {
            padding: 0px 0.5em 0px 0px;
            background: white;
            text-align: center;
            vertical-align: middle;
            display: inline-block;
            margin: 0em 2px 0px 0px;
            z-index: 2;
            position: relative;
        }
        
        .cv-container section header:after {
            content: '';
            display: block;
            top: 1em;
            border-bottom: 1px solid #dedede;
            position: absolute;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 0;
        }
        
        .cv-container section header {
            margin-bottom: 1.25em;
        }
        
        .cv-container .column-container {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
        }
        
        .cv-container .main {
            width: 67%;
        }
        
        .cv-container .sidebar {
            padding: 0% 3%;
            width: 33%;
            color: white;
            z-index: 1;
        }
        
        .cv-container .sidebar .header-text {
            background-color: #425370;
        }
        
        .cv-container .sidebar article a {
            color: white;
        }
        
        .cv-container .sidebar .user-contact li,
        .cv-container .sidebar .user-links li {
            margin-bottom: 0.75em;
        }
        
        .cv-container .sidebar .user-title {
            padding: 15px 0px;
        }
        
        .cv-container .sidebar .user-thumb {
            max-width: 50%;
            margin: 0px auto;
            border: 1px solid white;
            padding: 4px;
            border-radius: 100%;
            margin-top: 1px;
        }
        
        .cv-container .sidebar .user-thumb .css-crop {
            padding-bottom: 100%;
            border-radius: 100%;
        }
        
        .cv-container .sidebar article.contact_info {
            margin-bottom: 2em;
        }
        
        .cv-container .sidebar .margin-top {
            margin-top: 1.5em;
        }
        
        .cv-container .sidebar .contact-field {
            margin-bottom: 1em;
        }
        
        .cv-container .sidebar .contact-field h4 {
            margin-bottom: 0px;
        }
        
        .cv-container .sidebar .competency h6 {
            color: white;
        }
        
        .cv-container .sidebar .competency .competency-list {
            padding: initial;
        }
        
        .cv-container .sidebar .competency .competency-list li {
            opacity: 0.2;
            background-color: white;
        }
        
        .cv-container .sidebar .competency .competency-list li.filled {
            opacity: 1;
        }
        
        .cv-container .vcard ul.user-contact li:before {
            font-family: FontAwesome;
            display: inline-block;
            width: 1em;
            margin-right: 0.25em;
        }
        
        .cv-container .vcard li.adr:before {
            content: "\\f041";
        }
        
        .cv-container .vcard li.phone:before {
            content: "\\f095";
        }
        
        .cv-container .vcard li.email:before {
            content: "\\f003";
        }
        
        .cv-container .main {
            padding: 2em 3%;
            padding-top: 0px;
        }
        
        .cv-container .main h3 {
            color: #555555;
        }
        
        .cv-container .main .header-text {
            background-color: white;
        }
        
        .cv-container #summary header {
            text-align: center;
        }
        
        .cv-container #summary header .header-text {
            padding: 0px 0.5em;
        }
        
        .cv-container #summary article {
            margin-top: 0px;
            text-align: center;
            padding: 0em 1.5em;
            font-size: 115%;
            font-weight: 200;
        }
        
        .cv-container article {
            clear: both;
            margin-bottom: 1.25em;
        }
        
        .cv-container .dated_story .article-headings {
            float: left;
            width: 18%;
            margin-right: 1%;
        }
        
        .cv-container .dated_story .article-body {
            float: left;
            width: 81%;
        }
        
        .cv-container .dated_story#references .article-headings {
            display: none;
        }
        
        .cv-container .dated_story#references .article-body {
            width: 100%;
        }
        
        .cv-container .competency-list {
            list-style: none;
            width: 100%;
            padding-left: 0.25em;
        }
        
        .cv-container .competency-list li {
            height: 1em;
            width: 8%;
            margin-right: 2%;
            background-color: #cccccc;
            -webkit-transform: skewX(-30deg);
            -ms-transform: skewX(-30deg);
            -moz-transform-origin: skewX(-30deg);
            -o-transform-origin: skewX(-30deg);
            transform: skewX(-30deg);
            display: inline-block;
        }
        
        .cv-container .competency-list li.filled {
            background-color: #425370;
        }
        
        .cv-container .portfolio .row {
            margin-left: -5px;
            margin-right: -5px;
        }
        
        .cv-container .portfolio .col-sm-4 {
            padding-left: 5px;
            padding-right: 5px;
        }
        
        .cv-container .portfolio .asset .asset-description {
            display: none;
        }
        
        .cv-container .portfolio label {
            font-weight: 700;
            margin-bottom: 5px;
            margin-top: 5px;
            min-height: 1.5em;
        }
        
        .cv-container .portfolio .css-crop {
            width: 100%;
            padding-bottom: 75%;
            background-size: cover;
            background-position: center center;
            border: 1px solid #425370;
            -webkit-box-shadow: 1px 1px 3px 0px #cccccc;
            box-shadow: 1px 1px 3px 0px #cccccc;
        }
        
        .cv-container .portfolio a label {
            cursor: pointer;
        }
        
        .cv-container .sidebar .portfolio .asset {
            padding-left: 0px;
            padding-right: 0px;
        }
        
        .cv-container .sidebar .portfolio .css-crop {
            border: 0px;
            padding: 0px;
            height: auto;
            background-image: none !important;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        
        .cv-container .sidebar .portfolio .css-crop img {
            display: block !important;
        }
        
        @media (min-width: 768px) {
            .cv-container .sidebar .portfolio label {
                text-align: left;
            }
            .cv-container .sidebar .portfolio .asset,
            .cv-container .sidebar .portfolio .asset-thumb {
                width: 100%;
            }
            .cv-container .sidebar .portfolio .asset-description {
                display: block;
            }
        }
        
        .cv-container .portfolio label {
            font-weight: initial;
        }
        
        .cv-container .portfolio .css-crop {
            width: 100%;
            padding-bottom: 75%;
            border: 2px solid #425370;
            border-radius: 2em 0px 2em 0px;
            box-shadow: 1px 1px 3px 0px #dedede;
        }
        
        .cv-container .edit-new {
            width: 100%;
            margin-bottom: 0px;
        }
        
        .cv-container .sidebar .add-section a.btn {
            color: white;
        }
        
        @media (max-width: 768px) {
            .cv-container .cv-content {
                padding: 0px 0px 3em 0px;
            }
            .cv-container .cv-content:before {
                content: none;
            }
            .cv-container #summary article {
                padding: 0px;
            }
            .cv-container .column-container {
                display: block;
            }
            .cv-container .main {
                padding: 2em 5% !important;
                width: 100%;
                display: block;
            }
            .cv-container .sidebar {
                padding: 3em 5% !important;
                background-color: #425370;
                float: none;
                width: 100% !important;
            }
            .cv-container article .article-headings,
            .cv-container article .article-body {
                width: 100% !important;
            }
        }
        
        .pdf body > .container {
            padding: 0px;
        }
        
        .pdf .cv-container {
            margin: 0px;
        }
        
        .pdf .cv-container .cv-content {
            padding-top: 1px;
        }
        
        .pdf .cv-container .header-text:after {
            padding-right: 0em;
            content: "\\00a0";
        }
        
        .pdf .cv-container .chart-container {
            width: 600px !important;
        }
        
        .pdf .cv-container .main > *:last-child,
        .pdf .cv-container .sidebar > *:last-child {
            page-break-after: always;
        }
        
        .pdf .cv-container .main {
            padding: 0 3%;
        }
        
        @page {
            margin: 1.2cm;
        }
        
        @page :first {
            margin-top: 0cm;
        }
        
        @media (max-width: 768px) {
            #profile {
                margin-bottom: 0;
            }
            .web-view .cv-container .sidebar {
                padding-bottom: 10px !important;
            }
            .web-view .cv-container .user-contact li,
            .web-view .cv-container .user-links li {
                width: 100%;
                margin: 0;
            }
            .web-view .cv-container .user-contact li:before,
            .web-view .cv-container .user-links li:before {
                display: none !important;
            }
            .web-view .cv-container .user-contact li:last-of-type,
            .web-view .cv-container .user-links li:last-of-type,
            .web-view .cv-container .user-contact li.website,
            .web-view .cv-container .user-links li.website {
                margin-top: 5px;
                float: left;
                text-align: center;
            }
            .web-view .cv-container .user-contact li:last-of-type a,
            .web-view .cv-container .user-links li:last-of-type a,
            .web-view .cv-container .user-contact li.website a,
            .web-view .cv-container .user-links li.website a {
                display: inline-block;
                margin-top: 0;
                padding: 15px 15px 15px 10px;
                transition: 200ms;
                width: 100%;
                color: #425370;
                background-color: rgba(255, 255, 255, 0.8);
                font-weight: bold;
            }
            .web-view .cv-container .user-contact li:last-of-type a:active,
            .web-view .cv-container .user-links li:last-of-type a:active,
            .web-view .cv-container .user-contact li.website a:active,
            .web-view .cv-container .user-links li.website a:active {
                background-color: white;
                transition: 200ms;
            }
        }
    </style>
    <div>
        <div class="cv-container animated fadeIn">
            <div class="cv-content">
                <div class="column-container">
                    <div class="sidebar">
                        <section id="profile" class="profile">
                            <article class="vcard " data-bind="content">
                                <div class="user-thumb" data-bind="thumb">
                                </div>
                                <div class="fn user-title">
                                    <h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">Barbara Coons</span></h1>
                                    <h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">Financial Analyst &amp; Investment Banker</span></h2></div>
                                <ul class="user-contact">
                                    <li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">City State</span></li>
                                    <li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">000-000-0000</span></li>
                                    <li class="email" data-bind="email"><a href="#"><span class="__cf_email__">johndoemail.com</span></a></li>
                                </ul>
                                <ul class="user-links user-websites" data-bind="websites"></ul>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story_511352" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Core Competencies</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031074" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li>Strategic Planning</li>
                                        <li>Investment Banking</li>
                                        <li>Financial Modeling</li>
                                        <li>Financial Analysis</li>
                                        <li>Portfolio Management</li>
                                        <li>Client Satisfaction</li>
                                        <li>Data Manipulation/Analyses</li>
                                        <li>Presentation Skills</li>
                                        <li>Attention to Detail</li>
                                        <li>Time Management</li>
                                        <li>Organizational Skills</li>
                                        <li>Project Management</li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story_511357" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Credentials</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031076" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li><strong>Chartered Financial Analyst (CFA) Level II Exam</strong> (studying ongoing)</li>
                                        <li>&nbsp;<strong>Chartered Financial Analyst (CFA) Level I Exam</strong>, December 2014</li>
                                        <li><strong>Licenses</strong><span>, FINRA Series 7 and Series 63, California Life and Disability Insurance </span></li>
                                        <li><strong>Attendee</strong>, Wells Fargo Sales and Service Conference</li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story_511359" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Awards &amp; Memberships</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031078" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li><strong>Multiple Recipient</strong>, Wells Fargo &ldquo;Valley of the Stars&rdquo; Award</li>
                                        <li><strong>Recipient</strong>, Wells Fargo &ldquo;Circle of Stars&rdquo; Award</li>
                                        <li><strong>Member</strong>, Wells Fargo Millionaire Club and Champion Circle</li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story_511360" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Computer Technology</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031080" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li><strong>Microsoft Office Suite</strong>: Word, Excel, Outlook, PowerPoint</li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                        <div data-bind="add-sidebar-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-sidebar-section-btn"></span></div>
                    </div>
                    <div class="main">
                        <section data-bind="sections" id="summary" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Summary">Summary</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031082" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <p><strong>Distinguished banking professional</strong> experienced in reading and interpreting financial statements as well as performing credit analyses. Exhibits solid expertise regarding equities and debts. Demonstrated ability to leverage analytical skills to gather and review financial data and build models to perform analysis applying valuation methodologies. Skilled in performing in-depth client, industry, market and competitor research. Thrives in high-pressure and time-sensitive environments.</p>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sections" id="positions" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Work experience</span></h3></header>
                            <article data-bind="contents" class="empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2011</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Present</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Registered Private Banker </span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">WELLS FARGO BANK</span></h5></div>
                                    <div id="react-tinymce-1031084" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p>Manage and retain over 500 high net-worth clients; work to foster lasting trust-based relationships. Complete full balance sheet and cash flow analyses. Focus on growing and managing a portfolio within a book of business to maximize revenue, i.e. assets, liabilities and financial goal contributions. Oversee complex business along with personal relationships. Manage cash flow and credit structure; also create and present strategies in order to meet expectations based on objectives unique to the client’s situation, economic situation and expectations. Collect, analyze and present financial documents from clients.</p>
                                        <ul>
                                            <li>Manage client book totaling over $100M on deposit, $50M in investments and $50M in credit; grew book from scratch</li>
                                            <li>Currently in the process of growing a new book since making an office switch; already acquired 200 clients thus far</li>
                                            <li>Effectively coach, mentor and supervise a staff of over 30 team members</li>
                                            <li><span>Enhance client relationships through partnering with The Private Bank, Business Banking Group and Wells Fargo Advisers</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2008</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2011</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Personal Banker 2 Registered </span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">WELLS FARGO BANK</span></h5></div>
                                    <div id="react-tinymce-1031086" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p>Efficaciously managed medium to high net-worth clients. Completed overview and balance sheet analyses. Made product recommendations based on clients’ needs and extensive analyses. Managed a Sales/Operations platform of 20+ staff.</p>
                                        <ul>
                                            <li>Referred over $3M in hard dollar assets including raw deposits, $1.5M in investments to the Wealth Management Group, lending opportunities and high-level planning</li>
                                            <li>Deeply involved in advisement and analysis of holdings</li>
                                            <li>Reviewed and analyzed credit packages prior to partnership establishment to identify cash flow and invest income sources</li>
                                            <li>Was named the top investment referral within the branch for the majority of 2009-2010</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2006</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2008</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Personal Banker 1</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">WELLS FARGO BANK</span></h5></div>
                                    <div id="react-tinymce-1031088" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p>Took on a wide range of roles; formed new banking relationships through opening accounts, facilitating peripheral product sales and providing the utmost in quality customer service. Maintained ongoing accounts and assisted the branch in daily operations. Analyzed and managed client portfolios to enhance client relationships and experience; cross-sold with help from numerous partners.</p>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sections" id="degrees" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Education">Education</span></h3></header>
                            <article data-bind="contents" class="empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">A.Arts</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">Santa Monica College</span></h5></div>
                                    <div id="react-tinymce-1031090" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p>Economics</p>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">B.A</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">University of California</span></h5></div>
                                    <div id="react-tinymce-1031092" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p>Economics with International Area of Study</p>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <div data-bind="add-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-section-btn"></span></div>
                    </div>
                </div>
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