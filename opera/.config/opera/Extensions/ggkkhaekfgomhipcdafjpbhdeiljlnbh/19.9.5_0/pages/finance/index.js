cjModules.define(function(){"use strict";return function(e,a){function n(e){var n=cjBasics.urlParams.attach("https://www.google.com/search",{authuser:g,q:e,tbm:"fin"});a.openTab(n)}function c(e){b=bmElements.createElement("navlist",{selectedId:d,isSelector:!0,items:j,onChange:function(e,a){d=e,m.cjceSetPageLabel(j[e].label),browserStorage.local.setItem("bm_cache_v05__finance__lastused",e),l()},onNewTab:t}),e.appendChild(b)}function i(){return cjBasics.urlParams.attach("https://www.google.com/m",{authuser:g,hl:cjBasics.lang.current,fg:"1",gws_rd:"cr",bm_cid:"financeoverview",bm_xfo:a.sid,bm_cst:"1",bm_mua:a.sid,stick:f,igu:cjBasics.navigator.vivaldi?"1":null,kptab:d,q:"finance"})}function l(){bmElements.setLoading(e,!0),o.src=i(),w="finance"}function t(e){var n=cjBasics.urlParams.attach("https://www.google.com/finance",{authuser:g,kptab:e||d});"currencyConverter"===e&&(n="https://www.google.com/search?q=Currency+converter&hl=en"),a.openTab(n)}function s(){m=bmElements.createElement("ogb",{drawer:{color:u},serviceLabel:cjBasics.lang.i18n("cj_i18n_00412","Finance"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),serviceIcon:"finance",searchbox:{color:u,onSubmit:n,submitInNewTab:!0},bmApis:a,onNewTab:function(){t()}}),e.appendChild(m),_=bmElements.createElement("ogb",{displayBack:!0,floating:!0,serviceLabel:cjBasics.lang.i18n("cj_i18n_00412","Finance"),pageLabel:cjBasics.lang.i18n("cj_i18n_01174","Loading")+"...",bmApis:a,onNewTab:function(){o.getCleanUrl("https://www.google.com").then(a.openTab)},onBack:function(){l(),_.hidden=!0,_.cjceSetPageLabel(cjBasics.lang.i18n("cj_i18n_01174","Loading")+"...")}}),_.hidden=!0,e.appendChild(_),c(m.cjceDrawerEle),r=m.cjceSearchboxEle,browserStorage.local.getItem("bm_cache_v05__finance__lastused").then(function(e){e&&e!==d&&(d=e,b.cjceSelectedId=e,m.cjceSetPageLabel(j[e].label))}),o=bmElements.createElement("iframe",{src:i(),solid:!0,shadow:!0,onLoad:function(){bmElements.setLoading(e,!1)},onMessage:function(e){var n=e.bm_method,c=e.bm_value;if("financeNewView"===n)d=c,b.cjceSelectedId=c,m.cjceSetPageLabel(j[c].label),l();else if("financeNewQuery"===n){if(c!==w){w=c;var i="finance"===c.toLowerCase();i?l():_.cjceSetPageLabel(c.replace(/\+/g," ")),_.hidden=i}}else if("financeOpenUrl"===n){var t=cjBasics.cleanBmUrl(c);a.openTab(t)}}}),e.appendChild(o),a.onPageDisplay(r.select)}var o,r,m,b,_,u="#1a73e8";bmElements.setLoading(e,!0);var g="0"===a.account.authuser?null:a.account.authuser,d="MARKET_SUMMARY",w="finance",f="H4sIAAAAAAAAAOPQeMSozC3w8sc9YSmpSWtOXmMU4RJyy8xLzEtO9UnMS8nMSw9ITE_lAQCCiJIYKAAAAA",j={MARKET_SUMMARY:{iconName:"__mdi:home",newTabUrl:!0,label:cjBasics.lang.i18n("cj_i18n_00291","Home")},YOUR_STOCKS:{iconName:"__mdi:account_circle",newTabUrl:!0,label:cjBasics.lang.i18n("cj_i18n_01314","Your Stocks")},LOCAL_MARKETS:{iconName:"__mdi:place",newTabUrl:!0,label:cjBasics.lang.i18n("cj_i18n_01315","Local Markets")},WORLD_MARKETS:{iconName:"__mdi:language",newTabUrl:!0,label:cjBasics.lang.i18n("cj_i18n_01316","World Markets"),divider:!0},currencyConverter:{iconName:"__mdi:swap_horiz",newTabUrl:!0,external:!0,label:cjBasics.lang.i18n("cj_i18n_00829","Currency converter")}};s()}});