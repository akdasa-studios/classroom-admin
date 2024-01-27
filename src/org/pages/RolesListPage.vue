<template>
  <CrudTableHeader
    :title="$t('org-roles-crud')"
    :description="$ta('org-roles-crud').header"
    :create-button-title="$ta('org-roles-crud').create"
    @create-button-click="onCreateButtonClicked"
  />

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
      v-for="role in roles"
      :key="role.id.value"
    >
      <TableCell variant="first">
        <span
          class="roleNav"
          @click="onTableRowClicked(role.id)"
        >{{ role.name }}</span>
      </TableCell>
      <TableCell class="text-gray-500">
        {{ role.description }}
      </TableCell>
    </TableRow>
  </Table>
</template>


<script setup lang="ts">
import type { Role, RoleIdentity } from '@classroom/core/aggregates'
import { useRolesService } from '@classroom/org/composables'
import { CrudTableHeader, Table, TableCell, TableRow } from '@classroom/shared/components'
import { onMounted, shallowRef } from 'vue'
import { useRouter } from 'vue-router'


/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

const rolesService = useRolesService()
const router = useRouter()


/* -------------------------------------------------------------------------- */
/*                                    State                                   */
/* -------------------------------------------------------------------------- */

const roles = shallowRef<readonly Role[]>([])


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
  roleId: RoleIdentity
) {
  router.push({ name: 'org-roles-edit', params: { id: roleId.value } })
}

function onCreateButtonClicked() {
  router.push({
    name: 'org-roles-edit',
    params: { id: 'new' }
  })
}

/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

async function fetchData() {
  roles.value = await rolesService.getAllRoles()
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