LPFeatures=function(){var t="feature-",e="no-feature-",n=$(document.body),r=function(t){var e=bg.get("g_prefoverrides")[t];return void 0===e||"1"===e},o=function(t){var e,n=bg.get("g_prefoverrides");switch(t){case"showcredmon":e=bg.get("g_showcredmon");break;default:e=n&&n[t]}return"boolean"==typeof e&&(e=e?"1":"0"),e},i=function(r,o,i){n.removeClass(e+r),n.removeClass(t+r),void 0!==i&&!0!==i||o?void 0!==i&&!1!==i||!o||n.addClass(t+r):n.addClass(e+r)},a=function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").omaria&&bg.get("LPContentScriptFeatures").omaria},g=function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").safari_legacy_messaging&&bg.get("LPContentScriptFeatures").safari_legacy_messaging};return{updateFeatures:function(t){for(var e in t){var n=o(e);"undefined"!=typeof prevValue&&i(e,"1"===n,t[e])}i("omaria",a()),i("safariLegacyMessaging",g()),bg.get("g_new_settings_enabled")&&$("#newSettingsMenuItem").addClass("visible")},allowIndividualSharing:function(){return this.allowShare()&&!this.allowShareOnlyFolders()},allowSharedFolders:function(){return this.allowShare()},allowClipboardCopy:function(){return bg.can_copy_to_clipboard()},allowImport:function(){return r("import")},allowShare:function(){return r("share")},allowShareOutsideEnterprise:function(){return r("shareout")},allowShareOnlyFolders:function(){return"1"===bg.get("g_prefoverrides").share_onlyfolders},allowShareDomain:function(t){return!0},allowPasswordRevert:function(){return r("revert")},allowNotes:function(){return r("show_notes")},allowFingerprint:function(){return r("show_fingerprint")},allowBookmarklets:function(){return r("bookmarklets")},allowHint:function(){return r("hint")},allowGift:function(){var t=new Date;return 10===t.getMonth()&&t.getDate()>=25||11===t.getMonth()&&t.getDate()<=25},allowLaunchApplication:function(){return bg.canLaunchApplication()},allowNewSettings:function(){return bg.get("g_new_settings_enabled")},allowFamilies:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").families_enabled&&bg.get("LPContentScriptFeatures").families_enabled},allowTryFamilies:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").try_families_enabled&&bg.get("LPContentScriptFeatures").try_families_enabled},restrictOneToOneSharing:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").one_to_one_sharing_restricted&&bg.get("LPContentScriptFeatures").one_to_one_sharing_restricted},pbkdf2IterartionsMigration:function(){return bg.get("LPContentScriptFeatures")&&!!bg.get("LPContentScriptFeatures").pbkdf2_iterations_migration_enabled},isUpgradeButtonTestEnabled:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").upgrade_button_test&&bg.get("LPContentScriptFeatures").upgrade_button_test},isDownloadExtensionWebPromptEnabled:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").download_extension_web_prompt&&bg.get("LPContentScriptFeatures").download_extension_web_prompt},restrictEmergencyAccessForFree:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").emergency_access_restricted&&bg.get("LPContentScriptFeatures").emergency_access_restricted},allowOmarIA:a,allowFormfillMigration:function(){return!!bg.get("LPContentScriptFeatures").formfill_migration},allowOmarDrawer:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").omardrawer&&bg.get("LPContentScriptFeatures").omardrawer},isDogfood:function(){return null!=bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures")&&void 0!==bg.get("LPContentScriptFeatures").isDogfood&&bg.get("LPContentScriptFeatures").isDogfood},safari_legacy_messaging:g,canBackgroundOpenPopover:function(){return LPPlatform.canBackgroundOpenPopover()}}}();
//# sourceMappingURL=sourcemaps/features.js.map