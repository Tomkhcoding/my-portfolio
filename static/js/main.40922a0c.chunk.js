(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{55:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),i=t(34),o=t.n(i),a=t(6),s=t(11),d=t(3),j=t(18),l=t(1),b=c.a.createContext(),h=c.a.createContext();function u(){return Object(r.useContext)(b)}function x(){return Object(r.useContext)(h)}function O(e){var n=e.children,t=Object(r.useState)(!1),c=Object(j.a)(t,2),i=c[0],o=c[1];return Object(l.jsx)(b.Provider,{value:i,children:Object(l.jsx)(h.Provider,{value:function(){o((function(e){return!e})),console.log(i)},children:n})})}var f,p=t(4),m=Object(p.b)(f||(f=Object(a.a)(["\n    root{\n        box-sizing: border-box;\n    }\n\n    body{\n        margin: 0;\n        padding: 0;\n        background-color: silver;\n        overflow-x: hidden;\n    }\n\n    ul {\n        margin:1rem;\n        padding:1rem;\n        list-style-type: none;\n      }\n"])));var g,v=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Tom Knutsen"}),Object(l.jsx)("p",{style:{fontStyle:"italic"},children:"Siden om, av og for Tom"})]})},w=t.p+"static/media/Me.ed8f774d.jpg",k=p.c.img(g||(g=Object(a.a)(["\n    min-width: 10rem;\n    max-width: 15vw;\n    margin: 2rem 0 0.25rem;\n    border-radius: 100%;\n"])));var y,C,A,P,S=function(){var e=u(),n=x();return Object(l.jsx)("div",{children:Object(l.jsx)(s.b,{to:"/",children:Object(l.jsx)(k,{src:w,alt:"",onClick:e?n:void 0})})})},z=p.c.button(y||(y=Object(a.a)(["\n    background-color: ",";\n    color: ",";\n    border:"," ;\n    padding:0;\n    margin: 0.5rem auto;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    border-radius: 15px;\n    width: 100%;\n    min-height:100%;\n    min-width:150px;\n    text-decoration:none;\n    font-size:0.75em;\n\n    .active & {\n        color:white;\n        text-decoration: underline;\n        background-color:black;\n    }\n\n    * {\n    }\n"])),(function(e){return e.disabled?"red":"silver"}),(function(e){return e.disabled?"black":null}),(function(e){return e.project?"solid black 3px":"none"}));function E(e){var n=u(),t=x();return Object(l.jsx)(z,{onClick:n?void 0:t,children:Object(l.jsx)("h1",{children:e.text})})}var F=Object(p.c)(s.c)(C||(C=Object(a.a)(["\n  text-decoration:none;\n"]))),J=p.c.li(A||(A=Object(a.a)(["\n    & :hover {\n      background-color:rgba(150, 150, 150);\n      border-radius: 15px;\n      \n      * {\n        text-decoration:underline;\n      }\n    }\n\n    & .active {\n      pointer-events:none;\n      user-select:none;\n      cursor:default;\n    }\n"]))),L=p.c.div(P||(P=Object(a.a)(["\n  position: absolute;\n  top:0;\n  text-align: center;\n  width: 20%;\n  ","\n  transition: all 1s;\n  height:100vh;\n  \n"])),(function(e){return e.theme}));var T,B,I,K,M=function(){var e=u()?{left:"0%"}:{left:"40%"};return Object(l.jsx)(p.a,{theme:e,children:Object(l.jsxs)(L,{children:[Object(l.jsx)(S,{}),Object(l.jsx)(v,{}),Object(l.jsxs)("ul",{children:[Object(l.jsx)(J,{children:Object(l.jsx)(F,{to:"/projects",children:Object(l.jsx)(E,{text:"Projects"})})}),Object(l.jsx)(J,{children:Object(l.jsx)(E,{text:"About"})}),Object(l.jsx)(J,{children:Object(l.jsx)(E,{text:"CV"})}),Object(l.jsx)(J,{children:Object(l.jsx)(E,{text:"Contact"})})]})]})})},V=t(38),_=p.c.ul(T||(T=Object(a.a)(["\n    grid-area: list;\n    margin: auto 1rem;\n"]))),q=p.c.li(B||(B=Object(a.a)(["\n    & :hover {\n      background-color:",";\n      border-radius: 15px;\n      text-decoration: ","; \n     & * :hover {\n        \n    }\n\n    }\n\n    & .active {\n      pointer-events:none;\n      user-select:none;\n      cursor:default;\n    }\n"])),(function(e){return e.disabled?"none":"rgba(150, 150, 150)"}),(function(e){return e.disabled?"none":"underline"})),D=Object(p.c)(s.c)(I||(I=Object(a.a)(["\n  text-decoration:none;\n  "]))),G=p.c.div(K||(K=Object(a.a)(['\n    height:90vh;\n    width:110%;\n    padding-top:1rem;\n    display: grid; \n        grid-template-columns: 0.25fr 1fr 1fr; \n        grid-template-rows: 9fr 1fr; \n        gap: 10px 10px; \n        grid-template-areas: \n            "list iframe iframe"\n            "list info1 info2"; \n'])));var H,N=function(){var e=u(),n=x();Object(r.useEffect)((function(){e||n()}),[]);var t=function(){var e=Object(V.a)("https://tomkhcoding.github.io/api/projects.json",{headers:{accept:"application/json"}}),n=e.data,t=e.error;return t?t.message:n?Object(l.jsx)(s.a,{basename:"/my-portfolio/projects",children:Object(l.jsxs)(G,{children:[Object(l.jsx)(_,{children:n.slice(0,5).map((function(e){return Object(l.jsx)(l.Fragment,{children:"disabled"===e.state?Object(l.jsx)(q,{disabled:!0,children:Object(l.jsx)(z,{disabled:!0,children:Object(l.jsx)("h1",{children:"".concat(e.name)})})},e.id):Object(l.jsx)(q,{children:Object(l.jsx)(D,{exact:!0,to:"/".concat(e.path),children:Object(l.jsx)(z,{project:!0,children:Object(l.jsx)("h1",{children:"".concat(e.name)})})})},e.id)})}))}),Object(l.jsx)(d.c,{children:n.slice(0,5).map((function(e){return Object(l.jsxs)(d.a,{exact:!0,path:"/".concat(e.path),children:[Object(l.jsx)("iframe",{style:{gridArea:"iframe"},src:"".concat(e.url),title:"".concat(e.name),width:"95%",height:"100%"}),Object(l.jsx)("h3",{style:{gridArea:"info1",whiteSpace:"pre-wrap"},children:e.description}),Object(l.jsxs)("h3",{style:{gridArea:"info2"},children:["Prosjektet ligger tilgjengelig i n\xe5verende tilstand her:",Object(l.jsx)("br",{})," ",Object(l.jsx)("a",{href:"".concat(e.url),target:"_blank",rel:"noreferrer",children:"tomkhcoding.github.io/pokemon-search"})]})]},e.id)}))})]})}):null};return Object(l.jsx)(t,{})};function Q(){return Object(l.jsx)(l.Fragment,{})}var R=p.c.div(H||(H=Object(a.a)(["\n  position: absolute;\n  transition: all 1s;\n  width: ",";\n  height: ",";\n  left: ",";\n  padding: '0';\n  top: ",";\n  border-left: ",";\n  "])),(function(e){return e.theme.width}),(function(e){return e.theme.height}),(function(e){return e.theme.left}),(function(e){return e.theme.top}),(function(e){return e.theme.borderLeft}));var U=function(){var e=u()?{left:"20%",width:"75vw",height:"100vh",top:"0",borderLeft:"2px solid black"}:{left:"100%",width:"0",height:"0",top:"0"};return Object(l.jsxs)(s.a,{basename:"/my-portfolio",children:[Object(l.jsx)(m,{}),Object(l.jsx)(M,{}),Object(l.jsx)(p.a,{theme:e,children:Object(l.jsx)("div",{style:{position:"relative"},children:Object(l.jsx)(R,{children:Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{path:"/projects",children:Object(l.jsx)(N,{})}),Object(l.jsx)(d.a,{path:"/about",children:Object(l.jsx)(Q,{})})]})})})})]})};o.a.render(Object(l.jsx)(O,{children:Object(l.jsx)(U,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.40922a0c.chunk.js.map