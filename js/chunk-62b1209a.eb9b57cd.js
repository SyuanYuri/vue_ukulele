(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62b1209a"],{"6ad7":function(t,s,a){},b415:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),t._m(0),a("div",{staticClass:"flex justify-center mx-3 text-center text-grayish-dark"},[0!==t.cart.carts.length?a("div",[a("ul",{staticClass:"py-3 my-3 border-2 rounded-md"},[t._l(t.cart.carts,(function(s){return a("li",{key:s.id,staticClass:"px-10 py-3 grid mobile:grid-cols-4 gap-3 md:gap-28 place-items-center border-b-2"},[a("div",{staticClass:"w-14"},[a("img",{attrs:{src:s.product.imageUrl,alt:s.title}})]),a("div",[a("h2",{staticClass:"font-bold"},[t._v(t._s(s.product.title))]),a("small",{staticClass:"tracking-widest"},[t._v(" "+t._s(t._f("currency")(s.product.price))+" ")])]),a("div",{staticClass:"text-center"},[a("i",{staticClass:"far fa-minus-square cursor-pointer",on:{click:function(a){return t.changeQty(s.id,s.product.id,s.qty,!1)}}}),a("span",{staticClass:"px-2"},[t._v(t._s(s.qty))]),a("i",{staticClass:"far fa-plus-square cursor-pointer",on:{click:function(a){return t.changeQty(s.id,s.product.id,s.qty,!0)}}})]),a("div",{staticClass:"flex items-center"},[a("p",{staticClass:"mx-3 tracking-widest font-bold"},[t._v(" "+t._s(t._f("currency")(s.total))+" ")]),a("i",{staticClass:"fas fa-trash-alt cursor-pointer text-choco hover:text-orange",on:{click:function(a){return t.removeCart(s.id)}}})])])})),a("li",{staticClass:"mt-3 mobile:mr-20 flex flex-col mobile:flex-row justify-end font-bold tracking-widest"},[a("div",{staticClass:"py-1"},[t._v("總計 "+t._s(t._f("currency")(t.cart.total)))])])],2),a("div",{staticClass:"flex flex-row justify-end mb-40"},[a("router-link",{attrs:{to:{name:"Store"}}},[a("button",{staticClass:"rounded mr-4 py-2 px-4 bg-grayish-light text-grayish-dark hover:opacity-70",attrs:{type:"button"}},[t._v(" 繼續選購 ")])]),a("router-link",{attrs:{to:{name:"UserInfo"}}},[a("button",{staticClass:"rounded py-2 px-4 bg-grayish-dark text-white hover:opacity-80",attrs:{type:"button"}},[t._v(" 下一步 ")])])],1)]):a("div",{staticClass:"mt-3 mb-40 p-3 border-2 rounded-md border-grayish-light"},[a("img",{attrs:{src:"https://upload.cc/i1/2021/05/03/zJTh7U.jpg",alt:"ukulele"}}),a("h3",{staticClass:"mt-3  tracking-widest"},[t._v("尚未選購商品")]),a("router-link",{attrs:{to:{name:"Store"}}},[a("button",{staticClass:"block mx-auto rounded mt-2 py-2 px-5 bg-choco text-white hover:opacity-80 tracking-widest",attrs:{type:"button"}},[t._v(" 前往選購 ")])])],1)])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tab grid grid-cols-3 py-5 tracking-widest text-center text-grayish-dark"},[a("div",{staticClass:"item"},[a("span",{staticClass:"pb-2 border-b-2 font-bold border-orange text-orange"},[t._v("01 - 訂單明細")])]),a("div",{staticClass:"item"},[a("span",[t._v("02 - 付款資訊")])]),a("div",{staticClass:"item"},[a("span",[t._v("03 - 完成訂單")])])])}],r=a("5530"),c=a("2f62"),n={name:"CheckOrder",methods:{getCart:function(){this.$store.dispatch("getCart")},removeCart:function(t){this.$store.dispatch("removeCart",t)},editNum:function(t,s){parseInt(t.qty+s,10)},changeQty:function(t,s,a,e){var i;this.$store.commit("LOADING",!0),i=!0===e?a+1:1===a?1:a-1,this.$store.dispatch("changeCartQty",{id:t,productId:s,num:i})}},computed:Object(r["a"])({},Object(c["b"])(["isLoading","cart"])),created:function(){this.getCart()}},o=n,d=(a("ddca"),a("2877")),l=Object(d["a"])(o,e,i,!1,null,"c4ce0e1a",null);s["default"]=l.exports},ddca:function(t,s,a){"use strict";a("6ad7")}}]);
//# sourceMappingURL=chunk-62b1209a.eb9b57cd.js.map