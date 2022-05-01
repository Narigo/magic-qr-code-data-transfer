import{S as B,i as F,s as W,l as S,g,n as Y,o as v,p as x,q as $,d as f,F as se,G as ne,H as le,I as oe,K as ie,e as b,w as M,k as D,t as C,c as R,a as k,x as Q,m as H,h as N,b as P,y as G,J as h,E as q,B as O,L as ue,M as fe,N as _e,O as pe,P as he,j as de}from"../chunks/index-8fd04ea5.js";import{P as Ee}from"../chunks/PageWithNavigation-d800f4b0.js";import{Q as ae,T as me}from"../chunks/Textarea-2338afab.js";import{b as ge}from"../chunks/paths-396f020f.js";const $e=2332,I=$e-9,ve=a=>({chunks:a&2}),z=a=>({chunks:a[1]}),be=a=>({chunks:a&2}),Z=a=>({maxChunkLength:I,chunks:a[1]});function Re(a){let e;const s=a[4].default,r=se(s,a,a[3],z);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,i){r&&r.m(t,i),e=!0},p(t,i){r&&r.p&&(!e||i&10)&&ne(r,s,t,t[3],e?oe(s,t[3],i,ve):le(t[3]),z)},i(t){e||($(r,t),e=!0)},o(t){v(r,t),e=!1},d(t){r&&r.d(t)}}}function ke(a){let e;const s=a[4].ERROR_MAX_CHUNK_LENGTH_EXCEEDED,r=se(s,a,a[3],Z);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,i){r&&r.m(t,i),e=!0},p(t,i){r&&r.p&&(!e||i&10)&&ne(r,s,t,t[3],e?oe(s,t[3],i,be):le(t[3]),Z)},i(t){e||($(r,t),e=!0)},o(t){v(r,t),e=!1},d(t){r&&r.d(t)}}}function Ce(a){let e,s,r,t;const i=[ke,Re],o=[];function l(n,c){return n[0]==="MAX_CHUNK_LENGTH_EXCEEDED"?0:1}return e=l(a),s=o[e]=i[e](a),{c(){s.c(),r=S()},l(n){s.l(n),r=S()},m(n,c){o[e].m(n,c),g(n,r,c),t=!0},p(n,[c]){let _=e;e=l(n),e===_?o[e].p(n,c):(Y(),v(o[_],1,1,()=>{o[_]=null}),x(),s=o[e],s?s.p(n,c):(s=o[e]=i[e](n),s.c()),$(s,1),s.m(r.parentNode,r))},i(n){t||($(s),t=!0)},o(n){v(s),t=!1},d(n){o[e].d(n),n&&f(r)}}}function Ne(a,e,s){let{$$slots:r={},$$scope:t}=e,{data:i}=e,o=null,l;function n(c=""){const _=c.length,E=Math.ceil(_/I);if(E>100)return{error:"MAX_CHUNK_LENGTH_EXCEEDED"};const w=[],U=E-1;for(let p=0;p<E;p++){const m=c.substring(p*I,(p+1)*I),T=`MQR${y(p)}.${y(U)}.`;w.push(T+m)}return{value:w};function y(p){return`${p}`.padStart(2,"0")}}return a.$$set=c=>{"data"in c&&s(2,i=c.data),"$$scope"in c&&s(3,t=c.$$scope)},a.$$.update=()=>{if(a.$$.dirty&4){const c=n(i);"error"in c?(s(1,l=[]),s(0,o=c.error)):(s(0,o=null),s(1,l=c.value))}},[o,l,i,t,r]}class we extends B{constructor(e){super(),F(this,e,Ne,Ce,W,{data:2})}}const De=()=>{const a=ie("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},He={subscribe(a){return De().page.subscribe(a)}};function Te(a){let e,s,r,t,i,o,l,n;return s=new ae({props:{value:a[0]}}),{c(){e=b("figure"),M(s.$$.fragment),r=D(),t=b("figcaption"),i=C("You can use the above QR code to navigate to "),o=C(a[0]),l=C(" on your phone."),this.h()},l(c){e=R(c,"FIGURE",{class:!0});var _=k(e);Q(s.$$.fragment,_),r=H(_),t=R(_,"FIGCAPTION",{class:!0});var E=k(t);i=N(E,"You can use the above QR code to navigate to "),o=N(E,a[0]),l=N(E," on your phone."),E.forEach(f),_.forEach(f),this.h()},h(){P(t,"class","svelte-15vfx5u"),P(e,"class","svelte-15vfx5u")},m(c,_){g(c,e,_),G(s,e,null),h(e,r),h(e,t),h(t,i),h(t,o),h(t,l),n=!0},p:q,i(c){n||($(s.$$.fragment,c),n=!0)},o(c){v(s.$$.fragment,c),n=!1},d(c){c&&f(e),O(s)}}}function Xe(a,e,s){let r;ue(a,He,o=>s(1,r=o));const t=`${ge}/read`;return[`${r.url.origin}${t}`]}class ye extends B{constructor(e){super(),F(this,e,Xe,Te,W,{})}}function ee(a,e,s){const r=a.slice();return r[4]=e[s],r[6]=s,r}function Le(a){let e,s,r,t,i,o;return i=new we({props:{data:a[0],$$slots:{ERROR_MAX_CHUNK_LENGTH_EXCEEDED:[Ge,({maxChunkLength:l,chunks:n})=>({3:l,2:n}),({maxChunkLength:l,chunks:n})=>(l?8:0)|(n?4:0)],default:[Qe,({chunks:l})=>({2:l}),({chunks:l})=>l?4:0]},$$scope:{ctx:a}}}),{c(){e=b("section"),s=b("p"),r=C("The chunks are:"),t=D(),M(i.$$.fragment)},l(l){e=R(l,"SECTION",{});var n=k(e);s=R(n,"P",{});var c=k(s);r=N(c,"The chunks are:"),c.forEach(f),t=H(n),Q(i.$$.fragment,n),n.forEach(f)},m(l,n){g(l,e,n),h(e,s),h(s,r),h(e,t),G(i,e,null),o=!0},p(l,n){const c={};n&1&&(c.data=l[0]),n&140&&(c.$$scope={dirty:n,ctx:l}),i.$set(c)},i(l){o||($(i.$$.fragment,l),o=!0)},o(l){v(i.$$.fragment,l),o=!1},d(l){l&&f(e),O(i)}}}function Me(a){let e,s,r,t,i,o;return{c(){e=b("section"),s=b("p"),r=C("Error!"),t=D(),i=b("p"),o=C(re)},l(l){e=R(l,"SECTION",{});var n=k(e);s=R(n,"P",{});var c=k(s);r=N(c,"Error!"),c.forEach(f),t=H(n),i=R(n,"P",{});var _=k(i);o=N(_,re),_.forEach(f),n.forEach(f)},m(l,n){g(l,e,n),h(e,s),h(s,r),h(e,t),h(e,i),h(i,o)},p:q,i:q,o:q,d(l){l&&f(e)}}}function te(a){let e,s,r,t,i=a[6]+1+"",o,l,n;return s=new ae({props:{value:a[4]}}),{c(){e=b("li"),M(s.$$.fragment),r=D(),t=b("div"),o=C(i),l=D(),this.h()},l(c){e=R(c,"LI",{class:!0});var _=k(e);Q(s.$$.fragment,_),r=H(_),t=R(_,"DIV",{});var E=k(t);o=N(E,i),E.forEach(f),l=H(_),_.forEach(f),this.h()},h(){P(e,"class","qrcode svelte-wwyy2u")},m(c,_){g(c,e,_),G(s,e,null),h(e,r),h(e,t),h(t,o),h(e,l),n=!0},p(c,_){const E={};_&4&&(E.value=c[4]),s.$set(E)},i(c){n||($(s.$$.fragment,c),n=!0)},o(c){v(s.$$.fragment,c),n=!1},d(c){c&&f(e),O(s)}}}function Qe(a){let e,s,r=a[2],t=[];for(let o=0;o<r.length;o+=1)t[o]=te(ee(a,r,o));const i=o=>v(t[o],1,1,()=>{t[o]=null});return{c(){e=b("ul");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=R(o,"UL",{class:!0});var l=k(e);for(let n=0;n<t.length;n+=1)t[n].l(l);l.forEach(f),this.h()},h(){P(e,"class","qrcodes svelte-wwyy2u")},m(o,l){g(o,e,l);for(let n=0;n<t.length;n+=1)t[n].m(e,null);s=!0},p(o,l){if(l&4){r=o[2];let n;for(n=0;n<r.length;n+=1){const c=ee(o,r,n);t[n]?(t[n].p(c,l),$(t[n],1)):(t[n]=te(c),t[n].c(),$(t[n],1),t[n].m(e,null))}for(Y(),n=r.length;n<t.length;n+=1)i(n);x()}},i(o){if(!s){for(let l=0;l<r.length;l+=1)$(t[l]);s=!0}},o(o){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)v(t[l]);s=!1},d(o){o&&f(e),he(t,o)}}}function Ge(a){let e,s,r=a[3]*100+"",t,i;return{c(){e=b("div"),s=C("We don't want to create more than 100 QR codes for this (max byte length = "),t=C(r),i=C(")"),this.h()},l(o){e=R(o,"DIV",{slot:!0});var l=k(e);s=N(l,"We don't want to create more than 100 QR codes for this (max byte length = "),t=N(l,r),i=N(l,")"),l.forEach(f),this.h()},h(){P(e,"slot","ERROR_MAX_CHUNK_LENGTH_EXCEEDED")},m(o,l){g(o,e,l),h(e,s),h(e,t),h(e,i)},p(o,l){l&8&&r!==(r=o[3]*100+"")&&de(t,r)},d(o){o&&f(e)}}}function Oe(a){let e,s,r,t,i,o,l,n,c,_,E,w,U,y,p,m,T,K;l=new ye({});function ce(u){a[1](u)}let V={};a[0]!==void 0&&(V.value=a[0]),w=new me({props:V}),fe.push(()=>_e(w,"value",ce));const j=[Me,Le],X=[];function J(u,d){return u[0]!==""?1:-1}return~(p=J(a))&&(m=X[p]=j[p](a)),{c(){e=b("h1"),s=C("Create magic QR codes"),r=D(),t=b("p"),i=C("This is where we can create QR codes."),o=D(),M(l.$$.fragment),n=D(),c=b("p"),_=C("Put your data in here:"),E=D(),M(w.$$.fragment),y=D(),m&&m.c(),T=S()},l(u){e=R(u,"H1",{});var d=k(e);s=N(d,"Create magic QR codes"),d.forEach(f),r=H(u),t=R(u,"P",{});var A=k(t);i=N(A,"This is where we can create QR codes."),A.forEach(f),o=H(u),Q(l.$$.fragment,u),n=H(u),c=R(u,"P",{});var L=k(c);_=N(L,"Put your data in here:"),L.forEach(f),E=H(u),Q(w.$$.fragment,u),y=H(u),m&&m.l(u),T=S()},m(u,d){g(u,e,d),h(e,s),g(u,r,d),g(u,t,d),h(t,i),g(u,o,d),G(l,u,d),g(u,n,d),g(u,c,d),h(c,_),g(u,E,d),G(w,u,d),g(u,y,d),~p&&X[p].m(u,d),g(u,T,d),K=!0},p(u,d){const A={};!U&&d&1&&(U=!0,A.value=u[0],pe(()=>U=!1)),w.$set(A);let L=p;p=J(u),p===L?~p&&X[p].p(u,d):(m&&(Y(),v(X[L],1,1,()=>{X[L]=null}),x()),~p?(m=X[p],m?m.p(u,d):(m=X[p]=j[p](u),m.c()),$(m,1),m.m(T.parentNode,T)):m=null)},i(u){K||($(l.$$.fragment,u),$(w.$$.fragment,u),$(m),K=!0)},o(u){v(l.$$.fragment,u),v(w.$$.fragment,u),v(m),K=!1},d(u){u&&f(e),u&&f(r),u&&f(t),u&&f(o),O(l,u),u&&f(n),u&&f(c),u&&f(E),O(w,u),u&&f(y),~p&&X[p].d(u),u&&f(T)}}}function Ue(a){let e,s;return e=new Ee({props:{$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){M(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,t){G(e,r,t),s=!0},p(r,[t]){const i={};t&129&&(i.$$scope={dirty:t,ctx:r}),e.$set(i)},i(r){s||($(e.$$.fragment,r),s=!0)},o(r){v(e.$$.fragment,r),s=!1},d(r){O(e,r)}}}let re=null;function Ae(a,e,s){let r;function t(i){r=i,s(0,r)}return[r,t]}class Se extends B{constructor(e){super(),F(this,e,Ae,Ue,W,{})}}export{Se as default};