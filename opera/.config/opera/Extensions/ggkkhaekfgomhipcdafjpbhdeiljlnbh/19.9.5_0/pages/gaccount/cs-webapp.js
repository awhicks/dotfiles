!function(){"use strict";function e(t){return t?"A"===t.tagName?t:e(t.parentNode):null}if(window.top!==window){var t=window.location;if("https://myaccount.google.com"===t.origin){var o="undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser,n=o.runtime.getURL("PATH").replace("/PATH",""),r=window.location.search.split("bm_xfo=")[1].split("&")[0];document.addEventListener("mousedown",function(t){var o=e(t.target);if(o&&!o.bmProcessed){o.bmProcessed=!0;var n=o.href;if(n&&n.startsWith("https://myaccount.google.com/")){var c=o.href.replace("/search?","/m?").split("?");o.href=c[0]+"?bm_cid=gaccount&bm_cst=1&bm_xfo="+r+"&bm_wiz="+r+"&"+c[1]}}}),document.addEventListener("click",function(t){var o=e(t.target),r=o&&o.href;r&&r.indexOf("bm_cid=gaccount")===-1&&(window.parent.postMessage({bm_method:"gaccountOpenUrl",bm_value:r},n),t.stopPropagation(),t.preventDefault())})}}}();