if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>n(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(i.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-04110d4e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"72d9db6f0005df5f1d575f2cbfbe9f09"},{url:"assets/constants-df4c2998.js",revision:null},{url:"assets/Erc1155-e3b3e26f.js",revision:null},{url:"assets/Erc721-06d68796.js",revision:null},{url:"assets/Fans3Shares-2bc95406.js",revision:null},{url:"assets/Fans3Shares-b0912c12.js",revision:null},{url:"assets/index-06dbd883.js",revision:null},{url:"assets/index-1e804f21.css",revision:null},{url:"assets/index-2af1e829.js",revision:null},{url:"assets/index-3209d22e.js",revision:null},{url:"assets/index-68798d53.js",revision:null},{url:"assets/index-6cb5f930.js",revision:null},{url:"assets/index-c83ebc17.js",revision:null},{url:"assets/index-d17d419f.js",revision:null},{url:"assets/index-d1edf096.js",revision:null},{url:"assets/index-d2432808.js",revision:null},{url:"assets/index-d86e2183.js",revision:null},{url:"assets/index-d9f00c05.js",revision:null},{url:"assets/index-fe06ba43.js",revision:null},{url:"assets/logo-75b1f9fa.js",revision:null},{url:"assets/logo-fe282105.js",revision:null},{url:"assets/utils-773617f3.js",revision:null},{url:"assets/vendor-38c8194b.js",revision:null},{url:"assets/vendor-7f493a3a.js",revision:null},{url:"assets/vendor-de9f6d0d.js",revision:null},{url:"index.html",revision:"72d9db6f0005df5f1d575f2cbfbe9f09"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"f0744947a19d59fee715b4a273b3c04a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
