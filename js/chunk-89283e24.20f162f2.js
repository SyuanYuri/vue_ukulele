(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89283e24"],{"445c":function(t,s,a){"use strict";a("f251")},"4a2f":function(t,s,a){"use strict";a("b1d9")},"56a6":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"message-alert"},t._l(t.messages,(function(s,e){return a("div",{key:e,staticClass:"alert fade show",class:"alert-"+s.status,attrs:{role:"alert","data-aos":"fade-left","data-aos-duration":"1500"}},[a("span",[t._v(t._s(s.message))])])})),0)},r=[],i={computed:{messages:function(){return this.$store.state.messages}},methods:{updateMessage:function(t,s){this.$store.dispatch("updateMessage",{message:t,status:s})},removeMessage:function(t){this.$store.dispatch("removeMessage",t)},removeMessageWithTiming:function(t){this.$store.dispatch("removeMessageWithTiming",t)}}},n=i,o=(a("4a2f"),a("2877")),c=Object(o["a"])(n,e,r,!1,null,null,null);s["a"]=c.exports},8132:function(t,s,a){"use strict";a("9b58")},"9b58":function(t,s,a){},a92e:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("Navbar"),a("Alert"),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"grid grid-rows-1 md:grid-rows-2 md:grid-flow-col gap-1 md:gap-3 px-3"},[a("Sidebar"),a("main",{staticClass:"row-span-1 col-span-1 md:row-span-2 md:col-span-2 table-wrap md:mx-10"},[a("router-view")],1)],1)])],1)},r=[],i=(a("ac1f"),a("5319"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sticky-top"},[a("header",{staticClass:"navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow"},[a("a",{staticClass:"navbar-brand col-md-3 col-lg-2 me-0 px-3",attrs:{href:"#"}},[t._v(" UKULELE ")]),a("ul",{staticClass:"navbar-nav px-3"},[a("li",{staticClass:"nav-item text-nowrap"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(s){return t.signout()}}},[t._v("登出")])])])])])}),n=[],o={methods:{signout:function(){var t=this,s="https://vue-course-api.hexschool.io/logout";t.$http.post(s).then((function(s){s.data.success&&t.$router.push("/login")}))}}},c=o,l=(a("445c"),a("2877")),u=Object(l["a"])(c,i,n,!1,null,"6e8feee8",null),d=u.exports,p=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"mt-16 border-t-8 border-grayish-light text-grayish-dark rounded-md shadow-md bg-white"},[a("ul",{staticClass:"py-3 pr-3"},[a("li",{staticClass:"pl-3 py-2 cursor-pointer flex items-center hover:opacity-70"},[a("i",{staticClass:"fas fa-box"}),a("router-link",{staticClass:"pl-2 hover:no-underline",attrs:{to:{name:"Products"}}},[t._v(" 產品列表 ")])],1),a("li",{staticClass:"pl-3 py-2 cursor-pointer flex items-center hover:opacity-70"},[a("i",{staticClass:"fas fa-clipboard-list",staticStyle:{"font-size":"20px"}}),a("router-link",{staticClass:"pl-2 hover:no-underline",attrs:{to:{name:"Orders"}}},[t._v(" 訂單列表 ")])],1)])])])},f=[],m={name:"Sidebar"},h=m,v=Object(l["a"])(h,p,f,!1,null,null,null),g=v.exports,b=a("56a6"),w={components:{Navbar:d,Sidebar:g,Alert:b["a"]},created:function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)Token\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization="".concat(t)}},C=w,x=(a("8132"),Object(l["a"])(C,e,r,!1,null,"149609e4",null));s["default"]=x.exports},b1d9:function(t,s,a){},f251:function(t,s,a){}}]);
//# sourceMappingURL=chunk-89283e24.20f162f2.js.map