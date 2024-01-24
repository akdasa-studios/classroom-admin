<template>
  <input
    v-model="modelValue"
    :class="['Input']"
  >
</template>


<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

defineProps<{
  class?: HTMLAttributes['class']
}>()

const modelValue = defineModel<string>()
</script>


<style scoped>
.Input {
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 0.375rem;
  border-width: 1px;
  width: 100%;
  height: 2.5rem;
  line-height: 1.25rem;
}
</style>


