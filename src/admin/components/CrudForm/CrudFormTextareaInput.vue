<template>
  <div class="col-span-full mt-8">
    <label
      for="about"
      class="block text-sm font-medium leading-6 text-gray-900"
    >About</label>
    <div class="mt-2">
      <Textarea />
    </div>
    <p class="mt-3 text-sm leading-6 text-gray-600">
      Write a few sentences about yourself.
    </p>
  </div>
</template>


<script setup lang="ts">
import { Textarea } from '@/shared/components'

defineProps<{
  label: string
}>()
</script>