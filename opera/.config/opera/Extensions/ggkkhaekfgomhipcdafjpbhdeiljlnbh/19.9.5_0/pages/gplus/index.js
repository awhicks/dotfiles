cjModules.define(function(){"use strict";var e="undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser;return function(n,i){function a(e){return e.map(function(e){var n=L[e];return n.id=e,n})}function o(e){i.openTab(k+e)}function t(e,n){o(n.newTabUrl)}function c(e,n){var i=n.newTabUrl,a=("collections"===e||"communities"===e||"people"===e||"stream"===e)&&T.value;a&&(i="s/"+encodeURIComponent(a),"stream"!==e&&(i+="/"+e)),o(i)}function l(e){o("s/"+encodeURIComponent(e))}function r(){o("")}function s(){n.textContent="",C=bmElements.createElement("ogb",{darkMode:i.darkMode,serviceIcon:"gplus",serviceLabel:cjBasics.lang.i18n("cj_i18n_00417","Google+"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),searchbox:{color:U,submitInNewTab:!0,onSubmit:l},bmApis:i,onNewTab:r}),n.appendChild(C),T=C.cjceSearchboxEle,i.onPageDisplay(T.select);var e=mdElements.createElement("container",{darkMode:i.darkMode,scrollable:!0,shadow:"thinOnScroll"});n.appendChild(e),E=a(["stream","discover","communities","collections","events","profile","people","notifications","settings","help","brand","create","featuredphotos"]),S=bmElements.createElement("navlist",{items:E,onClick:c,onNewTab:c}),e.appendChild(S)}function d(){A.getCleanUrl(I).then(function(e){if(e)return void i.openTab(e);var n="back"===D?"":D;o(n)})}function m(e){var n=++z;R.then(function(){z===n&&A.cjceSendFrameCommand({method:"bmUpdatePath",value:e})})}function u(e,n){var i=L[e];(n||D!==e)&&(D=e,A.cjceSendFrameCommand({method:"bmClickDomElement",value:L[e].navigationItemSelector},I),C.cjceSetPageLabel(i.label))}function b(){S=bmElements.createElement("navlist",{isSelector:!0,selectedId:D,items:E,onChange:function(e){u(e)},onNewTab:t}),y.textContent="",y.appendChild(S)}function g(){return i.account.validSession?cjBasics.ajax(k).then(function(e){return e.indexOf("Join Google+")!==-1||e.indexOf('rel="canonical" href="https://plus.google.com/discover')!==-1?"disabled":e.indexOf("<title>Google</title>")!==-1?"disabledAdministrator":"enabled"}):Promise.resolve("invalidSession")}function f(){var e="";if(!S)return e;var n=S.cjceSelectedId,i=L[n].newTabUrl;return"string"==typeof i?i:e}function p(e){return cjBasics.urlParams.attach(k+f(),{bm_cid:"gplus",bm_shareurl:e,bm_cst:"1",bm_xfo:i.sid,bm_wiz:i.sid,hl:cjBasics.lang.current})}function _(){return new Promise(function(n){"popup"===i.environment&&e.tabs&&e.tabs.query||n(null),e.tabs.query({currentWindow:!0,active:!0},function(e){var i=e[0]&&e[0].url;n(i&&(i.startsWith("https://")||i.startsWith("http://"))?i:null)})})}function v(){var e=mdElements.createElement("container");return _().then(function(n){var i=p(n);A=bmElements.createElement("iframe",{src:i,solid:!0,onMessage:function(e){var n=e.bm_method,i=e.bm_value;"frameCstLoaded"===n?N=!1:"gplusWebsiteTitle"===n?"back"===D&&M.cjceSetPageLabel(i):"gplusWebsiteView"===n&&(O===!1&&(O=!0,P()),D=i,"back"===D?M.hidden=!1:(S.cjceSelectedId=D,M.hidden=!0))}});var a=cjBasics.webRequest.addListener("onBeforeRedirect",function(e){var n=e.redirectUrl;n.startsWith("https://plus.google.com/")&&n.indexOf("/discover")!==-1&&(j(),a.removeListener())},{types:["sub_frame"],urls:[i]});e.appendChild(A)}),e}function h(){T.value="",T.focus(),G.cjceSetCollapseState(!1),u(W,!0)}function j(){if(!B){B=!0,E=a(["discover","up"]),W="discover",D="discover",C.cjceSetPageLabel(L[D].label),b();var e=p();A?A.src=e:R.then(function(){A.src=e})}}function w(){var e=v();g().then(function(e){if(e!==!0){if("disabled"===e||"invalidSession"===e)return void j();if("disabledAdministrator"===e){n.textContent="";var a=bmElements.createElement("fulldialog",{darkMode:i.darkMode,bmApis:i,onNewTab:r,lockup:{label:"google_logo +"},iconName:"gplus",message:cjBasics.lang.i18n("cj_i18n_00336","Google+ is not available for your organization. Please contact your administrator to enable this service for at least one user in the organization."),actionLabel:cjBasics.lang.i18n("cj_i18n_00234","Change account"),action:function(){i.pageManager.navigate("accountchooser")}});n.appendChild(a)}}}),C=bmElements.createElement("ogb",{drawer:!0,serviceIcon:"gplus",serviceLabel:cjBasics.lang.i18n("cj_i18n_00417","Google+"),pageLabel:L[D].label,searchbox:{color:U,onClear:h,onSubmit:function(e){var n="s/"+encodeURIComponent(e);m(n)},onSubmitAlt:l},bmApis:i,onNewTab:d}),n.appendChild(C),G=C.cjceNavigatorEle,y=C.cjceDrawerEle,T=C.cjceSearchboxEle,M=bmElements.createElement("ogb",{displayBack:!0,floating:!0,serviceLabel:cjBasics.lang.i18n("cj_i18n_00417","Google+"),pageLabel:cjBasics.lang.i18n("cj_i18n_01174","Loading")+"...",bmApis:i,onNewTab:d,onBack:h}),M.hidden=!0,n.appendChild(M),b(),i.onPageDisplay(T.select),n.appendChild(e),u(D)}var B,C,S,T,E,N=cjBasics.navigator.vivaldi,U="#ea4335",I="https://plus.google.com",k=I+"/"+i.wizPath,x=i.account.obfuscatedId,L={stream:{color:U,label:cjBasics.lang.i18n("cj_i18n_00291","Home"),iconName:"__mdi:home",navigationItemSelector:"[role='navigation'] [href='./'], [role='dialog'] [href='./']",newTabUrl:""},discover:{color:"#311b92",label:cjBasics.lang.i18n("cj_i18n_00926","Discover"),iconName:"__mdi:explore",navigationItemSelector:"[href='./discover']",newTabUrl:"discover"},collections:{color:"#03a9f4",label:cjBasics.lang.i18n("cj_i18n_00292","Collections"),iconName:"__mdi:google_collections",newTabUrl:"collections"},communities:{color:"#34A853",label:cjBasics.lang.i18n("cj_i18n_00293","Communities"),iconName:"__mdi:communities",navigationItemSelector:"[href='./communities']",newTabUrl:"communities"},events:{color:U,label:cjBasics.lang.i18n("cj_i18n_00484","Events"),iconName:"__mdi:event",newTabUrl:"events"},profile:{label:cjBasics.lang.i18n("cj_i18n_00294","Profile"),navigationItemSelector:"[role='navigation'] [href^='./"+x+"'], [role='dialog'] [href^='./"+x+"']",iconName:"__mdi:account_circle",newTabUrl:x},people:{label:cjBasics.lang.i18n("cj_i18n_00295","People"),navigationItemSelector:"[role='navigation'] [href^='./circles'], [role='navigation'] [href^='./people'], [role='dialog'] [href^='./circles'], [role='dialog'] [href^='./people']",iconName:"__mdi:people",newTabUrl:"people"},notifications:{color:U,label:cjBasics.lang.i18n("cj_i18n_00296","Notifications"),navigationItemSelector:"[role='navigation'] [href^='./notifications/all'], [role='dialog'] [href^='./notifications/all']",iconName:"__mdi:notifications",newTabUrl:"notifications/all",divider:!0},settings:{label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),navigationItemSelector:"[role='navigation'] [href^='./settings'], [role='dialog'] [href^='./settings']",iconName:"__mdi:settings",newTabUrl:"settings"},help:{iconName:"__mdi:help_outline",label:cjBasics.lang.i18n("cj_i18n_00438","Help"),newTabUrl:"help",divider:!0},up:{label:cjBasics.lang.i18n("cj_i18n_01323","Join Google+"),iconName:"__mdi:google_plus",newTabUrl:"up",external:!0},brand:{label:cjBasics.lang.i18n("cj_i18n_00803","Google+ for your brand"),iconName:"__mdi:pages",newTabUrl:"brand"},create:{label:cjBasics.lang.i18n("cj_i18n_00642","Google+ Create"),iconName:"__mdi:add_circle_outline",newTabUrl:"settings"},featuredphotos:{label:cjBasics.lang.i18n("cj_i18n_00794","Featured photos screensaver"),iconName:"__mdi:wallpaper",newTabUrl:"settings"}};if(N)return void s();N=!0,setTimeout(function(){N&&s()},1e3),E=a(["stream","discover","communities","profile","people","notifications","settings"]);var P,y,G,M,A,W="stream",D=W,O=!1,R=new Promise(function(e){P=e}),z=0;w()}});