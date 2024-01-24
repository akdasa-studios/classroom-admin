<template>
  <CrudTableHeader
    :title="$t('roles')"
    :description="$t('roles-description')"
  />

  <div class="mt-8 flow-root">
    <Table>
      <template #head>
        <TableRow>
          <TableHeader variant="first">
            {{ $t('role') }}
          </TableHeader>

          <TableHeader>
            {{ $t('role-description') }}
          </TableHeader>
        </TableRow>
      </template>

      <TableRow
        v-for="person in people"
        :key="person.email"
      >
        <TableCell variant="first">
          {{ person.name }}
        </TableCell>
        <TableCell class="text-gray-500">
          {{ person.title }}
        </TableCell>
      </TableRow>
    </Table>
  </div>
</template>


<script setup lang="ts">
import { CrudTableHeader } from '@/admin/components'
import { Table, TableHeader, TableCell, TableRow } from '@/shared/components'

const people = [
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


<fluent locale="en">
role = Role
role-description = Description
roles = Roles
roles-description = A list of all the roles in your school including their name and permissions.
</fluent>


<fluent locale="ru">
role = Роль
role-description = Описание
roles = Роли
roles-description = Список всех ролей в вашей школе, включая их название и разрешения.
</fluent>
@/shared/components/Crud