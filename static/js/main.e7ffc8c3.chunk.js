(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{42:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),i=t(21),o=t.n(i),a=t(9),j=t(16),s=t.n(j),d=t(22),l=t(13),b=t(4),h=t(3),u=t(1),x=c.a.createContext(),O=c.a.createContext();function f(){return Object(r.useContext)(x)}function p(){return Object(r.useContext)(O)}function m(e){var n=e.children,t=Object(r.useState)(!1),c=Object(l.a)(t,2),i=c[0],o=c[1];return Object(u.jsx)(x.Provider,{value:i,children:Object(u.jsx)(O.Provider,{value:function(){o((function(e){return!e})),console.log(i)},children:n})})}var v=t(2);var g,w=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Tom Knutsen"}),Object(u.jsx)("p",{style:{fontStyle:"italic"},children:"Siden om, av og for Tom"})]})},k=t.p+"static/media/Me.ed8f774d.jpg",y=v.c.img(g||(g=Object(b.a)(["\n    min-width: 10rem;\n    max-width: 15vw;\n    margin: 2rem 0 0.25rem;\n    border-radius: 100%;\n"])));var C,P,T,E,S=function(){var e=f(),n=p();return Object(u.jsx)("div",{children:Object(u.jsx)(a.b,{to:"/",children:Object(u.jsx)(y,{src:k,alt:"",onClick:e?n:void 0})})})},F=v.c.button(C||(C=Object(b.a)(["\n    background-color: silver;\n    border: none;\n    padding:0;\n    margin: 0.5rem auto;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    border-radius: 15px;\n    width: 100%;\n    min-height:100%;\n    min-width:200px;\n    text-decoration:none;\n\n    & :hover{\n        text-decoration: underline;\n    }\n\n    .active & {\n        color:white;\n        text-decoration: underline;\n        background-color:black;\n    }\n"])));function J(e){var n=f(),t=p();return Object(u.jsx)(F,{onClick:n?void 0:t,children:Object(u.jsx)("h1",{children:e.text})})}function z(e){return Object(u.jsx)(F,{children:Object(u.jsx)("h1",{children:e.text})})}var A=Object(v.c)(a.c)(P||(P=Object(b.a)(["\n  text-decoration:none;\n"]))),B=v.c.li(T||(T=Object(b.a)(["\n    & :hover {\n      background-color:rgba(150, 150, 150);\n      border-radius: 15px;\n      \n      * {\n        text-decoration:underline;\n      }\n    }\n\n    & .active {\n      pointer-events:none;\n      user-select:none;\n      cursor:default;\n    }\n"]))),G=v.c.div(E||(E=Object(b.a)(["\n  position: absolute;\n  top:0;\n  text-align: center;\n  width: 20%;\n  ","\n  transition: all 1s;\n  height:100vh;\n"])),(function(e){return e.theme}));var I,K,L=function(){var e=f()?{left:"0%"}:{left:"40%"};return Object(u.jsx)(v.a,{theme:e,children:Object(u.jsxs)(G,{children:[Object(u.jsx)(S,{}),Object(u.jsx)(w,{}),Object(u.jsxs)("ul",{children:[Object(u.jsx)(B,{children:Object(u.jsx)(A,{to:"/projects",children:Object(u.jsx)(J,{text:"Projects"})})}),Object(u.jsx)(B,{children:Object(u.jsx)(J,{text:"About"})}),Object(u.jsx)(B,{children:Object(u.jsx)(J,{text:"CV"})}),Object(u.jsx)(B,{children:Object(u.jsx)(J,{text:"Contact"})})]})]})})},M=v.c.div(I||(I=Object(b.a)(["\n    grid-area:iframe;\n    margin:1rem;\n"]))),V=v.c.iframe(K||(K=Object(b.a)(["\n    width: 100%;\n    height: 100%; \n    \n"])));var q,D,H,N,Q=function(e){return Object(u.jsx)(M,{children:Object(u.jsx)(V,{src:"https://tomkhcoding.github.io/pokemon-search/",title:"test",name:"pokemon"})})},R=Object(v.c)(a.c)(q||(q=Object(b.a)(["\n  text-decoration:none;\n  "]))),U=v.c.div(D||(D=Object(b.a)(['\n    height:80vh;\n    width:80vw;\n    background-color: blue;\n    display: grid; \n        grid-template-columns: 0.5fr 1.5fr 1fr; \n        grid-template-rows: 1fr 1fr 1fr; \n        gap: 15px 15px; \n        grid-template-areas: \n            "list iframe iframe"\n            "list iframe iframe"\n            "list info infos"; \n']))),W=v.c.ul(H||(H=Object(b.a)(["\n    grid-area: list;\n    margin: auto 1rem;\n"]))),X=v.c.li(N||(N=Object(b.a)(["\n    & :hover {\n      background-color:rgba(150, 150, 150);\n      border-radius: 15px;\n      \n      * {\n        text-decoration:underline;\n      }\n    }\n\n    & .active {\n      pointer-events:none;\n      user-select:none;\n      cursor:default;\n    }\n"])));var Y,Z,$=function(e){var n=f(),t=p();return Object(r.useEffect)((function(){n||t(),console.log(e)}),[e.data]),Object(u.jsx)(a.a,{basename:"/my-portfolio/projects",children:Object(u.jsxs)(U,{children:[Object(u.jsxs)(W,{children:[Object(u.jsx)(X,{children:e.data?Object(u.jsx)(R,{to:"/".concat(e.data[0].path),children:Object(u.jsx)(z,{text:"Project One"})}):null}),Object(u.jsx)(X,{children:Object(u.jsx)(z,{text:"Project Two"})}),Object(u.jsx)(X,{children:Object(u.jsx)(z,{text:"Project Three"})}),Object(u.jsx)(X,{children:Object(u.jsx)(z,{text:"Project Four"})}),Object(u.jsx)(X,{children:Object(u.jsx)(z,{text:"Project Five"})})]}),Object(u.jsxs)(h.c,{children:[Object(u.jsx)(X,{}),e.data?Object(u.jsx)(h.a,{to:"/".concat(e.data[0].url),children:Object(u.jsx)(Q,{})}):null]})]})})},_=Object(v.b)(Y||(Y=Object(b.a)(["\n    root{\n        box-sizing: border-box;\n    }\n\n    body{\n        margin: 0;\n        padding: 0;\n        background-color: silver;\n        overflow-x: hidden;\n    }\n\n    ul {\n        margin:1rem;\n        padding:1rem;\n        list-style-type: none;\n      }\n"]))),ee=v.c.div(Z||(Z=Object(b.a)(["\n  position: absolute;\n  transition: all 1s;\n  display:flex;\n  width: ",";\n  height: ",";\n  left: ",";\n  padding: ",";\n  top: ",";\n"])),(function(e){return e.theme.width}),(function(e){return e.theme.height}),(function(e){return e.theme.left}),(function(e){return e.theme.padding}),(function(e){return e.theme.top}));var ne=function(){var e=f()?{left:"20%",width:"75vw",height:"85vh",padding:"3% 0",top:"50%"}:{left:"100%",width:"0",height:"0",padding:"0",top:"0"},n=Object(r.useState)(),t=Object(l.a)(n,2),c=t[0],i=t[1];return Object(r.useEffect)((function(){fetch("./data.json",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(d.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.json();case 3:t=e.sent,console.log("response data?",t),i(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error happened here!"),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}())}),[]),Object(u.jsx)(r.Suspense,{fallback:Object(u.jsx)("h1",{children:"Loading"}),children:Object(u.jsxs)(a.a,{basename:"/my-portfolio",children:[Object(u.jsx)(_,{}),Object(u.jsx)(L,{}),Object(u.jsx)(v.a,{theme:e,children:Object(u.jsx)("div",{style:{position:"relative"},children:Object(u.jsx)(ee,{children:Object(u.jsx)(h.c,{children:Object(u.jsx)(h.a,{path:"/projects",children:Object(u.jsx)($,{data:c})})})})})})]})})};o.a.render(Object(u.jsx)(a.a,{children:Object(u.jsx)(m,{children:Object(u.jsx)(ne,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e7ffc8c3.chunk.js.map