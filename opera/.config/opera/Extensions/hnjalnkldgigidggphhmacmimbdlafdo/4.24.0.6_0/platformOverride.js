!function(e){e.getExtensionDropdownDelay=function(){return bg.LPPlatform.isMac()?50:-1};var n,o,t,r,i=(n=$(document.getElementsByTagName("html")),function(e,o){var t,r;t=e,r=o,bg.LPPlatform.isMac()?(setTimeout(function(){n.css({height:t+1,width:r})},50),setTimeout(function(){n.css({height:t,width:r})},100)):n.css({height:t,width:r})});e.setLoginPopoverSize=function(e,n){i(e,n)},e.setDropdownPopoverSize=function(e,n){i(e,n)},e.checkBrowserPasswordManager=function(e){chrome.privacy&&chrome.privacy.services&&chrome.privacy.services.passwordSavingEnabled&&chrome.privacy.services.passwordSavingEnabled.get({},function(n){n.value&&"controllable_by_this_extension"===n.levelOfControl&&e()})},e.setupDropdownImportMenu_single=e.setupDropdownImportMenu,e.setupDropdownImportMenu=function(n){bg.is_opera_chromium()||bg.is_firefox_webext()||bg.get("g_is_mac")?e.setupDropdownImportMenu_single(n):($("#chromeImportMenuItem").bind("click",function(){bg.lpevent("m_igoo"),bg.openimportchrome()}),$("#importMenuItem").bind("click",function(){bg.lpevent("m_i"),bg.openimport()}))},e.canBackgroundOpenPopover=function(){return!1},e.getUnavailablePreferences=(o=e.getUnavailablePreferences,function(){var e=o();return e.enablenewlogin=!bg.get("g_shownewloginoption"),e.hidecontextspan=void 0===chrome.contextMenus,e}),e.getPreferencesRequiringBinary=(t=e.getPreferencesRequiringBinary,function(){var e=t();return e.idleLogoffVal=void 0===chrome.idle,e}),e.handlePreferenceChanges=(r=e.handlePreferenceChanges,function(e){r(e),void 0!==e.hideContextMenus&&bg.LPContextMenus.createContextMenus(),!1===e.showmatchingbadge&&bg.clear_badge_text()}),e.openCreateAccount=function(){bg.LPPlatform.openTabDialog("createAccountSimple")},e.showDownloader=function(){return!0}}(LPPlatform);
//# sourceMappingURL=sourcemaps/platformOverride.js.map
