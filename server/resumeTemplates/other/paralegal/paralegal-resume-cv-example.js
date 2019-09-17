export default ()=>{
    return(
      `
      <!DOCTYPE html>
      <html class="bg-stripped animated fadeIn web-view" lang="en" dir="ltr">
      
      <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
          <meta name="viewport" content="width=device-width, initial-scale=1">
      
          <titlePARALEGAL - StyleMyCV</title>
      
              <meta name="description" content="PARALEGAL">
              <meta name="author" content="StyleMyCV.com">
      
              <meta name="robots" content="noindex, nofollow">
      
              <link rel="canonical" href="index.html">
              <link rel="alternate" hreflang="x-default" href="index.html" />
              <link rel="alternate" hreflang="en" href="index.html" />
      
              <link rel="stylesheet" type="text/css" href="/css/template.css" />
      </head>
      
      <body data-cv-id="1761369" class="cv-viewer">
      
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
                  color: #3F292B;
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
                  background: #3F292B;
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
                  border: 1px solid #3F292B;
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
                  background-color: #3F292B;
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
                                          <h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">Lettie Hempstock</span></h1></div>
                                      <div class="spacer table-cell">
                                          <div class="logo">
                                              <div class="css-crop bg-contain"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">
      
                          PARALEGAL 
      
              </span></h2></article>
                      </section>
                      <div class="table">
                          <div class="main table-cell">
                              <section data-bind="sections" id="summary" class="text_story">
                                  <header>
                                      <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Summary">Summary</span></h3></header>
                                  <article data-bind="content" class="">
                                      <div id="react-tinymce-1032050" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                          <ul>
                                              <li>Maintained full accountability for concurrently managing 80 cases; prepared all cases for court within three weeks with all documentations and briefs for supervising lawyer.</li>
                                              <li><span>Relied upon as the Primary Subject Matter Expert (SME) on 6 technical investigations and publication verifications, including the Bradley, the M1A1 Tank and the Paladin </span></li>
                                              <li><span>Generated over $15K in savings to the supply budget in the first quarter by improving supply accountability methods. </span></li>
                                              <li><span>Proficiently developed detailed financial and budget reports, providing forecasting, trending and result analysis tools integral to determining future funding allotments. </span></li>
                                              <li><span>Reduced a $2 Billion product deficit and created a surplus in the immediate following six months, by rearranging production procedures; received Letter of Appreciation from the VP of Allison Royals Royce. </span></li>
                                              <li><span>Saved the US government over $700K by identifying one faulty prototype before mass production on the M2A2. </span></li>
                                          </ul>
                                      </div>
                                  </article>
                              </section>
                              <section data-bind="sections" id="text_story_xLk8NL-SZX" class="text_story">
                                  <header>
                                      <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Key Skill Areas</span></h3></header>
                                  <article data-bind="content" class="">
                                      <div id="react-tinymce-1032052" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                          <p><strong>Team Leadership</strong></p>
                                          <ul>
                                              <li>Contributed dynamic leadership skills toward managing 64 employees, with strong focus on boosting performance and quality.</li>
                                              <li>Mentored, motivated and supported team members, playing an instrumental role in the development of top performing staff.</li>
                                          </ul>
                                          <p><strong>Legal Research, Drafting &amp; Analysis </strong></p>
                                          <ul>
                                              <li>Applied advanced communication skills toward effectively drafting, reviewing and finalizing complex agreements, motions, orders, affidavits, petitions and contracts.</li>
                                              <li>Prioritized, planned, coordinated and finalized agreements to ensure on-time completion while maintaining high quality standards.</li>
                                              <li>Conducted comprehensive review and analysis of case material to ensure accuracy and completion.</li>
                                              <li>Performed extensive research of various laws and statutes to effectively draft memoranda for attorneys,&nbsp;integral to supporting key cases.</li>
                                              <li>Proficiently handled cite checking, due diligence activities and all aspects of electronic discovery, further&nbsp;illustrating exceptional critical thinking and analytical skills.</li>
                                          </ul>
                                          <p><strong>Communications &amp; Organization</strong></p>
                                          <ul>
                                              <li>Established key relationships and liaised with outside counsel, attorneys, senior management, staff and clients.</li>
                                              <li>Managed high-volume phone communications, directed calls and relayed detailed messages.</li>
                                              <li>Developed status reports; monitored and managed broad range of concurrent projects.</li>
                                              <li>Contributed organizational skills and strong attention to detail toward coordinating all office functions;&nbsp;efficiently planned and coordinated meetings, calendars, travel and conference calls.</li>
                                              <li>Spearheaded the development of six training support packages of the New Iraqi Army (NIA) Maintenance</li>
                                              <li>Platoon and trained 353 NIA mechanics in over 732 hours of instruction in maintenance management and technical procedures.</li>
                                          </ul>
                                          <p><strong>Project Management</strong></p>
                                          <ul>
                                              <li>Successfully reduced a product deficit in excess of $2 billion and created a product surplus in the following six months.</li>
                                              <li>Exhibited financial skills and strong attention to detail in maintaining stock and supply budgets throughout an 8- year period.</li>
                                              <li>Generated $15,000 in supply budget savings in the first quarter by improving supply accountability methods.</li>
                                          </ul>
                                          <p><strong>Customer Service </strong></p>
                                          <ul>
                                              <li>Strategically coordinated and managed projects to ensure on-time, budget-compliant delivery while maintaining high quality standards.</li>
                                              <li>Applied dynamic strategic planning and project management skills toward coordinating data gathering and projection of project status for the IT organization in a large health insurance company.</li>
                                              <li>Prioritized and completed multiple simultaneous projects to maximize efficiency and achieve critical deadlines.</li>
                                              <li>Was Primary Subject Matter Expert (SME) on 6 technical investigations and publication verifications&nbsp;this included the Bradley, M1A1 Tank and the Paladin.</li>
                                          </ul>
                                          <p><strong>Financial Management </strong></p>
                                          <ul>
                                              <li>Contributed dynamic information gathering, needs assessment and analytical skills toward effectively and diplomatically responding to client issues for timely resolution and enhanced satisfaction.</li>
                                              <li>Played vital role in sustaining and growing business by consistently delivering world-class service in troubleshooting and responding to client inquiries.</li>
                                          </ul>
                                      </div>
                                  </article>
                              </section>
                              <section data-bind="sections" id="positions" class="dated_story">
                                  <header>
                                      <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Work History</span></h3></header>
                                  <article data-bind="contents" class="empty ">
                                      <div class="article-headings">
                                          <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2009</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                      <div class="article-body">
                                          <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">It Project Coordinator</span></h4>
                                          <div data-bind="organization_url" target="_blank" rel="nofollow">
                                              <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">City, ST</span></h5></div>
                                          <div id="react-tinymce-1032054" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                              <p>Company</p>
                                          </div>
                                      </div>
                                  </article>
                                  <article data-bind="contents" class="empty ">
                                      <div class="article-headings">
                                          <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2009</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                                      <div class="article-body">
                                          <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Paralegal/Special Project Coordinator</span></h4>
                                          <div data-bind="organization_url" target="_blank" rel="nofollow">
                                              <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">City, ST</span></h5></div>
                                          <div id="react-tinymce-1032056" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                              <p>Company&nbsp;</p>
                                          </div>
                                      </div>
                                  </article>
                                  <article data-bind="contents" class="empty ">
                                      <div class="article-headings">
                                          <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2006</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2009</span></span></h6></div>
                                      <div class="article-body">
                                          <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Customer Service Supervisor</span></h4>
                                          <div data-bind="organization_url" target="_blank" rel="nofollow">
                                              <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">City, ST</span></h5></div>
                                          <div id="react-tinymce-1032058" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                              <p>Company, ST&nbsp;</p>
                                          </div>
                                      </div>
                                  </article>
                                  <article data-bind="contents" class="empty ">
                                      <div class="article-headings">
                                          <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2004</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2005</span></span></h6></div>
                                      <div class="article-body">
                                          <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Assistant Manager</span></h4>
                                          <div data-bind="organization_url" target="_blank" rel="nofollow">
                                              <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">City, ST</span></h5></div>
                                          <div id="react-tinymce-1032060" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                              <p>Company, ST&nbsp;</p>
                                          </div>
                                      </div>
                                  </article>
                                  <article data-bind="contents" class="empty ">
                                      <div class="article-headings">
                                          <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2002</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2003</span></span></h6></div>
                                      <div class="article-body">
                                          <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Screener</span></h4>
                                          <div data-bind="organization_url" target="_blank" rel="nofollow">
                                              <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">TRANSPORTATION SECURITY</span></h5></div>
                                          <div id="react-tinymce-1032062" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                              <p>Company, ST</p>
                                          </div>
                                      </div>
                                  </article>
                                  <article data-bind="contents" class="empty ">
                                      <div class="article-headings">
                                          <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2001</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2002</span></span></h6></div>
                                      <div class="article-body">
                                          <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Engineering Support Technician</span></h4>
                                          <div data-bind="organization_url" target="_blank" rel="nofollow">
                                              <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">TRANSPORTATION SECURITY</span></h5></div>
                                          <div id="react-tinymce-1032064" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                              <p>Company, ST&nbsp;</p>
                                          </div>
                                      </div>
                                  </article>
                                  <article data-bind="contents" class="empty ">
                                      <div class="article-headings">
                                          <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">1999</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2001</span></span></h6></div>
                                      <div class="article-body">
                                          <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Special Projects Coordinator</span></h4>
                                          <div data-bind="organization_url" target="_blank" rel="nofollow">
                                              <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">TRANSPORTATION SECURITY</span></h5></div>
                                          <div id="react-tinymce-1032066" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                              <p>Company, ST</p>
                                          </div>
                                      </div>
                                  </article>
                              </section>
                              <div data-bind="add-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-section-btn"></span></div>
                          </div>
                          <div class="sidebar table-cell">
                              <section data-bind="profile_sidebar" class="nomargin vcard profile" id="profile">
                                  <article class="contact_info " data-bind="content"><img class="user-thumb photo" data-bind="thumb" />
                                      <div class="adr">
                                          <ul class="user-contact">
                                              <li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">City, State</span></li>
                                              <li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">+18005551212</span></li>
                                              <li class="email" data-bind="email"><a href="../cdn-cgi/l/email-protection#d1b4bcb0b8bd91b9bea5bcb0b8bdffb2bebc"><span class="__cf_email__" data-cfemail="8feae2eee6e3cfe7e0fbe2eee6e3a1ece0e2">[email&#160;protected]</span></a></li>
                                          </ul>
                                          <ul class="user-links user-websites" data-bind="websites"></ul>
                                      </div>
                                  </article>
                              </section>
                              <section data-bind="sidebar_sections" id="text_story" class="text_story">
                                  <header>
                                      <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Summary</span></h3></header>
                                  <article data-bind="content" class="">
                                      <div id="react-tinymce-1032068" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                          <p><span>A highly motivated, quality-oriented legal professional with a comprehensive background in customer service and project management. Adept at setting goals, establishing priorities, managing resources, and coordinating complex technical, legal and security activities in a broad range of industries. Ability to juggle several projects simultaneously while working under pressure in fast-paced environments. Excels at interacting with broad populations including senior management, attorneys, staff and clients. Calm demeanor in the face of difficulties; leader who believes that everyone has something of value to offer. Highly versatile; quickly masters new roles, responsibilities, technologies and environments. Demonstrates outstanding problem solving and active listening skills; diffuses difficult customer situations with tact and ease.</span></p>
                                      </div>
                                  </article>
                              </section>
                              <section data-bind="sidebar_sections" id="text_story_QHyvDRfuB0" class="text_story">
                                  <header>
                                      <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Skills</span></h3></header>
                                  <article data-bind="content" class="">
                                      <div id="react-tinymce-1032070" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                          <ul>
                                              <li><span>Litigation Investigations</span></li>
                                              <li><span>Oral &amp; Written Communications</span></li>
                                              <li><span>Process Improvement</span></li>
                                              <li><span>Strategic Planning Problem Solving</span></li>
                                              <li><span>Project Management &amp; Coordination</span></li>
                                              <li><span>Customer Relationship Management &amp; Retention</span></li>
                                          </ul>
                                      </div>
                                  </article>
                              </section>
                              <section data-bind="sidebar_sections" id="text_story_kxaSirwNvL" class="text_story">
                                  <header>
                                      <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">
      
                          TECHNICAL SKILLS &amp; PROFESSIONAL AFFILIATIONS 
      
              </span></h3></header>
                                  <article data-bind="content" class="">
                                      <div id="react-tinymce-1032072" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                          <ul>
                                              <li><span>Microsoft Office Suite (including Excel and PowerPoint); Westlaw, Lexis Nexus and Casemaker; Microsoft Publisher, and Microsoft Project; Adobe Photoshop; Lotus Notes; Peachtree Finance</span></li>
                                              <li>The National Association of Legal Assistants; American Legion</li>
                                          </ul>
                                      </div>
                                  </article>
                              </section>
                              <section data-bind="sidebar_sections" id="text_story_Ec6kdeFiaC" class="text_story">
                                  <header>
                                      <h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Education</span></h3></header>
                                  <article data-bind="content" class="">
                                      <div id="react-tinymce-1032074" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                          <ul>
                                              <li><span><strong>Associate of Science</strong> - Business Administration/ Marketing Management</span>
                                                  <ul>
                                                      <li><span>College, Louisville, KY</span></li>
                                                  </ul>
                                              </li>
                                              <li><span><strong>Certificate of Completion</strong>, Paralegal Studies Program</span>
                                                  <ul>
                                                      <li><span>State College, City, ST;</span></li>
                                                      <li><span>Approved by the American Bar Association</span></li>
                                                  </ul>
                                              </li>
                                              <li><strong>Certified Government Trainer</strong>
                                                  <ul>
                                                      <li><span>Army Instructor Training Course </span><span>Notary Public</span></li>
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