cjModules.define(function(){"use strict";return function(e,n){function a(e,a){var s=B+e;a.shortcutId&&(s=cjgShortcuts.getUrl(a.shortcutId,n.account)),n.openTab(s)}function s(e){return cjBasics.urlParams.attach(B+e,{bm_cid:"mybusiness",bm_cst:"1",bm_hsb:n.hsb,bm_xfo:n.sid,bm_wiz:n.sid,hl:cjBasics.lang.current})}function i(e){e!==C&&(C=e,window.setTimeout(function(){for(var e=u.children,n=0;n<e.length;n++){var a=e[n];N.indexOf(a.cjceNavlistId)!==-1&&(a.hidden=!C)}u.classList.toggle("bm-ele-navlist--compact",C)},300))}function t(n){bmElements.setLoading(e,!0),j=!0,A.src="about:blank",g=!1;var a=N.indexOf(n)!==-1;a||setTimeout(function(){g||(_.textContent="")},300);var i=c(n),t=s(i);setTimeout(function(){j=!1,A.src=t},100)}function c(e){var n=e,a=N.indexOf(e)!==-1;return a&&v&&(n+="/l/"+v),n}function o(e){_=document.createElement("div"),_.className="bm-p-mybusiness-locationdata",e.appendChild(_),u=bmElements.createElement("navlist",{compact:!0,isSelector:!0,selectedId:"locations",items:U,onChange:function(e,n){if("users"===e)A.cjceSendFrameCommand({method:"bmAdvancedClickDomElement",value:'path[d*="66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8"]'},T);else{t(e);var a=N.indexOf(e)!==-1;b.cjceSetPageLabel(n.label),i(a)}},bmApis:n,onNewTab:function(e,a){var s;s="adwords"===e?cjBasics.urlParams.attach("https://adwords.google.com/express/plus/Plus",{__l:v,authuser:"0"!==n.account.authuser?n.account.authuser:null}):B+c(e),n.openTab(s)}}),i(!1),e.appendChild(u)}function l(){bmElements.setLoading(e,!1)}function r(e){u.cjceSelectedId=e,b.cjceSetPageLabel(U[e].label);var n=N.indexOf(e)!==-1;i(n)}function d(){if(_.textContent="",g=!0,p){var e=mdElements.createElement("title",{label:p});if(_.appendChild(e),Array.isArray(h)&&0!==h.length){var n=mdElements.createElement("secondarytext",{label:h.join("\n")});n.classList.add("bm-p-mybusiness-locationdata__address"),_.appendChild(n)}}}function m(e){v=e.listingId,h=e.addressData,p=e.listingTitle;var n=e.viewId;r(n),d()}var b,u,_,g,h,p,v,j,w=cjBasics.navigator.vivaldi,f="#1a73e8",T="https://business.google.com",B=T+"/"+n.wizPath,E=n.account.pageId,y=E?"dashboard":"locations",C=!0,N=["dashboard","posts","edit","insights","reviews","messaging","photos","site","users"],L=["posts","reviews","messaging","adwords","create","locations","linkedaccounts","settings"],I=["dashboard","posts","edit","insights","reviews","messaging","photos","site","adwords","create","locations","linkedaccounts","settings"],U={dashboard:{iconName:"__mdi:dashboard",newTabUrl:!0,brandOnly:!0,label:cjBasics.lang.i18n("cj_i18n_00291","Home")},posts:{iconName:"__mdi:post",newTabUrl:!0,label:cjBasics.lang.i18n("cj_i18n_00990","Posts")},edit:{iconName:"__mdi:store",newTabUrl:!0,label:cjBasics.lang.i18n("cj_i18n_00991","Info")},insights:{iconName:"__mdi:assessment",newTabUrl:!0,label:cjBasics.lang.i18n("cj_i18n_00993","Insights")},reviews:{iconName:"__mdi:star",newTabUrl:!0,label:cjBasics.lang.i18n("cj_i18n_00801","Reviews")},messaging:{iconName:"__mdi:message",newTabUrl:!0,divider:w&&!E,label:cjBasics.lang.i18n("cj_i18n_01727","Messaging")},photos:{iconName:"__mdi:photo_library",newTabUrl:!0,shortcutPathname:"photos",brandOnly:!0,label:cjBasics.lang.i18n("cj_i18n_00994","Photos")},site:{iconName:"__mdi:web",newTabUrl:!0,label:cjBasics.lang.i18n("cj_i18n_00992","Website"),divider:!0},adwords:{iconName:"__mdi:cjg_ads",newTabUrl:!0,shortcutId:"169",label:cjBasics.lang.i18n("cj_i18n_01501","Create an ad"),external:!w},create:{iconName:"__mdi:add_location",newTabUrl:!0,shortcutPathname:"create",divider:!0,label:cjBasics.lang.i18n("cj_i18n_00555","Add location")},locations:{iconName:"__mdi:business",newTabUrl:!0,label:cjBasics.lang.i18n("cj_i18n_01500","Manage locations")},linkedaccounts:{iconName:"__mdi:link",newTabUrl:!0,label:cjBasics.lang.i18n("cj_i18n_01439","Linked accounts")},settings:{iconName:"__mdi:settings",newTabUrl:!0,label:cjBasics.lang.i18n("cj_i18n_00298","Settings")}};if(w){b=bmElements.createElement("ogb",{darkMode:n.darkMode,serviceIcon:"my_business",serviceLabel:cjBasics.lang.i18n("cj_i18n_00554","My Business"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),bmApis:n,onNewTab:function(){n.openTab(B+y)}}),e.appendChild(b);var k=mdElements.createElement("container",{darkMode:n.darkMode,scrollable:!0,shadow:"thinOnScroll"});e.appendChild(k);var x=E?I:L;return u=bmElements.createElement("navlist",{compact:E,items:x.map(function(e){var n=U[e];return n.id=e,n}),onClick:a,onNewTab:a}),void k.appendChild(u)}bmElements.setLoading(e,!0),b=bmElements.createElement("ogb",{drawer:{color:f},serviceIcon:"my_business",serviceLabel:cjBasics.lang.i18n("cj_i18n_00554","My Business"),pageLabel:cjBasics.lang.i18n("cj_i18n_01500","Manage locations"),bmApis:n,onNewTab:function(){A.getCleanUrl(T).then(function(e){var a=e||B+y;n.openTab(a)})}}),e.appendChild(b),o(b.cjceDrawerEle);var M=cjBasics.webRequest.addListener("onBeforeRequest",function(e){return setTimeout(function(){t("locations")}),M.removeListener(),{redirectUrl:"about:blank"}},{urls:["https://accounts.google.com/AccountChooser*service=lbc*"+E+"*dashboard*bm_cid*mybusiness*"]},["blocking"]);cjgApis.cache.getItem(n.account,"bm_cache_v05__mybusiness__lastview").then(function(e){"object"==typeof e&&(Date.now()-e.timestamp>864e5||(m(e),t(e.viewId)))});var A=bmElements.createElement("iframe",{src:s(y),solid:!0,shadow:!0,onMessage:function(e){var a=e.bm_method,s=e.bm_value;"mybusinessWebsiteData"===a?(m(s),e.timestamp=Date.now(),cjgApis.cache.setItem(n.account,"bm_cache_v05__mybusiness__lastview",s)):"mybusinessDoneLoading"===a&&l()},onLoad:function(){j||l()}});e.appendChild(A)}});