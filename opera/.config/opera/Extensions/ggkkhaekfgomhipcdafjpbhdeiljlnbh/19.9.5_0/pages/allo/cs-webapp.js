!function(){"use strict";function e(){var e=o.classList.contains("open")&&!t.classList.contains("iron-selected");e!==r&&(r=e),window.parent.postMessage({bm_method:"alloDisplayNav",bm_value:e},i)}if("https://allo.google.com"===window.location.origin&&window.top!==window){var o,t,n="undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser,i=n.runtime.getURL("PATH").replace("/PATH",""),r=!0;window.addEventListener("DOMContentLoaded",function(){o=document.getElementById("leftBar"),t=document.querySelector("#userPanelView > #settings");var n=new window.MutationObserver(e),i={attributes:!0};n.observe(o,i),n.observe(t,i)})}}();