import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaqView from '../views/FaqView.vue'
import DocsView from '../views/DocsView.vue'
import HomePageView from '../views/HomePageView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homePage',
    component: HomePageView,
  },
  {
    path: '/blog',
    name: 'blog',
    component: HomeView,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FaqView
  },
  {
    path: '/docs',
    name: 'docs',
    component: DocsView,
  },
  // Добавляем обработку 404 в самом конце
  {
    path: '/:pathMatch(.*)*', // Ловит все пути, которые не совпали с вышеперечисленными
    name: 'not-found',
    component: NotFoundView,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
