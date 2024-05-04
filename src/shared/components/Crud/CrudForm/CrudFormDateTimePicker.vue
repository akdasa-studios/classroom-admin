<template>
  <div class="CrudFormDatePicker">
    <div class="label">
      {{ label }}
    </div>
    <div class="input-section">
      <Input
        v-model="input"
        v-bind="$attrs"
        @blur="onBlur"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@classroom/shared/components'
import { ru } from 'chrono-node'

// --- Interface ---------------------------------------------------------------
defineProps<{
  label: string
}>()

// --- State -------------------------------------------------------------------
const value = defineModel<Date>({ default: new Date(), required: true })
const input = ref<string>(dateToString(new Date(value.value)))

// --- Handlers ----------------------------------------------------------------
function onBlur() {
  const date = ru.parseDate(input.value)
  input.value = dateToString(date)
  value.value = date
}

// --- Helpers -----------------------------------------------------------------
function dateToString(value: Date) {
  return value.toLocaleString('ru-RU', { 
    month: 'long', day: '2-digit',
    hour: '2-digit', minute: '2-digit'
  })
}
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

