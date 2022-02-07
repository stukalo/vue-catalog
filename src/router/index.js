import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about/:id(\\d+)',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'default',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
