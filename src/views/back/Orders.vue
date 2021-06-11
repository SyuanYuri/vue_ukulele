<template>
  <div class="text-grayish-dark">
    <h3 class="mt-4 mb-3 tracking-widest">訂單列表</h3>
    <div class="table-wrap">
      <table class="border-2 w-full">
        <thead class="border-b-2 tracking-widest">
          <th class="px-3">購買日期</th>
          <th>顧客資料</th>
          <th>購買品項</th>
          <th class="px-4">應付金額</th>
          <th class="px-4">狀態</th>
        </thead>
        <tbody class="tracking-widest">
          <tr v-for="item in orders" :key="item.id">
            <td>{{ item.create_at | date }}</td>
            <td class="px-4">
              <ul class="text-left">
                <li>姓名：{{ item.user.name }}</li>
                <li>信箱：{{ item.user.email }}</li>
              </ul>
            </td>
            <td class="px-4">
              <ol class="list-decimal">
                <li v-for="product in item.products" :key="product.id" class="text-left">{{ product.product.title }}－{{ product.qty }} {{ product.product.unit }}</li>
              </ol>
            </td>
            <td class="text-right">{{ item.total | currency }}</td>
            <td>
              <strong v-if="item.is_paid" class="text-orange">已付款</strong>
              <span v-else class="text-choco">未付款</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :pages="pagination" @event="getOrders"></Pagination>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Orders",
  data() {
    return {
      orders: [],
      pagination: {},
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getOrders(page = 1) {
      const vm = this;
      const api = `https://vue-course-api.hexschool.io/api/syuanyu/admin/orders?page=${page}`;
      vm.$store.commit("LOADING", true);
      vm.$http.get(api).then((response) => {
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
        vm.$store.commit("LOADING", false);
      });
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style scoped>
h3 {
  font-size: 22px;
  text-shadow: 2px 2px 3px #d9d5ca;
}
th,
td {
  padding: 20px 0;
}
td {
  border-bottom: 1px solid #ccc;
}
</style>
