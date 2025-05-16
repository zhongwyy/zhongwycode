import { createRouter, createWebHistory} from 'vue-router'
import BlogView from '../views/blogView.vue'
import FaqView from '../views/FaqView.vue'
import DocsView from '../views/DocsView.vue'
import HomePageView from '../views/HomePageView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePageView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    { path: '/faq', name: 'FAQ', component: FaqView },
    {
      path: '/docs',
      name: 'docs',
      component: DocsView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue')
    }
  ],
})



export default router
