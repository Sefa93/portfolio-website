import AppContent from '@/components/AppContent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: AppContent },
    { path: '/home', component: AppContent },
  ],
})

export default router
