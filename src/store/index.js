import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    cart: {
      carts: [],
    },
    totalQty: 0,
    sameProduct: false,
    itemId: '',
    messages: [],
  },
  mutations: {
    LOADING(state, status) {
      state.isLoading = status;
    },
    CART(state, payload) {
      state.cart = payload;
    },
    ADD_SAMEPRODUCT(state, payload) {
      state.totalQty = 0;
      state.itemId = '';
      state.sameProduct = false;
      state.cart.carts.filter(function (item) {
        if (item.product_id === payload.id) {
          state.itemId = item.id;
          state.sameProduct = true;
          state.totalQty = payload.qty + item.qty;
        }
      })
    },
    MESSAGE(state, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000);
      state.messages.push({
        message,
        status,
        timestamp,
      });
    },
    REMOVEMESSAGE(state, num) {
      state.messages.splice(num, 1);
    },
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    addCart(context, { id, qty }) {
      context.commit('LOADING', true);
      context.dispatch('getCart');
      context.commit('ADD_SAMEPRODUCT', { id: id, qty: qty });
      if (context.state.sameProduct) {
        console.log(context.state.itemId);
        const delApi = `https://vue-course-api.hexschool.io/api/syuanyu/cart/${context.state.itemId}`;
        const addApi = `https://vue-course-api.hexschool.io/api/syuanyu/cart`;
        const sameProductItem = {
          product_id: id,
          qty: context.state.totalQty
        };
        axios.delete(delApi).then(() => {
          return axios.post(addApi, { data: sameProductItem });
        }).then(() => {
          context.dispatch('getCart');
          context.commit('LOADING', false);
        });
      } else {
        const api = `https://vue-course-api.hexschool.io/api/syuanyu/cart`;
        const productItem = {
          product_id: id,
          qty: qty,
        };
        axios.post(api, { data: productItem }).then(() => {
          context.dispatch('getCart');
          context.commit('LOADING', false);
        });
      };
    },
    getCart(context) {
      const api = `https://vue-course-api.hexschool.io/api/syuanyu/cart`;
      context.commit('LOADING', true);
      axios.get(api).then((response) => {
        if (response.data.data.carts) {
          context.commit('CART', response.data.data);
        }
        context.commit('LOADING', false);
      });
    },
    removeCart(context, id) {
      const api = `https://vue-course-api.hexschool.io/api/syuanyu/cart/${id}`;
      context.commit('LOADING', true);
      axios.delete(api).then((response) => {
        context.dispatch('getCart');
        context.commit('LOADING', false);
      })
    },
    changeCartQty(context, { id, productId, num }) {
      const delAPI = `https://vue-course-api.hexschool.io/api/syuanyu/cart/${id}`;
      const addAPI = `https://vue-course-api.hexschool.io/api/syuanyu/cart`;
      const changeCart = {
        product_id: productId,
        qty: num,
      };
      axios.all([axios.delete(delAPI), axios.post(addAPI, { data: changeCart })]).then(axios.spread(() => {
        context.dispatch('getCart');
        context.commit('LOADING', false);
      }));
    },
    updateMessage(context, { message, status }) {
      context.commit('MESSAGE', { message, status });
      const timestamp = Math.floor(new Date() / 1000);
      context.dispatch('removeMessageWithTiming', timestamp);
    },
    removeMessageWithTiming(context, timestamp) {
      setTimeout(() => {
        context.state.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            context.state.messages.splice(i, 1);
          }
        });
      }, 3500);
    },
    removeMessage(context, num) {
      context.commit('REMOVEMESSAGE', num);
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    cart(state) {
      return state.cart;
    },
  },
  modules: {
  }
})
