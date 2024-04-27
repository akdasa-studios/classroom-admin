<template>
  <UserCrudForm
    v-model="state"
    :permission-groups="getPermissions()"
    @save="onSave"
  />
</template>


<script setup lang="ts">
import { useFluent } from 'fluent-vue'
import { useAsyncState } from '@vueuse/core'
import { useAppRouter  } from '@classroom/shared/composables'
import { PermissionGroups, Permissions } from '@classroom/shared/models'
import { pick } from '@classroom/shared/utils'
import { useUsersService } from '@classroom/org/composables'
import { UserCrudForm, EmptyUser, type User } from '@classroom/org/components'

// --- Interface ---------------------------------------------------------------
const props = defineProps<{
  userId: string | undefined
}>()

// --- Dependencies ------------------------------------------------------------
const fluent = useFluent()
const router = useAppRouter()
const usersService = useUsersService()

// --- State -------------------------------------------------------------------
const { state } = useAsyncState(
  async () => props.userId ? await fetchData(props.userId) : EmptyUser,
  EmptyUser, { shallow: false }
)

// --- Handlers ----------------------------------------------------------------
async function onSave() {
  // TODO: Make fields picker code shorter.
  //       User predifined list of keys
  await (!props.userId 
    ? usersService.create(pick(state.value, 'name', 'email', 'title', 'department', 'avatarUrl'))
    : usersService.update(props.userId, state.value))
  router.replace('org-users')
}

// --- Helpers -----------------------------------------------------------------
async function fetchData(userId: string): Promise<User> {
  const userResponse = await usersService.getOne(userId)
  return { ...userResponse }
}

function getPermissions() {
  return PermissionGroups.map(groupId => ({
    id: groupId,
    name: fluent.$t(`permission-${groupId}`),
    description: fluent.$ta(`permission-${groupId}`).description,
    permissions: Permissions.filter(p => p.startsWith(groupId)).map(p => ({
      id: p,
      name: fluent.$t(`permission-${p}`),
      description:  fluent.$ta(`permission-${p}`).description
    }))
  }))
}
</script>
