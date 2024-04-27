<template>
  <CrudTableHeader
    :title="$t('org-users-crud')"
    :description="$ta('org-users-crud').header"
    :create-button-title="$ta('org-users-crud').create"
    @create-button-click="onCreateButtonClicked"
  />

  <UsersTable 
    :items=users
    @click="onTableRowClicked"
  />
</template>


<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
import { useAppRouter  } from '@classroom/shared/composables'
import { CrudTableHeader } from '@classroom/shared/components'
import { type UserViewModel } from '@classroom/org/components'
import { UsersTable } from '@classroom/org/components'
import { useRolesService, useUsersService } from '@classroom/org/composables'

// --- Dependencies ------------------------------------------------------------
const usersService = useUsersService()
const rolesService = useRolesService()
const router = useAppRouter()

// --- State -------------------------------------------------------------------
const { state: users } = useAsyncState<UserViewModel[]>(fetchData, [])

// --- Handlers ----------------------------------------------------------------
function onTableRowClicked(userId: string) {
  router.go('org-users-edit', { id: userId })
}

function onCreateButtonClicked() {
  router.go('org-users-edit', { id: 'new' })
}

// --- Helpers -----------------------------------------------------------------
async function fetchData(): Promise<UserViewModel[]> {
  const [
    usersResponse,
    rolesResponse,
  ] = await Promise.all([
    usersService.getAll(),
    rolesService.getAll(),
  ])
  return usersResponse.items.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    title: user.title,
    department: user.department,
    status: user.status,
    roles: user.roles.map(roleId => rolesResponse.items.find(role => role.id === roleId)?.name || ""),
    avatarUrl: user.avatarUrl || "https://placekitten.com/200/300"
  }))
}
</script>

