LPPlatform="undefined"==typeof LPPlatform?{}:LPPlatform,function(){LPPlatform.isMac=function(){return"undefined"!=typeof navigator&&-1!=navigator.appVersion.indexOf("Mac")};LPPlatform.getUILanguage=function(){return(function(){var e={},n=document.location.href.split("?");if(2===n.length)for(var t=n[1].split("&"),a=0;a<t.length;++a){var r=t[a].split("=");2===r.length&&(e[r[0]]=r[1])}return e}().lplanguage||"en-US").replace(/_/g,"-")}}(),function(e){var n,t,a;e.translate=function(e){return gs(e)},e.isWin=function(){return"undefined"!=typeof navigator&&-1!=navigator.appVersion.indexOf("Windows")},n=null,t=[],a=function(e){var t=e.callback;e.callback=function(e){for(var n in e)window[n]=e[n];t&&t()},n.LPData.getData(e)},e.getBackgroundInterface=function(t){return null===n&&(n=e.createBackgroundInterface(t)),t.getData?n.getData({context:t.context,callback:t.callback}):t.callback&&t.callback(n),n},e.createBackgroundInterface=function(r){g_bg=window;var c=new LPBackgroundRequester(e.requestFrameworkInitializer,{interfaceDefinition:r.interfaceDefinition,interfaceName:r.interfaceDefinition?parent.Interfaces.getName(r.interfaceDefinition):null,reflectionContext:parent,mainRequestFramework:void 0===r.mainRequestFramework||r.mainRequestFramework});c.initialize();var i=function(e){c.sendRequest({type:"backgroundRequest",data:e})},o=Interfaces.createInstance(Interfaces.BackgroundInterface,{context:r.context,source:window,direct:!1,requestFunction:i});return o.getData=function(e){var c=e.callback;e.callback=function(){var i;r.pollBackground&&("string"==typeof(i=e.context)&&-1===t.indexOf(i)&&t.push(i),setInterval(function(){a({context:t,triggers:{g_local_accts_version:n.get("g_local_accts_version")}})},1e3)),c&&c(o)},a(e)},parent.LPDialog&&(parent.LPDialog.beforeLoad=function(e,n){Interfaces.createInstance(Interfaces.BackgroundInterface,{instance:o,context:e,source:window,direct:!1,requestFunction:i}),o.getData({context:e,callback:function(){parent.LPProxy.initializeModel(),n()}})}),r.backgroundIntitialization&&r.backgroundIntitialization(o),o},e.adjustPreferenceDefaults=function(e){e.disablepasswordmanagerasked=!1},e.getPreference=function(e){return g_userprefs.hasOwnProperty(e)?g_userprefs[e]:g_gblprefs[e]},e.setUserPreference=function(e,n){g_userprefs[e]=n},e.setGlobalPreference=function(e,n){g_gblprefs[e]=n},e.writePreferences=function(){}}(LPPlatform);
//# sourceMappingURL=sourcemaps/platformBackgroundFrame.js.map
