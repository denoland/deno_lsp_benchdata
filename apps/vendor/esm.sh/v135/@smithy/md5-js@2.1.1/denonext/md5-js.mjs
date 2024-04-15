/* esm.sh - esbuild bundle(@smithy/md5-js@2.1.1) denonext production */
import{fromUtf8 as o}from"/v135/@smithy/util-utf8@2.1.1/denonext/util-utf8.mjs";var b=[1732584193,4023233417,2562383102,271733878];var c=class{constructor(){this.reset()}update(n){if(y(n))return;if(this.finished)throw new Error("Attempted to update an already finished hash.");let i=L(n),f=0,{byteLength:t}=i;for(this.bytesHashed+=t;t>0;)this.buffer.setUint8(this.bufferLength++,i[f++]),t--,this.bufferLength===64&&(this.hashBuffer(),this.bufferLength=0)}async digest(){if(!this.finished){let{buffer:i,bufferLength:f,bytesHashed:t}=this,r=t*8;if(i.setUint8(this.bufferLength++,128),f%64>=56){for(let e=this.bufferLength;e<64;e++)i.setUint8(e,0);this.hashBuffer(),this.bufferLength=0}for(let e=this.bufferLength;e<56;e++)i.setUint8(e,0);i.setUint32(56,r>>>0,!0),i.setUint32(60,Math.floor(r/4294967296),!0),this.hashBuffer(),this.finished=!0}let n=new DataView(new ArrayBuffer(16));for(let i=0;i<4;i++)n.setUint32(i*4,this.state[i],!0);return new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}hashBuffer(){let{buffer:n,state:i}=this,f=i[0],t=i[1],r=i[2],e=i[3];f=g(f,t,r,e,n.getUint32(0,!0),7,3614090360),e=g(e,f,t,r,n.getUint32(4,!0),12,3905402710),r=g(r,e,f,t,n.getUint32(8,!0),17,606105819),t=g(t,r,e,f,n.getUint32(12,!0),22,3250441966),f=g(f,t,r,e,n.getUint32(16,!0),7,4118548399),e=g(e,f,t,r,n.getUint32(20,!0),12,1200080426),r=g(r,e,f,t,n.getUint32(24,!0),17,2821735955),t=g(t,r,e,f,n.getUint32(28,!0),22,4249261313),f=g(f,t,r,e,n.getUint32(32,!0),7,1770035416),e=g(e,f,t,r,n.getUint32(36,!0),12,2336552879),r=g(r,e,f,t,n.getUint32(40,!0),17,4294925233),t=g(t,r,e,f,n.getUint32(44,!0),22,2304563134),f=g(f,t,r,e,n.getUint32(48,!0),7,1804603682),e=g(e,f,t,r,n.getUint32(52,!0),12,4254626195),r=g(r,e,f,t,n.getUint32(56,!0),17,2792965006),t=g(t,r,e,f,n.getUint32(60,!0),22,1236535329),f=x(f,t,r,e,n.getUint32(4,!0),5,4129170786),e=x(e,f,t,r,n.getUint32(24,!0),9,3225465664),r=x(r,e,f,t,n.getUint32(44,!0),14,643717713),t=x(t,r,e,f,n.getUint32(0,!0),20,3921069994),f=x(f,t,r,e,n.getUint32(20,!0),5,3593408605),e=x(e,f,t,r,n.getUint32(40,!0),9,38016083),r=x(r,e,f,t,n.getUint32(60,!0),14,3634488961),t=x(t,r,e,f,n.getUint32(16,!0),20,3889429448),f=x(f,t,r,e,n.getUint32(36,!0),5,568446438),e=x(e,f,t,r,n.getUint32(56,!0),9,3275163606),r=x(r,e,f,t,n.getUint32(12,!0),14,4107603335),t=x(t,r,e,f,n.getUint32(32,!0),20,1163531501),f=x(f,t,r,e,n.getUint32(52,!0),5,2850285829),e=x(e,f,t,r,n.getUint32(8,!0),9,4243563512),r=x(r,e,f,t,n.getUint32(28,!0),14,1735328473),t=x(t,r,e,f,n.getUint32(48,!0),20,2368359562),f=U(f,t,r,e,n.getUint32(20,!0),4,4294588738),e=U(e,f,t,r,n.getUint32(32,!0),11,2272392833),r=U(r,e,f,t,n.getUint32(44,!0),16,1839030562),t=U(t,r,e,f,n.getUint32(56,!0),23,4259657740),f=U(f,t,r,e,n.getUint32(4,!0),4,2763975236),e=U(e,f,t,r,n.getUint32(16,!0),11,1272893353),r=U(r,e,f,t,n.getUint32(28,!0),16,4139469664),t=U(t,r,e,f,n.getUint32(40,!0),23,3200236656),f=U(f,t,r,e,n.getUint32(52,!0),4,681279174),e=U(e,f,t,r,n.getUint32(0,!0),11,3936430074),r=U(r,e,f,t,n.getUint32(12,!0),16,3572445317),t=U(t,r,e,f,n.getUint32(24,!0),23,76029189),f=U(f,t,r,e,n.getUint32(36,!0),4,3654602809),e=U(e,f,t,r,n.getUint32(48,!0),11,3873151461),r=U(r,e,f,t,n.getUint32(60,!0),16,530742520),t=U(t,r,e,f,n.getUint32(8,!0),23,3299628645),f=s(f,t,r,e,n.getUint32(0,!0),6,4096336452),e=s(e,f,t,r,n.getUint32(28,!0),10,1126891415),r=s(r,e,f,t,n.getUint32(56,!0),15,2878612391),t=s(t,r,e,f,n.getUint32(20,!0),21,4237533241),f=s(f,t,r,e,n.getUint32(48,!0),6,1700485571),e=s(e,f,t,r,n.getUint32(12,!0),10,2399980690),r=s(r,e,f,t,n.getUint32(40,!0),15,4293915773),t=s(t,r,e,f,n.getUint32(4,!0),21,2240044497),f=s(f,t,r,e,n.getUint32(32,!0),6,1873313359),e=s(e,f,t,r,n.getUint32(60,!0),10,4264355552),r=s(r,e,f,t,n.getUint32(24,!0),15,2734768916),t=s(t,r,e,f,n.getUint32(52,!0),21,1309151649),f=s(f,t,r,e,n.getUint32(16,!0),6,4149444226),e=s(e,f,t,r,n.getUint32(44,!0),10,3174756917),r=s(r,e,f,t,n.getUint32(8,!0),15,718787259),t=s(t,r,e,f,n.getUint32(36,!0),21,3951481745),i[0]=f+i[0]&4294967295,i[1]=t+i[1]&4294967295,i[2]=r+i[2]&4294967295,i[3]=e+i[3]&4294967295}reset(){this.state=Uint32Array.from(b),this.buffer=new DataView(new ArrayBuffer(64)),this.bufferLength=0,this.bytesHashed=0,this.finished=!1}};function a(u,n,i,f,t,r){return n=(n+u&4294967295)+(f+r&4294967295)&4294967295,(n<<t|n>>>32-t)+i&4294967295}function g(u,n,i,f,t,r,e){return a(n&i|~n&f,u,n,t,r,e)}function x(u,n,i,f,t,r,e){return a(n&f|i&~f,u,n,t,r,e)}function U(u,n,i,f,t,r,e){return a(n^i^f,u,n,t,r,e)}function s(u,n,i,f,t,r,e){return a(i^(n|~f),u,n,t,r,e)}function y(u){return typeof u=="string"?u.length===0:u.byteLength===0}function L(u){return typeof u=="string"?o(u):ArrayBuffer.isView(u)?new Uint8Array(u.buffer,u.byteOffset,u.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(u)}export{c as Md5};
//# sourceMappingURL=md5-js.mjs.map