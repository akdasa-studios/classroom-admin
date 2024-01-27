<template>
  <CrudTableHeader
    :title="$t('org-users-crud')"
    :description="$ta('org-users-crud').header"
    :create-button-title="$ta('org-users-crud').create"
    @create-button-click="onCreateButtonClicked"
  />

  <Table class="CrudTable">
    <template #head>
      <TableRow>
        <TableCell
          variant="first"
          :header="true"
        >
          {{ $ta('org-users-table').name }}
        </TableCell>

        <TableCell :header="true">
          {{ $ta('org-users-table').title }}
        </TableCell>

        <TableCell
          :header="true"
          align="center"
        >
          {{ $ta('org-users-table').roles }}
        </TableCell>
        <TableCell
          align="center"
          :header="true"
        >
          {{ $ta('org-users-table').status }}
        </TableCell>
      </TableRow>
    </template>

    <TableRow
      v-for="user in users"
      :key="user.id.value"
    >
      <!-- <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm"> -->
      <TableCell variant="first">
        <div class="flex items-center">
          <div class="h-11 w-11 flex-shrink-0">
            <img
              class="h-11 w-11 rounded-full"
              :src="user.avatarUrl ?? 'https://avatar.iran.liara.run/public/36'"
              alt=""
            >
          </div>
          <div class="ml-4">
            <div class="font-medium text-gray-900">
              {{ user.name }}
            </div>
            <div class="mt-1 text-gray-500">
              {{ user.email }}
            </div>
          </div>
        </div>
      </TableCell>
      <!-- </td> -->


      <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
        <div class="text-gray-900">
          {{ user.title }}
        </div>
        <div class="mt-1 text-gray-500">
          {{ user.department }}
        </div>
      </td>

      <TableCell align="center">
        <span class="text-gray-500">
          {{ getRoles(user.roleIds) }}
        </span>
      </TableCell>

      <TableCell align="center">
        <UserStatusBadge :variant="user.status">
          {{ $ta("org-users-status")[user.status] }}
        </UserStatusBadge>
      </TableCell>


      <!-- <TableCell variant="first">
        <span
          class="roleNav"
          @click="onTableRowClicked(user.id)"
        >{{ user.name }}</span>
      </TableCell>
      <TableCell class="text-gray-500">
        <RoleBadge
          v-for="roleId in user.roleIds"
          :key="roleId.value"
        >
          {{ getRole(roleId)?.name }}
        </RoleBadge>
      </TableCell> -->
    </TableRow>
  </Table>
</template>


<script setup lang="ts">
import type { Role, RoleIdentity, User, UserIdentity } from '@classroom/core/aggregates'
import { useRolesService, useUsersService } from '@classroom/org/composables'
import { CrudTableHeader, Table, TableCell, TableRow, UserStatusBadge } from '@classroom/shared/components'
import { onMounted, shallowRef } from 'vue'
import { useRouter } from 'vue-router'

/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

const usersService = useUsersService()
const rolesService = useRolesService()
const router = useRouter()


/* -------------------------------------------------------------------------- */
/*                                    State                                   */
/* -------------------------------------------------------------------------- */

const users = shallowRef<readonly User[]>([])
const roles = shallowRef<readonly Role[]>([])


/* -------------------------------------------------------------------------- */
/*                                    Hooks                                   */
/* -------------------------------------------------------------------------- */

onMounted(onEnter)


/* -------------------------------------------------------------------------- */
/*                                  Handlers                                  */
/* -------------------------------------------------------------------------- */

async function onEnter() {
  await fetchData()
}

function onTableRowClicked(
  userId: UserIdentity
) {
  router.push({ name: 'org-users-edit', params: { id: userId.value } })
}

function onCreateButtonClicked() {
  router.push({
    name: 'org-users-edit',
    params: { id: 'new' }
  })
}

/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

function getRole(roleId: RoleIdentity) {
  return roles.value.find(x => x.id.equals(roleId))
}

function getRoles(roleIds: RoleIdentity[]) {
  return roleIds.map(x => getRole(x)?.name).join(', ')
}

async function fetchData() {
  [
    roles.value,
    users.value
  ] = await Promise.all([
    rolesService.getAllRoles(),
    usersService.getTeamMembers()
  ])
}
</script>


<style scoped>
.CrudTable {
  margin-top: 2rem;
}

.roleNav {
  cursor: pointer;
}
</style>
