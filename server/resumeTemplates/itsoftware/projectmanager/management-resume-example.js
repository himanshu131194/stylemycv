export default ()=>{
    return(
        `
        <!DOCTYPE html>
        <html class="bg-stripped animated fadeIn web-view" lang="en" dir="ltr">
        
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        
            <title>Facilities &amp; Maintenance Manager</title>
            <meta name="description" content="Facilities &amp; Maintenance Manager">
        
            <meta name="robots" content="noindex, nofollow">
        
            <link rel="canonical" href="index.html">
            <link rel="alternate" hreflang="x-default" href="index.html" />
            <link rel="alternate" hreflang="en" href="index.html" />
        
            <link rel="stylesheet" type="text/css" href="/css/template.css" />
        </head>
        
        <body data-cv-id="718736" class="cv-viewer">
        
            <header class="row centered vcv-header">
        
            </header>
        
            <style type="text/css">
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
                
                .cv-container {
                    font-family: "Open Sans", "Century Gothic", CenturyGothic, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
                    font-size: 15px;
                    max-width: 960px;
                    padding: 0px;
                    color: black;
                }
                
                .cv-container .cv-content {
                    padding: 5em 10%;
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
                
                .cv-container h2 {
                    overflow: auto;
                }
                
                .cv-container h1,
                .cv-container h4 {
                    font-weight: bold;
                }
                
                .cv-container h1,
                .cv-container h2,
                .cv-container h3,
                .cv-container h4 {
                    color: #3d85c6;
                }
                
                .cv-container h1 {
                    font-size: 250%;
                    line-height: 1.25em;
                    margin-bottom: 0.2em;
                    overflow: hidden;
                }
                
                .cv-container h2 {
                    font-size: 125%;
                }
                
                .cv-container h3 {
                    font-size: 150%;
                    font-weight: 300;
                }
                
                .cv-container h4 {
                    font-size: 100%;
                }
                
                .cv-container h5 {
                    color: #777777;
                    font-size: 100%;
                    font-weight: 300;
                }
                
                .cv-container h6 {
                    font-size: 100%;
                }
                
                .cv-container p {
                    margin-bottom: 0.6em;
                }
                
                .cv-container section {
                    margin-top: 1.5em;
                }
                
                .cv-container section > header {
                    width: 100%;
                    margin-bottom: 1.5em;
                    border-bottom: 1px solid #3d85c6;
                }
                
                .cv-container section.profile {
                    margin-top: 0px;
                }
                
                .cv-container section.profile .logo {
                    float: right;
                    width: 170px;
                }
                
                .cv-container section.profile .logo .css-crop {
                    background-image: url(https://www.visualcv.com/app/null);
                }
                
                @media (max-width: 768px) {
                    .cv-container section.profile .logo {
                        float: none;
                        margin: 0px auto;
                    }
                }
                
                .cv-container section.profile .logo {
                    display: none;
                }
                
                .cv-container section .article-headings {
                    float: left;
                    width: 28%;
                }
                
                .cv-container section .article-body {
                    padding-left: 28%;
                }
                
                .cv-container article {
                    margin-bottom: 0.75em;
                }
                
                .cv-container article .article-headings.col-sm-3 {
                    width: 21%;
                    padding-right: 0px;
                }
                
                .cv-container article .article-body.col-sm-9 {
                    width: 79%;
                }
                
                .cv-container article .article-body {
                    margin: 0px;
                }
                
                .cv-container article.chart .article-headings,
                .cv-container article.chart .article-body {
                    float: none;
                    padding: 0;
                    width: 100%;
                }
                
                .cv-container #references .article-body {
                    padding-left: 0px;
                }
                
                .cv-container .user-thumb {
                    width: 15%;
                    float: right;
                    min-width: 100px;
                    margin-bottom: 1em;
                    border: 1px solid #3d85c6;
                    -webkit-box-shadow: 1px 1px 3px 0px #cccccc;
                    box-shadow: 1px 1px 3px 0px #cccccc;
                }
                
                .cv-container .user-contact li,
                .cv-container .user-links li {
                    font-size: 95%;
                    margin-bottom: 0.25em;
                    overflow: visible;
                    white-space: nowrap;
                    display: inline-block;
                }
                
                .cv-container .user-links li {
                    margin-right: 0.5em;
                }
                
                .cv-container .user-contact li:before {
                    content: "|";
                    color: #cccccc;
                    margin: 0px 0.25em;
                }
                
                .cv-container .user-contact li:first-child:before {
                    content: initial;
                }
                
                @media (max-width: 768px) {
                    .cv-container .vcard {
                        text-align: center;
                    }
                    .cv-container .user-contact {
                        padding: 0px;
                    }
                    .cv-container .user-thumb {
                        position: relative;
                        margin: 1em auto !important;
                        display: block;
                        float: none !important;
                        width: auto;
                        max-width: 150px;
                    }
                }
                
                .cv-container .user-links i {
                    opacity: 0.75;
                }
                
                .cv-container .user-thumb {
                    float: left;
                    margin-right: 1em;
                }
                
                .cv-container .edit-new {
                    width: 100%;
                    margin-bottom: 10px;
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
                    border: 1px solid #3d85c6;
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
                
                .cv-container .competency .competency-bar {
                    margin: 0.5em 0px 0.75em;
                    width: 100%;
                    background-color: #dedede;
                    border-radius: 2px;
                    height: 8px;
                    -webkit-transform: skewX(-45deg);
                    -ms-transform: skewX(-45deg);
                    -moz-transform-origin: skewX(-45deg);
                    -o-transform-origin: skewX(-45deg);
                    transform: skewX(-45deg);
                }
                
                .cv-container .competency .competency-level {
                    background-color: #3d85c6;
                    border-radius: 2px;
                    height: 100%;
                }
                
                .cv-container .competency .article-headings {
                    float: left;
                    width: 33%;
                }
                
                .cv-container .competency .article-body {
                    padding-left: 0%;
                    float: right;
                    width: 65%;
                }
                
                @media (max-width: 768px) {
                    .cv-container .summary-text {
                        padding: 0px;
                    }
                    .cv-container article .article-headings,
                    .cv-container article .article-body {
                        padding-left: 0;
                        width: 100% !important;
                    }
                }
                
                .pdf .cv-container .chart-container {
                    width: 850px !important;
                }
                
                .pdf .cv-container .cv-content {
                    padding: 0px;
                }
                
                .pdf .cv-container .portfolio .css-crop {
                    box-shadow: none;
                }
                
                .pdf .cv-container .user-thumb {
                    box-shadow: none;
                }
                
                @media (max-width: 768px) {
                    .web-view .cv-container .vcard .user-contact {
                        margin-top: 15px;
                    }
                    .web-view .cv-container .vcard .user-contact li,
                    .web-view .cv-container .vcard .user-links li {
                        width: 100%;
                    }
                    .web-view .cv-container .vcard .user-contact li:last-of-type,
                    .web-view .cv-container .vcard .user-links li:last-of-type,
                    .web-view .cv-container .vcard .user-contact li.website,
                    .web-view .cv-container .vcard .user-links li.website {
                        margin: 15px 0 0 0;
                        width: 100%;
                        text-align: center;
                        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
                    }
                    .web-view .cv-container .vcard .user-contact li:last-of-type:active,
                    .web-view .cv-container .vcard .user-links li:last-of-type:active,
                    .web-view .cv-container .vcard .user-contact li.website:active,
                    .web-view .cv-container .vcard .user-links li.website:active {
                        box-shadow: none;
                    }
                    .web-view .cv-container .vcard .user-contact li:last-of-type a,
                    .web-view .cv-container .vcard .user-links li:last-of-type a,
                    .web-view .cv-container .vcard .user-contact li.website a,
                    .web-view .cv-container .vcard .user-links li.website a {
                        padding: 15px;
                        display: block;
                        border: 1px solid #6aa84f;
                        color: #6aa84f;
                        transition: 200ms;
                    }
                    .web-view .cv-container .vcard .user-contact li:last-of-type a:active,
                    .web-view .cv-container .vcard .user-links li:last-of-type a:active,
                    .web-view .cv-container .vcard .user-contact li.website a:active,
                    .web-view .cv-container .vcard .user-links li.website a:active {
                        background-color: #6aa84f;
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
                    <div class="cv-content single-column">
                        <section data-bind="sections" id="profile" class="profile">
                            <article class="vcard " data-bind="content">
                                <div class="logo">
                                    <div class="css-crop bg-contain"></div>
                                </div><img class="user-thumb photo" data-bind="thumb" />
                                <div class="fn user-title">
                                    <h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">Marsha Williams</span></h1></div>
                                <h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">Facilities &amp;
        Maintenance Manager</span></h2>
                                <ul class="user-contact">
                                    <li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">City State</span></li>
                                    <li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">(500) 500-5000 </span></li>
                                    <li class="email" data-bind="email"><a href="../cdn-cgi/l/email-protection#90f5fdf1f9fcd0f5fdf1f9fcbef3fffd"><span class="__cf_email__" data-cfemail="046169656d68446169656d682a676b69">[email&#160;protected]</span></a></li>
                                </ul>
                                <ul class="user-links user-websites" data-bind="websites"></ul>
                            </article>
                        </section>
                        <section data-bind="sections" id="summary" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Summary">Summary</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031268" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li style="text-align: left;">&nbsp;Equipped with a strategic mindset that facilitates the formulation and implementation of strategies that have significantly improved preventative maintenance and cost efficiency.</li>
                                        <li style="text-align: left;">Practiced in project and construction management including initial planning and scoping, scheduling, sourcing and procurement of materials and testing of integrated utility management systems.</li>
                                        <li style="text-align: left;">Recognized as a builder and leader of high performance teams by engendering a culture of trust and collaboration and valuing ongoing training and development to build skills and professionalism.</li>
                                        <li style="text-align: left;">Exemplary interpersonal, leadership, communication, and presentation skills.</li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sections" id="text_story" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Core Competencies</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031270" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <ul>
                                                        <li><span style="line-height: 1.42857143; background-color: transparent;">Facilities Management</span></li>
                                                        <li>Maintenance Management</li>
                                                        <li>Preventative Maintenance</li>
                                                        <li>Site Management</li>
                                                        <li>General Management</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <ul>
                                                        <li><span style="line-height: 1.42857143; background-color: transparent;">Team Leadership</span></li>
                                                        <li>Project Management</li>
                                                        <li>Budget Management</li>
                                                        <li>Strategic Planning &amp; Analysis</li>
                                                        <li>Operational Planning</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <ul>
                                                        <li><span style="line-height: 1.42857143; background-color: transparent;">Process Improvements</span></li>
                                                        <li>Relationship Management</li>
                                                        <li>OH&amp;S</li>
                                                        <li>Regulatory Compliance/Audits</li>
                                                        <li>Engineering</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sections" id="positions" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Work experience</span></h3></header>
                            <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2009</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2014</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Facilities
        &amp; Maintenance Manager </span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">GILLETTE CHILDREN&#x27;S SPECIALITY HEALTHCARE</span></h5></div>
                                    <div id="react-tinymce-1031272" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p>Directed a 65-member staff encompassing supervisors, housekeepers and maintenance mechanics, overseeing activities and monitoring quality of work. Engendered a strong collaborative work culture, driving efficiency while managing maintenance and housekeeping operations within a healthcare environment. Proficiently managed budgeting and planning including healthcare environmental cleaning, preventative maintenance and external projects.</p>
                                        <ul>
                                            <li>Spearheaded various improvement initiatives, including establishing 24/7 equipment maintenance group that significantly improved patient issue response time.</li>
                                            <li>Implemented new preventative maintenance system and enhanced hospital equipment tracking through evaluation and validation Footprint software.</li>
                                            <li>Conceptualized, executed and maintained maintenance procedures for all equipment, significantly increasing consistency and quality.</li>
                                            <li>Successfully constructed new buildings and provided expertise to evaluate installed systems.</li>
                                            <li>Efficiently monitored building systems including Mechanical, Electrical, Electronic, Plumbing, HVAC and Security using UHL energy management system.</li>
                                            <li>Developed inventory control system in collaboration with outside vendor that enriched quality by evaluating housekeeping and maintenance supplies and orders.</li>
                                            <li>Formulated and sustained strong relationships with external vendors/contractors to ensure efficiency in work flow.</li>
                                            <li>Designed, reviewed and updated policies and procedures and established strict guidelines to ensure that all aspects of health, safety and risk management were strictly adhered to.</li>
                                            <li>Passed 3 external Joint Commission accreditation surveys.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2005</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2009</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Owner
        / Operator </span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">SMITH INVESTMENTS, LLC.</span></h5></div>
                                    <div id="react-tinymce-1031274" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p>Seamlessly oversaw all aspects pertaining to the management of 4 duplexes and 4 single-family homes, ensuring that all facilities were maintained at the highest standards. Proactively addressed tenant requests and ensured all inquiries were addressed in a timely manner. Adequately resolved issues utilizing a high level of empathetic listening and diplomacy.</p>
                                        <ul>
                                            <li>Conducted maintenance, proactively identifying potential issues to ensure optimal cost efficiency.</li>
                                            <li>Identified, negotiated with and managed outside contractors and vendors, building productive relationships that enabled projects to be completed within agreed time frames.</li>
                                            <li>Leveraged strong customer service skills to build relationships with tenants and prospective tenants.</li>
                                            <li>Directed all administrative aspects of facilities/property management including budget planning and management, basic account maintenance and documentation.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2007</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2008</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Customer Engineer</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">CELESTICA, INC</span></h5></div>
                                    <div id="react-tinymce-1031276" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p>Managed printed circuit assembly (PCA), supporting manufacturing engineering team by successfully working on new production processes and developing procedures and tooling. Delivered documentation for manufacturing and ensured delivery of high quality products to key customers within aerospace, defense, medical and telecommunications industries.</p>
                                        <ul>
                                            <li>Rolled out various strategies to increase customer involvement including maintaining communications during and post building NFI, and setting up conference calls and meetings to evaluate and resolve issues and changes.</li>
                                            <li>Collaborated with customers and project team leaders to convert customer requirements into cost efficient factory processes, drafting project time estimates, documenting associated factory support activities and formulating timelines.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">1999</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2007</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Equipment Maintenance Manager</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">MEDTRONIC, INC</span></h5></div>
                                    <div id="react-tinymce-1031278" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p>Efficiently supported and directed an equipment maintenance department consisting of 14 electro-mechanical technicians and 2 senior inventory analysts, covering four production divisions. Managed team in performing preventative maintenance and managing projects and construction. Competently oversaw all activities, managed budgets, developed plans and monitored staff performance and quality of work.</p>
                                        <ul>
                                            <li>Achieved quality improvement by validating Xsite system, along with designing, and facilitating training for 200 employees on system usage.</li>
                                            <li>Migrated 1,500 items of equipment from DOS-based system to new Xsite maintenance system and established preventative maintenance schedule.</li>
                                            <li>Monitored costs yearly by developing parts ordering system, supporting production equipment turnaround time, setting up 17 credit cards one for each cost center.</li>
                                            <li>Designed, organized, and managed $1.5M in spare parts, significantly reducing production downtime.</li>
                                            <li>Steered maintenance and engineering team and collaborated with outside vendor in planning and scheduling installation and setup of $10M of new equipment.</li>
                                            <li>Passed 10 internal and 5 external audits, working in regulated class 100 clean room environment by maintaining 1% humidity for building lithium batteries, and meeting critical specifications.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sections" id="degrees" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Education">Education</span></h3></header>
                            <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Bachelor of Science in Electrical
        Engineering</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">Prairie View A&amp;M
        University</span></h5></div>
                                    <div id="react-tinymce-1031280" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sections" id="text_story_514570" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Technology</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031282" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li>Proficient in a variety of maintenance and utility management systems</li>
                                        <li><strong>Microsoft Office Suite</strong>: Word, Excel, Access, Outlook, PowerPoint</li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                        <div data-bind="add-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-section-btn"></span></div>
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