<template>
  <div class="SidebarCompanyBrand">
    <img
      class="company-logo"
      :src="companyLogoUrl"
      :alt="companyName"
    >
    <span class="company-name">{{ companyName }}</span>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  companyName: string
  companyLogoUrl: string
}>()
</script>


<style scoped>
.SidebarCompanyBrand {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4rem;
}

.company-name {
  margin: 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
}

.company-logo {
  width: auto;
  height: 2rem;
}
</style>
