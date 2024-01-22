<template>
  <Sidebar
    company-name="Best School"
    compnay-logo-url="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
    profile-name="Test User"
    profile-image-url="https://avatar.iran.liara.run/public/2"
  >
    <SidebarMenuList :title="$t('admin')">
      <SidebarMenuItem
        :link="{'name': 'admin-roles'}"
        :icon="KeyIcon"
        :title="$t('roles')"
        :variant="getItemVariant('admin-roles')"
      />

      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="UsersIcon"
        :title="$t('users')"
        :variant="getItemVariant('admin-users')"
      />

      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="Cog6ToothIcon"
        :title="$t('settings')"
        variant="inactive"
      />
    </SidebarMenuList>

    <SidebarMenuList :title="$t('school')">
      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="AcademicCapIcon"
        :title="$t('courses')"
        variant="inactive"
      />

      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="UserGroupIcon"
        :title="$t('classes')"
        variant="inactive"
      />

      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="UsersIcon"
        :title="$t('students')"
        variant="inactive"
      />

      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="PencilSquareIcon"
        :title="$t('homework')"
        variant="inactive"
      />
    </SidebarMenuList>

    <SidebarMenuList :title="$t('finances')">
      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="ChartBarIcon"
        :title="$t('financial-reports')"
        variant="inactive"
      />

      <SidebarMenuItem
        :link="{'name': 'admin-users'}"
        :icon="BanknotesIcon"
        :title="$t('payments')"
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
finances = Finances
financial-reports = Financial reports
payments = Payments
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
finances = Финансы
financial-reports = Финансовые отчеты
payments = Платежи
</fluent>
