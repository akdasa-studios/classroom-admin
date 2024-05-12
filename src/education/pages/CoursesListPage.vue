<template>
  <CrudTableHeader
    :title="$t('courses-crud-title')"
    :description="$t('courses-crud-description')"
    :create-button-title="$t('create')"
    @create-button-click="router.go('education-courses-edit', { id: 'new' })"
  />

  <CoursesTable
    :items="courses"
    :table-headers="{
      title: $t('courses-title'),
      description: $t('courses-description'),
    }"
    class="CoursesTable"
    @click="r => router.go('education-courses-edit', { id: r.id })"
  />
</template>


<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
import { CrudTableHeader } from '@classroom/shared/components'
import { useAppRouter } from '@classroom/shared/composables'
import { useWithAuthentication } from '@classroom/auth/composables'
import { useCoursesService } from '@classroom/education/composables'
import { type Course, CoursesTable } from '@classroom/education/components/courses'

// --- Dependencies ------------------------------------------------------------
const router = useAppRouter()
const coursesService = useWithAuthentication(useCoursesService())

// --- State -------------------------------------------------------------------
const { state: courses } = useAsyncState(fetchData, [])

// --- Helpers -----------------------------------------------------------------
async function fetchData(): Promise<Course[]> {
  const coursesResponse = await coursesService.getAll()
  return coursesResponse.items.map(course => ({
    id: course.id,
    title: course.title,
    subtitle: course.subtitle,
    description: course.description,
    coverImageUrl: course.coverImageUrl,
  }))
}
</script>


<style scoped>
.CoursesTable {
  margin-top: 2em;
}
</style>

