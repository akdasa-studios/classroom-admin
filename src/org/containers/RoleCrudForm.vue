<template>
  <CrudForm
    :title="$t('org-roles-crud')"
    :description="$ta('org-roles-crud').description"
    @save="onSaveButtonClicked"
  >
    <CrudFormTextInput
      v-model="name"
      :label="$t('org-roles-name')"
    />
    <CrudFormTextareaInput
      v-model="description"
      :label="$t('org-roles-description')"
    />

    <template
      v-for="group in PermissionGroups"
      :key="group"
    >
      <CrudFormSectionHeader
        :title="$t(`permission-${group}`)"
        :description="$ta(`permission-${group}`).description"
      />

      <CrudFormCheckbox
        v-for="permissionId in getPermissionGroup(group)"
        :key="permissionId"
        :title="$t(`permission-${permissionId}`)"
        :description="$ta(`permission-${permissionId}`).description"
        @update:model-value="(v) => onPermissionUpdated(permissionId, v)"
      />
    </template>
  </CrudForm>
</template>


<script setup lang="ts">
import { CrudForm, CrudFormSectionHeader, CrudFormTextInput, CrudFormTextareaInput, CrudFormCheckbox } from '@/shared/components'
import { Permissions, PermissionGroups } from '@core/permissions'
import { ref, toRaw } from 'vue'


/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

const props = defineProps<{
  name: string,
  description: string,
  permissions: Permissions[]
}>()


/* -------------------------------------------------------------------------- */
/*                                    State                                   */
/* -------------------------------------------------------------------------- */

const name = ref(props.name)
const description = ref(props.description)
const permissions = ref(props.permissions)


/* -------------------------------------------------------------------------- */
/*                                  Handlers                                  */
/* -------------------------------------------------------------------------- */

function onPermissionUpdated(
  permissionId: Permissions,
  value: boolean
) {
  if (value && !permissions.value.includes(permissionId)) {
    permissions.value.push(permissionId)
  } else if (!value) {
    permissions.value = permissions.value.filter(x => x != permissionId)
  }
}

function onSaveButtonClicked() {
  console.log("SAVE", {
    name: name.value,
    description: description.value,
    permissions: toRaw(permissions.value)
  })
}

/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

function getPermissionGroup(
  groupPrefix: string
): Permissions[] {
  return Object.values(Permissions).filter((x: string) => x.startsWith(groupPrefix))
}
</script>
