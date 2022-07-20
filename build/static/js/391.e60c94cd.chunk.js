"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[391],{6108:function(e,t,n){n.d(t,{cq:function(){return f},vH:function(){return r}});var r,i=n(1092),s=n(7791),o=n(1976),a=n(2951),u=n(7591),l=n(3904),c=n(7966);!function(e){e.INITIAL="initial",e.IDLE="idle",e.DOWNLOAD="download",e.UNPACK="unpack",e.CLEAR="clear"}(r||(r={}));var v=new(function(e){(0,u.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.call(this,"MDNOfflineDB")).whoami=void 0,e.contentStatusHistory=void 0,e.collections=void 0,e.watched=void 0,e.notifications=void 0,e.version(1).stores({whoami:"++, username, is_authenticated, email, avatar_url, is_subscriber",collections:"url, title, created",watched:"url, title, path",notifications:"id, title, text, url, created, read, starred"}),e.version(2).stores({contentStatusHistory:"++id"}),e}return(0,o.Z)(n)}(c.ZP));function f(){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.contentStatusHistory.toCollection().last();case 2:return t=e.sent,e.abrupt("return",t||{phase:r.INITIAL,local:null,remote:null,progress:null,timestamp:new Date});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2391:function(e,t,n){n.r(t),n.d(t,{MDNWorker:function(){return c},SettingsData:function(){return l},getMDNWorker:function(){return v}});var r=n(189),i=n(1092),s=n(7791),o=n(1976),a=n(2951),u=n(6108),l=(0,o.Z)((function e(){(0,a.Z)(this,e),this.offline=void 0,this.preferOnline=void 0,this.autoUpdates=void 0,this.offline=!1,this.preferOnline=!1,this.autoUpdates=!1})),c=function(){function e(){(0,a.Z)(this,e),this.settings=void 0,this.registered=void 0,this.timeout=void 0,this.keepAlive=void 0,this.settings=this.offlineSettings(),this.registered=!1,this.timeout=null,this.keepAlive=null,this.settings.autoUpdates&&this.autoUpdate()}return(0,o.Z)(e,[{key:"autoUpdate",value:function(){var e=this;console.log("running auto update"),this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.update(),this.timeout=setTimeout((function(){return e.autoUpdate()}),36e5)}},{key:"messageHandler",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.data.type,e.next="pong"===e.t0?3:5;break;case 3:return console.log("pong"),e.abrupt("break",6);case 5:console.log("unknown message");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"controller",value:function(){return navigator.serviceWorker.controller}},{key:"checkForUpdate",value:function(){var e;null===(e=this.controller())||void 0===e||e.postMessage({type:"checkForUpdate"})}},{key:"update",value:function(){var e;null===(e=this.controller())||void 0===e||e.postMessage({type:"update"})}},{key:"swName",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=null!==(e=null!==t&&void 0!==t?t:this.settings.preferOnline)&&void 0!==e&&e;return"/service-worker.js?preferOnline=".concat(n)}},{key:"enableServiceWorker",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,n=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:null,!("serviceWorker"in navigator)){e.next=5;break}return e.next=4,navigator.serviceWorker.register(this.swName(t),{scope:"/"});case 4:this.registered=!0;case 5:p();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disableServiceWorker",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=7;break}return e.next=3,navigator.serviceWorker.getRegistration();case 3:return t=e.sent,e.next=6,null===t||void 0===t?void 0:t.unregister();case 6:this.registered=!1;case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toggleKeepAlive",value:function(e){var t=this;this.keepAlive&&!e?(console.log("[worker] keepalive -> enabling"),clearInterval(this.keepAlive),this.keepAlive=null):e&&!this.keepAlive&&(console.log("[worker] keepalive -> disabling"),this.keepAlive=setInterval((function(){var e;return null===(e=t.controller())||void 0===e?void 0:e.postMessage({type:"keepalive"})}),1e4))}},{key:"status",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.cq)();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"offlineSettings",value:function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("MDNSettings")||"null"))&&void 0!==e?e:new l}},{key:"setOfflineSettings",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(t){var n,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=this.offlineSettings()).offline||!t.offline||this.registered){e.next=6;break}return e.next=4,this.enableServiceWorker(t.preferOnline);case 4:e.next=11;break;case 6:if(!("preferOnline"in t)||n.preferOnline===t.preferOnline){e.next=11;break}return e.next=9,this.disableServiceWorker();case 9:return e.next=11,this.enableServiceWorker(t.preferOnline);case 11:if(!n.offline||!1!==t.offline){e.next=14;break}return e.next=14,this.disableServiceWorker();case 14:return!1===t.autoUpdates&&this.timeout?(clearTimeout(this.timeout),this.timeout=null):!0===t.autoUpdates&&!1===n.autoUpdates&&this.autoUpdate(),s=(0,r.Z)((0,r.Z)({},n),t),window.localStorage.setItem("MDNSettings",JSON.stringify(s)),this.settings=s,e.abrupt("return",s);case 19:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"clear",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.controller())||void 0===t||t.postMessage({type:"clear"});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();function v(){return window.mdnWorker||(window.mdnWorker=new c),window.mdnWorker}var f=v();function p(){navigator.serviceWorker.addEventListener("message",f.messageHandler)}f.settings.offline&&f.enableServiceWorker(f.settings.preferOnline)}}]);
//# sourceMappingURL=391.e60c94cd.chunk.js.map