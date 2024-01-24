<template>
  <div class="mt-8">
    <div>
      <label class="label">
        {{ label }}
      </label>
      <div class="mt-2">
        <Input />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { Input } from '@/shared/components'

defineProps<{
  label: string
}>()
</script>


<style scoped>
.label {
  display: block;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #111827;
}
</style>