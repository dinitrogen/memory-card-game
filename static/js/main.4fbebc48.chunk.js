(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(7),o=c.n(i),a=(c(12),c(13),c(6)),d=c(3),s=c(0),l=function(e){e.id;var t=e.letter,c=e.clicked;return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"gameCardDiv",onClick:c,children:t})})},j=function(){var e=Object(n.useState)([{id:1,letter:"A"},{id:2,letter:"B"},{id:3,letter:"C"},{id:4,letter:"D"},{id:5,letter:"E"}]),t=Object(d.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),o=Object(d.a)(i,2),j=o[0],u=o[1],b=Object(n.useState)(0),h=Object(d.a)(b,2),O=h[0],m=h[1],f=Object(n.useState)(0),g=Object(d.a)(f,2),v=g[0],x=g[1],p=function(e){j.includes(e)?(console.log("Already picked! Reset!"),u([]),m(0)):(console.log("Correct!"),u([].concat(Object(a.a)(j),[e])),console.log(j),C())},C=function(){var e=O+1;m(e),e>v&&x(e)},k=function(){var e=function(e){for(var t,c,n=e.length;n;)c=Math.floor(Math.random()*n--),t=e[n],e[n]=e[c],e[c]=t;return e}(Object(a.a)(c));r(e),console.log(c)};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Memory Game"}),Object(s.jsx)("p",{children:"Don't select the same card twice!"}),Object(s.jsxs)("h2",{children:["Score: ",O]}),Object(s.jsxs)("h2",{children:["High score: ",v]}),Object(s.jsx)("div",{className:"gameCardGridDiv",children:c.map((function(e){return Object(s.jsx)(l,{letter:e.letter,id:e.id,clicked:function(){return t=e.id,console.log("you clicked card "+t),p(t),void k();var t}},e.id)}))})]})};var u=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(j,{})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),i(e),o(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.4fbebc48.chunk.js.map