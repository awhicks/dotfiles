cjModules.define(function(){"use strict";return function(e,a){function n(e){var n=cjBasics.urlParams.attach(u+"search",{from:"[]",hl:cjBasics.lang.current,q:JSON.stringify(e.split(" "))});a.openTab(n)}function t(e){var n=e||{},t={authuser:a.account.authuser,hl:cjBasics.lang.current};"undefined"!=typeof n.number?(t.hip=n.number,t.hpn=n.number):t.hip="";var c="https://plus.google.com/hangouts/_/",i=cjBasics.urlParams.attach(c,t);a.openTab(i)}function c(){return cjBasics.ajax(p+"request/user?hl="+cjBasics.lang.current,{fetchAs:"json"}).then(function(e){var a=e&&e.formattedCredit;if(a)return a;throw Error()},function(){throw Error()})}function i(){return cjBasics.ajax(p+"inbox/recent/all/?hl="+cjBasics.lang.current,{fetchAs:"xml"}).then(function(e){if(!e)throw Error();var a=e.querySelector("json");if(!a)throw Error();var n=a.textContent;if(!n)throw Error();var t=n.replace("<![CDATA[","").replace("]]>","");if(!t)throw Error();var c;try{c=JSON.parse(t)}catch(i){throw Error(i)}var l=c&&c.messages;if(!l)throw Error();return l},function(){throw Error()})}function l(e){return 2===e?_.voicemail:10===e||11===e?_.sms:0===e?_.missed:1===e||9===e?_.received:_.placed}function r(e){var a=mdElements.createElement("card",{withPadding:!0}),n=mdElements.createElement("title",{label:e.displayNumber});a.appendChild(n);var c=l(e.type),i=mdElements.createElement("icon",c);i.classList.add("bm-p-classicvoice-callicon"),a.appendChild(i);var r=document.createElement("p");r.textContent=e.displayStartDateTime,a.appendChild(r);var s=mdElements.createElement("secondarytext",{label:e.relativeStartTime});a.appendChild(s);var o=mdElements.createElement("button",{hairline:!0,color:h,label:cjBasics.lang.i18n("cj_i18n_00213","Call")});return o.classList.add("bm-p-classicvoice-callbutton"),o.addEventListener("click",function(){t({number:e.phoneNumber})}),a.appendChild(o),a}function s(){d.textContent="",bmElements.setLoading(e,!0),i().then(function(e){Object.keys(e).forEach(function(a){var n=e[a];if(!n.isTrash&&!n.isSpam){var t=r(e[a]);d.appendChild(t)}})},function(){var e=mdElements.createElement("emptystate",{color:h,label:cjBasics.lang.i18n("cj_i18n_00394","No recent calls"),iconName:"__mdi:call"});d.appendChild(e)}).then(function(){bmElements.setLoading(e,!1)})}function o(){bmElements.setLoading(e,!0),d.textContent="",c().then(function(n){var t=mdElements.createElement("card",{withPadding:!0}),c=mdElements.createElement("title",{label:cjBasics.lang.i18n("cj_i18n_01171","Credit")+": "});t.appendChild(c);var i=document.createElement("span");i.className="bm-p-classicvoice-credits",i.textContent=n,c.appendChild(i);var l=mdElements.createElement("button",{hairline:!0,color:h,label:cjBasics.lang.i18n("cj_i18n_00395","Add credits")});l.addEventListener("click",function(){a.openTab(u+"billing")}),t.appendChild(l),d.appendChild(t),bmElements.setLoading(e,!1)},function(){var a=mdElements.createElement("card",{withPadding:!0});a.textContent=cjBasics.lang.i18n("cj_i18n_01172","Couldn't fetch your Google Voice credits. Is Google Voice enabled for your account?"),d.appendChild(a),bmElements.setLoading(e,!1)})}function m(){var t=bmElements.createElement("ogb",{darkMode:a.darkMode,drawer:{color:h},serviceIcon:"voice",serviceLabel:cjBasics.lang.i18n("cj_i18n_00443","Voice"),pageLabel:cjBasics.lang.i18n("cj_i18n_00397","Call history"),searchbox:{color:h,onSubmit:n,submitInNewTab:!0},bmApis:a,onNewTab:function(){var e=v[b].newTabUrl;a.openTab(e)}});e.appendChild(t);var c=t.cjceDrawerEle;a.onPageDisplay(t.cjceSearchboxEle.select);var i=bmElements.createElement("navlist",{isSelector:!0,selectedId:b,items:v,onChange:function(e,a){b=e,"callHistory"===e?s():"credits"===e&&o(),t.cjceSetPageLabel(a.label)},onNewTab:function(e,n){a.openTab(n.newTabUrl)}});c.appendChild(i),d=mdElements.createElement("container",{darkMode:a.darkMode,scrollable:!0,shadow:"transparentOnScroll"}),e.appendChild(d),s()}var d,u="https://voice.google.com/u/"+a.account.authuser+"/",p="https://www.google.com/voice/b/"+a.account.authuser+"/",h="#00897B",b="callHistory",_={voicemail:{name:"__mdi:voicemail"},sms:{name:"__mdi:textsms"},missed:{name:"__mdi:call_missed",color:"#ea4335"},received:{name:"__mdi:call_received",color:"#34a853"},placed:{name:"__mdi:call_made",color:h}},v={callHistory:{iconName:"__mdi:call",label:cjBasics.lang.i18n("cj_i18n_01170","Calls"),newTabUrl:u+"calls"},messages:{iconName:"__mdi:message",label:cjBasics.lang.i18n("cj_i18n_01128","Messages"),newTabUrl:u+"messages",external:!0},voicemail:{iconName:"__mdi:voicemail",label:cjBasics.lang.i18n("cj_i18n_01129","Voicemail"),newTabUrl:u+"voicemail",external:!0,divider:!0},archive:{iconName:"__mdi:archive",label:cjBasics.lang.i18n("cj_i18n_00821","Archive"),newTabUrl:u+"archive",external:!0},spam:{iconName:"__mdi:report",label:cjBasics.lang.i18n("cj_i18n_00306","Spam"),newTabUrl:u+"spam",external:!0,divider:!0},credits:{iconName:"__mdi:account_balance_wallet",label:cjBasics.lang.i18n("cj_i18n_00398","Credits"),newTabUrl:u+"settings#payments"},settings:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),newTabUrl:u+"settings",external:!0}};m()}});