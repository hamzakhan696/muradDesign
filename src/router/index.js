import { createRouter, createWebHistory } from 'vue-router'
import indexView from '@/pages/indexView.vue'
import influencerView from '@/pages/influencerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: indexView
    },
    {
      path: '/services',
      name: 'influencer',
      component: influencerView
    }
  ]
})

export default router
