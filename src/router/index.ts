import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomePage.vue'),
    },
    {
      path: '/new',
      name: 'new-decision',
      component: () => import('@/views/new-decision/NewDecisionPage.vue'),
    },
  ],
})

export default router
