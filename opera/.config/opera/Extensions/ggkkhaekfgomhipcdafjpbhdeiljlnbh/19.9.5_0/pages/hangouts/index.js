cjModules.define(function(){"use strict";return function(e,a){bmElements.setLoading(e,!0);var n,t="https://hangouts.google.com",c=t+"/",i="#34a853",s={contacts:{iconName:"__mdi:people",label:cjBasics.lang.i18n("cj_i18n_01486","Contacts")},conversations:{iconName:"__mdi:message",label:cjBasics.lang.i18n("cj_i18n_01487","Conversations")},calls:{iconName:"__mdi:call",label:cjBasics.lang.i18n("cj_i18n_01488","Phone Calls")},invites:{iconName:"__mdi:drafts",label:cjBasics.lang.i18n("cj_i18n_01489","Invites"),divider:!0},history:{iconName:"__mdi:history",label:cjBasics.lang.i18n("cj_i18n_00808","Chat history"),newTabUrl:"https://mail.google.com/mail/u/"+a.account.authuser+"/#chats",external:!0},settings:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),divider:!0},relatedHeader:{header:!0,color:i,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},chat:{iconName:"__mdi:cj_chat",label:cjBasics.lang.i18n("cj_i18n_01338","Hangouts Chat"),shortcutId:"559",external:!a.servicesDatabase.chat},meet:{iconName:"__mdi:meet",label:cjBasics.lang.i18n("cj_i18n_01493","Hangouts Meet"),shortcutId:"545",external:!a.servicesDatabase.meet}},l=bmElements.createElement("ogb",{drawer:{color:i},serviceIcon:"hangouts",serviceLabel:cjBasics.lang.i18n("cj_i18n_00420","Hangouts"),pageLabel:s.conversations.label,bmApis:a,onNewTab:function(){var e=cjgShortcuts.getUrl("218",a.account);a.openTab(e)}});e.appendChild(l);var o=mdElements.createElement("iconbutton",{iconName:"__mdi:video_call",label:cjBasics.lang.i18n("cj_i18n_01490","Start new video call"),onClick:function(){var e=c+a.wizPath+"call/";a.openTab(e)}});l.cjceAppendChild(o);var r=l.cjceDrawerEle,m=l.cjceNavigatorEle;m.style.transform="translateX(8px)";var d=bmElements.createElement("navlist",{isSelector:!0,selectedId:"conversations",items:s,onChange:function(e){return"chat"===e||"meet"===e?void a.pageManager.navigate(e):void n.cjceSendFrameCommand({method:"hangoutsNavigate",value:e},t)},onNewTab:function(e,n){var t=n.newTabUrl||cjgShortcuts.getUrl(n.shortcutId,a.account);a.openTab(t)}});r.appendChild(d),n=bmElements.createElement("iframe",{src:cjBasics.urlParams.attach(c+"webchat/"+a.wizPath+"start",{bm_xfo:a.sid,bm_cid:"hangouts",hl:cjBasics.lang.current}),solid:!0,shadow:!0,onMessage:function(a){var n=a.bm_method,t=a.bm_value;"hangoutsLoaded"===n?bmElements.setLoading(e,!1):"hangoutsNavigate"===n&&(d.cjceSelectedId=t,l.cjceSetPageLabel(s[t].label))}}),e.appendChild(n),setTimeout(function(){bmElements.setLoading(e,!1)},1e4)}});