cjModules.define(function(){"use strict";return function(e,a){function n(){m.getCleanUrl(c).then(function(e){var n=e;n&&n.indexOf("/marketplace/appfinder")===-1||(n=i),a.openTab(n)})}var c="https://gsuite.google.com",i=c+"/"+a.wizPath+"marketplace/",t=bmElements.createElement("ogb",{navigator:{onClick:function(){m.cjceSendFrameCommand({method:"marketplaceToggleDrawer"},c)}},serviceIcon:"gsuite_marketplace",serviceLabel:cjBasics.lang.i18n("cj_i18n_00456","G Suite"),pageLabel:cjBasics.lang.i18n("cj_i18n_01512","Marketplace"),searchbox:{color:"#1a73e8",onSubmit:function(e){m.cjceSendFrameCommand({method:"bmFillAndSubmit",value:{selector:"input",newValue:e}},c)},onClear:function(){m.cjceSendFrameCommand({method:"marketplaceClearResults"},c)}},bmApis:a,onNewTab:n});e.appendChild(t),a.onPageDisplay(t.cjceSearchboxEle.select);var l=cjBasics.urlParams.attach(i+"appfinder",{bm_cid:"marketplace",bm_xfo:a.sid,bm_cst:"1",bm_wiz:a.sid,hl:cjBasics.lang.current}),m=bmElements.createElement("iframe",{src:l,solid:!0,shadow:!0,onMessage:function(e){var a=e.bm_method,n=e.bm_value;"marketplaceDisplayBackbar"===a&&(r.hidden=!n)}});e.appendChild(m);var r=bmElements.createElement("ogb",{displayBack:!0,bmApis:a,onNewTab:n,serviceLabel:cjBasics.lang.i18n("cj_i18n_00456","G Suite"),pageLabel:cjBasics.lang.i18n("cj_i18n_01512","Marketplace"),floating:!0,onBack:function(){m.cjceSendFrameCommand({method:"marketplaceClickBack"},c)}});r.hidden=!0,e.appendChild(r)}});