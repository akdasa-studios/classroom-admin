<template>
  <SidebarAndMainBlockLayout>
    <template #sidebar>
      <Sidebar
        company-name="Best School"
        compnay-logo-url="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        profile-name="Test User"
        profile-image-url="https://avatar.iran.liara.run/public/2"
      />
    </template>

    <RouterView />
  </SidebarAndMainBlockLayout>
</template>


<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Sidebar } from '@/shared/components'
import { SidebarAndMainBlockLayout } from '@/shared/layouts'
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
</script>