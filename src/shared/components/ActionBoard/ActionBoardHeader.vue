<template>
  <div class="ActionBoardHeader">
    <h2 class="header">
      {{ title }}
    </h2>
    <p class="description">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string,
  description: string
}>()
</script>


<style scoped lang="scss">
.ActionBoardHeader {
  .header {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: #111827;
  }

  .description {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #6B7280;
  }
}
</style>
