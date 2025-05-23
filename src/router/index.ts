import { createRouter, createWebHistory, type RouterScrollBehavior} from 'vue-router'
import BlogView from '../views/blogView.vue'
import FaqView from '../views/FaqView.vue'
import DocsView from '../views/DocsView.vue'
import HomePageView from '../views/HomePageView.vue'
import adminView from '../views/adminView.vue'
import { useAuthStore } from '../stores/authStore.ts';
import LoginView from '../views/LoginView.vue'

const scrollBehavior: RouterScrollBehavior = () => {
  return { top: 0 }
}


const router = createRouter({
  history: createWebHistory('/'), //import.meta.env.BASE_URL
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
      path: '/admin',
      name: 'Admin',
      component: adminView,
      meta: { requiresAuth: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { hideForAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue')
    }
  ],
  scrollBehavior
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'Login', query: { redirect: to.fullPath } };
  }

  if (to.meta.hideForAuth && authStore.isAuthenticated) {
    return { name: 'Posts' };
  }
});



export default router
