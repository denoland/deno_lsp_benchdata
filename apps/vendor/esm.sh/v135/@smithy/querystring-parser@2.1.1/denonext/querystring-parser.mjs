/* esm.sh - esbuild bundle(@smithy/querystring-parser@2.1.1) denonext production */
function i(n){let o={};if(n=n.replace(/^\?/,""),n)for(let p of n.split("&")){let[e,l=null]=p.split("=");e=decodeURIComponent(e),l&&(l=decodeURIComponent(l)),e in o?Array.isArray(o[e])?o[e].push(l):o[e]=[o[e],l]:o[e]=l}return o}export{i as parseQueryString};
//# sourceMappingURL=querystring-parser.mjs.map