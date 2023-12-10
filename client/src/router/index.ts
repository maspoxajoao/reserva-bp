
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Schedule.vue';
import Schedule from '../views/Schedule.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/schedule', component: Schedule },
];

const router = new VueRouter({
  routes,
});

export default router;
