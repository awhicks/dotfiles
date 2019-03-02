cjModules.define(function(){"use strict";return function(e,a){function n(){var e=[],n=[u,j,m];return n.forEach(function(a,n){a&&e.push(n+":"+a)}),cjBasics.urlParams.attach(h+"search",{bm_cid:"cloudsearch",bm_xfo:a.sid,bm_wiz:a.sid,authuser:a.account.authuser,hl:cjBasics.lang.current,q:r,tnm:d,tbs:e.join(";")})}function c(e){var a=bmElements.createElement("navlist",{compact:!0,selectedId:"DEFAULT",items:[{label:cjBasics.lang.i18n("cj_i18n_01259","Everything"),id:"DEFAULT"},{label:cjBasics.lang.i18n("cj_i18n_01260","Owned by me"),id:"6",divider:!0}],onChange:function(e){j="DEFAULT"===e?null:e,l()}});e.appendChild(a);var n=bmElements.createElement("navlist",{compact:!0,isSelector:!0,selectedId:"DEFAULT",items:[{header:!0,color:_,label:cjBasics.lang.i18n("cj_i18n_01261","Period")},{label:cjBasics.lang.i18n("cj_i18n_01262","Any time"),id:"DEFAULT"},{label:cjBasics.lang.i18n("cj_i18n_01263","Past day"),id:"1"},{label:cjBasics.lang.i18n("cj_i18n_01264","Past week"),id:"2"},{label:cjBasics.lang.i18n("cj_i18n_01265","Past month"),id:"3"},{label:cjBasics.lang.i18n("cj_i18n_01266","Past year"),id:"4",divider:!0}],onChange:function(e){u="DEFAULT"===e?null:e,l()},selected:"relevance"});e.appendChild(n);var c=bmElements.createElement("navlist",{compact:!0,isSelector:!0,selectedId:"DEFAULT",items:[{header:!0,color:_,label:cjBasics.lang.i18n("cj_i18n_01267","Type")},{label:cjBasics.lang.i18n("cj_i18n_01268","Any type"),id:"DEFAULT"},{label:cjBasics.lang.i18n("cj_i18n_00138","Text documents"),id:"14"},{label:cjBasics.lang.i18n("cj_i18n_00139","Spreadsheets"),id:"8"},{label:cjBasics.lang.i18n("cj_i18n_00140","Presentations"),id:"9"},{label:cjBasics.lang.i18n("cj_i18n_00137","PDFs"),id:"10"},{label:cjBasics.lang.i18n("cj_i18n_01269","Images"),id:"11"},{label:cjBasics.lang.i18n("cj_i18n_00142","Videos"),id:"12"},{label:cjBasics.lang.i18n("cj_i18n_01270","Drawings"),id:"20"},{label:cjBasics.lang.i18n("cj_i18n_01271","Folders"),id:"13"}],onChange:function(e){m="DEFAULT"===e?null:e,l()}});e.appendChild(c)}function i(){var e=a.account.authuser,n=cjBasics.urlParams.attach(h,{authuser:"0"!==e?e:null,q:r||null});a.openTab(n)}function l(){if(r){var a=n();o?(o=!1,t.remove(),t=bmElements.createElement("iframe",{solid:!0,shadow:"thin",src:a,displayLoading:!0}),e.appendChild(t)):t.src=a}}function s(){var n=bmElements.createElement("ogb",{drawer:{color:_},serviceIcon:"cloud_search",searchbox:{color:_,onSubmit:function(e){r=e,l()}},bmApis:a,onNewTab:i});e.appendChild(n),a.onPageDisplay(n.cjceSearchboxEle.select);var s=n.cjceDrawerEle;c(s);var o=mdElements.createElement("iconbutton",{label:cjBasics.lang.i18n("cj_i18n_00110","Filter"),iconName:"__mdi:filter_list",onClick:function(){s.cjceToggle()}});n.cjceAppendChild(o);var u=mdElements.createElement("appbar",{solid:!0,secondary:!0}),j=mdElements.createElement("tabs",{fill:!0,items:[{label:cjBasics.lang.i18n("cj_i18n_00107","All"),id:"all"},{label:cjBasics.lang.i18n("cj_i18n_01274","Mail"),id:"mail"},{label:cjBasics.lang.i18n("cj_i18n_00390","Drive"),id:"docs"},{label:cjBasics.lang.i18n("cj_i18n_00112","Sites"),id:"sites"},{label:cjBasics.lang.i18n("cj_i18n_00418","Groups"),id:"grps"},{label:cjBasics.lang.i18n("cj_i18n_00302","Calendar"),id:"cal"}],onChange:function(e){d=e,l()},selected:"all"});u.appendChild(j),e.appendChild(u),t=mdElements.createElement("container",{solid:!0,shadow:"thin"}),e.appendChild(t);var m=mdElements.createElement("emptystate",{color:_,iconName:"__mdi:search",subLabel:cjBasics.lang.i18n("cj_i18n_00046","Please enter a search query")});t.appendChild(m),cjBasics.ajax(h+"?authuser="+a.account.authuser).then(function(n){if(n.indexOf('<link rel="canonical" href="https://cloudsearch.google.com/cloudsearch/error')!==-1){e.textContent="";var c=bmElements.createElement("fulldialog",{darkMode:a.darkMode,bmApis:a,onNewTab:i,lockup:{label:cjBasics.lang.i18n("cj_i18n_00806","Cloud Search")},iconName:"cloud_search",message:cjBasics.lang.i18n("cj_i18n_00238","You need to use a G Suite account to use Google Admin").replace("Admin","Cloud Search"),actionLabel:cjBasics.lang.i18n("cj_i18n_00234","Change account"),action:function(){a.pageManager.navigate("accountchooser")}});e.appendChild(c)}})}var t,o=!0,d="all",r="",u=null,j=null,m=null,_="#1a73e8",h="https://cloudsearch.google.com/cloudsearch/";s()}});