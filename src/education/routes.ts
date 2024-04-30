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
]
