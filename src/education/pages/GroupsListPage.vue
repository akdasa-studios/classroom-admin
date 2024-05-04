<template>
  <CrudTableHeader
    :title="$t('groups-crud-title')"
    :description="$t('groups-crud-description')"
    :create-button-title="$t('create')"
    @create-button-click="router.go('education-groups-edit', { id: 'new' })"
  />

  <GroupsTable 
    :items="groups"
    :i18n="{
      headers: {
        name: $t('groups-title'),
        description: $t('groups-description'),
      }
    }"
    class="GroupsTable"
    @click="r => router.go('education-groups-edit', { id: r.id })"
  />
</template>


<script setup lang="ts">
import { useAsyncState } from '@vueuse/core'
import { CrudTableHeader } from '@classroom/shared/components'
import { useAppRouter } from '@classroom/shared/composables'
import { useUsersService } from '@classroom/org/composables'
import { useGroupsService, useCoursesService } from '@classroom/education/composables'
import { type GroupsTableItem, GroupsTable } from '@classroom/education/components/groups'

// --- Dependencies ------------------------------------------------------------
const router = useAppRouter()
const groupsService = useGroupsService()
const usersService = useUsersService()
const coursesService = useCoursesService()

// --- State -------------------------------------------------------------------
const { state: groups } = useAsyncState(fetchData, [])

// --- Helpers -----------------------------------------------------------------
async function fetchData(): Promise<GroupsTableItem[]> {
  const groupsResponse = await groupsService.getAll()
  const users = await Promise.all(groupsResponse.items.map(x => usersService.getOne(x.leaderId)))
  const courses = await Promise.all(groupsResponse.items.map(x => coursesService.getOne(x.courseId)))

  return groupsResponse.items.map(group => ({
    id: group.id,
    name: group.name,
    description: group.description,
    leaderName: users.find(x => x.id === group.leaderId)?.name || "",
    courseName: courses.find(x => x.id === group.courseId)?.title || "",
  }))
}
</script>


<style scoped>
.GroupsTable { 
  margin-top: 2em;
}
</style>

