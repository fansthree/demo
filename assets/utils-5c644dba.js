import{T as y,b as u,a as w,c as x,W as S,e as v,g as _}from"./index-69b2d980.js";import{a as m,x as l,n as B,f as n,e as $,l as f,t as k}from"./vendor-38c8194b.js";const A=`:host{display:inline-flex;align-items:center}
`;var C=Object.defineProperty,P=Object.getOwnPropertyDescriptor,p=(o,t,i,r)=>{for(var e=r>1?void 0:r?P(t,i):t,d=o.length-1,c;d>=0;d--)(c=o[d])&&(e=(r?c(t,i,e):c(e))||e);return r&&e&&C(t,i,e),e};let b=class extends y(A){constructor(){super(...arguments),this.bindBridge=new m(this,u),this.bindScreen=new m(this,w),this.short=!1}get addr(){return typeof this.address=="string"?this.address:u.bridge.account}get isLink(){return typeof this.href=="string"}get showAddr(){return this.short||w.screen.isMobi?x(this.addr):this.addr}render(){return l`${B(this.isLink,()=>l`<ui-link href="${this.href}">${this.showAddr}</ui-link>`,()=>l`${this.showAddr}`)}`}};p([n()],b.prototype,"address",2);p([n({type:Boolean})],b.prototype,"short",2);p([n()],b.prototype,"href",2);b=p([$("ui-address")],b);const O=`[disabled]:host,:host:disabled,.disabled:host,.pending:host{pointer-events:none;cursor:not-allowed}.ui-button{gap:.25rem;border-radius:.375rem;border-width:1px;--tw-border-opacity: 1;border-color:#000;border-color:rgba(0,0,0,var(--tw-border-opacity));padding-top:.5rem;padding-bottom:.5rem;font-size:.875rem;line-height:1.25rem;line-height:1.25;--tw-text-opacity: 1;color:#000;color:rgba(0,0,0,var(--tw-text-opacity))}@media (min-width: 640px){.ui-button{font-size:1rem;line-height:1.5rem}}.ui-button{background:var(--btnBg);transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.ui-button:not([dense]){padding-left:.875rem;padding-right:.875rem}.ui-button:not([disabled]):hover{background:var(--btnBgHover);border-color:var(--btnBgHover)}.ui-button:not([disabled]):active{background:var(--btnBgActive);border-color:var(--btnBgActive)}.ui-button[disabled],.ui-button:disabled,.ui-button[pending],.ui-button.pending{pointer-events:none!important;cursor:not-allowed!important;background:#aaa!important}.ui-button.outlined[disabled],.ui-button.outlined:disabled,.ui-button.outlined[pending],.ui-button.pending.outlined{opacity:.75}.ui-button.outlined{background-color:transparent!important}.ui-button.outlined{color:var(--btnBg);border:1px solid}.ui-button.outlined:not([disabled]):hover{background:#fff;color:var(--btnBg);border:1px solid}.ui-button.outlined:not([disabled]):active{background:#f6f6f6;color:var(--btnBg);border:1px solid}.ui-button.secondary{background:var(--btnBgSecondary)}.ui-button.secondary:not([disabled]):hover{background:var(--btnBgSecondaryHover);border-color:var(--btnBgSecondaryHover)}.ui-button.secondary:not([disabled]):active{background:var(--btnBgSecondaryActive);border-color:var(--btnBgSecondaryActive)}.ui-button.secondary.outlined,.ui-button.secondary.outlined:hover,.ui-button.secondary.outlined:active{color:var(--btnBgSecondary)}.ui-button.minor{background:var(--btnBgSecondary)}.ui-button.minor:not([disabled]):hover{background:var(--btnBgSecondaryHover);border-color:var(--btnBgSecondaryHover)}.ui-button.minor:not([disabled]):active{background:var(--btnBgSecondaryActive);border-color:var(--btnBgSecondaryActive)}.ui-button.minor.outlined,.ui-button.minor.outlined:hover,.ui-button.minor.outlined:active{color:var(--btnBgSecondary)}.ui-button.success{background:var(--btnBgSuccess)}.ui-button.success:not([disabled]):hover{background:var(--btnBgSuccessHover);border-color:var(--btnBgSuccessHover)}.ui-button.success:not([disabled]):active{background:var(--btnBgSuccessActive);border-color:var(--btnBgSuccessActive)}.ui-button[text]{color:var(--btnBg);border-color:transparent;background-color:transparent}.ui-button[text]:hover,.ui-button[text]:active{color:var(--btnBg);background-color:transparent}.ui-button[icon]{border-radius:50%;display:inline-flex;height:2rem;width:2rem;align-items:center;justify-content:center;background-color:transparent;color:currentColor}.ui-button[icon]:hover,.ui-button[icon]:active{--tw-text-opacity: 1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.ui-button[sm]{padding-top:.375rem;padding-bottom:.375rem;font-size:.875rem;line-height:1.25rem}.ui-button[sm]:not([dense]){padding-left:.625rem;padding-right:.625rem}.ui-button[sm][icon]{height:2rem;width:2rem}.ui-button[theme=dark]{background:var(--colorDark)!important}
`;var D=Object.defineProperty,I=Object.getOwnPropertyDescriptor,a=(o,t,i,r)=>{for(var e=r>1?void 0:r?I(t,i):t,d=o.length-1,c;d>=0;d--)(c=o[d])&&(e=(r?c(t,i,e):c(e))||e);return r&&e&&D(t,i,e),e};let s=class extends y(O){constructor(){super(),this.label="",this.iconPos="left",this.class="",this.disabled=!1,this.pending=!1,this.icon=!1,this.text=!1,this.sm=!1,this.dense=!1,this.addEventListener("click",o=>{this.blocked&&o.stopImmediatePropagation()})}get isAnchor(){return typeof this.href<"u"}get rel(){return this.isAnchor&&/^http/.test(this.href)?"noopener":""}get target(){return this.rel?"_blank":""}get blocked(){return this.disabled||this.pending}get iconLeft(){return["both","left"].includes(this.iconPos)}render(){return l`${B(this.isAnchor,()=>l`<a part="ui-button" href="${f(this.href)}" target="${f(this.target)}" rel="${f(this.rel)}" class="ui-button ${this.class}" ?icon="${this.icon}" ?dense="${this.dense}" ?disabled="${this.blocked}" ?pending="${this.pending}" ?text="${this.text}" ?sm="${this.sm}" theme="${this.theme}"><slot></slot></a>`,()=>l`<button part="ui-button" type="button" class="ui-button ${this.class}" ?icon="${this.icon}" ?dense="${this.dense}" ?disabled="${this.blocked}" ?pending="${this.pending}" ?text="${this.text}" ?sm="${this.sm}" theme="${this.theme}"><slot></slot></button>`)}`}};a([n({type:String})],s.prototype,"label",2);a([n({type:String})],s.prototype,"iconPos",2);a([n({type:String})],s.prototype,"class",2);a([n()],s.prototype,"href",2);a([n({type:Boolean})],s.prototype,"disabled",2);a([n({type:Boolean})],s.prototype,"pending",2);a([n({type:Boolean})],s.prototype,"icon",2);a([n({type:Boolean})],s.prototype,"text",2);a([n({type:Boolean})],s.prototype,"sm",2);a([n({type:Boolean})],s.prototype,"dense",2);a([n({type:String,reflect:!0})],s.prototype,"theme",2);s=a([$("ui-button")],s);const L="";var N=Object.defineProperty,j=Object.getOwnPropertyDescriptor,g=(o,t,i,r)=>{for(var e=r>1?void 0:r?j(t,i):t,d=o.length-1,c;d>=0;d--)(c=o[d])&&(e=(r?c(t,i,e):c(e))||e);return r&&e&&N(t,i,e),e};let h=class extends y(L){constructor(){super(...arguments),this.bindBridge=new m(this,u),this.dropable=!1,this.dialog=!1,this.pending=!1,this.show=()=>{this.dropable&&this.account||this.connect()}}get account(){return u.account}get addr(){var o;return(o=u.bridge)==null?void 0:o.shortAccount}get scan(){var o,t;return`${(o=u.bridge)==null?void 0:o.network.current.scan}/address/${(t=u.bridge)==null?void 0:t.account}`}get connecting(){return[S.CONNECTING,S.INSTALLING].includes(u.bridge.state)}close(){this.pending=!1}async connect(){this.pending=!0;try{await u.bridge.select(0)}catch{this.close()}u.bridge.isConnected&&(this.close(),v.emit("wallet-connected"))}connectedCallback(){super.connectedCallback(),v.on("connect-wallet",this.show)}disconnectedCallback(){super.disconnectedCallback(),v.off("connect-wallet",this.show)}render(){return this.account?l`<ui-address slot="button" avatar short></ui-address>`:l`<ui-button ?pending="${this.pending}" sm @click="${this.connect}" theme="dark">Connect ${B(this.pending,()=>l`<i class="ml-1 mdi mdi-loading"></i>`)}</ui-button>`}};g([n({type:Boolean})],h.prototype,"dropable",2);g([k()],h.prototype,"dialog",2);g([k()],h.prototype,"pending",2);h=g([$("connect-wallet-btn")],h);const U="/assets/logo-18677076.svg",H="0x9afe95fd31bc74c30ca1d326d92a80159e22eb14",E="https://fans3-server-46szvdni7q-uc.a.run.app",T=1,W=T*1e3,G=o=>fetch(E+"/user?address="+o).then(t=>t.json()).then(t=>l`<a class="ui-link" target="_blank" href="https://twitter.com/intent/user?user_id=${t.t_id}">${t.name}</a>`),M=(o,t)=>_("Fans3Shares",{address:H}).then(i=>i.sharesBalance(o,t).then(r=>r).catch(()=>0));export{E as A,H as C,W as S,M as h,U as l,G as t};
