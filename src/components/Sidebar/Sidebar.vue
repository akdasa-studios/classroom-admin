<template>
  <div class="Sidebar">
    <SidebarCompanyBrand
      company-name="Best School"
      company-logo-url="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
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
        profile-name="Test User"
        profile-image-url="https://avatar.iran.liara.run/public/2"
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
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
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