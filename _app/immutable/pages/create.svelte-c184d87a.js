import{S as B,i as W,s as Y,l as F,g as $,n as j,o as C,p as V,q as b,d as _,F as ae,G as ie,H as ce,I as fe,K as me,e as k,w as G,k as H,t as D,c as w,a as R,x as O,m as T,h as N,b as K,y as U,J as p,E as S,B as P,L as ue,M as he,N as ge,j as _e,O as Ee,P as ee,Q as $e}from"../chunks/index-c5521f49.js";import{P as ve}from"../chunks/PageWithNavigation-8d454ab7.js";import{Q as pe,T as be}from"../chunks/Textarea-abb016e2.js";import{b as ke}from"../chunks/paths-396f020f.js";import{w as we}from"../chunks/index-f0c2a95f.js";const Re=2332,x=Re-9,ye=o=>({chunks:o&2}),te=o=>({chunks:o[1]}),Ce=o=>({chunks:o&2}),re=o=>({maxChunkLength:x,chunks:o[1]});function De(o){let e;const s=o[4].default,r=ae(s,o,o[3],te);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,f){r&&r.m(t,f),e=!0},p(t,f){r&&r.p&&(!e||f&10)&&ie(r,s,t,t[3],e?fe(s,t[3],f,ye):ce(t[3]),te)},i(t){e||(b(r,t),e=!0)},o(t){C(r,t),e=!1},d(t){r&&r.d(t)}}}function Ne(o){let e;const s=o[4].ERROR_MAX_CHUNK_LENGTH_EXCEEDED,r=ae(s,o,o[3],re);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,f){r&&r.m(t,f),e=!0},p(t,f){r&&r.p&&(!e||f&10)&&ie(r,s,t,t[3],e?fe(s,t[3],f,Ce):ce(t[3]),re)},i(t){e||(b(r,t),e=!0)},o(t){C(r,t),e=!1},d(t){r&&r.d(t)}}}function He(o){let e,s,r,t;const f=[Ne,De],a=[];function l(n,c){return n[0]==="MAX_CHUNK_LENGTH_EXCEEDED"?0:1}return e=l(o),s=a[e]=f[e](o),{c(){s.c(),r=F()},l(n){s.l(n),r=F()},m(n,c){a[e].m(n,c),$(n,r,c),t=!0},p(n,[c]){let u=e;e=l(n),e===u?a[e].p(n,c):(j(),C(a[u],1,1,()=>{a[u]=null}),V(),s=a[e],s?s.p(n,c):(s=a[e]=f[e](n),s.c()),b(s,1),s.m(r.parentNode,r))},i(n){t||(b(s),t=!0)},o(n){C(s),t=!1},d(n){a[e].d(n),n&&_(r)}}}function Te(o,e,s){let{$$slots:r={},$$scope:t}=e,{data:f}=e,a=null,l;function n(c=""){const u=c.length,m=Math.ceil(u/x);if(m>100)return{error:"MAX_CHUNK_LENGTH_EXCEEDED"};const h=[],q=m-1;for(let y=0;y<m;y++){const g=c.substring(y*x,(y+1)*x),E=`MQR${M(y)}.${M(q)}.`;h.push(E+g)}return{value:h};function M(y){return`${y}`.padStart(2,"0")}}return o.$$set=c=>{"data"in c&&s(2,f=c.data),"$$scope"in c&&s(3,t=c.$$scope)},o.$$.update=()=>{if(o.$$.dirty&4){const c=n(f);"error"in c?(s(1,l=[]),s(0,a=c.error)):(s(0,a=null),s(1,l=c.value))}},[a,l,f,t,r]}class Xe extends B{constructor(e){super(),W(this,e,Te,He,Y,{data:2})}}const Me=()=>{const o=me("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session,updated:o.updated}},Le={subscribe(o){return Me().page.subscribe(o)}};function Qe(o){let e,s,r,t,f,a,l,n;return s=new pe({props:{value:o[0]}}),{c(){e=k("figure"),G(s.$$.fragment),r=H(),t=k("figcaption"),f=D("You can use the above QR code to navigate to "),a=D(o[0]),l=D(" on your phone."),this.h()},l(c){e=w(c,"FIGURE",{class:!0});var u=R(e);O(s.$$.fragment,u),r=T(u),t=w(u,"FIGCAPTION",{class:!0});var m=R(t);f=N(m,"You can use the above QR code to navigate to "),a=N(m,o[0]),l=N(m," on your phone."),m.forEach(_),u.forEach(_),this.h()},h(){K(t,"class","svelte-15vfx5u"),K(e,"class","svelte-15vfx5u")},m(c,u){$(c,e,u),U(s,e,null),p(e,r),p(e,t),p(t,f),p(t,a),p(t,l),n=!0},p:S,i(c){n||(b(s.$$.fragment,c),n=!0)},o(c){C(s.$$.fragment,c),n=!1},d(c){c&&_(e),P(s)}}}function Ge(o,e,s){let r;ue(o,Le,a=>s(1,r=a));const t=`${ke}/read`;return[`${r.url.origin}${t}`]}class Oe extends B{constructor(e){super(),W(this,e,Ge,Qe,Y,{})}}function se(o,e,s){const r=o.slice();return r[9]=e[s],r[11]=s,r}function ne(o){let e,s;return{c(){e=k("p"),s=D(o[1])},l(r){e=w(r,"P",{});var t=R(e);s=N(t,o[1]),t.forEach(_)},m(r,t){$(r,e,t),p(e,s)},p(r,t){t&2&&_e(s,r[1])},d(r){r&&_(e)}}}function Ue(o){let e,s,r,t,f,a;return f=new Xe({props:{data:o[0],$$slots:{ERROR_MAX_CHUNK_LENGTH_EXCEEDED:[Ae,({maxChunkLength:l,chunks:n})=>({8:l,7:n}),({maxChunkLength:l,chunks:n})=>(l?256:0)|(n?128:0)],default:[qe,({chunks:l})=>({7:l}),({chunks:l})=>l?128:0]},$$scope:{ctx:o}}}),{c(){e=k("section"),s=k("p"),r=D("The chunks are:"),t=H(),G(f.$$.fragment)},l(l){e=w(l,"SECTION",{});var n=R(e);s=w(n,"P",{});var c=R(s);r=N(c,"The chunks are:"),c.forEach(_),t=T(n),O(f.$$.fragment,n),n.forEach(_)},m(l,n){$(l,e,n),p(e,s),p(s,r),p(e,t),U(f,e,null),a=!0},p(l,n){const c={};n&1&&(c.data=l[0]),n&4480&&(c.$$scope={dirty:n,ctx:l}),f.$set(c)},i(l){a||(b(f.$$.fragment,l),a=!0)},o(l){C(f.$$.fragment,l),a=!1},d(l){l&&_(e),P(f)}}}function Pe(o){let e,s,r,t,f,a;return{c(){e=k("section"),s=k("p"),r=D("Error!"),t=H(),f=k("p"),a=D(oe)},l(l){e=w(l,"SECTION",{});var n=R(e);s=w(n,"P",{});var c=R(s);r=N(c,"Error!"),c.forEach(_),t=T(n),f=w(n,"P",{});var u=R(f);a=N(u,oe),u.forEach(_),n.forEach(_)},m(l,n){$(l,e,n),p(e,s),p(s,r),p(e,t),p(e,f),p(f,a)},p:S,i:S,o:S,d(l){l&&_(e)}}}function le(o){let e,s,r,t,f=o[11]+1+"",a,l,n;return s=new pe({props:{value:o[9]}}),{c(){e=k("li"),G(s.$$.fragment),r=H(),t=k("div"),a=D(f),l=H(),this.h()},l(c){e=w(c,"LI",{class:!0});var u=R(e);O(s.$$.fragment,u),r=T(u),t=w(u,"DIV",{});var m=R(t);a=N(m,f),m.forEach(_),l=T(u),u.forEach(_),this.h()},h(){K(e,"class","qrcode svelte-wwyy2u")},m(c,u){$(c,e,u),U(s,e,null),p(e,r),p(e,t),p(t,a),p(e,l),n=!0},p(c,u){const m={};u&128&&(m.value=c[9]),s.$set(m)},i(c){n||(b(s.$$.fragment,c),n=!0)},o(c){C(s.$$.fragment,c),n=!1},d(c){c&&_(e),P(s)}}}function qe(o){let e,s,r=o[7],t=[];for(let a=0;a<r.length;a+=1)t[a]=le(se(o,r,a));const f=a=>C(t[a],1,1,()=>{t[a]=null});return{c(){e=k("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=w(a,"UL",{class:!0});var l=R(e);for(let n=0;n<t.length;n+=1)t[n].l(l);l.forEach(_),this.h()},h(){K(e,"class","qrcodes svelte-wwyy2u")},m(a,l){$(a,e,l);for(let n=0;n<t.length;n+=1)t[n].m(e,null);s=!0},p(a,l){if(l&128){r=a[7];let n;for(n=0;n<r.length;n+=1){const c=se(a,r,n);t[n]?(t[n].p(c,l),b(t[n],1)):(t[n]=le(c),t[n].c(),b(t[n],1),t[n].m(e,null))}for(j(),n=r.length;n<t.length;n+=1)f(n);V()}},i(a){if(!s){for(let l=0;l<r.length;l+=1)b(t[l]);s=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)C(t[l]);s=!1},d(a){a&&_(e),$e(t,a)}}}function Ae(o){let e,s,r=o[8]*100+"",t,f;return{c(){e=k("div"),s=D("We don't want to create more than 100 QR codes for this (max byte length = "),t=D(r),f=D(")"),this.h()},l(a){e=w(a,"DIV",{slot:!0});var l=R(e);s=N(l,"We don't want to create more than 100 QR codes for this (max byte length = "),t=N(l,r),f=N(l,")"),l.forEach(_),this.h()},h(){K(e,"slot","ERROR_MAX_CHUNK_LENGTH_EXCEEDED")},m(a,l){$(a,e,l),p(e,s),p(e,t),p(e,f)},p(a,l){l&256&&r!==(r=a[8]*100+"")&&_e(t,r)},d(a){a&&_(e)}}}function Ke(o){let e,s,r,t,f,a,l,n,c,u,m,h,q,M,y,g,E,L,I;l=new Oe({});function de(i){o[6](i)}let J={};o[0]!==void 0&&(J.value=o[0]),h=new be({props:J}),he.push(()=>ge(h,"value",de)),h.$on("dragover",o[3]),h.$on("dragleave",o[4]),h.$on("fileDrop",o[5]);let v=o[1]&&ne(o);const z=[Pe,Ue],X=[];function Z(i,d){return i[0]&&i[0]!==""?1:-1}return~(g=Z(o))&&(E=X[g]=z[g](o)),{c(){e=k("h1"),s=D("Create magic QR codes"),r=H(),t=k("p"),f=D("This is where we can create QR codes."),a=H(),G(l.$$.fragment),n=H(),c=k("p"),u=D("Put your data in here:"),m=H(),G(h.$$.fragment),M=H(),v&&v.c(),y=H(),E&&E.c(),L=F()},l(i){e=w(i,"H1",{});var d=R(e);s=N(d,"Create magic QR codes"),d.forEach(_),r=T(i),t=w(i,"P",{});var A=R(t);f=N(A,"This is where we can create QR codes."),A.forEach(_),a=T(i),O(l.$$.fragment,i),n=T(i),c=w(i,"P",{});var Q=R(c);u=N(Q,"Put your data in here:"),Q.forEach(_),m=T(i),O(h.$$.fragment,i),M=T(i),v&&v.l(i),y=T(i),E&&E.l(i),L=F()},m(i,d){$(i,e,d),p(e,s),$(i,r,d),$(i,t,d),p(t,f),$(i,a,d),U(l,i,d),$(i,n,d),$(i,c,d),p(c,u),$(i,m,d),U(h,i,d),$(i,M,d),v&&v.m(i,d),$(i,y,d),~g&&X[g].m(i,d),$(i,L,d),I=!0},p(i,d){const A={};!q&&d&1&&(q=!0,A.value=i[0],Ee(()=>q=!1)),h.$set(A),i[1]?v?v.p(i,d):(v=ne(i),v.c(),v.m(y.parentNode,y)):v&&(v.d(1),v=null);let Q=g;g=Z(i),g===Q?~g&&X[g].p(i,d):(E&&(j(),C(X[Q],1,1,()=>{X[Q]=null}),V()),~g?(E=X[g],E?E.p(i,d):(E=X[g]=z[g](i),E.c()),b(E,1),E.m(L.parentNode,L)):E=null)},i(i){I||(b(l.$$.fragment,i),b(h.$$.fragment,i),b(E),I=!0)},o(i){C(l.$$.fragment,i),C(h.$$.fragment,i),C(E),I=!1},d(i){i&&_(e),i&&_(r),i&&_(t),i&&_(a),P(l,i),i&&_(n),i&&_(c),i&&_(m),P(h,i),i&&_(M),v&&v.d(i),i&&_(y),~g&&X[g].d(i),i&&_(L)}}}function Ie(o){let e,s;return e=new ve({props:{$$slots:{default:[Ke]},$$scope:{ctx:o}}}),{c(){G(e.$$.fragment)},l(r){O(e.$$.fragment,r)},m(r,t){U(e,r,t),s=!0},p(r,[t]){const f={};t&4099&&(f.$$scope={dirty:t,ctx:r}),e.$set(f)},i(r){s||(b(e.$$.fragment,r),s=!0)},o(r){C(e.$$.fragment,r),s=!1},d(r){P(e,r)}}}let oe=null;function Se(o,e,s){let r,t="",f=we("");ue(o,f,u=>s(1,r=u));const a=u=>{u.preventDefault()},l=u=>{u.preventDefault(),ee(f,r="",r)},n=async u=>{if(t.trim()!==""&&!confirm("Do you really want to overwrite what you have in your data?"))return;ee(f,r="",r);let m="";for(let h=0;h<u.detail.files.length;h++)m+=await u.detail.files.item(h).text();s(0,t=m)};function c(u){t=u,s(0,t)}return[t,r,f,a,l,n,c]}class je extends B{constructor(e){super(),W(this,e,Se,Ie,Y,{})}}export{je as default};
