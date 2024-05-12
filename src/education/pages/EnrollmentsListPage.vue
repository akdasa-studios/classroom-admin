<template>
  <CrudTableHeader
    :title="$t('enrollments-crud-title')"
    :description="$t('enrollments-crud-description')"
  />

  <EnrollmentsTable
    :enrollments="enrollments"
    :column-names="{
      student: $t('enrollments-student'),
      status:  $t('enrollments-status'),
    }"
    @click="onTableRowClicked"
  />
</template>


<script setup lang="ts">
import { useFluent } from 'fluent-vue'
import { useAsyncState } from '@vueuse/core'
import { useAppRouter  } from '@classroom/shared/composables'
import { CrudTableHeader } from '@classroom/shared/components'
import { useEnrollmentsService } from '@classroom/education/composables'
import { EnrollmentsTable, type Enrollment } from '@classroom/education/components/enrollments/list'
import { useWithAuthentication } from '@classroom/auth/composables'

// --- Dependencies ------------------------------------------------------------
const enrollmentsService = useWithAuthentication(useEnrollmentsService())
const router = useAppRouter()
const fluent = useFluent()

// --- State -------------------------------------------------------------------
const { state: enrollments } = useAsyncState<Enrollment[]>(fetchEnrollments, [])

// --- Handlers ----------------------------------------------------------------
function onTableRowClicked(enrollment: Enrollment) {
  router.go('education-enrollments-edit', { id: enrollment.id })
}

// --- Helpers  ----------------------------------------------------------------
async function fetchEnrollments(): Promise<Enrollment[]> {
  return (await enrollmentsService.getAll()).items.map(e => ({
    ...e,
    status: {
      type: e.status,
      text: fluent.$t(`enrollments-status-${e.status}`)
    },
    applicant: {
      id: e.applicant.id,
      name: e.applicant.name,
      avatarUrl: e.applicant.avatarUrl || `https://i.pravatar.cc/${Math.floor(100 + Math.random() * 100)}`
    }
  }))
}
</script>

