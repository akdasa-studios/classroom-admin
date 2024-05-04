<template>
  <Sidebar
    company-name="Best School"
    compnay-logo-url="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    profile-name="Test User"
    profile-image-url="https://avatar.iran.liara.run/public/2"
  >
    <SidebarMenuList :title="$t('sidebar-org')">
      <SidebarMenuItem
        :link="{'name': 'org-roles'}"
        :icon="KeyIcon"
        :title="$t('sidebar-org-roles')"
        :variant="getItemVariant('org-roles')"
      />

      <SidebarMenuItem
        :link="{'name': 'org-users'}"
        :icon="UsersIcon"
        :title="$t('sidebar-org-users')"
        :variant="getItemVariant('org-users')"
      />

      <SidebarMenuItem
        :link="{'name': 'org-users'}"
        :icon="Cog6ToothIcon"
        :title="$t('sidebar-org-settings')"
        variant="inactive"
      />
    </SidebarMenuList>

    <SidebarMenuList :title="$t('sidebar-edu')">
      <SidebarMenuItem
        :link="{'name': 'education-courses'}"
        :icon="AcademicCapIcon"
        :title="$t('sidebar-edu-courses')"
        :variant="getItemVariant('education-courses')"
      />

      <SidebarMenuItem
        :link="{'name': 'education-groups'}"
        :icon="UserGroupIcon"
        :title="$t('sidebar-edu-classes')"
        :variant="getItemVariant('education-groups')"
      />

      <SidebarMenuItem
        :link="{'name': 'org-users'}"
        :icon="UsersIcon"
        :title="$t('sidebar-edu-students')"
        variant="inactive"
      />

      <SidebarMenuItem
        :link="{'name': 'org-users'}"
        :icon="PencilSquareIcon"
        :title="$t('sidebar-edu-homework')"
        variant="inactive"
      />
    </SidebarMenuList>

    <SidebarMenuList :title="$t('sidebar-fin')">
      <SidebarMenuItem
        :link="{'name': 'org-users'}"
        :icon="ChartBarIcon"
        :title="$t('sidebar-fin-reports')"
        variant="inactive"
      />

      <SidebarMenuItem
        :link="{'name': 'org-users'}"
        :icon="BanknotesIcon"
        :title="$t('sidebar-fin-payments')"
        variant="inactive"
      />
    </SidebarMenuList>
  </Sidebar>
</template>


<script setup lang="ts">
import { Sidebar, SidebarMenuItem, SidebarMenuList } from '@classroom/shared/components'
import { AcademicCapIcon, BanknotesIcon, ChartBarIcon, Cog6ToothIcon, KeyIcon, PencilSquareIcon, UserGroupIcon, UsersIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import { useRoute } from 'vue-router'


/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

const route = useRoute()


/* -------------------------------------------------------------------------- */
/*                                    State                                   */
/* -------------------------------------------------------------------------- */

const routeName = computed(() => route.name?.toString())


/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

function getItemVariant(linkName: string) : 'active' | 'inactive' | undefined {
  return routeName.value?.startsWith(linkName) ? 'active' : 'inactive'
}
</script>
