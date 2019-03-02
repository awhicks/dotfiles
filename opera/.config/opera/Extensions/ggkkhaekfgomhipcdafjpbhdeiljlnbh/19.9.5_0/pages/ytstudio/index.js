cjModules.define(function(){"use strict";return function(e,a){function n(e){return cjgApis.url.youtube(a.account,e)}function i(e){var n="https://studio.youtube.com/";return u&&(n+="#/channel/"+u+e),cjgApis.url.youtube(a.account,n)}function c(){var e=i("");a.openTab(e)}function t(e){var n=cjgApis.cache.getItem(a.account,"bm_cache_v05__youtube__channelid"),i=cjBasics.urlParams.attach("https://www.googleapis.com/youtube/v3/channels",{part:"id",mine:"true",fields:"items/id"}),c=cjgApis.request(i,{fetchAs:"json"},{account:a.account,requiredScopes:_}).then(function(e){var n=e&&Array.isArray(e.items)&&e.items[0]&&e.items[0].id;return n&&cjgApis.cache.setItem(a.account,"bm_cache_v05__youtube__channelid",n),n});return n.then(function(a){return a?a:e?c:c["catch"](function(){return null})})}function o(){t(!0).then(function(e){e&&(u=e,l())},function(){e.textContent="";var n=bmElements.createElement("fulldialog",{theme:a.theme,darkMode:a.darkMode,bmApis:a,onNewTab:c,lockup:{label:cjBasics.lang.i18n("cj_i18n_01207","YouTube Studio")},iconName:"youtube_creator",message:cjBasics.lang.i18n("cj_i18n_01198","We need read-only access to your YouTube account for basic functioning of this page"),actionLabel:cjBasics.lang.i18n("cj_i18n_01178","Continue"),action:function(){cjgApis.auth.requestPermissions(a.account,_)}});e.appendChild(n)})}function r(e,n){var i=n.newTabUrl||cjgShortcuts.getUrl(n.shortcutId,a.account);a.openTab(i)}function l(){j.textContent="";var e=[{label:cjBasics.lang.i18n("cj_i18n_01229","Dashboard"),newTabUrl:i(""),iconName:"__mdi:dashboard"},{label:cjBasics.lang.i18n("cj_i18n_01230","Videos"),newTabUrl:i("/videos"),iconName:"__mdi:video_library"},{label:cjBasics.lang.i18n("cj_i18n_01231","Analytics"),newTabUrl:i("/analytics/tab-overview/period-4_weeks"),iconName:"__mdi:assessment"},{label:cjBasics.lang.i18n("cj_i18n_01232","Comments"),newTabUrl:i("/comments"),iconName:"__mdi:comment"},{label:cjBasics.lang.i18n("cj_i18n_01233","Transcriptions"),newTabUrl:i("/translations"),iconName:"__mdi:translate",divider:!0},{label:cjBasics.lang.i18n("cj_i18n_01234","Playlists"),newTabUrl:n("view_all_playlists"),iconName:"__mdi:playlist_play"},{label:cjBasics.lang.i18n("cj_i18n_00623","Live streaming"),newTabUrl:n("live_dashboard"),iconName:"__mdi:youtube_live"},{label:cjBasics.lang.i18n("cj_i18n_01235","Audio library"),newTabUrl:n("audiolibrary/music"),iconName:"__mdi:queue_music",divider:!0},{label:cjBasics.lang.i18n("cj_i18n_01235","Creator Studio Classic"),newTabUrl:n("dashboard?ar=1&o=U"),iconName:"__mdi:youtube_creator"},{id:"youtube",label:cjBasics.lang.i18n("cj_i18n_00445","YouTube"),newTabUrl:n(""),iconName:"__mdi:video_youtube",divider:!0},{header:!0,color:s,label:cjBasics.lang.i18n("cj_i18n_01236","Creator resources")},{label:cjBasics.lang.i18n("cj_i18n_00763","Creator Hub"),shortcutId:"484",iconName:"__mdi:dashboard"},{label:cjBasics.lang.i18n("cj_i18n_00593","Creator Academy"),shortcutId:"277",iconName:"__mdi:school"},{label:cjBasics.lang.i18n("cj_i18n_01237","Space"),shortcutId:"481",iconName:"__mdi:weekend"},{label:cjBasics.lang.i18n("cj_i18n_00762","NextUp"),shortcutId:"483",iconName:"__mdi:forward"},{label:cjBasics.lang.i18n("cj_i18n_01238","Creator Events"),newTabUrl:"https://www.youtube.com/yt/creators/events/",iconName:"__mdi:event"},{label:cjBasics.lang.i18n("cj_i18n_01239","Benefit levels"),newTabUrl:"https://youtube.com/yt/creators/benefits/",iconName:"__mdi:thumb_up_alt"},{label:cjBasics.lang.i18n("cj_i18n_01240","Awards"),newTabUrl:"https://youtube.com/yt/creators/awards/",iconName:"__mdi:trophy"},{label:cjBasics.lang.i18n("cj_i18n_01241","Creators for Change"),newTabUrl:"https://youtube.com/yt/creators-for-change/",iconName:"__mdi:arrow_upward_alt"},{label:cjBasics.lang.i18n("cj_i18n_01242","Partner Managers"),newTabUrl:"https://youtube.com/yt/creators/partner-managers/",iconName:"__mdi:person"},{label:cjBasics.lang.i18n("cj_i18n_01243","Creator Services Directory"),shortcutId:"482",iconName:"__mdi:trending_up"},{label:cjBasics.lang.i18n("cj_i18n_01244","Director on side"),shortcutId:"785",iconName:"__mdi:camera_alt"},{label:cjBasics.lang.i18n("cj_i18n_01245","Help Center"),newTabUrl:"https://support.google.com/youtube/answer/6249136"+("0"===a.account.authuser?"":"?authuser="+a.account.authuser),iconName:"__mdi:help"},{label:cjBasics.lang.i18n("cj_i18n_01246","Help Forum"),newTabUrl:"https://productforums.google.com/forum/?authuser="+a.account.authuser+"#!forum/youtube",iconName:"__mdi:forum"}],c=bmElements.createElement("navlist",{theme:a.theme,items:e,compact:!0,onClick:function(e,n){return"youtube"===e?void a.pageManager.navigate(e):void r(e,n)},onNewTab:r});j.appendChild(c)}var s="#ea4335",u=null,_=["https://www.googleapis.com/auth/youtube.readonly"],m=bmElements.createElement("ogb",{theme:a.theme,darkMode:a.darkMode,serviceIcon:"youtube_creator",serviceLabel:cjBasics.lang.i18n("cj_i18n_01207","YouTube Studio"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),bmApis:a,onNewTab:c});e.appendChild(m);var d=mdElements.createElement("iconbutton",{theme:a.theme,iconName:"__mdi:youtube_live",label:cjBasics.lang.i18n("cj_i18n_01227","Go live"),onClick:function(){var e=n("webcam");a.openTab(e)}});m.cjceAppendChild(d);var b=mdElements.createElement("iconbutton",{theme:a.theme,iconName:"__mdi:video_call",label:cjBasics.lang.i18n("cj_i18n_01228","Upload video"),onClick:function(){var e=n("upload?redirect_to_creator=true");a.openTab(e)}});m.cjceAppendChild(b);var j=mdElements.createElement("container",{darkMode:a.darkMode,scrollable:!0,shadow:"thinOnScroll"});l(),o(),e.appendChild(j)}});