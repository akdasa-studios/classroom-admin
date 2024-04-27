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
import { useRolesService } from '@classroom/org/composables'
import { roleToViewModel } from '@classroom/org/helpers'
import { RoleCrudForm, EmptyRole } from  '@classroom/org/components'

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
  async () => props.roleId ? roleToViewModel(await rolesService.getOne(props.roleId)) : EmptyRole,
  EmptyRole, { shallow: false }
)

// --- Handlers ----------------------------------------------------------------
async function onSave() {
  if (!props.roleId) {
    await rolesService.create({
      name: state.value.name,
      description: state.value.description,
      permissions: state.value.permissions
    })
  } else {
    await rolesService.update(props.roleId, {
      name: state.value.name,
      description: state.value.description,
      permissions: state.value.permissions
    })
  }
  router.replace('org-roles')
}

// --- Helpers -----------------------------------------------------------------
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
