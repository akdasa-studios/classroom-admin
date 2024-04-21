<template>
  <RoleCrudForm
    v-if="state.model"
    v-model="state.view"
    :permission-groups="getPermissions()"
    @save="onSave"
  />
</template>


<script setup lang="ts">
import { PermissionGroups, Permission, Role, type RoleIdentity } from '@classroom/core/aggregates'
import { RoleCrudForm, EmptyRole } from  '@classroom/org/components'
import { useRolesService } from '@classroom/org/composables'
import { useFluent } from 'fluent-vue'
import { useAppRouter, useCrudAsyncState } from '@classroom/shared/composables'
import { roleToViewModel, updateModel } from '@classroom/org/helpers'
import { UuidIdentity } from '@akd-studios/framework/domain'

// --- Interface ---------------------------------------------------------------
const props = defineProps<{
  roleId: RoleIdentity | undefined
}>()

// --- Dependencies ------------------------------------------------------------
const fluent = useFluent()
const rolesService = useRolesService()
const router = useAppRouter()

// --- State -------------------------------------------------------------------
const { state } = useCrudAsyncState({
  id:      props.roleId?.value,
  fetcher: (id) => rolesService.getRole(new UuidIdentity(id)), 
  mapper:  roleToViewModel, 
  empty:   [new Role(new UuidIdentity(), "", "", []), EmptyRole]
})

// --- Handlers ----------------------------------------------------------------
async function onSave() {
  if (!state.value.model) { return }
  updateModel(state.value.model, state.value.view)
  await rolesService.saveRole(state.value.model)
  router.replace('org-roles')
}

// --- Helpers -----------------------------------------------------------------
function getPermissions() {
  return PermissionGroups.map(groupId => ({
    id: groupId,
    name: fluent.$t(`permission-${groupId}`),
    description: fluent.$ta(`permission-${groupId}`).description,
    permissions: Object.values(Permission).filter(p => p.startsWith(groupId)).map(p => ({
      id: p,
      name: fluent.$t(`permission-${p}`),
      description:  fluent.$ta(`permission-${groupId}`).description
    }))
  }))
}
</script>
