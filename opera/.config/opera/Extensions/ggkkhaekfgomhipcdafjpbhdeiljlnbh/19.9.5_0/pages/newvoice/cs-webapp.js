!function(){"use strict";function e(){var e=t.pathname.replace(r,"");if(e.startsWith("/settings"))return"settings";var i=t.search,a=i.length>3&&i.indexOf("&bm_")===-1;return a?"back":e.startsWith("/signup")?"signup":e.startsWith("/calls")?"calls":e.startsWith("/messages")?"messages":e.startsWith("/voicemail")?"voicemail":e.startsWith("/archive")?"archive":e.startsWith("/spam")?"spam":"/"===e?null:"back"}if(window.top!==window){var t=window.location;if("https://voice.google.com"===t.origin){var i,a="undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser,s=a.runtime.getURL("PATH").replace("/PATH",""),n="calls",r=t.pathname.match(/\/((?:u\/\d\/)?(?:b\/\d{18,22}\/)?)(?:.*)/)[1];setInterval(function(){if(t.href!==i){i=t.href;var a=e();a!==n&&(n=a,window.parent.postMessage({bm_method:"newvoiceUpdateView",bm_value:n},s))}},100),window.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("head > title"),t=new window.MutationObserver(function(){var e=document.title,t=e.split(" - ")[1]||e.replace("Voice - ","");window.parent.postMessage({bm_method:"newvoiceWebsiteTitle",bm_value:t},s)});t.observe(e,{characterData:!0,subtree:!0})})}}}();