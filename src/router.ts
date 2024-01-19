import { createRouter, createWebHistory } from 'vue-router'

import { routes as adminRoutes } from './admin/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('./shared/pages/EmptyPage.vue'),
      meta: {
        layout: 'center'
      }
    },
    ...adminRoutes
  ]
})

export default router
