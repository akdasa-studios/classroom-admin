<template>
  <CrudTableHeader
    :title="$t('org-roles-crud')"
    :description="$ta('org-roles-crud').header"
    :create-button-title="$ta('org-roles-crud').create"
    @create-button-click="router.go('org-roles-edit', {id: 'new'})"
  />

  <RolesTable 
    :items="roles"
    class="RolesTable"
    @click="r => router.go('org-roles-edit', { id: r.id.value })"
  />
</template>


<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
import type { Role } from '@classroom/core/aggregates'
import { CrudTableHeader } from '@classroom/shared/components'
import { RolesTable } from '@classroom/org/components'
import { useRolesService } from '@classroom/org/composables'
import { useAppRouter } from '@classroom/shared/composables'

// --- Dependencies ------------------------------------------------------------
const router = useAppRouter()
const rolesService = useRolesService()

// --- State -------------------------------------------------------------------
const { state: roles } = useAsyncState<readonly Role[]>(rolesService.getAllRoles(), [])
</script>


<style scoped>
.RolesTable { 
  margin-top: 2em;
}
</style>
