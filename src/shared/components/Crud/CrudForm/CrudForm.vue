<template>
  <h1 class="text-lg">
    {{ title }}
  </h1>
  <p class="color-text-500">
    {{ description }}
  </p>
  <slot />

  <CrudFormActionButtons
    :buttons-text="actionButtonsText"
    @save="onSaveButtonClicked"
    @cancel="onCancelButtonClicked"
    @delete="onDeleteButtonClicked"
  />
</template>


<script setup lang="ts">
import { CrudFormActionButtons, CrudFormActionButtonsText } from '@classroom/shared/components'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

defineProps<{
  title: string,
  description: string
  actionButtonsText?: CrudFormActionButtonsText
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
