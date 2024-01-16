import{s as Ot,q as je,n as Dt}from"../chunks/scheduler.b2b371a3.js";import{S as Ut,i as zt,g as s,s as f,r as oe,m as Lt,J as Rt,h as n,f as l,c as v,y as T,j as g,u as ie,n as Vt,k as t,x as e,a as L,v as ce,d as I,b as St,t as D,w as ue,K as Ft,B as Gt,p as qt}from"../chunks/index.3de65ac3.js";import{e as Ht}from"../chunks/each.1c664a84.js";import"../chunks/paths.18f54ee0.js";import{L as Wt}from"../chunks/logo.3098344b.js";import{P as Yt,L as Bt,a as Jt}from"../chunks/index.7abb1d20.js";import{h as Kt,i as Xt,j as Qt,k as Zt}from"../chunks/index.e7ae1482.js";import{I as de}from"../chunks/Icon.894f964d.js";let ea=!0;const At=["https://www.youtube.com/watch?v=kYs1cGOicsg","https://www.youtube.com/watch?v=T-L5-5C8v98"];async function ta(){const u=[];for(let a=0;a<At.length;a++){const i=await fetch(`https://www.youtube.com/oembed?url=${At[a]}`).then(d=>d.json()),o=i.html.replace(/<iframe.*src="(.*)".*><\/iframe>/,"$1");u.push({...i,iframeUrl:o})}return u}const aa=async({fetch:u})=>({showcases:ta()}),pa=Object.freeze(Object.defineProperty({__proto__:null,load:aa,prerender:ea},Symbol.toStringTag,{value:"Module"})),sa=""+new URL("../assets/youtube.0e2bbdd6.svg",import.meta.url).href;function Nt(u,a,i){const o=u.slice();return o[2]=a[i],o[3]=a,o[4]=i,o}function na(u){let a,i,o,d,_,x;return _=new de({props:{src:Jt,theme:"solid",class:"w-16 h-16 text-white drop-shadow-lg"}}),{c(){a=s("img"),o=f(),d=s("div"),oe(_.$$.fragment),this.h()},l(h){a=n(h,"IMG",{src:!0,alt:!0,class:!0}),o=v(h),d=n(h,"DIV",{class:!0});var w=g(d);ie(_.$$.fragment,w),w.forEach(l),this.h()},h(){je(a.src,i=u[2].thumbnail_url.replace("hqdefault","maxresdefault"))||t(a,"src",i),t(a,"alt","Thumbnail"),t(a,"class","w-full aspect-video object-cover brightness-90 group-hover:brightness-75 transition"),t(d,"class","absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2")},m(h,w){L(h,a,w),L(h,o,w),L(h,d,w),ce(_,d,null),x=!0},p(h,w){(!x||w&1&&!je(a.src,i=h[2].thumbnail_url.replace("hqdefault","maxresdefault")))&&t(a,"src",i)},i(h){x||(I(_.$$.fragment,h),x=!0)},o(h){D(_.$$.fragment,h),x=!1},d(h){h&&(l(a),l(o),l(d)),ue(_)}}}function ra(u){let a,i;return{c(){a=s("iframe"),this.h()},l(o){a=n(o,"IFRAME",{src:!0,frameborder:!0,allow:!0,title:!0,class:!0}),g(a).forEach(l),this.h()},h(){je(a.src,i=u[2].iframeUrl+"&autoplay=1")||t(a,"src",i),t(a,"frameborder","0"),t(a,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),t(a,"title","Showcase"),t(a,"class","w-full h-full")},m(o,d){L(o,a,d)},p(o,d){d&1&&!je(a.src,i=o[2].iframeUrl+"&autoplay=1")&&t(a,"src",i)},i:Dt,o:Dt,d(o){o&&l(a)}}}function jt(u){let a,i,o,d,_,x,h;const w=[ra,na],y=[];function G(E,C){return E[2].playVideo?0:1}i=G(u),o=y[i]=w[i](u);function H(){return u[1](u[2],u[3],u[4])}return{c(){a=s("div"),o.c(),d=f(),this.h()},l(E){a=n(E,"DIV",{class:!0});var C=g(a);o.l(C),d=v(C),C.forEach(l),this.h()},h(){t(a,"class","relative aspect-video rounded-lg overflow-hidden mt-4 group cursor-pointer")},m(E,C){L(E,a,C),y[i].m(a,null),e(a,d),_=!0,x||(h=Gt(a,"click",H),x=!0)},p(E,C){u=E;let $=i;i=G(u),i===$?y[i].p(u,C):(qt(),D(y[$],1,1,()=>{y[$]=null}),St(),o=y[i],o?o.p(u,C):(o=y[i]=w[i](u),o.c()),I(o,1),o.m(a,d))},i(E){_||(I(o),_=!0)},o(E){D(o),_=!1},d(E){E&&l(a),y[i].d(),x=!1,h()}}}function la(u){let a,i,o,d,_,x,h,w,y,G,H,E=`<div class="max-w-5xl mx-auto flex justify-between p-4 mt-2"><div class="flex items-center gap-2"><img src="${Wt}" alt="Logo" class="w-7 h-7 object-contain"/> <span class="text-xl font-semibold">North</span></div> <nav class="flex gap-6 items-center svelte-1mq6ws"><a href="/dashboard" class="px-3 py-1 bg-accent-600 transition rounded-lg svelte-1mq6ws">Dashboard</a></nav></div>`,C,$,W,ot='<h1 class="uppercase text-3xl font-bold max-w-xl mb-3 tracking-wide">North Unleashes Cutting-Edge Cheat Technology</h1> <p class="max-w-2xl">Dive into our premium cheat collection tailored for powerhouses like GTA V, Apex Legends, and many more on the way!</p> <br/> <a class="px-3 py-2 bg-[#eee] mt-3 hover:bg-[#ccc] transition rounded-lg flex gap-3 items-center w-max" href="https://discord.gg/X8FEjpEs6R"><span class="text-[#000]">Join our Discord</span></a>',Se,V,Y,it='<span id="features" class="uppercase text-sm text-neutral-300">Features</span> <h2 class="font-semibold text-2xl tracking-wide">Why choose North?</h2>',qe,b,j,he,B,Pe,me,ct='<h3 class="font-semibold text-lg">Customizability</h3> <p class="text-sm text-neutral-300">North provides an extensive range of customization choices, letting you tailor the cheat to your preferences.</p>',Oe,S,fe,J,Ue,ve,ut='<h3 class="font-semibold text-lg">Translations</h3> <p class="text-sm text-neutral-300">With North, select from an expansive array of languages, enabling you to experience the cheat in your mother tongue.</p>',ze,q,pe,K,Re,ge,dt='<h3 class="font-semibold text-lg">Internal</h3> <p class="text-sm text-neutral-300">Every product we offer is internal, ensuring that cheats are integrated directly into the game process for a seamless, lag-free experience</p>',Fe,P,_e,X,Ge,xe,ht='<h3 class="font-semibold text-lg">Unique GUI</h3> <p class="text-sm text-neutral-300">Our sleek and user-friendly cheat interface boasts extensive customization options, powered by our distinctive framework.</p>',We,O,we,Q,Ye,be,mt='<h3 class="font-semibold text-lg">Time Compensation</h3> <p class="text-sm text-neutral-300">Should there be any interruptions, whether from game updates or server downtimes, we&#39;ll compensate your subscription.</p>',Be,U,ye,Z,Je,$e,ft='<h3 class="font-semibold text-lg">Security</h3> <p class="text-sm text-neutral-300">We&#39;ve invested significantly in our security measures and bypasses to maximize your protection from bans. To date, we&#39;ve experienced zero bans.</p>',Ke,ee,vt='<p class="text-sm text-neutral-300 text-center">Discover more of what we bring to the table. Register now and embark on the journey with North.</p>',Xe,Te,M,z,pt="Showcases",Qe,te,gt="Watch North in action",Ze,R,_t="Purchase North Mod Menu",et,ae,Ce,A,se,Ee,tt,xt=new Date().getFullYear()+"",at,st,ne,wt="All logos, screenshots, and trademarks belong to their respective holders",nt,re,bt=`<img src="${sa}" alt="YouTube" class="h-5 object-contain opacity-70 hover:opacity-90"/>`,Me;B=new de({props:{src:Yt}}),J=new de({props:{src:Bt}}),K=new de({props:{src:Kt}}),X=new de({props:{src:Xt}}),Q=new de({props:{src:Qt}}),Z=new de({props:{src:Zt}});let le=Ht(u[0].showcases),p=[];for(let r=0;r<le.length;r+=1)p[r]=jt(Nt(u,le,r));const Pt=r=>D(p[r],1,1,()=>{p[r]=null});return{c(){a=s("meta"),i=s("meta"),o=s("meta"),d=s("meta"),_=s("meta"),x=s("meta"),h=s("meta"),w=s("meta"),y=s("meta"),G=f(),H=s("header"),H.innerHTML=E,C=f(),$=s("main"),W=s("section"),W.innerHTML=ot,Se=f(),V=s("section"),Y=s("div"),Y.innerHTML=it,qe=f(),b=s("div"),j=s("div"),he=s("div"),oe(B.$$.fragment),Pe=f(),me=s("div"),me.innerHTML=ct,Oe=f(),S=s("div"),fe=s("div"),oe(J.$$.fragment),Ue=f(),ve=s("div"),ve.innerHTML=ut,ze=f(),q=s("div"),pe=s("div"),oe(K.$$.fragment),Re=f(),ge=s("div"),ge.innerHTML=dt,Fe=f(),P=s("div"),_e=s("div"),oe(X.$$.fragment),Ge=f(),xe=s("div"),xe.innerHTML=ht,We=f(),O=s("div"),we=s("div"),oe(Q.$$.fragment),Ye=f(),be=s("div"),be.innerHTML=mt,Be=f(),U=s("div"),ye=s("div"),oe(Z.$$.fragment),Je=f(),$e=s("div"),$e.innerHTML=ft,Ke=f(),ee=s("div"),ee.innerHTML=vt,Xe=f(),Te=s("section"),M=s("div"),z=s("span"),z.textContent=pt,Qe=f(),te=s("h2"),te.textContent=gt,Ze=f(),R=s("a"),R.textContent=_t,et=f(),ae=s("div");for(let r=0;r<p.length;r+=1)p[r].c();Ce=f(),A=s("footer"),se=s("div"),Ee=s("span"),tt=Lt("© North "),at=Lt(xt),st=f(),ne=s("p"),ne.textContent=wt,nt=f(),re=s("a"),re.innerHTML=bt,this.h()},l(r){const c=Rt("svelte-1o09vdw",document.head);a=n(c,"META",{name:!0,content:!0}),i=n(c,"META",{name:!0,content:!0}),o=n(c,"META",{name:!0,content:!0}),d=n(c,"META",{name:!0,content:!0}),_=n(c,"META",{name:!0,content:!0}),x=n(c,"META",{name:!0,content:!0}),h=n(c,"META",{name:!0,content:!0}),w=n(c,"META",{"http-equiv":!0,content:!0}),y=n(c,"META",{name:!0,content:!0}),c.forEach(l),G=v(r),H=n(r,"HEADER",{"data-svelte-h":!0}),T(H)!=="svelte-fo4u2y"&&(H.innerHTML=E),C=v(r),$=n(r,"MAIN",{class:!0});var m=g($);W=n(m,"SECTION",{class:!0,"data-svelte-h":!0}),T(W)!=="svelte-1iui5l4"&&(W.innerHTML=ot),Se=v(m),V=n(m,"SECTION",{class:!0});var N=g(V);Y=n(N,"DIV",{class:!0,"data-svelte-h":!0}),T(Y)!=="svelte-12vh8mx"&&(Y.innerHTML=it),qe=v(N),b=n(N,"DIV",{class:!0});var k=g(b);j=n(k,"DIV",{class:!0});var ke=g(j);he=n(ke,"DIV",{class:!0});var yt=g(he);ie(B.$$.fragment,yt),yt.forEach(l),Pe=v(ke),me=n(ke,"DIV",{"data-svelte-h":!0}),T(me)!=="svelte-zlepmm"&&(me.innerHTML=ct),ke.forEach(l),Oe=v(k),S=n(k,"DIV",{class:!0});var Ie=g(S);fe=n(Ie,"DIV",{class:!0});var $t=g(fe);ie(J.$$.fragment,$t),$t.forEach(l),Ue=v(Ie),ve=n(Ie,"DIV",{"data-svelte-h":!0}),T(ve)!=="svelte-1oqfddk"&&(ve.innerHTML=ut),Ie.forEach(l),ze=v(k),q=n(k,"DIV",{class:!0});var De=g(q);pe=n(De,"DIV",{class:!0});var Tt=g(pe);ie(K.$$.fragment,Tt),Tt.forEach(l),Re=v(De),ge=n(De,"DIV",{"data-svelte-h":!0}),T(ge)!=="svelte-169mvra"&&(ge.innerHTML=dt),De.forEach(l),Fe=v(k),P=n(k,"DIV",{class:!0});var Le=g(P);_e=n(Le,"DIV",{class:!0});var Et=g(_e);ie(X.$$.fragment,Et),Et.forEach(l),Ge=v(Le),xe=n(Le,"DIV",{"data-svelte-h":!0}),T(xe)!=="svelte-qdxlxm"&&(xe.innerHTML=ht),Le.forEach(l),We=v(k),O=n(k,"DIV",{class:!0});var Ve=g(O);we=n(Ve,"DIV",{class:!0});var Ct=g(we);ie(Q.$$.fragment,Ct),Ct.forEach(l),Ye=v(Ve),be=n(Ve,"DIV",{"data-svelte-h":!0}),T(be)!=="svelte-1j0nb7p"&&(be.innerHTML=mt),Ve.forEach(l),Be=v(k),U=n(k,"DIV",{class:!0});var He=g(U);ye=n(He,"DIV",{class:!0});var Mt=g(ye);ie(Z.$$.fragment,Mt),Mt.forEach(l),Je=v(He),$e=n(He,"DIV",{"data-svelte-h":!0}),T($e)!=="svelte-1od5je"&&($e.innerHTML=ft),He.forEach(l),k.forEach(l),Ke=v(N),ee=n(N,"DIV",{class:!0,"data-svelte-h":!0}),T(ee)!=="svelte-1yq3yja"&&(ee.innerHTML=vt),N.forEach(l),Xe=v(m),Te=n(m,"SECTION",{class:!0});var kt=g(Te);M=n(kt,"DIV",{class:!0});var F=g(M);z=n(F,"SPAN",{id:!0,class:!0,"data-svelte-h":!0}),T(z)!=="svelte-1g8vjg3"&&(z.textContent=pt),Qe=v(F),te=n(F,"H2",{class:!0,"data-svelte-h":!0}),T(te)!=="svelte-18swew2"&&(te.textContent=gt),Ze=v(F),R=n(F,"A",{href:!0,class:!0,"data-svelte-h":!0}),T(R)!=="svelte-tc5bdz"&&(R.textContent=_t),et=v(F),ae=n(F,"DIV",{class:!0});var It=g(ae);for(let lt=0;lt<p.length;lt+=1)p[lt].l(It);It.forEach(l),F.forEach(l),kt.forEach(l),m.forEach(l),Ce=v(r),A=n(r,"FOOTER",{class:!0});var Ae=g(A);se=n(Ae,"DIV",{});var Ne=g(se);Ee=n(Ne,"SPAN",{});var rt=g(Ee);tt=Vt(rt,"© North "),at=Vt(rt,xt),rt.forEach(l),st=v(Ne),ne=n(Ne,"P",{class:!0,"data-svelte-h":!0}),T(ne)!=="svelte-gu5p3r"&&(ne.textContent=wt),Ne.forEach(l),nt=v(Ae),re=n(Ae,"A",{href:!0,"data-svelte-h":!0}),T(re)!=="svelte-wcfalo"&&(re.innerHTML=bt),Ae.forEach(l),this.h()},h(){document.title="North | The #1 Cheat Provider",t(a,"name","title"),t(a,"content","North | A Cheat Provider"),t(i,"name","description"),t(i,"content","North Unleashes Cutting-Edge Cheat Technology"),t(o,"name","keywords"),t(o,"content","north, cheat, gta, apex legends"),t(d,"name","author"),t(d,"content","North"),t(_,"name","viewport"),t(_,"content","width=device-width, initial-scale=1.0"),t(x,"name","theme-color"),t(x,"content","#3e404e"),t(h,"name","robots"),t(h,"content","index, follow"),t(w,"http-equiv","Content-Type"),t(w,"content","text/html; charset=utf-8"),t(y,"name","language"),t(y,"content","English"),t(W,"class","my-36"),t(Y,"class","mb-4"),t(he,"class","w-8 h-8 p-2 rounded-full bg-neutral-800/50 shrink-0"),t(j,"class","flex gap-2"),t(fe,"class","w-8 h-8 p-2 rounded-full bg-neutral-800/50 shrink-0"),t(S,"class","flex gap-2"),t(pe,"class","w-8 h-8 p-2 rounded-full bg-neutral-800/50 shrink-0"),t(q,"class","flex gap-2"),t(_e,"class","w-8 h-8 p-2 rounded-full bg-neutral-800/50 shrink-0"),t(P,"class","flex gap-2"),t(we,"class","w-8 h-8 p-2 rounded-full bg-neutral-800/50 shrink-0"),t(O,"class","flex gap-2"),t(ye,"class","w-8 h-8 p-2 rounded-full bg-neutral-800/50 shrink-0"),t(U,"class","flex gap-2"),t(b,"class","grid grid-cols-2 gap-6"),t(ee,"class","mt-10"),t(V,"class","pt-4"),t(z,"id","showcase"),t(z,"class","uppercase text-sm text-neutral-300"),t(te,"class","font-semibold text-2xl tracking-wide"),t(R,"href","https://divinemods.com/shop/north"),t(R,"class","sr-only"),t(ae,"class","grid grid-cols-2 contain gap-4"),t(M,"class","mb-4"),t(Te,"class","pt-4 mt-24"),t($,"class","p-4 max-w-5xl mx-auto"),t(ne,"class","text-neutral-400"),t(re,"href","https://www.youtube.com/@northcheats"),t(A,"class","flex justify-between max-w-5xl mx-auto p-4 mb-2")},m(r,c){e(document.head,a),e(document.head,i),e(document.head,o),e(document.head,d),e(document.head,_),e(document.head,x),e(document.head,h),e(document.head,w),e(document.head,y),L(r,G,c),L(r,H,c),L(r,C,c),L(r,$,c),e($,W),e($,Se),e($,V),e(V,Y),e(V,qe),e(V,b),e(b,j),e(j,he),ce(B,he,null),e(j,Pe),e(j,me),e(b,Oe),e(b,S),e(S,fe),ce(J,fe,null),e(S,Ue),e(S,ve),e(b,ze),e(b,q),e(q,pe),ce(K,pe,null),e(q,Re),e(q,ge),e(b,Fe),e(b,P),e(P,_e),ce(X,_e,null),e(P,Ge),e(P,xe),e(b,We),e(b,O),e(O,we),ce(Q,we,null),e(O,Ye),e(O,be),e(b,Be),e(b,U),e(U,ye),ce(Z,ye,null),e(U,Je),e(U,$e),e(V,Ke),e(V,ee),e($,Xe),e($,Te),e(Te,M),e(M,z),e(M,Qe),e(M,te),e(M,Ze),e(M,R),e(M,et),e(M,ae);for(let m=0;m<p.length;m+=1)p[m]&&p[m].m(ae,null);L(r,Ce,c),L(r,A,c),e(A,se),e(se,Ee),e(Ee,tt),e(Ee,at),e(se,st),e(se,ne),e(A,nt),e(A,re),Me=!0},p(r,[c]){if(c&1){le=Ht(r[0].showcases);let m;for(m=0;m<le.length;m+=1){const N=Nt(r,le,m);p[m]?(p[m].p(N,c),I(p[m],1)):(p[m]=jt(N),p[m].c(),I(p[m],1),p[m].m(ae,null))}for(qt(),m=le.length;m<p.length;m+=1)Pt(m);St()}},i(r){if(!Me){I(B.$$.fragment,r),I(J.$$.fragment,r),I(K.$$.fragment,r),I(X.$$.fragment,r),I(Q.$$.fragment,r),I(Z.$$.fragment,r);for(let c=0;c<le.length;c+=1)I(p[c]);Me=!0}},o(r){D(B.$$.fragment,r),D(J.$$.fragment,r),D(K.$$.fragment,r),D(X.$$.fragment,r),D(Q.$$.fragment,r),D(Z.$$.fragment,r),p=p.filter(Boolean);for(let c=0;c<p.length;c+=1)D(p[c]);Me=!1},d(r){r&&(l(G),l(H),l(C),l($),l(Ce),l(A)),l(a),l(i),l(o),l(d),l(_),l(x),l(h),l(w),l(y),ue(B),ue(J),ue(K),ue(X),ue(Q),ue(Z),Ft(p,r)}}}function oa(u,a,i){let{data:o}=a;const d=(_,x,h)=>i(0,x[h].playVideo=!0,o);return u.$$set=_=>{"data"in _&&i(0,o=_.data)},[o,d]}class ga extends Ut{constructor(a){super(),zt(this,a,oa,la,Ot,{data:0})}}export{ga as component,pa as universal};
