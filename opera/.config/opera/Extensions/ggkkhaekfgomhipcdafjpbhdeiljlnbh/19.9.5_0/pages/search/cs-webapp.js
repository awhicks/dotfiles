!function(){"use strict";function e(t){return t?"A"===t.tagName?t:e(t.parentNode):null}function t(){var e=window.location.href.split("&tbm=");return e[1]?e[1].split("&")[0]:null}if("https://www.google.com"===window.location.origin&&window.top!==window){var r="undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser,o=r.runtime.getURL("PATH").replace("/PATH",""),n=window.location.search.split("bm_xfo=")[1].split("&")[0];document.addEventListener("mousedown",function(t){var r=e(t.target);if(r&&!r.bmProcessed){r.bmProcessed=!0;var o=r.href;if(o&&(o.startsWith("/imgres")||o.startsWith("/search")||o.startsWith("https://www.google.com/search"))){var a=r.href.replace("/search?","/m?").split("?");r.href=a[0]+"?bm_cid=search&bm_cst=1&bm_xfo="+n+"&bm_wiz="+n+"&bm_mua="+n+"&"+a[1]}}}),document.addEventListener("click",function(t){var r=e(t.target),n=r&&r.href;n&&n.indexOf("bm_cid=search")===-1&&(window.parent.postMessage({bm_method:"searchOpenUrl",bm_value:n},o),t.stopPropagation(),t.preventDefault())}),window.addEventListener("DOMContentLoaded",function(e){for(var t=document.querySelectorAll("img[data-src]:not([src])"),r=0;r<t.length;r++){var o=t[r];o.src=o.dataset.src}}),window.parent.postMessage({bm_method:"searchUpdateTbm",bm_value:t()},o)}}();