(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],[,,,,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},,function(e,s,t){"use strict";t.r(s);var c=t(1),i=t.n(c),n=t(7),a=t.n(n),o=(t(12),t(13),t(14),t(15),t(6)),r=t(2),j=t(0),l=function(e){var s=e.id,t=e.clicked,i=Object(c.useState)(null),n=Object(r.a)(i,2),a=n[0],o=n[1],l=Object(c.useState)(!1),d=Object(r.a)(l,2),b=d[0],O=d[1],m=Object(c.useState)({}),v=Object(r.a)(m,2),u=v[0],x=v[1],h=Object(c.useState)(""),N=Object(r.a)(h,2),f=N[0],L=N[1],g=Object(c.useState)(!1),p=Object(r.a)(g,2),y=p[0],C=p[1];Object(c.useEffect)((function(){var e=new AbortController;return fetch("https://megaman-robot-masters.herokuapp.com/byId/".concat(s),{method:"GET"}).then((function(e){return e.json()})).then((function(e){O(!0),x(e),L(e.name.toUpperCase())}),(function(e){O(!0),o(e)})),function(){e.abort()}}));return a?Object(j.jsxs)("div",{children:["Error: ",a.message]}):b?Object(j.jsxs)("div",{className:"gameCardDiv",onClick:t,onMouseEnter:function(){C(!0)},onMouseLeave:function(){C(!1)},children:[Object(j.jsx)("div",{className:"bossFrameOuter",children:Object(j.jsx)("div",{className:"bossFrameMiddle",children:Object(j.jsxs)("div",{className:"bossFrameInner",children:[Object(j.jsx)("span",{className:y?"bossCornerHover secondCorner":"bossCorner secondCorner"}),Object(j.jsx)("span",{className:y?"bossCornerHover firstCorner":"bossCorner firstCorner"}),Object(j.jsx)("span",{className:y?"bossCornerHover thirdCorner":"bossCorner thirdCorner"}),Object(j.jsx)("span",{className:y?"bossCornerHover fourthCorner":"bossCorner fourthCorner"}),Object(j.jsx)("div",{className:"bossImgDiv",children:Object(j.jsx)("img",{className:"bossImg",src:u.avatar,alt:f})})]})})}),Object(j.jsx)("div",{className:"bossName",children:f})]}):Object(j.jsx)("div",{className:"loadingDiv",children:"Loading..."})},d=function(){for(var e=[],s=[];e.length<9;){var t=Math.floor(32*Math.random())+9;e.includes(t)||(e.push(t),s.push({id:t}))}return s},b=function(){var e=Object(c.useState)(d()),s=Object(r.a)(e,2),t=s[0],i=s[1],n=Object(c.useState)([]),a=Object(r.a)(n,2),b=a[0],O=a[1],m=Object(c.useState)(0),v=Object(r.a)(m,2),u=v[0],x=v[1],h=Object(c.useState)(0),N=Object(r.a)(h,2),f=N[0],L=N[1],g=Object(c.useState)(!1),p=Object(r.a)(g,2),y=p[0],C=p[1],S=Object(c.useState)(""),D=Object(r.a)(S,2),M=D[0],G=D[1],k=function(e){b.includes(e)?(console.log("Already picked! Reset!"),G("Try again!"),O([]),x(0)):(console.log("Correct!"),O([].concat(Object(o.a)(b),[e])),E())},E=function(){var e=u+1;x(e),e>f&&L(e),y||9!==e||G("You win! Select any boss to reset"),y&&32===e&&G("You win! Select any boss to reset")},F=function(){var e=function(e){for(var s,t,c=e.length;c;)t=Math.floor(Math.random()*c--),s=e[c],e[c]=e[t],e[t]=s;return e}(Object(o.a)(t));i(e),console.log(t)},w=function(){for(var e=d();!0===A(e,b)&&b.length<32;)console.log("no unique bosses"),e=d();console.log(e),i(e)},A=function(e,s){var t=e.map((function(e){return e.id}));console.log(t);for(var c=0;c<t.length;c++)if(-1===s.indexOf(t[c]))return!1;return!0};return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"headerDiv",children:[Object(j.jsxs)("div",{className:"titleDiv",children:[Object(j.jsxs)("div",{className:"titleLineGroup",children:[Object(j.jsx)("div",{className:"titleLines"}),Object(j.jsx)("div",{className:"titleLines"}),Object(j.jsx)("div",{className:"titleLines"})]}),Object(j.jsx)("div",{className:"titleText",children:"MEMORY GAME"}),Object(j.jsxs)("div",{className:"titleLineGroup",children:[Object(j.jsx)("div",{className:"titleLines"}),Object(j.jsx)("div",{className:"titleLines"}),Object(j.jsx)("div",{className:"titleLines"})]})]}),Object(j.jsx)("h3",{children:"Don't select the same boss twice!"}),Object(j.jsx)("h3",{children:"Change difficulty:"}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"gameButton",onClick:function(){C(!y),O([]),x(0),w()},children:y?"- HARD -":"- NORMAL -"})}),Object(j.jsxs)("div",{className:"scoreDiv",children:[Object(j.jsxs)("span",{children:["Score: ",u]}),Object(j.jsxs)("span",{children:["High score: ",f]})]})]}),Object(j.jsxs)("div",{className:"bodyDiv",children:[Object(j.jsxs)("div",{className:"bodyLinesDiv",children:[Object(j.jsxs)("div",{className:"bodyLinesGroup",children:[Object(j.jsx)("div",{className:"bodyLines"}),Object(j.jsx)("div",{className:"bodyLines"}),Object(j.jsx)("div",{className:"bigBodyLines"}),Object(j.jsx)("div",{className:"bodyLines"}),Object(j.jsx)("div",{className:"bodyLines"})]}),Object(j.jsxs)("div",{className:"bodyLinesGroup",children:[Object(j.jsx)("div",{className:"bodyLines"}),Object(j.jsx)("div",{className:"bodyLines"}),Object(j.jsx)("div",{className:"bigBodyLines"}),Object(j.jsx)("div",{className:"bodyLines"}),Object(j.jsx)("div",{className:"bodyLines"})]}),Object(j.jsxs)("div",{className:"bodyLinesGroup",children:[Object(j.jsx)("div",{className:"bodyLines"}),Object(j.jsx)("div",{className:"bodyLines"}),Object(j.jsx)("div",{className:"bigBodyLines"}),Object(j.jsx)("div",{className:"bodyLines"}),Object(j.jsx)("div",{className:"bodyLines"})]})]}),Object(j.jsx)("div",{className:"gameCardGridDiv",children:t.map((function(e){return Object(j.jsx)(l,{id:e.id,clicked:function(){return s=e.id,console.log("you clicked card "+s),G(""),k(s),void(y?w():F());var s}},e.id)}))})]}),Object(j.jsx)("div",{className:"footerDiv",children:Object(j.jsxs)("div",{className:"titleDiv",children:[Object(j.jsxs)("div",{className:"titleLineGroup",children:[Object(j.jsx)("div",{className:"titleLines"}),Object(j.jsx)("div",{className:"titleLines"}),Object(j.jsx)("div",{className:"titleLines"})]}),Object(j.jsx)("div",{className:"footerText",children:M}),Object(j.jsxs)("div",{className:"titleLineGroup",children:[Object(j.jsx)("div",{className:"titleLines"}),Object(j.jsx)("div",{className:"titleLines"}),Object(j.jsx)("div",{className:"titleLines"})]})]})})]})};var O=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(b,{})})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(s){var t=s.getCLS,c=s.getFID,i=s.getFCP,n=s.getLCP,a=s.getTTFB;t(e),c(e),i(e),n(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),m()}],[[17,1,2]]]);
//# sourceMappingURL=main.8573e69b.chunk.js.map