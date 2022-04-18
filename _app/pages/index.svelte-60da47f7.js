import{S as ae,i as se,s as oe,F as re,e as u,c as d,a as h,d as l,b as ce,g as f,G as fe,H as ue,I as de,q as ie,o as ne,w as he,k as w,t as _,x as _e,m as $,h as p,y as pe,J as n,B as me}from"../chunks/vendor-3ba168ed.js";function ve(m){let t,o;const r=m[1].default,s=re(r,m,m[0],null);return{c(){t=u("h2"),s&&s.c(),this.h()},l(a){t=d(a,"H2",{class:!0});var c=h(t);s&&s.l(c),c.forEach(l),this.h()},h(){ce(t,"class","svelte-1paot4z")},m(a,c){f(a,t,c),s&&s.m(t,null),o=!0},p(a,[c]){s&&s.p&&(!o||c&1)&&fe(s,r,a,a[0],o?de(r,a[0],c,null):ue(a[0]),null)},i(a){o||(ie(s,a),o=!0)},o(a){ne(s,a),o=!1},d(a){a&&l(t),s&&s.d(a)}}}function we(m,t,o){let{$$slots:r={},$$scope:s}=t;return m.$$set=a=>{"$$scope"in a&&o(0,s=a.$$scope)},[s,r]}class $e extends ae{constructor(t){super();se(this,t,we,ve,oe,{})}}function ye(m){let t;return{c(){t=_("Magic QR Code data transfer")},l(o){t=p(o,"Magic QR Code data transfer")},m(o,r){f(o,t,r)},d(o){o&&l(t)}}}function be(m){let t,o,r,s,a,c,X,C,b,Y,M,v,R,g,z,Q,B,D,E,F,x,G,T,I,J,P,y,H,j,A,L,K,q;return t=new $e({props:{$$slots:{default:[ye]},$$scope:{ctx:m}}}),{c(){he(t.$$.fragment),o=w(),r=u("p"),s=_("It works without a server!"),a=w(),c=u("h2"),X=_("How will it work?"),C=w(),b=u("p"),Y=_("To send data:"),M=w(),v=u("ol"),R=u("li"),g=_("You enter your data in a big text area"),z=w(),Q=u("li"),B=_(`It splits the text into multiple chunks that can be put into individual QR codes (QR codes can
		only be of length X-bytes)`),D=w(),E=u("li"),F=_("It creates individual QR codes based of the chunks, having something like "),x=u("code"),G=_("MQR<index>.<length>.<data-of-chunk>"),T=w(),I=u("p"),J=_("On the receiver:"),P=w(),y=u("ol"),H=u("li"),j=_(`There is a reader to use the webcam and shows you which QR codes were scanned until you have all
		of them scanned completely`),A=w(),L=u("li"),K=_("It shows the whole data in a big text area at the receiver")},l(e){_e(t.$$.fragment,e),o=$(e),r=d(e,"P",{});var i=h(r);s=p(i,"It works without a server!"),i.forEach(l),a=$(e),c=d(e,"H2",{});var O=h(c);X=p(O,"How will it work?"),O.forEach(l),C=$(e),b=d(e,"P",{});var U=h(b);Y=p(U,"To send data:"),U.forEach(l),M=$(e),v=d(e,"OL",{});var k=h(v);R=d(k,"LI",{});var V=h(R);g=p(V,"You enter your data in a big text area"),V.forEach(l),z=$(k),Q=d(k,"LI",{});var W=h(Q);B=p(W,`It splits the text into multiple chunks that can be put into individual QR codes (QR codes can
		only be of length X-bytes)`),W.forEach(l),D=$(k),E=d(k,"LI",{});var N=h(E);F=p(N,"It creates individual QR codes based of the chunks, having something like "),x=d(N,"CODE",{});var Z=h(x);G=p(Z,"MQR<index>.<length>.<data-of-chunk>"),Z.forEach(l),N.forEach(l),k.forEach(l),T=$(e),I=d(e,"P",{});var ee=h(I);J=p(ee,"On the receiver:"),ee.forEach(l),P=$(e),y=d(e,"OL",{});var S=h(y);H=d(S,"LI",{});var te=h(H);j=p(te,`There is a reader to use the webcam and shows you which QR codes were scanned until you have all
		of them scanned completely`),te.forEach(l),A=$(S),L=d(S,"LI",{});var le=h(L);K=p(le,"It shows the whole data in a big text area at the receiver"),le.forEach(l),S.forEach(l)},m(e,i){pe(t,e,i),f(e,o,i),f(e,r,i),n(r,s),f(e,a,i),f(e,c,i),n(c,X),f(e,C,i),f(e,b,i),n(b,Y),f(e,M,i),f(e,v,i),n(v,R),n(R,g),n(v,z),n(v,Q),n(Q,B),n(v,D),n(v,E),n(E,F),n(E,x),n(x,G),f(e,T,i),f(e,I,i),n(I,J),f(e,P,i),f(e,y,i),n(y,H),n(H,j),n(y,A),n(y,L),n(L,K),q=!0},p(e,[i]){const O={};i&1&&(O.$$scope={dirty:i,ctx:e}),t.$set(O)},i(e){q||(ie(t.$$.fragment,e),q=!0)},o(e){ne(t.$$.fragment,e),q=!1},d(e){me(t,e),e&&l(o),e&&l(r),e&&l(a),e&&l(c),e&&l(C),e&&l(b),e&&l(M),e&&l(v),e&&l(T),e&&l(I),e&&l(P),e&&l(y)}}}class Ie extends ae{constructor(t){super();se(this,t,null,be,oe,{})}}export{Ie as default};
