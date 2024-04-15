/* esm.sh - esbuild bundle(extsprintf@1.3.0) denonext production */
import __Process$ from "node:process";
import * as __0$ from "node:assert";
import * as __1$ from "node:util";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"assert":return e(__0$);case"util":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var P=Object.create;var v=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,X=Object.prototype.hasOwnProperty;var b=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var G=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),I=(r,t)=>{for(var e in t)v(r,e,{get:t[e],enumerable:!0})},w=(r,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of z(t))!X.call(r,n)&&n!==e&&v(r,n,{get:()=>t[n],enumerable:!(s=x(t,n))||s.enumerable});return r},p=(r,t,e)=>(w(r,t,"default"),e&&w(e,t,"default")),k=(r,t,e)=>(e=r!=null?P(F(r)):{},w(t||!r||!r.__esModule?v(e,"default",{value:r,enumerable:!0}):e,r));var E=G(h=>{var L=b("assert"),M=b("util");h.sprintf=y;h.printf=N;h.fprintf=S;function y(r){var t=["([^%]*)","%","(['\\-+ #0]*?)","([1-9]\\d*)?","(\\.([1-9]\\d*))?","[lhjztL]*?","([diouxXfFeEgGaAcCsSp%jr])"].join(""),e=new RegExp(t),s=Array.prototype.slice.call(arguments,1),n,f,j,g,l,c,d,a,u,o="",_=1;for(L.equal("string",typeof r);(u=e.exec(r))!==null;){if(o+=u[1],r=r.substring(u[0].length),n=u[2]||"",f=u[3]||0,j=u[4]||"",g=u[6],l=!1,d=!1,c=" ",g=="%"){o+="%";continue}if(s.length===0)throw new Error("too few args to sprintf");if(a=s.shift(),_++,n.match(/[\' #]/))throw new Error("unsupported flags: "+n);if(j.length>0)throw new Error("non-zero precision not supported");switch(n.match(/-/)&&(l=!0),n.match(/0/)&&(c="0"),n.match(/\+/)&&(d=!0),g){case"s":if(a==null)throw new Error("argument "+_+": attempted to print undefined or null as a string");o+=m(c,f,l,a.toString());break;case"d":a=Math.floor(a);case"f":d=d&&a>0?"+":"",o+=d+m(c,f,l,a.toString());break;case"x":o+=m(c,f,l,a.toString(16));break;case"j":f===0&&(f=10),o+=M.inspect(a,!1,f);break;case"r":o+=A(a);break;default:throw new Error("unsupported conversion: "+g)}}return o+=r,o}function N(){var r=Array.prototype.slice.call(arguments);r.unshift(__Process$.stdout),S.apply(null,r)}function S(r){var t=Array.prototype.slice.call(arguments,1);return r.write(y.apply(this,t))}function m(r,t,e,s){for(var n=s;n.length<t;)e?n+=r:n=r+n;return n}function A(r){var t;if(!(r instanceof Error))throw new Error(y("invalid type for %%r: %j",r));if(t="EXCEPTION: "+r.constructor.name+": "+r.stack,r.cause&&typeof r.cause=="function"){var e=r.cause();e&&(t+=`
Caused by: `+A(e))}return t}});var i={};I(i,{default:()=>D,fprintf:()=>T,printf:()=>R,sprintf:()=>O});var C=k(E());p(i,k(E()));var{sprintf:O,printf:R,fprintf:T}=C,{default:q,...B}=C,D=q!==void 0?q:B;export{D as default,T as fprintf,R as printf,O as sprintf};
//# sourceMappingURL=extsprintf.mjs.map