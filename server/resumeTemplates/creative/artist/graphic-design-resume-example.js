export default ()=>{
    return (
        `
        <!DOCTYPE html>
<html class="bg-stripped animated fadeIn web-view" lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Graphic Designer</title>

    <meta name="description" content="Graphic Designer">

    <meta name="robots" content="noindex, nofollow">

    <link rel="canonical" href="index.html">
    <link rel="alternate" hreflang="x-default" href="index.html" />
    <link rel="alternate" hreflang="en" href="index.html" />

    <link rel="stylesheet" type="text/css" href="/css/template.css" />
</head>

<body data-cv-id="2543971" class="cv-viewer">

    <header class="row centered vcv-header">
   
    </header>

    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,600);
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
            background-image: url("https://www.visualcv.com/images/textures/diagonal_thin.png");
            background: transparent;
            font-family: "Open Sans", "Century Gothic", CenturyGothic, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
            font-weight: 300;
            font-size: 14px;
            padding: 0px;
            color: black;
        }
        
        .cv-container h2,
        .cv-container h3 {
            font-family: "Raleway", "Didot", "Hoefler Text", Garamond, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
        }
        
        .cv-container h4 {
            font-weight: bold;
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
            font-weight: 300;
            font-size: 350%;
            margin-bottom: 0;
            color: #0b5394;
        }
        
        .cv-container h2 {
            font-size: 175%;
            font-weight: 300;
            margin: 0.75em 2rem;
        }
        
        .cv-container h3 {
            font-size: 150%;
            font-weight: 700;
            text-transform: uppercase;
        }
        
        .cv-container h4,
        .cv-container h5,
        .cv-container h6 {
            font-size: 100%;
        }
        
        .cv-container h5 {
            font-weight: 300;
        }
        
        .cv-container h6 {
            color: #555;
        }
        
        .cv-container .banner {
            position: relative;
            background: white;
        }
        
        .cv-container .banner:after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 70px;
            z-index: 100;
            height: 0px;
            width: 0px;
            -webkit-filter: drop-shadow(rgba(0, 0, 0, 0.0980392) 0px 3px 2px);
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-top: 12px solid #ffffff;
        }
        
        .cv-container .header-bar {
            margin-bottom: 5px;
            background: black;
        }
        
        .cv-container .header-bar .navbar {
            position: relative;
            min-height: 50px;
            margin-bottom: 20px;
            border: 1px solid transparent;
        }
        
        .cv-container .header-bar .navbar-nav {
            margin: 7.5px -15px;
        }
        
        .cv-container .header-bar .navbar-nav > li > a {
            padding-top: 10px;
            padding-bottom: 10px;
            line-height: 20px;
            display: inline-block;
        }
        
        @media (min-width: 768px) {
            .cv-container .header-bar .navbar-nav {
                float: left;
                margin: 0;
            }
            .cv-container .header-bar .navbar-nav > li {
                float: left;
                line-height: 37px;
            }
            .cv-container .header-bar .navbar-nav > li > a {
                padding-top: 15px;
                padding-bottom: 15px;
            }
        }
        
        .cv-container .header-bar .navbar-nav > li > a {
            padding: 10px 20px;
        }
        
        .cv-container .header-bar .navbar-nav > li > a:hover,
        .cv-container .header-bar .navbar-nav > li > a:focus {
            background: rgba(255, 255, 255, 0.3);
        }
        
        @media (max-width: 768px) {
            .cv-container .header-bar .dropdown-menu > li > a {
                color: white !important;
            }
        }
        
        .cv-container .header-bar .navbar-nav {
            height: 37px;
            overflow: hidden;
        }
        
        .cv-container .header-bar .navbar-nav > li > a {
            color: white;
            border-right: 1px solid #333333;
        }
        
        .cv-container .cv-content {
            background-color: #f2f7fb;
            padding-bottom: 50px;
            padding: 0 !important;
        }
        
        .cv-container .cv-content .table {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
        }
        
        .cv-container .vcard .user-contact {
            list-style: none;
        }
        
        .cv-container .vcard .user-contact i {
            text-align: center;
            width: 1.35em;
            color: #e6ebf0;
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
        
        .cv-container .vcard {
            padding: 0px;
        }
        
        .cv-container .vcard .logo {
            float: right;
            width: 170px;
        }
        
        .cv-container .vcard .logo .css-crop {
            background-image: url(https://www.visualcv.com/app/null);
        }
        
        @media (max-width: 768px) {
            .cv-container .vcard .logo {
                float: none;
                margin: 0px auto;
            }
        }
        
        .cv-container .vcard .logo {
            display: none;
        }
        
        .cv-container .vcard article,
        .cv-container .vcard section {
            margin: 0px;
        }
        
        .cv-container .vcard .logo {
            float: none;
            width: auto;
            padding: 10px;
        }
        
        .cv-container .vcard .logo .css-crop {
            padding-bottom: 74px;
        }
        
        .cv-container .vcard .user-title {
            padding: 1em 2em;
            width: 100%;
            display: block;
        }
        
        .cv-container .vcard .spacer {
            position: absolute;
            width: 30%;
            height: 100%;
            right: 0;
            top: 0;
        }
        
        .cv-container .vcard .spacer {
            background: #0b5394;
        }
        
        .cv-container .vcard .user-thumb {
            margin: 0px auto 2em auto;
            max-width: 160px;
            border-radius: 2px;
        }
        
        .cv-container .vcard .user-contact li,
        .cv-container .vcard .user-links li {
            white-space: initial;
            margin-bottom: 1.33333333em;
        }
        
        .cv-container .vcard .user-contact li:before,
        .cv-container .vcard .user-links li:before {
            opacity: 0.75;
        }
        
        .cv-container .sidebar {
            width: 30%;
            float: none;
            z-index: 1;
        }
        
        .cv-container .sidebar article {
            padding: 0em 2em;
        }
        
        .cv-container .sidebar header {
            width: 100%;
            position: relative;
            margin-bottom: 1.5em;
        }
        
        .cv-container .sidebar header .header-text {
            padding: 1em 1.5em;
            background: #e6ebf0;
            text-transform: uppercase;
            font-weight: 600;
            text-align: left;
            vertical-align: top;
        }
        
        .cv-container .sidebar header:after {
            content: " ";
            display: block;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
            border-width: 10px 15px 0px 15px;
            border-top-color: #e6ebf0;
            position: absolute;
            bottom: -10px;
            left: 15px;
            z-index: 1;
        }
        
        .cv-container .main {
            background: white;
            width: 70%;
            padding: 2rem;
        }
        
        .cv-container .main header {
            margin-bottom: 1em;
        }
        
        .cv-container .dated_story .article-headings {
            float: left;
            width: 14%;
            margin-right: 1%;
        }
        
        .cv-container .dated_story .article-body {
            float: left;
            width: 85%;
        }
        
        .cv-container section {
            position: relative;
        }
        
        .cv-container section .date-range {
            font-weight: normal;
        }
        
        .cv-container article {
            margin-bottom: 2em;
        }
        
        .cv-container [data-field="description"] {
            clear: both;
        }
        
        .cv-container .article-headings.col-sm-3 {
            width: 20%;
            padding-right: 0px;
        }
        
        .cv-container .article-body.col-sm-9 {
            width: 80%;
        }
        
        .cv-container .left-col {
            padding-right: 0px;
        }
        
        .cv-container .summary-header {
            display: none;
        }
        
        .cv-container .summary-text {
            font-size: 100%;
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
            border: 1px solid #0b5394;
            -webkit-box-shadow: 1px 1px 3px 0px #e6ebf0;
            box-shadow: 1px 1px 3px 0px #e6ebf0;
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
        
        .cv-container .portfolio .row {
            margin-left: -31.5px;
            margin-right: -31.5px;
        }
        
        .cv-container .portfolio .col-sm-4 {
            padding-left: 0;
            padding-right: 0;
        }
        
        .cv-container .portfolio .css-crop {
            border: 0;
        }
        
        .cv-container .portfolio label {
            display: none;
        }
        
        .cv-container .portfolio .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            padding: 2em 1.5em;
            z-index: 200;
            display: block;
            opacity: 0;
            background: rgba(255, 255, 255, 0.9);
            transition: opacity 0.75s ease;
            overflow: hidden;
        }
        
        .cv-container .portfolio .asset-title {
            text-align: center;
            font-weight: bold;
        }
        
        .cv-container .portfolio .asset-thumb {
            color: black !important;
        }
        
        .cv-container .portfolio .asset-thumb:hover .overlay {
            opacity: 1;
        }
        
        .cv-container .sidebar .popover {
            display: none !important;
            opacity: 0;
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
            background-color: #e6ebf0;
            -webkit-transform: skewX(-30deg);
            -ms-transform: skewX(-30deg);
            -moz-transform-origin: skewX(-30deg);
            -o-transform-origin: skewX(-30deg);
            transform: skewX(-30deg);
            display: inline-block;
        }
        
        .cv-container .competency-list li.filled {
            background-color: #0b5394;
        }
        
        @media (max-width: 768px) {
            .cv-container .navbar-nav {
                display: none;
            }
            .cv-container .vcard .user-contact,
            .cv-container .vcard .user-title {
                text-align: center;
                padding: 0px;
            }
            .cv-container .vcard .logo .css-crop {
                padding-bottom: 50px;
            }
            .cv-container h6.date-range {
                text-align: left;
                float: none;
            }
            .cv-container .table,
            .cv-container .table-cell {
                display: block !important;
                width: 100% !important;
            }
            .cv-container .main {
                padding: 30px 0px 0px 0px;
            }
            .cv-container .main section {
                margin: 15px 20px;
            }
            .cv-container article .article-headings,
            .cv-container article .article-body {
                width: 100% !important;
            }
        }
        
        .pdf .cv-container #contact-mailer {
            display: none;
        }
        
        .pdf .cv-container .navbar-nav {
            display: none;
        }
        
        .pdf .cv-container .cv-content {
            padding: 0px;
        }
        
        .pdf .cv-container .chart-container {
            width: 600px !important;
        }
        
        @media (max-width: 768px) {
            .web-view .cv-container .sidebar article {
                padding: 0;
            }
            .web-view .cv-container .vcard .user-links {
                margin-bottom: 15px;
            }
            .web-view .cv-container .vcard .user-links {
                padding: 0 15px 15px 15px;
            }
            .web-view .cv-container .vcard .user-contact {
                padding: 0 15px;
            }
            .web-view .cv-container .vcard .user-contact li,
            .web-view .cv-container .vcard .user-links li {
                width: 100%;
            }
            .web-view .cv-container .vcard .user-contact li:last-of-type,
            .web-view .cv-container .vcard .user-links li:last-of-type,
            .web-view .cv-container .vcard .user-contact li.website,
            .web-view .cv-container .vcard .user-links li.website {
                margin: 15px 0;
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
                <section id="profile" class="profile">
                    <article class="vcard " data-bind="content">
                        <div class="banner">
                            <div class="table">
                                <div class="fn user-title table-cell">
                                    <h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">MELISSA
SHAFER</span></h1></div>
                                <div class="spacer table-cell">
                                    <div class="logo">
                                        <div class="css-crop bg-contain"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">Graphic Designer</span></h2></article>
                </section>
                <div class="table">
                    <div class="main table-cell">
                        <section data-bind="sections" id="positions" class="dated_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Select Design Projects</span></h3></header>
                            <article data-bind="contents" class="empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2016</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Present</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Senior Graphic Designer</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Siobhan Creative Solutions</span></h5></div>
                                    <div id="react-tinymce-1031514" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li><span>M</span>anage the Graphic Design Department</li>
                                            <li>Providing design and marketing solutions to our clients in a <span>high-demand</span>&nbsp;environment</li>
                                            <li>Create uniquely designed products from concept to completion for clients</li>
                                            <li>Store marketing materials
                                                <ul>
                                                    <li>business cards</li>
                                                    <li>brochures</li>
                                                    <li>flyers</li>
                                                    <li>envelopes</li>
                                                    <li>event programs</li>
                                                    <li>signs and banners</li>
                                                    <li>posters</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2010</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">20015</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Freelance Graphic Designer</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Various Clients</span></h5></div>
                                    <div id="react-tinymce-1031516" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li>Develop, design and produce creative <span>designs</span>&nbsp;for a wide variety of clients.</li>
                                            <li>Projects include newsletters, brochures, charts, banners, stickers, and website materials</li>
                                            <li><span><span>Liaise</span>&nbsp;with clients</span>
                                            </li>
                                            <li><span><span>Assess</span>&nbsp;<span>client</span> needs and restrictions (including budget)</span>
                                            </li>
                                            <li><span>Recommend marketing strategy based on budget. </span></li>
                                            <li><span><span>S</span>ketch out ideas for layouts or logos</span>
                                            </li>
                                            <li><span>Design and create all layout and design work for two publications, </span></li>
                                            <li><span>Designs for postcards, banners, posters, business cards, flyers, and other print media</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2006</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2010</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Graphic Designer</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Mountain Falls Media</span></h5></div>
                                    <div id="react-tinymce-1031518" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li><span><span>Marketing and graphic design services include: </span></span>
                                                <ul>
                                                    <li><span><span>graphic content</span></span>
                                                    </li>
                                                    <li><span><span>corporate <span>branding</span>&nbsp;packages</span>
                                                        </span>
                                                    </li>
                                                    <li><span><span>email campaigns</span></span>
                                                    </li>
                                                    <li><span><span>website development</span></span>
                                                    </li>
                                                    <li><span><span>presentation materials</span></span>
                                                    </li>
                                                    <li><span><span>conference materials</span></span>
                                                    </li>
                                                    <li><span><span>indoor and outdoor signage</span></span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><span>Designed book pages and manuscripts for a publishing company</span></li>
                                            <li><span><span><span>D</span>eveloped concepts and visual designs for web, print and event materials</span>
                                                </span>
                                            </li>
                                            <li><span><span>Advertising, web, email, presentations, sales <span>materials</span>, and trade show graphics </span>
                                                </span>
                                            </li>
                                            <li><span><span><span>Lead m</span>arketing campaign teams</span>
                                                </span>
                                            </li>
                                            <li><span><span><span>V</span>isually interpret strategic marketing messages.</span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article data-bind="contents" class="empty ">
                                <div class="article-headings">
                                    <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2005</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2006</span></span></h6></div>
                                <div class="article-body">
                                    <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Graphic Design Intern</span></h4>
                                    <div data-bind="organization_url" target="_blank" rel="nofollow">
                                        <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Snow Fall Publishing</span></h5></div>
                                    <div id="react-tinymce-1031520" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                        <ul>
                                            <li><span><span><span>B</span></span>anner ads, interfaces, video advertising, logos, and other marketing materials</span>
                                            </li>
                                            <li>Design department management, developing budgets, and &nbsp;press checks.</li>
                                            <li><span>L</span>ay out quarterly journal with advertising placements</li>
                                            <li>Design event materials: brochures, guidebooks, educational handouts and signage</li>
                                            <li>Art direction &nbsp;and image collection for two <span>social science</span>&nbsp;textbooks.</li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        </section>
                        <div data-bind="add-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-section-btn"></span></div>
                    </div>
                    <div class="sidebar table-cell">
                        <section data-bind="profile_sidebar" class="nomargin vcard profile" id="profile">
                            <article class="contact_info " data-bind="content"><img class="user-thumb photo visible" data-bind="thumb" src="https://workstory.s3.amazonaws.com/assets/1566729/photodune-9523174-professional-headshot-xs_cv.jpg" />
                                <div class="adr">
                                    <ul class="user-contact">
                                        <li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">Dublin, Ireland</span></li>
                                        <li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">(500) 500-5000 </span></li>
                                        <li class="email" data-bind="email"><a href="../cdn-cgi/l/email-protection#2a4f474b43466a4f474b434604434f"><span class="__cf_email__" data-cfemail="6b0e060a02072b0e060a020745020e">[email&#160;protected]</span></a></li>
                                    </ul>
                                    <ul class="user-links user-websites" data-bind="websites"></ul>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Summary</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031522" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <p><strong><br/></strong>Creative and disciplined <span>graphic</span>&nbsp;designer collaborates with private and commercial clients to discover their styles, developing <span>apps and web pages</span>&nbsp;that grow from customer&rsquo;s natural preferences. Detail-oriented and conscientious project manager meets deadlines and budgets. Substantial freelance and corporate experience.&nbsp;</p>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story_511342" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Core Competencies</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031524" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li><span>Color Consultation</span></li>
                                        <li>Rendering</li>
                                        <li>Project Evaluation</li>
                                        <li>Design and Redesign</li>
                                        <li>Sample and Color</li>
                                        <li>Logos</li>
                                        <li>Drafting</li>
                                        <li>Planning</li>
                                        <li>Group Presentations&nbsp;</li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                        <section data-bind="sidebar_sections" id="text_story_tZgn17nP8r" class="text_story">
                            <header>
                                <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Education</span></h3></header>
                            <article data-bind="content" class="">
                                <div id="react-tinymce-1031526" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                    <ul>
                                        <li><strong>Bachelor of Fine Arts </strong>
                                            <ul>
                                                <li>River Tradition College</li>
                                            </ul>
                                        </li>
                                        <li><strong>CADD 1, 2 and 4</strong>
                                            <ul>
                                                <li>Community Technical College</li>
                                            </ul>
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