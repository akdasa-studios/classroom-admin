<template>
  <RouterLink :to="link">
    <span
      :class="['SidebarMenuItem', variant]"
    >
      <component
        :is="icon"
        v-if="icon"
        :class="['SidebarMenuItemIcon', variant]"
        aria-hidden="true"
      />
      {{ title }}
    </span>
  </RouterLink>
</template>


<script setup lang="ts">
import type { FunctionalComponent } from 'vue'
import { RouterLink, type RouteLocationNamedRaw } from 'vue-router'

interface Props {
  link: RouteLocationNamedRaw,
  title: string,
  variant?: 'inactive' | 'active' | undefined
  icon?: FunctionalComponent
}

withDefaults(defineProps<Props>(), {
  variant: 'inactive',
  icon: undefined
})
</script>


<style scoped lang="scss">
.SidebarMenuItem {
  display: flex;
  padding: 0.5rem;
  column-gap: 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  line-height: 1.5rem;

  &.inactive {
    // color: #374151;
    color: hsl(var(--color-test), 15%);

    &:hover {
      // color: #4F46E5;
      // background-color: #E5E7EB;
      background-color: hsla(var(--color-test), 96%);
    }
  }

  &.active {
    color: hsl(var(--color-test), 20%);
    background-color: hsl(var(--color-test), 96%);
  }
}

.SidebarMenuItemIcon {
  width: 1.5rem;
  height: 1.5rem;

  &.inactive {
    // color: #9CA3AF;
    color: hsla(var(--color-test), 15%);
  }

  &.active {
    color: hsl(var(--color-test), 20%);
  }
}

.SidebarMenuItem:hover .SidebarMenuItemIcon.inactive {
  // color: #4F46E5;
}
</style>
