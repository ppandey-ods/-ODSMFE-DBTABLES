/**                                                                                                                                                                                                                                                            
 * main.js                                                                                                                                                                                                                                                     
 * http://www.codrops.com                                                                                                                                                                                                                                      
 *                                                                                                                                                                                                                                                             
 * Licensed under the MIT license.                                                                                                                                                                                                                             
 * http://www.opensource.org/licenses/mit-license.php                                                                                                                                                                                                          
 *&nbsp;                                                                                                                                                                                                                                                       
 * Copyright 2016, Codrops                                                                                                                                                                                                                                     
 * http://www.codrops.com                                                                                                                                                                                                                                      
 */                                                                                                                                                                                                                                                            
sap.ui.define([],function(){"use strict";function e(e,t){for(var i in t){if(t.hasOwnProperty(i)){e[i]=t[i]}}return e}function t(e){var t=0;var i=0;if(!e)var e=window.event;if(e.pageX||e.pageY){t=e.pageX;i=e.pageY}else if(e.clientX||e.clientY){t=e.clientX+
+document.body.scrollLeft+document.documentElement.scrollLeft;i=e.clientY+document.body.scrollTop+document.documentElement.scrollTop}return{x:t,y:i}}function i(){var e=false;(function(t){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/+
|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|+
xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cd+
m\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)+
|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3+
ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a+
|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m+
)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(+
52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))e=true})(navigator.userAgent||navigator.vendor||window.opera);return e}function n(t){this.options=e({},this.options);e(this.options+
,t);this.number=this.options.number;this.color=this.options.color;this.previewTitle=this.options.previewTitle;this.isActive=!this.options.inactive;this._layout()}n.prototype.options={number:0,color:"#f1f1f1",previewTitle:"",inactive:false};n.prototype._l+
ayout=function(){this.cube=document.createElement("div");this.cube.className=this.isActive?"cube":"cube cube--inactive";this.cube.innerHTML='<div class="cube__side cube__side--back"></div><div class="cube__side cube__side--left"></div><div class="cube__s+
ide cube__side--right"></div><div class="cube__side cube__side--bottom"></div><div class="cube__side cube__side--top"></div><div class="cube__side cube__side--front"><div class="cube__number">'+(this.number+1)+"</div></div>";this.currentTransform={transl+
ateZ:0,rotateX:0,rotateY:0}};n.prototype._rotate=function(e){anime.remove(this.cube);var t=this._getDirection(e),i=e.type.toLowerCase()==="mouseenter"?1:-1,n={targets:this.cube,duration:500,easing:"easeOutQuart",translateZ:i===1?100:0};switch(t){case 0:n+
.rotateX=i===1?-180:0;n.rotateY=0;break;case 1:n.rotateY=i===1?-180:0;n.rotateX=0;break;case 2:n.rotateX=i===1?180:0;n.rotateY=0;break;case 3:n.rotateY=i===1?180:0;n.rotateX=0;break}this.currentTransform={translateZ:n.translateZ,rotateX:n.rotateX,rotateY+
:n.rotateY};anime(n)};n.prototype._setContentTitleFx=function(e){this.titlefx=new TextFx(e);this.titlefxSettings={in:{duration:800,delay:function(e,t){return 900+t*20},easing:"easeOutExpo",opacity:{duration:200,value:[0,1],easing:"linear"},rotateZ:functi+
on(e,t){return[anime.random(-10,10),0]},translateY:function(e,t){return[anime.random(-200,-100),0]}},out:{duration:800,delay:300,easing:"easeInExpo",opacity:0,translateY:-350}}};n.prototype._getDirection=function(e){var t=this.cube.querySelector(".cube__+
side--front"),i=t.offsetWidth,n=t.offsetHeight,a=t.getBoundingClientRect(),o=e.pageX-(a.left+window.pageXOffset)-i/2*(i>n?n/i:1),r=e.pageY-(a.top+window.pageYOffset)-n/2*(n>i?i/n:1),s=Math.round(Math.atan2(r,o)/1.57079633+5)%4;return s};function a(e){thi+
s.el=e;this.content=document.querySelector(".content");this._init(e);this.calendarDays=[].slice.call(this.el.querySelectorAll(".cube"));this.cubes=document.createElement("div");this.cubes.className="cubes";this.el.appendChild(this.cubes);this.days=[];var+
 t=this;this.calendarDays.forEach(function(e,i){var a=new n({number:i,color:e.getAttribute("data-bg-color")||"#f1f1f1",previewTitle:e.getAttribute("data-title")||"",inactive:e.hasAttribute("data-inactive")});var r=$(e).children()[0];$(".content").prepend+
($(e).children()[0]);o[Number(i)]=r;var s=r;if(s!==undefined){var c=o[i].querySelector(".content__title");a._setContentTitleFx(c)}t.days.push(a);t.cubes.appendChild(a.cube);t.el.removeChild(e);t._initDayEvents(a)});this.dayPreview=document.createElement(+
"h2");this.dayPreview.className="title";this.el.appendChild(this.dayPreview);this._initEvents()}var o=[],r=[],s,c,u,l={snow:false,tilt:false},d,m,p;a.prototype._init=function(e){r=[].slice.call(e.children);this.settings={snow:true,tilt:false};c=document.+
querySelector(".background");u=c.style.backgroundColor;var t=document.querySelector(".content");d=t.querySelector(".btn-back");m=t.querySelector(".content__number");p=i()};a.prototype._initEvents=function(){var e=this;if(l.tilt){this.mousemoveFn=function+
(i){if(e.isOpen){return false}requestAnimationFrame(function(){var n=t(i);e._rotateCalendar(n)})};this.handleOrientation=function(){if(e.isOpen){return false}var t=event.gamma;t+=90;requestAnimationFrame(function(){var i={ry:40},n=2*i.ry/180*t-i.ry;e.cub+
es.style.WebkitTransform=e.cubes.style.transform="rotate3d(0,-1,0,"+n+"deg)"})};if(p){window.addEventListener("deviceorientation",this.handleOrientation)}else{document.addEventListener("mousemove",this.mousemoveFn)}}this.backToCalendarFn=function(t){if(!+
e.isOpen||e.isAnimating){return false}e.isAnimating=true;e._hidePreviewTitle();e._hideContent();anime({targets:e.el,duration:1400,easing:"easeInOutExpo",opacity:1});for(var i=0,n=e.days.length;i<n;++i){var a=e.days[i],o=e.currentDayIdx===i;if(o){a.isRota+
ted=false}anime({targets:a.cube,duration:500,delay:o?1e3:function(e,t){return 1100+anime.random(0,300)},easing:"easeOutBack",scale:[0,1],translateZ:0,rotateX:0,rotateY:0,complete:o?function(){e.isOpen=false;e.isAnimating=false}:null})}};d.addEventListene+
r("click",this.backToCalendarFn)};a.prototype._initDayEvents=function(e){var t=this;var i=e;if(!p){i.mouseenterFn=function(e){if(i.isRotated||t.isOpen){return false}clearTimeout(s);i.rotatetimeout=setTimeout(function(){s=setTimeout(function(){t._changeBG+
Color(i.color)},30);i._rotate(e);t._showPreviewTitle(i.previewTitle,i.number);i.isRotated=true},30)};i.mouseleaveFn=function(e){if(t.isOpen){return false}clearTimeout(i.rotatetimeout);clearTimeout(s);if(i.isRotated){s=setTimeout(function(){t._resetBGColo+
r()},35);i._rotate(e);t._hidePreviewTitle();i.isRotated=false}}}i.clickFn=function(e){if(!i.isActive||t.isAnimating){return false}t.isAnimating=true;t.isOpen=true;t.currentDayIdx=i.number;anime({targets:t.el,duration:1400,easing:"easeInOutExpo",opacity:0+
,complete:function(){t.isAnimating=false}});for(var n=0,a=t.days.length;n<a;++n){var o=t.days[n],r=t.currentDayIdx===n;if(r){t._showContent(i)}anime({targets:o.cube,duration:500,delay:r?600:function(){return anime.random(0,300)},easing:r?"easeOutCubic":"+
easeInBack",scale:0,translateZ:r?-1e3:function(){return anime.random(-1e3,-400)},rotateX:r?-180:function(){return anime.random(-180,180)},rotateY:r?-180:function(){return anime.random(-180,180)}})}};i.cube.querySelector(".cube__side--front").addEventList+
ener("mouseenter",i.mouseenterFn);i.cube.addEventListener("mouseleave",i.mouseleaveFn);i.cube.addEventListener("click",i.clickFn);i.cube.addEventListener("mousedown",function(){clearTimeout(i.rotatetimeout)})};a.prototype._rotateCalendar=function(e){var +
t={rx:3,ry:3},i=2*t.rx/this.cubes.offsetHeight*e.y-t.rx,n=2*t.ry/this.cubes.offsetWidth*e.x-t.ry;this.cubes.style.WebkitTransform=this.cubes.style.transform="rotate3d(-1,0,0,"+i+"deg) rotate3d(0,1,0,"+n+"deg)"};a.prototype._showPreviewTitle=function(e,t)+
{this.dayPreview.innerHTML=e;this.dayPreview.setAttribute("data-number",parseInt(t+1));this.txtfx=new TextFx(this.dayPreview);this.txtfx.hide();this.dayPreview.style.opacity=1;this.txtfx.show({in:{duration:700,delay:function(e,t){return t*20},easing:"eas+
eOutCirc",opacity:1,translateX:function(e,t){return[50+t*10,0]}}})};a.prototype._hidePreviewTitle=function(){var e=this;if(this.txtfx){this.txtfx.hide()}this.dayPreview.style.opacity=0};a.prototype._showContent=function(e){var t=o[this.currentDayIdx],i=t+
.querySelector(".content__title"),n=t.querySelector(".content__description"),a=t.querySelector(".content__meta");t.classList.add("content__block--current");e.titlefx.hide();e.titlefx.show(e.titlefxSettings);anime({targets:[n,a],duration:800,delay:functio+
n(e,t){return t===0?1e3:1100},easing:"easeOutExpo",opacity:[0,1],translateY:[100,0]});anime({targets:d,duration:1100,delay:800,easing:"easeOutExpo",opacity:[0,1],translateY:[50,0]});m.innerHTML=this.currentDayIdx+1;anime({targets:m,duration:500,delay:900+
,easing:"easeOutExpo",opacity:[0,1],translateX:[-200,0]})};a.prototype._hideContent=function(){var e=this.days[this.currentDayIdx],t=o[this.currentDayIdx],i=t.querySelector(".content__title"),n=t.querySelector(".content__description"),a=t.querySelector("+
.content__meta");anime({targets:m,duration:800,easing:"easeInExpo",opacity:0,translateX:-200});anime({targets:d,duration:1e3,easing:"easeInExpo",opacity:0,translateY:50});anime({targets:[n,a],duration:800,delay:function(e,t){return t===0?150:0},easing:"e+
aseInExpo",opacity:[1,0],translateY:[0,200]});var r=e.cube.getBoundingClientRect();e.titlefx.hide(e.titlefxSettings,function(){t.classList.remove("content__block--current")})};a.prototype._changeBGColor=function(e){c.style.backgroundColor=e};a.prototype.+
_resetBGColor=function(){c.style.backgroundColor=u};return a});                                                                                                                                                                                                