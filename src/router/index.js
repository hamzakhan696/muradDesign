import { createRouter, createWebHistory } from 'vue-router'
import indexView from '@/pages/indexView.vue'
import influencerView from '@/pages/influencerView.vue'
import blogView from '@/pages/blogView.vue'

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
    },
    {
      path: '/blogs',
      name: 'blog',
      component: blogView
    }
  ]
})

export default router
