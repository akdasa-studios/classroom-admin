import { createRouter, createWebHistory } from 'vue-router'

import { routes as orgRoutes } from './org/routes'
import { routes as educationRoutes } from './education/routes'

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
    ...orgRoutes,
    ...educationRoutes,
  ]
})

export default router
