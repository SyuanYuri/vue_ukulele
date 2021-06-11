<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="tab grid grid-cols-3 pt-5 tracking-widest text-center text-grayish-dark">
      <div class="item">
        <span>01 - 訂單明細</span>
      </div>
      <div class="item">
        <span class="pb-2 border-b-2 font-bold border-orange text-orange">
          02 - 付款資訊
        </span>
      </div>
      <div class="item">
        <span>03 - 完成訂單</span>
      </div>
    </div>
    <div class="pb-40 pt-0 flex font-serif tracking-widest text-grayish-dark">
      <div class="max-w-4xl w-full mx-auto">
        <div class="bg-white rounded-lg overflow-hidden shadow-2xl mt-10">
          <div class="p-3 mobile:p-8">
            <div class="banner bg-cover rounded-md"></div>
            <h2 class="py-4 mb-5 font-bold tracking-widest text-center border-b-2 text-choco">
              收件人資料
            </h2>

            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="createOrder">
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="flex justify-around items-center mb-1">
                    <label for="name">姓名</label>
                    <input type="text" id="name" name="name" class="w-4/5 p-2 border rounded" placeholder="請輸入姓名" v-model="form.user.name" />
                  </div>
                  <div class="ml-12 mobile:ml-20 md:ml-40 mb-1 h-6 text-left text-orange">
                    <i v-if="errors[0]" class="fas fa-exclamation-circle mr-1"></i>
                    <span style="font-size: 14px">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider rules="required|phone" v-slot="{ errors }">
                  <div class="flex justify-around items-center mb-1">
                    <label for="tel">電話</label>
                    <input type="tel" id="tel" name="tel" class="w-4/5 p-2 border rounded" placeholder="請輸入電話" v-model="form.user.tel" />
                  </div>
                  <div class="ml-12 mobile:ml-20 md:ml-40 mb-1 h-6 text-left text-orange">
                    <i v-if="errors[0]" class="fas fa-exclamation-circle mr-1"></i>
                    <span style="font-size: 14px">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider rules="required" v-slot="{ errors }">
                  <div class="flex justify-around items-center mb-1">
                    <label for="address">地址</label>
                    <input type="text" id="address" name="address" class="w-4/5 p-2 border rounded" placeholder="請輸入地址" v-model="form.user.address" />
                  </div>
                  <div class="ml-12 mobile:ml-20 md:ml-40 mb-1 h-6 text-left text-orange">
                    <i v-if="errors[0]" class="fas fa-exclamation-circle mr-1"></i>
                    <span style="font-size: 14px">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <ValidationProvider rules="required|email" v-slot="{ errors }">
                  <div class="flex justify-around items-center mb-1">
                    <label for="email">信箱</label>
                    <input type="email" id="email" name="email" class="w-4/5 p-2 border rounded" placeholder="請輸入信箱" v-model="form.user.email" />
                  </div>
                  <div class="ml-12 mobile:ml-20 md:ml-40 mb-1 h-6 text-left text-orange">
                    <i v-if="errors[0]" class="fas fa-exclamation-circle mr-1"></i>
                    <span style="font-size: 14px">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>

                <div class="form-item grid grid-cols-2">
                  <div class="flex justify-around items-center mb-4">
                    <label for="pay">付款</label>
                    <select id="pay" class="w-4/5 sm:w-3/5 p-2 border rounded">
                      <option>ATM轉帳</option>
                      <option>貨到付款</option>
                    </select>
                  </div>
                  <div class="flex justify-around items-center mb-4">
                    <label for="send">運送</label>
                    <select id="send" class="w-4/5 sm:w-3/5 p-2 border rounded">
                      <option>宅配到府</option>
                      <option>門市取貨</option>
                    </select>
                  </div>
                </div>

                <div class="flex justify-around items-center">
                  <label for="message">備註</label>
                  <input type="text" id="message" name="message" class="w-4/5 p-2 border rounded" placeholder="如有特殊需求請備註說明" v-model="form.message" />
                </div>
                <div class="grid grid-cols-2 gap-4 pt-10 mt-10 mb-3">
                  <button type="button" class="btn btn-secondary w-100 p-3" data-toggle="modal" data-target="#leave-modal">
                    回購物車
                  </button>
                  <router-link :to="{ name: 'Complete' }">
                    <button type="button" class="w-100 p-3 bg-primary text-white rounded hover:opacity-70" :disabled="invalid" @click.prevent="createOrder">
                      確認付款
                    </button>
                  </router-link>
                </div>
              </form>
            </ValidationObserver>
            <div class="modal fade" id="leave-modal" tabindex="-1" aria-labelledby="leaveModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    尚未填寫完成，是否確定返回前頁？
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="leaveModal()">確認</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-8 text-left text-sm border-t border-gray-300 bg-gray-100">
            <h3 class="font-bold border-b-2 mb-3 pb-3">配送時間及注意事項</h3>
            <ol class="pl-3 leading-8" style="list-style-type: decimal">
              <li>出貨時間為平日週一至週五(國定假日除外)。</li>
              <li>宅配出貨：台灣本島於出貨後約 2 個工作天即可送達。</li>
              <li>超商取貨：出貨後約 2-3 個工作天內送達。</li>
              <li>
                由於超商取貨有材積限制，若超過材積限制即無法選擇超商取貨。
              </li>
              <li>
                若您付款下訂後超過 5 天仍未收到商品，請來電客服，我們將由專人為您處理。
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserInfo",
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  methods: {
    createOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/syuanyu/order`;
      const order = vm.form;
      vm.$store.commit("LOADING", true);
      vm.$http.post(api, { data: order }).then((response) => {
        if (response.data.success) {
          vm.$router.push(`/complete/${response.data.orderId}`);
          localStorage.removeItem("cart");
          vm.$store.commit("LOADING", false);
        } else {
          vm.$store.commit("LOADING", false);
        }
      });
    },
    leaveModal() {
      this.$router.push({ name: "CheckOrder" });
    },
  },
  computed: {
    ...mapGetters(["isLoading", "cart"]),
  },
};
</script>

<style scoped>
h2 {
  font-size: 25px;
}
h3 {
  font-size: 20px;
}
.tab {
  padding: 0 18em;
}
span {
  font-size: 20px;
}
select {
  letter-spacing: 2px;
}
button {
  letter-spacing: 2px;
}
.banner {
  background-image: url(https://upload.cc/i1/2021/05/01/HgQqO2.jpg);
  height: 300px;
}
@media (max-width: 1024px) {
  .tab {
    padding: 0 8em;
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
  .form-item {
    display: flex;
    flex-direction: column;
  }
}
</style>
