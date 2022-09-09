"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[55],{6040:function(e,n,r){r.r(n),r.d(n,{default:function(){return W}});var t=r(5809),a=r(126),s=r(6167),o=r(3400),i=r(4334),l=r(7878),c=s.createContext(null);function d(e){var n=e.id,r=(0,s.useContext)(c);if(!r)throw new Error("Missing browser info");return(0,l.jsx)(l.Fragment,{children:r[n].name})}var u=r(2951),p=r(1976),m=r(7591),f=r(3904),h=function(e){(0,m.Z)(r,e);var n=(0,f.Z)(r);function r(){var e;(0,u.Z)(this,r);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return(e=n.call.apply(n,[this].concat(a))).state={error:null},e}return(0,p.Z)(r,[{key:"componentDidCatch",value:function(e,n){this.setState({error:e})}},{key:"render",value:function(){return this.state.error?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"bc-table-error-boundary",children:"Unfortunately, this table has encountered unhandled error and the content cannot be shown."})}):this.props.children}}]),r}(s.Component);function b(e){return Array.isArray(e)?e[0]:e}function v(e){return Array.isArray(e)?e:[e]}function x(e){return Boolean(e)}function j(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=[];r&&e.__compat&&o.push({name:r,compat:e.__compat,depth:s});for(var i=0,l=Object.entries(e);i<l.length;i++){var c=(0,t.Z)(l[i],2),d=c[0],u=c[1];"__compat"!==d&&u.__compat&&(o.push({name:n?"".concat(n,".").concat(d):d,compat:u.__compat,depth:s+1}),o.push.apply(o,(0,a.Z)(j(u,d,"",s+1))))}return o}function g(e,n){return"preview"===e||!(!n||"string"!==typeof e||!n.releases[e])&&["beta","nightly","planned"].includes(n.releases[e].status)}function w(e){var n;return(null===(n=e.notes)||void 0===n?void 0:n.length)&&!e.version_removed&&!e.partial_implementation}function N(e){return _(e)||e.notes}function _(e){return e.partial_implementation||e.alternative_name||e.flags||e.prefix||e.version_removed}function y(e){return e&&b(e).alternative_name&&!v(e).some((function(e){return C(e)}))}function k(e){return e&&b(e).prefix&&!v(e).some((function(e){return C(e)}))}function F(e){return e&&b(e).flags&&!v(e).some((function(e){return C(e)}))}function C(e){return e.version_added&&!N(e)}function S(e){return!e.version_added&&!N(e)}function Z(e){if(e){var n=v(e).find((function(e){return C(e)}));if(n)return n;var r=v(e).find((function(e){return function(e){return e.version_added&&!_(e)}(e)}));if(r)return r;var t=v(e).find((function(e){return!e.version_removed&&(e.prefix||e.alternative_name)}));if(t)return t;var a=v(e).find((function(e){return!e.version_removed&&e.partial_implementation}));if(a)return a;var s=v(e).find((function(e){return!e.version_removed&&e.flags}));if(s)return s;var o=v(e).find((function(e){return e.version_removed}));return o||b(e)}}var E=r(726),T={yes:"Full support",partial:"Partial support",preview:"In development. Supported in a pre-release version.",no:"No support",unknown:"Compatibility unknown",experimental:"Experimental. Expect behavior to change in the future.",nonstandard:"Non-standard. Check cross-browser support before using.",deprecated:"Deprecated. Not for use in new websites.",footnote:"See implementation notes.",disabled:"User must explicitly enable this feature.",altname:"Uses a non-standard name.",prefix:"Requires a vendor prefix or different name for use."};function I(e,n,r){var a,s=new Set,o=(0,E.Z)(j(e,"",n));try{for(o.s();!(a=o.n()).done;){var i=a.value,l=i.compat.status;l&&(l.experimental&&s.add("experimental"),l.deprecated&&s.add("deprecated"),l.standard_track||s.add("nonstandard"));for(var c=0,d=Object.entries(i.compat.support);c<d.length;c++){var u=(0,t.Z)(d[c],2),p=u[0],m=u[1];if(m){w(b(m))&&s.add("footnote");var f,h=(0,E.Z)(v(m));try{for(h.s();!(f=h.n()).done;){var x=f.value;x.version_added?x.flags&&x.flags.length?s.add("no"):g(x.version_added,r[p])?s.add("preview"):s.add("yes"):null==x.version_added?s.add("unknown"):s.add("no"),x.partial_implementation&&s.add("partial"),x.prefix&&s.add("prefix"),x.alternative_name&&s.add("altname"),x.flags&&s.add("disabled")}}catch(N){h.e(N)}finally{h.f()}}else s.add("no")}}}catch(N){o.e(N)}finally{o.f()}return Object.keys(T).filter((function(e){return s.has(e)})).map((function(e){return[e,T[e]]}))}function R(e){var n=e.compat,r=e.name,a=(0,s.useContext)(c);if(!a)throw new Error("Missing browser info");return(0,l.jsxs)("section",{className:"bc-legend",children:[(0,l.jsx)("h3",{className:"visually-hidden",id:"Legend",children:"Legend"}),(0,l.jsx)("dl",{className:"bc-legend-items-container",children:I(n,r,a).map((function(e){var n=(0,t.Z)(e,2),r=n[0],a=n[1];return["yes","partial","no","unknown","preview"].includes(r)?(0,l.jsxs)("div",{className:"bc-legend-item",children:[(0,l.jsx)("dt",{className:"bc-legend-item-dt",children:(0,l.jsx)("span",{className:"bc-supports-".concat(r," bc-supports"),children:(0,l.jsx)("abbr",{className:"bc-level bc-level-".concat(r," icon icon-").concat(r),title:a,children:(0,l.jsx)("span",{className:"visually-hidden",children:a})})})},r),(0,l.jsx)("dd",{className:"bc-legend-item-dd",children:a})]},r):(0,l.jsxs)("div",{className:"bc-legend-item",children:[(0,l.jsx)("dt",{className:"bc-legend-item-dt",children:(0,l.jsx)("abbr",{className:"legend-icons icon icon-".concat(r),title:a})}),(0,l.jsx)("dd",{className:"bc-legend-item-dd",children:a})]},r)}))})]})}function A(e,n){if(!e)return"unknown";var r,t=Z(e),a=t.flags,s=t.version_added,o=t.version_removed,i=t.partial_implementation;return null===s?r="unknown":g(s,n)?r="preview":s?(r="yes",(o||a&&a.length)&&(r="no")):r="no",i&&(r=o?"removed-partial":"partial"),r}function D(e){var n=e.status,r=[n.experimental&&{title:"Experimental. Expect behavior to change in the future.",text:"Experimental",iconClassName:"icon-experimental"},n.deprecated&&{title:"Deprecated. Not for use in new websites.",text:"Deprecated",iconClassName:"icon-deprecated"},!n.standard_track&&{title:"Non-standard. Expect poor cross-browser support.",text:"Non-standard",iconClassName:"icon-nonstandard"}].filter(x);return 0===r.length?null:(0,l.jsx)("div",{className:"bc-icons","data-test":r.length,children:r.map((function(e){return(0,l.jsx)("abbr",{className:"only-icon icon ".concat(e.iconClassName),title:e.title,children:(0,l.jsx)("span",{children:e.text})},e.iconClassName)}))})}function P(e,n){return"string"!==typeof e?(0,l.jsx)(l.Fragment,{children:"?"}):e.startsWith("\u2264")?(0,l.jsx)(l.Fragment,{children:e.slice(1)}):"preview"===e?n.preview_name:(0,l.jsx)(l.Fragment,{children:e})}function M(e,n,r){return"string"!==typeof n?(0,l.jsx)(l.Fragment,{children:P(e,r)}):(0,l.jsxs)(l.Fragment,{children:[P(e,r),"\u200a\u2013\u200a",P(n,r)]})}var U=s.memo((function(e){var n,r,t,a,s=e.support,o=e.browser,i=e.timeline,c=void 0!==i&&i,d=Z(s),u=null!==(n=null===d||void 0===d?void 0:d.version_added)&&void 0!==n?n:null,p=null!==(r=null===d||void 0===d?void 0:d.version_removed)&&void 0!==r?r:null,m=function(e){if(e)return Z(e).release_date}(s),f=A(s,o);switch(u){case null:t={isSupported:"unknown"};break;case!0:t={isSupported:"yes"};break;case!1:t={isSupported:"no"};break;case"preview":t={isSupported:"preview"};break;default:t={isSupported:f,label:M(u,p,o)}}var h="";switch(t.isSupported){case"yes":h="Full support",a=t.label||"Yes";break;case"partial":h="Partial support",a=t.label||"Partial";break;case"removed-partial":c?(h="Partial support",a=t.label||"Partial"):(h="No support",a=t.label||"No");break;case"no":h="No support",a=t.label||"No";break;case"preview":h="Preview browser support",a=t.label||o.preview_name;break;case"unknown":h="Compatibility unknown; please update this.",a="?"}return(0,l.jsxs)("div",{className:"bcd-cell-text-wrapper",children:[(0,l.jsx)("div",{className:"bcd-cell-icons",children:(0,l.jsx)("span",{className:"icon-wrap",children:(0,l.jsx)("abbr",{className:"\n              bc-level-".concat(f,"\n              icon\n              icon-").concat(f),title:h,children:(0,l.jsx)("span",{className:"bc-support-level",children:h})})})}),(0,l.jsxs)("div",{className:"bcd-cell-text-copy",children:[(0,l.jsx)("span",{className:"bc-browser-name",children:o.name}),(0,l.jsx)("span",{className:"bc-version-label",title:m?"Released ".concat(m):void 0,children:a})]}),(0,l.jsx)(L,{support:s})]})}));function O(e){var n,r=e.name,t=null!==(n=T[r])&&void 0!==n?n:r;return(0,l.jsxs)("abbr",{className:"only-icon",title:t,children:[(0,l.jsx)("span",{children:r}),(0,l.jsx)("i",{className:"icon icon-".concat(r)})]})}function L(e){var n=e.support,r=Z(n);if(!r)return null;var t=[k(n)&&(0,l.jsx)(O,{name:"prefix"},"prefix"),w(r)&&(0,l.jsx)(O,{name:"footnote"},"footnote"),y(n)&&(0,l.jsx)(O,{name:"altname"},"altname"),F(n)&&(0,l.jsx)(O,{name:"disabled"},"disabled")].filter(Boolean);return t.length?(0,l.jsx)("div",{className:"bc-icons",children:t}):null}function G(e){var n=e.supportItem,r=e.browser,t="string"===typeof n.version_added,a="string"===typeof n.version_removed,o=n.flags||[];return(0,l.jsxs)(l.Fragment,{children:[t&&"From version ".concat(n.version_added),a&&(0,l.jsxs)(l.Fragment,{children:[t?" until":"Until"," version"," ",n.version_removed," (exclusive)"]}),t||a?": this":"This"," feature is behind the",o.map((function(e,n){var r=e.value_to_set&&(0,l.jsxs)(l.Fragment,{children:[" ","(needs to be set to ",(0,l.jsx)("code",{children:e.value_to_set}),")"]});return(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)("code",{children:e.name}),"preference"===e.type&&(0,l.jsxs)(l.Fragment,{children:[" preferences",r]}),"runtime_flag"===e.type&&(0,l.jsxs)(l.Fragment,{children:[" runtime flag",r]}),n<o.length-1&&" and the "]},e.name)})),".",r.pref_url&&o.some((function(e){return"preference"===e.type}))&&" To change preferences in ".concat(r.name,", visit ").concat(r.pref_url,".")]})}function H(e,n){if(n)return v(n).slice().reverse().flatMap((function(r,t){var a=[r.version_removed&&!v(n).some((function(e){return e.version_added===r.version_removed}))?{iconName:"disabled",label:(0,l.jsxs)(l.Fragment,{children:["Removed in ",P(r.version_removed,e)," ","and later"]})}:null,r.partial_implementation?{iconName:"footnote",label:"Partial support"}:null,r.prefix?{iconName:"prefix",label:"Implemented with the vendor prefix: ".concat(r.prefix)}:null,r.alternative_name?{iconName:"altname",label:"Alternate name: ".concat(r.alternative_name)}:null,r.flags?{iconName:"disabled",label:(0,l.jsx)(G,{browser:e,supportItem:r})}:null,r.notes?(Array.isArray(r.notes)?r.notes:[r.notes]).map((function(e){return{iconName:"footnote",label:e}})):null,g(r.version_added,e)?{iconName:"footnote",label:"Preview browser support"}:null,C(r)&&!g(r.version_added,e)?{iconName:"footnote",label:"Full support"}:S(r)?{iconName:"footnote",label:"No support"}:null].flat().filter(x),o=a.length>0;return(0===t||o)&&(0,l.jsx)(s.Fragment,{children:(0,l.jsxs)("div",{className:"bc-notes-wrapper",children:[(0,l.jsx)("dt",{className:"bc-supports-".concat(A(r,e)," bc-supports"),children:(0,l.jsx)(U,{support:r,browser:e,timeline:!0})}),a.map((function(e,n){var r=e.iconName,t=e.label;return(0,l.jsxs)("dd",{className:"bc-supports-dd",children:[(0,l.jsx)(O,{name:r})," ","string"===typeof t?(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:t}}):t]},n)})),!o&&(0,l.jsx)("dd",{})]})},t)})).filter(x)}function B(e){var n=e.browserId,r=e.browserInfo,t=e.support,a=e.showNotes,s=e.onToggle,o=(e.locale,A(t,r)),i=H(r,t),c=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(U,{support:t,browser:r}),a&&(0,l.jsx)("dl",{className:"bc-notes-list bc-history bc-history-mobile",children:i})]});return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("td",{className:"bc-support bc-browser-".concat(n," bc-supports-").concat(o," ").concat(i?"bc-has-history":""),"aria-expanded":a?"true":"false",onClick:i?function(){return s()}:void 0,children:(0,l.jsxs)("button",{type:"button",disabled:!i,title:"Toggle history",children:[c,(0,l.jsx)("span",{className:"offscreen",children:"Toggle history"})]})})})}var $=s.memo((function(e){var n=e.index,r=e.feature,t=e.browsers,a=e.activeCell,o=e.onToggleCell,i=e.locale,d=(0,s.useContext)(c);if(!d)throw new Error("Missing browser info");var u,p=r.name,m=r.compat,f=r.depth,h=m.description?(0,l.jsx)("span",{dangerouslySetInnerHTML:{__html:m.description}}):(0,l.jsx)("code",{children:p}),b=null!==a?t[a]:null;return u=m.bad_url&&m.mdn_url?(0,l.jsxs)("div",{className:"bc-table-row-header",children:[(0,l.jsx)("abbr",{className:"new",title:"".concat(m.mdn_url," does not exist"),children:h}),m.status&&(0,l.jsx)(D,{status:m.status})]}):m.mdn_url&&f>0?(0,l.jsxs)("a",{href:m.mdn_url,className:"bc-table-row-header",children:[h,m.status&&(0,l.jsx)(D,{status:m.status})]}):(0,l.jsxs)("div",{className:"bc-table-row-header",children:[h,m.status&&(0,l.jsx)(D,{status:m.status})]}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{className:"bc-feature bc-feature-depth-".concat(f),scope:"row",children:u}),t.map((function(e,r){return(0,l.jsx)(B,{browserId:e,browserInfo:d[e],support:m.support[e],showNotes:a===r,onToggle:function(){return o([n,r])},locale:i},e)}))]}),b&&(0,l.jsx)("tr",{className:"bc-history bc-history-desktop",children:(0,l.jsx)("td",{colSpan:t.length+1,children:(0,l.jsx)("dl",{className:"bc-notes-list",children:H(d[b],m.support[b])})})})]})}));function q(e){var n=e.platforms,r=e.browsers;return(0,l.jsxs)("tr",{className:"bc-platforms",children:[(0,l.jsx)("td",{}),n.map((function(e){var n=r.filter((function(n){return i.Gp[n].type===e})).length;return(0,l.jsxs)("th",{className:"bc-platform bc-platform-".concat(e),colSpan:n,title:e,children:[(0,l.jsx)("span",{className:"icon icon-".concat(e)}),(0,l.jsx)("span",{className:"visually-hidden",children:e})]},e)}))]})}function Q(e){var n=e.browsers;return(0,l.jsxs)("tr",{className:"bc-browsers",children:[(0,l.jsx)("td",{}),n.map((function(e){var n=e.split("_")[0],r="firefox"===n?"simple-firefox":n;return(0,l.jsxs)("th",{className:"bc-browser bc-browser-".concat(e),children:[(0,l.jsx)("div",{className:"bc-head-txt-label bc-head-icon-".concat(e),children:(0,l.jsx)(d,{id:e})}),(0,l.jsx)("div",{className:"bc-head-icon-symbol icon icon-".concat(r)})]},e)}))]})}function Y(e){var n=e.platforms,r=e.browsers;return(0,l.jsxs)("thead",{children:[(0,l.jsx)(q,{platforms:n,browsers:r}),(0,l.jsx)(Q,{browsers:r})]})}function z(e){var n=e.features,r=e.browsers,a=e.locale,o=(0,s.useReducer)((function(e,n){var r=(0,t.Z)(e,2),a=r[0],s=r[1],o=(0,t.Z)(n,2),i=o[0],l=o[1];return a===i&&s===l?[null,null]:[i,l]}),[null,null]),i=(0,t.Z)(o,2),c=(0,t.Z)(i[0],2),d=c[0],u=c[1],p=i[1];return(0,l.jsx)(l.Fragment,{children:n.map((function(e,n){return(0,l.jsx)($,{feature:e,browsers:r,index:n,activeCell:d===n?u:null,onToggleCell:function(e){var n=(0,t.Z)(e,2),r=n[0],a=n[1];p([r,a])},locale:a},n)}))})}function W(e){var n=e.query,r=e.data,s=e.browsers,d=e.locale,u=(0,o.TH)();if(!r||!Object.keys(r).length)throw new Error("BrowserCompatibilityTable component called with empty data");var p=n.split("."),m=p[0],f=p[p.length-1],b=function(e,n){var r=n.__compat&&"nodejs"in n.__compat.support,t=n.__compat&&"deno"in n.__compat.support,s=["desktop","mobile"];("javascript"===e||r||t)&&s.push("server");for(var o=[],l=function(){var e,n=d[c];(e=o).push.apply(e,(0,a.Z)(Object.keys(i.Gp).filter((function(e){return i.Gp[e].type===n}))))},c=0,d=s;c<d.length;c++)l();return"webextensions"===e&&(o=o.filter((function(e){return i.Gp[e].accepts_webextensions}))),"javascript"===e||r||(o=o.filter((function(e){return"nodejs"!==e}))),[s,(0,a.Z)(o)]}(m,r),v=(0,t.Z)(b,2),x=v[0],g=v[1];return(0,l.jsx)(h,{children:(0,l.jsxs)(c.Provider,{value:s,children:[(0,l.jsx)("a",{className:"bc-github-link external external-icon",href:function(){var e=new URLSearchParams,r="\n\x3c!-- Do not make changes below this line --\x3e\n<details>\n<summary>MDN page report details</summary>\n\n* Query: `$QUERY_ID`\n* Report started: $DATE\n\n</details>\n".replace(/\$DATE/g,(new Date).toISOString()).replace(/\$QUERY_ID/g,n).trim();return e.set("mdn-url","https://developer.mozilla.org".concat(u.pathname)),e.set("metadata",r),e.set("title","".concat(n," - <SUMMARIZE THE PROBLEM>")),e.set("template","data-problem.yml"),"".concat("https://github.com/mdn/browser-compat-data/issues/new","?").concat(e.toString())}(),target:"_blank",rel:"noopener noreferrer",title:"Report an issue with this compatibility data",children:"Report problems with this compatibility data on GitHub"}),(0,l.jsx)("div",{className:"table-scroll",children:(0,l.jsx)("div",{className:"table-scroll-inner",children:(0,l.jsxs)("table",{className:"bc-table bc-table-web",children:[(0,l.jsx)(Y,{platforms:x,browsers:g}),(0,l.jsx)("tbody",{children:(0,l.jsx)(z,{browsers:g,features:j(r,"",f),locale:d})})]},"bc-table")})}),(0,l.jsx)(R,{compat:r,name:f}),(0,l.jsxs)("div",{className:"hidden",children:["The compatibility table on this page is generated from structured data. If you'd like to contribute to the data, please check out"," ",(0,l.jsx)("a",{href:"https://github.com/mdn/browser-compat-data",children:"https://github.com/mdn/browser-compat-data"})," ","and send us a pull request."]})]})})}}}]);
//# sourceMappingURL=browser-compatibility-table.58ccb889.chunk.js.map