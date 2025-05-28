import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('~/pages/index.vue')
    },
    {
      path: '/category/:slug',
      name: 'category',
      component: () => import('~/pages/category/[slug].vue')
    }
  ]
})

export default router 