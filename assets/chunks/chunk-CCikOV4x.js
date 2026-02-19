import{r as h,j as m,R as x}from"./chunk-C-2KGtSY.js";var N=[16,32,48,64,96,128,256,384],u=[640,750,828,1080,1200,1920,2048,3840],c=[...N,...u],S=(t,i)=>{if(i){const s=/(^|\s)(1?\d?\d)vw/g,r=[];for(let n;n=s.exec(i);n)r.push(Number.parseInt(n[2],10));if(r.length){const n=Math.min(...r)*.01;return{widths:c.filter(d=>d>=u[0]*n),kind:"w"}}return{widths:c,kind:"w"}}if(t==null)return{widths:u,kind:"w"};const a=2;let e=c.findIndex(s=>s>=a*t);return e=e<0?c.length:e,{widths:c.slice(0,e+1),kind:"w"}},z=({src:t,width:i,quality:a,sizes:e,loader:s})=>{const{widths:r,kind:n}=S(i,e);return{sizes:!e&&n==="w"?"100vw":e,srcSet:r.map((d,l)=>`${s({src:t,quality:a,width:d})} ${n==="w"?d:l+1}${n}`).join(", "),src:s({src:t,quality:a,width:r[r.length-1]})}},g=t=>{if(typeof t=="number")return Math.round(t);if(typeof t=="string"){const i=Number.parseFloat(t);if(!Number.isNaN(i))return Math.round(i)}},I="(min-width: 1280px) 50vw, 100vw",y=80,b=t=>{try{return new URL(t),!0}catch{return!1}},E=t=>{const i=g(t.width),a=Math.max(Math.min(g(t.quality)??y,100),0);if(t.src!=null&&t.src!==""){if(t.srcSet==null&&t.optimize){const s=t.sizes??(t.width==null?I:void 0);return z({src:t.src,width:i,quality:a,sizes:s,loader:t.loader})}const e={src:b(t.src)?t.src:t.loader({src:t.src,format:"raw"})};return t.srcSet!=null&&(e.srcSet=t.srcSet),t.sizes!=null&&(e.sizes=t.sizes),e}},v=h.forwardRef(({quality:t,loader:i,optimize:a=!0,loading:e="lazy",decoding:s="async",...r},n)=>{const d=E({src:r.src,srcSet:r.srcSet,sizes:r.sizes,width:r.width,quality:t,loader:i,optimize:a})??{src:L};return m.jsx("img",{alt:"",...r,...d,decoding:s,loading:e,ref:n})});v.displayName="Image";var L=`data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#DFE3E6" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`;const M=h.forwardRef(({loading:t="lazy",width:i,height:a,optimize:e=!0,decoding:s,$webstudio$canvasOnly$assetId:r,...n},d)=>{const l=String(n.src??""),{imageLoader:f,renderer:C}=h.useContext(x);let o=s,w=l;return C==="canvas"&&(t="eager",o="sync",w=r??l,i!==void 0&&a!==void 0&&Number.isNaN(i)&&Number.isNaN(a)&&(e=!1,i=void 0,a=void 0)),m.jsx(v,{loading:t,decoding:o,optimize:e,width:i,height:a,...n,loader:f,src:l,ref:d},w)});M.displayName="Image";export{M as y};
