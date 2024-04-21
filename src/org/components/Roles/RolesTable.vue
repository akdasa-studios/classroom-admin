<template>
  <Table class="CrudTable">
    <template #head>
      <TableRow>
        <TableCell
          :header="true"
          variant="first"
        >
          {{ $ta('org-roles-table').name }}
        </TableCell>

        <TableCell :header="true">
          {{ $ta('org-roles-table').description }}
        </TableCell>
      </TableRow>
    </template>

    <TableRow
      v-for="item in items"
      :key="item.id"
      @click="emit('click', item)"
    >
      <TableCell variant="first">
        {{ item.name }}
      </TableCell>
      <TableCell 
        class="color-text-500" 
      >
        {{ item.description }}
      </TableCell>
    </TableRow>
  </Table>
</template>


<script setup lang="ts">
import { Table, TableCell, TableRow } from '@classroom/shared/components'
import { type Role } from './Models'

// --- Interface ---------------------------------------------------------------
defineProps<{
  items: readonly Role[]
}>()

const emit = defineEmits<{
  click: [item: Role]
}>()
</script>

