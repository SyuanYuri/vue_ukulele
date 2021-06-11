<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Alert />
    <div class="banner bg-cover"></div>
    <div class="flex flex-col sm:flex-row justify-center mt-10 mb-20" data-aos="fade-up" data-aos-duration="1000">
      <div class="place-self-center lg:place-self-end">
        <img :src="product.imageUrl" alt="ukulele" />
      </div>
      <div class="flex flex-col justify-center w-full sm:w-3/5 px-8 lg:px-20">
        <h2 class="text-left tracking-widest">{{ product.title }}</h2>
        <span class="text-left my-2 pl-2 w-12 bg-orange text-white rounded-sm">{{ product.category }} 吋</span>
        <div class="price flex my-3">
          <span class="line-through mr-3">
            {{ product.origin_price | currency }}
          </span>
          <span class="font-bold">{{ product.price | currency }}</span>
        </div>
        <p class="my-3 text-justify leading-8 tracking-wider">
          {{ product.description }}
        </p>
        <select class="mt-3 form-control" v-model="singleProduct.num">
          <option :value="num" v-for="num in 10" :key="num">
            {{ num }}
          </option>
        </select>
        <div class="flex my-4 flex-col md:flex-row">
          <router-link
            :to="{ name: 'Store' }"
            class="rounded-full py-2 px-10 mt-3 mr-2 text-center border-solid border-2 border-choco bg-white text-grayish-dark hover:opacity-70 hover:no-underline w-full md:w-auto"
            >繼續購物</router-link
          >

          <button type="button" @click="addCart(product.id, singleProduct.num)" class="rounded-full py-2 px-10 mt-3 border-solid border-2 bg-grayish-dark text-white tracking-widest hover:opacity-70">
            加入購物車
          </button>
        </div>
      </div>
    </div>

    <div class="mb-20 mx-auto text-center">
      <h3 class="mb-2 tracking-wider">原廠配置</h3>
      <small>進口琴弦 / 搭配琴盒</small>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 px-8 xl:px-48 pb-20 leading-8 tracking-wider">
      <div class="pb-12 lg:pr-12 border-b-2 lg:border-b-0 lg:border-r-2">
        <img src="https://upload.cc/i1/2021/05/13/Wxu2lb.jpg" alt="ukulele" style="height: 450px" class="w-full object-cover object-left-bottom" />
        <p class="mt-3 text-justify">
          隨琴附贈 Hawaiian Dream 系列專屬琴袋。大海顏色的深藍色外觀，搭配藍白相間的方格子內裏襯布，琴袋厚度達1公分，前側有拉鍊口袋可收納，側邊有單邊提把，背面有雙肩背帶，攜帶方便。
        </p>
      </div>
      <div class="lg:pl-12 mt-12 lg:mt-0">
        <img src="https://upload.cc/i1/2021/05/13/u46X1x.jpg" alt="ukulele" style="height: 450px" class="w-full object-cover object-left" />
        <p class="mt-3 text-justify">
          使用日本進口清水弦，材質為透明氟碳纖維琴弦，弦徑較細、張力較低，指彈與刷奏表現出色，音色清亮。
        </p>
      </div>
    </div>

    <div class="px-8 xl:px-48 pb-48 leading-8">
      <ul class="nav nav-tabs mb-8" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">產品保固</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">配送說明</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <ul class="tracking-wider text-justify list-disc list-inside">
            <li>保證期間自購買日計算一年內為有效保固時間。</li>
            <li>
              維修時需出示具有「填寫購買日期」及「蓋經銷商店章」之本公司商品的「保證卡」。
            </li>
            <li>
              烏克麗麗為木製產品，在購買琴之後，請自行控制環境濕度與溫度替琴保養 ( 濕度建議控制在45%-55% )，若因濕度控制不當或溫度失常造成琴變化 ( 如長期放置潮濕或高溫環境以至琴款表面造成變形等
              )，則不受保固範圍內。
            </li>
          </ul>
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <ul class="tracking-wider text-justify list-disc list-inside">
            <li>出貨時間為平日週一至週五 ( 國定假日除外 )。</li>
            <li>宅配出貨：台灣本島於出貨後約 2 個工作天即可送達。</li>
            <li>超商取貨：出貨後約 2-3 個工作天內送達。</li>
            <li>由於超商取貨有材積限制，若超過材積限制即無法選擇超商取貨。</li>
            <li>
              若您付款下訂後超過 5 天仍未收到商品，請來電客服，我們將由專人為您處理。
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Cart></Cart>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cart from "@/components/front/Cart.vue";
import Alert from "@/components/AlertMessage.vue";

export default {
  name: "Product",
  data() {
    return {
      productId: "",
      product: [],
      singleProduct: {
        num: 1,
      },
    };
  },
  components: {
    Cart,
    Alert,
  },
  methods: {
    getProduct(id) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/syuanyu/product/${vm.productId}`;
      vm.$store.dispatch("updateLoading", true);
      vm.$http.get(api).then((response) => {
        vm.product = response.data.product;
        vm.$store.dispatch("updateLoading", false);
      });
    },
    getSingleProduct() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/syuanyu/product/${vm.productId}`;
      vm.$store.commit("LOADING", true);
      vm.$http.get(api).then((response) => {
        vm.singleProduct = response.data.product;
        vm.singleProduct.num = 1;
        vm.$store.commit("LOADING", false);
      });
    },
    getCart() {
      this.$store.dispatch("getCart");
    },
    removeCart(id) {
      this.$store.dispatch("removeCart", id);
    },
    addCart(id, qty = 1) {
      this.$store.dispatch("addCart", { id, qty });
      const message = "已加入購物車";
      const status = "info";
      this.$store.dispatch("updateMessage", { message, status });
    },
  },
  computed: {
    ...mapGetters(["isLoading", "cart"]),
  },
  created() {
    this.productId = this.$route.params.productId;
    this.getProduct();
    this.getCart();
    this.getSingleProduct();
  },
};
</script>

<style scoped>
* {
  font-size: 16px;
  color: #4e4a40;
}
h2 {
  font-size: 26px;
}
h3 {
  font-size: 30px;
}
small {
  letter-spacing: 4px;
}
img {
  filter: brightness(1.1);
  object-fit: cover;
}
button:focus {
  text-decoration: none;
  box-shadow: none;
}
img {
  height: 600px;
}
.banner {
  background-image: url(https://upload.cc/i1/2021/05/13/1MNhXy.jpg);
  background-position: 20% 60%;
  height: 65vh;
}
.price span {
  font-size: 20px;
  letter-spacing: 2px;
}
</style>
