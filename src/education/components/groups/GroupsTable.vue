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
        <div>
          <div class="name">
            {{ item.name }}
          </div>
          <div class="color-text-500">
            {{ item.leaderName }} :: {{ item.courseName }}
          </div>
        </div>
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


<style scoped>
.name {
  font-weight: 600;
}

.text-dim {
  color: var(--color-text-500);
}
</style>
