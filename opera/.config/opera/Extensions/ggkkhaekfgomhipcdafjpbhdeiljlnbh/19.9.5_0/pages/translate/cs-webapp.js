!function(){"use strict";function e(t){return"A"===t.tagName?t:t===document.body?null:e(t.parentNode)}if("https://translate.google.com"===window.location.origin&&window.top!==window){var t="undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser,n=t.runtime.getURL("PATH").replace("/PATH",""),o=t.runtime.getURL("").startsWith("moz-extension://"),i={home:"",saved:"view=saved",history:"view=history"},s=new Promise(function(e){window.addEventListener("DOMContentLoaded",function(){e()})});document.addEventListener("mousedown",function(t){var o=e(t.target),i=o&&o.href;i&&i.indexOf("google.com/community")!==-1&&(o.href="",o.addEventListener("click",function(){window.parent.postMessage({bm_method:"translateOpenCommunity"},n)}))}),window.addEventListener("hashchange",function(){var e=window.location.hash,t="home";e.indexOf("history")!==-1?t="history":e.indexOf("saved")!==-1&&(t="saved"),window.parent.postMessage({bm_method:"translateUpdateView",bm_value:t},n)}),window.addEventListener("message",function(e){if(e.origin===n&&(e.isTrusted||o)){var t=e.data||{},a=t.bm_method,d=t.bm_value,r=document.getElementById("source");if("translateSubmitAndGetHash"===a){var u=document.querySelector(".go-button"),c=new window.MouseEvent("mousedown"),m=new window.MouseEvent("mouseup");u.dispatchEvent(c),u.dispatchEvent(m),r.focus(),setTimeout(function(){e.source.postMessage({bm_request:t.bm_request,bm_value:window.location.hash.replace("#","")},e.origin)},200)}else"translateUpdateView"===a?window.location.hash=i[d]:"translateFocus"===a?s.then(function(){r.focus()}):"translatePrefillText"===a&&s.then(function(){r.value=d})}})}}();