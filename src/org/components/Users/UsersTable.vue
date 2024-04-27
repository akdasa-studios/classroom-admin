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
      v-for="user in items"
      :key="user.id"
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
          {{ user.roles.join(", ") }}
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
import { type User } from './Models'

// --- Interface ---------------------------------------------------------------
defineProps<{
  items: readonly User[]
}>()

const emit = defineEmits<{
  click: [item: User]
}>()
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

