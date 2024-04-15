/* esm.sh - esbuild bundle(stream-buffers@3.0.2) denonext production */
import { Buffer as __Buffer$ } from "node:buffer";
import * as __0$ from "node:util";
import * as __1$ from "node:stream";
import * as __2$ from "node:stream";
import * as __3$ from "node:util";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"util":return e(__0$);case"stream":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var C=Object.create;var I=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var Z=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty;var _=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,a)=>(typeof require<"u"?require:r)[a]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var m=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),W=(e,r)=>{for(var a in r)I(e,a,{get:r[a],enumerable:!0})},d=(e,r,a,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of z(r))!O.call(e,t)&&t!==a&&I(e,t,{get:()=>r[t],enumerable:!(u=x(r,t))||u.enumerable});return e},E=(e,r,a)=>(d(e,r,"default"),a&&d(a,r,"default")),g=(e,r,a)=>(a=e!=null?C(Z(e)):{},d(r||!e||!e.__esModule?I(a,"default",{value:e,enumerable:!0}):a,e));var T=m((re,L)=>{"use strict";L.exports={DEFAULT_INITIAL_SIZE:8*1024,DEFAULT_INCREMENT_AMOUNT:8*1024,DEFAULT_FREQUENCY:1,DEFAULT_CHUNK_SIZE:1024}});var F=m((te,B)=>{"use strict";var y=_("stream"),p=T(),H=_("util"),K=B.exports=function(e){var r=this;e=e||{},y.Readable.call(this,e),this.stopped=!1;var a=e.hasOwnProperty("frequency")?e.frequency:p.DEFAULT_FREQUENCY,u=e.chunkSize||p.DEFAULT_CHUNK_SIZE,t=e.initialSize||p.DEFAULT_INITIAL_SIZE,v=e.incrementAmount||p.DEFAULT_INCREMENT_AMOUNT,i=0,n=new __Buffer$(t),s=!1,l=function(){var f=Math.min(u,i),c=!1;if(f>0){var o=null;o=new __Buffer$(f),n.copy(o,0,0,f),c=r.push(o)!==!1,s=c,n.copy(n,0,f,i),i-=f}i===0&&r.stopped&&r.push(null),c?l.timeout=setTimeout(l,a):l.timeout=null};this.stop=function(){if(this.stopped)throw new Error("stop() called on already stopped ReadableStreamBuffer");this.stopped=!0,i===0&&this.push(null)},this.size=function(){return i},this.maxSize=function(){return n.length};var S=function(f){if(n.length-i<f){var c=Math.ceil((f-(n.length-i))/v),o=new __Buffer$(n.length+v*c);n.copy(o,0,0,i),n=o}},U=function(){!l.timeout&&s&&(l.timeout=setTimeout(l,a))};this.put=function(f,c){if(r.stopped)throw new Error("Tried to write data to a stopped ReadableStreamBuffer");if(__Buffer$.isBuffer(f))S(f.length),f.copy(n,i,0),i+=f.length;else{f=f+"";var o=__Buffer$.byteLength(f);S(o),n.write(f,i,c||"utf8"),i+=o}U()},this._read=function(){s=!0,U()}};H.inherits(K,y.Readable)});var R=m((ie,M)=>{"use strict";var Q=_("util"),D=_("stream"),b=T(),Y=M.exports=function(e){e=e||{},e.decodeStrings=!0,D.Writable.call(this,e);var r=e.initialSize||b.DEFAULT_INITIAL_SIZE,a=e.incrementAmount||b.DEFAULT_INCREMENT_AMOUNT,u=new __Buffer$(r),t=0;this.size=function(){return t},this.maxSize=function(){return u.length},this.getContents=function(i){if(!t)return!1;var n=new __Buffer$(Math.min(i||t,t));return u.copy(n,0,0,n.length),n.length<t&&u.copy(u,0,n.length),t-=n.length,n},this.getContentsAsString=function(i,n){if(!t)return!1;var s=u.toString(i||"utf8",0,Math.min(n||t,t)),l=__Buffer$.byteLength(s);return l<t&&u.copy(u,0,l),t-=l,s};var v=function(i){if(u.length-t<i){var n=Math.ceil((i-(u.length-t))/a),s=new __Buffer$(u.length+a*n);u.copy(s,0,0,t),u=s}};this._write=function(i,n,s){v(i.length),i.copy(u,t,0),t+=i.length,s()}};Q.inherits(Y,D.Writable)});var N=m((ne,A)=>{"use strict";A.exports=T();A.exports.ReadableStreamBuffer=F();A.exports.WritableStreamBuffer=R()});var h={};W(h,{DEFAULT_CHUNK_SIZE:()=>V,DEFAULT_FREQUENCY:()=>J,DEFAULT_INCREMENT_AMOUNT:()=>G,DEFAULT_INITIAL_SIZE:()=>j,ReadableStreamBuffer:()=>P,WritableStreamBuffer:()=>k,default:()=>$});var q=g(N());E(h,g(N()));var{ReadableStreamBuffer:P,WritableStreamBuffer:k,DEFAULT_INITIAL_SIZE:j,DEFAULT_INCREMENT_AMOUNT:G,DEFAULT_FREQUENCY:J,DEFAULT_CHUNK_SIZE:V}=q,{default:w,...X}=q,$=w!==void 0?w:X;export{V as DEFAULT_CHUNK_SIZE,J as DEFAULT_FREQUENCY,G as DEFAULT_INCREMENT_AMOUNT,j as DEFAULT_INITIAL_SIZE,P as ReadableStreamBuffer,k as WritableStreamBuffer,$ as default};
//# sourceMappingURL=stream-buffers.mjs.map