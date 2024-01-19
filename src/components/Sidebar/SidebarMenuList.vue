<template>
  <div>
    <SidebarMenuHeader v-if="title">
      {{ title }}
    </SidebarMenuHeader>
    <div
      class="SidebarMenuList"
      role="list"
    >
      <slot />
    </div>
  </div>
</template>


<script setup lang="ts">
import SidebarMenuHeader from './SidebarMenuHeader.vue'

defineProps<{
  title?: string
}>()
</script>


<style scoped>
.SidebarMenuList {
  display: flex;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  flex-direction: column;
  row-gap: 0.25rem;
}
</style>