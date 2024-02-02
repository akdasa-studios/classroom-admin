<template>
  <div>
    <h2 class="CrudFormSectionHeader">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="description"
    >
      {{ description }}
    </p>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  title: string,
  description?: string
}>()
</script>


<style scoped>
.CrudFormSectionHeader {
  font-weight: 600;
}

.description {
  color: var(--color-text-500);
}
</style>