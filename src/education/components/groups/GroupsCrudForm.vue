<template>
  {{ model }}
  <CrudForm
    :title="i18n.header.title"
    :description="i18n.header.description"
    @save="emit('save')"
  >
    <CrudFormTextInput
      v-model="model.name"
      :label="i18n.fields.title"
    />
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
    <CrudFormTextareaInput
      v-model="model.description"
      :label="i18n.fields.description"
    />
    <CrudFormDateTimePicker
      v-model="model.startsAt"
      :label="i18n.fields.startsAt"
    />
    <CrudFormCombobox
      v-model="model.leader.id"
      v-model:query="model.leader.name"
      :items="leaderFound"
      :label="i18n.fields.leader"
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
import { CrudForm, CrudFormTextInput, CrudFormTextareaInput, CrudFormCombobox, CrudFormComboboxListItem, CrudFormDateTimePicker } from '@classroom/shared/components'

// --- Models ------------------------------------------------------------------
export type Group = {
  name: string
  description: string
  leader: { id: string, name: string }
  course: { id: string, title: string }
  startsAt: number
}

//--- Interface ---------------------------------------------------------------
const props = defineProps<{
  usersFetcher: (query: string) => Promise<Array<{ id: string, label: string }>>
  coursesFetcher: (query: string) => Promise<Array<{ id: string, label: string }>>
  i18n: {
    fields: { 
      title: string 
      description: string
      leader: string
      course: string
      startsAt: string
    }
    header: {
      title: string
      description: string
    }
  }
}>()

const model = defineModel<Group>({ required: true, default: { name: "123" } })
 
const emit = defineEmits<{
  save: [void]
}>()

//--- State -------------------------------------------------------------------
const leaderFound = ref<Array<{ id: string, label: string }>>([])
const courseFound = ref<Array<{ id: string, label: string }>>([])

watchDebounced(
  () => model.value.leader.name,
  async (value) => { leaderFound.value = await props.usersFetcher(value) },
  { debounce: 500 }
)

watchDebounced(
  () => model.value.course.title,
  async (value) => { courseFound.value = await props.coursesFetcher(value) },
  { debounce: 500 }
)
</script>
