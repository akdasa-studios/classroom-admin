<template>
  <div class="Sidebar">
    <slot name="sidebar" />
  </div>

  <main
    class="Main"
    :class="route.meta?.layout || ''"
  >
    <slot />
  </main>
</template>


<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
.Sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  width: 18rem;
}

.Main {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 20em;
  padding-right: 2rem;
  height: 100%;
}

.center {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-left: 4rem;
  margin-right: 4rem;
}
</style>
