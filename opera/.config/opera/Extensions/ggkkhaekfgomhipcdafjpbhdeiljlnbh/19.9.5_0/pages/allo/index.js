cjModules.define(function(){"use strict";return function(e,a){var n="https://allo.google.com",c=n+"/web",i=bmElements.createElement("ogb",{navigator:{onClick:function(){l.cjceSendFrameCommand({method:"bmAdvancedClickDomElement",value:"#settingsSidebarButton"},n)}},withShadow:!0,floating:!0,serviceIcon:"allo",serviceLabel:cjBasics.lang.i18n("cj_i18n_00729","Allo"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),bmApis:a,onNewTab:function(){a.openTab(c)}});e.appendChild(i);var l=bmElements.createElement("iframe",{solid:!0,src:cjBasics.urlParams.attach(c,{bm_xfo:a.sid,bm_cid:"allo",hl:cjBasics.lang.current,bm_cst:"1",bm_hsb:a.hsb}),onMessage:function(e){var a=e.bm_method,n=e.bm_value;"alloDisplayNav"===a&&(i.hidden=!n)}});e.appendChild(l)}});