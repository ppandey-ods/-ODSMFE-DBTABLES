/** @preserve jsPDF 0.9.0rc2 ( ${buildDate} ${commitID} )                                                                                                                                                                                                      
Copyright (c) 2010-2012 James Hall, james@snapshotmedia.co.uk, https://github.com/MrRio/jsPDF                                                                                                                                                                  
Copyright (c) 2012 Willow Systems Corporation, willow-systems.com                                                                                                                                                                                              
MIT license.                                                                                                                                                                                                                                                   
*/                                                                                                                                                                                                                                                             
/*                                                                                                                                                                                                                                                             
 * Permission is hereby granted, free of charge, to any person obtaining                                                                                                                                                                                       
 * a copy of this software and associated documentation files (the                                                                                                                                                                                             
 * "Software"), to deal in the Software without restriction, including                                                                                                                                                                                         
 * without limitation the rights to use, copy, modify, merge, publish,                                                                                                                                                                                         
 * distribute, sublicense, and/or sell copies of the Software, and to                                                                                                                                                                                          
 * permit persons to whom the Software is furnished to do so, subject to                                                                                                                                                                                       
 * the following conditions:                                                                                                                                                                                                                                   
 *                                                                                                                                                                                                                                                             
 * The above copyright notice and this permission notice shall be                                                                                                                                                                                              
 * included in all copies or substantial portions of the Software.                                                                                                                                                                                             
 *                                                                                                                                                                                                                                                             
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,                                                                                                                                                                                             
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF                                                                                                                                                                                          
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND                                                                                                                                                                                                       
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE                                                                                                                                                                                      
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION                                                                                                                                                                                      
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION                                                                                                                                                                                       
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.                                                                                                                                                                                             
 * ====================================================================                                                                                                                                                                                        
 */                                                                                                                                                                                                                                                            
var jsPDF=function(){"use strict";if(typeof btoa==="undefined"){window.btoa=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=t.split(""),i,r,o,a,f,s,u,c,l=0,d=0,p="",h=[],g;do{i=e.charCodeAt(l++);r=e.charCodeAt(l++)+
;o=e.charCodeAt(l++);c=i<<16|r<<8|o;a=c>>18&63;f=c>>12&63;s=c>>6&63;u=c&63;h[d++]=n[a]+n[f]+n[s]+n[u]}while(l<e.length);p=h.join("");g=e.length%3;return(g?p.slice(0,g-3):p)+"===".slice(g||3)}}if(typeof atob==="undefined"){window.atob=function(e){var t="A+
BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n,i,r,o,a,f,s,u,c=0,l=0,d="",p=[];if(!e){return e}e+="";do{o=t.indexOf(e.charAt(c++));a=t.indexOf(e.charAt(c++));f=t.indexOf(e.charAt(c++));s=t.indexOf(e.charAt(c++));u=o<<18|a<<12|f<<6|s;+
n=u>>16&255;i=u>>8&255;r=u&255;if(f===64){p[l++]=String.fromCharCode(n)}else if(s===64){p[l++]=String.fromCharCode(n,i)}else{p[l++]=String.fromCharCode(n,i,r)}}while(c<e.length);d=p.join("");return d}}var e=typeof Object.keys==="function"?function(e){ret+
urn Object.keys(e).length}:function(e){var t=0,n;for(n in e){if(e.hasOwnProperty(n)){t++}}return t},t=function(e){                                                                                                                                             
/**  @preserve                                                                                                                                                                                                                                                 
            -----------------------------------------------------------------------------------------------                                                                                                                                                    
            JavaScript PubSub library                                                                                                                                                                                                                          
            2012 (c) ddotsenko@willowsystems.com                                                                                                                                                                                                               
            based on Peter Higgins (dante@dojotoolkit.org)                                                                                                                                                                                                     
            Loosely based on Dojo publish/subscribe API, limited in scope. Rewritten blindly.                                                                                                                                                                  
            Original is (c) Dojo Foundation 2004-2010. Released under either AFL or new BSD, see:                                                                                                                                                              
            http://dojofoundation.org/license for more information.                                                                                                                                                                                            
            -----------------------------------------------------------------------------------------------                                                                                                                                                    
            */                                                                                                                                                                                                                                                 
this.topics={};this.context=e;this.publish=function(e,t){if(this.topics[e]){var n=this.topics[e],i=[],r,o,a,f,s=function(){};t=Array.prototype.slice.call(arguments,1);for(o=0,a=n.length;o<a;o++){f=n[o];r=f[0];if(f[1]){f[0]=s;i.push(o)}r.apply(this.contex+
t,t)}for(o=0,a=i.length;o<a;o++){n.splice(i[o],1)}}};this.subscribe=function(e,t,n){if(!this.topics[e]){this.topics[e]=[[t,n]]}else{this.topics[e].push([t,n])}return{topic:e,callback:t}};this.unsubscribe=function(e){if(this.topics[e.topic]){var t=this.to+
pics[e.topic],n,i;for(n=0,i=t.length;n<i;n++){if(t[n][0]===e.callback){t.splice(n,1)}}}}};function n(i,r,o,a){if(typeof i==="undefined"){i="p"}else{i=i.toString().toLowerCase()}if(typeof r==="undefined"){r="mm"}if(typeof o==="undefined"){o="a4"}if(typeof+
 a==="undefined"&&typeof zpipe==="undefined"){a=false}var f=o.toString().toLowerCase(),s="0.9.0rc2",u=[],c=0,l=a,d="1.3",p={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.6+
4,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,2+
49.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,1+
13.39],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224]},h="0 g",g="0 G",b=0,y=[],w=2,v=false,j=[],m={},C={},S=16,F,P=.200025,A=1.15,O,T,R,x={title:"",subject:"",author:"",keywo+
rds:"",creator:""},B=0,I=0,L={},D=new t(L),E,k,U=function(e){return e.toFixed(2)},M=function(e){return e.toFixed(3)},z=function(e){var t=e.toFixed(0);if(e<10){return"0"+t}else{return t}},J=function(e){var t=e.toFixed(0);if(t.length<10){return new Array(1+
1-t.length).join("0")+t}else{return t}},N=function(e){if(v){y[b].push(e)}else{u.push(e);c+=e.length+1}},H=function(){w++;j[w]=c;N(w+" 0 obj");return w},q=function(e){N("stream");N(e);N("endstream")},G,K,Q,X,V=function(){G=T*R;K=O*R;var e,t,n,i,r,o,a;for(+
e=1;e<=b;e++){H();N("<</Type /Page");N("/Parent 1 0 R");N("/Resources 2 0 R");N("/Contents "+(w+1)+" 0 R>>");N("endobj");t=y[e].join("\n");H();if(l){n=[];for(r=0;r<t.length;++r){n[r]=t.charCodeAt(r)}a=adler32cs.from(t);o=new Deflater(6);o.append(new Uint+
8Array(n));t=o.flush();n=[new Uint8Array([120,156]),new Uint8Array(t),new Uint8Array([a&255,a>>8&255,a>>16&255,a>>24&255])];t="";for(r in n){if(n.hasOwnProperty(r)){t+=String.fromCharCode.apply(null,n[r])}}N("<</Length "+t.length+" /Filter [/FlateDecode]+
>>")}else{N("<</Length "+t.length+">>")}q(t);N("endobj")}j[1]=c;N("1 0 obj");N("<</Type /Pages");Q="/Kids [";for(r=0;r<b;r++){Q+=3+2*r+" 0 R "}N(Q+"]");N("/Count "+b);N("/MediaBox [0 0 "+U(G)+" "+U(K)+"]");N(">>");N("endobj")},W=function(e){e.objectNumbe+
r=H();N("<</BaseFont/"+e.PostScriptName+"/Type/Font");if(typeof e.encoding==="string"){N("/Encoding/"+e.encoding)}N("/Subtype/Type1>>");N("endobj")},Y=function(){var e;for(e in m){if(m.hasOwnProperty(e)){W(m[e])}}},Z=function(){D.publish("putXobjectDict"+
)},$=function(){N("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]");N("/Font <<");var e;for(e in m){if(m.hasOwnProperty(e)){N("/"+e+" "+m[e].objectNumber+" 0 R")}}N(">>");N("/XObject <<");Z();N(">>")},_=function(){Y();D.publish("putResources");j[2]=c;N("2+
 0 obj");N("<<");$();N(">>");N("endobj");D.publish("postPutResources")},ee=function(e,t,n){var i;if(C[t]===i){C[t]={}}C[t][n]=e},te={},ne=function(t,n,i,r){var o="F"+(e(m)+1).toString(10),a=m[o]={id:o,PostScriptName:t,fontName:n,fontStyle:i,encoding:r,me+
tadata:{}};ee(o,n,i);D.publish("addFont",a);return o},ie=function(){var e="helvetica",t="times",n="courier",i="normal",r="bold",o="italic",a="bolditalic",f="StandardEncoding",s=[["Helvetica",e,i],["Helvetica-Bold",e,r],["Helvetica-Oblique",e,o],["Helveti+
ca-BoldOblique",e,a],["Courier",n,i],["Courier-Bold",n,r],["Courier-Oblique",n,o],["Courier-BoldOblique",n,a],["Times-Roman",t,i],["Times-Bold",t,r],["Times-Italic",t,o],["Times-BoldItalic",t,a]],u,c,l,d;for(u=0,c=s.length;u<c;u++){l=ne(s[u][0],s[u][1],s+
[u][2],f);d=s[u][0].split("-");ee(l,d[0],d[1]||"")}D.publish("addFonts",{fonts:m,dictionary:C})},re=function(e,t){var n,i,r,o,a,f,s,u,c,l;if(t===r){t={}}o=t.sourceEncoding?o:"Unicode";f=t.outputEncoding;if((t.autoencode||f)&&m[F].metadata&&m[F].metadata[+
o]&&m[F].metadata[o].encoding){a=m[F].metadata[o].encoding;if(!f&&m[F].encoding){f=m[F].encoding}if(!f&&a.codePages){f=a.codePages[0]}if(typeof f==="string"){f=a[f]}if(f){u=false;s=[];for(n=0,i=e.length;n<i;n++){c=f[e.charCodeAt(n)];if(c){s.push(String.f+
romCharCode(c))}else{s.push(e[n])}if(s[n].charCodeAt(0)>>8){u=true}}e=s.join("")}}n=e.length;while(u===r&&n!==0){if(e.charCodeAt(n-1)>>8){u=true}n--}if(!u){return e}else{s=t.noBOM?[]:[254,255];for(n=0,i=e.length;n<i;n++){c=e.charCodeAt(n);l=c>>8;if(l>>8)+
{throw new Error("Character at position "+n.toString(10)+" of string '"+e+"' exceeds 16bits. Cannot be encoded into UCS-2 BE")}s.push(l);s.push(c-(l<<8))}return String.fromCharCode.apply(r,s)}},oe=function(e,t){return re(e,t).replace(/\\/g,"\\\\").replac+
e(/\(/g,"\\(").replace(/\)/g,"\\)")},ae=function(){N("/Producer (jsPDF "+s+")");if(x.title){N("/Title ("+oe(x.title)+")")}if(x.subject){N("/Subject ("+oe(x.subject)+")")}if(x.author){N("/Author ("+oe(x.author)+")")}if(x.keywords){N("/Keywords ("+oe(x.key+
words)+")")}if(x.creator){N("/Creator ("+oe(x.creator)+")")}var e=new Date;N("/CreationDate (D:"+[e.getFullYear(),z(e.getMonth()+1),z(e.getDate()),z(e.getHours()),z(e.getMinutes()),z(e.getSeconds())].join("")+")")},fe=function(){N("/Type /Catalog");N("/P+
ages 1 0 R");N("/OpenAction [3 0 R /FitH null]");N("/PageLayout /OneColumn");D.publish("putCatalog")},se=function(){N("/Size "+(w+1));N("/Root "+w+" 0 R");N("/Info "+(w-1)+" 0 R")},ue=function(){b++;v=true;y[b]=[]},ce=function(){ue();N(U(P*R)+" w");N(g);+
if(B!==0){N(B.toString(10)+" J")}if(I!==0){N(I.toString(10)+" j")}D.publish("addPage",{pageNumber:b})},le=function(e,t){var n,i;if(e===i){e=m[F].fontName}if(t===i){t=m[F].fontStyle}try{n=C[e][t]}catch(e){n=i}if(!n){throw new Error("Unable to look up font+
 label for font '"+e+"', '"+t+"'. Refer to getFontList() for available fonts.")}return n},de=function(){v=false;u=[];j=[];N("%PDF-"+d);V();_();H();N("<<");ae();N(">>");N("endobj");H();N("<<");fe();N(">>");N("endobj");var e=c,t;N("xref");N("0 "+(w+1));N("+
0000000000 65535 f ");for(t=1;t<=w;t++){N(J(j[t])+" 00000 n ")}N("trailer");N("<<");se();N(">>");N("startxref");N(e);N("%%EOF");v=true;return u.join("\n")},pe=function(e){var t="S";if(e==="F"){t="f"}else if(e==="FD"||e==="DF"){t="B"}return t},he=function+
(e,t){var n,i,r,o,a,f;switch(e){case n:return de();case"save":if(navigator.getUserMedia){if(window.URL===undefined){return L.output("dataurlnewwindow")}else if(window.URL.createObjectURL===undefined){return L.output("dataurlnewwindow")}}i=de();r=i.length+
;o=new Uint8Array(new ArrayBuffer(r));for(a=0;a<r;a++){o[a]=i.charCodeAt(a)}f=new Blob([o],{type:"application/pdf"});saveAs(f,t);break;case"datauristring":case"dataurlstring":return"data:application/pdf;base64,"+btoa(de());case"datauri":case"dataurl":doc+
ument.location.href="data:application/pdf;base64,"+btoa(de());break;case"dataurlnewwindow":window.open("data:application/pdf;base64,"+btoa(de()));break;default:throw new Error('Output type "'+e+'" is not supported.')}};if(r==="pt"){R=1}else if(r==="mm"){+
R=72/25.4}else if(r==="cm"){R=72/2.54}else if(r==="in"){R=72}else{throw"Invalid unit: "+r}if(p.hasOwnProperty(f)){O=p[f][1]/R;T=p[f][0]/R}else{try{O=o[1];T=o[0]}catch(e){throw"Invalid format: "+o}}if(i==="p"||i==="portrait"){i="p";if(T>O){E=T;T=O;O=E}}el+
se if(i==="l"||i==="landscape"){i="l";if(O>T){E=T;T=O;O=E}}else{throw"Invalid orientation: "+i}L.internal={pdfEscape:oe,getStyle:pe,getFont:function(){return m[le.apply(L,arguments)]},getFontSize:function(){return S},getLineHeight:function(){return S*A},+
btoa:btoa,write:function(e,t,n,i){N(arguments.length===1?e:Array.prototype.join.call(arguments," "))},getCoordinateString:function(e){return U(e*R)},getVerticalCoordinateString:function(e){return U((O-e)*R)},collections:{},newObject:H,putStream:q,events:+
D,scaleFactor:R,pageSize:{width:T,height:O},output:function(e,t){return he(e,t)},getNumberOfPages:function(){return y.length-1},pages:y};L.addPage=function(){ce();return this};L.text=function(e,t,n,i){var r,o,a,f,s,u,c;if(typeof e==="number"){o=n;a=e;f=t+
;e=o;t=a;n=f}if(typeof e==="string"&&e.match(/[\n\r]/)){e=e.split(/\r\n|\r|\n/g)}if(typeof i==="undefined"){i={noBOM:true,autoencode:true}}else{if(i.noBOM===r){i.noBOM=true}if(i.autoencode===r){i.autoencode=true}}if(typeof e==="string"){u=oe(e,i)}else if+
(e instanceof Array){s=e.concat();for(c=s.length-1;c!==-1;c--){s[c]=oe(s[c],i)}u=s.join(") Tj\nT* (")}else{throw new Error('Type of text must be string or Array. "'+e+'" is not recognized.')}N("BT\n/"+F+" "+S+" Tf\n"+S*A+" TL\n"+h+"\n"+U(t*R)+" "+U((O-n)+
*R)+" Td\n("+u+") Tj\nET");return this};L.line=function(e,t,n,i){N(U(e*R)+" "+U((O-t)*R)+" m "+U(n*R)+" "+U((O-i)*R)+" l S");return this};L.lines=function(e,t,n,i,r,o){var a,f,s,u,c,l,d,p,h,g,b,y,w,v,j;if(typeof e==="number"){f=n;s=e;u=t;e=f;t=s;n=u}r=pe+
(r);i=i===a?[1,1]:i;N(M(t*R)+" "+M((O-n)*R)+" m ");c=i[0];l=i[1];p=e.length;v=t;j=n;for(d=0;d<p;d++){h=e[d];if(h.length===2){v=h[0]*c+v;j=h[1]*l+j;N(M(v*R)+" "+M((O-j)*R)+" l")}else{g=h[0]*c+v;b=h[1]*l+j;y=h[2]*c+v;w=h[3]*l+j;v=h[4]*c+v;j=h[5]*l+j;N(M(g*+
R)+" "+M((O-b)*R)+" "+M(y*R)+" "+M((O-w)*R)+" "+M(v*R)+" "+M((O-j)*R)+" c")}}if(o==true){N(" h")}N(r);return this};L.rect=function(e,t,n,i,r){var o=pe(r);N([U(e*R),U((O-t)*R),U(n*R),U(-i*R),"re",o].join(" "));return this};L.triangle=function(e,t,n,i,r,o,+
a){this.lines([[n-e,i-t],[r-n,o-i],[e-r,t-o]],e,t,[1,1],a,true);return this};L.roundedRect=function(e,t,n,i,r,o,a){var f=4/3*(Math.SQRT2-1);this.lines([[n-2*r,0],[r*f,0,r,o-o*f,r,o],[0,i-2*o],[0,o*f,-(r*f),o,-r,o],[-n+2*r,0],[-(r*f),0,-r,-(o*f),-r,-o],[0+
,-i+2*o],[0,-(o*f),r*f,-o,r,-o]],e+r,t,[1,1],a);return this};L.ellipse=function(e,t,n,i,r){var o=pe(r),a=4/3*(Math.SQRT2-1)*n,f=4/3*(Math.SQRT2-1)*i;N([U((e+n)*R),U((O-t)*R),"m",U((e+n)*R),U((O-(t-f))*R),U((e+a)*R),U((O-(t-i))*R),U(e*R),U((O-(t-i))*R),"c+
"].join(" "));N([U((e-a)*R),U((O-(t-i))*R),U((e-n)*R),U((O-(t-f))*R),U((e-n)*R),U((O-t)*R),"c"].join(" "));N([U((e-n)*R),U((O-(t+f))*R),U((e-a)*R),U((O-(t+i))*R),U(e*R),U((O-(t+i))*R),"c"].join(" "));N([U((e+a)*R),U((O-(t+i))*R),U((e+n)*R),U((O-(t+f))*R)+
,U((e+n)*R),U((O-t)*R),"c",o].join(" "));return this};L.circle=function(e,t,n,i){return this.ellipse(e,t,n,n,i)};L.setProperties=function(e){var t;for(t in x){if(x.hasOwnProperty(t)&&e[t]){x[t]=e[t]}}return this};L.setFontSize=function(e){S=e;return this+
};L.setFont=function(e,t){F=le(e,t);return this};L.setFontStyle=L.setFontType=function(e){var t;F=le(t,e);return this};L.getFontList=function(){var e={},t,n,i;for(t in C){if(C.hasOwnProperty(t)){e[t]=i=[];for(n in C[t]){if(C[t].hasOwnProperty(n)){i.push(+
n)}}}}return e};L.setLineWidth=function(e){N((e*R).toFixed(2)+" w");return this};L.setDrawColor=function(e,t,n,i){var r;if(t===undefined||i===undefined&&e===t===n){if(typeof e==="string"){r=e+" G"}else{r=U(e/255)+" G"}}else if(i===undefined){if(typeof e=+
=="string"){r=[e,t,n,"RG"].join(" ")}else{r=[U(e/255),U(t/255),U(n/255),"RG"].join(" ")}}else{if(typeof e==="string"){r=[e,t,n,i,"K"].join(" ")}else{r=[U(e),U(t),U(n),U(i),"K"].join(" ")}}N(r);return this};L.setFillColor=function(e,t,n,i){var r;if(t===un+
defined||i===undefined&&e===t===n){if(typeof e==="string"){r=e+" g"}else{r=U(e/255)+" g"}}else if(i===undefined){if(typeof e==="string"){r=[e,t,n,"rg"].join(" ")}else{r=[U(e/255),U(t/255),U(n/255),"rg"].join(" ")}}else{if(typeof e==="string"){r=[e,t,n,i,+
"k"].join(" ")}else{r=[U(e),U(t),U(n),U(i),"k"].join(" ")}}N(r);return this};L.setTextColor=function(e,t,n){var i=/#[0-9A-Fa-f]{6}/;if(typeof e=="string"&&i.test(e)){var r=e.replace("#","");var o=parseInt(r,16);e=o>>16&255;t=o>>8&255;n=o&255}if(e===0&&t=+
==0&&n===0||typeof t==="undefined"){h=M(e/255)+" g"}else{h=[M(e/255),M(t/255),M(n/255),"rg"].join(" ")}return this};L.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2};L.setLineCap=functio+
n(e){var t=this.CapJoinStyles[e];if(t===undefined){throw new Error("Line cap style of '"+e+"' is not recognized. See or extend .CapJoinStyles property for valid styles")}B=t;N(t.toString(10)+" J");return this};L.setLineJoin=function(e){var t=this.CapJoin+
Styles[e];if(t===undefined){throw new Error("Line join style of '"+e+"' is not recognized. See or extend .CapJoinStyles property for valid styles")}I=t;N(t.toString(10)+" j");return this};L.output=he;L.save=function(e){L.output("save",e)};for(k in n.API)+
{if(n.API.hasOwnProperty(k)){if(k==="events"&&n.API.events.length){(function(e,t){var n,i,r;for(r=t.length-1;r!==-1;r--){n=t[r][0];i=t[r][1];e.subscribe.apply(e,[n].concat(typeof i==="function"?[i]:i))}})(D,n.API.events)}else{L[k]=n.API[k]}}}ie();F="F1";+
ce();D.publish("initialized");return L}n.API={events:[]};return n}();                                                                                                                                                                                          