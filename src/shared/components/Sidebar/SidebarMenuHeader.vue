<template>
  <div class="SidebarMenuHeader">
    <slot />
  </div>
</template>


<script setup lang="ts">
import { useTheme } from '@classroom/shared/composables'

/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

const { panel } = useTheme()
</script>


<style scoped>
.SidebarMenuHeader {
  --color: v-bind(panel.darken(.7).desaturate(.7).hsl);

  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: var(--color);
}
</style>
