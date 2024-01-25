<template>
  <CrudTableHeader
    :title="$t('org-roles-crud')"
    :description="$ta('org-roles-crud').description"
    :create-button-title="$ta('org-roles-crud').create"
  />

  <Table class="CrudTable">
    <template #head>
      <TableRow>
        <TableHeader variant="first">
          {{ $ta('org-roles-table').name }}
        </TableHeader>

        <TableHeader>
          {{ $ta('org-roles-table').description }}
        </TableHeader>
      </TableRow>
    </template>

    <TableRow
      v-for="role in roles"
      :key="role.email"
    >
      <TableCell variant="first">
        {{ role.name }}
      </TableCell>
      <TableCell class="text-gray-500">
        {{ role.title }}
      </TableCell>
    </TableRow>
  </Table>
</template>


<script setup lang="ts">
import { CrudTableHeader } from '@/shared/components'
import { Table, TableHeader, TableCell, TableRow } from '@/shared/components'


/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

const rolesService = useRolesService()


/* -------------------------------------------------------------------------- */
/*                                    State                                   */
/* -------------------------------------------------------------------------- */

const roles = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]
</script>


<style scoped>
.CrudTable {
  margin-top: 2rem;
}
</style>