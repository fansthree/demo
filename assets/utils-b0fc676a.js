import{g as s}from"./index-cb89bee1.js";import{x as a}from"./vendor-dd3f77fa.js";const i="https://fans3-server-46szvdni7q-uc.a.run.app",o=r=>fetch(i+"/user?address="+r).then(t=>t.json()).then(t=>a`<ui-link link href="https://twitter.com/intent/user?user_id=${t.t_id}">${t.name}</ui-link>`),c=(r,t)=>s("Fans3Shares").then(e=>e.sharesBalance(r,t).then(n=>n).catch(()=>0));export{i as A,c as h,o as t};
