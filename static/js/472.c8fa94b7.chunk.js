"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[472],{2472:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(726),i=t(5809),c=t(6167),l=t(1e3),s=t(1646),d=t.n(s),u=t(8208),a=t.n(u);function o(){return!document.hidden}var h=t(7878);function f(){var e=function(){var e=c.useState(o()),n=(0,i.Z)(e,2),t=n[0],r=n[1],l=function(){return r(o())};return(0,c.useEffect)((function(){var e="visibilitychange";return document.addEventListener(e,l,!1),function(){document.removeEventListener(e,l)}})),t}(),n=c.useState(null),t=(0,i.Z)(n,2),s=t[0],u=t[1];return c.useEffect((function(){if(e){var n,t=JSON.parse(localStorage.getItem("viewed-documents")||"[]"),i=[],c=(0,r.Z)(t);try{for(c.s();!(n=c.n()).done;){var l=n.value;i.push({url:l.url,title:l.title,timestamp:l.timestamp})}}catch(s){c.e(s)}finally{c.f()}i.length&&u(i)}}),[e]),(0,h.jsxs)("article",{id:"recently-viewed-documents","aria-labelledby":"recently-viewed-documents",children:[(0,h.jsx)("h3",{children:"Recently viewed documents"}),s?s.length?(0,h.jsxs)("table",{children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Document"}),(0,h.jsx)("th",{children:"When"})]})}),(0,h.jsx)("tbody",{children:s.map((function(e){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:(0,h.jsxs)(l.rU,{to:e.url,children:[e.title," ",(0,h.jsx)("small",{children:e.url})]})}),(0,h.jsx)("td",{children:d()(new Date(e.timestamp)).fromNow()})]},e.url)}))})]}):(0,h.jsx)(m,{children:"No recently viewed documents at the moment"}):(0,h.jsx)(m,{children:"Loading recently viewed documents"})]})}function m(e){var n=e.children;return(0,h.jsx)("p",{className:"notification",children:n})}d().extend(a())}}]);
//# sourceMappingURL=472.c8fa94b7.chunk.js.map