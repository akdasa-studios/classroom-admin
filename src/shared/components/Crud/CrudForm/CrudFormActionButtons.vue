<template>
  <div class="py-4 my-4 flex items-center justify-end gap-x-6 border-t border-gray-900/10">
    <Button
      variant="destructive"
      @click="onDeleteButtonClicked"
    >
      {{ $t('crud-delete') }}
    </Button>
    <div class="grow" />
    <Button
      variant="ghost"
      @click="onCancelButtonClicked"
    >
      {{ $t('crud-cancel') }}
    </Button>
    <Button
      @click="onSaveButtonClicked"
    >
      {{ $t('crud-save') }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@classroom/shared/components'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

const emit = defineEmits<{
  save: [],
  cancel: [],
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
