<template>
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
      :key="user.id"
      @click="emit('click', user)"
    >
      <TableCell variant="first">
        <div class="UserCell">
          <Avatar :url="user.avatarUrl" />
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
          {{ getRolesNames(user.roleIds).join(", ") }}
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
import { Avatar, Table, TableCell, TableRow, UserStatusBadge } from '@classroom/shared/components'
import { type User, type Role } from './Models'

// --- Interface ---------------------------------------------------------------
const props = defineProps<{
  users: readonly User[]
  roles: readonly Role[]
}>()

const emit = defineEmits<{
  click: [item: User]
}>()

// --- Helpers - ---------------------------------------------------------------
function getRolesNames(roleIds: string[]): string[] {
  return roleIds.map(x => props.roles.find(role => role.id === x)?.name || "") 
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

