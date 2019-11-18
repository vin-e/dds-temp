var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,s){function i(e){try{o(n.next(e))}catch(r){s(r)}}function l(e){try{o(n["throw"](e))}catch(r){s(r)}}function o(e){e.done?t(e.value):a(e.value).then(i,l)}o((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,a,s,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(e){return function(r){return o([e,r])}}function o(i){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(s=i[0]&2?a["return"]:i[0]?a["throw"]||((s=a["return"])&&s.call(a),0):a.next)&&!(s=s.call(a,i[1])).done)return s;if(a=0,s)i=[i[0]&2,s.value];switch(i[0]){case 0:case 1:s=i;break;case 4:t.label++;return{value:i[1],done:false};case 5:t.label++;a=i[1];i=[0];continue;case 7:i=t.ops.pop();t.trys.pop();continue;default:if(!(s=t.trys,s=s.length>0&&s[s.length-1])&&(i[0]===6||i[0]===2)){t=0;continue}if(i[0]===3&&(!s||i[1]>s[0]&&i[1]<s[3])){t.label=i[1];break}if(i[0]===6&&t.label<s[1]){t.label=s[1];s=i;break}if(s&&t.label<s[2]){t.label=s[2];t.ops.push(i);break}if(s[2])t.ops.pop();t.trys.pop();continue}i=r.call(e,t)}catch(l){i=[6,l];a=0}finally{n=s=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var s=arguments[r],i=0,l=s.length;i<l;i++,a++)n[a]=s[i];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n={allRenderFn:true,cmpDidLoad:true,cmpShouldUpdate:false,cmpDidUnload:false,cmpDidUpdate:false,cmpDidRender:false,cmpWillLoad:true,cmpWillUpdate:true,cmpWillRender:false,connectedCallback:true,disconnectedCallback:true,element:false,event:true,hasRenderFn:true,lifecycle:true,asyncLoading:true,hostListener:true,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:false,member:true,method:true,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:true,propNumber:false,propString:true,propMutable:true,reflect:true,scoped:false,shadowDom:false,slot:true,slotRelocation:true,state:true,style:true,svg:false,updatable:true,vdomAttribute:true,vdomXlink:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:true,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,initializeNextTick:true,hydrateClientSide:false,isDebug:false,isDev:false,devTools:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,cssAnnotations:true};var a="dds-design-system";var s=0;var i=false;var l;var o;var f;var u=false;var $=false;var c=false;var v=false;var d=window;var h=document;var m={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var p=false;var g=function(){var e=false;try{h.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(r){}return e}();var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var b=new WeakMap;var w=function(e){return b.get(e)};var S=e("r",(function(e,r){return b.set(r.$lazyInstance$=e,r)}));var R=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return b.set(e,r)};var _=function(e,r){return r in e};var N=function(e){return console.error(e)};var k=new Map;var L=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var s=e.$lazyBundleIds$;var i=k.get(s);if(i){return i[a]}return r.import("./"+s+".entry.js"+"").then((function(e){{k.set(s,e)}return e[a]}),N)};var x=new Map;var T=[];var C=[];var E=[];var j=function(e,r){return function(t){e.push(t);if(!i){i=true;if(r&&m.$flags$&4){O(U)}else{m.raf(U)}}}};var A=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){N(t)}}e.length=0};var P=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){N(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var U=function(){s++;A(T);var e=(m.$flags$&6)===2?performance.now()+10*Math.ceil(s*(1/22)):Infinity;P(C,e);P(E,e);if(C.length>0){E.push.apply(E,C);C.length=0}if(i=T.length+C.length+E.length>0){m.raf(U)}else{s=0}};var O=function(e){return Promise.resolve().then(e)};var I=j(C,true);var B={};var M=function(e){e=typeof e;return e==="object"||e==="function"};var z=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var D=function(e,r){if(r===void 0){r=""}{return function(){return}}};var q=function(e,r){{return function(){return}}};var W=e("a",(function(){if(!(d.CSS&&d.CSS.supports&&d.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){m.$cssShim$=d.__stencil_cssshim;if(m.$cssShim$){return m.$cssShim$.initShim()}}))}return Promise.resolve()}));var H=e("p",(function(){return __awaiter(t,void 0,void 0,(function(){var e,t,n,s,i;return __generator(this,(function(l){switch(l.label){case 0:{m.$cssShim$=d.__stencil_cssshim}e=r.meta.url;t=new RegExp("/"+a+"(\\.esm)?\\.js($|\\?|#)");n=Array.from(h.querySelectorAll("script")).find((function(e){return t.test(e.src)||e.getAttribute("data-stencil-namespace")===a}));s=n["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},s),{resourcesUrl:new URL(".",e).href})];case 1:i=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,d.location.href));V(i.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:l.sent();l.label=3;case 3:return[2,Object.assign(Object.assign({},s),{resourcesUrl:i.href})]}}))}))}));var V=function(e){var r=z(a);try{d[r]=new Function("w","return import(w);//"+Math.random())}catch(n){var t=new Map;d[r]=function(n){var a=new URL(n,e).href;var s=t.get(a);if(!s){var i=h.createElement("script");i.type="module";i.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){i.onload=function(){e(d[r].m);i.remove()}}));t.set(a,s);h.head.appendChild(i)}return s}}};var F=function(e,r){if(e!=null&&!M(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var Q="hydrated";var G="http://www.w3.org/1999/xlink";var K=new WeakMap;var X=function(e,r,t){var n=x.get(e);if(y&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}x.set(e,n)};var J=function(e,r,t,n){var a=Z(r.$tagName$);var s=x.get(a);e=e.nodeType===11?e:h;if(s){if(typeof s==="string"){e=e.head||e;var i=K.get(e);var l=void 0;if(!i){K.set(e,i=new Set)}if(!i.has(a)){{if(m.$cssShim$){l=m.$cssShim$.createHostStyle(n,a,s,!!(r.$flags$&10));var o=l["s-sc"];if(o){a=o;i=null}}else{l=h.createElement("style");l.innerHTML=s}e.insertBefore(l,e.querySelector("link"))}if(i){i.add(a)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[s])}}return a};var Y=function(e,r,t){var n=D("attachStyles",r.$tagName$);var a=J(e.getRootNode(),r,t,e);n()};var Z=function(e,r){return"sc-"+e};var ee=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var s=null;var i=null;var l=false;var o=false;var f=[];var u=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!M(a)){a=String(a)}if(l&&o){f[f.length-1].$text$+=a}else{f.push(l?re(null,a):a)}o=l}}};u(t);if(r){if(r.key){s=r.key}if(r.name){i=r.name}{var $=r.className||r.class;if($){r.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}if(typeof e==="function"){return e(r,f,ae)}var c=re(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=s}{c.$name$=i}return c}));var re=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var te=e("H",{});var ne=function(e){return e&&e.$tag$===te};var ae={forEach:function(e,r){return e.map(se).forEach(r)},map:function(e,r){return e.map(se).map(r).map(ie)}};var se=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var ie=function(e){var r=re(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var le=function(e,r,t,n,a,s){if(t===n){return}var i=_(e,r);var l=r.toLowerCase();if(r==="class"){var o=e.classList;var f=fe(t);var u=fe(n);o.remove.apply(o,f.filter((function(e){return e&&!u.includes(e)})));o.add.apply(o,u.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var $ in t){if(!n||n[$]==null){if($.includes("-")){e.style.removeProperty($)}else{e.style[$]=""}}}}for(var $ in n){if(!t||n[$]!==t[$]){if($.includes("-")){e.style.setProperty($,n[$])}else{e.style[$]=n[$]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!i&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(_(d,l)){r=l.slice(2)}else{r=l[2]+r.slice(3)}if(t){m.rel(e,r,t,false)}if(n){m.ael(e,r,n,false)}}else{var c=M(n);if((i||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var v=n==null?"":n;if(r==="list"){i=false}else if(t==null||e[r]!=v){e[r]=v}}else{e[r]=n}}catch(p){}}var h=false;{if(l!==(l=l.replace(/^xlink\:?/,""))){r=l;h=true}}if(n==null||n===false){if(h){e.removeAttributeNS(G,r)}else{e.removeAttribute(r)}}else if((!i||s&4||a)&&!c){n=n===true?"":n;if(h){e.setAttributeNS(G,r,n)}else{e.setAttribute(r,n)}}}};var oe=/\s/;var fe=function(e){return!e?[]:e.split(oe)};var ue=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var s=e&&e.$attrs$||B;var i=r.$attrs$||B;{for(n in s){if(!(n in i)){le(a,n,s[n],undefined,t,r.$flags$)}}}for(n in i){le(a,n,s[n],i[n],t,r.$flags$)}};var $e=function(e,r,t,n){var a=r.$children$[t];var s=0;var i;var $;var d;if(!u){c=true;if(a.$tag$==="slot"){if(l){n.classList.add(l+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){i=a.$elm$=h.createTextNode(a.$text$)}else if(a.$flags$&1){i=a.$elm$=h.createTextNode("")}else{i=a.$elm$=h.createElement(a.$flags$&2?"slot-fb":a.$tag$);{ue(null,a,v)}if(a.$children$){for(s=0;s<a.$children$.length;++s){$=$e(e,a,s,i);if($){i.appendChild($)}}}}{i["s-hn"]=f;if(a.$flags$&(2|1)){i["s-sr"]=true;i["s-cr"]=o;i["s-sn"]=a.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===a.$tag$&&e.$elm$){ce(e.$elm$,false)}}}return i};var ce=function(e,r){m.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==f&&a["s-ol"]){ge(a).insertBefore(a,pe(a));a["s-ol"].remove();a["s-ol"]=undefined;c=true}if(r){ce(a,r)}}m.$flags$&=~1};var ve=function(e,r,t,n,a,s){var i=e["s-cr"]&&e["s-cr"].parentNode||e;var l;for(;a<=s;++a){if(n[a]){l=$e(null,t,a,e);if(l){n[a].$elm$=l;i.insertBefore(l,pe(r))}}}};var de=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;Re(n);{$=true;if(a["s-ol"]){a["s-ol"].remove()}else{ce(a,true)}}a.remove()}}};var he=function(e,r,t,n){var a=0;var s=0;var i=0;var l=0;var o=r.length-1;var f=r[0];var u=r[o];var $=n.length-1;var c=n[0];var v=n[$];var d;var h;while(a<=o&&s<=$){if(f==null){f=r[++a]}else if(u==null){u=r[--o]}else if(c==null){c=n[++s]}else if(v==null){v=n[--$]}else if(me(f,c)){ye(f,c);f=r[++a];c=n[++s]}else if(me(u,v)){ye(u,v);u=r[--o];v=n[--$]}else if(me(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){ce(f.$elm$.parentNode,false)}ye(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=r[++a];v=n[--$]}else if(me(u,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){ce(u.$elm$.parentNode,false)}ye(u,c);e.insertBefore(u.$elm$,f.$elm$);u=r[--o];c=n[++s]}else{i=-1;{for(l=a;l<=o;++l){if(r[l]&&r[l].$key$!==null&&r[l].$key$===c.$key$){i=l;break}}}if(i>=0){h=r[i];if(h.$tag$!==c.$tag$){d=$e(r&&r[s],t,i,e)}else{ye(h,c);r[i]=undefined;d=h.$elm$}c=n[++s]}else{d=$e(r&&r[s],t,s,e);c=n[++s]}if(d){{ge(f.$elm$).insertBefore(d,pe(f.$elm$))}}}}if(a>o){ve(e,n[$+1]==null?null:n[$+1].$elm$,t,n,s,$)}else if(s>$){de(r,a,o)}};var me=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var pe=function(e){return e&&e["s-ol"]||e};var ge=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ye=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var s;if(r.$text$===null){{if(r.$tag$==="slot");else{ue(e,r,v)}}if(n!==null&&a!==null){he(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}ve(t,null,r,a,0,a.length-1)}else if(n!==null){de(n,0,n.length-1)}}else if(s=t["s-cr"]){s.parentNode.textContent=r.$text$}else if(e.$text$!==r.$text$){t.data=r.$text$}};var be=function(e){var r=e.childNodes;var t;var n;var a;var s;var i;var l;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){i=t["s-sn"];t.hidden=false;for(s=0;s<a;s++){if(r[s]["s-hn"]!==t["s-hn"]){l=r[s].nodeType;if(i!==""){if(l===1&&i===r[s].getAttribute("slot")){t.hidden=true;break}}else{if(l===1||l===3&&r[s].textContent.trim()!==""){t.hidden=true;break}}}}}be(t)}}};var we=[];var Se=function(e){var r=e.childNodes;var t=r.length;var n=0;var a=0;var s=0;var i;var l;var o;var f;for(t=r.length;n<t;n++){i=r[n];if(i["s-sr"]&&(l=i["s-cr"])){o=l.parentNode.childNodes;f=i["s-sn"];for(a=o.length-1;a>=0;a--){l=o[a];if(!l["s-cn"]&&!l["s-nr"]&&l["s-hn"]!==i["s-hn"]){s=l.nodeType;if((s===3||s===8)&&f===""||s===1&&l.getAttribute("slot")===null&&f===""||s===1&&l.getAttribute("slot")===f){if(!we.some((function(e){return e.$nodeToRelocate$===l}))){$=true;l["s-sn"]=f;we.push({$slotRefNode$:i,$nodeToRelocate$:l})}}}}}if(i.nodeType===1){Se(i)}}};var Re=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.forEach(Re)}};var _e=function(e,r,t,n){f=e.tagName;var a=r.$vnode$||re(null,null);var s=ne(n)?n:ee(null,null,n);if(t.$attrsToReflect$){s.$attrs$=s.$attrs$||{};t.$attrsToReflect$.forEach((function(r){var t=r[0],n=r[1];return s.$attrs$[n]=e[t]}))}s.$tag$=null;s.$flags$|=4;r.$vnode$=s;s.$elm$=a.$elm$=e;{o=e["s-cr"];u=p;c=$=false}ye(a,s);{if(c){Se(s.$elm$);for(var i=0;i<we.length;i++){var l=we[i];if(!l.$nodeToRelocate$["s-ol"]){var v=h.createTextNode("");v["s-nr"]=l.$nodeToRelocate$;l.$nodeToRelocate$.parentNode.insertBefore(l.$nodeToRelocate$["s-ol"]=v,l.$nodeToRelocate$)}}m.$flags$|=1;for(var i=0;i<we.length;i++){var l=we[i];var d=l.$slotRefNode$.parentNode;var g=l.$slotRefNode$.nextSibling;var v=l.$nodeToRelocate$["s-ol"];while(v=v.previousSibling){var y=v["s-nr"];if(y&&y["s-sn"]===l.$nodeToRelocate$["s-sn"]&&d===y.parentNode){y=y.nextSibling;if(!y||!y["s-nr"]){g=y;break}}}if(!g&&d!==l.$nodeToRelocate$.parentNode||l.$nodeToRelocate$.nextSibling!==g){if(l.$nodeToRelocate$!==g){d.insertBefore(l.$nodeToRelocate$,g)}}}m.$flags$&=~1}if($){be(s.$elm$)}we.length=0}};var Ne=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ke=function(e,r,t,n){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=D("scheduleUpdate",t.$tagName$);var s=r.$ancestorComponent$;var i=r.$lazyInstance$;var l=function(){return Le(e,r,t,i,n)};Ne(r,s);var o;if(n){{r.$flags$|=256;if(r.$queuedListeners$){r.$queuedListeners$.forEach((function(e){var r=e[0],t=e[1];return Ee(i,r,t)}));r.$queuedListeners$=null}}{o=Ee(i,"componentWillLoad")}}else{{o=Ee(i,"componentWillUpdate")}}a();return je(o,(function(){return I(l)}))};var Le=function(e,r,t,n,a){var s=D("update",t.$tagName$);var i=e["s-rc"];if(a){Y(e,t,r.$modeName$)}var l=D("render",t.$tagName$);{{try{_e(e,r,t,n.render())}catch(u){N(u)}}}if(m.$cssShim$){m.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(i){i.forEach((function(e){return e()}));e["s-rc"]=undefined}l();s();{var o=e["s-p"];var f=function(){return xe(e,r,t)};if(o.length===0){f()}else{Promise.all(o).then(f);r.$flags$|=4;o.length=0}}};var xe=function(e,r,t){var n=D("postUpdate",t.$tagName$);var a=r.$lazyInstance$;var s=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(Q)}{Ee(a,"componentDidLoad")}n();{r.$onReadyResolve$(e);if(!s){Ce()}}}else{n()}{r.$onInstanceResolve$(e)}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){O((function(){return ke(e,r,t,false)}))}r.$flags$&=~(4|512)}};var Te=function(e,r){{var t=w(e);if((t.$flags$&(2|16))===2){ke(e,t,r,false)}}};var Ce=function(e){{h.documentElement.classList.add(Q)}{m.$flags$|=2}};var Ee=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){N(n)}}return undefined};var je=function(e,r){return e&&e.then?e.then(r):r()};var Ae=function(e,r){return w(e).$instanceValues$.get(r)};var Pe=function(e,r,t,n){var a=w(e);var s=a.$hostElement$;var i=a.$instanceValues$.get(r);var l=a.$flags$;var o=a.$lazyInstance$;t=F(t,n.$members$[r][0]);if(t!==i&&(!(l&8)||i===undefined)){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&l&128){var f=n.$watchers$[r];if(f){f.forEach((function(e){try{o[e](t,i,r)}catch(n){N(n)}}))}}if((l&(2|16))===2){ke(s,a,n,false)}}}};var Ue=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],s=e[1][0];if(s&31||t&2&&s&32){Object.defineProperty(a,n,{get:function(){return Ae(this,n)},set:function(e){Pe(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&s&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=w(this);return t.$onInstancePromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var s=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;m.jmp((function(){var r=s.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;s.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var Oe=function(e,r,t){r.$queuedListeners$=r.$queuedListeners$||[];var n=t.map((function(t){var n=t[0],a=t[1],s=t[2];var i=e;var l=Ie(r,s);var o=Be(n);m.ael(i,a,l,o);return function(){return m.rel(i,a,l,o)}}));return function(){return n.forEach((function(e){return e()}))}};var Ie=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{e.$queuedListeners$.push([r,t])}}}};var Be=function(e){return g?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var Me=function(e,r,n,a,s){return __awaiter(t,void 0,void 0,(function(){var t,a,i,l,o,f,u;return __generator(this,(function($){switch($.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;s=L(n);if(!s.then)return[3,2];t=q();return[4,s];case 1:s=$.sent();t();$.label=2;case 2:if(!s.isProxied){{n.$watchers$=s.watchers}Ue(s,n,2);s.isProxied=true}a=D("createInstance",n.$tagName$);{r.$flags$|=8}try{new s(r)}catch(c){N(c)}{r.$flags$&=~8}{r.$flags$|=128}a();ze(r.$lazyInstance$);i=Z(n.$tagName$);if(!x.has(i)&&s.style){l=D("registerStyles",n.$tagName$);o=s.style;X(i,o,!!(n.$flags$&1));l()}$.label=3;case 3:f=r.$ancestorComponent$;u=function(){return ke(e,r,n,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var ze=function(e){{Ee(e,"connectedCallback")}};var De=function(e,r){if((m.$flags$&1)===0){var t=D("connectedCallback",r.$tagName$);var a=w(e);if(r.$listeners$){a.$rmListeners$=Oe(e,a,r.$listeners$)}if(!(a.$flags$&1)){a.$flags$|=1;var s=void 0;if(!s){if(r.$flags$&4||n.shadowDom){qe(e)}}{var i=e;while(i=i.parentNode||i.host){if(i["s-p"]){Ne(a,a.$ancestorComponent$=i);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{O((function(){return Me(e,a,r)}))}}ze(a.$lazyInstance$);t()}};var qe=function(e){var r="";var t=e["s-cr"]=h.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var We=function(e){if((m.$flags$&1)===0){var r=w(e);var t=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(m.$cssShim$){m.$cssShim$.removeHost(e)}{Ee(t,"disconnectedCallback")}}};var He=e("b",(function(e,r){if(r===void 0){r={}}var t=D();var n=[];var a=r.exclude||[];var s=h.head;var i=d.customElements;var l=s.querySelector("meta[charset]");var o=h.createElement("style");var f=[];var u;var $=true;Object.assign(m,r);m.$resourcesUrl$=new URL(r.resourcesUrl||"./",h.baseURI).href;if(r.syncQueue){m.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}var s=t.$tagName$;var l=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;R(r);return t}r.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if($){f.push(this)}else{m.jmp((function(){return De(e,t)}))}};r.prototype.disconnectedCallback=function(){var e=this;m.jmp((function(){return We(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){Te(this,t)};r.prototype.componentOnReady=function(){return w(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,Ue(l,t,1))}}))}));o.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";o.setAttribute("data-styles","");s.insertBefore(o,l?l.nextSibling:s.firstChild);$=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{m.jmp((function(){return u=setTimeout(Ce,30,"timeout")}))}t()}));var Ve=e("d",(function(e,r,t){var n=Qe(e);return{emit:function(e){return n.dispatchEvent(new CustomEvent(r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e}))}}}));var Fe=e("g",(function(e){var r=new URL(e,m.$resourcesUrl$);return r.origin!==d.location.origin?r.href:r.pathname}));var Qe=e("c",(function(e){return w(e).$hostElement$}))}}}));