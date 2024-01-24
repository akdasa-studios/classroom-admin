<template>
  <div
    class="mt-6 space-y-6 CrudFormCheckbox"
    @click="modelValue = !modelValue"
  >
    <div class="relative flex gap-x-3">
      <div class="flex h-6 items-center">
        <input
          v-model="modelValue"
          type="checkbox"
          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        >
      </div>
      <div class="text-sm leading-6">
        <div
          class="font-medium text-gray-900"
        >
          {{ title }}
        </div>
        <p class="text-gray-500">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  title: string,
  description: string
}>()

const modelValue = defineModel<boolean>()
</script>


<style scoped>
.CrudFormCheckbox {
  cursor: pointer;
}
</style>