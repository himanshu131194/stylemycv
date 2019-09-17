export default ()=>{
    return (
         `
         <!DOCTYPE html>
<html class="bg-stripped animated fadeIn web-view" lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Social Worker - StyleMyCV</title>

    <meta name="description" content="Social Worker">
    <meta name="author" content="StyleMyCV.com">

    <meta name="robots" content="noindex, nofollow">

    <link rel="canonical" href="index.html">
    <link rel="alternate" hreflang="x-default" href="index.html" />
    <link rel="alternate" hreflang="en" href="index.html" />

    <link rel="stylesheet" type="text/css" href="/css/template.css" />
</head>

<body data-cv-id="3091121" class="cv-viewer">

    <header class="row centered vcv-header">

    </header>

    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700);
        @import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700);
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
            font-size: 14px;
            line-height: 1.6;
            background: white;
            padding: 0px;
            border-top: 2em solid #fbbc8d;
        }
        
        .cv-container .cv-content {
            padding: 3em 6.5%;
        }
        
        .cv-container h1,
        .cv-container h2,
        .cv-container h3,
        .cv-container h4,
        .cv-container h5,
        .cv-container h6 {
            font-family: "Roboto", "Open Sans", "Century Gothic", CenturyGothic, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
            margin-top: 0px;
        }
        
        .cv-container h1 {
            text-transform: uppercase;
            font-weight: 100;
            color: black;
            font-size: 400%;
            margin-bottom: 0.5em;
        }
        
        .cv-container h2 {
            font-size: 125%;
            color: #fbbc8d;
            text-transform: uppercase;
            font-weight: 300;
            overflow: auto;
        }
        
        .cv-container h3 {
            font-size: 125%;
            text-transform: uppercase;
            font-weight: 400;
            color: black;
            margin-bottom: 1.25em;
        }
        
        .cv-container h4 {
            font-size: 110%;
            font-weight: 500;
            color: black;
            margin-bottom: 0;
        }
        
        .cv-container h5,
        .cv-container h6 {
            font-size: 110%;
            font-weight: 400;
            color: black;
            margin-bottom: 0.5em;
        }
        
        .cv-container .profile-heading {
            text-align: center;
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
            margin-bottom: 0.5em;
        }
        
        .cv-container .vcard .user-contact li:before,
        .cv-container .vcard .user-links i {
            width: 1em;
            margin-right: 1em;
            color: black;
            opacity: 1;
        }
        
        .cv-container .vcard .user-thumb.visible {
            display: inline-block;
            margin: 0 auto 0.5em;
            width: 40%;
            max-width: 150px;
            border-radius: 100%;
        }
        
        .cv-container .vcard .user-thumb.visible .css-crop {
            padding-bottom: 100%;
            border-radius: 100%;
        }
        
        .cv-container .column-container {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            margin-top: 3.45em;
            padding-top: 3.45em;
            border-top: 1px solid black;
        }
        
        .cv-container .main {
            width: 70%;
            padding-right: 4%;
        }
        
        .cv-container .sidebar {
            width: 30%;
            padding-left: 4%;
        }
        
        .cv-container .sidebar .article-headings,
        .cv-container .sidebar .article-body {
            float: none !important;
            width: 100% !important;
        }
        
        .cv-container #profile article:after {
            content: '';
            clear: both;
        }
        
        .cv-container article:after {
            content: none;
            clear: left;
        }
        
        .cv-container .main.col-sm-8 {
            width: 70%;
        }
        
        .cv-container section {
            position: relative;
            margin-bottom: 3.45em;
        }
        
        .cv-container section .date-range {
            float: right;
            font-weight: 400;
            min-width: 260px;
            text-align: right;
        }
        
        .cv-container article {
            margin-bottom: 1.25em;
        }
        
        .cv-container article .article-headings.col-sm-3 {
            width: 20%;
            padding-right: 0px;
        }
        
        .cv-container article .article-body.col-sm-9 {
            width: 80%;
        }
        
        .cv-container article .left-col {
            padding-right: 0px;
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
            border: 1px solid #fbbc8d;
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
        
        .cv-container .portfolio .gallery {
            margin-top: 1.25em;
        }
        
        .cv-container .portfolio .row:after {
            clear: left;
        }
        
        .cv-container .portfolio .css-crop {
            -webkit-box-shadow: none;
            box-shadow: none;
            border: none;
        }
        
        .cv-container .portfolio label {
            font-weight: 400;
        }
        
        .cv-container .competency .competency-bar {
            margin: 1em 0;
            width: 100%;
            background-color: #eeeeee;
            border-radius: 12px;
            height: 12px;
        }
        
        .cv-container .competency .competency-level {
            background-color: #fbbc8d;
            border-radius: 12px;
            height: 12px;
        }
        
        .cv-container .competency:nth-child(2n+1) {
            clear: both;
        }
        
        @media (max-width: 768px) {
            .cv-container h1 {
                font-size: 250%;
                text-align: center;
            }
            .cv-container h2 {
                font-size: 150%;
                text-align: center;
            }
            .cv-container h3 {
                font-size: 125%;
            }
            .cv-container h6.date-range {
                text-align: left;
                float: none;
            }
            .cv-container .summary-text {
                padding: 0px;
            }
            .cv-container .main {
                float: none;
                width: 50% !important;
            }
            .cv-container .sidebar {
                float: none;
                width: 50% !important;
            }
            .cv-container article .article-headings,
            .cv-container article .article-body {
                width: 100% !important;
            }
        }
        
        .pdf .cv-container .chart-container {
            width: 600px !important;
        }
        
        .pdf .cv-container .cv-content {
            padding: 0px;
        }
        
        .pdf .cv-container .header-text:after {
            padding-right: 0em;
            content: "\\00a0";
        }
        
        .pdf .cv-container .portfolio .css-crop {
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        
        .pdf .cv-container .user-thumb {
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        
        .pdf .cv-container .cv-content {
            padding: 1em 6.5% 3em;
        }
        
        @media (max-width: 768px) {
            .web-view .cv-container .vcard .adr li:last-of-type,
            .web-view .cv-container .vcard .adr li.website {
                margin: 5px;
            }
            .web-view .cv-container .vcard .adr li:last-of-type a,
            .web-view .cv-container .vcard .adr li.website a {
                display: block;
                padding: 15px 0;
                text-decoration: underline;
            }
            .web-view .cv-container .vcard .adr li:last-of-type:before,
            .web-view .cv-container .vcard .adr li.website:before {
                display: none;
            }
        }
    </style>
    <div>
        <div class="cv-container animated fadeIn">
            <div class="cv-content">
                <section id="profile" class="profile-heading profile">
                    <article class="vcard " data-bind="content">
                        <div class="user-thumb" data-bind="thumb">
                            <div class="css-crop bg-cover"></div>
                        </div>
                        <div class="fn user-title">
                            <h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">Amanda Williamson</span></h1>
                            <h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">Social Worker</span></h2></div>
                    </article>
                </section>
                <div class="column-container">
                    <div class="main">
                        <section data-bind="sections" id="positions" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Work experience</span></h3></header>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2013</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Present</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Social Work Case Manager</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Province Medical University</span></h5></div>
                                    <div id="react-tinymce-1032264" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li><span><span></span></span><span><span>Provide individuals and families with psychosocial&nbsp;<span>assessments</span>&nbsp;</span>
                                                </span>
                                            </li>
                                            <li><span><span>Provide care needed to cope with chronic, acute, or terminal illnesses.</span></span>
                                            </li>
                                            <li><span><span>Provide care and case management and interventions to promote health, prevent disease, and address barriers to access to healthcare.</span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2009</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2012</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Mental Health Practitioner</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Kensington Medical Center</span></h5></div>
                                    <div id="react-tinymce-1032266" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li>Medical and prevention case management</li>
                                            <li>Mental Health assessments</li>
                                            <li><span>C</span>risis interventions</li>
                                            <li>Referrals to appropriate community resources.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Feb 2005</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2008</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Clinical Social Worker</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Provincial Hospital</span></h5></div>
                                    <div id="react-tinymce-1032268" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li>Medical and prevention case management</li>
                                            <li><span>Program coordination</span></li>
                                            <li><span><span>Making referrals for other services</span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2001</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2005</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Outpatient Case Worker</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">HealthWise</span></h5></div>
                                    <div id="react-tinymce-1032270" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li><span>M</span>ultidisciplinary team</li>
                                            <li>Conducted psychosocial assessments</li>
                                            <li><span>Post-discharge follow-up and community outreach</span></li>
                                            <li>Coordinated client discharge</li>
                                            <li>Coordinated departmental workshops and in-services</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Mar 1998</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2000</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Developmental Specialist</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Provincial Hospital</span></h5></div>
                                    <div id="react-tinymce-1032272" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li>Medical/surgical social worker and nursing home coordinator</li>
                                            <li><span>Provided patients with appropriate community referrals<br/></span></li>
                                            <li><span><span>Advising family care givers, providing patient education&nbsp;</span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sections" id="degrees" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Education">Education</span></h3></header>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">1996</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Master of Social Work</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">State University</span></h5></div>
                                    <div id="react-tinymce-1032274" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">1995</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Bachelor of Human Services</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">City Polytechnic</span></h5></div>
                                    <div id="react-tinymce-1032276" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                        </section>
                        <div data-bind="add-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-section-btn"></span></div>
                    </div>
                    <div class="sidebar">
                        <section data-bind="profile_sidebar" class="vcard profile" id="profile">
                            <article class="contact_info " data-bind="content">
                                <div class="adr">
                                    <ul class="user-contact">
                                        <li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">City State</span></li>
                                        <li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">(500) 500-5000 </span></li>
                                        <li class="email" data-bind="email"><a href="../cdn-cgi/l/email-protection#581d15191114181d15191114761b1715"><span class="__cf_email__" data-cfemail="13565e525a5f53565e525a5f3d505c5e">[email&#160;protected]</span></a></li>
                                    </ul>
                                    <ul class="user-links user-websites" data-bind="websites"></ul>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Summary</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1032278" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <p>Dedicated social work case manager with years of experience in patient care and rehabilitation</p>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="strengths" class="strengths">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Skills">Skills</span></h3></header>
                            <article class="competency " data-bind="contents">
                                <div class="article-headings">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">Program Design</span></h6></div>
                                <div class="article-body competency">
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:100%"></div>
                                    </div>
                                    <div id="react-tinymce-1032280" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                            <article class="competency " data-bind="contents">
                                <div class="article-headings">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">Communication</span></h6></div>
                                <div class="article-body competency">
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:100%"></div>
                                    </div>
                                    <div id="react-tinymce-1032282" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                            <article class="competency " data-bind="contents">
                                <div class="article-headings">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">Counselling</span></h6></div>
                                <div class="article-body competency">
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:100%"></div>
                                    </div>
                                    <div id="react-tinymce-1032284" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                            <article class="competency " data-bind="contents">
                                <div class="article-headings">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">Health Administration</span></h6></div>
                                <div class="article-body competency">
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:100%"></div>
                                    </div>
                                    <div id="react-tinymce-1032286" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                            <article class="competency " data-bind="contents">
                                <div class="article-headings">
                                    <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">Coaching</span></h6></div>
                                <div class="article-body competency">
                                    <div class="competency-bar">
                                        <div class="competency-level" data-bind="level" style="width:100%"></div>
                                    </div>
                                    <div id="react-tinymce-1032288" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story_SHExOyL6dC" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Volunteer Experience</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1032290" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li>Volunteer training Certificate</li>
                                        <li><span>Social Officer, Health Club</span></li>
                                        <li><span><span>Local Women's Centre</span></span>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                        <div data-bind="add-sidebar-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-sidebar-section-btn"></span></div>
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