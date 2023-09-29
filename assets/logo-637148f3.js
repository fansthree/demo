import{T as v,b,c as m,d as P,W as $,e as h}from"./index-1767a6e6.js";import{a as x,x as l,n as y,f as a,e as k,l as f,t as _}from"./vendor-dd3f77fa.js";const C=`:host{display:inline-flex;align-items:center}
`;var B=Object.defineProperty,O=Object.getOwnPropertyDescriptor,g=(r,t,s,e)=>{for(var o=e>1?void 0:e?O(t,s):t,c=r.length-1,d;c>=0;c--)(d=r[c])&&(o=(e?d(t,s,o):d(o))||o);return e&&o&&B(t,s,o),o};let p=class extends v(C){constructor(){super(...arguments),this.bindBridge=new x(this,b),this.bindScreen=new x(this,m),this.short=!1}get addr(){return typeof this.address=="string"?this.address:b.bridge.account}get isLink(){return typeof this.href=="string"}get showAddr(){return this.short||m.screen.isMobi?P(this.addr):this.addr}render(){return l`${y(this.isLink,()=>l`<ui-link href="${this.href}">${this.showAddr}</ui-link>`,()=>l`${this.showAddr}`)}`}};g([a()],p.prototype,"address",2);g([a({type:Boolean})],p.prototype,"short",2);g([a()],p.prototype,"href",2);p=g([k("ui-address")],p);const A=`[disabled]:host,:host:disabled,.disabled:host,.pending:host{pointer-events:none;cursor:not-allowed}.ui-button{display:inline-block;border-radius:.25rem;--tw-bg-opacity: 1;background-color:#3b71ca;background-color:rgba(59,113,202,var(--tw-bg-opacity));padding:.625rem 1.5rem .5rem;font-weight:500;line-height:1.5;--tw-text-opacity: 1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity));--tw-shadow: 0 4px 9px -4px #3b71ca;--tw-shadow-colored: 0 4px 9px -4px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 9px -4px #3b71ca;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow);transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.ui-button:not([dense]){padding-left:.875rem;padding-right:.875rem}.ui-button:not([disabled]):hover{--tw-bg-opacity: 1;background-color:#3061af;background-color:rgba(48,97,175,var(--tw-bg-opacity));--tw-shadow: 0 8px 9px -4px rgba(59,113,202,.3),0 4px 18px 0 rgba(59,113,202,.2);--tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 8px 9px -4px #3b71ca4d,0 4px 18px #3b71ca33;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}.ui-button:not([disabled]):active{--tw-bg-opacity: 1;background-color:#285192;background-color:rgba(40,81,146,var(--tw-bg-opacity));--tw-shadow: 0 8px 9px -4px rgba(59,113,202,.3),0 4px 18px 0 rgba(59,113,202,.2);--tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 8px 9px -4px #3b71ca4d,0 4px 18px #3b71ca33;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}.ui-button:not([disabled]):focus{--tw-bg-opacity: 1;background-color:#3061af;background-color:rgba(48,97,175,var(--tw-bg-opacity));--tw-shadow: 0 8px 9px -4px rgba(59,113,202,.3),0 4px 18px 0 rgba(59,113,202,.2);--tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 8px 9px -4px #3b71ca4d,0 4px 18px #3b71ca33;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ui-button[disabled],.ui-button:disabled,.ui-button[pending],.ui-button.pending{pointer-events:none!important;cursor:not-allowed!important;background:#aaa!important}.ui-button.outlined[disabled],.ui-button.outlined:disabled,.ui-button.outlined[pending],.ui-button.pending.outlined{opacity:.75}.ui-button.outlined{display:inline-block;border-radius:.25rem;border-width:2px;--tw-border-opacity: 1;border-color:#3b71ca;border-color:rgba(59,113,202,var(--tw-border-opacity));background-color:transparent;padding-left:1.5rem;padding-right:1.5rem;padding-bottom:6px;padding-top:.5rem;font-weight:500;line-height:1.5;--tw-text-opacity: 1;color:#3b71ca;color:rgba(59,113,202,var(--tw-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ui-button.outlined:not([disabled]):hover{--tw-border-opacity: 1;border-color:#3061af;border-color:rgba(48,97,175,var(--tw-border-opacity));background-color:#7373731a;background-color:rgba(115,115,115,var(--tw-bg-opacity));--tw-bg-opacity: .1;--tw-text-opacity: 1;color:#3061af;color:rgba(48,97,175,var(--tw-text-opacity))}.ui-button.outlined:not([disabled]):active{--tw-border-opacity: 1;border-color:#285192;border-color:rgba(40,81,146,var(--tw-border-opacity));background-color:#7373731a;background-color:rgba(115,115,115,var(--tw-bg-opacity));--tw-bg-opacity: .1;--tw-text-opacity: 1;color:#285192;color:rgba(40,81,146,var(--tw-text-opacity))}.ui-button.outlined:not([disabled]):focus{--tw-border-opacity: 1;border-color:#3061af;border-color:rgba(48,97,175,var(--tw-border-opacity));background-color:#7373731a;background-color:rgba(115,115,115,var(--tw-bg-opacity));--tw-bg-opacity: .1;--tw-text-opacity: 1;color:#3061af;color:rgba(48,97,175,var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 rgba(0,0,0,0))}.ui-button.secondary{display:inline-block;border-radius:.25rem;--tw-bg-opacity: 1;background-color:#e3ebf7;background-color:rgba(227,235,247,var(--tw-bg-opacity));padding:.625rem 1.5rem .5rem;font-weight:500;line-height:1.5;--tw-text-opacity: 1;color:#285192;color:rgba(40,81,146,var(--tw-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ui-button.secondary:not([disabled]):hover{--tw-bg-opacity: 1;background-color:#d9e4f3;background-color:rgba(217,228,243,var(--tw-bg-opacity))}.ui-button.secondary:not([disabled]):active{--tw-bg-opacity: 1;background-color:#cedbee;background-color:rgba(206,219,238,var(--tw-bg-opacity))}.ui-button.secondary:not([disabled]):focus{--tw-bg-opacity: 1;background-color:#d9e4f3;background-color:rgba(217,228,243,var(--tw-bg-opacity));outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 rgba(0,0,0,0))}.ui-button.secondary.outlined{--tw-border-opacity: 1;border-color:#e3ebf7;border-color:rgba(227,235,247,var(--tw-border-opacity));background-color:transparent}.ui-button.secondary.outlined:hover,.ui-button.secondary.outlined:active,.ui-button.secondary.outlined:focus{--tw-border-opacity: 1;border-color:#e3ebf7;border-color:rgba(227,235,247,var(--tw-border-opacity));background-color:transparent;background-color:#7373731a;--tw-bg-opacity: .1}@supports (color: rgb(0 0 0 / 0)) and (top: var(--f)){.ui-button.secondary.outlined:hover,.ui-button.secondary.outlined:active,.ui-button.secondary.outlined:focus{background-color:rgb(115 115 115 / var(--tw-bg-opacity))}}.ui-button.minor{display:inline-block;border-radius:.25rem;--tw-bg-opacity: 1;background-color:#fafafa;background-color:rgba(250,250,250,var(--tw-bg-opacity));padding:.625rem 1.5rem .5rem;font-weight:500;line-height:1.5;--tw-text-opacity: 1;color:#262626;color:rgba(38,38,38,var(--tw-text-opacity));--tw-shadow: 0 4px 9px -4px #cbcbcb;--tw-shadow-colored: 0 4px 9px -4px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 9px -4px #cbcbcb;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow);transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ui-button.minor:not([disabled]):hover,.ui-button.minor:not([disabled]):active{--tw-bg-opacity: 1;background-color:#f5f5f5;background-color:rgba(245,245,245,var(--tw-bg-opacity));--tw-shadow: 0 8px 9px -4px rgba(203,203,203,.3),0 4px 18px 0 rgba(203,203,203,.2);--tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 8px 9px -4px #cbcbcb4d,0 4px 18px #cbcbcb33;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}.ui-button.minor:not([disabled]):focus{--tw-bg-opacity: 1;background-color:#f5f5f5;background-color:rgba(245,245,245,var(--tw-bg-opacity));--tw-shadow: 0 8px 9px -4px rgba(203,203,203,.3),0 4px 18px 0 rgba(203,203,203,.2);--tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 8px 9px -4px #cbcbcb4d,0 4px 18px #cbcbcb33;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ui-button.minor.outlined{--tw-border-opacity: 1;border-color:#f5f5f5;border-color:rgba(245,245,245,var(--tw-border-opacity));background-color:transparent}.ui-button.minor.outlined:hover,.ui-button.minor.outlined:active,.ui-button.minor.outlined:focus{--tw-border-opacity: 1;border-color:#f5f5f5;border-color:rgba(245,245,245,var(--tw-border-opacity));background-color:transparent;background-color:#d4d4d41a;--tw-bg-opacity: .1}@supports (color: rgb(0 0 0 / 0)) and (top: var(--f)){.ui-button.minor.outlined:hover,.ui-button.minor.outlined:active,.ui-button.minor.outlined:focus{background-color:rgb(212 212 212 / var(--tw-bg-opacity))}}.ui-button.success{display:inline-block;border-radius:.25rem;--tw-bg-opacity: 1;background-color:#14a44d;background-color:rgba(20,164,77,var(--tw-bg-opacity));padding:.625rem 1.5rem .5rem;font-weight:500;line-height:1.5;--tw-text-opacity: 1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity));--tw-shadow: 0 4px 9px -4px #14a44d;--tw-shadow-colored: 0 4px 9px -4px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 9px -4px #14a44d;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow);transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.ui-button.success:not([disabled]):hover,.ui-button.success:not([disabled]):active{--tw-bg-opacity: 1;background-color:#118c42;background-color:rgba(17,140,66,var(--tw-bg-opacity));--tw-shadow: 0 8px 9px -4px rgba(20,164,77,.3),0 4px 18px 0 rgba(20,164,77,.2);--tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 8px 9px -4px #14a44d4d,0 4px 18px #14a44d33;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}.ui-button.success:not([disabled]):focus{--tw-bg-opacity: 1;background-color:#118c42;background-color:rgba(17,140,66,var(--tw-bg-opacity));--tw-shadow: 0 8px 9px -4px rgba(20,164,77,.3),0 4px 18px 0 rgba(20,164,77,.2);--tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 8px 9px -4px #14a44d4d,0 4px 18px #14a44d33;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ui-button.success.outlined:not([disabled]){--tw-border-opacity: 1;border-color:#14a44d;border-color:rgba(20,164,77,var(--tw-border-opacity));background-color:transparent;--tw-text-opacity: 1;color:#14a44d;color:rgba(20,164,77,var(--tw-text-opacity))}.ui-button.success.outlined:not([disabled]):hover,.ui-button.success.outlined:not([disabled]):active,.ui-button.success.outlined:not([disabled]):focus{--tw-border-opacity: 1;border-color:#118c42;border-color:rgba(17,140,66,var(--tw-border-opacity));background-color:transparent;background-color:#7373731a;--tw-bg-opacity: .1;--tw-text-opacity: 1;color:#118c42;color:rgba(17,140,66,var(--tw-text-opacity))}@supports (color: rgb(0 0 0 / 0)) and (top: var(--f)){.ui-button.success.outlined:not([disabled]):hover,.ui-button.success.outlined:not([disabled]):active,.ui-button.success.outlined:not([disabled]):focus{background-color:rgb(115 115 115 / var(--tw-bg-opacity))}}.ui-button[text]{border-color:transparent;background-color:transparent;--tw-text-opacity: 1;color:#3b71ca;color:rgba(59,113,202,var(--tw-text-opacity));--tw-shadow: 0 0 rgba(0,0,0,0);--tw-shadow-colored: 0 0 rgba(0,0,0,0);box-shadow:0 0 #0000,0 0 #0000,0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}.ui-button[text]:not([disabled]):hover,.ui-button[text]:not([disabled]):active,.ui-button[text]:not([disabled]):focus{--tw-bg-opacity: 1;background-color:#f5f5f5;background-color:rgba(245,245,245,var(--tw-bg-opacity));--tw-text-opacity: 1;color:#3061af;color:rgba(48,97,175,var(--tw-text-opacity));--tw-shadow: 0 0 rgba(0,0,0,0);--tw-shadow-colored: 0 0 rgba(0,0,0,0);box-shadow:0 0 #0000,0 0 #0000,0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}.ui-button[icon]{border-radius:50%;display:inline-flex;height:2rem;width:2rem;align-items:center;justify-content:center;background-color:transparent;color:currentColor}.ui-button[icon]:hover,.ui-button[icon]:active{--tw-text-opacity: 1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.ui-button[sm]{padding-top:.375rem;padding-bottom:.375rem;font-size:.875rem;line-height:1.25rem}.ui-button[sm]:not([dense]){padding-left:.625rem;padding-right:.625rem}.ui-button[sm][icon]{height:2rem;width:2rem}.ui-button[ripple]{background-position:center;transition:background .6s}.ui-button[ripple]:hover{background:rgb(48,97,175) radial-gradient(circle,transparent 1%,rgb(48,97,175) 1%) center/15000%}.ui-button[ripple]:active{--tw-bg-opacity: 1;background-color:#8faee0;background-color:rgba(143,174,224,var(--tw-bg-opacity));background-size:100%;transition:background 0s}.ui-button[theme=dark]{--tw-shadow: 0 4px 9px -4px rgba(59,113,202,.5);--tw-shadow-colored: 0 4px 9px -4px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 9px -4px #3b71ca80;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}.ui-button[theme=dark]:hover,.ui-button[theme=dark]:active{--tw-shadow: 0 8px 9px -4px rgba(59,113,202,.2),0 4px 18px 0 rgba(59,113,202,.1);--tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 8px 9px -4px #3b71ca33,0 4px 18px #3b71ca1a;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}.ui-button[theme=dark]:focus{--tw-shadow: 0 8px 9px -4px rgba(59,113,202,.2),0 4px 18px 0 rgba(59,113,202,.1);--tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 8px 9px -4px #3b71ca33,0 4px 18px #3b71ca1a;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}
`;var S=Object.defineProperty,j=Object.getOwnPropertyDescriptor,n=(r,t,s,e)=>{for(var o=e>1?void 0:e?j(t,s):t,c=r.length-1,d;c>=0;c--)(d=r[c])&&(o=(e?d(t,s,o):d(o))||o);return e&&o&&S(t,s,o),o};let i=class extends v(A){constructor(){super(),this.label="",this.iconPos="left",this.class="",this.disabled=!1,this.pending=!1,this.icon=!1,this.text=!1,this.ripple=!0,this.sm=!1,this.dense=!1,this.addEventListener("click",r=>{this.blocked&&r.stopImmediatePropagation()})}get isAnchor(){return typeof this.href<"u"}get rel(){return this.isAnchor&&/^http/.test(this.href)?"noopener":""}get target(){return this.rel?"_blank":""}get blocked(){return this.disabled||this.pending}get iconLeft(){return["both","left"].includes(this.iconPos)}render(){return l`${y(this.isAnchor,()=>l`<a part="ui-button" href="${f(this.href)}" target="${f(this.target)}" rel="${f(this.rel)}" class="ui-button ${this.class}" ?icon="${this.icon}" ?dense="${this.dense}" ?disabled="${this.blocked}" ?pending="${this.pending}" ?text="${this.text}" ?sm="${this.sm}" theme="${this.theme}"><slot></slot></a>`,()=>l`<button part="ui-button" type="button" class="ui-button ${this.class}" ?icon="${this.icon}" ?dense="${this.dense}" ?disabled="${this.blocked}" ?pending="${this.pending}" ?text="${this.text}" ?sm="${this.sm}" ?ripple="${this.ripple}" theme="${this.theme}"><slot></slot></button>`)}`}};n([a({type:String})],i.prototype,"label",2);n([a({type:String})],i.prototype,"iconPos",2);n([a({type:String})],i.prototype,"class",2);n([a()],i.prototype,"href",2);n([a({type:Boolean})],i.prototype,"disabled",2);n([a({type:Boolean})],i.prototype,"pending",2);n([a({type:Boolean})],i.prototype,"icon",2);n([a({type:Boolean})],i.prototype,"text",2);n([a({type:Boolean})],i.prototype,"ripple",2);n([a({type:Boolean})],i.prototype,"sm",2);n([a({type:Boolean})],i.prototype,"dense",2);n([a({type:String,reflect:!0})],i.prototype,"theme",2);i=n([k("ui-button")],i);const z="";var D=Object.defineProperty,I=Object.getOwnPropertyDescriptor,u=(r,t,s,e)=>{for(var o=e>1?void 0:e?I(t,s):t,c=r.length-1,d;c>=0;c--)(d=r[c])&&(o=(e?d(t,s,o):d(o))||o);return e&&o&&D(t,s,o),o};let w=class extends v(z){constructor(){super(...arguments),this.bindBridge=new x(this,b),this.dropable=!1,this.dialog=!1,this.pending=!1,this.show=()=>{this.dropable&&this.account||this.connect()}}get account(){return b.account}get addr(){var r;return(r=b.bridge)==null?void 0:r.shortAccount}get scan(){var r,t;return`${(r=b.bridge)==null?void 0:r.network.current.scan}/address/${(t=b.bridge)==null?void 0:t.account}`}get connecting(){return[$.CONNECTING,$.INSTALLING].includes(b.bridge.state)}close(){this.pending=!1}async connect(){this.pending=!0;try{await b.bridge.select(0)}catch{this.close()}b.bridge.isConnected&&(this.close(),h.emit("wallet-connected"))}connectedCallback(){super.connectedCallback(),h.on("connect-wallet",this.show)}disconnectedCallback(){super.disconnectedCallback(),h.off("connect-wallet",this.show)}render(){return this.account?l`<ui-address slot="button" avatar short></ui-address>`:l`<ui-button ?pending="${this.pending}" sm @click="${this.connect}" theme="dark">Connect ${y(this.pending,()=>l`<i class="ml-1 mdi mdi-loading"></i>`)}</ui-button>`}};u([a({type:Boolean})],w.prototype,"dropable",2);u([_()],w.prototype,"dialog",2);u([_()],w.prototype,"pending",2);w=u([k("connect-wallet-btn")],w);const T="/assets/logo-18677076.svg";export{T as l};
