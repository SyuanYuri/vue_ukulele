(function(e){function t(t){for(var a,r,u=t[0],i=t[1],s=t[2],d=0,h=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&h.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(h.length)h.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==c[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1b953182":"7c8503c1","chunk-26d65b67":"65591804","chunk-2962d7fd":"2690bf96","chunk-34a7876c":"4dc69f7d","chunk-36a16b13":"50305b42","chunk-537acea7":"1589c6d5","chunk-5c1d2d26":"3e200545","chunk-62b1209a":"eb9b57cd","chunk-82920708":"51696304","chunk-89283e24":"20f162f2","chunk-8d1bb202":"c39405b9","chunk-fb5bb232":"73b020ff"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-1b953182":1,"chunk-26d65b67":1,"chunk-2962d7fd":1,"chunk-34a7876c":1,"chunk-36a16b13":1,"chunk-537acea7":1,"chunk-5c1d2d26":1,"chunk-62b1209a":1,"chunk-82920708":1,"chunk-89283e24":1,"chunk-8d1bb202":1,"chunk-fb5bb232":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1b953182":"5ea1ad46","chunk-26d65b67":"5799ebf0","chunk-2962d7fd":"5fbcc5db","chunk-34a7876c":"5bcd54d8","chunk-36a16b13":"69d757f8","chunk-537acea7":"a490a4a3","chunk-5c1d2d26":"7d4608db","chunk-62b1209a":"3ff0776a","chunk-82920708":"bb7af799","chunk-89283e24":"d6adc8d3","chunk-8d1bb202":"4a36d2c3","chunk-fb5bb232":"6862ce06"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===c))return t()}var h=document.getElementsByTagName("style");for(u=0;u<h.length;u++){s=h[u],d=s.getAttribute("data-href");if(d===a||d===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],l.parentNode.removeChild(l),n(o)},l.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var h=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,n[1](h)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var l=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("5530"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4"),n("d3b7"),n("159b"),n("b64b"),n("ac1f"),n("00b4"),n("2b0e")),c=(n("4989"),n("bc3a")),o=n.n(c),u={},i=o.a.create(u);i.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=i,window.axios=i,Object.defineProperties(e.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},r["a"].use(Plugin);Plugin;var s=n("9062"),d=n.n(s),h=(n("e40d"),n("7bb1")),l=n("4c93"),p=n("60d4"),f=n("a925"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},b=[],g={name:"App"},v=g,k=(n("5c0b"),n("2877")),y=Object(k["a"])(v,m,b,!1,null,null,null),O=y.exports,A=(n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(A["a"]);var E=[{path:"/",component:function(){return n.e("chunk-34a7876c").then(n.bind(null,"de8a"))},children:[{path:"",name:"Home",component:function(){return n.e("chunk-8d1bb202").then(n.bind(null,"ec5a"))}},{path:"about",name:"About",component:function(){return n.e("chunk-26d65b67").then(n.bind(null,"9cbb"))}},{path:"store",name:"Store",component:function(){return n.e("chunk-2962d7fd").then(n.bind(null,"b627"))}},{path:"product/:productId",name:"Product",component:function(){return n.e("chunk-36a16b13").then(n.bind(null,"658f"))}},{path:"checkorder",name:"CheckOrder",component:function(){return n.e("chunk-62b1209a").then(n.bind(null,"b415"))}},{path:"userinfo",name:"UserInfo",component:function(){return n.e("chunk-537acea7").then(n.bind(null,"89a7"))}},{path:"complete/:orderId",name:"Complete",component:function(){return n.e("chunk-fb5bb232").then(n.bind(null,"3bac"))}}]},{path:"*",redirect:"/"},{path:"/login",name:"Login",component:function(){return n.e("chunk-82920708").then(n.bind(null,"a55b"))}},{path:"/admin",name:"Dashboard",component:function(){return n.e("chunk-89283e24").then(n.bind(null,"a92e"))},children:[{path:"products",name:"Products",component:function(){return n.e("chunk-1b953182").then(n.bind(null,"372d"))},meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:function(){return n.e("chunk-5c1d2d26").then(n.bind(null,"0d5f"))},meta:{requiresAuth:!0}}]}],j=new A["a"]({routes:E,scrollBehavior:function(e,t,n){return{x:0,y:0}}}),w=j,x=(n("a434"),n("2f62"));r["a"].use(x["a"]);var P=new x["a"].Store({state:{isLoading:!1,cart:{carts:[]},totalQty:0,sameProduct:!1,itemId:"",messages:[]},mutations:{LOADING:function(e,t){e.isLoading=t},CART:function(e,t){e.cart=t},ADD_SAMEPRODUCT:function(e,t){e.totalQty=0,e.itemId="",e.sameProduct=!1,e.cart.carts.filter((function(n){n.product_id===t.id&&(e.itemId=n.id,e.sameProduct=!0,e.totalQty=t.qty+n.qty)}))},MESSAGE:function(e,t){var n=t.message,a=t.status,r=Math.floor(new Date/1e3);e.messages.push({message:n,status:a,timestamp:r})},REMOVEMESSAGE:function(e,t){e.messages.splice(t,1)}},actions:{updateLoading:function(e,t){e.commit("LOADING",t)},addCart:function(e,t){var n=t.id,a=t.qty;if(e.commit("LOADING",!0),e.dispatch("getCart"),e.commit("ADD_SAMEPRODUCT",{id:n,qty:a}),e.state.sameProduct){console.log(e.state.itemId);var r="https://vue-course-api.hexschool.io/api/syuanyu/cart/".concat(e.state.itemId),c="https://vue-course-api.hexschool.io/api/syuanyu/cart",u={product_id:n,qty:e.state.totalQty};o.a.delete(r).then((function(){return o.a.post(c,{data:u})})).then((function(){e.dispatch("getCart"),e.commit("LOADING",!1)}))}else{var i="https://vue-course-api.hexschool.io/api/syuanyu/cart",s={product_id:n,qty:a};o.a.post(i,{data:s}).then((function(){e.dispatch("getCart"),e.commit("LOADING",!1)}))}},getCart:function(e){var t="https://vue-course-api.hexschool.io/api/syuanyu/cart";e.commit("LOADING",!0),o.a.get(t).then((function(t){t.data.data.carts&&e.commit("CART",t.data.data),e.commit("LOADING",!1)}))},removeCart:function(e,t){var n="https://vue-course-api.hexschool.io/api/syuanyu/cart/".concat(t);e.commit("LOADING",!0),o.a.delete(n).then((function(t){e.dispatch("getCart"),e.commit("LOADING",!1)}))},changeCartQty:function(e,t){var n=t.id,a=t.productId,r=t.num,c="https://vue-course-api.hexschool.io/api/syuanyu/cart/".concat(n),u="https://vue-course-api.hexschool.io/api/syuanyu/cart",i={product_id:a,qty:r};o.a.all([o.a.delete(c),o.a.post(u,{data:i})]).then(o.a.spread((function(){e.dispatch("getCart"),e.commit("LOADING",!1)})))},updateMessage:function(e,t){var n=t.message,a=t.status;e.commit("MESSAGE",{message:n,status:a});var r=Math.floor(new Date/1e3);e.dispatch("removeMessageWithTiming",r)},removeMessageWithTiming:function(e,t){setTimeout((function(){e.state.messages.forEach((function(n,a){n.timestamp===t&&e.state.messages.splice(a,1)}))}),3500)},removeMessage:function(e,t){e.commit("REMOVEMESSAGE",t)}},getters:{isLoading:function(e){return e.isLoading},cart:function(e){return e.cart}},modules:{}}),C=(n("ba8c"),n("a9e3"),n("5319"),n("b680"),function(e){var t=Number(e);return"$".concat(t.toFixed(0).replace(/./g,(function(e,t,n){var a=t&&"."!==e&&(n.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e;return a})))}),D=function(e){var t=new Date(1e3*e);return t.toLocaleDateString(e)};r["a"].config.productionTip=!1,r["a"].prototype.$http=axios,axios.defaults.withCredentials=!0,r["a"].component("Loading",d.a),r["a"].filter("currency",C),r["a"].filter("date",D),r["a"].use(f["a"]),Object.keys(l).forEach((function(e){Object(h["d"])(e,l[e])})),r["a"].component("ValidationProvider",h["b"]),r["a"].component("ValidationObserver",h["a"]),Object(h["e"])("zh_TW",p),Object(h["c"])({classes:{valid:"valid",invalid:"invalid"}}),Object(h["d"])("required",Object(a["a"])(Object(a["a"])({},l["required"]),{},{message:"此欄位不可為空"})),Object(h["d"])("email",Object(a["a"])(Object(a["a"])({},l["email"]),{},{message:"Email 格式不正確"})),Object(h["d"])("phone",{validate:function(e){var t=/^09[0-9]{8}$/;return t.test(e)},message:"請輸入正確號碼"});var L=new f["a"]({locale:"zhTW"});new r["a"]({i18n:L,router:w,store:P,render:function(e){return e(O)}}).$mount("#app"),w.beforeEach((function(e,t,n){if(e.meta.requiresAuth){var a="https://vue-course-api.hexschool.io/api/user/check";axios.post(a).then((function(e){e.data.success?n():n({path:"/login"})}))}else n()}))},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.f973b375.js.map