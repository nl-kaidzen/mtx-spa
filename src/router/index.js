import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
  },
  {
    path: '/charts',
    name: 'charts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Charts.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
