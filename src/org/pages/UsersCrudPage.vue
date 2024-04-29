<template>
  <UserCrudForm
    v-model="user"
    :roles="roles"
    :text-header="{
      title:       $t('org-users-crud'),
      description: $ta('org-users-crud').header,
    }"
    :text-fields="{
      name:       $ta('org-users-crud').name,
      email:      $ta('org-users-crud').email,
      department: $ta('org-users-crud').department,
      title:      $ta('org-users-crud').title,
      roles:      $ta('org-users-crud').roles,
    }"
    @save="onSave"
  />
</template>


<script setup lang="ts">
import { useFluent } from 'fluent-vue'
import { useAsyncState } from '@vueuse/core'
import { useAppRouter  } from '@classroom/shared/composables'
import { pick } from '@classroom/shared/utils'
import { useRolesService, useUsersService } from '@classroom/org/composables'
import { UserCrudForm, EmptyUser, type User, type Role } from '@classroom/org/components/Users/UsersCrudForm'

// --- Interface ---------------------------------------------------------------
const props = defineProps<{
  userId: string | undefined
}>()

// --- Dependencies ------------------------------------------------------------
const fluent = useFluent()
const router = useAppRouter()
const usersService = useUsersService()
const rolesService = useRolesService()

// --- State -------------------------------------------------------------------
const { state: user } = useAsyncState(
  async () => props.userId ? await fetchUser(props.userId) : EmptyUser,
  EmptyUser, { shallow: false }
)
const { state: roles } = useAsyncState(fetchRoles, [])

// --- Handlers ----------------------------------------------------------------
async function onSave() {
  // TODO: Make fields picker code shorter.
  //       User predifined list of keys
  await (!props.userId 
    ? usersService.create(pick(user.value, 'name', 'email', 'title', 'department', 'avatarUrl', 'roleIds'))
    : usersService.update(props.userId, user.value))
  router.replace('org-users')
}

// --- Helpers -----------------------------------------------------------------
async function fetchUser(userId: string): Promise<User> {
  const userResponse = await usersService.getOne(userId)
  return { ...userResponse }
}

async function fetchRoles(): Promise<Role[]> {
  return (await rolesService.getAll()).items.map(role => ({
    id: role.id,
    name: role.name,
    description: role.description
  }))
}
</script>
