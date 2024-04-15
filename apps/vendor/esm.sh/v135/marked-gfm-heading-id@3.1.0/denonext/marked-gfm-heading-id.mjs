/* esm.sh - esbuild bundle(marked-gfm-heading-id@3.1.0) denonext production */
import d from"/v135/github-slugger@2.0.0/denonext/github-slugger.mjs";var g,t=[];function h({prefix:o=""}={}){return{headerIds:!1,hooks:{preprocess(e){return t=[],g=new d,e}},renderer:{heading(e,r,n){n=n.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"");let i=`${o}${g.slug(n)}`,s={level:r,text:e,id:i};return t.push(s),`<h${r} id="${i}">${e}</h${r}>
`}}}}function a(){return t}export{a as getHeadingList,h as gfmHeadingId};
//# sourceMappingURL=marked-gfm-heading-id.mjs.map