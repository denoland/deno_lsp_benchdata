/* esm.sh - esbuild bundle(safe-buffer@5.2.1) denonext production */
import * as __0$ from "node:buffer";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"buffer":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var S=Object.create;var s=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var A=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,t)=>(typeof require<"u"?require:r)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var E=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),T=(e,r)=>{for(var t in r)s(e,t,{get:r[t],enumerable:!0})},m=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of g(r))!x.call(e,l)&&l!==t&&s(e,l,{get:()=>r[l],enumerable:!(n=_(r,l))||n.enumerable});return e},u=(e,r,t)=>(m(e,r,"default"),t&&m(t,r,"default")),c=(e,r,t)=>(t=e!=null?S(h(e)):{},m(r||!e||!e.__esModule?s(t,"default",{value:e,enumerable:!0}):t,e));var b=E((p,y)=>{var i=A("buffer"),o=i.Buffer;function w(e,r){for(var t in e)r[t]=e[t]}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?y.exports=i:(w(i,p),p.Buffer=a);function a(e,r,t){return o(e,r,t)}a.prototype=Object.create(o.prototype);w(o,a);a.from=function(e,r,t){if(typeof e=="number")throw new TypeError("Argument must not be a number");return o(e,r,t)};a.alloc=function(e,r,t){if(typeof e!="number")throw new TypeError("Argument must be a number");var n=o(e);return r!==void 0?typeof t=="string"?n.fill(r,t):n.fill(r):n.fill(0),n};a.allocUnsafe=function(e){if(typeof e!="number")throw new TypeError("Argument must be a number");return o(e)};a.allocUnsafeSlow=function(e){if(typeof e!="number")throw new TypeError("Argument must be a number");return i.SlowBuffer(e)}});var f={};T(f,{Blob:()=>U,Buffer:()=>M,File:()=>v,INSPECT_MAX_BYTES:()=>R,SlowBuffer:()=>j,atob:()=>I,btoa:()=>F,constants:()=>N,default:()=>Y,isAscii:()=>k,isUtf8:()=>P,kMaxLength:()=>q,kStringMaxLength:()=>C,resolveObjectURL:()=>L,transcode:()=>O});var d=c(b());u(f,c(b()));var{Blob:U,File:v,resolveObjectURL:L,Buffer:M,SlowBuffer:j,transcode:O,isUtf8:P,isAscii:k,kMaxLength:q,kStringMaxLength:C,btoa:F,atob:I,constants:N,INSPECT_MAX_BYTES:R}=d,{default:B,...X}=d,Y=B!==void 0?B:X;export{U as Blob,M as Buffer,v as File,R as INSPECT_MAX_BYTES,j as SlowBuffer,I as atob,F as btoa,N as constants,Y as default,k as isAscii,P as isUtf8,q as kMaxLength,C as kStringMaxLength,L as resolveObjectURL,O as transcode};
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=safe-buffer.mjs.map