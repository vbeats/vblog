import{d as e,u as t,e as a,f as s,o as i,c as o,a as l,w as n,g as r,t as c,_ as v,p as f,h as d,F as u,r as m,i as p,j as k}from"./app.391d39cb.js";f("data-v-630fe728");const h={key:0,class:"home-hero"},g={key:0,class:"figure"},y={key:1,id:"main-title",class:"title"},x={key:2,class:"description"};d();var _=e({setup(e){const{site:f,frontmatter:d}=t(),u=a((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=d.value;return e||t||a||s&&i})),m=a((()=>d.value.heroText||f.value.title));return(e,t)=>s(u)?(i(),o("header",h,[s(d).heroImage?(i(),o("figure",g,[l("img",{class:"image",src:s(n)(s(d).heroImage),alt:s(d).heroAlt},null,8,["src","alt"])])):r("v-if",!0),s(m)?(i(),o("h1",y,c(s(m)),1)):r("v-if",!0),s(d).tagline?(i(),o("p",x,c(s(d).tagline),1)):r("v-if",!0),s(d).actionLink&&s(d).actionText?(i(),o(v,{key:3,item:{link:s(d).actionLink,text:s(d).actionText},class:"action"},null,8,["item"])):r("v-if",!0),s(d).altActionLink&&s(d).altActionText?(i(),o(v,{key:4,item:{link:s(d).altActionLink,text:s(d).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)}});_.__scopeId="data-v-630fe728",f("data-v-245bde66");const b={key:0,class:"home-features"},I={class:"wrapper"},T={class:"container"},A={class:"features"},L={key:0,class:"title"},$={key:1,class:"details"};d();var j=e({setup(e){const{frontmatter:n}=t(),v=a((()=>n.value.features&&n.value.features.length>0)),f=a((()=>n.value.features?n.value.features:[]));return(e,t)=>s(v)?(i(),o("div",b,[l("div",I,[l("div",T,[l("div",A,[(i(!0),o(u,null,m(s(f),((e,t)=>(i(),o("section",{key:t,class:"feature"},[e.title?(i(),o("h2",L,c(e.title),1)):r("v-if",!0),e.details?(i(),o("p",$,c(e.details),1)):r("v-if",!0)])))),128))])])])])):r("v-if",!0)}});j.__scopeId="data-v-245bde66",f("data-v-bff49316");const w={key:0,class:"footer"},C={class:"container"},F={class:"text"};d();var q=e({setup(e){const{frontmatter:a}=t();return(e,t)=>s(a).footer?(i(),o("footer",w,[l("div",C,[l("p",F,c(s(a).footer),1)])])):r("v-if",!0)}});q.__scopeId="data-v-bff49316",f("data-v-40a20ed2");const z={class:"home","aria-labelledby":"main-title"},B={class:"home-content"};d();var D=e({setup:e=>(e,t)=>{const a=p("Content");return i(),o("main",z,[l(_),k(e.$slots,"hero",{},void 0,!0),l(j),l("div",B,[l(a)]),k(e.$slots,"features",{},void 0,!0),l(q),k(e.$slots,"footer",{},void 0,!0)])}});D.__scopeId="data-v-40a20ed2";export default D;
