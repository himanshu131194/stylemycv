export default ()=>{
     return(
         `
         <!DOCTYPE html>
         <html class="bg-stripped animated fadeIn web-view" lang="en" dir="ltr">
         
         <head>
             <meta charset="utf-8">
             <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
             <meta name="viewport" content="width=device-width, initial-scale=1">
             <title>English Professor</title>
         
             <meta name="description" content="English Professor">
         
             <meta name="robots" content="noindex, nofollow">
         
             <link rel="canonical" href="index.html">
             <link rel="alternate" hreflang="x-default" href="index.html" />
             <link rel="alternate" hreflang="en" href="index.html" />
         
             <link rel="stylesheet" type="text/css" href="/css/template.css" />
         </head>
         
         <body data-cv-id="2551647" class="cv-viewer">
         
             <header class="row centered vcv-header">
         
             </header>
         
             <style type="text/css">
                 @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,600);
                 @import url(https://fonts.googleapis.com/css?family=PT+Serif);
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
                     background: white;
                     padding: 0px;
                 }
                 
                 .cv-container .cv-content {
                     padding: 5em 10%;
                 }
                 
                 .cv-container.single-column article .article-headings.col-sm-3 {
                     width: 25% !important;
                 }
                 
                 .cv-container.single-column article .article-body.col-sm-9 {
                     width: 75% !important;
                 }
                 
                 .cv-container.single-column .cv-content {
                     padding: 5em 11.5%;
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
                     font-weight: 700;
                     color: #333333;
                     font-size: 350%;
                     font-family: "PT Serif", "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, serif;
                     margin-bottom: 0.1em;
                 }
                 
                 .cv-container h2 {
                     font-size: 175%;
                     font-weight: 500;
                     color: #777777;
                 }
                 
                 .cv-container h3 {
                     font-size: 150%;
                     font-family: "PT Serif", "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, serif;
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
                     color: #777777;
                     line-height: 1.5em;
                 }
                 
                 .cv-container .sidebar {
                     width: 30%;
                 }
                 
                 .cv-container .main.col-sm-8 {
                     width: 70%;
                 }
                 
                 .cv-container section {
                     position: relative;
                     margin-bottom: 3em;
                 }
                 
                 .cv-container section .date-range {
                     white-space: nowrap;
                     text-align: right;
                     font-weight: normal;
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
                 
                 .cv-container #profile {
                     margin: 0px;
                 }
                 
                 .cv-container article.vcard {
                     padding-left: 0px;
                     padding-right: 0px;
                 }
                 
                 .cv-container article {
                     margin: 1em 0px;
                 }
                 
                 .cv-container article .date-range {
                     float: right;
                 }
                 
                 .cv-container article [data-field="description"] {
                     clear: both;
                 }
                 
                 .cv-container article {
                     margin-top: 2.05em;
                     margin-bottom: 3.075em;
                     margin-left: 0px;
                     margin-right: 0px;
                     padding: 0px 5%;
                 }
                 
                 .cv-container article.contact_info {
                     padding: 0px;
                 }
                 
                 .cv-container .vcard {
                     padding-bottom: 1em;
                     margin-bottom: 0px;
                     margin-top: 0px;
                 }
                 
                 .cv-container .vcard .user-thumb {
                     float: left;
                     width: 115px;
                     padding: 4px;
                 }
                 
                 .cv-container .vcard .user-thumb .css-crop {
                     padding-bottom: 100%;
                 }
                 
                 .cv-container .vcard article.profile {
                     overflow: visible;
                 }
                 
                 .cv-container .vcard .user-title {
                     display: block;
                     overflow: hidden;
                     padding-right: 10px;
                 }
                 
                 .cv-container .vcard .user-contact {
                     float: right;
                     padding-left: 10px;
                     list-style: none;
                     padding-top: 0.25em;
                     border-left: 1px solid #dedede;
                     margin: 0px;
                     width: auto;
                 }
                 
                 .cv-container .vcard .user-contact i {
                     text-align: center;
                     width: 1.35em;
                     color: #cccccc;
                 }
                 
                 .cv-container .vcard .user-contact li {
                     font-size: 90%;
                     margin-bottom: 0.25em;
                     overflow: visible;
                     white-space: nowrap;
                 }
                 
                 .cv-container .vcard .user-contact li:before {
                     font-family: FontAwesome;
                     opacity: 0.25;
                     font-size: 100%;
                     margin-right: 0.25em;
                     text-align: center;
                     width: 1.35em;
                     display: inline-block;
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
                 
                 @media (max-width: 768px) {
                     .cv-container .vcard {
                         text-align: center;
                     }
                     .cv-container .vcard .user-thumb {
                         min-width: 50%;
                         max-width: 75%;
                         float: none !important;
                         margin: 15px auto !important;
                     }
                     .cv-container .vcard .user-title {
                         float: none;
                     }
                     .cv-container .vcard .user-contact {
                         width: 100%;
                         float: none !important;
                         border-left: none;
                     }
                     .cv-container .vcard .user-contact li {
                         margin: 0px 5px;
                         display: inline-block;
                     }
                 }
                 
                 .cv-container .user-thumb {
                     display: none;
                     margin-right: 15px;
                 }
                 
                 .cv-container .summary-header {
                     text-align: center;
                 }
                 
                 .cv-container .summary-header .header-text {
                     padding: 0px 15px;
                 }
                 
                 .cv-container .summary-text {
                     margin-top: 0px;
                     text-align: center;
                     padding: 0.75em 1.5em;
                     font-size: 125%;
                     font-weight: 200;
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
                     background-color: black;
                 }
                 
                 .cv-container .competency .article-headings {
                     float: left;
                     width: 33%;
                 }
                 
                 .cv-container .competency .article-body {
                     float: right;
                     width: 65%;
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
                     .cv-container .user-contact {
                         margin: 0 -8% !important;
                         width: 116% !important;
                         text-align: center;
                         padding: 0px !important;
                         margin-bottom: 0.5em;
                     }
                     .cv-container .user-thumb {
                         position: relative;
                         margin: 1em auto;
                         display: block;
                         float: none;
                         width: auto;
                         max-width: 150px;
                     }
                     .cv-container .main {
                         float: none;
                         width: 100% !important;
                         padding: 30px 0px 0px 0px;
                     }
                     .cv-container .sidebar {
                         float: none;
                         width: 100% !important;
                     }
                     .cv-container h6.date-range {
                         text-align: left;
                         float: none;
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
                 
                 .pdf .cv-container .header-text:after {
                     padding-right: 0em;
                     content: "\\00a0";
                 }
                 
                 .pdf .cv-container .chart-container {
                     width: 600px !important;
                 }
                 
                 @media (max-width: 768px) {
                     .web-view .cv-container .user-contact {
                         padding-top: 15px;
                     }
                     .web-view .cv-container .user-links {
                         padding-bottom: 15px;
                     }
                     .web-view .cv-container .user-contact li,
                     .web-view .cv-container .user-links li {
                         width: 100%;
                     }
                     .web-view .cv-container .user-contact li:last-of-type,
                     .web-view .cv-container .user-links li:last-of-type,
                     .web-view .cv-container .user-contact li.website,
                     .web-view .cv-container .user-links li.website {
                         margin-top: 5px;
                         width: 80%;
                         max-width: 375px;
                         text-align: center;
                     }
                     .web-view .cv-container .user-contact li:last-of-type a,
                     .web-view .cv-container .user-links li:last-of-type a,
                     .web-view .cv-container .user-contact li.website a,
                     .web-view .cv-container .user-links li.website a {
                         padding: 15px;
                         display: block;
                         border: 1px solid #555555;
                         color: #555555;
                         transition: 200ms;
                     }
                     .web-view .cv-container .user-contact li:last-of-type a:active,
                     .web-view .cv-container .user-links li:last-of-type a:active,
                     .web-view .cv-container .user-contact li.website a:active,
                     .web-view .cv-container .user-links li.website a:active {
                         background-color: #555555;
                         color: white;
                         transition: 200ms;
                     }
                     .web-view .cv-container .user-contact li:last-of-type:before,
                     .web-view .cv-container .user-links li:last-of-type:before,
                     .web-view .cv-container .user-contact li.website:before,
                     .web-view .cv-container .user-links li.website:before {
                         display: none !important;
                     }
                 }
             </style>
             <div>
                 <div class="cv-container animated fadeIn">
                     <div class="cv-content single-column">
                         <section data-bind="sections" id="profile" class="profile">
                             <article class="vcard " data-bind="content">
                                 <div class="article-headings">
                                     <div class="user-thumb" data-bind="thumb">
                                         <div class="css-crop bg-cover" style="background-image:url(../login)"></div>
                                     </div>
                                 </div>
                                 <ul class="user-contact">
                                     <li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">City State</span></li>
                                     <li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">(500) 500-5000 </span></li>
                                     <li class="email" data-bind="email"><a href="../cdn-cgi/l/email-protection#f4b1b9b5bdb8b4b1b9b5bdb8dab7bbb9"><span class="__cf_email__" data-cfemail="783d35393134383d35393134563b3735">[email&#160;protected]</span></a></li>
                                     <ul class="user-links user-websites" data-bind="websites"></ul>
                                 </ul>
                                 <div class="fn user-title">
                                     <h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">Kevin Weaver</span></h1>
                                     <h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">English Professor</span></h2></div>
                             </article>
                         </section>
                         <section data-bind="sections" id="degrees" class="dated_story">
                             <header>
                                 <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Education">Education</span></h3></header>
                             <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                 <div class="article-headings">
                                     <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2009</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                 <div class="article-body">
                                     <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Ph. D. in English Literature</span></h4>
                                     <div data-bind="organization_url" target="_blank" rel="nofollow">
                                         <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">Royal University</span></h5></div>
                                     <div id="react-tinymce-1032350" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                 </div>
                             </article>
                             <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                 <div class="article-headings">
                                     <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2007</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                 <div class="article-body">
                                     <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Master of Arts in English Literature</span></h4>
                                     <div data-bind="organization_url" target="_blank" rel="nofollow">
                                         <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">State University</span></h5></div>
                                     <div id="react-tinymce-1032352" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                         <p>cum laude</p>
                                     </div>
                                 </div>
                             </article>
                             <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                 <div class="article-headings">
                                     <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2005</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                 <div class="article-body">
                                     <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Bachelor of Arts in English</span></h4>
                                     <div data-bind="organization_url" target="_blank" rel="nofollow">
                                         <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">State University</span></h5></div>
                                     <div id="react-tinymce-1032354" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                         <p><span><span>Minor</span>&nbsp;in Education</span>
                                         </p>
                                     </div>
                                 </div>
                             </article>
                             <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                 <div class="article-headings">
                                     <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2001</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                 <div class="article-body">
                                     <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Associate Degree</span></h4>
                                     <div data-bind="organization_url" target="_blank" rel="nofollow">
                                         <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">State College</span></h5></div>
                                     <div id="react-tinymce-1032356" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                         <p>General Arts</p>
                                     </div>
                                 </div>
                             </article>
                         </section>
                         <section data-bind="sections" id="positions" class="dated_story">
                             <header>
                                 <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Work experience</span></h3></header>
                             <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                 <div class="article-headings">
                                     <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2016</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Present</span></span></h6></div>
                                 <div class="article-body">
                                     <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Professor of English Literature</span></h4>
                                     <div data-bind="organization_url" target="_blank" rel="nofollow">
                                         <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Kensington University</span></h5></div>
                                     <div id="react-tinymce-1032358" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                 </div>
                             </article>
                             <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                 <div class="article-headings">
                                     <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 15</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2015</span></span></h6></div>
                                 <div class="article-body">
                                     <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Visiting Lecturer in English Literature</span></h4>
                                     <div data-bind="organization_url" target="_blank" rel="nofollow">
                                         <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Kensington University</span></h5></div>
                                     <div id="react-tinymce-1032360" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                 </div>
                             </article>
                             <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                 <div class="article-headings">
                                     <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2014</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2014</span></span></h6></div>
                                 <div class="article-body">
                                     <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Associate Professor of English</span></h4>
                                     <div data-bind="organization_url" target="_blank" rel="nofollow">
                                         <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">University of Marpole</span></h5></div>
                                     <div id="react-tinymce-1032362" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                 </div>
                             </article>
                             <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                 <div class="article-headings">
                                     <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2013</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2013</span></span></h6></div>
                                 <div class="article-body">
                                     <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Assistant Professor of English Literature</span></h4>
                                     <div data-bind="organization_url" target="_blank" rel="nofollow">
                                         <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">University of Semiahmoo</span></h5></div>
                                     <div id="react-tinymce-1032364" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                 </div>
                             </article>
                             <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                 <div class="article-headings">
                                     <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2012</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2012</span></span></h6></div>
                                 <div class="article-body">
                                     <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Assistant Professor of English</span></h4>
                                     <div data-bind="organization_url" target="_blank" rel="nofollow">
                                         <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Killarney College</span></h5></div>
                                     <div id="react-tinymce-1032366" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                                 </div>
                             </article>
                             <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                                 <div class="article-headings">
                                     <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2010</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2011</span></span></h6></div>
                                 <div class="article-body">
                                     <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Visiting Assistant Professor of English Literature</span></h4>
                                     <div data-bind="organization_url" target="_blank" rel="nofollow">
                                         <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Elgin College</span></h5></div>
                                     <div id="react-tinymce-1032368" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
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