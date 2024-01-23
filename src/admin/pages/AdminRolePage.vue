<template>
  <CrudForm
    :title="$t('org-roles-crud')"
    :description="$ta('org-roles-crud').description"
  >
    <CrudFormTextInput :label="$t('org-roles-name')" />
    <CrudFormTextareaInput :label="$t('org-roles-description')" />

    <template
      v-for="group in permissionGroups"
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
      />
    </template>
  </CrudForm>
</template>


<script setup lang="ts">
import { CrudForm, CrudFormSectionHeader, CrudFormTextInput, CrudFormTextareaInput, CrudFormCheckbox } from '@/admin/components'
import { Permissions } from '@core/permissions'

/* -------------------------------------------------------------------------- */
/*                                    State                                   */
/* -------------------------------------------------------------------------- */

const permissionGroups = ["org", "edu", "fin", "usr"]


/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

function getPermissionGroup(groupPrefix: string): string[] {
  return Object.values(Permissions).filter((x: string) => x.startsWith(groupPrefix))
}
</script>


<fluent locale="en">
role = Role
role-description = Description
roles = Roles
roles-description = A list of all the roles in your school including their name and permissions.
</fluent>


<fluent locale="ru">
role = Роль
role-description = Описание
roles = Роли
roles-description = Список всех ролей в вашей школе, включая их название и разрешения.
</fluent>
