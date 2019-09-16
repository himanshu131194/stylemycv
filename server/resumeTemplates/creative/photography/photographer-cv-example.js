export default ()=>{
    return (
        `
        <!DOCTYPE html>
<html class="bg-stripped animated fadeIn web-view" lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Photographer - StyleMyCV</title>

    <meta name="description" content="Photographer">
    <meta name="author" content="StyleMyCV.com">

    <meta name="robots" content="noindex, nofollow">

    <link rel="canonical" href="index.html">
    <link rel="alternate" hreflang="x-default" href="index.html" />
    <link rel="alternate" hreflang="en" href="index.html" />

    <link rel="stylesheet" type="text/css" href="/css/template.css" />
</head>

<body data-cv-id="3090940" class="cv-viewer">

    <header class="row centered vcv-header">

    </header>

    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700);
        @import url(https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700);
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
            font-family: "Raleway", "Didot", "Hoefler Text", Garamond, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
            font-weight: 500;
            font-size: 12px;
            line-height: 1.65;
            background: white;
            padding: 0px;
        }
        
        .cv-container .cv-content {
            padding: 3em 0px;
            margin: 0px;
            position: relative;
        }
        
        .cv-container h2,
        .cv-container h3,
        .cv-container h4,
        .cv-container h5,
        .cv-container h6,
        .cv-container label {
            margin-top: 0px;
            margin-bottom: 0.2em;
            font-weight: 500;
        }
        
        .cv-container h5 {
            margin: 0;
        }
        
        .cv-container h1,
        .cv-container h3 {
            font-family: "Raleway", "Didot", "Hoefler Text", Garamond, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
        }
        
        .cv-container h1 {
            font-size: 200%;
            font-weight: 600;
            line-height: 1.4;
            text-transform: uppercase;
            text-align: center;
            margin: 0;
        }
        
        .cv-container h2 {
            font-size: 125%;
            font-weight: 600;
            line-height: 1.4;
            text-transform: uppercase;
            text-align: center;
            margin: 0;
        }
        
        .cv-container h3 {
            font-weight: 600;
            font-size: 125%;
            text-transform: uppercase;
            margin-bottom: 1.5em;
        }
        
        .cv-container h4,
        .cv-container h5 {
            font-weight: 500;
            font-size: 125%;
        }
        
        .cv-container h5 {
            color: black;
        }
        
        .cv-container h6 {
            font-size: 125%;
            color: black;
        }
        
        .cv-container p {
            font-weight: 500;
        }
        
        .cv-container strong {
            font-weight: 700;
        }
        
        .cv-container section {
            clear: both;
            margin-bottom: 3.45em;
        }
        
        .cv-container #profile {
            margin-bottom: 0;
        }
        
        .cv-container [data-bind="organization"] {
            font-weight: 700;
        }
        
        .cv-container .column-container {
            display: flex;
            display: -webkit-flex;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
        }
        
        .cv-container .main {
            width: 60%;
        }
        
        .cv-container .sidebar {
            padding: 0% 3%;
            width: 33%;
            z-index: 1;
        }
        
        .cv-container .sidebar .user-contact li,
        .cv-container .sidebar .user-links li {
            margin-bottom: 0.25em;
            text-align: center;
        }
        
        .cv-container .sidebar .user-contact li i,
        .cv-container .sidebar .user-links li i {
            display: none;
        }
        
        .cv-container .sidebar .user-title {
            padding: 30px 0 20px;
        }
        
        .cv-container .sidebar .user-thumb.visible {
            width: 50%;
            margin: 0px auto;
            border: 2px solid black;
            border-radius: 100%;
            display: inline-block;
        }
        
        .cv-container .sidebar .user-thumb.visible .css-crop {
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
        
        .cv-container .block-separator {
            display: block;
            text-align: center;
        }
        
        .cv-container .block-separator:after {
            display: inline-block;
            margin: 2.5em auto;
            height: 2px;
            width: 25px;
            background-color: black;
            content: '';
        }
        
        .cv-container .vcard {
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            flex-direction: column;
            -webkit-flex-direction: column;
            align-items: center;
            -webkit-align-items: center;
            margin-bottom: 0;
        }
        
        .cv-container .vcard ul.user-contact li:before {
            font-family: FontAwesome;
            display: inline-block;
            width: 1em;
            margin-right: 0.25em;
        }
        
        .cv-container .main {
            padding: 2em 3%;
            padding-top: 1.5em;
        }
        
        .cv-container article {
            clear: both;
            margin-bottom: 2em;
        }
        
        .cv-container article h4 {
            margin-bottom: 1.25em;
        }
        
        .cv-container .dated_story .article-headings {
            float: right;
        }
        
        .cv-container .dated_story#references .article-headings {
            display: none;
        }
        
        .cv-container .dated_story#references .article-body {
            width: 100%;
        }
        
        .cv-container .competency .competency-bar {
            margin: 1em 0;
            width: 100%;
            background-color: #eaeaea;
            border-radius: 12px;
            height: 12px;
        }
        
        .cv-container .competency .competency-level {
            background-color: #cccccc;
            border-radius: 12px;
            height: 12px;
        }
        
        .cv-container .competency:nth-child(2n+1) {
            clear: both;
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
            border: 1px solid #cccccc;
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
            border: none;
            box-shadow: none;
        }
        
        .cv-container .portfolio .asset {
            padding-left: 5px;
            padding-right: 5px;
        }
        
        .cv-container .edit-new {
            width: 100%;
            margin-bottom: 0px;
        }
        
        .cv-container .sidebar {
            text-align: center;
        }
        
        .cv-container .sidebar [data-bind="sidebar_sections"] {
            margin: 0 20px;
        }
        
        @media (max-width: 768px) {
            .cv-container .cv-content {
                padding: 0px 0px 3em 0px;
            }
            .cv-container .cv-content:before {
                content: none;
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
        
        @media (max-width: 768px) {
            .web-view .cv-container .user-contact {
                margin-top: 20px;
            }
            .web-view .cv-container .user-contact,
            .web-view .cv-container .user-links {
                width: 100%;
            }
            .web-view .cv-container .user-contact li:last-of-type,
            .web-view .cv-container .user-links li:last-of-type {
                margin-bottom: 0 !important;
            }
            .web-view .cv-container .user-contact li:last-of-type,
            .web-view .cv-container .user-links li:last-of-type,
            .web-view .cv-container .user-contact li.website,
            .web-view .cv-container .user-links li.website {
                width: 100%;
                max-width: 400px;
                text-align: center;
                margin: 10px auto;
            }
            .web-view .cv-container .user-contact li:last-of-type a,
            .web-view .cv-container .user-links li:last-of-type a,
            .web-view .cv-container .user-contact li.website a,
            .web-view .cv-container .user-links li.website a {
                padding: 15px;
                width: 100%;
                display: block;
                border: 1px solid #428bca;
                color: #428bca;
                transition: 200ms;
            }
            .web-view .cv-container .user-contact li:last-of-type a:active,
            .web-view .cv-container .user-links li:last-of-type a:active,
            .web-view .cv-container .user-contact li.website a:active,
            .web-view .cv-container .user-links li.website a:active {
                background-color: #428bca;
                color: white;
                transition: 200ms;
            }
        }
        
        @page {
            margin: 1.2cm;
        }
        
        @page :first {
            margin-top: 0cm;
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
                                    <div class="css-crop bg-cover" style="background-image:url(https://www.visualcv.com/app/null)"></div>
                                </div>
                                <div class="fn user-title">
                                    <h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">Taylor Hill</span></h1>
                                    <div class="block-separator"></div>
                                    <h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">Photographer</span></h2></div>
                                <ul class="user-contact">
                                    <li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">Burnaby, BC</span></li>
                                    <li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">(500) 500-5000 </span></li>
                                    <li class="email" data-bind="email"><a href="../cdn-cgi/l/email-protection#a6e3ebe7efeae6e3ebe7efea88e5e9eb"><span class="__cf_email__" data-cfemail="753038343c39353038343c395b363a38">[email&#160;protected]</span></a></li>
                                </ul>
                                <ul class="user-links user-websites" data-bind="websites"></ul>
                                <div class="block-separator"></div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Summary</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031580" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li style="text-align: left;"><span><span>A dedicated and creative photographer with a decade of experience</span></span>
                                        </li>
                                        <li style="text-align: left;"><span><span>Experience with&nbsp;</span>PR agencies, community projects, and industries</span>
                                        </li>
                                        <li style="text-align: left;"><span><span>Experience with weddings, conference, and event photography</span></span>
                                        </li>
                                        <li style="text-align: left;"><span><span><span>Skilled in photo retouching and colour correction</span></span>
                                            </span>
                                        </li>
                                    </ul>
                                    <p><span><span><span><span><span></span></span>
                                        </span>
                                        </span>
                                        </span>
                                    </p>
                                    <p><span><span><span><span><span><span></span></span>
                                        </span>
                                        </span>
                                        </span>
                                        </span>
                                    </p>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story_cLhpE6Lu5f" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Specialties</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031582" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li style="text-align: left;">Wedding Photography</li>
                                        <li style="text-align: left;"><span>Studio Photography</span></li>
                                        <li style="text-align: left;"><span><span>Landscape Photography</span></span>
                                        </li>
                                        <li style="text-align: left;"><span><span><span>Event Photography</span></span>
                                            </span>
                                        </li>
                                        <li style="text-align: left;"><span><span><span><span>Stock Photography</span></span>
                                            </span>
                                            </span>
                                        </li>
                                    </ul>
                                    <p><span><span><span><span><span><span></span></span>
                                        </span>
                                        </span>
                                        </span>
                                        </span>
                                    </p>
                                    <p><span><span><span><span><span><span><span></span></span>
                                        </span>
                                        </span>
                                        </span>
                                        </span>
                                        </span>
                                    </p>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story_58Pghcv5QT" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Skills</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031584" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li style="text-align: left;">Lighting Design</li>
                                        <li style="text-align: left;"><span>Colour Correction</span></li>
                                        <li style="text-align: left;"><span>Adobe Photoshop<br/></span></li>
                                        <li style="text-align: left;"><span>Adobe Lightroom<br/></span></li>
                                        <li style="text-align: left;"><span>Photo Mechanic<br/></span></li>
                                        <li style="text-align: left;">Digital Photography</li>
                                        <li style="text-align: left;"><span>Film Photography</span></li>
                                    </ul>
                                    <p><span><span><span></span></span>
                                        </span>
                                    </p>
                                    <p><span><span><span><span></span></span>
                                        </span>
                                        </span>
                                    </p>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story_uqaug5paRG" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Awards</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031586" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li style="text-align: left;"><span><span>Lower Mainland</span>&nbsp;Photography Competition, 2011</span>
                                        </li>
                                        <li style="text-align: left;">Gold (Digital Outdoor), 2014</li>
                                        <li style="text-align: left;"><span>Silver</span>&nbsp;(Digital), Provincial&nbsp; Awards, 2014</li>
                                        <li style="text-align: left;"><span>Local Photographer of the Year,&nbsp;<span>2015</span>&nbsp;</span>
                                        </li>
                                        <li style="text-align: left;"><span><span>Canadian</span>&nbsp;Professional Photography (finalist),&nbsp;<span>2016</span>&nbsp;</span>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                        <div data-bind="add-sidebar-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-sidebar-section-btn"></span></div>
                    </div>
                    <div class="main">
                        <section data-bind="sections" id="portfolio" class="portfolio">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Portfolio">Portfolio</span></h3></header>
                            <article class="portfolio " data-bind="content">
                                <div id="react-tinymce-1031588" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                <div class="row gallery">
                                    <div class="asset col-sm-6" data-bind="assets">
                                        <a class="asset-thumb popup" data-bind="file_url" target="_blank" href="https://workstory.s3.amazonaws.com/assets/1741986/pexels-photo-71298.jpeg">
                                            <div class="asset-overlay"></div>
                                            <div class="css-crop bg-cover" style="background-image:url(https://workstory.s3.amazonaws.com/assets/1741986/pexels-photo-71298_cv.jpeg)"></div>
                                        </a>
                                        <div target="_blank" rel="nofollow" data-bind="link_url">
                                            <label class="text-center ellipsis empty" data-bind="title"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="Title"></span></label>
                                        </div>
                                    </div>
                                    <div class="asset col-sm-6" data-bind="assets">
                                        <a class="asset-thumb popup" data-bind="file_url" target="_blank" href="https://workstory.s3.amazonaws.com/assets/1741988/pexels-photo-219776.jpeg">
                                            <div class="asset-overlay"></div>
                                            <div class="css-crop bg-cover" style="background-image:url(https://workstory.s3.amazonaws.com/assets/1741988/pexels-photo-219776_cv.jpeg)"></div>
                                        </a>
                                        <div target="_blank" rel="nofollow" data-bind="link_url">
                                            <label class="text-center ellipsis empty" data-bind="title"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="Title"></span></label>
                                        </div>
                                    </div>
                                    <div class="asset col-sm-6" data-bind="assets">
                                        <a class="asset-thumb popup" data-bind="file_url" target="_blank" href="https://workstory.s3.amazonaws.com/assets/1741989/pexels-photo-175741.jpeg">
                                            <div class="asset-overlay"></div>
                                            <div class="css-crop bg-cover" style="background-image:url(https://workstory.s3.amazonaws.com/assets/1741989/pexels-photo-175741_cv.jpeg)"></div>
                                        </a>
                                        <div target="_blank" rel="nofollow" data-bind="link_url">
                                            <label class="text-center ellipsis empty" data-bind="title"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="Title"></span></label>
                                        </div>
                                    </div>
                                    <div class="asset col-sm-6" data-bind="assets">
                                        <a class="asset-thumb popup" data-bind="file_url" target="_blank" href="https://workstory.s3.amazonaws.com/assets/1741991/pexels-photo-601316.jpeg">
                                            <div class="asset-overlay"></div>
                                            <div class="css-crop bg-cover" style="background-image:url(https://workstory.s3.amazonaws.com/assets/1741991/pexels-photo-601316_cv.jpeg)"></div>
                                        </a>
                                        <div target="_blank" rel="nofollow" data-bind="link_url">
                                            <label class="text-center ellipsis empty" data-bind="title"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="Title"></span></label>
                                        </div>
                                    </div>
                                    <div class="asset col-sm-6" data-bind="assets">
                                        <a class="asset-thumb popup" data-bind="file_url" target="_blank" href="https://workstory.s3.amazonaws.com/assets/1741990/pexels-photo-167706.jpeg">
                                            <div class="asset-overlay"></div>
                                            <div class="css-crop bg-cover" style="background-image:url(https://workstory.s3.amazonaws.com/assets/1741990/pexels-photo-167706_cv.jpeg)"></div>
                                        </a>
                                        <div target="_blank" rel="nofollow" data-bind="link_url">
                                            <label class="text-center ellipsis empty" data-bind="title"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="Title"></span></label>
                                        </div>
                                    </div>
                                    <div class="asset col-sm-6" data-bind="assets">
                                        <a class="asset-thumb popup" data-bind="file_url" target="_blank" href="https://workstory.s3.amazonaws.com/assets/1741993/pexels-photo-345415.jpeg">
                                            <div class="asset-overlay"></div>
                                            <div class="css-crop bg-cover" style="background-image:url(https://workstory.s3.amazonaws.com/assets/1741993/pexels-photo-345415_cv.jpeg)"></div>
                                        </a>
                                        <div target="_blank" rel="nofollow" data-bind="link_url">
                                            <label class="text-center ellipsis empty" data-bind="title"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="Title"></span></label>
                                        </div>
                                    </div>
                                    <div class="asset col-sm-6" data-bind="assets">
                                        <a class="asset-thumb popup" data-bind="file_url" target="_blank" href="https://workstory.s3.amazonaws.com/assets/1741983/pexels-photo-70956.jpeg">
                                            <div class="asset-overlay"></div>
                                            <div class="css-crop bg-cover" style="background-image:url(https://workstory.s3.amazonaws.com/assets/1741983/pexels-photo-70956_cv.jpeg)"></div>
                                        </a>
                                        <div target="_blank" rel="nofollow" data-bind="link_url">
                                            <label class="text-center ellipsis empty" data-bind="title"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="Title"></span></label>
                                        </div>
                                    </div>
                                    <div class="asset col-sm-6" data-bind="assets">
                                        <a class="asset-thumb popup" data-bind="file_url" target="_blank" href="https://workstory.s3.amazonaws.com/assets/1741985/pexels-photo-531334.jpeg">
                                            <div class="asset-overlay"></div>
                                            <div class="css-crop bg-cover" style="background-image:url(https://workstory.s3.amazonaws.com/assets/1741985/pexels-photo-531334_cv.jpeg)"></div>
                                        </a>
                                        <div target="_blank" rel="nofollow" data-bind="link_url">
                                            <label class="text-center ellipsis empty" data-bind="title"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="Title"></span></label>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sections" id="positions" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Work experience</span></h3></header>
                            <article data-bind="contents" class="empty empty empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2009</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Present</span></span></h6></div>
                                <div class="article-body">
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Freelance Photographer</span></h5></div>
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Taylor Hill Photography</span></h4>
                                    <div id="react-tinymce-1031590" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sections" id="degrees" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Education">Education</span></h3></header>
                            <article data-bind="contents" class="empty empty empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2008</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2009</span></span></h6></div>
                                <div class="article-body">
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">Douglas College</span></h5></div>
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Diploma in Digital Photography</span></h4>
                                    <div id="react-tinymce-1031592" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty empty empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2005</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2007</span></span></h6></div>
                                <div class="article-body">
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">BCIT</span></h5></div>
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Diploma in Visual Communication</span></h4>
                                    <div id="react-tinymce-1031594" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
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