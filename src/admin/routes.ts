import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/admin',
    name: 'admin',
    component: () => import('./pages/AdminIndexPage.vue'),
  },
  {
    path: '/admin/roles',
    name: 'admin-roles',
    component: () => import('./pages/AdminRolesPage.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('./pages/AdminUsersPage.vue')
  }
]