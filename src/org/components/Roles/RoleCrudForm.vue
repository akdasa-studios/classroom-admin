<template>
  <CrudForm
    :title="textHeaderTitle"
    :description="textHeaderDescription"
    @save="emit('save')"
  >
    <CrudFormTextInput
      v-model="model.name"
      :label="textName"
    />
    <CrudFormTextareaInput
      v-model="model.description"
      :label="textDescription"
    />

    <template
      v-for="group in permissionGroups"
      :key="group.id"
    >
      <CrudFormSectionHeader
        :title="group.name"
        :description="group.description"
      />

      <CrudFormCheckbox
        v-for="permission in group.permissions"
        :key="permission.id"
        :value="permission.id"
        :title="permission.name"
        :description="permission.description"
        v-model="model.permissions"
      />
    </template>
  </CrudForm>
</template>


<script setup lang="ts">
import { type PermissionsGroup, type Role } from './Models'
import { CrudForm, CrudFormCheckbox, CrudFormSectionHeader, CrudFormTextInput, CrudFormTextareaInput } from '@classroom/shared/components'

// --- Interface ---------------------------------------------------------------
defineProps<{
  permissionGroups: PermissionsGroup[]
  textHeaderTitle: string
  textHeaderDescription: string
  textName: string
  textDescription: string
}>()
const model = defineModel<Role>({ required: true })
const emit = defineEmits<{
  save: [void]
}>()
</script>
