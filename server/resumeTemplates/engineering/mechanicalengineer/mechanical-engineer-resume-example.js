export default ()=>{
    return(
        `
        <!DOCTYPE html>
<html class="bg-stripped animated fadeIn web-view" lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Sam Nickelson - Mechanical Engineer - StyleMyCV</title>

    <meta name="description" content="Mechanical Engineer">
    <meta name="author" content="StyleMyCV.com">

    <meta name="robots" content="noindex, nofollow">

    <link rel="canonical" href="index.html">
    <link rel="alternate" hreflang="x-default" href="index.html" />
    <link rel="alternate" hreflang="en" href="index.html" />

    <link rel="stylesheet" type="text/css" href="/css/template.css" />
</head>

<body data-cv-id="2540214" class="cv-viewer">

    <header class="row centered vcv-header">

    </header>

    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,600);
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,600);
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
        
        .table {
            width: 100%;
        }
        
        .cv-container {
            font-family: "Open Sans", "Century Gothic", CenturyGothic, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
            font-size: 14px;
            background: white;
            padding: 0px;
        }
        
        .cv-container .cv-content {
            padding: 4em 6%;
        }
        
        .cv-container h1,
        .cv-container h2,
        .cv-container h3,
        .cv-container h4,
        .cv-container h5,
        .cv-container h6 {
            margin-top: 0px;
            margin-bottom: 0.25em;
        }
        
        .cv-container h1 {
            font-weight: 400;
            color: #333333;
            font-size: 350%;
            font-family: "Open Sans", "Century Gothic", CenturyGothic, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
            margin-bottom: 0;
        }
        
        .cv-container h2 {
            font-size: 175%;
            font-weight: 500;
            color: #777777;
        }
        
        .cv-container h3 {
            font-size: 150%;
            font-family: "Open Sans", "Century Gothic", CenturyGothic, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
            font-weight: 600;
            color: #333333;
        }
        
        .cv-container h4,
        .cv-container h5,
        .cv-container h6 {
            font-size: 120%;
        }
        
        .cv-container h4 {
            font-weight: 600;
        }
        
        .cv-container h5 {
            font-weight: 300;
        }
        
        .cv-container h5,
        .cv-container h6 {
            font-weight: 300;
            line-height: 1.5em;
        }
        
        .cv-container section {
            position: relative;
            margin-bottom: 2em;
        }
        
        .cv-container section .date-range {
            font-weight: normal;
        }
        
        .cv-container section header {
            width: 100%;
            margin-bottom: 1em;
            text-align: left;
            text-transform: uppercase;
        }
        
        .cv-container section header:after {
            content: '';
            display: block;
            border-bottom: 2px solid black;
            width: 3em;
        }
        
        .cv-container article {
            margin-bottom: 1.5em;
        }
        
        .cv-container #profile.header-bar {
            border-bottom: 1px solid #cccccc;
            margin-bottom: 1.5em !important;
        }
        
        .cv-container .main section,
        .cv-container .sidebar section {
            border-top: 1px solid #cccccc;
            padding-top: 1.5em;
        }
        
        .cv-container .main section:first-child,
        .cv-container .sidebar section:first-child {
            border: none;
            padding-top: 0;
        }
        
        .cv-container article.vcard {
            padding-left: 0px;
            padding-right: 0px;
        }
        
        .cv-container article.vcard .logo {
            float: right;
            width: 170px;
        }
        
        .cv-container article.vcard .logo .css-crop {
            background-image: url(https://www.visualcv.com/app/null);
        }
        
        @media (max-width: 768px) {
            .cv-container article.vcard .logo {
                float: none;
                margin: 0px auto;
            }
        }
        
        .cv-container article.vcard .logo {
            display: none;
        }
        
        .cv-container .flex-columns {
            width: 100%;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
        }
        
        .cv-container .flex-columns .sidebar {
            width: 30%;
            padding-left: 0px;
            padding-right: 1.5em;
            border-right: 1px solid #cccccc;
        }
        
        .cv-container .flex-columns .sidebar .reference_story h3 {
            color: white;
            font-size: 125%;
        }
        
        .cv-container .flex-columns .main {
            background: white;
            width: 70%;
            padding-left: 1.5em;
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
        
        .cv-container .vcard .user-contact {
            list-style: none;
        }
        
        .cv-container .vcard .user-contact i {
            text-align: center;
            width: 1.35em;
            color: #cccccc;
        }
        
        .cv-container .vcard .user-contact li {
            margin-bottom: 0.5em;
        }
        
        .cv-container .vcard .user-contact li:before {
            font-family: FontAwesome;
            opacity: 0.25;
            font-size: 100%;
            margin-right: 0.25em;
            display: inline-block;
            text-align: center;
            width: 1.35em;
            vertical-align: middle;
        }
        
        .cv-container .vcard .user-contact li.locality:before {
            content: "\\f041";
        }
        
        .cv-container .vcard .user-contact li.phone:before {
            content: "\\f095";
        }
        
        .cv-container .vcard .user-contact li.email:before {
            content: "\\f003";
        }
        
        .cv-container .vcard .user-contact li > span {
            display: inline;
        }
        
        .cv-container .vcard .user-links li {
            overflow: visible;
            white-space: nowrap;
            display: block;
        }
        
        .cv-container .vcard .user-contact li,
        .cv-container .vcard .user-links li {
            margin-bottom: 1em;
        }
        
        .cv-container .user-thumb {
            max-width: 100px;
            float: left;
            margin-right: 1em;
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
            border: 1px solid black;
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
        
        .cv-container .sidebar .popover {
            display: none !important;
            opacity: 0;
        }
        
        .cv-container .competency .competency-bar {
            margin: 0.5em 0px 0.75em;
            width: 100%;
            background-color: white;
            border: 1px solid #cccccc;
            border-radius: 1px;
            height: 10px;
        }
        
        .cv-container .competency .competency-level {
            background-color: #cccccc;
            border-radius: 1px;
            height: 100%;
        }
        
        @media (max-width: 768px) {
            .cv-container .cv-content {
                padding: 5em 8%;
            }
            .cv-container h1 {
                font-size: 250%;
            }
            .cv-container h2 {
                font-size: 150%;
            }
            .cv-container h3 {
                font-size: 125%;
            }
            .cv-container .flex-columns,
            .cv-container .main,
            .cv-container .sidebar {
                width: 100% !important;
                display: block !important;
                border: 0 !important;
            }
            .cv-container .main {
                padding: 30px 0px 0px 0px;
            }
            .cv-container h6.date-range {
                text-align: left;
                float: none;
            }
            .cv-container .user-thumb {
                position: relative;
                margin: 1em auto !important;
                display: block;
                float: none !important;
                width: auto;
                max-width: 150px;
            }
            .cv-container .competency h4,
            .cv-container .competency .competency-list {
                float: none;
                width: 100%;
            }
            .cv-container article {
                padding: 0px;
            }
            .cv-container article .article-headings,
            .cv-container article .article-body {
                width: 100% !important;
            }
        }
        
        .pdf .cv-container .cv-content {
            padding: 0px;
        }
        
        .pdf .cv-container .chart-container {
            width: 600px !important;
        }
        
        @media (max-width: 768px) {
            .web-view .cv-container .flex-columns .sidebar {
                padding-right: 0;
            }
            .web-view .cv-container .vcard .user-contact,
            .web-view .cv-container .vcard .user-links {
                padding: 0;
            }
            .web-view .cv-container .vcard .user-contact li,
            .web-view .cv-container .vcard .user-links li {
                width: 100%;
            }
            .web-view .cv-container .vcard .user-contact li:last-of-type,
            .web-view .cv-container .vcard .user-links li:last-of-type,
            .web-view .cv-container .vcard .user-contact li.website,
            .web-view .cv-container .vcard .user-links li.website {
                margin-top: 15px;
                width: 100%;
                text-align: center;
            }
            .web-view .cv-container .vcard .user-contact li:last-of-type a,
            .web-view .cv-container .vcard .user-links li:last-of-type a,
            .web-view .cv-container .vcard .user-contact li.website a,
            .web-view .cv-container .vcard .user-links li.website a {
                padding: 15px;
                display: block;
                border: 1px solid #64B1F2;
                transition: 200ms;
            }
            .web-view .cv-container .vcard .user-contact li:last-of-type a:active,
            .web-view .cv-container .vcard .user-links li:last-of-type a:active,
            .web-view .cv-container .vcard .user-contact li.website a:active,
            .web-view .cv-container .vcard .user-links li.website a:active {
                background-color: #64B1F2;
                transition: 200ms;
            }
            .web-view .cv-container .vcard .user-contact li:last-of-type:before,
            .web-view .cv-container .vcard .user-links li:last-of-type:before,
            .web-view .cv-container .vcard .user-contact li.website:before,
            .web-view .cv-container .vcard .user-links li.website:before {
                display: none !important;
            }
        }
    </style>
    <div>
        <div class="cv-container animated fadeIn">
            <div class="cv-content">
                <div class="contact-spacer">
                    <div class="spacer-stripe"></div>
                </div>
                <section data-bind="profile" class="header-bar profile" id="profile">
                    <article class="vcard " data-bind="content"><img class="user-thumb photo visible" data-bind="thumb" src="https://workstory.s3.amazonaws.com/assets/1566727/photodune-440003-friendly-business-man-portrait-xs_cv.jpg" />
                        <div class="logo">
                            <div class="css-crop bg-contain"></div>
                        </div>
                        <div class="fn user-title">
                            <h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">Sam Nickelson</span></h1>
                            <h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">Mechanical Engineer</span></h2></div>
                    </article>
                </section>
                <div class="flex-columns">
                    <div class="sidebar">
                        <section data-bind="profile_sidebar" class="nomargin vcard profile" id="profile">
                            <article class="contact_info " data-bind="content">
                                <div class="adr">
                                    <ul class="user-contact">
                                        <li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">City State</span></li>
                                        <li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">(500) 500-5000 </span></li>
                                        <li class="email" data-bind="email"><a href="../cdn-cgi/l/email-protection#df9a929e96939f9a929e9693f19c9092"><span class="__cf_email__" data-cfemail="fabfb7bbb3b6babfb7bbb3b6d4b9b5b7">[email&#160;protected]</span></a></li>
                                    </ul>
                                    <ul class="user-links user-websites" data-bind="websites"></ul>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" class="text-section strengths" id="strengths">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Skills">Skills</span></h3></header>
                            <article class="competency " data-bind="contents">
                                <div class="article-body competency">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">P6</span></h6>
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:100%"></div>
                                    </div>
                                    <div id="react-tinymce-1031796" class="competency-description mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                                <div class="clearfix"></div>
                            </article>
                            <article class="competency " data-bind="contents">
                                <div class="article-body competency">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">HAP</span></h6>
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:100%"></div>
                                    </div>
                                    <div id="react-tinymce-1031798" class="competency-description mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                                <div class="clearfix"></div>
                            </article>
                            <article class="competency " data-bind="contents">
                                <div class="article-body competency">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">HVAC</span></h6>
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:100%"></div>
                                    </div>
                                    <div id="react-tinymce-1031800" class="competency-description mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                                <div class="clearfix"></div>
                            </article>
                            <article class="competency " data-bind="contents">
                                <div class="article-body competency">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">Autocad</span></h6>
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:100%"></div>
                                    </div>
                                    <div id="react-tinymce-1031802" class="competency-description mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                                <div class="clearfix"></div>
                            </article>
                            <article class="competency " data-bind="contents">
                                <div class="article-body competency">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">PRIMAVERA</span></h6>
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:100%"></div>
                                    </div>
                                    <div id="react-tinymce-1031804" class="competency-description mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                                <div class="clearfix"></div>
                            </article>
                            <article class="competency " data-bind="contents">
                                <div class="article-body competency">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">
Inventor 2D
</span></h6>
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:83%"></div>
                                    </div>
                                    <div id="react-tinymce-1031806" class="competency-description mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                                <div class="clearfix"></div>
                            </article>
                            <article class="competency " data-bind="contents">
                                <div class="article-body competency">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">
VRF Systems
</span></h6>
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:79%"></div>
                                    </div>
                                    <div id="react-tinymce-1031808" class="competency-description mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                                <div class="clearfix"></div>
                            </article>
                            <article class="competency " data-bind="contents">
                                <div class="article-body competency">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">
Load Calculation
</span></h6>
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:68%"></div>
                                    </div>
                                    <div id="react-tinymce-1031810" class="competency-description mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                                <div class="clearfix"></div>
                            </article>
                            <article class="competency " data-bind="contents">
                                <div class="article-body competency">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">
Value Engineering
</span></h6>
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:90%"></div>
                                    </div>
                                    <div id="react-tinymce-1031812" class="competency-description mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                                <div class="clearfix"></div>
                            </article>
                        </section>
                        <div data-bind="add-sidebar-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-sidebar-section-btn"></span></div>
                    </div>
                    <div class="main">
                        <section data-bind="sections" id="positions" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Work experience</span></h3></header>
                            <article data-bind="contents" class="empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Feb 2016</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Present</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Mechanical Quality Control Engineer</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Scarborough Industries</span></h5></div>
                                    <div id="react-tinymce-1031814" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li><span>Identifying</span>&nbsp;subsystems in mechanical systems to define test packages</li>
                                            <li>Reporting and managing of mechanical projects</li>
                                            <li><span>Maintaining</span>&nbsp;of quality control system documents</li>
                                            <li><span>M</span>ethod statements and inspection test procedures</li>
                                            <li>HVAC Supervision</li>
                                            <li>Firefighting and plumbing systems</li>
                                            <li>Monitoring of manufacturing and installations</li>
                                            <li>Observation of every stage of the manufacturing&nbsp;<span>process</span>&nbsp;</li>
                                            <li><span>I</span>nspection of HVAC, firefighting, and plumbing systems&nbsp;</li>
                                            <li>HVAC system design</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2008</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2016</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Mechanical Engineer</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Whippet Mechanical</span></h5></div>
                                    <div id="react-tinymce-1031816" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li><span>S</span>olid modelling and drafting in Pro-Engineer Wildfire</li>
                                            <li>AutoCAD/AutoCAD electrical for single line diagrams and 3-phase schematics</li>
                                            <li><span>E</span>ngineering calculations on PLC based industrial control systems and main power supplies</li>
                                            <li>Interfaced with vendors to increase cost savings on VFD&rsquo;s, AC motors, PLC&rsquo;s, AC to DC components</li>
                                            <li><span>Led</span>&nbsp;in the assembly and testing of PLC based industrial control systems</li>
                                            <li><span>Led</span>&nbsp;in all aspects of projects from conception to customer delivery</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2007</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2007</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Mechanical Engineer Intern</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Schnauzer Technologies Inc.</span></h5></div>
                                    <div id="react-tinymce-1031818" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li>Member of design team of <span>state-of-the-art</span>&nbsp;hydraulic&nbsp;<span>machine</span>&nbsp;</li>
                                            <li><span>R</span>esponsible for structural and dynamic calculation</li>
                                            <li>Shell sizing calculation for maximum load</li>
                                            <li>Calculation of water flows and power output</li>
                                            <li>Simulate results in ANSYS</li>
                                            <li>Prototyping and design</li>
                                            <li><span>M</span>aterial selection</li>
                                            <li><span>Sustainability assessment</span></li>
                                        </ul>
                                        <p></p>
                                        <p></p>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sections" id="degrees" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Education">Education</span></h3></header>
                            <article data-bind="contents" class="empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2006</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Bachelor of Science in Engineering</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">University of State</span></h5></div>
                                    <div id="react-tinymce-1031820" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p><strong>Major:</strong> Mechanical Engineering</p>
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
        <p></p>
    </footer>

</body>

</html>
        `
    )
}