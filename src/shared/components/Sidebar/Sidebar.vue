<template>
  <div class="Sidebar">
    <SidebarCompanyBrand
      :company-name="companyName"
      :company-logo-url="compnayLogoUrl"
    />

    <SidebarMenuList
      title="Admin"
    >
      <SidebarMenuItem
        v-for="item in admin"
        :key="item.name"
        :icon="item.icon"
        :variant="item.current ? 'active' : 'inactive'"
      >
        {{ item.name }}
      </SidebarMenuItem>
    </SidebarMenuList>

    <SidebarMenuList
      title="School"
    >
      <SidebarMenuItem
        v-for="item in navigation"
        :key="item.name"
        :icon="item.icon"
        :variant="item.current ? 'active' : 'inactive'"
      >
        {{ item.name }}
      </SidebarMenuItem>
    </SidebarMenuList>

    <SidebarFooter>
      <SidebarProfileMenuItem
        :profile-name="profileName"
        :profile-image-url="profileImageUrl"
      />
    </SidebarFooter>
  </div>
</template>


<script setup lang="ts">
import SidebarProfileMenuItem from './SidebarProfileMenuItem.vue'
import SidebarMenuItem from './SidebarMenuItem.vue';
import SidebarMenuList from './SidebarMenuList.vue';
import SidebarCompanyBrand from './SidebarCompanyBrand.vue'
import SidebarFooter from './SidebarFooter.vue'
import { AcademicCapIcon, UserGroupIcon, KeyIcon, UsersIcon, PencilSquareIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'


/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

defineProps<{
  companyName: string,
  compnayLogoUrl: string,
  profileName: string,
  profileImageUrl: string
}>()

const admin = [
  { name: 'Roles', href: '#', icon: KeyIcon, current: false },
  { name: 'Users', href: '#', icon: UsersIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: false },
]
const navigation = [
  { name: 'Courses', href: '#', icon: AcademicCapIcon, current: true },
  { name: 'Classes', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Students', href: '#', icon: UsersIcon, current: false },
  { name: 'Homework', href: '#', icon: PencilSquareIcon, current: false },
]
</script>


<style scoped>
.Sidebar {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  row-gap: 1.75rem;

  overflow-y: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-right-width: 1px;
  border-right-style: solid;
  border-color: #E5E7EB;
  background-color: #ffffff;
}
</style>