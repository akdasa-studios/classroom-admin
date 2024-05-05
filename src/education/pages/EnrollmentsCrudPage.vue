<template>
  <EnrollmentsCrudForm
    v-if="isEnrollmentLoaded"
    v-model="enrollment"
    :groups-fetcher="fetchGroups"
    :courses-fetcher="fetchCourses"
    :i18n="i18n"
    save-button-text="Accept"  
    delete-button-text="Decline"  
    @save="onSave"
    
  />
</template>


<script setup lang="ts">
import { useFluent } from 'fluent-vue'
import { useAsyncState } from '@vueuse/core'
import { useAppRouter  } from '@classroom/shared/composables'
import { useEnrollmentsService, useCoursesService, useGroupsService } from '@classroom/education/composables'
import { EnrollmentsCrudForm, type Enrollment } from '@classroom/education/components/enrollments/crud'

// --- Models ------------------------------------------------------------------
const EmptyEnrollment: Enrollment = {
  applicant: {id:"",name:"", avatarUrl:""}, 
  group:{id:"",name:""}, 
  course:{id:"",title:""}, 
  status: "new"
}

// --- Interface ---------------------------------------------------------------
const props = defineProps<{
  enrollmentId: string
}>()

// --- Dependencies ------------------------------------------------------------
const fluent = useFluent()
const router = useAppRouter()
const enrollmentsService = useEnrollmentsService()
const groupsService = useGroupsService()
const coursesService = useCoursesService()

// --- State -------------------------------------------------------------------
const { state: enrollment, isReady: isEnrollmentLoaded } = useAsyncState(
  async () => await fetchEnrollment(props.enrollmentId),
  { ...EmptyEnrollment }, { shallow: false }
)

// --- Handlers ----------------------------------------------------------------
async function onSave() {
  const payload = {
    courseId: enrollment.value.course.id,
    groupId: enrollment.value.group?.id,
    status: enrollment.value.status,
  }
  await enrollmentsService.update(props.enrollmentId, payload)
  router.replace('education-enrollments')
}

// --- Helpers -----------------------------------------------------------------
async function fetchEnrollment(enrollmentId: string): Promise<Enrollment> {
  const enrollmentsResponse = await enrollmentsService.getOne(enrollmentId)
  return { 
    ...enrollmentsResponse,
    applicant: { 
      id: enrollmentsResponse.applicant.id, 
      name: enrollmentsResponse.applicant.name, 
      avatarUrl: enrollmentsResponse.applicant.avatarUrl || `https://i.pravatar.cc/${Math.floor(100 + Math.random() * 100)}`
    },
    group: enrollmentsResponse.group ?? { id: "", name: "" }
  };
}

async function fetchGroups(query: string): Promise<Array<{ id: string, label: string }>> {
  return (await groupsService.findByNameAndCourse(
    query, enrollment.value.course.id 
  )).items.map(x => ({ id: x.id, label: x.name }))
}

async function fetchCourses(query: string): Promise<Array<{ id: string, label: string }>> {
  return (await coursesService.find(query)).items.map(x => ({ id: x.id, label: x.title }))
}

// --- I18n --------------------------------------------------------------------
const i18n = {
  header: {
    title:       fluent.$t("enrollments-crud-title"),
    description: fluent.$t("enrollments-crud-description"),
  },
  fields: {
    course: fluent.$t("enrollments-course"),
    group:  fluent.$t("enrollments-group"),
  },
  actionButtons: {
    save: fluent.$t("enrollments-accept"),
    delete: fluent.$t("enrollments-decline")
  }
}
</script>
