(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),m=a(14),r=a.n(m),l=a(5),i=(a(22),a(6)),o=function(e){var t=e.match.params.currentTabId,a=e.tabs,n=a.find(function(e){return e.id===t});return c.a.createElement("header",{className:"tabs"},c.a.createElement("nav",{className:"ui orange three item menu"},a.map(function(e){return c.a.createElement(l.c,{key:e.id,activeClassName:"active item",className:"item",to:"/tabs/".concat(e.id)},e.title)})),c.a.createElement("p",null,n&&n.content))},s=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(e){return c.a.createElement(o,{tabs:s,match:e.match,currentTabId:"tab-1"})},b=function(){return c.a.createElement("h1",{className:"home-page"},"Home page")},d=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(l.a,null,c.a.createElement("div",{className:"ui secondary vertical pointing menu"},c.a.createElement(l.c,{to:"/",exact:!0,activeClassName:"active",className:"item"},"HOME"),c.a.createElement(l.c,{to:"/tabs",activeClassName:"active",className:"item"},"TABS")),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:b}),c.a.createElement(i.a,{path:"/tabs/:currentTabId?",component:u}))))};r.a.render(c.a.createElement(l.b,null,c.a.createElement(d,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.bbc7596a.chunk.js.map