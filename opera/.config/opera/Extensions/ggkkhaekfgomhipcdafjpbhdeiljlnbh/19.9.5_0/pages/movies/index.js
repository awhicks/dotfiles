cjModules.define(function(){"use strict";return function(e,a){function n(n){if(n&&"not_authorized"===n.cjg_error){e.textContent="";var t=bmElements.createElement("fulldialog",{theme:a.theme,darkMode:a.darkMode,lockup:{label:cjBasics.lang.i18n("cj_i18n_00424","Movies")},iconName:"youtube_movies",message:cjBasics.lang.i18n("cj_i18n_01249","Before you can use this page, you need to give access to your movies"),actionLabel:cjBasics.lang.i18n("cj_i18n_01178","Continue"),action:function(){cjgApis.auth.requestPermissions(a.account,n.cjg_missing_scopes)}});e.appendChild(t)}}function t(e){var n=mdElements.createElement("griditem");n.addEventListener("click",function(){var n=cjBasics.urlParams.attach(j+"details",{id:e.id,authuser:a.account.authuser});a.openTab(n)});var t=document.createElement("div");t.className="bm-p-movies-thumbnail",t.style.backgroundImage='url("'+e.thumbnail+'")',n.appendChild(t);var i=document.createElement("div");i.className="cj-md-grid__item__bottom",n.appendChild(i);var r=document.createElement("div");r.className="cj-md-grid__item__textcontainer",i.appendChild(r);var c=document.createElement("div");c.textContent=e.title||cjBasics.lang.i18n("cj_i18n_00380","Movie"),r.appendChild(c);var o=[];if("number"==typeof e.year&&o.push(e.year),"number"==typeof e.duration&&e.duration>1&&o.push(e.duration+" mins"),o.length>0){var s=document.createElement("div");s.className="cj-md-secondarytext",s.textContent=o.join(", "),r.appendChild(s)}return e.title.length>20&&(c.title=e.title),n}function i(e){if(0===e.length)return mdElements.createElement("emptystate",{theme:a.theme,color:y,iconName:"__mdi:play_movies",label:cjBasics.lang.i18n("cj_i18n_00156","No results")});for(var n=document.createDocumentFragment(),i=0;i<e.length;i++){var r=t(e[i]);n.appendChild(r)}return n}function r(e){var a=e+"000",n=parseInt(a,10),t=new Date(n);return t.getUTCFullYear()}function c(e){return Math.round(e/60)}function o(e){for(var a=196*window.devicePixelRatio,n=1;n<e.length;n++)if(e[n].width<a)return e[n-1].url;return e[0].url}function s(e){return Array.isArray(e.resource)?e.resource.map(function(e){var a=e.metadata;return{title:a.title,year:r(a.release_date_timestamp_sec),thumbnail:o(a.images),duration:c(a.duration_sec),id:e.resource_id.id}}):[]}function l(e,t){var i=cjBasics.urlParams.attach("https://www.googleapis.com/android_video/v1/"+e,t);return cjgApis.request(i,{fetchAs:"json"},{internal:!0,account:a.account,requiredScopes:f})["catch"](n)}function u(){return l("recommendation",{alt:"json",cat:"type=movie",cr:"NL","if":"imobrg",lr:"en_US",max:"9"})}function m(e){return l("asset/list",{alt:"json",cr:"NL",fs:"peg",id:"yt:movie:"+e.join(",yt:movie:"),"if":"imobrg",lr:"en_US"})}function d(){return l("userlibrary",{alt:"json",max:"20"}).then(function(e){return Array.isArray(e.resource)?e.resource.map(function(e){return e.resource_id.id}):[]}).then(m)}function h(n){if("play"===n)return void a.pageManager.navigate(n,{typeId:"movies"});E=n;var t=B[n];g.cjceSetPageLabel(t.label),bmElements.setLoading(e,!0),_.textContent="";var r=mdElements.createElement("gridcontainer");_.appendChild(r);var c;c="library"===n?d():u(),c.then(s).then(i).then(function(a){r.appendChild(a),bmElements.setLoading(e,!1)})}function p(){g=bmElements.createElement("ogb",{theme:a.theme,darkMode:a.darkMode,drawer:{color:y},serviceIcon:"youtube_movies",serviceLabel:cjBasics.lang.i18n("cj_i18n_01205","Movies"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),searchbox:{color:y,submitInNewTab:!0,onSubmit:function(e){var n=cjBasics.urlParams.attach(v+"search",{c:"movies",authuser:a.account.authuser,hl:cjBasics.lang.current,q:e});a.openTab(n)}},bmApis:a,onNewTab:function(){var e="library"===E?C:w;a.openTab(e)}}),e.appendChild(g),b=bmElements.createElement("navlist",{theme:a.theme,isSelector:!0,selectedId:E,items:B,onChange:h,onNewTab:function(e,n){a.openTab(n.newTabUrl)}}),g.cjceDrawerEle.appendChild(b),_=mdElements.createElement("container",{darkMode:a.darkMode,scrollable:!0,shadow:"thinOnScroll"}),e.appendChild(_),a.onPageDisplay(g.cjceSearchboxEle.select),h(E)}bmElements.setLoading(e,"blue");var g,_,b,v="https://play.google.com/store/",j=v+"movies/",f=["https://www.googleapis.com/auth/android_video"],y="#ea4335",E="home",w="https://play.google.com/store/movies?authuser="+a.account.authuser,C="https://play.google.com/movies?authuser="+a.account.authuser,B={home:{label:cjBasics.lang.i18n("cj_i18n_00291","Home"),iconName:"__mdi:home",newTabUrl:w},library:{label:cjBasics.lang.i18n("cj_i18n_00131","Library"),iconName:"__mdi:library_movies",divider:!0,newTabUrl:C},play:{label:cjBasics.lang.i18n("cj_i18n_00134","Shop"),iconName:"__mdi:shop",newTabUrl:w,external:cjBasics.navigator.vivaldi},purchases:{label:cjBasics.lang.i18n("cj_i18n_01247","YouTube purchases"),iconName:"__mdi:local_offer",external:!0,newTabUrl:cjgApis.url.youtube(a.account,"feed/purchases")},managepurchases:{label:cjBasics.lang.i18n("cj_i18n_01248","Manage purchases"),iconName:"__mdi:account_balance_wallet",external:!0,newTabUrl:cjgApis.url.youtube(a.account,"purchases")}};p()}});