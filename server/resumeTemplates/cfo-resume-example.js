export default ()=>{

return `
<!DOCTYPE html>
<html class="bg-stripped animated fadeIn web-view" lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <script>window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"6387e82dbf","applicationID":"3081130","transactionName":"IV9dR0RcDghRRk4AEBEfQFtZRA==","queueTime":0,"applicationTime":39,"agent":""}</script>
  <script>window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var o=n[t]={exports:{}};e[t][0].call(o.exports,function(n){var o=e[t][1][n];return r(o||n)},o,o.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<t.length;o++)r(t[o]);return r}({1:[function(e,n,t){function r(){}function o(e,n,t){return function(){return i(e,[c.now()].concat(u(arguments)),n?null:this,t),n?void 0:this}}var i=e("handle"),a=e(3),u=e(4),f=e("ee").get("tracer"),c=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(e,n){s[n]=o(d+n,!0,"api")}),s.addPageAction=o(d+"addPageAction",!0),s.setCurrentRouteName=o(d+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,o="function"==typeof n;return i(l+"tracer",[c.now(),e,t],r),function(){if(f.emit((o?"":"no-")+"fn-start",[c.now(),r,o],t),o)try{return n.apply(this,arguments)}catch(e){throw f.emit("fn-err",[arguments,this,e],t),e}finally{f.emit("fn-end",[c.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=o(l+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),i("err",[e,c.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){if(!o)return!1;if(e!==o)return!1;if(!n)return!0;if(!i)return!1;for(var t=i.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var o=null,i=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var u=navigator.userAgent,f=u.match(a);f&&u.indexOf("Chrome")===-1&&u.indexOf("Chromium")===-1&&(o="Safari",i=f[1])}n.exports={agent:o,version:i,match:r}},{}],3:[function(e,n,t){function r(e,n){var t=[],r="",i=0;for(r in e)o.call(e,r)&&(t[i]=n(r,e[r]),i+=1);return t}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],4:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,o=t-n||0,i=Array(o<0?0:o);++r<o;)i[r]=e[n+r];return i}n.exports=r},{}],5:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function o(e){function n(e){return e&&e instanceof r?e:e?f(e,u,i):i()}function t(t,r,o,i){if(!d.aborted||i){e&&e(t,r,o);for(var a=n(o),u=v(t),f=u.length,c=0;c<f;c++)u[c].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function l(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return p[e]=p[e]||o(t)}function w(e,n){c(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var h={},y={},b={on:l,addEventListener:l,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:w,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u="nr@context",f=e("gos"),c=e(3),s={},p={},d=n.exports=o();d.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(o.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[n]=r,r}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){o.buffer([e],r),o.emit(e,n,t)}var o=e("ee").get("handle");n.exports=r,r.ee=o},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!E++){var e=x.info=NREUM.info,n=l.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();c(y,function(n,t){e[n]||(e[n]=t)}),f("mark",["onload",a()+x.offset],null,"api");var t=l.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function o(){"complete"===l.readyState&&i()}function i(){f("mark",["domContent",a()+x.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-x.offset}var u=(new Date).getTime(),f=e("handle"),c=e(3),s=e("ee"),p=e(2),d=window,l=d.document,m="addEventListener",v="attachEvent",g=d.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:g,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1130.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),x=n.exports={offset:u,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};e(1),l[m]?(l[m]("DOMContentLoaded",i,!1),d[m]("load",r,!1)):(l[v]("onreadystatechange",o),d[v]("onload",r)),f("mark",["firstbyte",u],null,"api");var E=0,O=e(5)},{}]},{},["loader"]);</script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Chief Financial Officer</title>
  <link rel="stylesheet" href="/css/template.css">
</head>

<body data-cv-id="1755894" class="cv-viewer" >

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
</style><div><link rel="stylesheet" type="text/css" href="https://www.visualcv.com/less/corporate?%40primary=black&amp;%40body-font-size=14px&amp;%40article-margins=1.5em&amp;%40logo-url="/><div class="cv-container animated fadeIn"><div class="cv-content"><div class="contact-spacer"><div class="spacer-stripe"></div></div><section data-bind="profile" class="header-bar profile" id="profile"><article class="vcard " data-bind="content"><img class="user-thumb photo" data-bind="thumb"/><div class="logo"><div class="css-crop bg-contain"></div></div><div class="fn user-title"><h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">Miles Messervy</span></h1><h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">
		
	
	
		
			
				
					Chief Financial Officer

				
			
		</span></h2></div></article></section><div class="flex-columns"><div class="sidebar"><section data-bind="profile_sidebar" class="nomargin vcard profile" id="profile"><article class="contact_info " data-bind="content"><div class="adr"><ul class="user-contact"><li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">Toronto, CA</span></li><li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">+15555551212</span></li><li class="email" data-bind="email"><a href="../cdn-cgi/l/email-protection#fc99919d9590bc9b919d9590d29f9391"><span class="__cf_email__" data-cfemail="7e1b131f17123e19131f1712501d1113">[email&#160;protected]</span></a></li></ul><ul class="user-links user-websites" data-bind="websites"></ul></div></article></section><section data-bind="sidebar_sections" class="text-section text_story" id="text_story"><header><h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">QUALIFICATIONS</span></h3></header><article data-bind="content" class=""><div id="react-tinymce-1031198" class=" mce-content-body" spellcheck="true" placeholder="Description"><p><span>Seasoned Financial Executive with solid and progressive experience in all facets of accounting and financial management. Possess Certified Public Accountant license in the State of New Jersey. Highly skilled in collaborating with all members of the organization to achieve business and financial objectives. Adept in streamlining financial processes, enhancing productivity levels, and introducing process improvements. Proficient in Microsoft Office, MAS 500, Wall Street Office, and Peachtree.</span></p></div></article></section><section data-bind="sidebar_sections" class="text-section text_story" id="text_story_fRg1GAheGg"><header><h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Core Competencies</span></h3></header><article data-bind="content" class=""><div id="react-tinymce-1031200" class=" mce-content-body" spellcheck="true" placeholder="Description"><ul>
<li><span>Financial Stewardship &amp; Controllership</span></li>
<li><span>Financial Reporting &amp; Consolidations<br/></span></li>
<li><span>Asset Management &amp; Investment</span></li>
<li><span>Management GAAP</span></li>
<li><span>Compliance &amp; Auditing<br/></span></li>
<li><span>Benefit Plans &amp; Pension Funds</span></li>
<li><span>Financial Management &amp; Accounting<br/></span><span></span></li>
<li><span>Budget Management &amp; Forecasting<br/></span><span></span></li>
<li><span>Sarbanes-Oxley Compliance<br/></span><span></span></li>
<li><span>Technology Enhancements &amp; Process Improvement</span></li>
<li><span></span><span>Cash Flow Management&nbsp;</span></li>
</ul></div></article></section><section data-bind="sidebar_sections" class="text-section text_story" id="text_story_lSrxHatrf2"><header><h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Highlights</span></h3></header><article data-bind="content" class=""><div id="react-tinymce-1031202" class=" mce-content-body" spellcheck="true" placeholder="Description"><ul>
<li><span>Played a key role in the $108 million initial public offering in March 2007 for Investment Corp., which included serving as the lead internal accounting executive responsible for all accounting related work associated with the filing of registration statements with the SEC and the final sales prospectus.</span></li>
<li><span>Established Investment Corp.&rsquo;s internal controls associated with financial reporting as required by Sarbanes-Oxley 404.</span></li>
<li><span>Negotiated Investment Corp.&rsquo;s credit facility at better than current market terms.<br/></span></li>
<li><span>Spearheaded efforts to significantly enhance the quarterly financial reporting cycle/process at GSC Group, which reduced the completion timing from 50 days to 35 days.<br/></span></li>
<li><span>Assisted in fundraising efforts for Com Group by completing informational due diligence requests, reviewing new legal entity formation agreements, providing timely responses to all investor requests, and managing ad hoc requests.</span></li>
</ul></div></article></section><section data-bind="sidebar_sections" class="text-section text_story" id="text_story_3lPcAJrn2N"><header><h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Text section">Affiliations</span></h3></header><article data-bind="content" class=""><div id="react-tinymce-1031204" class=" mce-content-body" spellcheck="true" placeholder="Description"><ul>
<li>American Institute of Certified Public Accountants (1996 &ndash; Present)</li>
<li>New Jersey State Society of Certified Public Accountants, Essex County Chapter (1996 &ndash; Present)</li>
</ul></div></article></section><div data-bind="add-sidebar-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-sidebar-section-btn"></span></div></div><div class="main"><section data-bind="sections" id="positions" class="dated_story"><header><h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Professional Background</span></h3></header><article data-bind="contents" class="empty "><div class="article-headings"><h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2007</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Present</span></span></h6></div><div class="article-body"><h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Chief Financial Officer

				
			
		</span></h4><div data-bind="organization_url" target="_blank" rel="nofollow"><h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">
		
	
	
		
			
				
					Com Group, Inc. – Florham Park, NJ 
				
			
		</span></h5></div><div id="react-tinymce-1031206" class=" mce-content-body" spellcheck="true" placeholder="Description"><p><span>Provided leadership and direction to all aspects of accounting, financial management, fund management, and controllership relating to GNV. Reviewed monthly, quarterly, and annual financial statement closing process, which included all SEC required filings.<br/> </span></p>
<p><strong><em>Key Achievements: </em></strong></p>
<ul>
<li>Prepared and presented the management's report to the Board of Directors, which aided in decision- making processes.</li>
<li><span>Directed monthly bank compliance reporting, daily cash management, vendor management, and accounts payable. </span></li>
<li><span>Authored 3 accounting position letters to the SEC's Office of the Chief Accountant concerning the proper consolidation accounting treatment. </span></li>
<li><span>Played a key role in the creation of 2 special purpose financing vehicles and the execution of 2 bank credit facilities. <br/></span></li>
</ul></div></div></article><article data-bind="contents" class="empty "><div class="article-headings"><h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2001</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2006</span></span></h6></div><div class="article-body"><h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">
		
	
	
		
			
				
					Managing Director, Accounting &amp; Finance

				
			
		</span></h4><div data-bind="organization_url" target="_blank" rel="nofollow"><h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Com Group, Inc. – Florham Park, NJ             </span></h5></div><div id="react-tinymce-1031208" class=" mce-content-body" spellcheck="true" placeholder="Description"><p><span>Directed accounting, finance, and fund administration functions of the 35 COM Group managed funds across 6 different investment strategies. Supervised 7 accounting professionals, 2 managers, and 5 accounting associates in performing at optimal levels. Facilitated reporting including quarterly performance letter, quarterly financial statements, individual capital account statements, and asset/fund level performance calculations. Performed SEC registered investment advisor compliance oversight of performance reporting/investor communications. </span></p>
<p><strong><em>Investment Experience: </em></strong></p>
<ul>
<li>Private Equity &ndash; 2 funds totaling $2 billion of commitments invested in leveraged acquisitions, recapitalizations, management buyouts, and small/midcap growth equity transactions.</li>
<li><span>Controlled Distressed Debt &ndash; 2 funds totaling $1.3 billion of commitments, which seek to make control investments in distressed securities of over-leveraged companies with a goal of converting the debt to equity through a financial restructuring. </span></li>
<li><span>European Mezzanine &ndash; 2 funds totaling $1.3 billion of commitments, which employed a disciplined credit- oriented approach to investing in mezzanine debt securities of middle and large market companies that were controlled by leading European equity sponsors. </span></li>
<li><span>11 U.S. cash flow collateralized loan funds with $3.7 billion of assets invested in the U.S. leverage loan and high yield bond markets. </span></li>
<li><span>5 European cash flow collateralized loan funds with $2.6 billion of assets invested in the European leveraged loan market. </span></li>
<li><span>A publicly traded business development company (BDC) with $100 million of assets invested in the U.S. leverage loan and high yield bond markets. <br/></span></li>
</ul></div></div></article><article data-bind="contents" class="empty "><div class="article-headings"><h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">1998</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2001</span></span></h6></div><div class="article-body"><h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">
		
	
	
		
			
				
					
						
							Audit Supervisor

						
					
				
			
		</span></h4><div data-bind="organization_url" target="_blank" rel="nofollow"><h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">
		
	
	
		
			
				
					
						
							Company Corporate Headquarters – Madison, NJ 
						
					
				
			
		</span></h5></div><div id="react-tinymce-1031210" class=" mce-content-body" spellcheck="true" placeholder="Description"><p>Maintained accountability for all aspects of auditing functions. Determined audit scope and coordinated audit fieldwork. Supervised and coached audit staff during operational and financial audits. Drafted and presented audit reports to senior management.</p>
<p><strong><em>Key Achievements:</em></strong></p>
<ul>
<li>Spearheaded efforts to assess internal control systems according to corporate policies and procedures, which included identifying areas of weakness and recommending improvements.</li>
<li><span>Created and revised audit programs used to identify control weaknesses. <br/></span></li>
</ul></div></div></article><article data-bind="contents" class="empty "><div class="article-headings"><h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">1996</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">1998</span></span></h6></div><div class="article-body"><h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">
		
	
	
		
			
				
					
						
							Supervising Senior Auditor

						
					
				
			
		</span></h4><div data-bind="organization_url" target="_blank" rel="nofollow"><h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">
		
	
	
		
			
				
					
						
							Company LLP – Roseland, NJ 
						
					
				
			
		</span></h5></div><div id="react-tinymce-1031212" class=" mce-content-body" spellcheck="true" placeholder="Description"><p>Provided direction to audit engagements from inception through completion. Coordinated fieldwork with the client. Led audits in manufacturing and professional services industries.</p>
<p><strong><em>Key Achievements:</em></strong></p>
<ul>
<li><span>Audited and prepared financial statements and footnote disclosures using sound financial acumen. </span></li>
<li><span>Managed audits for 2 SEC clients with $100 million and $30 million in revenue. </span></li>
<li><span>Executed special projects including 65 franchise IPO rollup, $200 million private debt offering, $10 million&nbsp;</span><span>secondary stock offering, 12 company IPO rollup, and $500 million accounting fraud investigation. </span></li>
</ul></div></div></article><article data-bind="contents" class="empty "><div class="article-headings"><h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">1994</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">1996</span></span></h6></div><div class="article-body"><h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Staff Auditor</span></h4><div data-bind="organization_url" target="_blank" rel="nofollow"><h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">
		
	
	
		
			
				
					
						
							Company LLP – Roseland, NJ 
						
					
				
			
		</span></h5></div><div id="react-tinymce-1031214" class=" mce-content-body" spellcheck="true" placeholder="Description"></div></div></article></section><section data-bind="sections" id="degrees" class="dated_story"><header><h3 class="header-text empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Education">Education</span></h3></header><article data-bind="contents" class="empty "><div class="article-headings"><h6 class="date-range"><span data-bind="start_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div><div class="article-body"><h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">
		
	
	
		
			
				
					
						
							Bachelor of Science in Business Administration, Accounting  
						
					
				
			
		</span></h4><div data-bind="organization_url" target="_blank" rel="nofollow"><h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">
		
	
	
		
			
				
					
						
							Seton Hall University 
						
					
				
			
		</span></h5></div><div id="react-tinymce-1031216" class=" mce-content-body" spellcheck="true" placeholder="Description"><ul>
<li>Dean&rsquo;s List; Beta Alpha Psi</li>
<li>National Accounting Honor Society</li>
</ul></div></div></article></section><div data-bind="add-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-section-btn"></span></div></div></div></div></div></div>

  <footer class="vcv-footer">
  <p>
    <time datetime="2018-04-03T18:22:18Z" pubdate="pubdate" class="updated-at">
      April 03, 2018
</time>  </p>
</footer>


  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" />
  <script data-cfasync="false" src="../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>
  <script src="../app/js/lib/jquery.cv.js" ></script>

</body>
</html>`
}
