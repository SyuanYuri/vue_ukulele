<template>
  <div class="xl:mx-28">
    <loading :active.sync="isLoading"></loading>
    <div class="text-right my-3">
      <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#product-modal" @click="showModal(true)">
        建立新產品
      </button>
    </div>
    <div class="table-wrap">
      <table class="table tracking-widest">
        <thead>
          <tr>
            <th>分類</th>
            <th>產品名稱</th>
            <th>原價</th>
            <th>售價</th>
            <th>狀態</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <th>{{ item.category }} 吋</th>
            <td>{{ item.title }}</td>
            <td class="text-right">
              {{ item.origin_price | currency }}
            </td>
            <td class="text-right">
              {{ item.price | currency }}
            </td>
            <td>
              <span v-if="item.is_enabled">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn btn-primary btn-sm mr-2" @click="showModal(false, item)">
                編輯
              </div>
              <button type="button" class="btn btn-secondary btn-sm" data-toggle="modal" data-target="#delete-modal" @click="deleteModal(item)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :pages="pagination" @event="getProducts"></Pagination>
    <div class="modal fade" id="delete-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">刪除產品</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong>
            此項商品？（刪除後將無法恢復）
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-secondary" @click="deleteProduct()">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="product-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="productModalLabel">建立新產品</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="tempProduct.title" />
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="category">分類</label>
                <input type="text" class="form-control" id="category" placeholder="請輸入分類" v-model="tempProduct.category" />
              </div>
              <div class="form-group col-md-6">
                <label for="price">單位</label>
                <input type="unit" class="form-control" id="unit" placeholder="請輸入單位" v-model="tempProduct.unit" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="origin_price">原價</label>
                <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價" v-model="tempProduct.origin_price" />
              </div>
              <div class="form-group col-md-6">
                <label for="price">售價</label>
                <input type="number" class="form-control" id="price" placeholder="請輸入售價" v-model="tempProduct.price" />
              </div>
            </div>
            <div class="form-group">
              <label for="description">產品描述</label>
              <textarea type="text" class="form-control" id="description" placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="image">輸入圖片網址</label>
                <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl" />
              </div>
              <div class="form-group col-md-6">
                <label for="customFile">
                  上傳圖片
                  <i class="fas fa-circle-notch fa-spin" v-if="status.uploading"></i>
                </label>
                <input type="file" id="customFile" class="form-control" ref="files" @change="uploadFile()" />
              </div>
              <img
                img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                class="img-thumbnail"
                alt:src="tempProduct.imageUrl"
              />
            </div>
            <div class="form-group flex justify-center mt-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="is_enabled" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0" />
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct()">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Pagination from "@/components/Pagination.vue";

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
      status: {
        uploading: false,
      },
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/syuanyu/products?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    },
    showModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
      }
      $("#product-modal").modal("show");
    },
    updateProduct() {
      const vm = this;
      let api = "https://vue-course-api.hexschool.io/api/syuanyu/admin/product";
      let httpMethod = "post";
      // 編輯產品
      if (!vm.isNew) {
        api = `https://vue-course-api.hexschool.io/api/syuanyu/admin/product/${vm.tempProduct.id}`;
        httpMethod = "put";
      }
      // 新增產品
      vm.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        if (response.data.success) {
          $("#product-modal").modal("hide");
          vm.getProducts();
        } else {
          $("#product-modal").modal("hide");
          vm.getProducts();
        }
      });
    },
    deleteModal(item) {
      this.tempProduct = item;
      $("#delete-modal").modal("show");
    },
    deleteProduct() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/syuanyu/admin/product/${vm.tempProduct.id}`;
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          vm.getProducts();
          $("#delete-modal").modal("hide");
        }
      });
    },
    uploadFile() {
      const vm = this;
      const uploadedFile = vm.$refs.files.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", uploadedFile);
      const url = `https://vue-course-api.hexschool.io/api/syuanyu/admin/upload`;
      vm.status.uploading = true;
      vm.$http
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.success) {
            vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl);
          } else {
            const message = response.data.message;
            const status = "danger";
            this.$store.dispatch("updateMessage", { message, status });
          }
          vm.status.uploading = false;
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
.table-wrap {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}
* {
  font-family: "Noto Sans TC", sans-serif;
}
</style>
