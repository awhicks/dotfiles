cjModules.define(function(){"use strict";return function(e,t){function a(){var n=cjBasics.uniqueId.generate(),i=cjBasics.webRequest.addListener("onBeforeRequest",function(n){var c=new window.URL(n.url),s=c.pathname;if("/"!==s&&"/_meet"!==s){var o=c.origin+s;return"0"===t.account.authuser&&"meet.google.com"!==c.hostname||(o+="?authuser="+t.account.authuser),t.openTab(o),i.removeListener(),bmElements.setLoading(e,!0),a(),{redirectUrl:"about:blank"}}},{urls:["https://hangouts.google.com/*bm_cid=meet&bm_fid="+n+"*","https://meet.google.com/*bm_cid=meet&bm_fid="+n+"*"]},["blocking"]);s.src=cjBasics.urlParams.attach(c+"/_meet",{authuser:t.account.authuser,bm_xfo:t.sid,bm_cid:"meet",bm_fid:n,bm_cst:"1",bm_wiz:"1",hl:cjBasics.lang.current})}var n="#00897B";bmElements.setLoading(e,!0);var c="https://meet.google.com",i=bmElements.createElement("ogb",{drawer:{color:n},serviceIcon:"meet",serviceLabel:cjBasics.lang.i18n("cj_i18n_00809","Meet"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),bmApis:t,onNewTab:function(){var e=cjgShortcuts.getUrl("545",t.account);t.openTab(e)}});e.appendChild(i);var s=bmElements.createElement("iframe",{shadow:!0,solid:!0,onLoad:function(){s.src.startsWith("https://")&&bmElements.setLoading(e,!1)}});e.appendChild(s);var o=i.cjceDrawerEle,r={home:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),shortcutId:"545",divider:!0},chat:{iconName:"__mdi:cj_chat",label:cjBasics.lang.i18n("cj_i18n_01338","Hangouts Chat"),shortcutId:"559"},hangouts:{iconName:"__mdi:hangout",label:cjBasics.lang.i18n("cj_i18n_01337","Classic Hangouts"),shortcutId:"218"},calendar:{iconName:"__mdi:event",label:cjBasics.lang.i18n("cj_i18n_00302","Calendar"),shortcutId:"27"}},m=bmElements.createElement("navlist",{selectedId:"home",items:r,onClick:function(e){"home"!==e&&t.pageManager.navigate(e)},onNewTab:function(e,a){var n=a.newTabUrl||cjgShortcuts.getUrl(a.shortcutId,t.account);t.openTab(n)}});o.appendChild(m),a()}});