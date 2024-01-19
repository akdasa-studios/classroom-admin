<template>
  <div class="Test">
    <h2 class="text-base font-semibold leading-6 text-gray-900">
      Projects
    </h2>
    <p class="mt-1 text-sm text-gray-500">
      You haven’t created a project yet. Get started by selecting a template or start from an empty project.
    </p>
    <ul
      role="list"
      class="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 lg:grid-cols-2"
    >
      <li
        v-for="(item, itemIdx) in items"
        :key="itemIdx"
        class="flow-root"
      >
        <ActionBoardItem
          :title="item.title"
          :icon="item.icon"
          :description="item.description"
          :background="item.background"
        />



        <!-- <div class="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
          <div :class="[item.background, 'flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg']">
            <component
              :is="item.icon"
              class="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-900">
              <a
                href="#"
                class="focus:outline-none"
              >
                <span
                  class="absolute inset-0"
                  aria-hidden="true"
                />
                <span>{{ item.title }}</span>
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              {{ item.description }}
            </p>
          </div>
        </div> -->
      </li>
    </ul>
    <div class="mt-4 flex">
      <a
        href="#"
        class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
      >
        Or start from an empty project
        <span aria-hidden="true"> &rarr;</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  KeyIcon,
  AcademicCapIcon,
  UserGroupIcon,
  UsersIcon,
  PencilSquareIcon
} from '@heroicons/vue/24/outline'
import ActionBoardItem from '@/shared/components/ActionBoard/ActionBoardItem.vue'

const items = [
  {
    title: 'Manage Roles',
    description: 'Every member of your team has a specified permissions.',
    icon: KeyIcon,
    background: 'bg-purple-500',
  },
  {
    title: 'Invite a Team',
    description: 'Invite memers of your team to the Classroom platform.',
    icon: UsersIcon,
    background: 'bg-indigo-500',
  },
  {
    title: 'Create a Course',
    description: 'Another to-do system you’ll try but eventually give up on.',
    icon: AcademicCapIcon,
    background: 'bg-pink-500',
  },
  {
    title: 'Create a Class',
    description: 'Stay on top of your deadlines, or don’t — it’s up to you.',
    icon: UserGroupIcon,
    background: 'bg-yellow-500',
  },
  {
    title: 'Invite Students',
    description: 'Great for mood boards and inspiration.',
    icon: UsersIcon,
    background: 'bg-green-500',
  },
  {
    title: 'Check Homework',
    description: 'Track tasks in different stages of your project.',
    icon: PencilSquareIcon,
    background: 'bg-blue-500',
  },
]
</script>


<style scoped>
.Test {
  /* padding: 4rem; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* background-color: red; */
  /* max-width: 100px; */
}
</style>