<template>
  <ActionBoardHeader
    :title="$t('tasks')"
    :description="$t('get-started')"
  />

  <ActionBoardList>
    <ActionBoardItem
      :icon="KeyIcon"
      :title="$t('roles-title')"
      :description="$t('roles-descr')"
      background="bg1"
    />
    <ActionBoardItem
      :icon="UsersIcon"
      :title="$t('team-title')"
      :description="$t('team-descr')"
      background="bg2"
    />
    <ActionBoardItem
      :icon="AcademicCapIcon"
      :title="$t('course-title')"
      :description="$t('course-descr')"
      background="bg3"
    />
    <ActionBoardItem
      :icon="UserGroupIcon"
      :title="$t('class-title')"
      :description="$t('class-descr')"
      background="bg4"
    />
    <ActionBoardItem
      :icon="UsersIcon"
      :title="$t('students-title')"
      :description="$t('students-descr')"
      background="bg5"
    />
    <ActionBoardItem
      :icon="PencilSquareIcon"
      :title="$t('homework-title')"
      :description="$t('homework-descr')"
      background="bg6"
    />
  </ActionBoardList>

  <div class="mt-4 flex">
    <a
      href="#"
      class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
    >
      Or start from an empty project
      <span aria-hidden="true"> &rarr;</span>
    </a>
  </div>
</template>


<script setup lang="ts">
import { ActionBoardHeader, ActionBoardItem, ActionBoardList } from '@classroom/shared/components'
import { AcademicCapIcon, KeyIcon, PencilSquareIcon, UserGroupIcon, UsersIcon } from '@heroicons/vue/24/outline'
</script>


<style>
.bg1 {
  background-color: #F59E0B;
}

.bg2 {
  background-color: #10B981;
}

.bg3 {
  background-color: #3B82F6;
}

.bg4 {
  background-color: #6366F1;
}

.bg5 {
  background-color: #8B5CF6;
}

.bg6 {
  background-color: #EC4899;
}
</style>



<fluent locale="en">
tasks = Tasks
get-started = Get started by creating new courses, adding new lessons, or checking students' homework.

roles-title = Manage Roles
team-title = Invite a Team
course-title = Create a Course
class-title = Create a Class
students-title = Invite Students
homework-title = Check Homework

team-descr = Invite memers of your team to the Classroom platform.
roles-descr = Every member of your team has a specified permissions.
course-descr = Another to-do system you’ll try but eventually give up on.
class-descr = Stay on top of your deadlines, or don’t — it’s up to you.
students-descr = Great for mood boards and inspiration.
homework-descr = Track tasks in different stages of your project.
</fluent>

<fluent locale="ru">
tasks = Задачи
get-started = Начните с создания новых курсов, добавления уроков или проверки домашних заданий учащихся.

roles-title = Управление ролями
team-title = Пригласить команду
course-title = Создать курс
class-title = Создать класс
students-title = Пригласить студентов
homework-title = Проверить домашнее задание

team-descr = Пригласите участников вашей команды на платформу Classroom.
roles-descr = Каждый участник вашей команды имеет определенные разрешения.
course-descr = Еще одна система задач, которую вы попробуете, но в конечном итоге откажетесь от нее.
class-descr = Будьте в курсе своих сроков или не беспокойтесь — это зависит от вас.
students-descr = Отлично подходит для мудбордов и вдохновения.
homework-descr = Отслеживайте задачи на разных этапах вашего проекта.
</fluent>