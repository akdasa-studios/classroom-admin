<template>
  <RoleCrudForm
    v-model="state"
    :permission-groups="getPermissions()"
    @save="onSave"
  />
</template>


<script setup lang="ts">
import { useFluent } from 'fluent-vue'
import { useAsyncState } from '@vueuse/core'
import { useAppRouter  } from '@classroom/shared/composables'
import { PermissionGroups, Permissions } from '@classroom/shared/models'
import { pick } from '@classroom/shared/utils'
import { useRolesService } from '@classroom/org/composables'
import { RoleCrudForm, EmptyRole, type Role } from '@classroom/org/components'

// --- Interface ---------------------------------------------------------------
const props = defineProps<{
  roleId: string | undefined
}>()

// --- Dependencies ------------------------------------------------------------
const fluent = useFluent()
const router = useAppRouter()
const rolesService = useRolesService()

// --- State -------------------------------------------------------------------
const { state } = useAsyncState(
  async () => props.roleId ? await fetchData(props.roleId) : EmptyRole,
  EmptyRole, { shallow: false }
)

// --- Handlers ----------------------------------------------------------------
async function onSave() {
  const payload = pick(state.value, 'name', 'description', 'permissions')
  await (!props.roleId 
    ? rolesService.create(payload)
    : rolesService.update(props.roleId, payload))
  router.replace('org-roles')
}

// --- Helpers -----------------------------------------------------------------
async function fetchData(roleId: string): Promise<Role> {
  const rolesResponse = await rolesService.getOne(roleId)
  return {
    ...pick(rolesResponse, 'id', 'name', 'description'),
    permissions: rolesResponse.permissions || []
  }
}

function getPermissions() {
  return PermissionGroups.map(groupId => ({
    id: groupId,
    name: fluent.$t(`permission-${groupId}`),
    description: fluent.$ta(`permission-${groupId}`).description,
    permissions: Permissions.filter(p => p.startsWith(groupId)).map(p => ({
      id: p,
      name: fluent.$t(`permission-${p}`),
      description:  fluent.$ta(`permission-${p}`).description
    }))
  }))
}
</script>
