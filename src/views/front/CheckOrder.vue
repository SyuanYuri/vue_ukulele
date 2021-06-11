<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="tab grid grid-cols-3 py-5 tracking-widest text-center text-grayish-dark">
      <div class="item">
        <span class="pb-2 border-b-2 font-bold border-orange text-orange">01 - 訂單明細</span>
      </div>
      <div class="item">
        <span>02 - 付款資訊</span>
      </div>
      <div class="item">
        <span>03 - 完成訂單</span>
      </div>
    </div>
    <div class="flex justify-center mx-3 text-center text-grayish-dark">
      <div v-if="cart.carts.length !== 0">
        <ul class="py-3 my-3 border-2 rounded-md">
          <li v-for="item in cart.carts" :key="item.id" class="px-10 py-3 grid mobile:grid-cols-4 gap-3 md:gap-28 place-items-center border-b-2">
            <div class="w-14">
              <img :src="item.product.imageUrl" :alt="item.title" />
            </div>
            <div>
              <h2 class="font-bold">{{ item.product.title }}</h2>
              <small class="tracking-widest">
                {{ item.product.price | currency }}
              </small>
            </div>
            <div class="text-center">
              <i class="far fa-minus-square cursor-pointer" @click="changeQty(item.id, item.product.id, item.qty, false)"></i>
              <span class="px-2">{{ item.qty }}</span>
              <i class="far fa-plus-square cursor-pointer" @click="changeQty(item.id, item.product.id, item.qty, true)"></i>
            </div>
            <div class="flex items-center">
              <p class="mx-3 tracking-widest font-bold">
                {{ item.total | currency }}
              </p>
              <i class="fas fa-trash-alt cursor-pointer text-choco hover:text-orange" @click="removeCart(item.id)"></i>
            </div>
          </li>
          <li class="mt-3 mobile:mr-20 flex flex-col mobile:flex-row justify-end font-bold tracking-widest">
            <div class="py-1">總計 {{ cart.total | currency }}</div>
          </li>
        </ul>
        <div class="flex flex-row justify-end mb-40">
          <router-link :to="{ name: 'Store' }">
            <button type="button" class="rounded mr-4 py-2 px-4 bg-grayish-light text-grayish-dark hover:opacity-70">
              繼續選購
            </button>
          </router-link>
          <router-link :to="{ name: 'UserInfo' }">
            <button type="button" class="rounded py-2 px-4 bg-grayish-dark text-white hover:opacity-80">
              下一步
            </button>
          </router-link>
        </div>
      </div>
      <div v-else class="mt-3 mb-40 p-3 border-2 rounded-md border-grayish-light">
        <img src="https://upload.cc/i1/2021/05/03/zJTh7U.jpg" alt="ukulele" />
        <h3 class="mt-3  tracking-widest">尚未選購商品</h3>
        <router-link :to="{ name: 'Store' }">
          <button type="button" class="block mx-auto rounded mt-2 py-2 px-5 bg-choco text-white hover:opacity-80 tracking-widest">
            前往選購
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CheckOrder",
  methods: {
    getCart() {
      this.$store.dispatch("getCart");
    },
    removeCart(id) {
      this.$store.dispatch("removeCart", id);
    },
    editNum(product, num) {
      const qty = parseInt(product.qty + num, 10);
    },
    changeQty(id, productId, qty, calc) {
      this.$store.commit("LOADING", true);
      let num;
      if (calc === true) {
        num = qty + 1;
      } else if (qty === 1) {
        num = 1;
      } else {
        num = qty - 1;
      }
      this.$store.dispatch("changeCartQty", { id, productId, num });
    },
  },
  computed: {
    ...mapGetters(["isLoading", "cart"]),
  },
  created() {
    this.getCart();
  },
};
</script>

<style scoped>
* {
  font-size: 16px;
}
*:hover {
  text-decoration: none;
}
h3 {
  font-size: 20px;
}
span {
  font-size: 20px;
}
img {
  width: 500px;
}
.tab {
  padding: 0 20em;
}
@media (max-width: 1024px) {
  .tab {
    padding: 0 6em;
  }
}
@media (max-width: 640px) {
  .tab {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  .item {
    padding: 1rem 0px;
  }
}
@media (max-width: 375px) {
  button {
    margin-bottom: 5px;
  }
}
</style>
