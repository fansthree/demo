import{T as b,b as w,g as c,e as $,s as v}from"./index-1767a6e6.js";import{l as f}from"./logo-637148f3.js";import{t as m,s as x,A as y}from"./utils-964c3991.js";import{S}from"./time-8b7fa869.js";import{a as P,j as g,x as i,h as H,m as l,n,t as a,e as k}from"./vendor-dd3f77fa.js";var F=Object.defineProperty,j=Object.getOwnPropertyDescriptor,r=(t,e,o,d)=>{for(var h=d>1?void 0:d?j(e,o):e,u=t.length-1,p;u>=0;u--)(p=t[u])&&(h=(d?p(e,o,h):p(h))||h);return d&&h&&F(e,o,h),h};let s=class extends b({}){constructor(){super(...arguments),this.bindBridge=new P(this,w),this.shareHolder="",this.buying=!1,this.selling=!1,this.linking=!0,this.supply=0,this.updateSupply=c("Fans3Shares").then(t=>t.sharesSupply(this.shareHolder).then(e=>(this.supply=e,e)).catch(()=>0)),this.price=c("Fans3Shares").then(t=>t.getBuyPrice(this.shareHolder,1).then(e=>g(e))),this.buyPrice=c("Fans3Shares").then(t=>t.getBuyPrice(this.shareHolder,1).then(e=>g(e))),this.sellPrice=c("Fans3Shares").then(t=>t.getSellPrice(this.shareHolder,1).then(e=>g(e))),this.holders=c("Fans3Shares").then(t=>t.getFansOfSubject(this.shareHolder).then(e=>i`<ul>${H(e,o=>i`<li>${o}(${l(m(o),i`<i class="text-sm mdi mdi-loading"></i>`)}): ${l(x(this.account,o))}</li>`)}</ul>`))}connectedCallback(){super.connectedCallback(),$.on("wallet-changed",async()=>{this.linking=!0,this.twitter="",await this.updateTwitter()})}updateTwitter(){return this.account?fetch(y+"/user?address="+this.account).then(t=>t.json()).then(t=>(this.twitter=t,"")).finally(()=>{this.linking=!1}):Promise}get account(){return w.account}async link(){for(this.linking=!0;;){try{let t=await fetch(y+"/user?address="+this.account,{mode:"no-cors"});this.twitter=await t.json();return}catch(t){console.log(t)}await v(S)}}async buy(){this.buying=!0;try{let t=await c("Fans3Shares"),e=await t.getBuyPriceAfterFee(this.shareHolder,1);await(await t.buyShares(this.shareHolder,1,{value:e})).wait()}catch(t){this.err=t}this.buying=!1}async sell(){this.selling=!0;try{await(await(await c("Fans3Shares")).sellShares(this.shareHolder,1)).wait()}catch(t){this.err=t}this.selling=!1}render(){return i`<div class="home"><div class="ui-container my-4"><img class="w-24 object-contain select-none pointer-events-none" src="${f}"></div><div class="ui-container">${n(this.err,()=>i`<span class="text-red-500">${this.err}</span>`)}<div class="my-4">Wallet Address:<connect-wallet-btn></connect-wallet-btn>${n(this.twitter,()=>i`<br>Twitter: ${this.twitter.name}`)}</div><div class="my-4"><span>You are viewing ${this.shareHolder}(${l(m(this.shareHolder),i`<i class="text-sm mdi mdi-loading"></i>`)})'s shares</span><br><span>Holding: ${l(this.updateSupply,i`<i class="text-sm mdi mdi-loading"></i>`)}</span><br><span>Price: ${l(this.price,i`<i class="text-sm mdi mdi-loading"></i>`)}</span></div><div class="my-4 ${n(this.account,()=>"hidden")}">Connect your wallet to buy/sell shares</div>${n(this.account&&!this.twitter,()=>(this.updateTwitter(),i`<div class="my-4">Link your twitter to continue<ui-button href="${y}/login?address=${this.account}" @click="${this.link}" class="ml-2 ${n(this.twitter,()=>"hidden")}" ?disabled="${this.linking}" sm>${n(this.linking,()=>i`<i class="ml-2 text-sm mdi mdi-loading"></i>`,()=>"Link")}</ui-button></div>`))}<div class="my-4">Buy price: ${l(this.buyPrice,i`<i class="ml-2 text-sm mdi mdi-loading"></i>`)}<ui-button sm class="m-2" ?disabled="${this.buying}" @click="${this.buy}">Buy${n(this.buying,()=>i`<i class="ml-2 text-sm mdi mdi-loading"></i>`)}</ui-button><br>Sell price: ${l(this.sellPrice,i`<i class="ml-2 text-sm mdi mdi-loading"></i>`)}<ui-button sm class="m-2" ?disabled="${this.selling}" @click="${this.sell}">Sell${n(this.selling,()=>i`<i class="ml-2 text-sm mdi mdi-loading"></i>`)}</ui-button></div><div class="my-4"><span class="my-2">Holdings: of ${this.shareHolder}(${l(m(this.shareHolder),i`<i class="text-sm mdi mdi-loading"></i>`)})</span><br>${n(this.supply,()=>i`${l(this.holders,i`<i class="ml-2 text-sm mdi mdi-loading"></i>`)}`)}</div></div></div>`}};r([a()],s.prototype,"twitter",2);r([a()],s.prototype,"shareHolder",2);r([a()],s.prototype,"buying",2);r([a()],s.prototype,"selling",2);r([a()],s.prototype,"linking",2);r([a()],s.prototype,"err",2);r([a()],s.prototype,"supply",2);r([a()],s.prototype,"updateSupply",2);r([a()],s.prototype,"price",2);r([a()],s.prototype,"buyPrice",2);r([a()],s.prototype,"sellPrice",2);r([a()],s.prototype,"holders",2);s=r([k("view-ex")],s);export{s as ViewEx};
