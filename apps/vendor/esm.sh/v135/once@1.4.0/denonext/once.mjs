/* esm.sh - esbuild bundle(once@1.4.0) denonext production */
import * as __0$ from "/v135/wrappy@1.0.2/denonext/wrappy.mjs";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"wrappy":return e(__0$);default:throw new Error("module \""+n+"\" not found");}};
var y=Object.create;var l=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var g=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var E=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),F=(r,e)=>{for(var t in e)l(r,t,{get:e[t],enumerable:!0})},a=(r,e,t,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of b(e))!x.call(r,u)&&u!==t&&l(r,u,{get:()=>e[u],enumerable:!(p=_(e,u))||p.enumerable});return r},o=(r,e,t)=>(a(r,e,"default"),t&&a(t,e,"default")),d=(r,e,t)=>(t=r!=null?y(w(r)):{},a(e||!r||!r.__esModule?l(t,"default",{value:r,enumerable:!0}):t,r));var f=E((q,i)=>{var s=g("wrappy");i.exports=s(c);i.exports.strict=s(m);c.proto=c(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return c(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return m(this)},configurable:!0})});function c(r){var e=function(){return e.called?e.value:(e.called=!0,e.value=r.apply(this,arguments))};return e.called=!1,e}function m(r){var e=function(){if(e.called)throw new Error(e.onceError);return e.called=!0,e.value=r.apply(this,arguments)},t=r.name||"Function wrapped with `once`";return e.onceError=t+" shouldn't be called more than once",e.called=!1,e}});var n={};F(n,{default:()=>P,strict:()=>j});var h=d(f());o(n,d(f()));var{strict:j}=h,{default:v,...O}=h,P=v!==void 0?v:O;export{P as default,j as strict};
//# sourceMappingURL=once.mjs.map