<template>
  <SidebarAndMainBlockLayout>
    <template #sidebar>
      <TheSidebar />
    </template>

    <RouterView />
  </SidebarAndMainBlockLayout>
</template>


<script setup lang="ts">
import { RouterView } from 'vue-router'
import { TheSidebar } from '@/shared/containers'
import { SidebarAndMainBlockLayout } from '@/shared/layouts'
</script>

