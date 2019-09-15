export default ()=>{
    return(
        `<!DOCTYPE html>
        <html class="bg-stripped animated fadeIn web-view" lang="en" dir="ltr">
        
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        
            <title>Hudson Jones - Researcher </title>
        
            <meta name="description" content="Researcher">
        
            <meta name="robots" content="noindex, nofollow">
        
            <link rel="canonical" href="index.html">
            <link rel="alternate" hreflang="x-default" href="index.html" />
            <link rel="alternate" hreflang="en" href="index.html" />
        
            <link rel="stylesheet" type="text/css" href="/css/template.css" />
        </head>
        
        <body data-cv-id="3095091" class="cv-viewer">
        
            <header class="row centered vcv-header">
        
            </header>
        
            <style type="text/css">
                @import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700);
                @import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700);
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
                    font-size: 15px;
                    font-weight: 400;
                    line-height: 1.5;
                }
                
                .cv-container h1,
                .cv-container h2,
                .cv-container h3 {
                    font-family: "Roboto", "Open Sans", "Century Gothic", CenturyGothic, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
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
                
                .cv-container h1 {
                    font-size: 200%;
                    font-weight: 600;
                    line-height: 1.4;
                    text-align: center;
                    margin: 0;
                }
                
                .cv-container h2 {
                    font-size: 125%;
                    font-weight: 600;
                    line-height: 1.4;
                    text-align: center;
                    margin: 0;
                }
                
                .cv-container h3 {
                    font-weight: 600;
                    font-size: 125%;
                    margin-bottom: 1.5em;
                }
                
                .cv-container h4,
                .cv-container h5,
                .cv-container h6 {
                    font-weight: 700;
                    font-size: 110%;
                }
                
                .cv-container h4 {
                    font-weight: 500;
                    font-size: 100%;
                    margin-bottom: 0.5em;
                }
                
                .cv-container h5 {
                    color: black;
                    display: inline;
                }
                
                .cv-container strong {
                    font-weight: 700;
                }
                
                .cv-container section {
                    clear: both;
                    margin-bottom: 2em;
                }
                
                .cv-container #profile {
                    text-align: center;
                    padding-bottom: 1px;
                    border-bottom: 1px solid black;
                }
                
                .cv-container #profile .vcard {
                    margin-bottom: 0;
                    padding-bottom: 1.5em;
                    border-bottom: 4px solid black;
                }
                
                .cv-container #profile .vcard .user-thumb.visible {
                    width: 100px;
                    height: 100px;
                    display: inline-block;
                }
                
                .cv-container #profile .vcard .user-thumb.visible .bg-cover {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                }
                
                .cv-container #profile .user-contact,
                .cv-container #profile .user-links {
                    display: inline-block;
                    margin-top: 1em;
                }
                
                .cv-container #profile .user-contact li,
                .cv-container #profile .user-links li {
                    display: inline-block;
                    margin-left: 1em;
                    padding-left: 1em;
                    border-left: 1px solid black;
                    white-space: nowrap;
                }
                
                .cv-container #profile .user-contact i,
                .cv-container #profile .user-links i {
                    display: none;
                }
                
                .cv-container #profile .user-contact li:first-child {
                    margin-left: 0;
                    padding-left: 0;
                    border-left: none;
                }
                
                .cv-container #summary header {
                    border-bottom: none;
                    padding-bottom: 0;
                }
                
                .cv-container #summary header .header-text {
                    border-bottom: 0;
                    text-align: center;
                }
                
                .cv-container header {
                    border-bottom: 2px solid black;
                    padding-bottom: 2px;
                    margin-bottom: 1.5em;
                }
                
                .cv-container header .header-text {
                    border-bottom: 4px solid black;
                    margin-bottom: 0;
                }
                
                .cv-container article {
                    margin-bottom: 1em;
                }
                
                .cv-container .date-range {
                    float: right;
                    width: 350px;
                    text-align: right;
                }
                
                .cv-container .dated_story header + article {
                    border-top: none;
                    padding-top: 0;
                }
                
                .cv-container .dated_story article {
                    border-top: 1px solid black;
                    padding-top: 0.5em;
                }
                
                .cv-container article.competency {
                    vertical-align: top;
                    display: inline-block;
                    width: 50%;
                }
                
                .cv-container article.competency:nth-child(2n) {
                    padding-right: 3%;
                }
                
                .cv-container article.competency:nth-child(2n+1) {
                    padding-left: 3%;
                }
                
                .cv-container article.competency .competency-bar {
                    margin: 1em 0;
                    width: 100%;
                    background-color: #eaeaea;
                    height: 3px;
                }
                
                .cv-container article.competency .competency-level {
                    background-color: black;
                    height: 3px;
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
                    /* Improve usability of links for mobile view by increasing click target to 45px
            based on google usability review */
                    .web-view .cv-container #profile .user-links,
                    .web-view .cv-container #profile .user-contact {
                        margin-top: 0;
                        width: 100%;
                    }
                    .web-view .cv-container #profile .user-contact li,
                    .web-view .cv-container #profile .user-links li {
                        border: none;
                        width: 100%;
                        margin: 0;
                    }
                    .web-view .cv-container #profile .user-contact li:last-of-type,
                    .web-view .cv-container #profile .user-links li:last-of-type,
                    .web-view .cv-container #profile .user-contact li.website,
                    .web-view .cv-container #profile .user-links li.website {
                        margin-top: 5px;
                        padding-left: 0;
                    }
                    .web-view .cv-container #profile .user-contact li:last-of-type a,
                    .web-view .cv-container #profile .user-links li:last-of-type a,
                    .web-view .cv-container #profile .user-contact li.website a,
                    .web-view .cv-container #profile .user-links li.website a {
                        display: inline-block;
                        margin-top: 0;
                        padding: 15px;
                        border: 1px solid #428bca;
                        width: 100%;
                        text-decoration: underline;
                        transition: 200ms;
                        text-decoration: none;
                    }
                    .web-view .cv-container #profile .user-contact li:last-of-type a:active,
                    .web-view .cv-container #profile .user-links li:last-of-type a:active,
                    .web-view .cv-container #profile .user-contact li.website a:active,
                    .web-view .cv-container #profile .user-links li.website a:active {
                        background-color: #e3e3e3;
                        transition: 200ms;
                    }
                }
            </style>
            <div>
                <div class="cv-container animated fadeIn">
                    <div class="cv-content single-column">
                        <section id="profile" class="profile">
                            <article class="vcard " data-bind="content">
                                <div class="user-thumb" data-bind="thumb">
                                    <div class="css-crop bg-cover" style="background-image:url(https://www.visualcv.com/app/null)"></div>
                                </div>
                                <div class="fn user-title">
                                    <h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">Hudson Jones</span></h1>
                                    <div class="block-separator"></div>
                                    <h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">Researcher</span></h2></div>
                                <ul class="user-contact">
                                    <li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">City State</span></li>
                                    <li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">(500) 500-5000 </span></li>
                                    <li class="email" data-bind="email"><a href="../cdn-cgi/l/email-protection#6d08000c04012d08000c0401430e0200"><span class="__cf_email__" data-cfemail="4e2b232f27220e2b232f2722602d2123">[email&#160;protected]</span></a></li>
                                </ul>
                                <ul class="user-links user-websites" data-bind="websites"></ul>
                                <div class="block-separator"></div>
                            </article>
                        </section>
                        <section data-bind="sections" id="summary" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Summary">Summary</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1032394" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <p><span></span></p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <ul>
                                                        <li><span>Research Management</span></li>
                                                        <li><span><span>Commissioned research</span></span>
                                                        </li>
                                                        <li><span><span><span>Grant proposals</span></span>
                                                            </span>
                                                        </li>
                                                        <li><span><span><span><span>Process Development</span></span>
                                                            </span>
                                                            </span>
                                                        </li>
                                                        <li><span><span><span><span><span>Reporting</span></span>
                                                            </span>
                                                            </span>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <ul>
                                                        <li><span>Data analysis</span></li>
                                                        <li><span><span>P</span>roduct development</span>
                                                        </li>
                                                        <li><span>Market research</span></li>
                                                        <li><span>User experience research</span></li>
                                                        <li><span>Survey design</span></li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <ul>
                                                        <li><span>Prototyping</span></li>
                                                        <li><span>Product benchmarking</span></li>
                                                        <li><span>Guerilla testing</span></li>
                                                        <li><span>Contextual inquiry</span></li>
                                                        <li><span><span>Sustainability</span></span>
                                                        </li>
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
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Work experience</span></h3></header>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2014</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Present</span></span></h6></div>
                                <div class="article-body">
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Research Associate</span></h5></div>
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Institute of Technology and Systems</span></h4>
                                    <div id="react-tinymce-1032396" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li>Publishing topical white papers&nbsp;focusing on residential, commercial and logistics sectors</li>
                                            <li>Conducting market surveys to gauge decision drivers</li>
                                            <li>Analyzing economic and demographic metrics for market and feasibility studies</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2013</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2013</span></span></h6></div>
                                <div class="article-body">
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Research Intern</span></h5></div>
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Institute of Aerospace Technology</span></h4>
                                    <div id="react-tinymce-1032398" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li>Monitoring market trends associated with price and supply movement&nbsp;</li>
                                            <li>Handling media queries on trending&nbsp;industry&nbsp; topics</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2011</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2012</span></span></h6></div>
                                <div class="article-body">
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Enterprise Research Officer</span></h5></div>
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">University of State</span></h4>
                                    <div id="react-tinymce-1032400" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li>Developed data sets to regularly track demographic and economic data&nbsp;</li>
                                            <li>Analyzing major economies which influence industry needs</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2008</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2010</span></span></h6></div>
                                <div class="article-body">
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Research Analyst</span></h5></div>
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">University Development Program</span></h4>
                                    <div id="react-tinymce-1032402" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li>Completed thesis research, supervised by faculty mentor&nbsp;</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2008</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2009</span></span></h6></div>
                                <div class="article-body">
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Research fellow</span></h5></div>
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">University of State</span></h4>
                                    <div id="react-tinymce-1032404" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sections" id="degrees" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Education">Education</span></h3></header>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2007</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                <div class="article-body">
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">PHD Doctorate</span></h5></div>
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">University of State</span></h4>
                                    <div id="react-tinymce-1032406" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2005</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                <div class="article-body">
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">M. Tech</span></h5></div>
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">College of Engineering</span></h4>
                                    <div id="react-tinymce-1032408" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                            <article data-bind="contents" class="">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2001</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                <div class="article-body">
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">BSc. (Hons) International Business </span></h5></div>
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Institute of Business</span></h4>
                                    <div id="react-tinymce-1032410" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                </div>
                            </article>
                        </section>
                        <div data-bind="add-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-section-btn"></span></div>
                    </div>
                </div>
            </div>
        
            <footer class="vcv-footer">
                <p> </p>
            </footer>
        
        </body>
        
        </html>      
        `
    )
}