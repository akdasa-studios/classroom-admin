<template>
  <CrudForm
    :title="i18n.header.title"
    :description="i18n.header.description"
    :action-buttons-text="i18n.actionButtons"
    @save="onStatusChangeClicked('approved')"
    @delete="onStatusChangeClicked('declined')"
  >
    <CrudFormCombobox
      v-model="model.course.id"
      v-model:query="model.course.title"
      :label="i18n.fields.course"
      :items="courseFound"
      v-slot="{ item }"
    >
      <CrudFormComboboxListItem>
        {{ item.label }}
      </CrudFormComboboxListItem>
    </CrudFormCombobox>

    <CrudFormCombobox
      v-model="model.group.id"
      v-model:query="model.group.name"
      :items="groupsFound"
      :label="i18n.fields.group"
      v-slot="{ item }"
    >
      <CrudFormComboboxListItem>
        {{ item.label }}
      </CrudFormComboboxListItem>
    </CrudFormCombobox>
  </CrudForm>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { watchDebounced } from '@vueuse/core'
import { CrudForm, CrudFormCombobox, CrudFormComboboxListItem } from '@classroom/shared/components'

// --- Models ------------------------------------------------------------------
export type EnrollmentStatus = 'pending' | 'approved' | 'declined' | 'graduated'
export type Enrollment = {
  applicant: { id: string, name: string, avatarUrl: string }
  course:  { id: string, title: string }
  group:  { id: string, name: string }
  status: EnrollmentStatus
}

//--- Interface ---------------------------------------------------------------
const props = defineProps<{
  groupsFetcher: (query: string) => Promise<Array<{ id: string, label: string }>>
  coursesFetcher: (query: string) => Promise<Array<{ id: string, label: string }>>
  i18n: {
    actionButtons: { save: string, delete: string },
    fields:  { course: string, group: string },
    header:  { title: string, description: string },
  }
}>()

const model = defineModel<Enrollment>({ required: true })

const emit = defineEmits<{
  save: [void]
}>()

//--- State -------------------------------------------------------------------
const groupsFound = ref<Array<{ id: string, label: string }>>([])
const courseFound = ref<Array<{ id: string, label: string }>>([])

watchDebounced(
  () => model.value.group.name,
  async (value) => { groupsFound.value = await props.groupsFetcher(value) },
  { debounce: 500 }
)

watchDebounced(
  () => model.value.course.title,
  async (value) => { courseFound.value = await props.coursesFetcher(value) },
  { debounce: 500 }
)

//--- Handlers ----------------------------------------------------------------
function onStatusChangeClicked(status: EnrollmentStatus) {
  model.value.status = status
  emit('save')
}
</script>
