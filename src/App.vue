<template>
  <MainBlockLayout v-if="route.meta.layout === 'plain'">
    <RouterView />
  </MainBlockLayout>

  <SidebarAndMainBlockLayout v-else>
    <template #sidebar>
      <TheSidebar />
    </template>

    <!-- <TheBreadcrumbs /> -->
    <RouterView />
  </SidebarAndMainBlockLayout>
</template>


<script setup lang="ts">
import { TheSidebar } from '@classroom/shared/containers'
import { SidebarAndMainBlockLayout, MainBlockLayout } from '@classroom/shared/layouts'
import { RouterView, useRoute } from 'vue-router'
import { useTheme } from './shared/composables'

/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

const { text, primary } = useTheme()
const route = useRoute()

setTheme('--color-primary', primary.hsl)
setTheme('--color-text-500', text.desaturate(.8).hsl)
setTheme('--color-text-900', text.darken(.8).hsl)

/* -------------------------------------------------------------------------- */
/*                                   Helpers                                  */
/* -------------------------------------------------------------------------- */

function setTheme(name: string, value: string) {
  document.documentElement.style.setProperty(name, value)
}
</script>


<style>
html {
  --form-margin: 1rem;
  --form-margin-label: 0.25rem;

  color: var(--color-text-900);

  .color-text-500 { color: var(--color-text-500); }
  .text-sm { font-size: 0.875rem; }
  .text-lg { font-weight: 600; font-size: 1.275rem; }
}
</style>
