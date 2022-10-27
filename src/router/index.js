import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: ()=> import('@/components/WelcomeMessage.vue'),
  },
  {
    path: '/todo',
    name: 'todo',
    component: ()=> import('@/components/MyTodo.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
