
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'; // Импортируйте ваши компоненты

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Добавьте другие маршруты здесь
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;