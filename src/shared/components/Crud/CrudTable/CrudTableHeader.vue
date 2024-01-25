<template>
  <div class="CrudTableHeader">
    <div class="header-section">
      <h1 class="title">
        {{ title }}
      </h1>
      <p class="description">
        {{ description }}
      </p>
    </div>

    <Button>
      {{ createButtonTitle }}
    </Button>
  </div>
</template>


<script setup lang="ts">
import { Button } from '@/shared/components'

defineProps<{
  title: string,
  description: string,
  createButtonTitle: string
}>()
</script>


<style scoped>
.CrudTableHeader {
  display: flex;
  align-items: center;
}

.header-section {
  flex: 1 1 auto;
}

.title {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: #111827; /* text-gray-900 */
}

.description {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #374151; /*  text-gray-700 */
}
</style>