<template>
  <div>
    <h2 class="text-base font-semibold leading-6 text-gray-900">
      {{ title }}
    </h2>
    <p class="mt-1 text-sm text-gray-500">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  description: string
}>()
</script>


<style scoped>
/** TODO */
</style>
