<template>
  <RoleCrudForm
    v-if="role"
    :role="role"
    @save="onSave"
  />
</template>


<script setup lang="ts">
import { UuidIdentity } from '@akd-studios/framework/domain'
import { Role, type RoleIdentity } from '@classroom/core/aggregates'
import { useRolesService } from '@classroom/org/composables'
import { RoleCrudForm, type RoleEditableFields } from '@classroom/org/containers'
import { onMounted, shallowRef } from 'vue'
import { useRouter } from 'vue-router'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

const props = defineProps<{
  roleId: RoleIdentity | undefined
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
  await rolesService.saveRole(role.value)

  router.replace({ name: 'org-roles' })
}


/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

async function fetchData() {
  role.value = props.roleId
    ? await rolesService.getRole(props.roleId)
    :  new Role(new UuidIdentity(), '', '', [])
}
</script>
