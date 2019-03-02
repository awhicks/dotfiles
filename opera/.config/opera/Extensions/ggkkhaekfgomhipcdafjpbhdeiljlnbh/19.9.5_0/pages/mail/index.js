cjModules.define(function(){"use strict";return function(e,a,n){function i(e,a,n){var i=de[a],t={label:se[a],onClick:function(e){return"move"===a?Y=!0:"label"===a&&(Y=!1),"function"==typeof n?void n(e):void v(n)}},c="button";return"menuitem"===e?(c="item",t.icon={name:i,color:"rgba(0, 0, 0, 0.54)"}):"iconbutton"===e?(c="iconbutton",t.iconName=i):(t.color=J,t.fill="fillbutton"===e),mdElements.createElement(c,t)}function t(){var e=K.split("/"),n=e[e.length-1],i=cjBasics.numbers.hex2dec(n),t=cjgApis.url.gmailThread.encode({threadId:i,messageId:i}),c="all";K.startsWith("cv/Draft")?c=c="drafts":K.startsWith("cv/Trash")?c=c="trash":K.startsWith("cv/Spam")&&(c=c="spam");var l=F+"#"+c+"/"+t;a.openTab(l)}function c(e){var a=e.onBack;Array.isArray(e.onBackAction)&&(a=function(){v(e.onBackAction)});var n=bmElements.createElement("ogb",{displayBack:!0,floating:!0,serviceLabel:V,pageLabel:e.label,onBack:a});if(Array.isArray(e.mainActions)&&e.mainActions.forEach(function(e){var a=i(e[0],e[1],e[2]);n.cjceAppendChild(a)}),Array.isArray(e.secondaryActions)){var t=bmElements.createElement("menu",{variant:"iconbutton",hidden:!0});e.secondaryActions.forEach(function(e){var a=i("menuitem",e[0],e[1]);t.appendChild(a)});var c=i("iconbutton","more",function(e){t.cjceToggleState(),e.stopPropagation()});c.appendChild(t),n.cjceAppendChild(c)}return e.additionalFragment&&n.cjceAppendChild(e.additionalFragment),n}function l(a){if(me&&(_e[me].toolbar.hidden=!0),me=a,a){var n=_e[a];n.toolbar?n.toolbar.hidden=!1:(n.toolbar=c(n),e.appendChild(n.toolbar))}}function o(){var a=K.startsWith("tl")&&!N,n=a&&("tl/"===K||K.startsWith("tl/priority")||"tl/search/label%3Apinned"===K);e.classList.toggle("bm-p-mail--inboxview",n),K.startsWith("mn")?(b("tl"),l()):K.startsWith("er")||K.startsWith("pr")?(l(),b("tl")):K.startsWith("co")?l("co"):K.startsWith("ad")?l("ad"):K.startsWith("cv/Draft")?l("cv-draft"):K.startsWith("cv/Spam")?l("cv-spam"):K.startsWith("cv/Trash")?l("cv-trash"):K.startsWith("cv")?l("cv"):K.startsWith("lb")?l(Y?"lb-move":"lb-label"):l(),L.hidden=!a}function r(e,n){var i=cjBasics.urlParams.attach(x+"users/me/"+e,n);return cjgApis.request(i,{fetchAs:"json"},{account:a.account,requiredScopes:D})}function s(){return r("labels").then(function(e){var n=e&&e.labels||[];return cjgApis.cache.setItem(a.account,"bm_cache_v05__mail__labels",n),n},function(e){if(e&&"not_authorized"===e.cjg_error)return"not_authorized"})}function d(){return cjgApis.cache.getItem(a.account,"bm_cache_v05__mail__labels").then(function(e){if(!Array.isArray(e))throw new Error("No "+V+" label cache available");return e})}function m(e,a){e.forEach(function(e){var n=re[e];n.id=e,a.push(n)})}function _(e){var a="not_authorized"!==e,n=e,i=[];m(ie,i);var t=[],c=S?"__mdi:stacked_email":"__mdi:label";if(n&&Array.isArray(n)&&n.length>0&&n.forEach(function(e){if("system"!==e.type){var a=!S&&e.color&&e.color.backgroundColor;re.TRASH.divider=!S,t.push({id:e.id,newTabUrl:S?null:X+e.name,label:e.name,iconName:c,color:a,colorIcon:Boolean(a),superpuduHash:"tl/"+e.name.toLowerCase().replace(/ |\//g,"-")})}}),!a){var l=S?"IO_UNIM":"TRASH";re[l].divider=!0}return t.sort(function(e,a){return e.label>a.label?1:-1}),i=i.concat(t),S&&m($,i),{labels:i,authorized:a}}function u(e){return r("labels/"+e,{}).then(function(e){return e&&"threadsUnread"in e?e.threadsUnread:null},function(){return null})}function b(e){y.src=ce.split("#")[0]+"#"+e,K=e,o()}function p(){if(M)M.hidden=!1;else{M=mdElements.createElement("container"),M.classList.add("bm-p-mail-reminders");var n=bmElements.createElement("app",{pageId:"reminders",bmApis:a,pageParameters:{embedded:!0,darkMode:!1}});M.appendChild(n),e.appendChild(M)}}function h(n){var i=bmElements.createElement("navlist",{compact:!0,isSelector:!0,selectedId:"INBOX",items:n,onChange:function(a,n){"REMINDERS"===a?p():(b(n.superpuduHash),M&&(M.hidden=!0)),C.cjceSetPageLabel(n.label),e.classList.toggle("bm-p-mail--inboxview","INBOX"===a),S?(k.style.color=n.colorIcon?n.color:"",P.classList.remove("bm-p-mail-pintoggle--selected")):U&&(U.selected=O)},onNewTab:function(e,n){a.openTab(n.newTabUrl)}});return i}function j(e){return ee.indexOf(e.id)===-1}function g(){bmElements.setLoading(w,!0);var e=!1;d().then(_).then(function(a){e||(H=a.labels,R=h(a.labels),w.appendChild(R))},function(){}),s().then(_).then(function(n){if(e=!0,bmElements.setLoading(w,!1),R&&R.remove(),H=n.labels,R=h(n.labels),w.appendChild(R),n.authorized)n.labels.filter(j).forEach(function(e){u(e.id).then(function(a){null!==a&&(R.cjceGetItemEle(e.id).dataset.unreadcount=a)})});else{var i=bmElements.createElement("inlinepermission",{description:cjBasics.lang.i18n("cj_i18n_01155","To list your labels and give you unread counts, please grant read-only access to your labels and unread count"),onClick:function(){cjgApis.auth.requestPermissions(a.account,D)}});w.appendChild(i)}})}function v(e){y.cjceSendFrameCommand({method:"mailClickEle",value:e},W)}function f(){var e=document.createElement("div");return e.className="bm-p-mail-pintoggle",e.title=cjBasics.lang.i18n("cj_i18n_01580","Pinned"),e.addEventListener("click",function(){w.cjceToggle(!1);var a=e.classList.toggle("bm-p-mail-pintoggle--selected");C.cjceSetPageLabel(a?cjBasics.lang.i18n("cj_i18n_01580","Pinned"):cjBasics.lang.i18n("cj_i18n_00299","Inbox"));var n=a?"PINNED":"INBOX";b(re[n].superpuduHash)}),e}function A(e){return"tl/priority/"+encodeURIComponent(e.replace(",PI",""))}function B(e,a){e.textContent="",e.hidden=!1,O=a[0],re.INBOX.superpuduHash=A(O);var n=a.map(function(e){var a=oe[e];return a.id=e,a});U=mdElements.createElement("tabs",{fill:!0,color:Z,items:n,onChange:function(e){U.style.color=oe[e].color,b(A(e))},selected:O}),e.appendChild(U)}function E(n){return n=n?3*n:250,new Promise(function(i,t){function c(){s.remove(),s.src="about:blank",s=null}var l=cjBasics.uniqueId.generate(),o=encodeURIComponent(JSON.stringify({bm_value:a.account.displayEmail,bm_request:l})),r=!1,s=bmElements.createElement("iframe",{dataIframe:!0,src:W+"/tasks/labels/?bm_xfo="+a.sid+"&bm_cid=mail-labels#"+o,onMessage:function(e){if(e.bm_request===l&&"mailCachedLabels"===e.bm_method){r=!0;for(var a=e.bm_value,t=[],o=0;o<a.length;o++){var s=a[o];if("^all"===s)break;s in oe&&t.push(s)}t.length>0?i(t):setTimeout(function(){i(E(n))},n),c()}}});e.appendChild(s),setTimeout(function(){r||(c(),i(E(n)))},n)})}function I(){var e="openDatabase"in window;return e?E():Promise.resolve(le)}function T(){if(C=bmElements.createElement("ogb",{drawer:!0,serviceIcon:G,serviceLabel:V,pageLabel:cjBasics.lang.i18n("cj_i18n_00299","Inbox"),searchbox:{color:Z,onClear:function(){N="",L.hidden=!1,e.classList.add("bm-p-mail--inboxview"),v(['#tltbt [role="button"]'])},onSubmit:function(a){N=a,M&&(M.hidden=!0),L.hidden=!0,e.classList.remove("bm-p-mail--inboxview"),b("tl/search/"+a)}},bmApis:a,onNewTab:function(){if(N)return void a.openTab(q+"search/"+N);var e=!1,n=R&&R.cjceSelectedId;H&&n&&H.forEach(function(i){i.id===n&&(a.openTab(i.newTabUrl),e=!0)}),e||a.openTab(q)}}),e.appendChild(C),S)P=f(),C.cjceAppendChild(P);else{var n=mdElements.createElement("appbar",{solid:!0,secondary:!0});n.hidden=!0,n.classList.add("bm-p-mail-prioritytabs"),e.appendChild(n),I().then(function(e){B(n,e)})}k=C.cjceNavigatorEle,S&&(k.style.color="#1a73e8"),w=C.cjceDrawerEle,w.classList.add("bm-p-mail-drawer");var i=C.cjceSearchboxEle;i.classList.add("bm-p-mail-searchbox"),a.onPageDisplay(i.select),g(),y=bmElements.createElement("iframe",{src:ce+"#"+K,solid:!0,shadow:!0,onMessage:function(e){var a=e.bm_method,n=e.bm_value;"mailHashChange"===a?(K=n,o()):"mailPageUrl"===a?ce=n:"mailToggleSelection"===a&&(n?K.startsWith("tl/Draft")?l("tl-selection-draft"):K.startsWith("tl/Spam")?l("tl-selection-spam"):K.startsWith("tl/Trash")?l("tl-selection-trash"):K.startsWith("tl/All")?l("tl-selection-all"):K.startsWith("tl")&&l("tl-selection"):l())}}),e.appendChild(y),L=bmElements.createElement("fab",{onClick:function(){b("co")}}),e.appendChild(L)}var S="inbox"===n.productId;S&&e.classList.add("bm-p-mail--bigtop"),e.classList.add("bm-p-mail--inboxview");var N,L,y,w,R,k,C,P,U,M,O,H,D=["https://www.googleapis.com/auth/gmail.labels"],x="https://www.googleapis.com/gmail/v1/",W="https://mail.google.com",F=W+"/mail/u/"+a.account.authuser+"/",z="https://inbox.google.com/u/"+a.account.authuser+"/",q=S?z:F+"#",X=q+"label/",G=S?"inbox":"googlemail",V=S?cjBasics.lang.i18n("cj_i18n_00421","Inbox"):cjBasics.lang.i18n("cj_i18n_00416","Gmail"),Z=S?"#1a73e8":"#ea4335",J="#1a73e8",K=S?"tl/priority/":"",Q="bm_mail_"+(S?"bigtop":"")+"_"+a.account.authuser+"_"+a.account.obfuscatedId,Y=!1,$=["SMARTLABEL_TRAVEL","SV_I","SMARTLABEL_RECEIPT","SMARTLABEL_FINANCE","SMARTLABEL_SOCIAL","SMARTLABEL_PURE_NOTIF","SMARTLABEL_GROUP","SMARTLABEL_PROMO","IO_UNIM"],ee=$.concat(["SNOOZED","DONE","REMINDERS","CHAT","ALL"]),ae=["INBOX","STARRED","SNOOZED","IMPORTANT","CHAT","SENT","DRAFT","ALL","SPAM","TRASH"],ne=["INBOX","SNOOZED","DONE","DRAFT","SENT","REMINDERS","TRASH","SPAM"],ie=S?ne:ae,te='div[style*="translate3d"] div[role="button"]',ce=cjBasics.urlParams.attach(W+"/mail/mu/mp/",{mui:Q,hl:"en",authuser:a.account.authuser}),le=["^smartlabel_personal","^smartlabel_social","^smartlabel_promo","^smartlabel_notification","^smartlabel_group"],oe={"^smartlabel_personal":{label:cjBasics.lang.i18n("cj_i18n_00178","Primary"),color:"#ea4335"},"^smartlabel_social":{label:cjBasics.lang.i18n("cj_i18n_00312","Social"),color:"#4285f4"},"^smartlabel_promo":{label:cjBasics.lang.i18n("cj_i18n_00315","Promos"),color:"#1e8e3e"},"^smartlabel_notification":{label:cjBasics.lang.i18n("cj_i18n_00313","Updates"),color:"#fa7b17"},"^smartlabel_group":{label:cjBasics.lang.i18n("cj_i18n_00182","Forums"),color:"#a142f4"},"^io_im,PI":{label:cjBasics.lang.i18n("cj_i18n_00184","Important")},"^u,PI":{label:cjBasics.lang.i18n("cj_i18n_01559","Unread")},"^t,PI":{label:cjBasics.lang.i18n("cj_i18n_00004","Starred")},"^io_im,^u,PI":{label:cjBasics.lang.i18n("cj_i18n_01560","Important & unread")},"^all,^f,PI":{label:cjBasics.lang.i18n("cj_i18n_00303","Sent")},"^all,^r,PI":{label:cjBasics.lang.i18n("cj_i18n_00187","Drafts")},",PI":{label:cjBasics.lang.i18n("cj_i18n_01561","Everything")}},re={INBOX:{label:cjBasics.lang.i18n("cj_i18n_00299","Inbox"),newTabUrl:q,superpuduHash:S?"tl/priority/":"tl/",iconName:"__mdi:inbox",color:Z,colorIcon:S},PINNED:{superpuduHash:"tl/search/label%3Apinned"},STARRED:{label:cjBasics.lang.i18n("cj_i18n_00004","Starred"),newTabUrl:q+"starred",superpuduHash:"tl/Starred",iconName:"__mdi:star_outline"},SNOOZED:{label:cjBasics.lang.i18n("cj_i18n_00300","Snoozed"),newTabUrl:q+"snoozed",superpuduHash:"tl/search/in%3Asnoozed",iconName:S?"__mdi:schedule":"__mdi:watch_later",color:S?"#ef6c00":null,colorIcon:S},DONE:{label:cjBasics.lang.i18n("cj_i18n_00301","Done"),newTabUrl:q+"done",superpuduHash:"tl/search/label%3Adone",iconName:"__mdi:bigtop_done",color:"#34a853",colorIcon:!0,divider:S},IMPORTANT:{label:cjBasics.lang.i18n("cj_i18n_00184","Important"),newTabUrl:q+"imp",superpuduHash:"tl/Important",iconName:"__mdi:label_important_outline"},CHAT:{label:cjBasics.lang.i18n("cj_i18n_00185","Chats"),newTabUrl:q+"chats",superpuduHash:"tl/Chats",iconName:"__mdi:--hangout"},SENT:{label:cjBasics.lang.i18n("cj_i18n_00303","Sent"),newTabUrl:q+"sent",superpuduHash:"tl/Sent%20Mail",iconName:"__mdi:send"},REMINDERS:{label:cjBasics.lang.i18n("cj_i18n_00304","Reminders"),newTabUrl:q+"reminders",superpuduHash:"tl/Reminders",iconName:"__mdi:reminder"},DRAFT:{label:cjBasics.lang.i18n("cj_i18n_00187","Drafts"),newTabUrl:q+"drafts",superpuduHash:"tl/Drafts",iconName:S?"__mdi:drafts":"__mdi:insert_drive_file"},ALL:{label:cjBasics.lang.i18n("cj_i18n_00188","All mail"),newTabUrl:q+"all",superpuduHash:"tl/All%20Mail",iconName:"__mdi:stacked_email"},SPAM:{label:cjBasics.lang.i18n("cj_i18n_00306","Spam"),newTabUrl:q+"spam",superpuduHash:"tl/Spam",iconName:"__mdi:report",divider:S},TRASH:{label:cjBasics.lang.i18n("cj_i18n_00005","Trash"),newTabUrl:q+"trash",superpuduHash:"tl/Trash",iconName:"__mdi:delete"},SMARTLABEL_TRAVEL:{label:cjBasics.lang.i18n("cj_i18n_00308","Travel"),iconName:"__mdi:travel",newTabUrl:q+"trips",superpuduHash:"tl/search/category%3Atravel",color:"#9c27b0",colorIcon:!0},SV_I:{label:cjBasics.lang.i18n("cj_i18n_00309","Saved"),iconName:"__mdi:bookmark_border",superpuduHash:"tl/search/label%3Asaved",color:"#4285f4",colorIcon:!0},SMARTLABEL_RECEIPT:{label:cjBasics.lang.i18n("cj_i18n_00310","Purchases"),iconName:"__mdi:shopping_cart",superpuduHash:"tl/search/category%3Apurchases",color:"#795548",colorIcon:!0},SMARTLABEL_FINANCE:{label:cjBasics.lang.i18n("cj_i18n_00311","Finance"),iconName:"__mdi:trending_up",gmailPath:"search/category%3Afinance",superpuduHash:"tl/search/category%3Afinance",color:"#689f38",colorIcon:!0},SMARTLABEL_SOCIAL:{label:cjBasics.lang.i18n("cj_i18n_00312","Social"),iconName:"__mdi:people",superpuduHash:"tl/search/category%3Asocial",color:"#EA4335",colorIcon:!0},SMARTLABEL_PURE_NOTIF:{label:cjBasics.lang.i18n("cj_i18n_00313","Updates"),iconName:"__mdi:flag",superpuduHash:"tl/search/category%3Aupdates",color:"#ff6839",colorIcon:!0},SMARTLABEL_GROUP:{label:cjBasics.lang.i18n("cj_i18n_00182","Forums"),iconName:"__mdi:question_answer",superpuduHash:"tl/search/category%3Aforums",color:"#3f51b5",colorIcon:!0},SMARTLABEL_PROMO:{label:cjBasics.lang.i18n("cj_i18n_00315","Promos"),iconName:"__mdi:local_offer",superpuduHash:"tl/search/category%3Apromotions",color:"#00bcd4",colorIcon:!0},IO_UNIM:{label:cjBasics.lang.i18n("cj_i18n_00316","Low Priority"),iconName:"__mdi:low_priority",superpuduHash:"tl/search/label%3Alowpriority"}},se={apply:cjBasics.lang.i18n("cj_i18n_01567","Apply"),archive:S?cjBasics.lang.i18n("cj_i18n_01734","Mark done"):cjBasics.lang.i18n("cj_i18n_01579","Archive"),"delete":cjBasics.lang.i18n("cj_i18n_01563","Delete"),deleteForever:cjBasics.lang.i18n("cj_i18n_01577","Delete forever"),label:cjBasics.lang.i18n("cj_i18n_01571","Label..."),markUnread:cjBasics.lang.i18n("cj_i18n_01573","Mark as unread"),more:cjBasics.lang.i18n("cj_i18n_01562","More"),move:cjBasics.lang.i18n("cj_i18n_01570","Move..."),moveToInbox:cjBasics.lang.i18n("cj_i18n_01575","Move to inbox"),notSpam:cjBasics.lang.i18n("cj_i18n_01576","Not spam"),reportSpam:cjBasics.lang.i18n("cj_i18n_01572","Report spam"),openInNew:cjBasics.lang.i18n("cj_i18n_01545","Open in a new tab"),send:cjBasics.lang.i18n("cj_i18n_01565","Send")},de={archive:S?"__mdi:bigtop_done":"__mdi:archive",openInNew:"__mdi:open_in_new","delete":"__mdi:delete",deleteForever:"__mdi:delete_forever",label:"__mdi:label",markUnread:"__mdi:email",more:"__mdi:more_vert",move:"__mdi:drive_file_move",moveToInbox:"__mdi:move_to_inbox",notSpam:"__mdi:report_off",reportSpam:"__mdi:report",send:"__mdi:send"},me=null,_e={ad:{onBackAction:['#adstopbar [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01564","Ad"),mainActions:[["fillbutton","delete",['#adstopbar [role="button"]',1]]]},co:{onBackAction:['#cvtbt [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_00317","Compose"),mainActions:[["fillbutton","send",['#cvtbt [role="button"]',1]]]},"lb-label":{onBackAction:['#lbttb [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01566","Label"),mainActions:[["fillbutton","apply",['#cvtbt [role="button"]',1]]]},"lb-move":{onBackAction:['#lbttb [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01568","Move")},cv:{onBackAction:['#cv__cntbt [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01569","Thread"),mainActions:[["iconbutton","archive",[te]],["iconbutton","delete",[te,1]],["iconbutton","openInNew",t]],secondaryActions:[["move",[te,3,2]],["label",[te,4,2]],["reportSpam",[te,6,2]],["markUnread",[te,8,2]]]},"cv-draft":{onBackAction:['#cv__cntbt [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01574","Draft"),mainActions:[["iconbutton","archive",[te]],["iconbutton","delete",[te,1]],["iconbutton","openInNew",t]],secondaryActions:[["moveToInbox",[te,3,2]],["label",[te,4,2]],["markUnread",[te,6,2]]]},"cv-spam":{onBackAction:['#cv__cntbt [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01569","Thread"),mainActions:[["button","notSpam",[te]],["iconbutton","openInNew",t]],secondaryActions:[["deleteForever",[te,2,1]],["label",[te,3,1]],["markUnread",[te,5,1]]]},"cv-trash":{onBackAction:['#cv__cntbt [role="button"]'],label:cjBasics.lang.i18n("cj_i18n_01569","Thread"),mainActions:[["button","deleteForever",[te]],["iconbutton","openInNew",t]],secondaryActions:[["moveToInbox",[te,2,1]],["label",[te,3,1]],["reportSpam",[te,4,1]],["markUnread",[te,6,1]]]},"tl-selection":{onBackAction:[te,-1],label:cjBasics.lang.i18n("cj_i18n_01578","Selection"),mainActions:[["iconbutton","archive",[te]],["iconbutton","delete",[te,1]]],secondaryActions:[["move",[te,3,2]],["label",[te,4,2]],["reportSpam",[te,6,2]],["markUnread",[te,7,2]]]},"tl-selection-all":{onBackAction:[te,-1],label:cjBasics.lang.i18n("cj_i18n_01578","Selection"),mainActions:[["button","moveToInbox",[te]]],secondaryActions:[["archive",[te,2,1]],["delete",[te,3,1]],["label",[te,4,1]],["reportSpam",[te,5,1]],["markUnread",[te,6,1]]]},"tl-selection-draft":{onBackAction:[te,-1],label:cjBasics.lang.i18n("cj_i18n_01578","Selection"),mainActions:[["iconbutton","archive",[te,0]],["iconbutton","delete",[te,1]]],secondaryActions:[["moveToInbox",[te,3,2]],["label",[te,4,2]],["markUnread",[te,5,2]]]},"tl-selection-spam":{onBackAction:[te,-1],label:cjBasics.lang.i18n("cj_i18n_01578","Selection"),mainActions:[["button","notSpam",[te]]],secondaryActions:[["deleteForever",[te,2,1]],["label",[te,3,1]],["markUnread",[te,4,1]]]},"tl-selection-trash":{onBackAction:[te,-1],label:cjBasics.lang.i18n("cj_i18n_01578","Selection"),mainActions:[["button","deleteForever",[te]]],secondaryActions:[["moveToInbox",[te,2,1]],["label",[te,3,1]],["reportSpam",[te,4,1]],["markUnread",[te,5,1]]]}};T()}});