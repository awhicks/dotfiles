!function(){"use strict";function e(n){return n?"A"===n.tagName?n:e(n.parentNode):null}if("https://www.google.com"===window.location.origin&&window.top!==window){var n="undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser,t=n.runtime.getURL("PATH").replace("/PATH","");document.addEventListener("mousedown",function(n){var t=e(n.target);if(t)return t.href.indexOf("/save")===-1?void(t.target="_blank"):void(t.href.indexOf("bm_")===-1&&(t.href=t.href.split("?")[0]+window.location.search+t.href.split("?")[1]))}),setInterval(function(){window.location.pathname.indexOf("/list")!==-1&&window.parent.postMessage({bm_method:"saveDisplayBackButton"},t)},400)}}();