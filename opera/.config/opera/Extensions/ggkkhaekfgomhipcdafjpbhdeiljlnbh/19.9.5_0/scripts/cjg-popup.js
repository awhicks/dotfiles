!function(){"use strict";function t(){j||a.runtime.sendMessage({closeAuthPopup:!0})}function n(){a.runtime.sendMessage({reloadAllInstances:!0},null,t)}function e(){j?n():t()}function s(t){cjgApis.session.changeAccount(t,!0),n()}function o(){cjgApis.account.list({listPages:!1}).then(function(t){var n=t[0];if(l&&"0"!==l)for(var o=0;o<t.length;o++)if(t[o].authuser===l){n=t[o];break}var i=cjgApis.session.account;i.validSession&&i.obfuscatedId===n.obfuscatedId&&i.authuser===n.authuser?e():s(n)},e)}function i(){Promise.all([cjgApis.auth.getTokenInfo(v),cjgApis.account.list({authuser:l})]).then(function(t){var e,o=t[0],i=t[1],a=o.sub;i.forEach(function(t){t.obfuscatedId===a&&a!==cjgApis.session.account.obfuscatedId&&(e=t)}),e?s(e):n()},n)}var a="undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser,c=a.i18n.getMessage("@@extension_id"),u=window.location,r=u.href,d=window.top!==window,g=r.startsWith("https://www.google.com/cjg-auth/"+c);if(d&&g&&cjBasics.navigator.vivaldi)return void a.runtime.sendMessage({cjgAuthUrl:r});var p=r.startsWith("https://www.google.com/cjg-apis/"+c),h=r.startsWith(a.runtime.getURL("cjg-popup.html")),f=g||p||h;if(f&&!d){window.addEventListener("DOMContentLoaded",function(){document.head.textContent="",document.body.textContent=""});var l=null,m=r.match(/authuser=(\d)/);m&&(l=m[1]);var v=r.split("access_token=")[1];v&&(v=v.split("&")[0]);var w=u.hash.replace("#",""),j=w.indexOf("--macpopup")!==-1&&cjBasics.navigator.mac&&!cjBasics.navigator.opera,A=w.split("--macpopup")[0],b=u.pathname.split("/")[3],I="signin"===b||"signin"===A,M="signout"===b||"signout"===A,x=Boolean(v);cjgApis.session.ready.then(function(){I?o():M?s(cjgApis.account.noAccountData):x?i():e()})}}();