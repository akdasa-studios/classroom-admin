<template>
  <div class="CrudTableHeader">
    <div class="description">
      <h1 class="text-lg">
        {{ title }}
      </h1>
      <p class="color-text-500">
        {{ description }}
      </p>
    </div>

    <Button 
      v-if="createButtonTitle"
      @click="emit('createButtonClick')"
    >
      {{ createButtonTitle }}
    </Button>
  </div>
</template>


<script setup lang="ts">
import { Button } from '@classroom/shared/components'

defineProps<{
  title: string,
  description: string,
  createButtonTitle?: string
}>()

const emit = defineEmits<{
  createButtonClick: []
}>()
</script>


<style scoped>
.CrudTableHeader {
  display: flex;
  align-items: center;
  column-gap: 2rem;
}

.description {
  flex-grow: 1;
}
</style>
