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
    font-weight: 600;
    color: var(--color-text-900);
  }

  .description {
    color: var(--color-text-500);
  }
}
</style>
