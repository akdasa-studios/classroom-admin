<template>
  <Table class="CrudTable">
    <template #head>
      <TableRow>
        <TableCell
          :header="true"
          variant="first"
        >
          {{ textRoleColumnHeader }}
        </TableCell>

        <TableCell :header="true">
          {{ textDescriptionColumnHeader }}
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
  items: readonly Role[],
  textRoleColumnHeader: string,
  textDescriptionColumnHeader: string
}>()

const emit = defineEmits<{
  click: [item: Role]
}>()
</script>

