<template>
  <Sidebar
    company-name="Best School"
    compnay-logo-url="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    profile-name="Test User"
    profile-image-url="https://avatar.iran.liara.run/public/2"
  >
    <SidebarMenuList :title="$t('admin')">
      <SidebarMenuItem
        :icon="KeyIcon"
        :title="$t('roles')"
        variant="active"
      />

      <SidebarMenuItem
        :icon="UsersIcon"
        :title="$t('users')"
        variant="inactive"
      />

      <SidebarMenuItem
        :icon="Cog6ToothIcon"
        :title="$t('settings')"
        variant="inactive"
      />
    </SidebarMenuList>

    <SidebarMenuList :title="$t('school')">
      <SidebarMenuItem
        :icon="AcademicCapIcon"
        :title="$t('courses')"
        variant="inactive"
      />

      <SidebarMenuItem
        :icon="UserGroupIcon"
        :title="$t('classes')"
        variant="inactive"
      />

      <SidebarMenuItem
        :icon="UsersIcon"
        :title="$t('students')"
        variant="inactive"
      />

      <SidebarMenuItem
        :icon="PencilSquareIcon"
        :title="$t('homework')"
        variant="inactive"
      />
    </SidebarMenuList>
  </Sidebar>
</template>


<script setup lang="ts">
import { Sidebar, SidebarMenuList, SidebarMenuItem } from '@/shared/components'
import { AcademicCapIcon, UserGroupIcon, KeyIcon, UsersIcon, PencilSquareIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'
</script>


<fluent locale="en">
admin = Admin
school = School
roles = Roles
users = Users
settings = Settings
courses = Courses
classes = Classes
students = Students
homework = Homework
</fluent>

<fluent locale="ru">
admin = Администратор
school = Школа
roles = Роли
users = Пользователи
settings = Настройки
courses = Курсы
classes = Классы
students = Ученики
homework = Домашнее задание
</fluent>
