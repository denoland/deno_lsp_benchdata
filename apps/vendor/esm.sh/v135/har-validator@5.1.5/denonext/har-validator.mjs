/* esm.sh - esbuild bundle(har-validator@5.1.5) denonext production */
import * as __0$ from "/v135/ajv@6.12.6/denonext/ajv.mjs";
import * as __1$ from "/v135/har-schema@2.0.0/denonext/har-schema.mjs";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"ajv":return e(__0$);case"har-schema":return e(__1$);default:throw new Error("module \""+n+"\" not found");}};
var x=Object.create;var m=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var N=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var y=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,i)=>(typeof require<"u"?require:r)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports),R=(e,r)=>{for(var i in r)m(e,i,{get:r[i],enumerable:!0})},f=(e,r,i,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of A(r))!P.call(e,o)&&o!==i&&m(e,o,{get:()=>r[o],enumerable:!(u=j(r,o))||u.enumerable});return e},s=(e,r,i)=>(f(e,r,"default"),i&&f(i,r,"default")),g=(e,r,i)=>(i=e!=null?x(N(e)):{},f(r||!e||!e.__esModule?m(i,"default",{value:e,enumerable:!0}):i,e));var $=c((re,h)=>{function l(e){var r="validation failed";this.name="HARError",this.message=r,this.errors=e,typeof Error.captureStackTrace=="function"?Error.captureStackTrace(this,this.constructor):this.stack=new Error(r).stack}l.prototype=Error.prototype;h.exports=l});var v=c((te,E)=>{E.exports={$schema:"http://json-schema.org/draft-06/schema#",$id:"http://json-schema.org/draft-06/schema#",title:"Core schema meta-schema",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},type:["object","boolean"],properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},title:{type:"string"},description:{type:"string"},default:{},examples:{type:"array",items:{}},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:{}},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:{},enum:{type:"array",minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},default:{}}});var d=c(t=>{var O=y("ajv"),T=$(),k=y("har-schema"),p;function w(){var e=new O({allErrors:!0});return e.addMetaSchema(v()),e.addSchema(k),e}function n(e,r){r=r||{},p=p||w();var i=p.getSchema(e+".json");return new Promise(function(u,o){var I=i(r);I?u(r):o(new T(i.errors))})}t.afterRequest=function(e){return n("afterRequest",e)};t.beforeRequest=function(e){return n("beforeRequest",e)};t.browser=function(e){return n("browser",e)};t.cache=function(e){return n("cache",e)};t.content=function(e){return n("content",e)};t.cookie=function(e){return n("cookie",e)};t.creator=function(e){return n("creator",e)};t.entry=function(e){return n("entry",e)};t.har=function(e){return n("har",e)};t.header=function(e){return n("header",e)};t.log=function(e){return n("log",e)};t.page=function(e){return n("page",e)};t.pageTimings=function(e){return n("pageTimings",e)};t.postData=function(e){return n("postData",e)};t.query=function(e){return n("query",e)};t.request=function(e){return n("request",e)};t.response=function(e){return n("response",e)};t.timings=function(e){return n("timings",e)}});var a={};R(a,{afterRequest:()=>D,beforeRequest:()=>_,browser:()=>S,cache:()=>M,content:()=>H,cookie:()=>L,creator:()=>C,default:()=>Z,entry:()=>z,har:()=>B,header:()=>F,log:()=>G,page:()=>J,pageTimings:()=>K,postData:()=>Q,query:()=>U,request:()=>V,response:()=>W,timings:()=>X});var q=g(d());s(a,g(d()));var{afterRequest:D,beforeRequest:_,browser:S,cache:M,content:H,cookie:L,creator:C,entry:z,har:B,header:F,log:G,page:J,pageTimings:K,postData:Q,query:U,request:V,response:W,timings:X}=q,{default:b,...Y}=q,Z=b!==void 0?b:Y;export{D as afterRequest,_ as beforeRequest,S as browser,M as cache,H as content,L as cookie,C as creator,Z as default,z as entry,B as har,F as header,G as log,J as page,K as pageTimings,Q as postData,U as query,V as request,W as response,X as timings};
console.warn("[npm] %cdeprecated%c har-validator@5.1.5: this library is no longer supported", "color:red", "");
//# sourceMappingURL=har-validator.mjs.map