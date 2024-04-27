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

    <!-- <template -->
    <!--   v-for="group in permissionGroups" -->
    <!--   :key="group.id" -->
    <!-- > -->
    <!--   <CrudFormSectionHeader -->
    <!--     :title="group.name" -->
    <!--     :description="group.description" -->
    <!--   /> -->
    <!---->
    <!--   <CrudFormCheckbox -->
    <!--     v-for="permission in group.permissions" -->
    <!--     :key="permission.id" -->
    <!--     :value="permission.id" -->
    <!--     :title="permission.name" -->
    <!--     :description="permission.description" -->
    <!--     v-model="model.permissions" -->
    <!--   /> -->
    <!-- </template> -->
  </CrudForm>
</template>


<script setup lang="ts">
import { type User } from './Models'
import { CrudForm, CrudFormTextInput } from '@classroom/shared/components'

// --- Interface ---------------------------------------------------------------
defineProps<{
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
