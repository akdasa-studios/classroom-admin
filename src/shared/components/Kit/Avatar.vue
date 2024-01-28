<template>
  <div class="Avatar">
    <img
      class="image"
      :src="url"
    >
  </div>
</template>

<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>


<style scoped>
.Avatar {
  width: 2.75rem;
  height: 2.75rem;
}

.image {
  border-radius: 9999px;
  width: 2.75rem;
  height: 2.75rem;
}
</style>