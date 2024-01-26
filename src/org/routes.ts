import { UuidIdentity } from '@akd-studios/framework/domain'
import type { RoleIdentity } from '@classroom/core/aggregates'
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
    component: () => import('./pages/RolesListPage.vue')
  },
  {
    path: '/org/roles/:id',
    name: 'org-roles-edit',
    component: () => import('./pages/RolesCrudPage.vue'),
    props: route => ({
      roleId: route.params.id !== 'new'
        ? new UuidIdentity(route.params.id as string) as RoleIdentity
        : undefined
    }),
  },
  {
    path: '/org/users',
    name: 'org-users',
    component: () => import('./pages/AdminUsersPage.vue')
  }
]