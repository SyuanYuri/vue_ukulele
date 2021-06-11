import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/Front.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/front/Home.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: 'store',
        name: 'Store',
        component: () => import('../views/front/Store.vue'),
      },
      {
        path: 'product/:productId',
        name: 'Product',
        component: () => import('../views/front/Product.vue'),
      },
      {
        path: 'checkorder',
        name: 'CheckOrder',
        component: () => import('../views/front/CheckOrder.vue'),
      },
      {
        path: 'userinfo',
        name: 'UserInfo',
        component: () => import('../views/front/UserInfo.vue'),
      },
      {
        path: 'complete/:orderId',
        name: 'Complete',
        component: () => import('../views/front/Complete.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/back/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/back/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/back/Orders.vue'),
        meta: { requiresAuth: true },
      },
    ]
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router
