cjModules.define(function(){"use strict";return function(e,a){function n(e){a.openTab(m+e)}function c(e,n){a.openTab(n.newTabUrl)}function i(e){n("search/"+encodeURIComponent(e))}function l(){n("")}function o(e,a){a||(d=e),h.src=r(e)}function r(e){return cjBasics.urlParams.attach(e,{bm_cid:"poly",bm_xfo:a.sid,bm_cst:"1",bm_wiz:a.sid,hl:cjBasics.lang.current})}var s,t,_=cjBasics.navigator.vivaldi,b="https://poly.google.com",m=b+"/"+a.wizPath,d=m,g="#e51559",j=[{newTabUrl:m,iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home")},{newTabUrl:"https://developers.google.com/poly/"+("0"!==a.account.authuser?"?authuser="+a.account.authuser:""),iconName:"__mdi:code",label:cjBasics.lang.i18n("cj_i18n_01721","Developer Site"),external:!_},{header:!0,color:g,label:cjBasics.lang.i18n("cj_i18n_01456","Your stuff")},{newTabUrl:m+"user",iconName:"__mdi:face",label:cjBasics.lang.i18n("cj_i18n_01459","Your profile")},{newTabUrl:m+"uploads",iconName:"__mdi:folder",label:cjBasics.lang.i18n("cj_i18n_01460","Your uploads")},{newTabUrl:m+"likes",iconName:"__mdi:favorite_border",label:cjBasics.lang.i18n("cj_i18n_01461","Your likes")},{header:!0,color:g,label:cjBasics.lang.i18n("cj_i18n_01457","Explore")},{newTabUrl:m+"tiltbrush",icon:{url:"/pages/poly/ic_tiltbrush.png"},label:cjBasics.lang.i18n("cj_i18n_00726","Tilt Brush")},{newTabUrl:m+"blocks",icon:{url:"/pages/poly/ic_blocks.png"},label:cjBasics.lang.i18n("cj_i18n_00911","Blocks")},{newTabUrl:m+"tourcreator",icon:{url:"/pages/poly/ic_tourcreator.png"},label:cjBasics.lang.i18n("cj_i18n_01462","Tours")},{header:!0,color:g,label:cjBasics.lang.i18n("cj_i18n_01458","Categories")},{newTabUrl:m+"category/animals",iconName:"__mdi:pets",label:cjBasics.lang.i18n("cj_i18n_01464","Animals & Pets")},{newTabUrl:m+"category/architecture",iconName:"__mdi:business",label:cjBasics.lang.i18n("cj_i18n_01465","Architecture")},{newTabUrl:m+"category/art",iconName:"__mdi:palette",label:cjBasics.lang.i18n("cj_i18n_01466","Art")},{newTabUrl:m+"category/culture",iconName:"__mdi:language",label:cjBasics.lang.i18n("cj_i18n_01467","Culture & Humanity")},{newTabUrl:m+"category/current-events",iconName:"__mdi:news",label:cjBasics.lang.i18n("cj_i18n_01468","Current Events")},{newTabUrl:m+"category/food",iconName:"__mdi:restaurant",label:cjBasics.lang.i18n("cj_i18n_01469","Food & Drink")},{newTabUrl:m+"category/furniture-home",iconName:"__mdi:weekend",label:cjBasics.lang.i18n("cj_i18n_01470","Furniture & Home")},{newTabUrl:m+"category/history",iconName:"__mdi:account_balance",label:cjBasics.lang.i18n("cj_i18n_01471","History")},{newTabUrl:m+"category/nature",iconName:"__mdi:local_florist",label:cjBasics.lang.i18n("cj_i18n_01472","Nature")},{newTabUrl:m+"category/objects",iconName:"__mdi:category",label:cjBasics.lang.i18n("cj_i18n_01473","Objects")},{newTabUrl:m+"category/people",iconName:"__mdi:adb",label:cjBasics.lang.i18n("cj_i18n_01474","People & Characters")},{newTabUrl:m+"category/places",iconName:"__mdi:landscape",label:cjBasics.lang.i18n("cj_i18n_01475","Places & Scenes")},{newTabUrl:m+"category/science",iconName:"__mdi:experiment",label:cjBasics.lang.i18n("cj_i18n_01476","Science")},{newTabUrl:m+"category/sports-fitness",iconName:"__mdi:youtube_sports",label:cjBasics.lang.i18n("cj_i18n_01477","Sports & Fitness")},{newTabUrl:m+"category/tech",iconName:"__mdi:phone_android",label:cjBasics.lang.i18n("cj_i18n_01478","Tools & Technology")},{newTabUrl:m+"category/transport",iconName:"__mdi:directions_bus",label:cjBasics.lang.i18n("cj_i18n_01479","Transport")},{newTabUrl:m+"category/travel",iconName:"__mdi:travel",label:cjBasics.lang.i18n("cj_i18n_01480","Travel & Leisure")}];if(_){s=bmElements.createElement("ogb",{darkMode:a.darkMode,serviceIcon:"poly",serviceLabel:cjBasics.lang.i18n("cj_i18n_00967","Poly"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),searchbox:{color:g,submitInNewTab:!0,onSubmit:i},bmApis:a,onNewTab:l}),e.appendChild(s),a.onPageDisplay(s.cjceSearchboxEle.select);var u=mdElements.createElement("container",{darkMode:a.darkMode,scrollable:!0,shadow:"thinOnScroll"});return e.appendChild(u),t=bmElements.createElement("navlist",{items:j,onClick:c,onNewTab:c}),void u.appendChild(t)}s=bmElements.createElement("ogb",{darkMode:a.darkMode,drawer:{color:g},serviceIcon:"poly",serviceLabel:cjBasics.lang.i18n("cj_i18n_00967","Poly"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),searchbox:{color:g,onSubmit:function(e){o(m+"search/"+encodeURIComponent(e),!0)},onSubmitAlt:i,onClear:function(){o(d)}},bmApis:a,onNewTab:function(){h.getCleanUrl(b).then(function(e){e?a.openTab(e):l()})}}),e.appendChild(s),a.onPageDisplay(s.cjceSearchboxEle.select);var p=s.cjceDrawerEle;t=bmElements.createElement("navlist",{compact:!0,isSelector:!0,selectedId:"home",items:j,onChange:function(e,a){h.src=r(a.newTabUrl),s.cjceSetPageLabel(a.label)},onNewTab:c}),p.appendChild(t);var h=bmElements.createElement("iframe",{src:r(m),solid:!0,shadow:a.darkMode,onMessage:function(e){var a=e.bm_method,n=e.bm_value;"polyPageTitle"===a&&s.cjceSetPageLabel(n||"Notes")}});e.appendChild(h)}});