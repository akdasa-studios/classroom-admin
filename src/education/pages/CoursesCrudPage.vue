<template>
  <CoursesCrudForm
    v-model="course"
    :i18n="i18n"
    @save="onSave"
  />
</template>


<script setup lang="ts">
import { useFluent } from 'fluent-vue'
import { useAsyncState } from '@vueuse/core'
import { useAppRouter  } from '@classroom/shared/composables'
import { pick } from '@classroom/shared/utils'
import { useCoursesService } from '@classroom/education/composables'
import { CoursesCrudForm, EmptyCourse, type Course } from '@classroom/education/components/courses'
import { useWithAuthentication } from '@classroom/auth/composables'

// --- Interface ---------------------------------------------------------------
const props = defineProps<{
  courseId: string | undefined
}>()

// --- Dependencies ------------------------------------------------------------
const fluent = useFluent()
const router = useAppRouter()
const coursesService = useWithAuthentication(useCoursesService())

// --- State -------------------------------------------------------------------
const { state: course } = useAsyncState(
  async () => props.courseId ? await fetchData(props.courseId) : EmptyCourse(),
  EmptyCourse(), { shallow: false }
)

// --- Handlers ----------------------------------------------------------------
async function onSave() {
  const payload = pick(course.value, 'title', 'subtitle', 'description', 'coverImageUrl')
  await (!props.courseId
    ? coursesService.create(payload)
    : coursesService.update(props.courseId, payload))
  router.replace('education-courses')
}

// --- Helpers -----------------------------------------------------------------
async function fetchData(courseId: string): Promise<Course> {
  const coursesResponse = await coursesService.getOne(courseId)
  return { ...coursesResponse };
}

// --- i18n --------------------------------------------------------------------
const i18n = {
  header: {
    title:       fluent.$t("courses-crud-title"),
    description: fluent.$t("courses-crud-description"),
  },
  fields: {
    title:       fluent.$t("courses-title"),
    subtitle:    fluent.$t("courses-subtitle"),
    description: fluent.$t("courses-description"),
    coverImage:  fluent.$t("courses-cover-image"),
  }
}
</script>
