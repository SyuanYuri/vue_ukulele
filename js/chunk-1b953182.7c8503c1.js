(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b953182"],{1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination justify-content-center my-5"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page-1)}}},[t._v("上頁")])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getPages(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.getPages(t.pages.current_page+1)}}},[t._v("下頁")])])],2)])])},i=[],o={data:function(){return{}},props:{pages:{type:Object}},methods:{getPages:function(t){this.$emit("event",t)}}},r=o,c=a("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);e["a"]=l.exports},"2b95":function(t,e,a){"use strict";a("b95c")},"372d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xl:mx-28"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right my-3"},[a("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#product-modal"},on:{click:function(e){return t.showModal(!0)}}},[t._v(" 建立新產品 ")])]),a("div",{staticClass:"table-wrap"},[a("table",{staticClass:"table tracking-widest"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("th",[t._v(t._s(e.category)+" 吋")]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(e.origin_price))+" ")]),a("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(e.price))+" ")]),a("td",[e.is_enabled?a("span",[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("div",{staticClass:"btn btn-primary btn-sm mr-2",on:{click:function(a){return t.showModal(!1,e)}}},[t._v(" 編輯 ")]),a("button",{staticClass:"btn btn-secondary btn-sm",attrs:{type:"button","data-toggle":"modal","data-target":"#delete-modal"},on:{click:function(a){return t.deleteModal(e)}}},[t._v(" 刪除 ")])])])})),0)])]),a("Pagination",{attrs:{pages:t.pagination},on:{event:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"delete-modal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"deleteModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[t._m(1),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 此項商品？（刪除後將無法恢復） ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.deleteProduct()}}},[t._v("確認刪除")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"product-modal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(2),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"customFile"}},[t._v(" 上傳圖片 "),t.status.uploading?a("i",{staticClass:"fas fa-circle-notch fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:function(e){return t.uploadFile()}}})]),a("img",{staticClass:"img-thumbnail",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80","alt:src":"tempProduct.imageUrl"}})]),a("div",{staticClass:"form-group flex justify-center mt-3"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,i=s.checked?1:0;if(Array.isArray(a)){var o=null,r=t._i(a,o);s.checked?r<0&&t.$set(t.tempProduct,"is_enabled",a.concat([o])):r>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",i)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.updateProduct()}}},[t._v("確認")])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",[t._v("原價")]),a("th",[t._v("售價")]),a("th",[t._v("狀態")]),a("th",[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"deleteModalLabel"}},[t._v("刪除產品")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"productModalLabel"}},[t._v("建立新產品")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=a("1157"),r=a.n(o),c=a("1799"),l={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:{uploading:!1}}},components:{Pagination:c["a"]},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="https://vue-course-api.hexschool.io/api/syuanyu/products?page=".concat(t);e.isLoading=!0,e.$http.get(a).then((function(t){e.products=t.data.products,e.pagination=t.data.pagination,e.isLoading=!1}))},showModal:function(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object.assign({},e),this.isNew=!1),r()("#product-modal").modal("show")},updateProduct:function(){var t=this,e="https://vue-course-api.hexschool.io/api/syuanyu/admin/product",a="post";t.isNew||(e="https://vue-course-api.hexschool.io/api/syuanyu/admin/product/".concat(t.tempProduct.id),a="put"),t.$http[a](e,{data:t.tempProduct}).then((function(e){e.data.success,r()("#product-modal").modal("hide"),t.getProducts()}))},deleteModal:function(t){this.tempProduct=t,r()("#delete-modal").modal("show")},deleteProduct:function(){var t=this,e="https://vue-course-api.hexschool.io/api/syuanyu/admin/product/".concat(t.tempProduct.id);t.$http.delete(e).then((function(e){e.data.success&&(t.getProducts(),r()("#delete-modal").modal("hide"))}))},uploadFile:function(){var t=this,e=this,a=e.$refs.files.files[0],s=new FormData;s.append("file-to-upload",a);var i="https://vue-course-api.hexschool.io/api/syuanyu/admin/upload";e.status.uploading=!0,e.$http.post(i,s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){if(a.data.success)e.$set(e.tempProduct,"imageUrl",a.data.imageUrl);else{var s=a.data.message,i="danger";t.$store.dispatch("updateMessage",{message:s,status:i})}e.status.uploading=!1}))}},created:function(){this.getProducts()}},n=l,d=(a("2b95"),a("2877")),u=Object(d["a"])(n,s,i,!1,null,null,null);e["default"]=u.exports},b95c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1b953182.7c8503c1.js.map