import { createRouter, createWebHistory } from 'vue-router'

import { routes as adminRoutes } from './admin/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...adminRoutes
  ]
})

export default router
