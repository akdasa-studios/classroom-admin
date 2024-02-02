import { UuidIdentity } from '@akd-studios/framework/domain'
import type { RoleIdentity } from '@classroom/core/aggregates'
import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/org',
    name: 'org',
    component: () => import('./pages/AdminIndexPage.vue'),
    meta: {
      breadcrumbs: ['org']
    }
  },
  {
    path: '/org/roles',
    name: 'org-roles',
    component: () => import('./pages/RolesListPage.vue'),
    meta: {
      breadcrumbs: ['org', 'org-roles']
    }
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
    meta: {
      breadcrumbs: ['org', 'org-roles', 'org-roles-edit']
    }
  },
  {
    path: '/org/users',
    name: 'org-users',
    component: () => import('./pages/UsersListPage.vue'),
    meta: {
      breadcrumbs: ['org', 'org-users']
    }
  }
]