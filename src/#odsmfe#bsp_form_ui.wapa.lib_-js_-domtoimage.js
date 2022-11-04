(function(e){"use strict";var t=y();var n=w();var r=P();var o=b();var i={imagePlaceholder:undefined,cacheBust:false};var u={toSvg:a,toPng:l,toJpeg:f,toBlob:s,toPixelData:c,impl:{fontFaces:r,images:o,util:t,inliner:n,options:{}}};if(typeof module!=="undef+
ined")module.exports=u;else e.domtoimage=u;function a(e,n){n=n||{};h(n);return Promise.resolve(e).then(function(e){return d(e,n.filter,true)}).then(g).then(p).then(r).then(function(r){return v(r,n.width||t.width(e),n.height||t.height(e))});function r(e){+
if(n.bgcolor)e.style.backgroundColor=n.bgcolor;if(n.width)e.style.width=n.width+"px";if(n.height)e.style.height=n.height+"px";if(n.style)Object.keys(n.style).forEach(function(t){e.style[t]=n.style[t]});return e}}function c(e,n){return m(e,n||{}).then(fun+
ction(n){return n.getContext("2d").getImageData(0,0,t.width(e),t.height(e)).data})}function l(e,t){return m(e,t||{}).then(function(e){return e.toDataURL()})}function f(e,t){t=t||{};return m(e,t).then(function(e){return e.toDataURL("image/jpeg",t.quality|+
|1)})}function s(e,n){return m(e,n||{}).then(t.canvasToBlob)}function h(e){if(typeof e.imagePlaceholder==="undefined"){u.impl.options.imagePlaceholder=i.imagePlaceholder}else{u.impl.options.imagePlaceholder=e.imagePlaceholder}if(typeof e.cacheBust==="und+
efined"){u.impl.options.cacheBust=i.cacheBust}else{u.impl.options.cacheBust=e.cacheBust}}function m(e,n){return a(e,n).then(t.makeImage).then(t.delay(100)).then(function(t){var n=r(e);n.getContext("2d").drawImage(t,0,0);return n});function r(e){var r=doc+
ument.createElement("canvas");r.width=n.width||t.width(e);r.height=n.height||t.height(e);if(n.bgcolor){var o=r.getContext("2d");o.fillStyle=n.bgcolor;o.fillRect(0,0,r.width,r.height)}return r}}function d(e,n,r){if(!r&&n&&!n(e))return Promise.resolve();re+
turn Promise.resolve(e).then(o).then(function(t){return i(e,t,n)}).then(function(t){return u(e,t)});function o(e){if(e instanceof HTMLCanvasElement)return t.makeImage(e.toDataURL());return e.cloneNode(false)}function i(e,n,r){var o=e.childNodes;if(o.leng+
th===0)return Promise.resolve(n);return i(n,t.asArray(o),r).then(function(){return n});function i(e,t,n){var r=Promise.resolve();t.forEach(function(t){r=r.then(function(){return d(t,n)}).then(function(t){if(t)e.appendChild(t)})});return r}}function u(e,n+
){if(!(n instanceof Element))return n;return Promise.resolve().then(r).then(o).then(i).then(u).then(function(){return n});function r(){r(window.getComputedStyle(e),n.style);function r(e,n){if(e.cssText)n.cssText=e.cssText;else r(e,n);function r(e,n){t.as+
Array(e).forEach(function(t){n.setProperty(t,e.getPropertyValue(t),e.getPropertyPriority(t))})}}}function o(){[":before",":after"].forEach(function(e){r(e)});function r(r){var o=window.getComputedStyle(e,r);var i=o.getPropertyValue("content");if(i===""||+
i==="none")return;var u=t.uid();n.className=n.className+" "+u;var a=document.createElement("style");a.appendChild(c(u,r,o));n.appendChild(a);function c(e,n,r){var o="."+e+":"+n;var i=r.cssText?u(r):a(r);return document.createTextNode(o+"{"+i+"}");functio+
n u(e){var t=e.getPropertyValue("content");return e.cssText+" content: "+t+";"}function a(e){return t.asArray(e).map(n).join("; ")+";";function n(t){return t+": "+e.getPropertyValue(t)+(e.getPropertyPriority(t)?" !important":"")}}}}}function i(){if(e ins+
tanceof HTMLTextAreaElement)n.innerHTML=e.value;if(e instanceof HTMLInputElement)n.setAttribute("value",e.value)}function u(){if(!(n instanceof SVGElement))return;n.setAttribute("xmlns","http://www.w3.org/2000/svg");if(!(n instanceof SVGRectElement))retu+
rn;["width","height"].forEach(function(e){var t=n.getAttribute(e);if(!t)return;n.style.setProperty(e,t)})}}}function g(e){return r.resolveAll().then(function(t){var n=document.createElement("style");e.appendChild(n);n.appendChild(document.createTextNode(+
t));return e})}function p(e){return o.inlineAll(e).then(function(){return e})}function v(e,n,r){return Promise.resolve(e).then(function(e){e.setAttribute("xmlns","http://www.w3.org/1999/xhtml");return(new XMLSerializer).serializeToString(e)}).then(t.esca+
peXhtml).then(function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'+e+"</foreignObject>"}).then(function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+n+'" height="'+r+'">'+e+"</svg>"}).then(function(e){return"data:image+
/svg+xml;charset=utf-8,"+e})}function y(){return{escape:h,parseExtension:t,mimeType:n,dataAsUrl:s,isDataUrl:r,canvasToBlob:i,resolveUrl:a,getAndEncode:f,uid:c(),delay:m,asArray:d,escapeXhtml:g,makeImage:l,width:p,height:v};function e(){var e="application+
/font-woff";var t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function t(e){var t=/\.([^\.\/]*?)$/g.exec(e);if(+
t)return t[1];else return""}function n(n){var r=t(n).toLowerCase();return e()[r]||""}function r(e){return e.search(/^(data:)/)!==-1}function o(e){return new Promise(function(t){var n=window.atob(e.toDataURL().split(",")[1]);var r=n.length;var o=new Uint8+
Array(r);for(var i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))})}function i(e){if(e.toBlob)return new Promise(function(t){e.toBlob(t)});return o(e)}function a(e,t){var n=document.implementation.createHTMLDocument();var r=n.createEl+
ement("base");n.head.appendChild(r);var o=n.createElement("a");n.body.appendChild(o);r.href=t;o.href=e;return o.href}function c(){var e=0;return function(){return"u"+t()+e++;function t(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice+
(-4)}}}function l(e){return new Promise(function(t,n){var r=new Image;r.onload=function(){t(r)};r.onerror=n;r.src=e})}function f(e){var t=3e4;if(u.impl.options.cacheBust){e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()}return new Promise(function(n){var r+
=new XMLHttpRequest;r.onreadystatechange=a;r.ontimeout=c;r.responseType="blob";r.timeout=t;r.open("GET",e,true);r.send();var o;if(u.impl.options.imagePlaceholder){var i=u.impl.options.imagePlaceholder.split(/,/);if(i&&i[1]){o=i[1]}}function a(){if(r.read+
yState!==4)return;if(r.status!==200){if(o){n(o)}else{l("cannot fetch resource: "+e+", status: "+r.status)}return}var t=new FileReader;t.onloadend=function(){var e=t.result.split(/,/)[1];n(e)};t.readAsDataURL(r.response)}function c(){if(o){n(o)}else{l("ti+
meout of "+t+"ms occured while fetching resource: "+e)}}function l(e){console.error(e);n("")}})}function s(e,t){return"data:"+t+";base64,"+e}function h(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function m(e){return function(t){return new Pro+
mise(function(n){setTimeout(function(){n(t)},e)})}}function d(e){var t=[];var n=e.length;for(var r=0;r<n;r++)t.push(e[r]);return t}function g(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")}function p(e){var t=y(e,"border-left-width");var n=y(e,"bor+
der-right-width");return e.scrollWidth+t+n}function v(e){var t=y(e,"border-top-width");var n=y(e,"border-bottom-width");return e.scrollHeight+t+n}function y(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))}}+
function w(){var e=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:i,shouldProcess:n,impl:{readUrls:r,inline:o}};function n(t){return t.search(e)!==-1}function r(n){var r=[];var o;while((o=e.exec(n))!==null){r.push(o[1])}return r.filter(function(e){return+
!t.isDataUrl(e)})}function o(e,n,r,o){return Promise.resolve(n).then(function(e){return r?t.resolveUrl(e,r):e}).then(o||t.getAndEncode).then(function(e){return t.dataAsUrl(e,t.mimeType(n))}).then(function(t){return e.replace(i(n),"$1"+t+"$3")});function +
i(e){return new RegExp("(url\\(['\"]?)("+t.escape(e)+")(['\"]?\\))","g")}}function i(e,t,i){if(u())return Promise.resolve(e);return Promise.resolve(e).then(r).then(function(n){var r=Promise.resolve(e);n.forEach(function(e){r=r.then(function(n){return o(n+
,e,t,i)})});return r});function u(){return!n(e)}}}function P(){return{resolveAll:e,impl:{readAll:r}};function e(){return r(document).then(function(e){return Promise.all(e.map(function(e){return e.resolve()}))}).then(function(e){return e.join("\n")})}func+
tion r(){return Promise.resolve(t.asArray(document.styleSheets)).then(r).then(e).then(function(e){return e.map(o)});function e(e){return e.filter(function(e){return e.type===CSSRule.FONT_FACE_RULE}).filter(function(e){return n.shouldProcess(e.style.getPr+
opertyValue("src"))})}function r(e){var n=[];e.forEach(function(e){try{t.asArray(e.cssRules||[]).forEach(n.push.bind(n))}catch(t){console.log("Error while reading CSS rules from "+e.href,t.toString())}});return n}function o(e){return{resolve:function t()+
{var r=(e.parentStyleSheet||{}).href;return n.inlineAll(e.cssText,r)},src:function(){return e.style.getPropertyValue("src")}}}}}function b(){return{inlineAll:r,impl:{newImage:e}};function e(e){return{inline:n};function n(n){if(t.isDataUrl(e.src))return P+
romise.resolve();return Promise.resolve(e.src).then(n||t.getAndEncode).then(function(n){return t.dataAsUrl(n,t.mimeType(e.src))}).then(function(t){return new Promise(function(n,r){e.onload=n;e.onerror=r;e.src=t})})}}function r(o){if(!(o instanceof Elemen+
t))return Promise.resolve(o);return i(o).then(function(){if(o instanceof HTMLImageElement)return e(o).inline();else return Promise.all(t.asArray(o.childNodes).map(function(e){return r(e)}))});function i(e){var t=e.style.getPropertyValue("background");if(+
!t)return Promise.resolve(e);return n.inlineAll(t).then(function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))}).then(function(){return e})}}}})(this);                                                                     