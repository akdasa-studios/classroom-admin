import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
 {
    path: '/education/courses',
    name: 'education-courses',
    component: () => import('./pages/CoursesListPage.vue'),
    meta: {
      breadcrumbs: ['education', 'education-courses']
    }
  },
  {
    path: '/education/courses/:id',
    name: 'education-courses-edit',
    component: () => import('./pages/CoursesCrudPage.vue'),
    props: route => ({
      courseId: route.params.id !== 'new'
        ? route.params.id as string
        : undefined
    }),
    meta: {
      breadcrumbs: ['education', 'education-courses', 'education-courses-edit']
    }
  },
  {
    path: '/education/groups',
    name: 'education-groups',
    component: () => import('./pages/GroupsListPage.vue'),
    meta: {
      breadcrumbs: ['education', 'education-groups']
    }
  },
  {
    path: '/education/groups/:id',
    name: 'education-groups-edit',
    component: () => import('./pages/GroupsCrudPage.vue'),
    props: route => ({
      groupId: route.params.id !== 'new'
        ? route.params.id as string
        : undefined
    }),
    meta: {
      breadcrumbs: ['education', 'education-groups', 'education-groups-edit']
    }
  },
  {
    path: '/education/enrollments',
    name: 'education-enrollments',
    component: () => import('./pages/EnrollmentsListPage.vue'),
    meta: {
      breadcrumbs: ['education', 'education-enrollments']
    }
  },
  {
    path: '/education/enrollments/:id',
    name: 'education-enrollments-edit',
    component: () => import('./pages/EnrollmentsCrudPage.vue'),
    props: route => ({ enrollmentId: route.params.id as string }),
  },
]
