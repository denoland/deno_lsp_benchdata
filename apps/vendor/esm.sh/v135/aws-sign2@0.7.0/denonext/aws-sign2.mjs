/* esm.sh - esbuild bundle(aws-sign2@0.7.0) denonext production */
import * as __0$ from "node:crypto";
import * as __1$ from "node:url";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"crypto":return e(__0$);case"url":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var q=Object.create;var f=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var m=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,n)=>(typeof require<"u"?require:r)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var H=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),O=(e,r)=>{for(var n in r)f(e,n,{get:r[n],enumerable:!0})},g=(e,r,n,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of b(r))!j.call(e,a)&&a!==n&&f(e,a,{get:()=>r[a],enumerable:!(t=T(r,a))||t.enumerable});return e},o=(e,r,n)=>(g(e,r,"default"),n&&g(n,r,"default")),h=(e,r,n)=>(n=e!=null?q(_(e)):{},g(r||!e||!e.__esModule?f(n,"default",{value:e,enumerable:!0}):n,e));var l=H((J,i)=>{var R=m("crypto"),C=m("url").parse,I=["acl","location","logging","notification","partNumber","policy","requestPayment","torrent","uploadId","uploads","versionId","versioning","versions","website"];function x(e){return"AWS "+e.key+":"+p(e)}i.exports=x;i.exports.authorization=x;function d(e){return R.createHmac("sha1",e.secret).update(e.message).digest("base64")}i.exports.hmacSha1=d;function p(e){return e.message=v(e),d(e)}i.exports.sign=p;function Q(e){return e.message=y(e),d(e)}i.exports.signQuery=Q;function v(e){var r=e.amazonHeaders||"";r&&(r+=`
`);var n=[e.verb,e.md5,e.contentType,e.date?e.date.toUTCString():"",r+e.resource];return n.join(`
`)}i.exports.stringToSign=v;function y(e){return`GET


`+e.date+`
`+e.resource}i.exports.queryStringToSign=y;function w(e){for(var r=[],n=Object.keys(e),t=0,a=n.length;t<a;++t){var s=n[t],c=e[s],s=s.toLowerCase();s.indexOf("x-amz")===0&&r.push(s+":"+c)}return r.sort().join(`
`)}i.exports.canonicalizeHeaders=w;function E(e){var r=C(e,!0),n=r.pathname,t=[];return Object.keys(r.query).forEach(function(a){if(~I.indexOf(a)){var c=r.query[a]==""?"":"="+encodeURIComponent(r.query[a]);t.push(a+c)}}),n+(t.length?"?"+t.sort().join("&"):"")}i.exports.canonicalizeResource=E});var u={};O(u,{authorization:()=>U,canonicalizeHeaders:()=>P,canonicalizeResource:()=>W,default:()=>D,hmacSha1:()=>k,queryStringToSign:()=>N,sign:()=>A,signQuery:()=>G,stringToSign:()=>L});var z=h(l());o(u,h(l()));var{authorization:U,hmacSha1:k,sign:A,signQuery:G,stringToSign:L,queryStringToSign:N,canonicalizeHeaders:P,canonicalizeResource:W}=z,{default:S,...B}=z,D=S!==void 0?S:B;export{U as authorization,P as canonicalizeHeaders,W as canonicalizeResource,D as default,k as hmacSha1,N as queryStringToSign,A as sign,G as signQuery,L as stringToSign};
/*! Bundled license information:

aws-sign2/index.js:
  (*!
   *  Copyright 2010 LearnBoost <dev@learnboost.com>
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=aws-sign2.mjs.map