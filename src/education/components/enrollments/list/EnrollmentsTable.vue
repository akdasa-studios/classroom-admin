<template>
  <Table class="CrudTable">
    <template #head>
      <TableRow>
        <TableCell
          variant="first"
          :header="true"
        >
          {{ columnNames.student }}
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
      v-for="enrollment in enrollments"
      :key="enrollment.id"
      @click="emit('click', enrollment)"
    >
      <TableCell align="left">
        <div class="UserCell">
          <Avatar :url="enrollment.applicant.avatarUrl" />
          <div class="info">
            <div class="name">
              {{ enrollment.applicant.name }}
            </div>
            <div class="text-dim">
              {{ enrollment.group?.name }}
              {{ enrollment.course.title }}
            </div>
          </div>
        </div>
      </TableCell>

      <TableCell align="center">
        <EnrollmentsStatusBadge :variant="enrollment.status.type">
          {{ enrollment.status.text }}
        </EnrollmentsStatusBadge>
      </TableCell>
    </TableRow>
  </Table>
</template>


<script setup lang="ts">
import { Avatar, Table, TableCell, TableRow } from '@classroom/shared/components'
import EnrollmentsStatusBadge from './EnrollmentsStatusBadge.vue'

// --- Models ------------------------------------------------------------------
export type Enrollment = {
  id: string
  applicant: { id: string, name: string, avatarUrl: string, }
  group: { id: string, name: string }
  course: { id: string, title: string }
  status: { 
    type: 'new' | 'approved' | 'declined' | 'graduated'
    text: string
  }
}

export type ColumnNames = {
  student: string,
  status: string
}

// --- Interface ---------------------------------------------------------------
defineProps<{
  enrollments: Enrollment[]
  columnNames: ColumnNames
}>()

const emit = defineEmits<{
  click: [item: Enrollment]
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

