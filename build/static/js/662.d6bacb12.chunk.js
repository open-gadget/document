"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[662],{8662:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(726),c=n(126),i=n(5809),o=n(1092),s=n(7791),a=n(6167),l=n(1e3),u=n(3400),h=n(8074),d=n(5965),f=n(5357),p=n(7557),x=n(4187),m=n(3950),j=n(7878);function v(){var e=(0,u.TH)(),t=(0,u.s0)(),n=(0,f.bU)(),l=e.pathname.endsWith("/")?e.pathname.slice(0,-1):e.pathname,d=l.replace("/".concat(n,"/_sitemap"),"/".concat(n,"/docs")).toLowerCase();a.useEffect((function(){document.title="Sitemap"}),[]);var v=(0,h.ZP)("/".concat(n,"/search-index.json"),function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status," on ").concat(n.url));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),{revalidateOnFocus:!1}),y=v.data,b=v.error,Z=a.useState(null),S=(0,i.Z)(Z,2),U=S[0],C=S[1];a.useEffect((function(){if(y){var e=(0,c.Z)(y).sort((function(e,t){return e.url.localeCompare(t.url)}));C(e)}}),[y]);var N=a.useState(new Map),L=(0,i.Z)(N,2),T=L[0],F=L[1];a.useEffect((function(){var e=new Map;if(U){var t,n=(0,r.Z)(U);try{var c=function(){var n=t.value.url.split("/"),r=n.slice(0,3);n.slice(3).forEach((function(t,n){r.push(t);var c=r.join("/");e.set(c,(e.get(c)||0)+1)}))};for(n.s();!(t=n.n()).done;)c()}catch(i){n.e(i)}finally{n.f()}F(e)}}),[U]);var I=a.useState(null),_=(0,i.Z)(I,2),D=_[0],G=_[1];a.useEffect((function(){if(U){var e=U.find((function(e){return e.url.toLowerCase()===d}));G(e||null)}}),[d,U]);var A=a.useState(""),H=(0,i.Z)(A,2),R=H[0],Y=H[1];a.useEffect((function(){Y("")}),[l]);var B=a.useState(!1),O=(0,i.Z)(B,2),P=O[0],W=O[1],M=a.useState(null),$=(0,i.Z)(M,2),V=$[0],X=$[1];a.useEffect((function(){if(U){var e=d.split("/").length,t=U.filter((function(t){return!(!t.url.toLowerCase().startsWith(d)||e+1!==t.url.split("/").length)&&!!t.url.split("/").slice(-1)[0].toLowerCase().startsWith(R.toLowerCase())}));X(t)}}),[d,U,R]);var q=a.useState(0),z=(0,i.Z)(q,2),J=z[0],K=z[1];a.useEffect((function(){K(0)}),[R]),a.useEffect((function(){if(P&&V&&V.length>=1){var e=V[J].url.split("/").slice(3);Y(""),W(!1),t("/".concat(n,"/_sitemap/").concat(e.join("/")))}}),[n,V,P,t,J]);var Q=a.useState(null),ee=(0,i.Z)(Q,2),te=ee[0],ne=ee[1],re=a.useState(null),ce=(0,i.Z)(re,2),ie=ce[0],oe=ce[1];function se(e){return ae.apply(this,arguments)}function ae(){return(ae=(0,s.Z)((0,o.Z)().mark((function e(t){var n,r,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Going to try to open ".concat(t," in your editor")),ne(t),(n=new URLSearchParams).set("url",t),e.prev=4,e.next=7,fetch("/_open?".concat(n.toString()));case 7:if((r=e.sent).ok){e.next=17;break}if(!(r.status>=500)){e.next=13;break}oe(new Error("".concat(r.status,": ").concat(r.statusText))),e.next=17;break;case 13:return e.next=15,r.text();case 15:c=e.sent,oe(new Error("".concat(r.status,": ").concat(c)));case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),oe(e.t0);case 22:case"end":return e.stop()}}),e,null,[[4,19]])})))).apply(this,arguments)}return a.useEffect((function(){var e;return te&&(e=setTimeout((function(){ne(null)}),3e3)),function(){e&&clearTimeout(e)}}),[te]),(0,j.jsx)(x.R,{children:(0,j.jsxs)("div",{id:"sitemap",children:[b&&(0,j.jsxs)(m.Z,{type:"error",children:[(0,j.jsx)("h4",{children:"Error"}),(0,j.jsx)("p",{children:(0,j.jsx)("code",{children:b.toString()})})]}),ie&&(0,j.jsxs)(m.Z,{type:"error",children:[(0,j.jsx)("h4",{children:"Error opening in your editor"}),(0,j.jsx)("p",{children:(0,j.jsx)("code",{children:ie.toString()})})]}),!y&&!b&&(0,j.jsx)(p.g,{}),(0,j.jsx)("div",{className:"opening-in-your-editor",children:te&&(0,j.jsxs)(j.Fragment,{children:["Opening"," ",(0,j.jsx)("code",{children:te.slice(te.length-50,te.length)})," ","in your editor..."]})}),V&&(0,j.jsx)(E,{pathname:l,thisDoc:D,openInYourEditor:se}),V&&(0,j.jsx)(w,{pathname:l,searchFilter:R,onUpdate:function(e,t){Y(e),W(t)},onGoUp:function(){var e=l.split("/");if(e.length>=4){var n=e.slice(0,-1);t(n.join("/"))}},onChangeHighlight:function(e){if("up"===e){var t=J-1;V&&(t=(t%V.length+V.length)%V.length),K(t)}else{var n=J+1;V&&(n%=V.length),K(n)}}}),V&&0===V.length&&(R?(0,j.jsx)("em",{children:"nothing found"}):(0,j.jsx)("em",{children:"has no further sub-documents"})),V&&!R&&(0,j.jsx)(g,{pathname:l}),V&&V.length>0&&(0,j.jsx)(k,{filtered:V,childCounts:T,highlightIndex:J,openInYourEditor:se}),(0,j.jsx)("p",{className:"footer-note",children:"Note, this sitemap only shows documents. Not any other applications."})]})})}function g(e){var t=e.pathname.split("/").slice(0,-1);if(t.length<=2)return null;var n=t[t.length-1];return(0,j.jsx)("p",{children:(0,j.jsxs)(l.rU,{to:t.join("/"),children:["\u2196\ufe0f Back up to"," ",t.length<=3?(0,j.jsx)("em",{children:"root"}):(0,j.jsx)("code",{children:n})]})})}function w(e){var t=e.pathname,n=e.searchFilter,r=e.onUpdate,c=e.onGoUp,o=e.onChangeHighlight,s=a.useState(!1),l=(0,i.Z)(s,2),u=l[0],h=l[1],d=a.useState(0),f=(0,i.Z)(d,2),p=f[0],x=f[1];a.useEffect((function(){p>=2&&(x(0),c())}),[p,c]);var m=a.useRef(null),v=a.useCallback((function(e){if(m.current&&e.target){var t=e.target;t===m.current&&("ArrowDown"===e.key?o("down"):"ArrowUp"===e.key&&o("up")),"INPUT"===t.tagName||"TEXTAREA"===t.tagName?("Backspace"===e.key&&e.target===m.current?n.trim()||x((function(e){return e+1})):x(0),"Escape"===e.key&&m.current.blur()):"T"!==e.key&&"t"!==e.key||(m.current.focus(),x(0))}}),[o,n]);a.useEffect((function(){return window.document.addEventListener("keyup",v),function(){window.document.removeEventListener("keyup",v)}}),[v]);var g=t.replace("/_sitemap","/docs");return(0,j.jsxs)("form",{className:"filter-form",onSubmit:function(e){e.preventDefault(),r(n.trim(),!0)},children:[(0,j.jsx)("code",{children:g}),"/",(0,j.jsx)("input",{type:"search",ref:m,value:n,onChange:function(e){r(e.target.value,!1)},onFocus:function(){h(!0)},onBlur:function(){h(!1)}})," ",!u&&(0,j.jsxs)("small",{className:"keyboard-tip",children:["Tip! press ",(0,j.jsx)("kbd",{children:"t"})," on your keyboard to focus on search filter"]})]})}function E(e){var t=e.pathname,n=e.thisDoc,r=e.openInYourEditor,c=(0,f.bU)(),i=t.split("/").slice(3),o=t.split("/").slice(0,2);o.push("_sitemap");var s=!d.$1.includes(window.location.hostname);return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("ul",{className:"breadcrumb",children:[(0,j.jsx)("li",{className:"first",children:i.length?(0,j.jsx)(l.rU,{to:o.join("/"),children:"root"}):(0,j.jsx)("em",{children:"root"})}),i.map((function(e,t){var n=t===i.length-1;return o.push(e),(0,j.jsx)("li",{className:n?"last":void 0,children:n?(0,j.jsx)("code",{children:e}):(0,j.jsx)(l.rU,{to:o.join("/"),children:(0,j.jsx)("code",{children:e})})},"".concat(e).concat(t))})),(0,j.jsxs)("li",{className:"this-doc",children:[(0,j.jsx)("b",{children:"Go to:"})," ",n?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(l.rU,{to:n.url,children:(0,j.jsx)("em",{children:n.title})})," ",d._3&&!s&&(0,j.jsxs)("small",{children:["(",(0,j.jsx)("a",{href:n.url,role:"img","aria-label":"Editor pen",onClick:function(e){e.preventDefault(),r(n.url)},title:"Open in your editor",children:"Edit"}),")"]})]}):(0,j.jsx)(l.rU,{to:"/".concat(c,"/"),children:"Home page"})]})]})})}function k(e){var t=e.filtered,n=e.childCounts,r=e.highlightIndex,c=e.openInYourEditor,i=(0,f.bU)(),o=!d.$1.includes(window.location.hostname);return(0,j.jsx)("div",{className:"tree",children:(0,j.jsx)("ul",{children:t.map((function(e,t){var s=n.get(e.url)||0;return(0,j.jsxs)("li",{className:r===t?"highlight":void 0,children:[(0,j.jsx)(l.rU,{to:e.url.replace("/docs/","/_sitemap/"),title:e.title,children:(0,j.jsx)("code",{children:e.url.replace("/".concat(i,"/docs"),"")})})," ",(0,j.jsxs)("small",{children:["(",1===s?"1 document":"".concat(s.toLocaleString()," documents")," | ",(0,j.jsx)(l.rU,{to:e.url,title:"Go to: ".concat(e.title),children:"View"}),!o&&" | ",!o&&(0,j.jsx)(l.rU,{to:e.url,title:"Edit: ".concat(e.title),onClick:function(t){t.preventDefault(),c(e.url)},children:"Edit"}),")"]})]},e.url)}))})})}}}]);
//# sourceMappingURL=662.d6bacb12.chunk.js.map