var KEY_UP=38,KEY_DOWN=40,KEY_ENTER=13,ELEMENT_NODE=1,KEY_ESCAPE=27,KEY_F4=115,KEY_LEFT=37,KEY_RIGHT=39,KEY_HOME=36,KEY_END=35,g_do_complete=!0,g_do_svg=!0;function openCombo(e,t,o,i){var n=(i=i||document).getElementById(t);if(!n.disabled){var l=gComboEx=i.getElementById(o);"block"==l.style.display?(setStyle(l,"display","none",""),gItemNum=-1):(showCombo(n,l,null,i),gItemNum=-1),gFocusItem=n,("undefined"!=typeof window?window:i.defaultView).setTimeout(function(){doFocus()},0)}}var g_iField=null,g_cb=null,g_combobox_button=null;function showCombo(e,t,o,i){if(i=i||document,g_iField=e,g_cb=t,null!=e){var n=getComboButtonId(e.id);g_combobox_button=i.getElementById(n),void 0!==e.addEventListener?e.addEventListener("move",function(e){realShowCombo(i)},!1):e.attachEvent("onmove",function(e){realShowCombo(i)})}realShowCombo(i)}function getY(e){for(var t=0;null!=e;)t+=e.offsetTop,e=e.offsetParent;return t}function getX(e){for(var t=0;null!=e;)t+=e.offsetLeft,e=e.offsetParent;return t}function realShowCombo(e){null==e&&(e=document);var t=getY(g_iField),o=getX(g_iField),i=t+g_iField.offsetHeight+"px",n=o+"px";g_cb.style.minWidth=g_iField.offsetWidth-14+"px",setStyle(g_cb,"top",i,""),setStyle(g_cb,"left",n,""),setStyle(g_cb,"display","block",""),g_combobox_button&&setStyle(g_combobox_button,"display","","");var l=LP_getAbsolutePos(e,g_iField);if(null!=l&&l.left>0){var d="undefined"!=typeof window&&void 0!==window.setTimeout?window:e.defaultView,s=d.innerWidth;null==s&&"undefined"!=typeof getWindowWidth&&(s=getWindowWidth(d)),null!=s&&s>0&&(g_cb.style.maxWidth=parseInt(s)-parseInt(l.left)-16+"px",parseInt(g_cb.style.maxWidth)<parseInt(g_cb.style.minWidth)&&(g_cb.style.minWidth=g_cb.style.maxWidth))}}var gItemNum=0,gComboEx=null;function focusCombo(e,t,o){if(e||(e=window.event),e){var i=e.keyCode;if("undefined"!=typeof TABKEY&&(i==TABKEY||i==SHIFTKEY)){var n="undefined"!=typeof document&&document.location?document.location.href:"";if(-1!=n.indexOf("popupfilltab.html")||-1!=n.indexOf("#framesrc=LPMAGIC"))return tabfocuser(e),!1}var l="undefined"!=typeof document?document:e.view.document,d=(i=e.keyCode,!0),s=gComboEx=l.getElementById(o);if(i==KEY_DOWN||i==KEY_F4){d=!1,"block"==s.getAttribute("style.display")||showCombo(t,s,null,l);for(var u=s.childNodes,r=u.length,a=0;null!=u[a]&&a<r;){if(u[a].nodeType==ELEMENT_NODE&&"item"==u[a].className&&"none"!=u[a].style.display){gFocusItem=u[a];break}a++}gItemNum=a,a>=r&&(gItemNum=0),setTimeout(function(){doFocus()},0),d=!1}else i==KEY_ENTER||i==KEY_ESCAPE&&(null!=t.val&&t.val.length>0?d=!0:(d=!1,setStyle(gComboEx,"display","none",""),gItemNum=-1));return d}}function focusItem(e,t,o){for(var i=o.val,n=null,l=getItems(t),d=l.length,s=!1,u=0;u<d;u++)if(l[u].hasChildNodes()&&l[u].firstChild.nodeValue==i){s=!0,n=l[u],gItemNum=u;break}if(s||(n=addItem(t,i,l.length),gItemNum=l.length),null!=n){if(gFocusItem=n,"block"!=gComboEx.getAttribute("style.display")){var r=o.offsetTop+o.offsetHeight+"px",a=o.offsetLeft+"px";setStyle(t,"top",r,""),setStyle(t,"left",a,"")}else setStyle(t,"display","none","");setStyle(t,"display","block",""),setTimeout(function(){doFocus()},0)}}function addItem(e,t,o,i){i||(i=document);var n=i.createElement("div"),l=void 0!==t.label?t.label:t,d=void 0!==t.label?t.value:t;if(n.val=d,n.label=l,void 0!==t.label&&(n.label=t.label,void 0!==t.image)){var s=i.createElement("img");s.src=t.image,s.style.paddingRight="15px",n.appendChild(s),n.img=s.src}var u=i.createTextNode(l),r=n;return n.appendChild(u),n.setAttribute("tabindex","-1"),n.setAttribute("class","item"),n.setAttribute("data-lpcount",o),void 0!==n.addEventListener?(n.addEventListener("click",function(){gItemNum=this.getAttribute("data-lpcount")}),n.addEventListener("mouseover",function(){gFocusItem=this,doFocus()})):(n.attachEvent("onclick",function(){gItemNum=r.getAttribute("data-lpcount")}),n.attachEvent("onmouseover",function(){gFocusItem=r,doFocus()})),n.setAttribute("role","listitem"),n.setAttribute("origText",ofa(l)),e.appendChild(n),n}function doComboNav(e,t,o,i){if(e||(e=window.event),e){var n=e.keyCode,l=!0;if(null==gComboEx&&(gComboEx=t),n==KEY_UP||n==KEY_DOWN){l=!1;var d=0,s=(u=getItems(gComboEx)).length;if(n==KEY_UP)for(d=gItemNum-1;d>=0&&"none"==u[d].style.display;)"none"==u[d].style.display&&d--;else{for((d=gItemNum+1)==s&&(d=-1);d>=0&&d<s&&"none"==u[d].style.display;)"none"==u[d].style.display&&d++;d==s&&(d=-1)}gFocusItem=-1==(gItemNum=d)?i.getElementById(o):u[d],setTimeout(function(){doFocus()},0)}else if(n==KEY_ENTER||!e.keyCode&&e.button>=0){var u,r=(u=getItems(gComboEx))[gItemNum];if(null!=r&&"true"!=r.getAttribute("aria-disabled")){var a=r.label,g=r.val,m=i.getElementById(o);m.value=a,m.val=g,void 0!==r.img&&(m.style.background="url("+r.img+") no-repeat 2px 5px",m.style.paddingLeft="25px"),m.onchange&&m.onchange(),setStyle(gComboEx,"display","none",""),gItemNum=0,gFocusItem=m,setTimeout(function(){doFocus()},0)}}else n==KEY_ESCAPE&&(l=!1,setStyle(t,"display","none",""),gItemNum=0,gFocusItem=i.getElementById(o),setTimeout(function(){doFocus()},0));return l}}function getItems(e){if(null===e)return[];for(var t=new Array,o=(t=new Array,e.childNodes),i=o.length,n=0;n<i;n++)o[n].nodeType!=ELEMENT_NODE||"item"!=o[n].getAttribute("class")&&"item focus"!=o[n].getAttribute("class")||(t[t.length]=o[n]);return t}function setStyle(e,t,o,i){var n=!1;try{e.style&&e.style.setProperty&&(e.style.setProperty(t,o,i),n=!0)}catch(e){alert("exception caught setting style: "+e.message)}if(!n)try{e.style[t]=o,n=!0}catch(e){alert("exception caught setting direct style: "+e.message)}return n}var gFocusItem=null,gLastFocusItem=null;function doFocus(){null!=gFocusItem&&(gFocusItem.focus(),gLastFocusItem&&"item focus"==gLastFocusItem.className&&(gLastFocusItem.className="item"),gFocusItem&&"item"==gFocusItem.className&&(gFocusItem.className="item focus"),gLastFocusItem=gFocusItem,gFocusItem=null)}function create_combo(e,t,o,i,n,l,d,s,u){i||(i=document),n||(n="");var r=i.getElementById(e),a=getComboId(e);if(r&&!i.getElementById(a)&&null!==a){r.onkeydown=function(e){return e||(e=window.event),focusCombo(e,r,a)},r.onkeyup=function(e){return e||(e=window.event),keyupCombo(i,e,r,a),!1},r.setAttribute("role","textfield"),r.setAttribute("aria-haspopup","true"),r.setAttribute("autocomplete","off"),r.style.marginRight="0px";var g=b=i.createElement(n+"div");b.setAttribute("role","list"),b.style.display="none","undefined"!=typeof g_isie&&g_isie&&(b.style.display="none"),b.setAttribute("id",a),b.setAttribute("class","dropStyle"),"undefined"!=typeof g_isie&&g_isie&&(b.className="dropStyle"),b.onkeydown=function(e){return doComboNav(e,this,this.id.substring(0,this.id.length-6),i)},void 0!==b.addEventListener?b.addEventListener("click",function(e){doComboNav(e,this,this.id.substring(0,this.id.length-6),i)}):b.attachEvent("onclick",function(e){if(e||(e=window.event),!e)return!1;doComboNav(e,g,g.id.substring(0,g.id.length-6),i)}),b.style.overflowY="auto",b.style.overflowX="auto","undefined"!=typeof g_isie&&g_isie&&(b.style.background="#fff"),b.style.paddingLeft="6px",b.style.paddingRight="6px",b.style.position="absolute",b.setAttribute("autofilled","false"),u?insertAfter(i.getElementById(u),b):void 0!==i.body&&i.body?i.body.appendChild(b):r.parentNode.parentNode.appendChild(b),void 0!==r.ownerDocument.defaultView&&void 0!==r.ownerDocument.defaultView.addEventListener?(r.ownerDocument.defaultView.addEventListener("click",function(t){t.target.id!=e&&close_combo(e,i)},!1),r.addEventListener("keydown",function(t){9==t.keyCode&&close_combo(e,i)},!1)):(document.attachEvent("onclick",function(t){window.event.srcElement.id!=e&&close_combo(e,i)}),document.attachEvent("onkeydown",function(t){9==window.event.keyCode&&close_combo(e,i)}));for(var m=0;m<t.length;m++)addItem(b,t[m],m,i);var f=("undefined"==typeof gLocalBaseUrl?"":gLocalBaseUrl)+"images/pwdrop.png";if(g_do_svg&&(f=("undefined"==typeof gLocalBaseUrl?"":gLocalBaseUrl)+"images/teardrop.png"),("undefined"!=typeof g_isie&&g_isie||"undefined"!=typeof g_isfirefox&&g_isfirefox)&&(f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAfElEQVQ4T2NkoDJgpLJ5DKMGUh6io2GIGobe3t4LGBkZ49FD9v///wu3bt2agC3ECYYhuqH4DANZQNDAgIAAgT9//hwAqtUH4ossLCwOGzZs+IArPRA0EKQRZOjv378nsLKyFuAzjCgXkpoyiXIhKYaOGkhKaGFXS/UwBABG2SEVsoLJ9AAAAABJRU5ErkJggg=="),o&&"undefined"!=typeof LP_getAbsolutePos){var c=0,p=0,b=i.createElement(n+"div");void 0!==i.body&&i.body?l?insertAfter(i.getElementById(l),b):i.body.appendChild(b):r.parentNode.appendChild(b);var y,h=getComboButtonId(e),v=new Array,_=3;if(y=void 0!==r.ownerDocument.defaultView&&void 0!==r.ownerDocument.defaultView.getComputedStyle?r.ownerDocument.defaultView.getComputedStyle(r):r.currentStyle,!(x=LP_getAbsolutePos(i,r)))return;if(null!=x&&x.left>0&&x.top>0){var E=x.left+parseInt(x.width)+4-30;c=0,p=0,"undefined"!=typeof g_isie&&g_isie&&(p=-4,c=2),v.left=E+p+"px",v.position="absolute",v.top=parseInt(x.top)+4+c+"px","undefined"!=typeof g_isfirefox&&g_isfirefox||(v.padding=_+"px")}(N=Math.floor((30-x.height)/2))>=1&&x.height<30&&(c=0,p=0,"undefined"!=typeof g_isie&&g_isie,(v=new Array).position="absolute",v.height=x.height-4+"px",v.width=x.height-4+"px",v.top=parseInt(x.top)+4+N+4+"px",E=x.left+parseInt(x.width)+4-30+N+4,v.left=E+N+"px",(_-=2*N)<0&&(_=0),"undefined"!=typeof g_isfirefox&&g_isfirefox||(v.padding=_+"px"));var I=Math.round((x.height-30)/2);if(x.height>30){if(c=0,p=0,"undefined"!=typeof g_isie&&g_isie){var C=parseInt(y.borderTopWidth);I-=(C+parseInt(y.borderBottomWidth))/2,p=-5,c=C}(v=new Array).left=E+p+"px",v.position="absolute",v.top=x.top+I+c+"px",_+=2*I,"undefined"!=typeof g_isfirefox&&g_isfirefox||(v.padding=_+"px")}"undefined"!=typeof g_isie&&g_isie&&(v.border="0px"),r.style.textOverflow="ellipsis",r.style.whiteSpace="nowrap",l&&(b.style.marginLeft=d?d+"px":"-15px",b.style.display="inline",b.style.verticalAlign="top",b.style.marginTop="6px",s?(v=new Array).marginTop=s+"px":v.marginTop="-18px");var w=b.ownerDocument.createElement(g_isfirefox?"image":"img");if(w.setAttribute("id",h),w.setAttribute("src",f),w.setAttribute("valign","middle"),b.appendChild(w),!(A=i.getElementById(h)))return;for(var m in v)v.hasOwnProperty(m)&&(A.style[m]=v[m]);A.onclick=function(e){openCombo(e,this.id.substring(0,this.id.length-7),getComboId(this.id.substring(0,this.id.length-7)),i),null!=e?e.cancelBubble=!0:window.event.cancelBubble=!0}}else if(!o&&"undefined"!=typeof LP_getAbsolutePos){var A,x,N;if((A=i.createElement(n+"img")).id=getComboButtonId(e),null!==A.id&&(A.onclick=function(e){openCombo(e,this.id.substring(0,this.id.length-7),getComboId(this.id.substring(0,this.id.length-7)),i),null!=e?e.cancelBubble=!0:window.event.cancelBubble=!0}),A.setAttribute("src",f),A.setAttribute("valign","middle"),"undefined"!=typeof g_isopera&&g_isopera&&(A.style.position="relative",A.style.top="7px"),void 0!==i.body&&i.body?i.body.appendChild(A):i.getElementById("main").appendChild(A),null!=(x=LP_getAbsolutePos(i,r))&&x.left>0&&x.top>0){E=x.left+x.width+2;A.style.left=E+"px",A.style.position="absolute",A.style.top=x.top+"px"}(N=Math.floor((30-x.height)/2))>=1&&x.height<30&&(A.style.height=x.height+"px",A.style.width=x.height+"px",A.style.top=x.top+N+"px");I=Math.round((x.height-30)/2);x.height>30&&(A.style.top=x.top+I+"px")}A.className+="teardrop"}}function delete_combo_item(e,t){var o=getComboId(e),i=document.getElementById(o);if(i)for(var n=getItems(i),l=0;l<n.length;l++)if(n[l].innerHTML==t){for(n.splice(l,1);i.hasChildNodes();)i.removeChild(i.firstChild);for(var d=0;d<n.length;d++)addItem(i,n[d].innerHTML,d);break}}function close_combo(e,t){t||(t=document);var o=getComboId(e),i=t.getElementById(o);i&&("block"==i.style.display&&(setStyle(i,"display","none",""),gItemNum=-1),g_do_complete&&unhighlight_combo_all_items(t,e))}function repopulate_combo(e,t,o){o||(o=document);var i=getComboId(e),n=o.getElementById(i);if(n){for(;n.hasChildNodes();)n.removeChild(n.firstChild);for(var l=0;l<t.length;l++)addItem(n,t[l],l,o)}var d=getComboButtonId(e),s=o.getElementById(d);s&&setStyle(s,"display","","")}function destroy_combo(e,t){if(t||(t=document),!(null==e||e.length<=0))try{var o=getComboId(e),i=t.getElementById(o);if(i){for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.parentNode.removeChild(i)}var n=getComboButtonId(e),l=t.getElementById(n);l&&l.parentNode.removeChild(l)}catch(e){console_log("destroy_combo error: "+e.message)}}function highlight_combo_item(e,t,o,i){return 0}function unhighlight_combo_item(e,t,o){return 0}function unhighlight_combo_all_items(e,t){return 0}function getComboId(e){return null===e||""===e?null:e+"_combo"}function getComboButtonId(e){return null===e||""===e?null:e+"_button"}function hide_combo_item(e){null!==e&&setStyle(e,"display","none","")}function show_combo_item(e){null!==e&&setStyle(e,"display","","")}function show_all_combo_items(e,t){if(e||(e=document),!(null==t||t.length<=0)){var o=getComboId(t),i=e.getElementById(o);if(i)for(var n=getItems(i),l=0;l<n.length;l++)show_combo_item(n[l])}}function combo_filter(e,t,o){if(e||(e=document),!(null===t||t.length<=0)){var i=!0,n=0;null===o&&(o="");var l=of(o,e),d=null,s=getComboId(t),u=e.getElementById(s);if(u){for(var r=getItems(u),a=0;a<r.length;a++){var g="undefined"!=typeof g_isfirefox&&g_isfirefox?r[a].textContent:get_innertext(r[a]),m=g;m=void 0===g.trim?g.replace(/^\s*|\s+$/g,""):g.trim(),""===(void 0===o.trim?o.replace(/^\s*|\s+$/g,""):o.trim())||m.toLowerCase().indexOf(l.toLowerCase())>=0?(show_combo_item(r[a]),highlight_combo_item(e,t,r[a],o),i=!1,n++,d=r[a]):(hide_combo_item(r[a]),unhighlight_combo_item(e,t,r[a]))}if(i)close_combo(t,e);else{var f=u.getAttribute("autofilled");if(1===n&&"false"==f){u.setAttribute("autofilled","true");var c=e.getElementById(t);if(c){var p=c.value.length,b=d.val.length;if(c.value=d.val,"selectionStart"in c)c.selectionStart=p,c.selectionEnd=b;else{var y=c.createTextRange();y.moveStart("character",p),y.collapse(),y.moveEnd("character",b),y.select()}}close_combo(t,e)}}}}}function keyupCombo(e,t,o,i){if(e||(e=document),t||(t=window.event),t){var n=e.getElementById(i);if(null!==n&&null!==o){var l=t.keyCode;if(l!=KEY_DOWN&&l!=KEY_F4&&l!=KEY_UP&&l!=KEY_ENTER&&l!=KEY_ESCAPE){if("undefined"!=typeof TABKEY&&(l==TABKEY||l==SHIFTKEY)){var d="undefined"!=typeof document&&document.location?document.location.href:"";if(-1!=d.indexOf("popupfilltab.html")||-1!=d.indexOf("#framesrc=LPMAGIC"))return tabfocuser(t),!1}isComboShowing(n)||(showCombo(o,n,null,e),gItemNum=-1,setTimeout(function(){doFocus()},0)),combo_filter(e,o.id,o.value)}}}}function keydownCombo(e,t,o,i){}function isComboShowing(e){return null!==e&&"block"==e.style.display}function insertAfter(e,t){e.parentNode.insertBefore(t,e.nextSibling)}
//# sourceMappingURL=sourcemaps/popupcombobox.js.map