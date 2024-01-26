<template>
  <SidebarAndMainBlockLayout>
    <template #sidebar>
      <TheSidebar />
    </template>

    <RouterView />
  </SidebarAndMainBlockLayout>
</template>


<script setup lang="ts">
import { TheSidebar } from '@classroom/shared/containers'
import { SidebarAndMainBlockLayout } from '@classroom/shared/layouts'
import { RouterView } from 'vue-router'
</script>

