import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from '@/views/index.vue'
import buttons from '@/views/buttons.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: buttons
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
