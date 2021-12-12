<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Alert />
    <div
      class="wrap p-10 text-center text-choco"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 class="mt-3 mb-8 text-choco">CHOOSE YOUR UKULELE</h1>
      <div class="flex flex-wrap justify-center tracking-widest">
        <div class="px-2 tab-item">
          <a
            href="#"
            class="tab pb-1 px-3 hover:no-underline"
            :class="{ active: category == 0 }"
            @click.prevent="getCategory(0)"
          >
            全部
          </a>
        </div>
        <div class="px-2">
          <a
            href="#"
            class="tab pb-1 px-3 hover:no-underline"
            :class="{ active: category == 21 }"
            @click.prevent="getCategory(21)"
          >
            21吋
          </a>
        </div>
        <div class="px-2">
          <a
            href="#"
            class="tab pb-1 px-3 hover:no-underline"
            :class="{ active: category == 23 }"
            @click.prevent="getCategory(23)"
          >
            23吋
          </a>
        </div>
        <div class="px-2">
          <a
            href="#"
            class="tab pb-1 px-3 hover:no-underline"
            :class="{ active: category == 26 }"
            @click.prevent="getCategory(26)"
          >
            26吋
          </a>
        </div>
      </div>
      <div
        class="grid grid-cols-1 mobile:grid-cols-2 md:grid-cols-3 ipad:grid-cols-4 mt-5 mb-40"
      >
        <div
          v-for="item in products"
          :key="item.id"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            class="image bg-contain bg-center bg-no-repeat cursor-pointer"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
            @click="$router.push(`product/${item.id}`)"
          ></div>
          <div class="tracking-widest my-3 text-choco">
            <h5>
              <span
                v-if="item.category == 21"
                class="badge badge-info text-white"
              >
                21吋
              </span>
              <span
                v-else-if="item.category == 23"
                class="badge badge-info text-white"
              >
                23吋
              </span>
              <span v-else class="badge badge-info text-white">26吋</span>
            </h5>
            <div class="item">
              <h2 class="mt-3 font-bold">{{ item.title }}</h2>
              <h5 class="mt-1">NT {{ item.price | currency }}</h5>
            </div>
            <button
              type="button"
              @click="getProduct(item.id)"
              class="btn rounded py-2 px-10 border-solid border-2 bg-grayish-dark text-white tracking-widest my-3 hover:opacity-70"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div class="modal" id="product-modal" tabindex="-1">
          <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body mx-8">
                <div class="row">
                  <div class="col-lg">
                    <img
                      :src="product.imageUrl"
                      alt="ukulele"
                      class="object-cover"
                      style="height: 500px;"
                    />
                  </div>
                  <div class="col-lg mt-3 mt-lg-0 text-box">
                    <div>
                      <h3 class="mb-3 font-weight-bold text-left">
                        {{ product.title }}
                      </h3>
                      <h3 class="mt-1 font-weight-bold text-left">
                        NT {{ product.price | currency }} / {{ product.unit }}
                      </h3>
                      <p class="mt-3 mb-8 py-3 border-top text-justify">
                        {{ product.description }}
                      </p>
                    </div>
                    <div>
                      <select
                        name="num"
                        class="w-100 p-2 rounded font-weight-bold border border-primary"
                        v-model="product.num"
                      >
                        <option :value="num" v-for="num in 10" :key="num">
                          {{ num }}
                        </option>
                      </select>
                      <button
                        type="button"
                        @click="addCart(product.id, product.num)"
                        class="w-100 py-2 px-10 mt-3 rounded btn btn-primary"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cart></Cart>
  </div>
</template>

<script>
import $ from "jquery";
import { mapGetters } from "vuex";
import Cart from "@/components/front/Cart.vue";
import Alert from "@/components/AlertMessage.vue";

export default {
  name: "Store",
  components: {
    Cart,
    Alert,
  },
  data() {
    return {
      product: [],
      products: [],
      filterProducts: [],
      category: 0,
      num: 1,
    };
  },
  methods: {
    getProducts() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/syuanyu/products/all`;
      vm.$store.commit("LOADING", true);
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products.filter((item) => item.is_enabled === 1);
        vm.filterProducts = response.data.products.filter((item) => item.is_enabled === 1);
        vm.$store.commit("LOADING", false);
      });
    },
    getProduct(id) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/syuanyu/product/${id}`;
      vm.$store.commit("LOADING", true);
      vm.$http.get(api).then((response) => {
        vm.product = response.data.product;
        $("#product-modal").modal("show");
        vm.product.num = 1;
        vm.$store.commit("LOADING", false);
      });
    },
    getCategory(num) {
      const vm = this;
      if (num === 0) {
        vm.products = vm.filterProducts;
      } else {
        vm.products = vm.filterProducts.filter((item) => item.category == num);
      }
      vm.category = num;
    },
    addCart(id, qty = 1) {
      this.$store.dispatch("addCart", { id, qty });
      $("#product-modal").modal("hide");
      const message = "已加入購物車";
      const status = "info";
      this.$store.dispatch("updateMessage", { message, status });
    },
    getCart() {
      this.$store.dispatch("getCart");
    },
    removeCart(id) {
      this.$store.dispatch("removeCart", id);
    },
  },
  computed: {
    ...mapGetters(["isLoading", "cart"]),
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style scoped>
* {
  font-size: 16px;
}
h1 {
  font-size: 35px;
  letter-spacing: 3px;
}
h3 {
  font-size: 20px;
}
button {
  transition: all 0.5s;
  letter-spacing: 2px;
}
.text-box {
  letter-spacing: 2px;
}
.image {
  height: 400px;
  filter: brightness(1.1);
  border-radius: 15px;
  background-size: 220px auto;
  transition: background-size 0.5s;
}
.image:hover {
  background-size: 230px auto;
}
.tab {
  border-bottom: 3px solid transparent;
}
.tab:hover {
  color: #bfa760;
  border-bottom: 3px solid #bfa760;
}
.active {
  border-bottom: 3px solid #bfa760;
}
@media (min-width: 1280px) {
  .wrap {
    padding-right: 15em;
    padding-left: 15em;
  }
}
@media (max-width: 640px) {
  * {
    font-size: 15px;
  }
  .item {
    height: 3em;
  }
  .tab-item {
    margin-bottom: 20px;
  }
  .btn {
    padding: 10px 25px;
  }
}
</style>
