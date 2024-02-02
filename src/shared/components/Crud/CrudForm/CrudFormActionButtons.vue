<template>
  <div class="CrudFormActionButtons">
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


<style>
.CrudFormActionButtons {
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  column-gap: 1.5rem;
  justify-content: flex-end;
  align-items: center;
  border-top-width: 1px;
}
</style>