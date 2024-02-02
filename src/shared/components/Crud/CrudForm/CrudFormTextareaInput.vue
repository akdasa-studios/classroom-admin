<template>
  <div class="CrudFormTextareaInput">
    <div class="label">
      {{ label }}
    </div>
    <div class="input-section">
      <Textarea
        v-model="modelValue"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
import { Textarea } from '@classroom/shared/components'

defineProps<{
  label: string,
}>()

const modelValue = defineModel<string>('')
</script>


<style scoped>
.CrudFormTextareaInput {
  margin-top: var(--form-margin);
  margin-bottom: var(--form-margin);
}

.label {
  margin-bottom: var(--form-margin-label);
}
</style>