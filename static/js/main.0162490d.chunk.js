(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{60:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),c=t(36),o=t.n(c),a=t(4),l=t(13),s=t(6),d=t(14),j=t(1),b=i.a.createContext(),h=i.a.createContext();function u(){return Object(r.useContext)(b)}function p(){return Object(r.useContext)(h)}function g(n){var e=n.children,t=Object(r.useState)(!1),i=Object(d.a)(t,2),c=i[0],o=i[1];return Object(j.jsx)(b.Provider,{value:c,children:Object(j.jsx)(h.Provider,{value:function(){o((function(n){return!n})),console.log(c)},children:e})})}var x,m=t(3),O=Object(m.b)(x||(x=Object(a.a)(["\n    root{\n        box-sizing: border-box;\n        \n    }\n\n    html {\n        font-family: arial;\n    }\n\n    body{\n        margin: 0;\n        overflow-x: hidden;\n        position:relative;\n        min-height:100vh;\n        min-width:100%;\n        padding:0;\n        background-color: #171717;\n    }\n\n    ul {\n        margin:1rem;\n        padding:1rem;\n        list-style-type: none;\n      }\n"])));var f,v,k,w,y=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{style:{color:"silver"},children:"Tom Knutsen"}),Object(j.jsx)("p",{style:{fontStyle:"italic",color:"silver"},children:"Siden om, av og for Tom"})]})},z=t.p+"static/media/Me.ed8f774d.jpg",C=m.c.img(f||(f=Object(a.a)(["\n    /* min-width: 5rem; */\n    width: 250px;\n    margin: 1.5rem;\n    border-radius: 100%;\n    align-items: center;\n    z-index:-1;\n"]))),A=m.c.div(v||(v=Object(a.a)(["\n    position: relative;\n    \n"]))),E=m.c.div(k||(k=Object(a.a)(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 250px;\n    width: 250px;\n    opacity:0;\n    transition: .5s ease;\n    background-color: #aaa9ad99;\n    border-radius: 100%;\n    margin: 1.5rem;\n    z-index:1;\n\n    :hover {\n        opacity:",";\n        /* pointer-events:none; */\n        user-select:none;\n        cursor:default;\n        left:0;\n    }\n"])),(function(n){return n.theme.opacity})),P=m.c.text(w||(w=Object(a.a)(["\n    position: absolute;\n    top:50%;\n    left:50%;\n    transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    text-align: center;\n    font-size: 32px;\n    color:#171717;\n"])));var S,T,I,_,J=function(){var n=Object(s.f)(),e=Object(r.useCallback)((function(){return n.push("/")}),[n]),t=i.a.useState({}),c=Object(d.a)(t,2),o=c[0],a=c[1],l=u(),b=p(),h={opacity:"1"},g={opacity:"0"},x=Object(s.g)();return Object(r.useEffect)((function(){console.log(x.pathname),"/"===x.pathname&&(console.log(o),a(g)),"/"!==x.pathname&&(a(h),console.log("kuk"),console.log(o))}),[x]),Object(j.jsx)(m.a,{theme:o,children:Object(j.jsxs)(A,{children:[Object(j.jsx)(C,{src:z,alt:""}),Object(j.jsx)(E,{onClick:function(){"/"!==x.pathname&&e(),l&&b(!1)},children:Object(j.jsx)(P,{children:"Home"})})]})})},K=m.c.button(S||(S=Object(a.a)(["\n    background-color: ",";\n    color: ",";\n    border:"," ;\n    /* margin: 0.5rem 1rem; */\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    border-radius: 15px;\n    width: 100%;\n    min-height:100%;\n    min-width:150px;\n    text-decoration:none;\n    font-size:0.75em;\n\n    .active & {\n        color:white;\n        text-decoration: underline;\n        background-color:black;\n        border: 2px solid silver;\n    }\n"])),(function(n){return n.disabled?"#d5131e":"silver"}),(function(n){return n.disabled?"black":null}),(function(n){return n.project?"solid black 3px":n.disabled?"solid black 1px":"none"}));function B(n){var e=u(),t=p();return Object(j.jsx)(K,{onClick:e?void 0:t,children:Object(j.jsx)("h1",{children:n.text})})}var F=Object(m.c)(l.b)(T||(T=Object(a.a)(["\n  text-decoration:none;\n"]))),H=m.c.li(I||(I=Object(a.a)(["\n  padding: 1rem;\n    & :hover {\n      background-color:rgba(150, 150, 150);\n      border-radius: 15px;      \n      * {\n        text-decoration:underline;\n      }\n    }\n\n    & .active {\n      pointer-events:none;\n      user-select:none;\n      cursor:default;\n    }\n"]))),L=m.c.div(_||(_=Object(a.a)(["\n  position: absolute;\n  top:0;\n  text-align: center;\n  width:300px;\n  ","\n  transition: all 1s;\n  height:fill;\n"])),(function(n){return n.theme}));var M,R,V,q,D,G=function(){var n=u()?{left:"0%"}:{left:"40%"};return Object(j.jsx)(m.a,{theme:n,children:Object(j.jsxs)(L,{children:[Object(j.jsx)(J,{}),Object(j.jsx)(y,{}),Object(j.jsxs)("ul",{children:[Object(j.jsx)(H,{children:Object(j.jsx)(F,{to:"/projects",children:Object(j.jsx)(B,{text:"Projects"})})}),Object(j.jsx)(H,{children:Object(j.jsx)(F,{to:"/about",children:Object(j.jsx)(B,{text:"About"})})}),Object(j.jsx)(H,{children:Object(j.jsx)(B,{text:"CV"})}),Object(j.jsx)(H,{children:Object(j.jsx)(F,{to:"/contact",children:Object(j.jsx)(B,{text:"Contact"})})})]})]})})},N=t(40),Q=m.c.ul(M||(M=Object(a.a)(["\n    grid-area: list;\n    margin: auto 1rem;\n"]))),U=m.c.li(R||(R=Object(a.a)(["\n    padding: 1rem;\n    \n    & :hover {\n      background-color:",";\n      border-radius: 15px;\n      text-decoration: ",";\n    }\n\n    & .active {\n      pointer-events:none;\n      user-select:none;\n      cursor:default;\n    }\n"])),(function(n){return n.disabled?"none":"rgba(150, 150, 150)"}),(function(n){return n.disabled?"none":"underline"})),W=Object(m.c)(l.b)(V||(V=Object(a.a)(["\n  text-decoration:none;\n  "]))),X=m.c.div(q||(q=Object(a.a)(['\n    height:90vh;\n    /* width:100%; */\n    padding-top:1rem;\n    margin-right:2rem;\n    display: grid; \n        grid-template-columns: 0.25fr 1fr 1fr; \n        grid-template-rows: 2fr 1fr; \n        gap: 15px 15px; \n        grid-template-areas: \n            "list iframe iframe"\n            "list info1 info2"; \n']))),Y=m.c.div(D||(D=Object(a.a)(["\nfont-size:1.25rem;\nborder-radius:15px;\npadding:8px;\ncolor:white;\nfont-weight:bold;\nmargin:0;\nwhite-space:pre-wrap;\n\na{\n    color:black;\n    transition: all 0.25s;\n} a:hover {\n    font-size:130%;\n    transition: all 0.25s;\n}\n\n"])));var Z,$,nn=function(){var n=u(),e=p();Object(r.useEffect)((function(){n||e()}),[]);var t=function(){var n=Object(N.a)("https://tomkhcoding.github.io/api/projects.json",{headers:{accept:"application/json"}}),e=n.data,t=n.error;return t?t.message:e?Object(j.jsx)(l.a,{basename:"/my-portfolio/projects",children:Object(j.jsxs)(X,{children:[Object(j.jsx)(Q,{children:e.slice(0,5).map((function(n){return Object(j.jsx)(j.Fragment,{children:"disabled"===n.state?Object(j.jsx)(U,{disabled:!0,children:Object(j.jsx)(K,{disabled:!0,children:Object(j.jsx)("h1",{children:"".concat(n.name)})})},n.id):Object(j.jsx)(U,{children:Object(j.jsx)(W,{exact:!0,to:"/".concat(n.path),children:Object(j.jsx)(K,{project:!0,children:Object(j.jsx)("h1",{children:"".concat(n.name)})})})},n.id)})}))}),Object(j.jsx)(s.c,{children:e.slice(0,5).map((function(n){return Object(j.jsxs)(s.a,{exact:!0,path:"/".concat(n.path),children:[Object(j.jsx)("iframe",{style:{gridArea:"iframe",border:"none",borderRadius:"15px"},src:"".concat(n.url),title:"".concat(n.name),width:"100%",height:"100%"}),Object(j.jsx)(Y,{style:{gridArea:"info1"},children:Object(j.jsx)("p",{children:n.description})}),Object(j.jsx)(Y,{style:{gridArea:"info2"},children:Object(j.jsxs)("p",{children:["The Project is available, in it's current state, here:",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"".concat(n.url),target:"_blank",rel:"noreferrer",children:"tomkhcoding.github.io/pokemon-search"})]})})]},n.id)}))})]})}):null};return Object(j.jsx)(t,{})};function en(){var n=m.c.div(Z||(Z=Object(a.a)(['\n        display: grid; \n            grid-template-columns: 1fr 1fr 1fr; \n            grid-template-rows: 1fr 1fr 1fr; \n            gap: 0px; \n            grid-template-areas: \n                ". general general"\n                ". general general"\n                ". . ."; \n        margin-right:1rem;\n        width:100%;\n\n    ']))),e=m.c.div($||($=Object(a.a)(["\n        grid-area: general;\n        background-color: #202020;\n        color:white;\n        padding: 1rem;\n    "])));return Object(j.jsx)(n,{children:Object(j.jsx)(e,{children:"I am a web developer in training"})})}var tn,rn,cn,on,an,ln,sn,dn,jn,bn=t(42),hn=t(43),un=m.c.div(tn||(tn=Object(a.a)(['\n    position:absolute;\n    bottom:0;\n    left:0;\n    background-color: #202020;\n    width:100%;\n    height:2.5rem;\n    padding:0;\n    margin:0;\n    display: grid;\n        grid-template-columns: 300px  2.5rem 2fr;\n        grid-template-rows: 1fr;\n        gap: 0px 0px;\n        grid-auto-flow: row;\n        grid-template-areas:\n        "copyright github something ";\n']))),pn=Object(m.c)(bn.a)(rn||(rn=Object(a.a)(["\nheight:2rem;\nwidth:2.5rem;\ncolor:silver;\npadding:0 ;\nmargin:0;\ngrid-area: github;\n\n\n\n:hover{\n    background-color: silver;\n    color:black;\n    border-radius:100%;\n}\n"]))),gn=m.c.p(cn||(cn=Object(a.a)(["\n    grid-area: copyright;\n    margin:0;\n    /* padding: 0;  */\n    color:silver;\n    font-size: 1.5rem;\n    text-align: center;\n    align-self:center;\n\n"]))),xn=m.c.a(on||(on=Object(a.a)(["\nalign-self:center;\njustify-self: center;\n"])));function mn(){return Object(j.jsxs)(un,{children:[Object(j.jsx)(xn,{href:"https://github.com/tomkhcoding",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(pn,{icon:hn.a,size:"2x"})}),Object(j.jsx)(gn,{children:"\xa9 Tom Knutsen 2021"})]})}function On(){var n=m.c.div(an||(an=Object(a.a)(['\n        display: grid; \n            grid-template-columns: 1fr 1fr 1fr; \n            grid-template-rows: 1fr 1fr 1fr 1fr; \n            gap: 0px; \n            grid-template-areas:\n                ". . ."\n                ". general general"\n                ". general general"\n                ". . ."; \n        margin-right: 5rem;\n        height: 100%;\n    ']))),e=m.c.div(ln||(ln=Object(a.a)(["\n        grid-area: general;\n        background-color: #202020;\n        color:white;\n        padding: 1rem;\n        border-radius: 15px;\n    "]))),t=m.c.a(sn||(sn=Object(a.a)(["\n        color: silver;\n    "])));return Object(j.jsx)(n,{children:Object(j.jsxs)(e,{children:[Object(j.jsx)("h2",{children:"Email:"})," ",Object(j.jsx)(t,{href:"mailto:tom.kodehode@gmail.com",children:"tom.kodehode@gmail.com"}),Object(j.jsx)("h2",{children:"LinkedIn:"})," ",Object(j.jsx)(t,{href:"https://www.linkedin.com/in/tom-knutsen-a2a2b021b/",target:"_blank",rel:"noreferrer",children:"https://www.linkedin.com/in/tom-knutsen-a2a2b021b/"})]})})}var fn=m.c.div(dn||(dn=Object(a.a)(["\n  position: absolute;\n  transition: all 1s;\n  width:85%;\n  height: calc(100vh - 2.5rem - 3px);\n  left: ",";\n  padding: 0;\n  top: 0;\n  border-left: 3px solid silver;\n  border-bottom: 3px solid silver;\n  opacity:",";\n  background: linear-gradient(to bottom right, rgba(60,0,150,1) 0%,rgba(0,220,255,1)  100%);\n  /* background-color:#777777; */\n  "])),(function(n){return n.theme.left}),(function(n){return n.theme.opacity})),vn=m.c.div(jn||(jn=Object(a.a)(["\n  position: absolute;\n  bottom:0;\n  width:100%;\n  padding-bottom:1px;\n"])));var kn=function(){var n=u()?{left:"300px",opacity:"1"}:{left:"100%",opacity:"0"};return Object(j.jsxs)(l.a,{basename:"/my-portfolio",children:[Object(j.jsx)(O,{}),Object(j.jsx)(G,{}),Object(j.jsx)(m.a,{theme:n,children:Object(j.jsx)(fn,{children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/projects",children:Object(j.jsx)(nn,{})}),Object(j.jsx)(s.a,{path:"/about",children:Object(j.jsx)(en,{})}),Object(j.jsx)(s.a,{path:"/contact",children:Object(j.jsx)(On,{})})]})})}),Object(j.jsx)(vn,{children:Object(j.jsx)(mn,{})})]})};o.a.render(Object(j.jsx)(g,{children:Object(j.jsx)(kn,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.0162490d.chunk.js.map