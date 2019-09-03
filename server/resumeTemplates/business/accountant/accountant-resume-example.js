export default ()=>{
    return (
      `<html class="bg-stripped animated fadeIn web-view" lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <script>window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","errorBeacon":"bam.nr-data.net","licenseKey":"6387e82dbf","applicationID":"3081130","transactionName":"IV9dR0RcDghRRk4AEBEfQFtZRA==","queueTime":0,"applicationTime":48,"agent":""}</script>
        <script>window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var o=n[t]={exports:{}};e[t][0].call(o.exports,function(n){var o=e[t][1][n];return r(o||n)},o,o.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<t.length;o++)r(t[o]);return r}({1:[function(e,n,t){function r(){}function o(e,n,t){return function(){return i(e,[c.now()].concat(u(arguments)),n?null:this,t),n?void 0:this}}var i=e("handle"),a=e(3),u=e(4),f=e("ee").get("tracer"),c=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(e,n){s[n]=o(d+n,!0,"api")}),s.addPageAction=o(d+"addPageAction",!0),s.setCurrentRouteName=o(d+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,o="function"==typeof n;return i(l+"tracer",[c.now(),e,t],r),function(){if(f.emit((o?"":"no-")+"fn-start",[c.now(),r,o],t),o)try{return n.apply(this,arguments)}catch(e){throw f.emit("fn-err",[arguments,this,e],t),e}finally{f.emit("fn-end",[c.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=o(l+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),i("err",[e,c.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){if(!o)return!1;if(e!==o)return!1;if(!n)return!0;if(!i)return!1;for(var t=i.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var o=null,i=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var u=navigator.userAgent,f=u.match(a);f&&u.indexOf("Chrome")===-1&&u.indexOf("Chromium")===-1&&(o="Safari",i=f[1])}n.exports={agent:o,version:i,match:r}},{}],3:[function(e,n,t){function r(e,n){var t=[],r="",i=0;for(r in e)o.call(e,r)&&(t[i]=n(r,e[r]),i+=1);return t}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],4:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,o=t-n||0,i=Array(o<0?0:o);++r<o;)i[r]=e[n+r];return i}n.exports=r},{}],5:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function o(e){function n(e){return e&&e instanceof r?e:e?f(e,u,i):i()}function t(t,r,o,i){if(!d.aborted||i){e&&e(t,r,o);for(var a=n(o),u=v(t),f=u.length,c=0;c<f;c++)u[c].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function l(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return p[e]=p[e]||o(t)}function w(e,n){c(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var h={},y={},b={on:l,addEventListener:l,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:w,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u="nr@context",f=e("gos"),c=e(3),s={},p={},d=n.exports=o();d.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(o.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[n]=r,r}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){o.buffer([e],r),o.emit(e,n,t)}var o=e("ee").get("handle");n.exports=r,r.ee=o},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!E++){var e=x.info=NREUM.info,n=l.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();c(y,function(n,t){e[n]||(e[n]=t)}),f("mark",["onload",a()+x.offset],null,"api");var t=l.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function o(){"complete"===l.readyState&&i()}function i(){f("mark",["domContent",a()+x.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-x.offset}var u=(new Date).getTime(),f=e("handle"),c=e(3),s=e("ee"),p=e(2),d=window,l=d.document,m="addEventListener",v="attachEvent",g=d.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:g,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1130.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),x=n.exports={offset:u,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};e(1),l[m]?(l[m]("DOMContentLoaded",i,!1),d[m]("load",r,!1)):(l[v]("onreadystatechange",o),d[v]("onload",r)),f("mark",["firstbyte",u],null,"api");var E=0,O=e(5)},{}]},{},["loader"]);</script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/css/template.css">
        <title>Accountant</title>
      </head>
      <body data-cv-id="2375936" class="cv-viewer">
      
          <header class="row centered vcv-header">
          </header>
      
          <style type="text/css">
              @import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,600,700);
              @import url(https://fonts.googleapis.com/css?family=Rasa);
              .clear-margin {
                  margin: 0;
                  padding: 0;
              }
              
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
                  font-family: "Source Sans Pro", "Open Sans", "Century Gothic", CenturyGothic, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, sans-serif;
                  font-size: 15px;
                  max-width: 960px;
                  padding: 0px;
                  color: #000;
              }
              
              .cv-container h2,
              .cv-container h3,
              .cv-container h4,
              .cv-container h5,
              .cv-container h6 {
                  margin-top: 0px;
                  margin-bottom: 0.25em;
                  font-weight: normal;
              }
              
              .cv-container h1,
              .cv-container h2,
              .cv-container h3 {
                  text-align: center;
              }
              
              .cv-container h1 {
                  text-transform: uppercase;
                  color: #073763;
                  font-size: 250%;
                  font-weight: 400;
                  margin: 0px;
                  line-height: 1.15em;
              }
              
              .cv-container h2,
              .cv-container h3 {
                  font-family: "Rasa", "Didot", "Hoefler Text", Garamond, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, serif;
                  font-size: 150%;
                  color: #073763;
              }
              
              .cv-container h4,
              .cv-container h5,
              .cv-container h6 {
                  font-size: 115%;
                  margin: 0px 0px 5px 0px;
              }
              
              .cv-container h5 {
                  font-style: italic;
              }
              
              .cv-container h6 {
                  color: #555;
              }
              
              .cv-container p {
                  margin-bottom: 0.6em;
                  margin-top: 0px;
              }
              
              .cv-container .cv-content {
                  padding: 5em 10%;
              }
              
              .cv-container .cv-content section {
                  margin-top: 0.75em;
                  margin-bottom: 0.75em;
              }
              
              .cv-container .cv-content article {
                  margin-top: 0.55em;
                  margin-bottom: 0.55em;
              }
              
              .cv-container section {
                  margin-top: 1.5em;
              }
              
              .cv-container section > header {
                  width: 100%;
                  margin-bottom: 1.5em;
                  text-align: center;
              }
              
              .cv-container section > header .header-text {
                  padding: 0.25em 0.75em;
                  text-align: center;
                  vertical-align: middle;
                  display: inline-block;
                  margin: 2px;
                  background: white;
                  position: relative;
                  z-index: 1;
              }
              
              .cv-container section > header .header-text span {
                  white-space: nowrap;
              }
              
              .cv-container section > header:after {
                  content: '';
                  display: block;
                  top: 1.5em;
                  border-bottom: 1px solid rgba(7, 55, 99, 0.3);
                  position: absolute;
                  left: 0;
                  right: 0;
                  width: 100%;
                  z-index: 0;
              }
              
              .cv-container article {
                  clear: both;
                  margin-bottom: 0.75em;
              }
              
              .cv-container article .article-headings {
                  width: 21%;
                  margin-right: 1%;
                  float: left;
              }
              
              .cv-container article .article-body {
                  width: 78%;
                  float: left;
              }
              
              .cv-container article .article-body {
                  margin: 0px;
              }
              
              .cv-container article:after {
                  content: " ";
                  clear: both;
                  position: relative;
                  display: block;
              }
              
              .cv-container article.chart .article-headings,
              .cv-container article.chart .article-body {
                  float: none;
                  width: 100%;
              }
              
              .cv-container .vcard {
                  margin-bottom: 0px;
                  margin-top: 0px;
              }
              
              .cv-container .user-thumb {
                  width: 5em;
                  margin: 1em auto;
                  -webkit-border-radius: 100%;
                  -moz-border-radius: 100%;
                  -ms-border-radius: 100%;
                  -o-border-radius: 100%;
                  border-radius: 100%;
                  -webkit-box-shadow: 1px 1px 3px 0px #CCC;
                  box-shadow: 1px 1px 3px 0px #CCC;
              }
              
              .cv-container .user-thumb .css-crop {
                  padding-bottom: 100%;
                  border-radius: 100%;
              }
              
              .cv-container .user-title {
                  font-family: "Rasa", "Didot", "Hoefler Text", Garamond, "Microsoft YaHei New", "Microsoft Yahei", "微软雅黑", 宋体, SimSun, 华文细黑, STXihei, 黑体, SimHei, serif;
                  text-align: center;
                  padding: 1em 0px 0.85em;
                  border-top: 1px solid #073763;
                  border-bottom: 3px solid #073763;
              }
              
              .cv-container #summary article {
                  margin-top: 0px;
                  text-align: center;
                  padding: 0.5em 1.5em 0.25em 1.5em;
                  font-size: 115%;
              }
              
              .cv-container #references .article-body {
                  padding-left: 0px;
              }
              
              .cv-container .user-contact,
              .cv-container .user-links {
                  list-style: none;
                  padding-top: 0.25em;
                  margin: 0px;
                  text-align: center;
                  padding-left: 0px;
              }
              
              .cv-container .user-contact i,
              .cv-container .user-links i {
                  text-align: center;
                  width: 1.35em;
                  color: #CCC;
              }
              
              .cv-container .user-contact li,
              .cv-container .user-links li {
                  font-size: 95%;
                  margin-bottom: 0.25em;
                  overflow: visible;
                  white-space: nowrap;
                  display: inline-block;
              }
              
              .cv-container .user-contact li:before {
                  content: '\\2022';
                  color: #CCC;
                  font-size: 150%;
                  line-height: 0.5em;
                  vertical-align: middle;
                  margin: 0px 0.25em;
              }
              
              .cv-container .user-contact li:first-child:before {
                  content: initial;
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
                  border: 1px solid #073763;
                  -webkit-box-shadow: 1px 1px 3px 0px #CCC;
                  box-shadow: 1px 1px 3px 0px #CCC;
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
                  background-color: #EEE;
                  border-radius: 2px;
                  height: 8px;
                  -webkit-transform: skewX(-45deg);
                  -ms-transform: skewX(-45deg);
                  -moz-transform-origin: skewX(-45deg);
                  -o-transform-origin: skewX(-45deg);
                  transform: skewX(-45deg);
              }
              
              .cv-container .competency .competency-level {
                  background-color: #073763;
                  border-radius: 2px;
                  height: 100%;
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
                  .cv-container h1 {
                      font-size: 200%;
                  }
                  .cv-container #summary article {
                      padding: 0px;
                  }
                  .cv-container article .article-headings,
                  .cv-container article .article-body {
                      width: 100% !important;
                  }
              }
              
              @media (max-width: 768px) {
                  .web-view .cv-container .user-contact {
                      margin-top: 20px;
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
                      margin: 5px 0;
                      width: 100%;
                      text-align: center;
                  }
                  .web-view .cv-container .user-contact li:last-of-type a,
                  .web-view .cv-container .user-links li:last-of-type a,
                  .web-view .cv-container .user-contact li.website a,
                  .web-view .cv-container .user-links li.website a {
                      padding: 15px;
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
                  .web-view .cv-container .user-contact li:last-of-type:before,
                  .web-view .cv-container .user-links li:last-of-type:before,
                  .web-view .cv-container .user-contact li.website:before,
                  .web-view .cv-container .user-links li.website:before {
                      display: none !important;
                  }
              }
          </style>
          <div>
              <link rel="stylesheet" type="text/css" href="https://www.visualcv.com/less/monte?%40primary=&amp;%40bg-url=&amp;%40body-font-size=15px&amp;%40section-margins=0.75em&amp;%40article-margins=0.55em" />
              <div class="cv-container animated fadeIn">
                  <div class="cv-content single-column">
                      <section data-bind="sections" id="profile" class="profile">
                          <article class="vcard " data-bind="content">
                              <div class="fn user-title">
                                  <h1 class="full-name" data-bind="full_name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Full name">Esther Barrow</span></h1></div>
                              <ul class="user-contact">
                                  <li class="adr locality" data-bind="location"><span class="undefined needsclick" contenteditable="false" data-placeholder="Location">City State</span></li>
                                  <li class="phone" data-bind="phone"><span class="undefined needsclick" contenteditable="false" data-placeholder="Phone">(500) 500-5000 </span></li>
                                  <li class="email" data-bind="email"><a href="../cdn-cgi/l/email-protection#13565e525a5f53565e525a5f3d505c5e"><span class="__cf_email__" data-cfemail="51141c10181d11141c10181d7f121e1c">[email&#160;protected]</span></a></li>
                              </ul>
                              <ul class="user-links user-websites" data-bind="websites"></ul>
                              <div class="user-thumb visible" data-bind="thumb">
                                  <div class="css-crop bg-cover" style="background-image:url(https://workstory.s3.amazonaws.com/assets/1566728/photodune-1251519-young-asian-business-woman-xs_cv.jpg)"></div>
                              </div>
                              <h2 class="title" data-bind="headline"><span class="undefined needsclick" contenteditable="false" data-placeholder="Headline / current title">Accountant</span></h2></article>
                      </section>
                      <section data-bind="sections" id="positions" class="dated_story">
                          <header>
                              <h3 class="header-text" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Work experience">Work experience</span></h3></header>
                          <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                              <div class="article-headings">
                                  <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Sept 2015</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Present</span></span></h6></div>
                              <div class="article-body">
                                  <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Senior Accountant</span></h4>
                                  <div data-bind="organization_url" target="_blank" rel="nofollow">
                                      <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Strangway Wholesale</span></h5></div>
                                  <div id="react-tinymce-1031018" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                      <ul>
                                          <li><span>Daily b</span>ookkeeping and accounting processes including: &nbsp;A/R, payroll, bank reconciliation</li>
                                          <li><span>Execute monthly payroll activities</span></li>
                                          <li>Prepare Journal Entries for prepaid expense and deferred revenue</li>
                                          <li>Receive and deposit all revenue.</li>
                                          <li>Prepare monthly and quarterly financial reports, including standard financial reports, budget vs. actual reports and grant-specific financial reports.</li>
                                          <li><span>Monitor</span>&nbsp;billing for compliance with all internal policies</li>
                                          <li>Financial reporting and other administrative requirements <span>for</span>&nbsp;management</li>
                                          <li>Report and track expenditures</li>
                                      </ul>
                                  </div>
                              </div>
                          </article>
                          <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                              <div class="article-headings">
                                  <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Jan 2010</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Aug 2015</span></span></h6></div>
                              <div class="article-body">
                                  <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Accounting Manager</span></h4>
                                  <div data-bind="organization_url" target="_blank" rel="nofollow">
                                      <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Mountain Garden Center</span></h5></div>
                                  <div id="react-tinymce-1031020" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                      <ul>
                                          <li>Wrote monthly reports for monitoring profit on a per <span>sale</span>&nbsp;basis.</li>
                                          <li>Generated monthly inventory reportins</li>
                                          <li>Income Tax, GST, FBT, and PAYE compliance</li>
                                          <li>Budgeting and Tax planning</li>
                                          <li><span>E</span>xecute month-end closing procedures and postings</li>
                                          <li>Coordinate with auditors in preparation of year-end audit<span></span></li>
                                          <li><span>Development of annual budget and budget analysis</span></li>
                                      </ul>
                                  </div>
                              </div>
                          </article>
                          <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                              <div class="article-headings">
                                  <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Feb 2008</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Dec 2009</span></span></h6></div>
                              <div class="article-body">
                                  <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Job title">Accounting Assistant</span></h4>
                                  <div data-bind="organization_url" target="_blank" rel="nofollow">
                                      <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="Organization">Smith Accounting Services</span></h5></div>
                                  <div id="react-tinymce-1031022" class=" mce-content-body" spellcheck="true" placeholder="Description">
                                      <ul>
                                          <li>Payroll, reconcile superannuation and wages payable</li>
                                          <li>Financial reconciliation and <span>r</span>eporting</li>
                                          <li>Bank reconciliation and process payments</li>
                                          <li>Report monthly sales revenue</li>
                                          <li>Draft BAS report.</li>
                                      </ul>
                                  </div>
                              </div>
                          </article>
                      </section>
                      <section data-bind="sections" id="degrees" class="dated_story">
                          <header>
                              <h3 class="header-text" data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Education">Education</span></h3></header>
                          <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                              <div class="article-headings">
                                  <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2007</span></span><span data-bind="end_date" class="empty"><span class="undefined needsclick empty" contenteditable="false" data-placeholder="YYYY"></span></span></h6></div>
                              <div class="article-body">
                                  <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Bachelor of Accounting</span></h4>
                                  <div data-bind="organization_url" target="_blank" rel="nofollow">
                                      <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">State University</span></h5></div>
                                  <div id="react-tinymce-1031024" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                              </div>
                          </article>
                          <article data-bind="contents" class="empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty ">
                              <div class="article-headings">
                                  <h6 class="date-range"><span data-bind="start_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">2004</span></span><span data-bind="end_date"><span class="undefined needsclick" contenteditable="false" data-placeholder="YYYY">Present</span></span></h6></div>
                              <div class="article-body">
                                  <h4 data-bind="title"><span class="undefined needsclick" contenteditable="false" data-placeholder="Degree name">Diploma of Accounting</span></h4>
                                  <div data-bind="organization_url" target="_blank" rel="nofollow">
                                      <h5 data-bind="organization"><span class="undefined needsclick" contenteditable="false" data-placeholder="School name">State College</span></h5></div>
                                  <div id="react-tinymce-1031026" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                              </div>
                          </article>
                      </section>
                      <section data-bind="sections" id="strengths" class="strengths">
                          <header>
                              <h3 class="header-text " data-bind="label"><span class="undefined needsclick" contenteditable="false" data-placeholder="Skills">Skills</span></h3></header>
                          <article class="competency empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty " data-bind="contents">
                              <div class="article-headings">
                                  <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">Quickbooks</span></h6></div>
                              <div class="article-body">
                                  <div class="competency-bar">
                                      <div class="competency-level" data-bind="level" style="width:98%"></div>
                                  </div>
                                  <div id="react-tinymce-1031028" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                              </div>
                              <div class="clearfix"></div>
                          </article>
                          <article class="competency empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty " data-bind="contents">
                              <div class="article-headings">
                                  <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">Accounts Receivable/ Payable</span></h6></div>
                              <div class="article-body">
                                  <div class="competency-bar">
                                      <div class="competency-level" data-bind="level" style="width:100%"></div>
                                  </div>
                                  <div id="react-tinymce-1031030" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                              </div>
                              <div class="clearfix"></div>
                          </article>
                          <article class="competency empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty empty " data-bind="contents">
                              <div class="article-headings">
                                  <h6 data-bind="name"><span class="undefined needsclick" contenteditable="false" data-placeholder="Name">Microsoft Office</span></h6></div>
                              <div class="article-body">
                                  <div class="competency-bar">
                                      <div class="competency-level" data-bind="level" style="width:81%"></div>
                                  </div>
                                  <div id="react-tinymce-1031032" class=" mce-content-body" spellcheck="true" placeholder="Description"></div>
                              </div>
                              <div class="clearfix"></div>
                          </article>
                      </section>
                      <div data-bind="add-section-btn"><span class="undefined needsclick" contenteditable="false" data-placeholder="add-section-btn"></span></div>
                  </div>
              </div>
          </div>
      
          <footer class="vcv-footer">
              <p>
                  <time datetime="2018-04-03T11:51:44-07:00" pubdate="pubdate" class="updated-at">
                  </time>
              </p>
          </footer>
      </body>
      
      </html>`
    )
}