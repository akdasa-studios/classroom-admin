import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
 {
    path: '/auth',
    name: 'auth',
    meta: { layout: 'plain' },
    component: () => import('./pages/AuthPage.vue'),
  },
]
