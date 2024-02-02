<template>
  <h1 class="text-lg">
    {{ title }}
  </h1>
  <p class="color-text-500">
    {{ description }}
  </p>
  <slot />

  <CrudFormActionButtons
    @save="onSaveButtonClicked"
    @cancel="onCancelButtonClicked"
    @delete="onDeleteButtonClicked"
  />
</template>


<script setup lang="ts">
import { CrudFormActionButtons } from '@classroom/shared/components'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

defineProps<{
  title: string,
  description: string
}>()

const emit = defineEmits<{
  save: []
  cancel: []
  delete: []
}>()

/* -------------------------------------------------------------------------- */
/*                                  Handlers                                  */
/* -------------------------------------------------------------------------- */

function onDeleteButtonClicked() {
  emit('delete')
}

function onCancelButtonClicked() {
  emit('cancel')
}

function onSaveButtonClicked() {
  emit('save')
}
</script>
