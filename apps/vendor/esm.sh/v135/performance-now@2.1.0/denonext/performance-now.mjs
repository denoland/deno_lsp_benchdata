/* esm.sh - esbuild bundle(performance-now@2.1.0) denonext production */
import __Process$ from "node:process";
var T=Object.create;var m=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var g=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),v=(n,e)=>{for(var o in e)m(n,o,{get:e[o],enumerable:!0})},a=(n,e,o,f)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of h(e))!D.call(n,r)&&r!==o&&m(n,r,{get:()=>e[r],enumerable:!(f=_(e,r))||f.enumerable});return n},i=(n,e,o)=>(a(n,e,"default"),o&&a(o,e,"default")),d=(n,e,o)=>(o=n!=null?T(x(n)):{},a(e||!n||!n.__esModule?m(o,"default",{value:n,enumerable:!0}):o,n));var p=g((l,u)=>{(function(){var n,e,o,f,r,c;typeof performance<"u"&&performance!==null&&performance.now?u.exports=function(){return performance.now()}:typeof __Process$<"u"&&__Process$!==null&&__Process$.hrtime?(u.exports=function(){return(n()-r)/1e6},e=__Process$.hrtime,n=function(){var s;return s=e(),s[0]*1e9+s[1]},f=n(),c=__Process$.uptime()*1e9,r=f-c):Date.now?(u.exports=function(){return Date.now()-o},o=Date.now()):(u.exports=function(){return new Date().getTime()-o},o=new Date().getTime())}).call(l)});var t={};v(t,{default:()=>N});var y=d(p());i(t,d(p()));var{default:w,...L}=y,N=w!==void 0?w:L;export{N as default};
//# sourceMappingURL=performance-now.mjs.map