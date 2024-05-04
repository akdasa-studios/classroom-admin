<template>
  <div class="CrudFormDatePicker">
    <div class="label">
      {{ label }}
    </div>
    <div class="input-section">
      <Input
        v-model="modelValue"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
import { Input } from '@classroom/shared/components'

// --- Interface ---------------------------------------------------------------
defineProps<{
  label: string
}>()

const modelValue = defineModel<string>('')
</script>


<style scoped>
.CrudFormDatePicker {
  margin-top: var(--form-margin);
  margin-bottom: var(--form-margin);
}

.label {
  margin-bottom: var(--form-margin-label);
}
</style>

