<template>
  <div class="space-y-4">
    <CrudFormSectionHeader
      :title="title"
      :description="description"
    />
    <slot />
  </div>

  <CrudFormActionButtons
    @save="onSaveButtonClicked"
    @cancel="onCancelButtonClicked"
    @delete="onDeleteButtonClicked"
  />
</template>


<script setup lang="ts">
import { CrudFormActionButtons, CrudFormSectionHeader } from '@/shared/components'

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
