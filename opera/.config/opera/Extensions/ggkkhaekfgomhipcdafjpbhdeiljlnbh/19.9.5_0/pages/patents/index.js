cjModules.define(function(){"use strict";return function(e,a){bmElements.setLoading(e,!0);var c="https://patents.google.com",n=c+"/",t="#1a73e8",s=bmElements.createElement("ogb",{drawer:{color:t},serviceIcon:"patents",serviceLabel:cjBasics.lang.i18n("cj_i18n_00427","Patents"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),bmApis:a,onNewTab:function(){d.getCleanUrl(c).then(function(e){var c=e||cjgShortcuts.getUrl("115",a.account);a.openTab(c)})}});e.appendChild(s);var o=s.cjceDrawerEle,l={home:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),shortcutId:"115"},relatedHeader:{header:!0,color:t,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},scholar:{iconName:"__mdi:school",label:cjBasics.lang.i18n("cj_i18n_00433","Scholar"),shortcutId:"125"},search:{iconName:"__mdi:search",label:cjBasics.lang.i18n("cj_i18n_01365","Google Search"),shortcutId:"157"}},i=bmElements.createElement("navlist",{selectedId:"home",items:l,onClick:function(e){"scholar"===e&&a.pageManager.navigate("scholar")},onNewTab:function(e,c){var n=c.newTabUrl||cjgShortcuts.getUrl(c.shortcutId,a.account);a.openTab(n)}});o.appendChild(i);var r=mdElements.createElement("iconbutton",{iconName:"__mdi:search",label:"New search",onClick:function(){o.cjceToggle(!1),d.src=m}});s.cjceAppendChild(r);var m=cjBasics.urlParams.attach(n,{bm_cid:"patents",bm_xfo:a.sid,bm_cst:"1",authuser:a.account.authuser,hl:cjBasics.lang.current}),d=bmElements.createElement("iframe",{src:m,solid:!0,shadow:!0,onLoad:function(){bmElements.setLoading(e,!1)}});e.appendChild(d)}});