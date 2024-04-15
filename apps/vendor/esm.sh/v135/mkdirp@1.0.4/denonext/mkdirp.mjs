/* esm.sh - esbuild bundle(mkdirp@1.0.4) denonext production */
import __Process$ from "node:process";
import * as __0$ from "node:fs";
import * as __1$ from "node:path";
import * as __2$ from "node:util";
import * as __3$ from "node:fs";
import * as __4$ from "node:path";
import * as __5$ from "node:path";
import * as __6$ from "node:path";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"fs":return e(__0$);case"path":return e(__1$);case"util":return e(__2$);default:throw new Error("module \""+n+"\" not found");}};
var Q=Object.create;var S=Object.defineProperty;var Y=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var u=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,i)=>(typeof require<"u"?require:e)[i]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),p=(r,e)=>{for(var i in e)S(r,i,{get:e[i],enumerable:!0})},l=(r,e,i,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Z(e))!h.call(r,n)&&n!==i&&S(r,n,{get:()=>e[n],enumerable:!(c=Y(e,n))||c.enumerable});return r},f=(r,e,i)=>(l(r,e,"default"),i&&l(i,e,"default")),w=(r,e,i)=>(i=r!=null?Q($(r)):{},l(e||!r||!r.__esModule?S(i,"default",{value:r,enumerable:!0}):i,r));var T=s((Tr,I)=>{var{promisify:A}=u("util"),t=u("fs"),rr=r=>{if(!r)r={mode:511,fs:t};else if(typeof r=="object")r={mode:511,fs:t,...r};else if(typeof r=="number")r={mode:r,fs:t};else if(typeof r=="string")r={mode:parseInt(r,8),fs:t};else throw new TypeError("invalid options argument");return r.mkdir=r.mkdir||r.fs.mkdir||t.mkdir,r.mkdirAsync=A(r.mkdir),r.stat=r.stat||r.fs.stat||t.stat,r.statAsync=A(r.stat),r.statSync=r.statSync||r.fs.statSync||t.statSync,r.mkdirSync=r.mkdirSync||r.fs.mkdirSync||t.mkdirSync,r};I.exports=rr});var M=s((qr,q)=>{var er=__Process$.env.__TESTING_MKDIRP_PLATFORM__||__Process$.platform,{resolve:nr,parse:ir}=u("path"),cr=r=>{if(/\0/.test(r))throw Object.assign(new TypeError("path must be a string without null bytes"),{path:r,code:"ERR_INVALID_ARG_VALUE"});if(r=nr(r),er==="win32"){let e=/[*|"<>?:]/,{root:i}=ir(r);if(e.test(r.substr(i.length)))throw Object.assign(new Error("Illegal characters in path."),{path:r,code:"EINVAL"})}return r};q.exports=cr});var D=s((Mr,x)=>{var{dirname:O}=u("path"),g=(r,e,i=void 0)=>i===e?Promise.resolve():r.statAsync(e).then(c=>c.isDirectory()?i:void 0,c=>c.code==="ENOENT"?g(r,O(e),e):void 0),R=(r,e,i=void 0)=>{if(i!==e)try{return r.statSync(e).isDirectory()?i:void 0}catch(c){return c.code==="ENOENT"?R(r,O(e),e):void 0}};x.exports={findMade:g,findMadeSync:R}});var N=s((Or,L)=>{var{dirname:b}=u("path"),k=(r,e,i)=>{e.recursive=!1;let c=b(r);return c===r?e.mkdirAsync(r,e).catch(n=>{if(n.code!=="EISDIR")throw n}):e.mkdirAsync(r,e).then(()=>i||r,n=>{if(n.code==="ENOENT")return k(c,e).then(a=>k(r,e,a));if(n.code!=="EEXIST"&&n.code!=="EROFS")throw n;return e.statAsync(r).then(a=>{if(a.isDirectory())return i;throw n},()=>{throw n})})},E=(r,e,i)=>{let c=b(r);if(e.recursive=!1,c===r)try{return e.mkdirSync(r,e)}catch(n){if(n.code!=="EISDIR")throw n;return}try{return e.mkdirSync(r,e),i||r}catch(n){if(n.code==="ENOENT")return E(r,e,E(c,e,i));if(n.code!=="EEXIST"&&n.code!=="EROFS")throw n;try{if(!e.statSync(r).isDirectory())throw n}catch{throw n}}};L.exports={mkdirpManual:k,mkdirpManualSync:E}});var j=s((gr,V)=>{var{dirname:P}=u("path"),{findMade:tr,findMadeSync:dr}=D(),{mkdirpManual:ur,mkdirpManualSync:sr}=N(),fr=(r,e)=>(e.recursive=!0,P(r)===r?e.mkdirAsync(r,e):tr(e,r).then(c=>e.mkdirAsync(r,e).then(()=>c).catch(n=>{if(n.code==="ENOENT")return ur(r,e);throw n}))),yr=(r,e)=>{if(e.recursive=!0,P(r)===r)return e.mkdirSync(r,e);let c=dr(e,r);try{return e.mkdirSync(r,e),c}catch(n){if(n.code==="ENOENT")return sr(r,e);throw n}};V.exports={mkdirpNative:fr,mkdirpNativeSync:yr}});var X=s((Rr,K)=>{var F=u("fs"),mr=__Process$.env.__TESTING_MKDIRP_NODE_VERSION__||__Process$.version,v=mr.replace(/^v/,"").split("."),G=+v[0]>10||+v[0]==10&&+v[1]>=12,or=G?r=>r.mkdir===F.mkdir:()=>!1,ar=G?r=>r.mkdirSync===F.mkdirSync:()=>!1;K.exports={useNative:or,useNativeSync:ar}});var _=s((xr,B)=>{var y=T(),m=M(),{mkdirpNative:C,mkdirpNativeSync:U}=j(),{mkdirpManual:W,mkdirpManualSync:z}=N(),{useNative:lr,useNativeSync:Sr}=X(),o=(r,e)=>(r=m(r),e=y(e),lr(e)?C(r,e):W(r,e)),kr=(r,e)=>(r=m(r),e=y(e),Sr(e)?U(r,e):z(r,e));o.sync=kr;o.native=(r,e)=>C(m(r),y(e));o.manual=(r,e)=>W(m(r),y(e));o.nativeSync=(r,e)=>U(m(r),y(e));o.manualSync=(r,e)=>z(m(r),y(e));B.exports=o});var d={};p(d,{default:()=>Ar,manual:()=>Nr,manualSync:()=>_r,nativeSync:()=>vr,sync:()=>Er});var J=w(_());f(d,w(_()));var{sync:Er,manual:Nr,nativeSync:vr,manualSync:_r}=J,{default:H,...wr}=J,Ar=H!==void 0?H:wr;export{Ar as default,Nr as manual,_r as manualSync,vr as nativeSync,Er as sync};
//# sourceMappingURL=mkdirp.mjs.map