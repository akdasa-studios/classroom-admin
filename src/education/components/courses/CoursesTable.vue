<template>
  {{ items }}

  {{ tableHeaders }}
  <Table class="CrudTable">
    <template #head>
      <TableRow>
        <TableCell
          :header="true"
          variant="first"
        >
          {{ tableHeaders.title }}
        </TableCell>

        <TableCell :header="true">
          {{ tableHeaders.description }}
        </TableCell>
      </TableRow>
    </template>

    <TableRow
      v-for="item in items"
      :key="item.id"
      @click="emit('click', item)"
    >
      <TableCell variant="first">
        {{ item.title }}
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
import type { Course, TableHeaders } from './models'

// --- Interface ---------------------------------------------------------------
defineProps<{
  items: readonly Course[],
  tableHeaders: TableHeaders
}>()

const emit = defineEmits<{
  click: [item: Course]
}>()
</script>

