<template>
  <GroupsCrudForm
    v-if="isGroupLoaded"
    v-model="group"
    :users-fetcher="fetchUsers"
    :courses-fetcher="fetchCourses"
    :i18n="i18n"
    @save="onSave"
  />
</template>


<script setup lang="ts">
import { useFluent } from 'fluent-vue'
import { useAsyncState } from '@vueuse/core'
import { useAppRouter  } from '@classroom/shared/composables'
import { useUsersService } from '@classroom/org/composables'
import { useGroupsService, useCoursesService } from '@classroom/education/composables'
import { GroupsCrudForm, type Group } from '@classroom/education/components/groups'

// --- Models ------------------------------------------------------------------
const EmptyGroup: Group = {
  name: "", description: "", startsAt: new Date(),
  leader: { id: "", name: "" }, course: { id: "", title: "" }
}

// --- Interface ---------------------------------------------------------------
const props = defineProps<{
  groupId: string | undefined
}>()

// --- Dependencies ------------------------------------------------------------
const fluent = useFluent()
const router = useAppRouter()
const groupsService = useGroupsService()
const usersService = useUsersService()
const coursesService = useCoursesService()

// --- State -------------------------------------------------------------------
const { state: group, isReady: isGroupLoaded } = useAsyncState(
  async () => props.groupId ? await fetchData(props.groupId) : { ...EmptyGroup },
  { ...EmptyGroup }, { shallow: false }
)

// --- Handlers ----------------------------------------------------------------
async function onSave() {
  const payload = {
    name: group.value.name,
    description: group.value.description,
    leaderId: group.value.leader.id,
    courseId: group.value.course.id,
    startsAt: group.value.startsAt.toISOString(),
  }
  await (!props.groupId 
    ? groupsService.create(payload)
    : groupsService.update(props.groupId, payload))
  router.replace('education-groups')
}

// --- Helpers -----------------------------------------------------------------
async function fetchData(groupId: string): Promise<Group> {
  const groupsResponse = await groupsService.getOne(groupId)
  const leaderResponse = await usersService.getOne(groupsResponse.leaderId)
  const courseResponse = await coursesService.getOne(groupsResponse.courseId)
  return { 
    ...groupsResponse,
    leader: { id: leaderResponse.id, name: leaderResponse.name },
    course: { id: courseResponse.id, title: courseResponse.title },
    startsAt: new Date(groupsResponse.startsAt)
  };
}

async function fetchUsers(query: string): Promise<Array<{ id: string, label: string }>> {
  return (await usersService.find(query)).items.map(x => ({ id: x.id, label: x.name }))
}

async function fetchCourses(query: string): Promise<Array<{ id: string, label: string }>> {
  return (await coursesService.find(query)).items.map(x => ({ id: x.id, label: x.title }))
}

// --- I18n --------------------------------------------------------------------
const i18n = {
  header: {
    title:       fluent.$t("groups-crud-title"),
    description: fluent.$t("groups-crud-description"),
  },
  fields: {
    title:       fluent.$t("groups-title"),
    description: fluent.$t("groups-description"),
    leader:      fluent.$t("groups-leader"),
    course:      fluent.$t("groups-course"),
    startsAt:    fluent.$t("groups-starts-at"),
  }
}
</script>
