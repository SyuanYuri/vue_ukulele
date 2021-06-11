<template>
  <div>
    <div class="tab grid grid-cols-3 py-5 tracking-widest text-center text-grayish-dark">
      <div class="item">
        <span>01 - 訂單明細</span>
      </div>
      <div class="item">
        <span>02 - 付款資訊</span>
      </div>
      <div class="item">
        <span class="pb-2 border-b-2 font-bold border-orange text-orange">03 - 完成訂單</span>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 pb-5 px-5 tracking-widest text-center text-grayish-dark">
      <div class="table-wrap">
        <div class="sm:bg-choco sm:text-white font-bold py-2.5 rounded-t-md">
          <h5>交易明細</h5>
        </div>
        <table class="border-2 w-full">
          <thead class="border-b-2">
            <th class="py-2 pl-5 text-left">品名</th>
            <th width="20%">數量</th>
            <th width="20%">單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="p-2 pl-5 text-left">{{ item.product.title }}</td>
              <td style="padding-left: 20px">
                {{ item.qty }}
              </td>
              <td class="text-right px-3 font-bold">
                {{ item.final_total | currency }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right p-2 px-3 font-bold">總計 {{ order.total | currency }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="wrap border-2 rounded-md">
        <table class="w-full">
          <tbody class="text-left">
            <tr>
              <th class="p-2 px-3">姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th class="p-2 px-3">電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th class="p-2 px-3">信箱</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th class="p-2 px-3">地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th class="p-2 px-3">日期</th>
              <td>{{ date }}</td>
            </tr>
            <tr>
              <th class="p-2 px-3">狀態</th>
              <td class="text-orange font-bold">
                <h6 v-if="!order.is_paid"><i class="fas fa-exclamation-triangle mr-1"></i> 尚未付款</h6>
                <h6 v-else><i class="fas fa-check-circle mr-1"></i>付款完成</h6>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right p-2" v-if="order.is_paid === false">
          <button type="submit" class="rounded py-1 px-2 bg-grayish-dark text-white hover:opacity-80 tracking-wider" @click="payOrder">
            確認付款
          </button>
        </div>
        <div class="text-right p-2" v-if="order.is_paid === true">
          <button type="button" class="rounded py-1 px-3 bg-grayish-dark text-white hover:opacity-70 tracking-wider" @click="$router.push('/store')">
            繼續購物
          </button>
          <button type="button" class="rounded py-1 px-3 ml-2 bg-grayish-light text-grayish-dark hover:opacity-70 tracking-wider" @click="$router.push('/')">
            回到首頁
          </button>
        </div>
      </div>
      <div class="modal" id="pay-modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <p>付款成功，感謝您的購買！</p>
              <button type="button" class="btn btn-outline-info mt-3" data-toggle="modal" data-target="#pay-modal">
                Close Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "Complete",
  data() {
    return {
      orderId: "",
      order: {
        user: {},
      },
      date: "",
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/syuanyu/order/${vm.orderId}`;
      vm.$store.commit("LOADING", true);
      vm.$http.get(api).then((response) => {
        vm.order = response.data.order;
        vm.$store.commit("LOADING", false);
      });
    },
    payOrder() {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/syuanyu/pay/${vm.orderId}`;
      vm.$store.commit("LOADING", true);
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.getOrder();
          $("#pay-modal").modal("show");
          vm.$store.commit("LOADING", false);
        } else {
          vm.$store.commit("LOADING", false);
        }
      });
    },
    dateFormate() {
      let newdate = new Date();
      let year = newdate.getFullYear();
      let month = newdate.getMonth() + 1 < 10 ? "0" + (newdate.getMonth() + 1) : newdate.getMonth() + 1;
      let date = newdate.getDate() < 10 ? "0" + newdate.getDate() : newdate.getDate();
      this.date = year + "年" + month + "月" + date + "日";
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
    this.dateFormate();
  },
};
</script>

<style scoped>
h5 {
  font-size: 18px;
  letter-spacing: 5px;
}
tr {
  border-bottom: 2px solid #e5e7eb;
}
span {
  font-size: 20px;
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
</style>
