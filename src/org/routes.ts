import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/org',
    name: 'org',
    component: () => import('./pages/AdminIndexPage.vue'),
  },
  {
    path: '/org/roles',
    name: 'org-roles',
    component: () => import('./pages/AdminRolesPage.vue')
  },
  {
    path: '/org/roles/:id',
    name: 'org-roles-edit',
    component: () => import('./pages/RolesEditPage.vue')
  },
  {
    path: '/org/users',
    name: 'org-users',
    component: () => import('./pages/AdminUsersPage.vue')
  }
]