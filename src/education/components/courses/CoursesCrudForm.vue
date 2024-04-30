<template>
  <CrudForm
    :title="i18n.header.title"
    :description="i18n.header.description"
    @save="emit('save')"
  >
    <CrudFormTextInput
      v-model="model.title"
      :label="i18n.fields.title"
    />
    <CrudFormTextInput
      v-model="model.subtitle"
      :label="i18n.fields.subtitle"
    />
    <CrudFormTextareaInput
      v-model="model.description"
      :label="i18n.fields.description"
    />
    <CrudFormFileInput
      v-model="model.coverImageUrl"
      :label="i18n.fields.coverImage"
      text="Drop here"
    />
  </CrudForm>
</template>


<script setup lang="ts">
import { type Course } from './models'
import { CrudForm, CrudFormTextInput, CrudFormFileInput, CrudFormTextareaInput } from '@classroom/shared/components'

// --- Interface ---------------------------------------------------------------
defineProps<{
  i18n: {
    fields: { 
      title: string 
      subtitle: string
      description: string
      coverImage: string
    }
    header: {
      title: string
      description: string
    }
  }
}>()
const model = defineModel<Course>({ required: true })
const emit = defineEmits<{
  save: [void]
}>()
</script>
