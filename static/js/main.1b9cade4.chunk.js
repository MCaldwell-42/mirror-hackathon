(this["webpackJsonpmirror-hackathon"]=this["webpackJsonpmirror-hackathon"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/mirrorIcon.e8201d43.jpeg"},30:function(e,t,a){e.exports=a(44)},35:function(e,t,a){},36:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=(a(35),a(20)),s=a(21),u=a(28),l=a(27),m=(a(36),a(47)),h=a(48),d=a(22),f=a.n(d),v=function(){return r.a.createElement(m.a,{bg:"dark",variant:"dark"},r.a.createElement(m.a.Brand,{href:"#home"},r.a.createElement("img",{src:f.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"Mirror logo"})),r.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{className:"mr-auto"},"Mirror App: Smile for the Camera!")))},p=a(8),b=a.n(p),g=a(16),E=a(46),w=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null);Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.error("enumerate devices:",navigator.mediaDevices.enumerateDevices()),e.next=3,navigator.mediaDevices.enumerateDevices();case 3:t=e.sent,a(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var a=Object(n.useCallback)((function(e){e.forEach((function(e){console.error("Device:",e.label),c(e)}))})),c=function(){var t=Object(g.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.deviceId,t.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:{deviceId:n}}).then((function(t){return e.current.srcObject=t})).catch((function(e){return console.error(e)}));case 3:t.sent,e.current.play();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var e=Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"video_booth"},r.a.createElement("h2",{id:"camHeader"},"Photo Booth Time! Say Cheeeeese!"),r.a.createElement(E.a,{className:"mr-2",onClick:function(){e.current.srcObject.getVideoTracks().forEach((function(e){return e.stop()}))}},"Turn off Camera"),r.a.createElement(E.a,{className:"mr-2",onClick:function(){return o()}},"Turn on Camera"),r.a.createElement(E.a,{onClick:function(){setTimeout((function(){t.current.getContext("2d").drawImage(e.current,0,0,t.current.width,t.current.height)}),4e3)}},"Take photo! (4s delay)"),r.a.createElement("div",{className:"video_booth__viewer"},r.a.createElement("video",{ref:e,width:"680",height:"500"})),r.a.createElement("div",{className:"video_booth__stage mt-2"},r.a.createElement("canvas",{className:"canvas",width:"680",height:"500",ref:t})))},k=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(w,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.1b9cade4.chunk.js.map