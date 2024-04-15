/* esm.sh - esbuild bundle(utility-types@3.10.0) denonext production */
var b=Object.create;var f=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty;var l=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),F=(e,r)=>{for(var t in r)f(e,t,{get:r[t],enumerable:!0})},a=(e,r,t,c)=>{if(r&&typeof r=="object"||typeof r=="function")for(let u of P(r))!R.call(e,u)&&u!==t&&f(e,u,{get:()=>r[u],enumerable:!(c=v(r,u))||c.enumerable});return e},i=(e,r,t)=>(a(e,r,"default"),t&&a(t,r,"default")),p=(e,r,t)=>(t=e!=null?b(E(e)):{},a(r||!e||!e.__esModule?f(t,"default",{value:e,enumerable:!0}):t,e));var m=l(o=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.isPrimitive=function(e){if(e==null)return!0;switch(typeof e){case"string":case"number":case"bigint":case"boolean":case"symbol":return!0;default:return!1}};o.isFalsy=function(e){return!e}});var x=l(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});function M(e){}d.getReturnOfExpression=M});var _=l(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var y=m();n.isFalsy=y.isFalsy;n.isPrimitive=y.isPrimitive;var j=x();n.getReturnOfExpression=j.getReturnOfExpression});var s={};F(s,{__esModule:()=>h,default:()=>A,getReturnOfExpression:()=>k,isFalsy:()=>q,isPrimitive:()=>w});var O=p(_());i(s,p(_()));var{__esModule:h,isFalsy:q,isPrimitive:w,getReturnOfExpression:k}=O,{default:g,...z}=O,A=g!==void 0?g:z;export{h as __esModule,A as default,k as getReturnOfExpression,q as isFalsy,w as isPrimitive};
/*! Bundled license information:

utility-types/dist/index.js:
  (**
   * @author Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io)
   * @copyright Copyright (c) 2016 Piotr Witek
   * @license MIT
   *)
*/
//# sourceMappingURL=utility-types.mjs.map