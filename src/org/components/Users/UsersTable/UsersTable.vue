<template>
  <Table class="CrudTable">
    <template #head>
      <TableRow>
        <TableCell
          variant="first"
          :header="true"
        >
          {{ columnNames.name }}
        </TableCell>

        <TableCell :header="true">
          {{ columnNames.title }}
        </TableCell>

        <TableCell
          :header="true"
          align="center"
        >
          {{ columnNames.roles }}
        </TableCell>
        <TableCell
          align="center"
          :header="true"
        >
          {{ columnNames.status }}
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
          {{ user.roles.join(", ") }}
        </span>
      </TableCell>

      <TableCell align="center">
        <UserStatusBadge :variant="user.status.type">
          {{ user.status.text }}
        </UserStatusBadge>
      </TableCell>
    </TableRow>
  </Table>
</template>


<script setup lang="ts">
import { Avatar, Table, TableCell, TableRow, UserStatusBadge } from '@classroom/shared/components'

// --- Models ------------------------------------------------------------------
export type User = {
  id: string
  name: string
  email: string
  title?: string
  department?: string
  roles: string[]
  avatarUrl: string
  status: { 
    type: 'invited' | 'active' | 'inactive'
    text: string
  }
}

export type ColumnNames = {
  name: string,
  title: string,
  roles: string,
  status: string
}

// --- Interface ---------------------------------------------------------------
defineProps<{
  users: User[]
  columnNames: ColumnNames
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

