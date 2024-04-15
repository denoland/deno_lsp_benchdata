/* esm.sh - esbuild bundle(postcss@8.4.31/lib/no-work-result) esnext production */
import * as __0$ from "/v135/postcss@8.4.31/esnext/lib/map-generator.js";
import * as __1$ from "/v135/postcss@8.4.31/esnext/lib/stringify.js";
import * as __2$ from "/v135/postcss@8.4.31/esnext/lib/warn-once.js";
import * as __3$ from "/v135/postcss@8.4.31/esnext/lib/parse.js";
import * as __4$ from "/v135/postcss@8.4.31/esnext/lib/result.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"postcss/lib/map-generator":return e(__0$);case"postcss/lib/stringify":return e(__1$);case"postcss/lib/warn-once":return e(__2$);case"postcss/lib/parse":return e(__3$);case"postcss/lib/result":return e(__4$);default:throw new Error("module \""+n+"\" not found");}};
var y=Object.create;var a=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var O=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var u=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var x=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),C=(e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})},l=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of O(t))!v.call(e,s)&&s!==r&&a(e,s,{get:()=>t[s],enumerable:!(o=q(t,s))||o.enumerable});return e},n=(e,t,r)=>(l(e,t,"default"),r&&l(r,t,"default")),_=(e,t,r)=>(r=e!=null?y(P(e)):{},l(t||!e||!e.__esModule?a(r,"default",{value:e,enumerable:!0}):r,e));var c=x((T,d)=>{"use strict";var M=u("postcss/lib/map-generator"),b=u("postcss/lib/stringify"),R=u("postcss/lib/warn-once"),j=u("postcss/lib/parse"),E=u("postcss/lib/result"),h=class{constructor(t,r,o){r=r.toString(),this.stringified=!1,this._processor=t,this._css=r,this._opts=o,this._map=void 0;let s,w=b;this.result=new E(this._processor,s,this._opts),this.result.css=r;let S=this;Object.defineProperty(this.result,"root",{get(){return S.root}});let p=new M(w,s,this._opts,r);if(p.isMap()){let[f,g]=p.generate();f&&(this.result.css=f),g&&(this.result.map=g)}}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(t){return this.async().catch(t)}finally(t){return this.async().then(t,t)}sync(){if(this.error)throw this.error;return this.result}then(t,r){return this.async().then(t,r)}toString(){return this._css}warnings(){return[]}get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){if(this._root)return this._root;let t,r=j;try{t=r(this._css,this._opts)}catch(o){this.error=o}if(this.error)throw this.error;return this._root=t,t}get[Symbol.toStringTag](){return"NoWorkResult"}};d.exports=h;h.default=h});var i={};C(i,{default:()=>D});var N=_(c());n(i,_(c()));var{default:m,...B}=N,D=m!==void 0?m:B;export{D as default};
//# sourceMappingURL=no-work-result.js.map