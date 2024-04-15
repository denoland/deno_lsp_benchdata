/* esm.sh - esbuild bundle(@smithy/util-utf8@2.1.1) denonext production */
var e=r=>new TextEncoder().encode(r);var f=r=>typeof r=="string"?e(r):ArrayBuffer.isView(r)?new Uint8Array(r.buffer,r.byteOffset,r.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(r);var i=r=>new TextDecoder("utf-8").decode(r);export{e as fromUtf8,f as toUint8Array,i as toUtf8};
//# sourceMappingURL=util-utf8.mjs.map