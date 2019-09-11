export default ()=>{
     return (
         `
         <!DOCTYPE html>
         <html class="bg-stripped animated fadeIn web-view" lang="en" dir="ltr">

         <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>John Mc Coy - Account Executive  - VisualCV</title>
            <meta name="description" content="Account Executive  - City, State">
            <meta name="robots" content="noindex, nofollow">
            <link rel="canonical" href="index.html">
            <link rel="alternate" hreflang="x-default" href="index.html" />
            <link rel="alternate" hreflang="en" href="index.html" />
            <link rel="stylesheet" type="text/css" href="/css/template.css" />
         </head>

  <body data-cv-id="800068" class="cv-viewer">

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
            margin-bottom: 0.25em;
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
            margin-bottom: 1.75em;
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
                                    <div class="css-crop bg-cover" style="background-image:url(https://www.visualcv.com/app/null)"></div>
                                </div>
                                <div class="fn user-title">
                                    <h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">John McCoy</span></h1>
                                    <h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">Account Executive </span></h2></div>
                                <ul class="user-contact">
                                    <li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">Palo Alto, CA </span></li>
                                    <li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">416-000-0122</span></li>
                                    <li class="email" data-bind="email"><a href="#"><span class="__cf_email__">johndoe@email.com</span></a></li>
                                    </ul>
                                <ul class="user-links user-websites" data-bind="websites">
                                    <li class="website"><a href="http://www.linkedin.com/in/yournamehere" target="_blank" rel="noopener noreferrer nofollow"><i class="fa fa-fw fa-linkedin"></i> linkedin.com/in/yournamehere</a></li>
                                </ul>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story_zPZYT1YuvL" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Summary</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031472" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <p><span>Sales specialist with a comprehensive background supporting account management teams leveraging database management, teamwork, computer and interpersonal skills. Major strengths in leadership, organization, and attention to detail as well as verbal and written communication skills. Exercises exceptional judgment and works both independently and within a group setting. A well-organized, solutions focused professional who takes pride in work and fosters collaborative and positive client relationships. Adept at driving increased revenues through the identification of new sales opportunities. Skilled in Word, Excel, PowerPoint, Access, and Outlook.</span></p>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Key Skills</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031474" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li>Sales Methodology</li>
                                        <li>Relationship Building</li>
                                        <li>Leads Generation</li>
                                        <li>Opportunity Identification</li>
                                        <li>Client Relations</li>
                                        <li>Profit Generation</li>
                                        <li>Value Added Selling</li>
                                        <li>Team Collaboration</li>
                                        <li>Negotiation Techniques</li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story_f5AjW9ckAy" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Professional Development</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031476" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li>Level 2 6 Sigma Sales Executive</li>
                                        <li>CPSC Certified&nbsp;</li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                        <div data-bind="add-sidebar-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-sidebar-section-btn"></span></div>
                    </div>
                    <div class="main">
                        <section data-bind="sections" id="positions" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Work experience</span></h3></header>
                            <article data-bind="contents" class="empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2014</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Present</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Sales
Support Specialist</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">QuickCloud Inc.</span></h5></div>
                                    <div id="react-tinymce-1031478" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p>Performed a full range of administrative sales support duties for 5 Account Managers. Drafted and prepared reports and correspondence and managed domestic travel arrangements. Maintained customer database, screened/answered telephone calls and handled general office management duties. Facilitated Account Managers in the development of sales and marketing collateral.&nbsp; sdasda</p>
                                        <ul>
                                            <li>Managed and updated Salesforce customer database of over 10,000 current and prospective clients.</li>
                                            <li>Created and generated monthly sales reports for Account Management team charged with producing annual revenues of $25.8M.</li>
                                            <li>Negotiated up to 5 order status issues daily with Customer Service and the manufacturing facility.</li>
                                            <li>Supported shipping department with a volume of approximately 75-100 shipments a week.</li>
                                            <li>Trained and supervised Receptionist whose duties included accounts payable and time reporting for 15 employees.</li>
                                            <li>Conceptualized, implemented and tracked quarterly sales promotional programs resulting in a 10% increase in customer contacts and approximately $275,000 in additional sales.</li>
                                            <li>Spearheaded &ldquo;Post Order Follow-Up&rdquo; Program for tracking large orders after order placement. Program was instituted across the South Central Region for tracking as many as 1250 orders per month.</li>
                                            <li>Coordinated office decommissioning with successful transition of equipment, supplies and training of new support staff that resulted in a $100,000 per month cost reduction.</li>
                                            <li>Designed, formatted and edited &ldquo;The Challenge,&rdquo; a company-wide newsletter distributed to approximately 500 administrative and management personnel.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2013</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2014</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Customer Service Representative</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Supportly.com</span></h5></div>
                                    <div id="react-tinymce-1031480" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <p>Supported field service operations and in-house service operations for equipment. Daily customer communication, data entry and database management. Assisted in transitioning the local service center to the region service center. </p>
                                        <ul>
                                            <li>Supported seven field service technicians responsible for repairs of our color printers, and 15 in-house service technicians responsible for repairs of test and measurement equipment.</li>
                                            <li>Processed and tracked as many as 20-30 pieces of test and measurement equipment brought in for repair on a weekly basis.</li>
                                            <li>Dispatched field service technicians to on-site locations for printer repairs, handling approximately 30-50 calls per day.</li>
                                            <li>Followed up with clients following service to ensure 100% client satisfaction and upsell additional services based on client requirements.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sections" id="degrees" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Education">Education</span></h3></header>
                            <article data-bind="contents" class="empty empty empty empty empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2008</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2012</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Bachelor of Science, Business
Administration</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">Tuscon, AZ </span></h5></div>
                                    <div id="react-tinymce-1031482" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
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