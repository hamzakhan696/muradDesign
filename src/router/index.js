import { createRouter, createWebHistory } from 'vue-router'
import indexView from '@/pages/indexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: indexView
    }
  ]
})

export default router
