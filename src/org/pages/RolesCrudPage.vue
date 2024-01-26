<template>
  <RoleCrudForm
    v-if="role"
    :role="role"
    @save="onSave"
  />
</template>


<script setup lang="ts">
import { RoleCrudForm, type RoleEditableFields } from '@classroom/org/containers'
import { useRolesService } from '@classroom/org/composables'
import { useRouter } from 'vue-router'
import { onMounted, shallowRef } from 'vue'
import { Role, type RoleIdentity } from '@classroom/core/aggregates'
import { UuidIdentity } from '@akd-studios/framework/domain'

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

async function onSave(data: RoleEditableFields) {
  if (!role.value) { return }
  role.value.name = data.name
  role.value.description = data.description
  role.value.permissions = data.permissions
  rolesService.saveRole(role.value)

  router.replace({ name: 'org-roles' })
}


/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

async function fetchData() {
  role.value = await rolesService.getRole(props.roleId) || new Role(new UuidIdentity(), '', '', [])
}
</script>
