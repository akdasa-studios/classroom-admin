<template>
  <CrudForm
    :title="$t('org-roles-crud')"
    :description="$ta('org-roles-crud').header"
    @save="onSaveButtonClicked"
  >
    <CrudFormTextInput
      v-model="name"
      :label="$ta('org-roles-crud').name"
    />
    <CrudFormTextareaInput
      v-model="description"
      :label="$ta('org-roles-crud').description"
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
        v-for="permission in getPermissionGroup(group)"
        :key="permission"
        :title="$t(`permission-${permission}`)"
        :description="$ta(`permission-${permission}`).description"
        :model-value="permissions.includes(permission)"
        @update:model-value="(v) => onPermissionUpdated(permission, v)"
      />
    </template>
  </CrudForm>
</template>


<script setup lang="ts">
import { CrudForm, CrudFormSectionHeader, CrudFormTextInput, CrudFormTextareaInput, CrudFormCheckbox } from '@/shared/components'
import { Permission, PermissionGroups, Role } from '@core/aggregates'
import { ref, toRaw } from 'vue'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

export type RoleEditableFields = Pick<Role, "name" | "description" | "permissions">

const props = defineProps<{
  role: Role
}>()

const emit = defineEmits<{
  save: [RoleEditableFields]
}>()


/* -------------------------------------------------------------------------- */
/*                                    State                                   */
/* -------------------------------------------------------------------------- */

const name = ref(props.role.name)
const description = ref(props.role.description)
const permissions = ref(props.role.permissions)


/* -------------------------------------------------------------------------- */
/*                                  Handlers                                  */
/* -------------------------------------------------------------------------- */

function onPermissionUpdated(
  permission: Permission,
  value: boolean
) {
  if (value && !permissions.value.includes(permission)) {
    permissions.value.push(permission)
  } else if (!value) {
    permissions.value = permissions.value.filter(x => x != permission)
  }
}

function onSaveButtonClicked() {
  emit("save", {
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
): Permission[] {
  return Object.values(Permission).filter((x: string) => x.startsWith(groupPrefix))
}
</script>
