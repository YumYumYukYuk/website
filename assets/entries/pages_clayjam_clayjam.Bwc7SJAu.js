import{r as h,j as e,R as j,l as f,m as v,a as u,i as w,P as _,b as z,c as S}from"../chunks/chunk-C-2KGtSY.js";import{R as E,A as C}from"../chunks/chunk-BMFhRB2f.js";/* empty css                      */import"../chunks/chunk-ckwbz45p.js";var B=[16,32,48,64,96,128,256,384],x=[640,750,828,1080,1200,1920,2048,3840],m=[...B,...x],D=(c,t)=>{if(t){const i=/(^|\s)(1?\d?\d)vw/g,l=[];for(let r;r=i.exec(t);r)l.push(Number.parseInt(r[2],10));if(l.length){const r=Math.min(...l)*.01;return{widths:m.filter(d=>d>=x[0]*r),kind:"w"}}return{widths:m,kind:"w"}}if(c==null)return{widths:x,kind:"w"};const n=2;let a=m.findIndex(i=>i>=n*c);return a=a<0?m.length:a,{widths:m.slice(0,a+1),kind:"w"}},A=({src:c,width:t,quality:n,sizes:a,loader:i})=>{const{widths:l,kind:r}=D(t,a);return{sizes:!a&&r==="w"?"100vw":a,srcSet:l.map((d,o)=>`${i({src:c,quality:n,width:d})} ${r==="w"?d:o+1}${r}`).join(", "),src:i({src:c,quality:n,width:l[l.length-1]})}},y=c=>{if(typeof c=="number")return Math.round(c);if(typeof c=="string"){const t=Number.parseFloat(c);if(!Number.isNaN(t))return Math.round(t)}},T="(min-width: 1280px) 50vw, 100vw",I=80,P=c=>{try{return new URL(c),!0}catch{return!1}},L=c=>{const t=y(c.width),n=Math.max(Math.min(y(c.quality)??I,100),0);if(c.src!=null&&c.src!==""){if(c.srcSet==null&&c.optimize){const i=c.sizes??(c.width==null?T:void 0);return A({src:c.src,width:t,quality:n,sizes:i,loader:c.loader})}const a={src:P(c.src)?c.src:c.loader({src:c.src,format:"raw"})};return c.srcSet!=null&&(a.srcSet=c.srcSet),c.sizes!=null&&(a.sizes=c.sizes),a}},b=h.forwardRef(({quality:c,loader:t,optimize:n=!0,loading:a="lazy",decoding:i="async",...l},r)=>{const d=L({src:l.src,srcSet:l.srcSet,sizes:l.sizes,width:l.width,quality:c,loader:t,optimize:n})??{src:O};return e.jsx("img",{alt:"",...l,...d,decoding:i,loading:a,ref:r})});b.displayName="Image";var O=`data:image/svg+xml;base64,${btoa(`<svg
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
</svg>`)}`;const s=h.forwardRef(({loading:c="lazy",width:t,height:n,optimize:a=!0,decoding:i,$webstudio$canvasOnly$assetId:l,...r},d)=>{const o=String(r.src??""),{imageLoader:q,renderer:N}=h.useContext(j);let g=i,p=o;return N==="canvas"&&(c="eager",g="sync",p=l??o,t!==void 0&&n!==void 0&&Number.isNaN(t)&&Number.isNaN(n)&&(a=!1,t=void 0,n=void 0)),e.jsx(b,{loading:c,decoding:g,optimize:a,width:t,height:n,...r,loader:q,src:o,ref:d},p)});s.displayName="Image";const k="YumYumYukYuk",U=[{id:"rmoLzitIXpP3FdhMdgM_O"},{id:"G1wUYW6KaOQXWRfSa6vGW",maxWidth:991},{id:"_8BKaF_vgA-rDfjBOkHP3",maxWidth:767},{id:"YTiZEefehqAqqdVkzBZ-X",maxWidth:479},{id:"ziLaCIVE-i9rTj9R83MPH",minWidth:1760},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:1112}],M="WebIcon_ixfGgSbNNuL54AwUHbcHS.png",R=["MADE_Tommy_Soft_Light_PERSONAL_USE_gxYHT36LjmLYKBi2nKa4x.ttf","MADE_Tommy_Soft_Bold_PERSONAL_USE_HHiuN8d9tOx8QeWepHq7F.ttf","MADE_Tommy_Soft_Regular_PERSONAL_USE_68nLjATZWI7ThoedhTmHm.ttf","MADE_Tommy_Soft_ExtraBold_PERSONAL_USE_cCuBuIHpfAL1-2fKtMxke.ttf","MADE_Tommy_Soft_Medium_PERSONAL_USE_T8GadCvFGpZso1hnmVBfI.ttf","MADE_Tommy_Soft_Black_PERSONAL_USE_1T7xriISs0BFzCBM0_crF.ttf"],H=["MenuBottom_6nCdGTG5GMpdg9qmuXYYK.png","MenuBackground2_ij7gd3YVDd3NavrhcoCLg.jpeg","MenuBackground_e7fvqqBlqaa11tJCsoasu.jpeg"],V=c=>e.jsxs("body",{className:"w-element cpge6mv c150ns9y c1mst3gp c16n8yj6 c12okq1y",children:[e.jsx(f,{children:e.jsx(v,{children:e.jsxs("div",{className:"w-element c1rcwp9c c6qnf29 cocotbn c1jn6rhu ckqnqge c1ygnnz6",children:[e.jsxs("div",{id:"menuPanel",className:"w-element cs56a4i c1q88g40 c1rcwp9c cijvnuu c5xpma7 c1tx64v ck5mkco cjq9hvk c11s6sxg c1nrr0ra c3xzw7x c1jn6rhu c1qv9mnt cytp7st c1jyas9m c1kge0b6 c1it0avu c1yr4i0q c1ui8emr c1vahaew",children:[e.jsxs("div",{className:"w-element c5irknm c1dxwxfj c1wbdp86 cfsdh43 cx9apd0 c1vzm3ui cga7mdt c1nrr0ra c1rcwp9c c6qnf29 cm4mbth",children:[e.jsx("div",{className:"w-element c1qv9mnt c1dxwxfj c1wbdp86 c1c3ey4 cs2ivw",children:e.jsx("a",{className:"w-element c1qv9mnt cfrwjbm c1yr4i0q cm4mbth c1q88g40 cizmy21 c1bqarn4",children:e.jsx(s,{src:"/assets/ClayJamLogo_nWKsPtydQhhT-n7kyAQNV.png",width:1024,height:1024,alt:"",loading:"eager",className:"w-image cocotbn c1s9sxx8 cizmy21 cu6gr9m cm4mbth c1qv9mnt"})})}),e.jsx("div",{className:"w-element c5irknm c1dxwxfj c1wbdp86 c1c3ey4 cs2ivw",children:e.jsx("a",{className:"w-element c1qv9mnt cfrwjbm c1yr4i0q cm4mbth c1q88g40 cizmy21 c1bqarn4",children:e.jsx(s,{src:"/assets/ClayJamLogo_nWKsPtydQhhT-n7kyAQNV.png",width:1024,height:1024,alt:"",loading:"eager",className:"w-image cocotbn c1s9sxx8 cizmy21 cu6gr9m cm4mbth c1qv9mnt"})})})]}),e.jsxs("button",{id:"menuCloseBtn",type:"button",className:"w-element cfrwjbm cm4mbth c1qv9mnt cxa18qx c1agw0d c3xzw7x ctv2s2o c120hvlf",children:["X",e.jsx("br",{}),""]}),e.jsx("div",{className:"w-element c1dlg04g c1p3evlv cytp7st c1f3xknr c16itbmx c58rx46 crslebh cogwwq8"}),e.jsx("div",{className:"w-element c1v22sz2 c150ns9y c1nrr0ra c1bqarn4 c8tzxr9 c1rcwp9c c1ctol9t c1f4b1lu c1p9sp7k c1l4j1cp cfztq2l c6x89h5"})]}),e.jsx(E,{action:{type:"view",animations:[{name:"Fly In",description:"A fly in animation moves an element as it scrolls into view.",keyframes:[{offset:0,styles:{translate:{type:"tuple",value:[{type:"unit",unit:"number",value:0},{type:"unit",unit:"%",value:-200}]}}}],timing:{easing:"var(--ease-spring-5)",fill:"backwards",duration:{type:"unit",value:1,unit:"s"},delay:{type:"unit",value:1,unit:"s"},rangeStart:["entry",{type:"unit",value:0,unit:"%"}],rangeEnd:["entry",{type:"unit",value:100,unit:"%"}]}}],isPinned:!0},children:e.jsxs("button",{id:"menuOpenBtn",type:"button",className:"w-element c1nrr0ra cpsyxhb c1qv9mnt c8u7uij cxa18qx c1agw0d ctv2s2o c120hvlf",children:["=",e.jsx("br",{}),""]})})]})})}),e.jsx("div",{className:"w-element",children:e.jsx(s,{src:"/assets/ClayJamBanner_rUyfQFivdmwlzDUJ-ftk1.webp",width:4096,height:1692,alt:"",className:"w-image"})}),e.jsxs("div",{className:"w-element c5irknm c1dxwxfj c1wbdp86 csnmc3b c1chs3ye cyqq4qh c12kn9gu c1ukj9gi cyj8481 c1q0jplv cld053d c1nkfepf ctxdr7u c6fioo0 c1wm1xuw c1gbbb03 c1u52on4 cfo1jhy c3sbr8s cebv7zi cpaj28x c17v5ttn c1kn7b5a cg255i8 cogibaw",children:[e.jsx("h1",{className:"w-element c1qv9mnt ce2ouha cdvamxw c1wbdp86 clc0rcz cdobf1j ckz4emh c1wh8xrg cq0a4gl c16st1i3 cuwb4 c139r4rw cijvnuu c8u7uij c1bakei2 cx4rw7y c1d3hbxq c118xg31 c14zt9wx c1ott1sc cma0ax5 c1t7j50 cbacxrr c1f2e1v9 c1y62oaz c1k6wex8 c19rmxwf c1rq65in clg2q63 cgifppe cf8lrqh c153kmds c6fioo0 c1vbx10x c1ihgovh c1lv2qdw c1wm1xuw cnkmzvu c1q0jplv cld053d c1ykp4r4 c4vowbf c1t87e71 c1jybqwc c1h2kuip c125ln7k cak8mds c1v2g9jn c125msw0",children:"Clay Jam is coming back!"}),e.jsxs("h1",{className:"w-element c1qv9mnt c1j08waw cdvamxw c1wbdp86 clc0rcz ck9k31j c1jgua1q c1d39p27 c8kplr5 c16st1i3 cuwb4 c139r4rw cijvnuu c8u7uij chctfv8 c1ott1sc cma0ax5 c1t7j50 c16ei9s8 c1uj38a0 c1q2qsqn csi7xzy c14cy7u3 cru16hu c9qjqm4 c166lcgd cf8lrqh c153kmds c6fioo0 c19cgoyb chmobus c1wi7zkc c1wm1xuw c116ela6 c39ywid cmwn3mo c2rfmra c1h2kuip c125ln7k c1m0jtft cc80hx5 c1kdu3tt",children:["We’ve been away for a while and we’ve let things slip a bit. We’re sooo sorry. ",e.jsx("br",{}),"",e.jsx("br",{}),"But not long ago, we started looking at all the places Clay Jam lived, and saw people still posting messages and talking about it. It was lovely. It brought a tear to our collective eye. Thank you. Really. It means so much.",e.jsx("br",{}),"",e.jsx("br",{}),"So we’re bringing Clay Jam back to the stores again! We’re not sure exactly when or how yet, but it will happen. Feel free to let us know what you think!"]}),e.jsxs("div",{className:"w-element c5irknm c1dxwxfj c1wbdp86 csnmc3b c1chs3ye crv9ws9 c12kn9gu c1ukj9gi cyj8481 c1q0jplv cld053d c1nkfepf ctxdr7u c3ih7vu c1gbbb03 c1u52on4 cfo1jhy c3sbr8s cebv7zi cpaj28x c17v5ttn c1kn7b5a cg255i8 cogibaw c16mbnh6 cd0mt7v c7klx50 c1b0nswz ccy6vst",children:[e.jsxs("h1",{className:"w-element c5irknm c1j08waw cdvamxw c1wbdp86 clc0rcz ck9k31j c1jgua1q c1d39p27 c58rx46 c16st1i3 cuwb4 c139r4rw cijvnuu c8u7uij chctfv8 c1ott1sc cma0ax5 c1t7j50 c16ei9s8 c1uj38a0 c1q2qsqn csi7xzy c14cy7u3 cru16hu cv0v1z5 c9qjqm4 c166lcgd cf8lrqh c153kmds c6fioo0 c8re0l9 c118tio6 c1wi7zkc c1wm1xuw c116ela6 c1q0jplv cmwn3mo c2rfmra c1h2kuip c125ln7k c1m0jtft cc80hx5 c1kdu3tt",children:["We’ll be keeping everyone up to date here and:",e.jsx("br",{}),""]}),e.jsx("div",{className:"w-element c1rcwp9c c5irknm c1dxwxfj c1wbdp86 cse74hn",children:e.jsxs("div",{className:"w-element c18p3w7y c5irknm c1wbdp86 concd52 c1fcgjwq cgfxysq cdd5klg c1rq65in c1xmziad cew45dn c1w1ixh7 c2bfs38 c1lv2qdw c1wm1xuw",children:[e.jsx("a",{href:"https://www.instagram.com/clayjamgame/",className:"w-element c95aqtx c1fd2l0y chid1f0",children:e.jsx(s,{src:"/assets/Instagram_ONS6GyyfdThiGu8V7EeGU.png",width:128,height:128,alt:"",className:"w-image"})}),e.jsx("a",{href:"https://www.threads.com/@clayjamgame",className:"w-element c95aqtx c1fd2l0y chid1f0",children:e.jsx(s,{src:"/assets/Threads_EXRtFYgUu21GfkyF-s-HB.png",width:128,height:256,alt:"",className:"w-image"})}),e.jsx("a",{href:"https://www.facebook.com/OriginalClayJam/",className:"w-element c95aqtx c1fd2l0y chid1f0",children:e.jsx(s,{src:"/assets/Facebook_dFNIP1pr3Ji6R38aKgKf0.png",width:128,height:128,alt:"",className:"w-image"})}),e.jsx("a",{href:"https://www.tiktok.com/@clay.jam",className:"w-element c95aqtx c1fd2l0y chid1f0",children:e.jsx(s,{src:"/assets/Tiktok_bUOphc8dqUHIEv3alETXn.png",width:128,height:128,alt:"",className:"w-image"})}),e.jsx("a",{href:"https://www.youtube.com/@ClayJamOriginal",className:"w-element c95aqtx c1fd2l0y chid1f0",children:e.jsx(s,{src:"/assets/Youtube_HwVwYqfktuNsv5KLOoAZ9.png",width:128,height:128,alt:"",className:"w-image"})}),e.jsx("a",{href:"https://bsky.app/profile/clayjam.bsky.social",className:"w-element c95aqtx chid1f0 c1fd2l0y",children:e.jsx(s,{src:"/assets/Bluesky_vErfM2BVKGDTvACCgEhGu.png",width:128,height:128,alt:"",className:"w-image"})})]})}),e.jsxs("h1",{className:"w-element c5irknm c1j08waw cdvamxw c1wbdp86 clc0rcz ck9k31j c1jgua1q c1d39p27 c8kplr5 c16st1i3 cuwb4 c139r4rw cijvnuu c8u7uij chctfv8 c1ott1sc cma0ax5 c1t7j50 c16ei9s8 c1uj38a0 c1q2qsqn csi7xzy c14cy7u3 cru16hu c9qjqm4 c166lcgd cf8lrqh c153kmds c6fioo0 c8re0l9 c118tio6 c1wi7zkc c1wm1xuw c116ela6 c1q0jplv cmwn3mo c2rfmra c1h2kuip c125ln7k c1m0jtft cc80hx5 c1kdu3tt cujbbxo c1fcgjwq",children:["Thanks again for sticking with us. This second chance exists because of all of you lovely people.",e.jsx("br",{}),"",e.jsx("br",{}),"Let’s roll!",e.jsx("br",{}),"",e.jsx("br",{}),"Chris, Iain and Michael"]})]})]}),e.jsx("div",{className:"w-element c5irknm c58rx46 c1q88g40 c96h8eg c1dxwxfj c1vzm3ui c125ln7k cn4t7bw c17y4rq0",children:e.jsx("div",{className:"w-element c1rcwp9c c5irknm c1dxwxfj c1wbdp86 cse74hn cdd5klg",children:e.jsxs("div",{className:"w-element c18p3w7y c5irknm c1wbdp86 concd52 c1v2g9jn c12jt7do c1bshdme c19iyvbv c1rq65in c1xmziad cew45dn c1w1ixh7 c2bfs38 c1lv2qdw c1wm1xuw",children:[e.jsx(s,{src:"/assets/ClayJamScreenshot_iPad_01_KErxSyxq3MHr5gKlVQTDA.webp",width:2064,height:2752,alt:"",className:"w-image c1qv9mnt c166wf8t chla53u c1lxq98w c13jdt9c c1h2vb8t c11vqzmm"}),e.jsx(s,{src:"/assets/ClayJamScreenshot_iPad_06_c69tki39ahHkdXJmBbInh.webp",width:2151,height:2868,alt:"",className:"w-image c1qv9mnt c166wf8t chla53u c11vqzmm"}),e.jsx(s,{src:"/assets/ClayJamScreenshot_iPad_11_hSPjy0efUUkOponog-s6A.webp",width:2151,height:2868,alt:"",className:"w-image c1qv9mnt c166wf8t chla53u c11vqzmm"}),e.jsx(s,{src:"/assets/ClayJamScreenshot_iPad_09_6PJ1pG5SXFIKpSiiAVAic.webp",width:2151,height:2868,alt:"",className:"w-image c1qv9mnt c166wf8t chla53u c11vqzmm"}),e.jsx(s,{src:"/assets/ClayJamScreenshot_iPad_12_QtSacZCuUcfMmOzS1s6qe.webp",width:2151,height:2868,alt:"",className:"w-image c1qv9mnt c166wf8t chla53u c11vqzmm"}),e.jsx(s,{src:"/assets/ClayJamScreenshot_iPad_14_0a8ZHjwz9wUaQOdgPDXpo.webp",width:2151,height:2868,alt:"",className:"w-image c1qv9mnt c166wf8t chla53u c11vqzmm"})]})})}),e.jsx(C,{code:`<style>
  /* Drawer base styles (closed by default) */
  #menuPanel {
    transform: translateY(-125%);
    /*transition: transform 300ms cubic-bezier(.2, 1, .2, 1);*/
    will-change: transform;
  }

  /* Open state */
  #menuPanel.is-open {
    transform: translateX(0);
  }

  /* Optional overlay support (only if you have #menuOverlay) */
  #menuOverlay {
    opacity: 0;
    pointer-events: none;
    transition: opacity 200ms ease;
  }
  #menuOverlay.is-open {
    opacity: 1;
    pointer-events: auto;
  }

  /* Debug badge styles (only created when DEBUG=true) */
  #wsDrawerDebug {
    position: fixed;
    bottom: 12px;
    left: 12px;
    z-index: 99999;
    font: 12px/1.2 system-ui, sans-serif;
    padding: 6px 8px;
    border-radius: 8px;
    background: rgba(0,0,0,0.75);
    color: #fff;
  }
</style>

<script>
(function () {
  // Toggle this whenever you want the on-page debug badge
  const DEBUG = false;

  // IDs to match what you set in Webstudio
  const ids = {
    openBtn: "menuOpenBtn",
    closeBtn: "menuCloseBtn",
    panel: "menuPanel",
    overlay: "menuOverlay" // optional; remove if you don't use an overlay
  };

  // --- Debug badge helpers ---
  function setBadge(text) {
    if (!DEBUG) return;
    let badge = document.getElementById("wsDrawerDebug");
    if (!badge) {
      badge = document.createElement("div");
      badge.id = "wsDrawerDebug";
      document.body.appendChild(badge);
    }
    badge.textContent = text;
  }

  // Remove existing badge if debug is off
  if (!DEBUG) {
    const old = document.getElementById("wsDrawerDebug");
    if (old) old.remove();
  }

  // --- Init (safe to rerun) ---
  const openBtn  = document.getElementById(ids.openBtn);
  const closeBtn = document.getElementById(ids.closeBtn);
  const panel    = document.getElementById(ids.panel);
  const overlay  = document.getElementById(ids.overlay); // may be null

  setBadge(
    "Drawer script: " +
    (openBtn ? "open✅ " : "open❌ ") +
    (closeBtn ? "close✅ " : "close❌ ") +
    (panel ? "panel✅ " : "panel❌ ") +
    (overlay ? "overlay✅" : "overlay(—)")
  );

  if (!openBtn || !closeBtn || !panel) return;

  // Avoid stacking listeners if the script runs multiple times in the editor
  openBtn.onclick = null;
  closeBtn.onclick = null;
  if (overlay) overlay.onclick = null;

  function open() {
    panel.classList.add("is-open");
    if (overlay) overlay.classList.add("is-open");
    setBadge("Drawer: OPEN ✅");
document.body.style.overflow = "hidden";
  }

  function close() {
    panel.classList.remove("is-open");
    if (overlay) overlay.classList.remove("is-open");
    setBadge("Drawer: CLOSED ✅");
document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  if (overlay) overlay.addEventListener("click", close);

  setBadge((DEBUG ? document.getElementById("wsDrawerDebug").textContent + " | bound✅" : ""));

  // Optional: close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
<\/script>
`,executeScriptOnCanvas:!0,clientOnly:!1,className:"w-html-embed c1nrr0ra"}),e.jsx(f,{children:e.jsx(v,{children:e.jsxs("div",{className:"w-element ce9a5py c1qv9mnt cijvnuu c1wbdp86 c1dxwxfj c1lv2qdw c3ih7vu c189x9r3 c58p2x7 cjzic72 c1s0htj4 cpaj28x c2xzh1b",children:[e.jsx("div",{className:"w-element c1la9w1r ch3ydup crspg2t c1nkfepf c58p2x7 c105e88o"}),e.jsxs("div",{className:"w-element c1qv9mnt ch3ydup c1la9w1r",children:[e.jsx("p",{className:"w-element c1ekuuvi c6dq9gx c1dxwxfj cijvnuu c1wbdp86 cxliina cfdl3q5 cxiqqfz c8sfynd c157l4vo c1q88g40 clc0rcz c1d39p27 ck9k31j cojz0hr c1f81211 c1q2qsqn c1jak24n c17ajub cpaj28x c17v5ttn c1butdj1 c16ei9s8 c1kdu3tt cu3m79x cc80hx5 c19xyy4k c13ddmtg cc05m8o",children:"Contact us: "}),e.jsx("a",{href:"mailto:info@yumyumyukyuk.com?subject=Hello",className:"w-element c6dq9gx ce2ouha cxliina clc0rcz c13ddmtg c1jak24n",children:"info@yumyumyukyuk.com"})]}),e.jsx("div",{className:"w-element c1la9w1r ch3ydup c1nkfepf c58p2x7 c4dq6bo",children:e.jsxs("p",{className:"w-element c1ekuuvi c5irknm c1dxwxfj cijvnuu c1wbdp86 c1sii5lv cfdl3q5 cxiqqfz c8sfynd c157l4vo c1q88g40 clc0rcz c1d39p27 ck9k31j c1bakei2 c1f81211 c1q2qsqn c1jak24n c17ajub c5itlne c1kdu3tt cu3m79x cc80hx5 c1xuhquw c1r0qhew cc05m8o",children:["© 2026 YumYumYukYuk Ltd. All rights reserved.",e.jsx("br",{}),"Company No. 16952912. Registered in England and Wales."]})}),e.jsx("div",{className:"w-element c1la9w1r ch3ydup crspg2t c1nkfepf c58p2x7 c105e88o"})]})})})]}),F=({data:c})=>{const{system:t,resources:n,url:a,pageMeta:i}=c;return e.jsxs(j.Provider,{value:{imageLoader:w,assetBaseUrl:u,resources:n,breakpoints:U,onError:console.error},children:[e.jsx(V,{system:t},a),e.jsx(_,{url:a,pageMeta:i,siteName:k,imageLoader:w,assetBaseUrl:u}),e.jsx(z,{children:i.title})]})},W=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),J=({})=>{const c={"@context":"https://schema.org","@type":"WebSite",name:k};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(c,null,2)}}),e.jsx("link",{rel:"icon",href:w({src:`${u}${M}`})}),R.map(t=>e.jsx("link",{rel:"preload",href:`${u}${t}`,as:"font",crossOrigin:"anonymous"},t)),H.map(t=>e.jsx("link",{rel:"preload",href:`${u}${t}`,as:"image"},t))]})},G=Object.freeze(Object.defineProperty({__proto__:null,Head:J},Symbol.toStringTag,{value:"Module"})),Z={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/clayjam/clayjam/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:W}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/clayjam/clayjam/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:G}}};export{Z as configValuesSerialized};
