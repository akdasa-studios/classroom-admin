<template>
  <CrudTableHeader
    :title="$t('org-roles-crud')"
    :description="$ta('org-roles-crud').header"
    :create-button-title="$ta('org-roles-crud').create"
    @create-button-click="router.go('org-roles-edit', {id: 'new'})"
  />

  <RolesTable 
    :items="state.view"
    class="RolesTable"
    @click="r => router.go('org-roles-edit', { id: r.id })"
  />
</template>


<script setup lang="ts">
import { type Role } from '@classroom/core/aggregates'
import { RolesTable } from '@classroom/org/components'
import { CrudTableHeader } from '@classroom/shared/components'
import { useAppRouter, useListAsyncState } from '@classroom/shared/composables'
import { useRolesService } from '@classroom/org/composables'
import { type Role as RoleViewModel } from '@classroom/org/components'
import { roleToViewModel } from '@classroom/org/helpers'

// --- Dependencies ------------------------------------------------------------
const router = useAppRouter()
const rolesService = useRolesService()

// --- State -------------------------------------------------------------------
const { state } = useListAsyncState<Role, RoleViewModel>({
  fetcher: () => rolesService.getAllRoles(),
  mapper:  roleToViewModel, 
})
</script>


<style scoped>
.RolesTable { 
  margin-top: 2em;
}
</style>

