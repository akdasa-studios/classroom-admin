<template>
  <Sidebar
    company-name="Best School"
    compnay-logo-url="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    profile-name="Test User"
    profile-image-url="https://avatar.iran.liara.run/public/2"
  >
    <SidebarMenuList :title="$t('sidebar-org')">
      <SidebarMenuItem
        :link="{'name': 'admin-roles'}"
        :icon="KeyIcon"
        :title="$t('sidebar-org-roles')"
        :variant="getItemVariant('admin-roles')"
      />

      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="UsersIcon"
        :title="$t('sidebar-org-users')"
        :variant="getItemVariant('admin-users')"
      />

      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="Cog6ToothIcon"
        :title="$t('sidebar-org-settings')"
        variant="inactive"
      />
    </SidebarMenuList>

    <SidebarMenuList :title="$t('sidebar-edu')">
      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="AcademicCapIcon"
        :title="$t('sidebar-edu-courses')"
        variant="inactive"
      />

      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="UserGroupIcon"
        :title="$t('sidebar-edu-classes')"
        variant="inactive"
      />

      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="UsersIcon"
        :title="$t('sidebar-edu-students')"
        variant="inactive"
      />

      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="PencilSquareIcon"
        :title="$t('sidebar-edu-homework')"
        variant="inactive"
      />
    </SidebarMenuList>

    <SidebarMenuList :title="$t('sidebar-fin')">
      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="ChartBarIcon"
        :title="$t('sidebar-fin-reports')"
        variant="inactive"
      />

      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="BanknotesIcon"
        :title="$t('sidebar-fin-payments')"
        variant="inactive"
      />
    </SidebarMenuList>
  </Sidebar>
</template>


<script setup lang="ts">
import { Sidebar, SidebarMenuList, SidebarMenuItem } from '@/shared/components'
import { AcademicCapIcon, UserGroupIcon, KeyIcon, UsersIcon, PencilSquareIcon, Cog6ToothIcon, BanknotesIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
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

function getItemVariant(linkName: string) : "active" | "inactive" | undefined {
  return routeName.value === linkName ? "active" : "inactive"
}
</script>
