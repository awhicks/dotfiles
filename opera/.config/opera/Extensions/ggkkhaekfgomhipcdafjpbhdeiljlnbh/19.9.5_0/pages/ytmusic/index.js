cjModules.define(function(){"use strict";return function(e,n){function i(e){return cjgApis.url.youtube(n.account,e)}function a(e){return cjgApis.url.youtube(n.account,"https://music.youtube.com/"+e)}var c="#ea4335",o=bmElements.createElement("ogb",{theme:n.theme,darkMode:n.darkMode,serviceIcon:"youtube_music",serviceLabel:cjBasics.lang.i18n("cj_i18n_01057","YouTube Music"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),bmApis:n,onNewTab:function(){var e=a("");n.openTab(e)},searchbox:{color:c,onSubmit:function(e){var i="search?q="+encodeURIComponent(e),c=a(i);n.openTab(c)},submitInNewTab:!0}});e.appendChild(o),n.onPageDisplay(o.cjceSearchboxEle.select);var t=mdElements.createElement("container",{darkMode:n.darkMode,scrollable:!0,shadow:"thinOnScroll"}),l=[{label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:a(""),iconName:"__mdi:home"},{label:cjBasics.lang.i18n("cj_i18n_01224","Video Hotlist"),newTabUrl:a("hotlist"),iconName:"__mdi:youtube_trending"},{label:cjBasics.lang.i18n("cj_i18n_01225","Music Library"),newTabUrl:a("library"),iconName:"__mdi:library_music"},{label:cjBasics.lang.i18n("cj_i18n_00155","History"),newTabUrl:a("history"),iconName:"__mdi:history",divider:!0},{label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),newTabUrl:a("settings"),iconName:"__mdi:settings"},{id:"music",label:cjBasics.lang.i18n("cj_i18n_00431","Play Music"),newTabUrl:"https://play.google.com/music/listen"+("0"!==n.account.authuser?"?u="+n.account.authuser:""),iconName:"__mdi:genres"},{id:"youtube",label:cjBasics.lang.i18n("cj_i18n_00445","YouTube"),newTabUrl:i(""),iconName:"__mdi:video_youtube"}],s=bmElements.createElement("navlist",{theme:n.theme,items:l,onClick:function(e,i){"music"===e||"youtube"===e?n.pageManager.navigate(e):n.openTab(i.newTabUrl)},onNewTab:function(e,i){n.openTab(i.newTabUrl)}});t.appendChild(s),e.appendChild(t)}});