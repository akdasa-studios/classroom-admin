<template>
  <CrudForm
    :title="textHeader.title"
    :description="textHeader.description"
    @save="emit('save')"
  >
    <CrudFormTextInput
      v-model="model.name"
      :label="textFields.name"
    />
    <CrudFormTextInput
      v-model="model.email"
      :label="textFields.email"
    />
    <div class="columns">
      <CrudFormTextInput
        v-model="model.department"
        :label="textFields.department"
      />
      <CrudFormTextInput
        v-model="model.title"
        :label="textFields.title"
      />
    </div>

    <CrudFormSectionHeader
      :title="textFields.roles"
      description=""
    />

    <UserRolesSelector
      :roles="roles"
      v-model="model.roleIds"
    />
  </CrudForm>
</template>


<script setup lang="ts">
import { CrudForm, CrudFormTextInput, CrudFormSectionHeader } from '@classroom/shared/components'
import type { User, Role, FormHeader, FormFields } from './Models'
import UserRolesSelector from './UsersRolesSelector.vue'

// --- Interface ---------------------------------------------------------------
defineProps<{
  roles: Role[]
  textHeader: FormHeader
  textFields: FormFields
}>()
const model = defineModel<User>({ required: true })
const emit = defineEmits<{
  save: [void]
}>()
</script>


<style scoped lang="scss">
.columns {
  display: flex;
  align-items: stretch;
  flex-direction: row;
  gap: 2em;

  div {
    flex: 1 1 auto;
  }
}
</style>
