import Vue from 'vue';
import 'bootstrap';
import './plugins/axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
  configure,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import { required, email } from 'vee-validate/dist/rules';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import currencyFilter from './filters/currency';
import date from './filters/date';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
axios.defaults.withCredentials = true;

Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', date);

Vue.use(VueI18n);
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
localize('zh_TW', TW);

configure({
  classes: {
    valid: 'valid',
    invalid: 'invalid',
  },
});
extend('required', {
  ...required,
  message: '此欄位不可為空',
});
extend('email', {
  ...email,
  message: 'Email 格式不正確',
});
extend('phone', {
  validate: ((value) => {
    const reg = /^09[0-9]{8}$/;
    return reg.test(value);
  }),
  message: '請輸入正確號碼',
});

const i18n = new VueI18n({
  locale: 'zhTW',
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = 'https://vue-course-api.hexschool.io/api/user/check';
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
