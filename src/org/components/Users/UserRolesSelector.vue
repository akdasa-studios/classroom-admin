<template>
  <template
    v-for="role in roles"
    :key="role.id"
  >
    <CrudFormCheckbox
      :title="role.name"
      :description="role.description"
      :value="role.id"
      v-model="model"
    />
  </template>
</template>


<script setup lang="ts">
import { type Role } from './Models'
import { CrudFormCheckbox } from '@classroom/shared/components'

// --- Interface ---------------------------------------------------------------
defineProps<{
  roles: Role[]
}>()
const model = defineModel<string[]>({ required: true })
</script>
