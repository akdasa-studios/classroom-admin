<template>
  <RoleCrudForm
    v-if="role"
    :name="role.name"
    :description="role.description"
    :permissions="role.permissions"
  />
</template>


<script setup lang="ts">
import { RoleCrudForm } from '@/org/containers'
import { useRolesService } from '@/org/composables'
import { useRouter } from 'vue-router';
import { onMounted, shallowRef } from 'vue';
import type { Role, RoleIdentity } from '@core/aggregates';

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

const props = defineProps<{
  roleId: RoleIdentity
}>()


/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

const rolesService = useRolesService()
const router = useRouter()


/* -------------------------------------------------------------------------- */
/*                                    State                                   */
/* -------------------------------------------------------------------------- */

const role = shallowRef<Role|undefined>(undefined)


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


/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

async function fetchData() {
  role.value = await rolesService.getRole(props.roleId)
}
</script>
