<template>
  <Table class="CrudTable">
    <template #head>
      <TableRow>
        <TableCell
          :header="true"
          variant="first"
        >
          {{ i18n.headers.name }}
        </TableCell>

        <TableCell :header="true">
          {{ i18n.headers.description }}
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
        {{ item.courseName }}
        {{ item.leaderName }}
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

// --- Models ------------------------------------------------------------------
export type GroupsTableItem = {
  id: string,
  name: string,
  courseName: string,
  leaderName: string,
  description: string,
}

export type GroupsTableHeaders = {
  name: string,
  description: string,
}

// --- Interface ---------------------------------------------------------------
defineProps<{
  items: GroupsTableItem[],
  i18n: {
    headers: GroupsTableHeaders
  }
}>()

const emit = defineEmits<{
  click: [item: GroupsTableItem]
}>()
</script>

