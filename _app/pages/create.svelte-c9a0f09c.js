import{S as H,i as X,s as j,e as b,k as C,t as Q,c as k,a as E,d as f,m as P,h as R,g as m,J as y,j as G,K as D,L as W,M as Y,l as V,N as g,O as z,o as x,p as J,q as M,n as K,w as F,x as U,y as Z,B as ee,b as te,P as le}from"../chunks/vendor-3ba168ed.js";function re(i){let t,o,l,r,c;return{c(){t=b("div"),o=b("canvas"),l=C(),r=b("div"),c=Q(i[0])},l(n){t=k(n,"DIV",{});var e=E(t);o=k(e,"CANVAS",{}),E(o).forEach(f),l=P(e),r=k(e,"DIV",{});var d=E(r);c=R(d,i[0]),d.forEach(f),e.forEach(f)},m(n,e){m(n,t,e),y(t,o),i[2](o),y(t,l),y(t,r),y(r,c)},p(n,[e]){e&1&&G(c,n[0])},i:D,o:D,d(n){n&&f(t),i[2](null)}}}function ne(i,t,o){let{value:l}=t,r;function c(n){W[n?"unshift":"push"](()=>{r=n,o(1,r)})}return i.$$set=n=>{"value"in n&&o(0,l=n.value)},i.$$.update=()=>{i.$$.dirty&3&&r&&Y.toCanvas(r,l)},[l,r,c]}class se extends H{constructor(t){super();X(this,t,ne,re,j,{value:0})}}function B(i,t,o){const l=i.slice();return l[4]=t[o],l}function ae(i){let t,o,l,r,c,n=i[1],e=[];for(let a=0;a<n.length;a+=1)e[a]=O(B(i,n,a));const d=a=>x(e[a],1,1,()=>{e[a]=null});return{c(){t=b("p"),o=Q("The chunks are:"),l=C(),r=b("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=k(a,"P",{});var _=E(t);o=R(_,"The chunks are:"),_.forEach(f),l=P(a),r=k(a,"DIV",{class:!0});var u=E(r);for(let p=0;p<e.length;p+=1)e[p].l(u);u.forEach(f),this.h()},h(){te(r,"class","svelte-1r8brdm")},m(a,_){m(a,t,_),y(t,o),m(a,l,_),m(a,r,_);for(let u=0;u<e.length;u+=1)e[u].m(r,null);c=!0},p(a,_){if(_&2){n=a[1];let u;for(u=0;u<n.length;u+=1){const p=B(a,n,u);e[u]?(e[u].p(p,_),M(e[u],1)):(e[u]=O(p),e[u].c(),M(e[u],1),e[u].m(r,null))}for(K(),u=n.length;u<e.length;u+=1)d(u);J()}},i(a){if(!c){for(let _=0;_<n.length;_+=1)M(e[_]);c=!0}},o(a){e=e.filter(Boolean);for(let _=0;_<e.length;_+=1)x(e[_]);c=!1},d(a){a&&f(t),a&&f(l),a&&f(r),le(e,a)}}}function oe(i){let t,o,l,r,c;return{c(){t=b("p"),o=Q("Error!"),l=C(),r=b("p"),c=Q(i[2])},l(n){t=k(n,"P",{});var e=E(t);o=R(e,"Error!"),e.forEach(f),l=P(n),r=k(n,"P",{});var d=E(r);c=R(d,i[2]),d.forEach(f)},m(n,e){m(n,t,e),y(t,o),m(n,l,e),m(n,r,e),y(r,c)},p(n,e){e&4&&G(c,n[2])},i:D,o:D,d(n){n&&f(t),n&&f(l),n&&f(r)}}}function O(i){let t,o;return t=new se({props:{value:i[4]}}),{c(){F(t.$$.fragment)},l(l){U(t.$$.fragment,l)},m(l,r){Z(t,l,r),o=!0},p(l,r){const c={};r&2&&(c.value=l[4]),t.$set(c)},i(l){o||(M(t.$$.fragment,l),o=!0)},o(l){x(t.$$.fragment,l),o=!1},d(l){ee(t,l)}}}function ie(i){let t,o,l,r,c,n,e,d,a,_,u,p,v,T,A,N,q;const I=[oe,ae],w=[];function L(s,h){return s[2]?0:1}return p=L(i),v=w[p]=I[p](i),{c(){t=b("h1"),o=Q("Create magic QR codes"),l=C(),r=b("p"),c=Q("This is where we can create QR codes."),n=C(),e=b("p"),d=Q("Put your data in here:"),a=C(),_=b("textarea"),u=C(),v.c(),T=V()},l(s){t=k(s,"H1",{});var h=E(t);o=R(h,"Create magic QR codes"),h.forEach(f),l=P(s),r=k(s,"P",{});var $=E(r);c=R($,"This is where we can create QR codes."),$.forEach(f),n=P(s),e=k(s,"P",{});var S=E(e);d=R(S,"Put your data in here:"),S.forEach(f),a=P(s),_=k(s,"TEXTAREA",{}),E(_).forEach(f),u=P(s),v.l(s),T=V()},m(s,h){m(s,t,h),y(t,o),m(s,l,h),m(s,r,h),y(r,c),m(s,n,h),m(s,e,h),y(e,d),m(s,a,h),m(s,_,h),g(_,i[0]),m(s,u,h),w[p].m(s,h),m(s,T,h),A=!0,N||(q=z(_,"input",i[3]),N=!0)},p(s,[h]){h&1&&g(_,s[0]);let $=p;p=L(s),p===$?w[p].p(s,h):(K(),x(w[$],1,1,()=>{w[$]=null}),J(),v=w[p],v?v.p(s,h):(v=w[p]=I[p](s),v.c()),M(v,1),v.m(T.parentNode,T))},i(s){A||(M(v),A=!0)},o(s){x(v),A=!1},d(s){s&&f(t),s&&f(l),s&&f(r),s&&f(n),s&&f(e),s&&f(a),s&&f(_),s&&f(u),w[p].d(s),s&&f(T),N=!1,q()}}}const ce=15;function ue(i=""){const t=ce-9,o=i.length,l=Math.ceil(o/t);if(l>100)return{error:`We don't want to create more than 100 QR codes for this (max byte length = ${t*100})`};const r=[],c=l-1;for(let e=0;e<l;e++){const d=i.substring(e*t,(e+1)*t),a=`MQR${n(e)}.${n(c)}.`;r.push(a+d)}return{value:r};function n(e){return`${e}`.padStart(2,"0")}}function fe(i,t,o){let l,r,c=null;function n(){l=this.value,o(0,l)}return i.$$.update=()=>{if(i.$$.dirty&1){const e=ue(l);"error"in e?(o(1,r=[]),o(2,c=e.error)):(o(2,c=null),o(1,r=e.value))}},[l,r,c,n]}class pe extends H{constructor(t){super();X(this,t,fe,ie,j,{})}}export{pe as default};