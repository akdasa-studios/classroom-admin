<template>
  <CrudTableHeader
    :title="$t('org-users-crud')"
    :description="$ta('org-users-crud').header"
    :create-button-title="$ta('org-users-crud').create"
    @create-button-click="onCreateButtonClicked"
  />

  <Table class="CrudTable">
    <template #head>
      <TableRow>
        <TableHeader variant="first">
          {{ $ta('org-users-table').name }}
        </TableHeader>

        <TableHeader>
          {{ $ta('org-users-table').description }}
        </TableHeader>
      </TableRow>
    </template>

    <TableRow
      v-for="user in users"
      :key="user.id.value"
    >
      <TableCell variant="first">
        <span
          class="roleNav"
          @click="onTableRowClicked(user.id)"
        >{{ user.name }}</span>
      </TableCell>
      <TableCell class="text-gray-500">
        {{ user.roleIds }}
      </TableCell>
    </TableRow>
  </Table>
</template>


<script setup lang="ts">
import type { User, UserIdentity } from '@classroom/core/aggregates'
import { useUsersService } from '@classroom/org/composables'
import { CrudTableHeader, Table, TableCell, TableHeader, TableRow } from '@classroom/shared/components'
import { onMounted, shallowRef } from 'vue'
import { useRouter } from 'vue-router'


/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

const usersService = useUsersService()
const router = useRouter()


/* -------------------------------------------------------------------------- */
/*                                    State                                   */
/* -------------------------------------------------------------------------- */

const users = shallowRef<readonly User[]>([])


/* -------------------------------------------------------------------------- */
/*                                    Hooks                                   */
/* -------------------------------------------------------------------------- */

onMounted(onEnter)


/* -------------------------------------------------------------------------- */
/*                                  Handlers                                  */
/* -------------------------------------------------------------------------- */

async function onEnter() {
  await fetchData()
}

function onTableRowClicked(
  userId: UserIdentity
) {
  router.push({ name: 'org-users-edit', params: { id: userId.value } })
}

function onCreateButtonClicked() {
  router.push({
    name: 'org-users-edit',
    params: { id: 'new' }
  })
}

/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

async function fetchData() {
  users.value = await usersService.getTeamMembers()
}
</script>


<style scoped>
.CrudTable {
  margin-top: 2rem;
}

.roleNav {
  cursor: pointer;
}
</style>
