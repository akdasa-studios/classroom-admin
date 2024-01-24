<template>
  <div class="col-span-full mt-8">
    <label
      class="block text-sm font-medium leading-6 text-gray-900"
    >
      {{ label }}
    </label>

    <div class="mt-2">
      <Textarea
        v-model="modelValue"
        v-bind="$attrs"
      />
    </div>

    <p
      v-if="notes"
      class="mt-3 text-sm leading-6 text-gray-600"
    >
      Write a few sentences about yourself.
    </p>
  </div>
</template>


<script setup lang="ts">
import { Textarea } from '@/shared/components'

defineProps<{
  label: string,
  notes?: string
}>()

const modelValue = defineModel<string>("")
</script>


