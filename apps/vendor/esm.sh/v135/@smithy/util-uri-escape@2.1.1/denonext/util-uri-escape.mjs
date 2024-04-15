/* esm.sh - esbuild bundle(@smithy/util-uri-escape@2.1.1) denonext production */
var o=e=>encodeURIComponent(e).replace(/[!'()*]/g,r),r=e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`;var c=e=>e.split("/").map(o).join("/");export{o as escapeUri,c as escapeUriPath};
//# sourceMappingURL=util-uri-escape.mjs.map