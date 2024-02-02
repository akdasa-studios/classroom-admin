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
      <TableCell variant="first">
        <div class="UserCell">
          <Avatar url="http://placekitten.com/g/200/200" />
          <div class="info">
            <div class="name">
              {{ user.name }}
            </div>
            <div class="text-dim">
              {{ user.email }}
            </div>
          </div>
        </div>
      </TableCell>


      <TableCell>
        <div>{{ user.title }}</div>
        <div class="text-dim">
          {{ user.department }}
        </div>
      </TableCell>

      <TableCell align="center">
        <span class="text-dim">
          {{ getRoles(user.roleIds) }}
        </span>
      </TableCell>

      <TableCell align="center">
        <UserStatusBadge :variant="user.status">
          {{ $ta("org-users-status")[user.status] }}
        </UserStatusBadge>
      </TableCell>
    </TableRow>
  </Table>
</template>


<script setup lang="ts">
import type { Role, RoleIdentity, User, UserIdentity } from '@classroom/core/aggregates'
import { useRolesService, useUsersService } from '@classroom/org/composables'
import { Avatar, CrudTableHeader, Table, TableCell, TableRow, UserStatusBadge } from '@classroom/shared/components'
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


<style scoped lang="scss">
.CrudTable {
  margin-top: 2rem;

  .UserCell {
    display: flex;
    align-items: center;
  }

  .info {
    margin-left: 1rem;
  }

  .name {
    font-weight: 600;
  }

  .text-dim {
    color: var(--color-text-500);
  }
}
</style>
