<template>
  <CrudTableHeader
    :title="$t('org-users-crud')"
    :description="$ta('org-users-crud').header"
    :create-button-title="$ta('org-users-crud').create"
    @create-button-click="onCreateButtonClicked"
  />

  <UsersTable 
    :users=users
    :roles=roles
    @click="onTableRowClicked"
  />
</template>


<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
import { useAppRouter  } from '@classroom/shared/composables'
import { CrudTableHeader } from '@classroom/shared/components'
import { type User, type Role } from '@classroom/org/components/Users'
import { UsersTable } from '@classroom/org/components'
import { useRolesService, useUsersService } from '@classroom/org/composables'

// --- Dependencies ------------------------------------------------------------
const usersService = useUsersService()
const rolesService = useRolesService()
const router = useAppRouter()

// --- State -------------------------------------------------------------------
const { state: users } = useAsyncState<User[]>(usersService.getAll().then(x => x.items), [])
const { state: roles } = useAsyncState<Role[]>(rolesService.getAll().then(x => x.items), [])

// --- Handlers ----------------------------------------------------------------
function onTableRowClicked(user: User) {
  router.go('org-users-edit', { id: user.id })
}

function onCreateButtonClicked() {
  router.go('org-users-edit', { id: 'new' })
}
</script>

