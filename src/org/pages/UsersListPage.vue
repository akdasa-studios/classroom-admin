<template>
  <CrudTableHeader
    :title="$t('org-users-crud')"
    :description="$ta('org-users-crud').header"
    :create-button-title="$ta('org-users-crud').create"
    @create-button-click="onCreateButtonClicked"
  />

  <UsersTable 
    :users="users"
    :column-names="{
      name:   $ta('org-users-table').name,
      title:  $ta('org-users-table').title,
      roles:  $ta('org-users-table').roles,
      status: $ta('org-users-table').status,
    }"
    @click="onTableRowClicked"
  />
</template>


<script setup lang="ts">
import { useFluent } from 'fluent-vue'
import { useAsyncState } from '@vueuse/core'
import { useAppRouter  } from '@classroom/shared/composables'
import { CrudTableHeader } from '@classroom/shared/components'
import { useRolesService, useUsersService } from '@classroom/org/composables'
import { UsersTable, type User } from '@classroom/org/components/Users/UsersTable'

// --- Dependencies ------------------------------------------------------------
const usersService = useUsersService()
const rolesService = useRolesService()
const router = useAppRouter()
const fluent = useFluent()

// --- State -------------------------------------------------------------------
const { state: users } = useAsyncState<User[]>(fetchUsers, [])

// --- Handlers ----------------------------------------------------------------
function onTableRowClicked(user: User) {
  router.go('org-users-edit', { id: user.id })
}

function onCreateButtonClicked() {
  router.go('org-users-edit', { id: 'new' })
}

// --- Helpers  ----------------------------------------------------------------
async function fetchUsers(): Promise<User[]> {
  const [
    rolesResponse,
    usersResponse,
  ] = await Promise.all([
    rolesService.getAll(),
    usersService.getAll(),
  ])
  return usersResponse.items.map(user => ({
    ...user,
    status: {
      type: user.status,
      text: fluent.$ta("org-users-status")[user.status],
    },
    avatarUrl:  user.avatarUrl || "https://a0.anyrgb.com/pngimg/1236/14/no-facial-features-no-avatar-no-eyes-expressionless-avatar-icon-delayering-avatar-user-avatar-men-head-portrait-thumbnail.png",
    roles:      user.roleIds.map(
                  roleId => 
                    rolesResponse.items.find(
                      role => role.id === roleId
                    )?.name || ""
                  )
  }))
}
</script>

