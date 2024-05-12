<template>
  <CrudTableHeader
    :title="$t('org-roles-crud')"
    :description="$ta('org-roles-crud').header"
    :create-button-title="$ta('org-roles-crud').create"
    @create-button-click="router.go('org-roles-edit', { id: 'new' })"
  />

  <RolesTable
    :items="state"
    :text-role-column-header="$ta('org-roles-table').name"
    :text-description-column-header="$ta('org-roles-table').description"
    class="RolesTable"
    @click="r => router.go('org-roles-edit', { id: r.id })"
  />
</template>


<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
import { CrudTableHeader } from '@classroom/shared/components'
import { useAppRouter } from '@classroom/shared/composables'
import { useRolesService } from '@classroom/org/composables'
import { type Role, RolesTable } from '@classroom/org/components/Roles'
import { useWithAuthentication } from '@classroom/auth/composables'

// --- Dependencies ------------------------------------------------------------
const router = useAppRouter()
const rolesService = useWithAuthentication(useRolesService())

// --- State -------------------------------------------------------------------
const { state } = useAsyncState<Role[]>(fetchData, [])

// --- Helpers -----------------------------------------------------------------
async function fetchData(): Promise<Role[]> {
  const rolesResponse = await rolesService.getAll()
  return rolesResponse.items.map(role => ({
    id: role.id,
    name: role.name,
    description: role.description,
    permissions: role.permissions,
  }))
}
</script>


<style scoped>
.RolesTable {
  margin-top: 2em;
}
</style>

