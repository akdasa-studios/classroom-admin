<template>
  <CrudForm
    :title="$t('org-users-crud')"
    :description="$ta('org-users-crud').header"
    @save="emit('save')"
  >
    <CrudFormTextInput
      v-model="model.name"
      :label="$ta('org-users-crud').name"
    />
    <CrudFormTextInput
      v-model="model.email"
      :label="$ta('org-users-crud').email"
    />
    <div class="columns">
      <CrudFormTextInput
        v-model="model.department"
        :label="$ta('org-users-crud').department"
      />
      <CrudFormTextInput
        v-model="model.title"
        :label="$ta('org-users-crud').title"
      />
    </div>

    <CrudFormSectionHeader
      title="Roles"
      description="group.description"
    />

    <UserRolesSelector
      :roles="roles"
      v-model="model.roleIds"
    />
  </CrudForm>
</template>


<script setup lang="ts">
import { CrudForm, CrudFormTextInput, CrudFormSectionHeader } from '@classroom/shared/components'
import { type User, type Role } from './Models'
import UserRolesSelector from './UserRolesSelector.vue'

// --- Interface ---------------------------------------------------------------
defineProps<{
  roles: Role[]
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
