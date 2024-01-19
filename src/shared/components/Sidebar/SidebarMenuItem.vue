<template>
  <a
    :href="'item.href'"
    :class="['SidebarMenuItem', variant]"
  >
    <component
      :is="icon"
      v-if="icon"
      :class="['SidebarMenuItemIcon', variant]"
      aria-hidden="true"
    />
    {{ title }}
  </a>
</template>


<script setup lang="ts">
import type { FunctionalComponent } from 'vue'

interface Props {
  title: string,
  variant?: "inactive" | "active" | undefined
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
    color: #374151;

    &:hover {
      color: #4F46E5;
      background-color: #F9FAFB;
    }
  }

  &.active {
    color: #4F46E5;
    background-color: #F9FAFB;
  }
}

.SidebarMenuItemIcon {
  width: 1.5rem;
  height: 1.5rem;

  &.inactive {
    color: #9CA3AF;
  }

  &.active {
    color: #4F46E5;
  }
}

.SidebarMenuItem:hover .SidebarMenuItemIcon.inactive {
  color: #4F46E5;
}
</style>
