!function(){"use strict";function t(t){if("object"!=typeof t)return"";var n=[];return Object.keys(t).forEach(function(e){null!==t[e]&&"undefined"!=typeof t[e]&&n.push(e+"="+encodeURIComponent(t[e]))}),n.join("&")}function n(t,n){window.parent.postMessage({bm_instance:p,bm_method:t,bm_value:n},a)}function e(t){if(JSON.stringify(t).indexOf(",[[4]],")!==-1)return n("taskscompanionShowBack");if(Array.isArray(t)){if(Array.isArray(t[0])){var o=t[0][0];if("~default"===o)return n("taskscompanionListData",t);if("string"==typeof o&&o.startsWith("https://mail.google.com/"))return n("taskscompanionOpenMail",o)}for(var i=0;i<t.length;i++)e(t[i])}}function o(t){var n=t.data||{};if("taskscompanionFrameMessage"===n.bm_method){var e=["apps.cpn.msg",10,[3,null,null,[],null,window.location.href],[null,null,null,null,JSON.parse(n.bm_value)]],o={s:":/"+p+":apps.cpn.msg",f:"..",r:"..",t:u,c:15,g:!1,a:[JSON.stringify(e)]};g.contentWindow.postMessage("!_"+JSON.stringify(o),h)}}if("https://mail.google.com"===window.location.origin&&window.location.pathname.startsWith("/tasks/embed")&&window.top!==window){var i="undefined"!=typeof chrome&&chrome.runtime?chrome:"undefined"!=typeof browser&&browser,a=i.runtime.getURL("PATH").replace("/PATH",""),s=i.runtime.getURL("").startsWith("moz-extension://"),r=window.location.search,c=window.location.search.split("bm_xfo=")[1].split("&")[0],l="https://mail.google.com",m=r.split("&authuser=")[1].split("&")[0],d=r.split("&hl=")[1].split("&")[0],p=r.split("&id=")[1].split("&")[0],u=Math.round(1e9*Math.random()).toString(),f=t({authuser:m,hl:d,forcehl:"1",bm_cid:"taskscompanion-webapp",bm_hsb:"1",bm_wiz:c,_gfid:p,parent:l,origin:l,rpctoken:u,id:p}),h="https://tasks.google.com/embed/list/?"+f+"#"+f,g=document.createElement("iframe");g.addEventListener("DOMContentLoaded",function(){n("taskscompanionLoaded")}),g.addEventListener("load",function(){n("taskscompanionLoaded")}),g.className="bm-cs-taskscompanion-frame",g.name=p,g.src=h,window.addEventListener("message",function(t){if(t.isTrusted||s)if(t.origin===a)o(t);else if("https://tasks.google.com"===t.origin){var n=t.data||{};if(!n.startsWith("!_{"))return;if(n=JSON.parse(n.replace("!_","")),!(n.s&&n.s.startsWith("/"+p)&&Array.isArray(n.a)&&n.a[0]))return;n=JSON.parse(n.a[0]),e(n)}}),function w(){document.body?document.body.appendChild(g):setTimeout(w,.01)}()}}();