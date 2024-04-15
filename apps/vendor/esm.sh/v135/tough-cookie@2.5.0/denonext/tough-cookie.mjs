/* esm.sh - esbuild bundle(tough-cookie@2.5.0) denonext production */
import * as __0$ from "node:net";
import * as __1$ from "node:url";
import * as __2$ from "node:util";
import * as __3$ from "node:punycode";
import * as __4$ from "/v135/psl@1.9.0/denonext/psl.mjs";
import * as __5$ from "node:util";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"net":return e(__0$);case"url":return e(__1$);case"util":return e(__2$);case"punycode":return e(__3$);case"psl":return e(__4$);default:throw new Error("module \""+n+"\" not found");}};
var me=Object.create;var M=Object.defineProperty;var xe=Object.getOwnPropertyDescriptor;var de=Object.getOwnPropertyNames;var ve=Object.getPrototypeOf,ge=Object.prototype.hasOwnProperty;var b=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var A=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Ce=(e,t)=>{for(var r in t)M(e,r,{get:t[r],enumerable:!0})},T=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of de(t))!ge.call(e,n)&&n!==r&&M(e,n,{get:()=>t[n],enumerable:!(i=xe(t,n))||i.enumerable});return e},w=(e,t,r)=>(T(e,t,"default"),r&&T(r,t,"default")),_=(e,t,r)=>(r=e!=null?me(ve(e)):{},T(t||!e||!e.__esModule?M(r,"default",{value:e,enumerable:!0}):r,e));var P=A(B=>{"use strict";var Se=b("psl");function Ae(e){return Se.get(e)}B.getPublicSuffix=Ae});var j=A(V=>{"use strict";function v(){}V.Store=v;v.prototype.synchronous=!1;v.prototype.findCookie=function(e,t,r,i){throw new Error("findCookie is not implemented")};v.prototype.findCookies=function(e,t,r){throw new Error("findCookies is not implemented")};v.prototype.putCookie=function(e,t){throw new Error("putCookie is not implemented")};v.prototype.updateCookie=function(e,t,r){throw new Error("updateCookie is not implemented")};v.prototype.removeCookie=function(e,t,r,i){throw new Error("removeCookie is not implemented")};v.prototype.removeCookies=function(e,t,r){throw new Error("removeCookies is not implemented")};v.prototype.removeAllCookies=function(e){throw new Error("removeAllCookies is not implemented")};v.prototype.getAllCookies=function(e){throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)")}});var N=A(Y=>{"use strict";var we=P();function be(e){var t=we.getPublicSuffix(e);if(!t)return null;if(t==e)return[e];for(var r=e.slice(0,-(t.length+1)),i=r.split(".").reverse(),n=t,o=[n];i.length;)n=i.shift()+"."+n,o.push(n);return o}Y.permuteDomain=be});var z=A($=>{"use strict";function ke(e,t){if(t===e)return!0;var r=e.indexOf(t);return r===0&&(t.substr(-1)==="/"||e.substr(t.length,1)==="/")}$.pathMatch=ke});var K=A(G=>{"use strict";var W=j().Store,Oe=N().permuteDomain,Ee=z().pathMatch,I=b("util");function m(){W.call(this),this.idx={}}I.inherits(m,W);G.MemoryCookieStore=m;m.prototype.idx=null;m.prototype.synchronous=!0;m.prototype.inspect=function(){return"{ idx: "+I.inspect(this.idx,!1,2)+" }"};I.inspect.custom&&(m.prototype[I.inspect.custom]=m.prototype.inspect);m.prototype.findCookie=function(e,t,r,i){return!this.idx[e]||!this.idx[e][t]?i(null,void 0):i(null,this.idx[e][t][r]||null)};m.prototype.findCookies=function(e,t,r){var i=[];if(!e)return r(null,[]);var n;t?n=function(f){Object.keys(f).forEach(function(p){if(Ee(t,p)){var u=f[p];for(var x in u)i.push(u[x])}})}:n=function(f){for(var p in f){var u=f[p];for(var x in u)i.push(u[x])}};var o=Oe(e)||[e],l=this.idx;o.forEach(function(a){var f=l[a];f&&n(f)}),r(null,i)};m.prototype.putCookie=function(e,t){this.idx[e.domain]||(this.idx[e.domain]={}),this.idx[e.domain][e.path]||(this.idx[e.domain][e.path]={}),this.idx[e.domain][e.path][e.key]=e,t(null)};m.prototype.updateCookie=function(e,t,r){this.putCookie(t,r)};m.prototype.removeCookie=function(e,t,r,i){this.idx[e]&&this.idx[e][t]&&this.idx[e][t][r]&&delete this.idx[e][t][r],i(null)};m.prototype.removeCookies=function(e,t,r){return this.idx[e]&&(t?delete this.idx[e][t]:delete this.idx[e]),r(null)};m.prototype.removeAllCookies=function(e){return this.idx={},e(null)};m.prototype.getAllCookies=function(e){var t=[],r=this.idx,i=Object.keys(r);i.forEach(function(n){var o=Object.keys(r[n]);o.forEach(function(l){var a=Object.keys(r[n][l]);a.forEach(function(f){f!==null&&t.push(r[n][l][f])})})}),t.sort(function(n,o){return(n.creationIndex||0)-(o.creationIndex||0)}),e(null,t)}});var Q=A((pt,X)=>{X.exports="2.5.0"});var R=A(y=>{"use strict";var Ie=b("net"),De=b("url").parse,Z=b("util"),U=P(),re=j().Store,ie=K().MemoryCookieStore,ne=z().pathMatch,oe=Q(),J;try{J=b("punycode")}catch{console.warn("tough-cookie: can't load punycode; won't use punycode for domain normalization")}var Te=/^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/,ee=/[\x00-\x1F]/,te=[`
`,"\r","\0"],Me=/[\x20-\x3A\x3C-\x7E]+/,Pe=/[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/,je={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11},Ne=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ze=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],q=2147483647e3,Je=0;function L(e,t,r,i){for(var n=0;n<e.length;){var o=e.charCodeAt(n);if(o<=47||o>=58)break;n++}return n<t||n>r||!i&&n!=e.length?null:parseInt(e.substr(0,n),10)}function qe(e){var t=e.split(":"),r=[0,0,0];if(t.length!==3)return null;for(var i=0;i<3;i++){var n=i==2,o=L(t[i],1,2,n);if(o===null)return null;r[i]=o}return r}function Le(e){e=String(e).substr(0,3).toLowerCase();var t=je[e];return t>=0?t:null}function O(e){if(e){var t=e.split(Pe);if(t){for(var r=null,i=null,n=null,o=null,l=null,a=null,f=0;f<t.length;f++){var p=t[f].trim();if(p.length){var u;if(n===null&&(u=qe(p),u)){r=u[0],i=u[1],n=u[2];continue}if(o===null&&(u=L(p,1,2,!0),u!==null)){o=u;continue}if(l===null&&(u=Le(p),u!==null)){l=u;continue}a===null&&(u=L(p,2,4,!0),u!==null&&(a=u,a>=70&&a<=99?a+=1900:a>=0&&a<=69&&(a+=2e3)))}}if(!(o===null||l===null||a===null||n===null||o<1||o>31||a<1601||r>23||i>59||n>59))return new Date(Date.UTC(a,l,o,r,i,n))}}}function se(e){var t=e.getUTCDate();t=t>=10?t:"0"+t;var r=e.getUTCHours();r=r>=10?r:"0"+r;var i=e.getUTCMinutes();i=i>=10?i:"0"+i;var n=e.getUTCSeconds();return n=n>=10?n:"0"+n,ze[e.getUTCDay()]+", "+t+" "+Ne[e.getUTCMonth()]+" "+e.getUTCFullYear()+" "+r+":"+i+":"+n+" GMT"}function k(e){return e==null?null:(e=e.trim().replace(/^\./,""),J&&/[^\u0001-\u007f]/.test(e)&&(e=J.toASCII(e)),e.toLowerCase())}function F(e,t,r){if(e==null||t==null)return null;if(r!==!1&&(e=k(e),t=k(t)),e==t)return!0;if(Ie.isIP(e))return!1;var i=e.indexOf(t);return!(i<=0||e.length!==t.length+i||e.substr(i-1,1)!==".")}function ue(e){if(!e||e.substr(0,1)!=="/")return"/";if(e==="/")return e;var t=e.lastIndexOf("/");return t===0?"/":e.slice(0,t)}function Ue(e){for(var t=0;t<te.length;t++){var r=e.indexOf(te[t]);r!==-1&&(e=e.substr(0,r))}return e}function Fe(e,t){e=Ue(e);var r=e.indexOf("=");if(t)r===0&&(e=e.substr(1),r=e.indexOf("="));else if(r<=0)return;var i,n;if(r<=0?(i="",n=e.trim()):(i=e.substr(0,r).trim(),n=e.substr(r+1).trim()),!(ee.test(i)||ee.test(n))){var o=new s;return o.key=i,o.value=n,o}}function ae(e,t){(!t||typeof t!="object")&&(t={}),e=e.trim();var r=e.indexOf(";"),i=r===-1?e:e.substr(0,r),n=Fe(i,!!t.loose);if(n){if(r===-1)return n;var o=e.slice(r+1).trim();if(o.length===0)return n;for(var l=o.split(";");l.length;){var a=l.shift().trim();if(a.length!==0){var f=a.indexOf("="),p,u;switch(f===-1?(p=a,u=null):(p=a.substr(0,f),u=a.substr(f+1)),p=p.trim().toLowerCase(),u&&(u=u.trim()),p){case"expires":if(u){var x=O(u);x&&(n.expires=x)}break;case"max-age":if(u&&/^-?[0-9]+$/.test(u)){var g=parseInt(u,10);n.setMaxAge(g)}break;case"domain":if(u){var c=u.trim().replace(/^\./,"");c&&(n.domain=c.toLowerCase())}break;case"path":n.path=u&&u[0]==="/"?u:null;break;case"secure":n.secure=!0;break;case"httponly":n.httpOnly=!0;break;default:n.extensions=n.extensions||[],n.extensions.push(a);break}}}return n}}function le(e){var t;try{t=JSON.parse(e)}catch(r){return r}return t}function D(e){if(!e)return null;var t;if(typeof e=="string"){if(t=le(e),t instanceof Error)return null}else t=e;for(var r=new s,i=0;i<s.serializableProperties.length;i++){var n=s.serializableProperties[i];t[n]===void 0||t[n]===s.prototype[n]||(n==="expires"||n==="creation"||n==="lastAccessed"?t[n]===null?r[n]=null:r[n]=t[n]=="Infinity"?"Infinity":new Date(t[n]):r[n]=t[n])}return r}function H(e,t){var r=0,i=e.path?e.path.length:0,n=t.path?t.path.length:0;if(r=n-i,r!==0)return r;var o=e.creation?e.creation.getTime():q,l=t.creation?t.creation.getTime():q;return r=o-l,r!==0||(r=e.creationIndex-t.creationIndex),r}function He(e){if(e==="/")return["/"];e.lastIndexOf("/")===e.length-1&&(e=e.substr(0,e.length-1));for(var t=[e];e.length>1;){var r=e.lastIndexOf("/");if(r===0)break;e=e.substr(0,r),t.push(e)}return t.push("/"),t}function fe(e){if(e instanceof Object)return e;try{e=decodeURI(e)}catch{}return De(e)}function s(e){e=e||{},Object.keys(e).forEach(function(t){s.prototype.hasOwnProperty(t)&&s.prototype[t]!==e[t]&&t.substr(0,1)!=="_"&&(this[t]=e[t])},this),this.creation=this.creation||new Date,Object.defineProperty(this,"creationIndex",{configurable:!1,enumerable:!1,writable:!0,value:++s.cookiesCreated})}s.cookiesCreated=0;s.parse=ae;s.fromJSON=D;s.prototype.key="";s.prototype.value="";s.prototype.expires="Infinity";s.prototype.maxAge=null;s.prototype.domain=null;s.prototype.path=null;s.prototype.secure=!1;s.prototype.httpOnly=!1;s.prototype.extensions=null;s.prototype.hostOnly=null;s.prototype.pathIsDefault=null;s.prototype.creation=null;s.prototype.lastAccessed=null;Object.defineProperty(s.prototype,"creationIndex",{configurable:!0,enumerable:!1,writable:!0,value:0});s.serializableProperties=Object.keys(s.prototype).filter(function(e){return!(s.prototype[e]instanceof Function||e==="creationIndex"||e.substr(0,1)==="_")});s.prototype.inspect=function(){var t=Date.now();return'Cookie="'+this.toString()+"; hostOnly="+(this.hostOnly!=null?this.hostOnly:"?")+"; aAge="+(this.lastAccessed?t-this.lastAccessed.getTime()+"ms":"?")+"; cAge="+(this.creation?t-this.creation.getTime()+"ms":"?")+'"'};Z.inspect.custom&&(s.prototype[Z.inspect.custom]=s.prototype.inspect);s.prototype.toJSON=function(){for(var e={},t=s.serializableProperties,r=0;r<t.length;r++){var i=t[r];this[i]!==s.prototype[i]&&(i==="expires"||i==="creation"||i==="lastAccessed"?this[i]===null?e[i]=null:e[i]=this[i]=="Infinity"?"Infinity":this[i].toISOString():i==="maxAge"?this[i]!==null&&(e[i]=this[i]==1/0||this[i]==-1/0?this[i].toString():this[i]):this[i]!==s.prototype[i]&&(e[i]=this[i]))}return e};s.prototype.clone=function(){return D(this.toJSON())};s.prototype.validate=function(){if(!Te.test(this.value)||this.expires!=1/0&&!(this.expires instanceof Date)&&!O(this.expires)||this.maxAge!=null&&this.maxAge<=0||this.path!=null&&!Me.test(this.path))return!1;var t=this.cdomain();if(t){if(t.match(/\.$/))return!1;var r=U.getPublicSuffix(t);if(r==null)return!1}return!0};s.prototype.setExpires=function(t){t instanceof Date?this.expires=t:this.expires=O(t)||"Infinity"};s.prototype.setMaxAge=function(t){t===1/0||t===-1/0?this.maxAge=t.toString():this.maxAge=t};s.prototype.cookieString=function(){var t=this.value;return t==null&&(t=""),this.key===""?t:this.key+"="+t};s.prototype.toString=function(){var t=this.cookieString();return this.expires!=1/0&&(this.expires instanceof Date?t+="; Expires="+se(this.expires):t+="; Expires="+this.expires),this.maxAge!=null&&this.maxAge!=1/0&&(t+="; Max-Age="+this.maxAge),this.domain&&!this.hostOnly&&(t+="; Domain="+this.domain),this.path&&(t+="; Path="+this.path),this.secure&&(t+="; Secure"),this.httpOnly&&(t+="; HttpOnly"),this.extensions&&this.extensions.forEach(function(r){t+="; "+r}),t};s.prototype.TTL=function(t){if(this.maxAge!=null)return this.maxAge<=0?0:this.maxAge*1e3;var r=this.expires;return r!=1/0?(r instanceof Date||(r=O(r)||1/0),r==1/0?1/0:r.getTime()-(t||Date.now())):1/0};s.prototype.expiryTime=function(t){if(this.maxAge!=null){var r=t||this.creation||new Date,i=this.maxAge<=0?-1/0:this.maxAge*1e3;return r.getTime()+i}return this.expires==1/0?1/0:this.expires.getTime()};s.prototype.expiryDate=function(t){var r=this.expiryTime(t);return r==1/0?new Date(q):r==-1/0?new Date(Je):new Date(r)};s.prototype.isPersistent=function(){return this.maxAge!=null||this.expires!=1/0};s.prototype.cdomain=s.prototype.canonicalizedDomain=function(){return this.domain==null?null:k(this.domain)};function h(e,t){typeof t=="boolean"?t={rejectPublicSuffixes:t}:t==null&&(t={}),t.rejectPublicSuffixes!=null&&(this.rejectPublicSuffixes=t.rejectPublicSuffixes),t.looseMode!=null&&(this.enableLooseMode=t.looseMode),e||(e=new ie),this.store=e}h.prototype.store=null;h.prototype.rejectPublicSuffixes=!0;h.prototype.enableLooseMode=!1;var C=[];C.push("setCookie");h.prototype.setCookie=function(e,t,r,i){var n,o=fe(t);r instanceof Function&&(i=r,r={});var l=k(o.hostname),a=this.enableLooseMode;if(r.loose!=null&&(a=r.loose),e instanceof s||(e=s.parse(e,{loose:a})),!e)return n=new Error("Cookie failed to parse"),i(r.ignoreError?null:n);var f=r.now||new Date;if(this.rejectPublicSuffixes&&e.domain){var p=U.getPublicSuffix(e.cdomain());if(p==null)return n=new Error("Cookie has domain set to a public suffix"),i(r.ignoreError?null:n)}if(e.domain){if(!F(l,e.cdomain(),!1))return n=new Error("Cookie not in this host's domain. Cookie:"+e.cdomain()+" Request:"+l),i(r.ignoreError?null:n);e.hostOnly==null&&(e.hostOnly=!1)}else e.hostOnly=!0,e.domain=l;if((!e.path||e.path[0]!=="/")&&(e.path=ue(o.pathname),e.pathIsDefault=!0),r.http===!1&&e.httpOnly)return n=new Error("Cookie is HttpOnly and this isn't an HTTP API"),i(r.ignoreError?null:n);var u=this.store;u.updateCookie||(u.updateCookie=function(g,c,d){this.putCookie(c,d)});function x(g,c){if(g)return i(g);var d=function(E){if(E)return i(E);i(null,e)};if(c){if(r.http===!1&&c.httpOnly)return g=new Error("old Cookie is HttpOnly and this isn't an HTTP API"),i(r.ignoreError?null:g);e.creation=c.creation,e.creationIndex=c.creationIndex,e.lastAccessed=f,u.updateCookie(c,e,d)}else e.creation=e.lastAccessed=f,u.putCookie(e,d)}u.findCookie(e.domain,e.path,e.key,x)};C.push("getCookies");h.prototype.getCookies=function(e,t,r){var i=fe(e);t instanceof Function&&(r=t,t={});var n=k(i.hostname),o=i.pathname||"/",l=t.secure;l==null&&i.protocol&&(i.protocol=="https:"||i.protocol=="wss:")&&(l=!0);var a=t.http;a==null&&(a=!0);var f=t.now||Date.now(),p=t.expire!==!1,u=!!t.allPaths,x=this.store;function g(c){if(c.hostOnly){if(c.domain!=n)return!1}else if(!F(n,c.domain,!1))return!1;return!u&&!ne(o,c.path)||c.secure&&!l||c.httpOnly&&!a?!1:p&&c.expiryTime()<=f?(x.removeCookie(c.domain,c.path,c.key,function(){}),!1):!0}x.findCookies(n,u?null:o,function(c,d){if(c)return r(c);d=d.filter(g),t.sort!==!1&&(d=d.sort(H));var E=new Date;d.forEach(function(ye){ye.lastAccessed=E}),r(null,d)})};C.push("getCookieString");h.prototype.getCookieString=function(){var e=Array.prototype.slice.call(arguments,0),t=e.pop(),r=function(i,n){i?t(i):t(null,n.sort(H).map(function(o){return o.cookieString()}).join("; "))};e.push(r),this.getCookies.apply(this,e)};C.push("getSetCookieStrings");h.prototype.getSetCookieStrings=function(){var e=Array.prototype.slice.call(arguments,0),t=e.pop(),r=function(i,n){i?t(i):t(null,n.map(function(o){return o.toString()}))};e.push(r),this.getCookies.apply(this,e)};C.push("serialize");h.prototype.serialize=function(e){var t=this.store.constructor.name;t==="Object"&&(t=null);var r={version:"tough-cookie@"+oe,storeType:t,rejectPublicSuffixes:!!this.rejectPublicSuffixes,cookies:[]};if(!(this.store.getAllCookies&&typeof this.store.getAllCookies=="function"))return e(new Error("store does not support getAllCookies and cannot be serialized"));this.store.getAllCookies(function(i,n){return i?e(i):(r.cookies=n.map(function(o){return o=o instanceof s?o.toJSON():o,delete o.creationIndex,o}),e(null,r))})};h.prototype.toJSON=function(){return this.serializeSync()};C.push("_importCookies");h.prototype._importCookies=function(e,t){var r=this,i=e.cookies;if(!i||!Array.isArray(i))return t(new Error("serialized jar has no cookies array"));i=i.slice();function n(o){if(o)return t(o);if(!i.length)return t(o,r);var l;try{l=D(i.shift())}catch(a){return t(a)}if(l===null)return n(null);r.store.putCookie(l,n)}n()};h.deserialize=function(e,t,r){arguments.length!==3&&(r=t,t=null);var i;if(typeof e=="string"){if(i=le(e),i instanceof Error)return r(i)}else i=e;var n=new h(t,i.rejectPublicSuffixes);n._importCookies(i,function(o){if(o)return r(o);r(null,n)})};h.deserializeSync=function(e,t){var r=typeof e=="string"?JSON.parse(e):e,i=new h(t,r.rejectPublicSuffixes);if(!i.store.synchronous)throw new Error("CookieJar store is not synchronous; use async API instead.");return i._importCookiesSync(r),i};h.fromJSON=h.deserializeSync;h.prototype.clone=function(e,t){arguments.length===1&&(t=e,e=null),this.serialize(function(r,i){if(r)return t(r);h.deserialize(i,e,t)})};C.push("removeAllCookies");h.prototype.removeAllCookies=function(e){var t=this.store;if(t.removeAllCookies instanceof Function&&t.removeAllCookies!==re.prototype.removeAllCookies)return t.removeAllCookies(e);t.getAllCookies(function(r,i){if(r)return e(r);if(i.length===0)return e(null);var n=0,o=[];function l(a){if(a&&o.push(a),n++,n===i.length)return e(o.length?o[0]:null)}i.forEach(function(a){t.removeCookie(a.domain,a.path,a.key,l)})})};h.prototype._cloneSync=ce("clone");h.prototype.cloneSync=function(e){if(!e.synchronous)throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");return this._cloneSync(e)};function ce(e){return function(){if(!this.store.synchronous)throw new Error("CookieJar store is not synchronous; use async API instead.");var t=Array.prototype.slice.call(arguments),r,i;if(t.push(function(o,l){r=o,i=l}),this[e].apply(this,t),r)throw r;return i}}C.forEach(function(e){h.prototype[e+"Sync"]=ce(e)});y.version=oe;y.CookieJar=h;y.Cookie=s;y.Store=re;y.MemoryCookieStore=ie;y.parseDate=O;y.formatDate=se;y.parse=ae;y.fromJSON=D;y.domainMatch=F;y.defaultPath=ue;y.pathMatch=ne;y.getPublicSuffix=U.getPublicSuffix;y.cookieCompare=H;y.permuteDomain=N().permuteDomain;y.permutePath=He;y.canonicalDomain=k});var S={};Ce(S,{Cookie:()=>Be,CookieJar:()=>_e,MemoryCookieStore:()=>Ye,Store:()=>Ve,canonicalDomain:()=>nt,cookieCompare:()=>tt,default:()=>st,defaultPath:()=>Qe,domainMatch:()=>Xe,formatDate:()=>We,fromJSON:()=>Ke,getPublicSuffix:()=>et,parse:()=>Ge,parseDate:()=>$e,pathMatch:()=>Ze,permuteDomain:()=>rt,permutePath:()=>it,version:()=>Re});var pe=_(R());w(S,_(R()));var{version:Re,CookieJar:_e,Cookie:Be,Store:Ve,MemoryCookieStore:Ye,parseDate:$e,formatDate:We,parse:Ge,fromJSON:Ke,domainMatch:Xe,defaultPath:Qe,pathMatch:Ze,getPublicSuffix:et,cookieCompare:tt,permuteDomain:rt,permutePath:it,canonicalDomain:nt}=pe,{default:he,...ot}=pe,st=he!==void 0?he:ot;export{Be as Cookie,_e as CookieJar,Ye as MemoryCookieStore,Ve as Store,nt as canonicalDomain,tt as cookieCompare,st as default,Qe as defaultPath,Xe as domainMatch,We as formatDate,Ke as fromJSON,et as getPublicSuffix,Ge as parse,$e as parseDate,Ze as pathMatch,rt as permuteDomain,it as permutePath,Re as version};
/*! Bundled license information:

tough-cookie/lib/pubsuffix-psl.js:
  (*!
   * Copyright (c) 2018, Salesforce.com, Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   * this list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. Neither the name of Salesforce.com nor the names of its contributors may
   * be used to endorse or promote products derived from this software without
   * specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   *)

tough-cookie/lib/store.js:
  (*!
   * Copyright (c) 2015, Salesforce.com, Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   * this list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. Neither the name of Salesforce.com nor the names of its contributors may
   * be used to endorse or promote products derived from this software without
   * specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   *)

tough-cookie/lib/permuteDomain.js:
  (*!
   * Copyright (c) 2015, Salesforce.com, Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   * this list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. Neither the name of Salesforce.com nor the names of its contributors may
   * be used to endorse or promote products derived from this software without
   * specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   *)

tough-cookie/lib/pathMatch.js:
  (*!
   * Copyright (c) 2015, Salesforce.com, Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   * this list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. Neither the name of Salesforce.com nor the names of its contributors may
   * be used to endorse or promote products derived from this software without
   * specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   *)

tough-cookie/lib/memstore.js:
  (*!
   * Copyright (c) 2015, Salesforce.com, Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   * this list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. Neither the name of Salesforce.com nor the names of its contributors may
   * be used to endorse or promote products derived from this software without
   * specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   *)

tough-cookie/lib/cookie.js:
  (*!
   * Copyright (c) 2015, Salesforce.com, Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   * this list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. Neither the name of Salesforce.com nor the names of its contributors may
   * be used to endorse or promote products derived from this software without
   * specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   *)
*/
//# sourceMappingURL=tough-cookie.mjs.map