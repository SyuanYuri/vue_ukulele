<template>
  <div>
    <button type="button" class="bag bg-transparent border-none z-10" data-toggle="modal" data-target="#cart-modal" @click="cartModalShow()">
      <i style="font-size: 25px" class="fas fa-shopping-bag text-grayish-dark hover:text-orange border shadow bg-grayish-light rounded-full h-16 w-16 flex items-center justify-center"></i>
      <small class="py-0.5 px-2 bg-orange text-white rounded-full font-mono" v-if="cart.carts.length">
        {{ cart.carts.length }}
      </small>
    </button>
    <div class="modal fade" id="cart-modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="table-wrap">
              <table class="table mb-0 text-info font-weight-bold">
                <thead>
                  <tr>
                    <th></th>
                    <th>尺寸</th>
                    <th>品名</th>
                    <th>價格</th>
                    <th class="text-right">數量</th>
                    <th>小計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td class="text-center cursor-pointer hover:text-orange" @click="removeCart(item.id)">
                      <i class="fas fa-trash-alt"></i>
                    </td>
                    <td>
                      <div class="badge badge-info text-white">{{ item.product.category }} 吋</div>
                    </td>
                    <td>{{ item.product.title }}</td>
                    <td class="text-right">
                      {{ item.product.price | currency }}
                    </td>
                    <td class="text-right">{{ item.qty }} {{ item.product.unit }}</td>
                    <td class="text-right">{{ item.total | currency }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="5" class="text-right">總計</td>
                    <td class="text-right">{{ cart.total | currency }}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div class="modal-footer flex justify-content-sm-end">
            <router-link :to="{ name: 'Store' }">
              <button type="button" class="btn rounded py-2 px-10 mr-0 mr-sm-2 bg-secondary text-primary" @click="cartModalHide()">
                繼續選購
              </button>
            </router-link>
            <router-link :to="{ name: 'CheckOrder' }">
              <button type="button" class="btn rounded py-2 px-10 bg-primary text-white" @click="cartModalHide()">
                前往結帳
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      length: 0,
    };
  },
  methods: {
    getCart() {
      this.$store.dispatch("getCart");
    },
    removeCart(id) {
      this.$store.dispatch("removeCart", id);
    },
    cartModalShow() {
      $("#cart-modal").modal("show");
    },
    cartModalHide() {
      $("#cart-modal").modal("hide");
    },
  },
  computed: {
    ...mapGetters(["cart"]),
  },
  created() {
    this.getCart();
  },
};
</script>

<style scoped>
small {
  font-size: 12px;
  position: absolute;
  top: 6px;
  right: 5px;
}
i {
  transition: all 0.5s;
}
.bag {
  cursor: pointer;
  position: fixed;
  bottom: 2em;
  right: 2em;
}
.bag:focus {
  outline: 0;
}
.table td,
.table th {
  padding: 1rem;
  letter-spacing: 2px;
}
.badge {
  padding: 0.5em 0.8em;
}
.btn {
  letter-spacing: 3px;
}
.table thead th {
  border: none;
  padding-top: 10px;
}
.table-wrap {
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
