<template>
  <div class="SidebarProfileMenuItem">
    <img
      class="avatar"
      :src="profileImageUrl"
    >
    <span>{{ profileName }}</span>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  profileName: string,
  profileImageUrl: string
}>()
</script>


<style scoped>
.SidebarProfileMenuItem {
  display: flex;
  padding: 0.75rem 1.5rem;
  column-gap: 1rem;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
}

.SidebarProfileMenuItem:hover {
  background-color: #F9FAFB;
}

.avatar {
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  background-color: #F9FAFB;
}
</style>
