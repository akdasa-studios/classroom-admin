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
import { useTheme } from '@classroom/shared/composables'
import type { FunctionalComponent } from 'vue'
import { RouterLink, type RouteLocationNamedRaw } from 'vue-router'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

const { panel } = useTheme()
</script>


<style scoped lang="scss">
.SidebarMenuItem {
  --color-active:    v-bind(panel.darken(.7).hsl);
  --color-inactive:  v-bind(panel.darken(.7).desaturate(.7).hsl);
  --color-bg-active: v-bind(panel.darken(.05).hsl);

  display: flex;
  padding: 0.5rem;
  column-gap: 0.75rem;
  border-radius: 0.375rem;
  align-items: center;
  // font-weight: 500;
  // line-height: 1.5rem;


  /* ------------------------------------------------------------------------ */
  /*                                  Variant                                 */
  /* ------------------------------------------------------------------------ */

  &.inactive {
    color: var(--color-inactive);
    &:hover {
      color: var(--color-active);
      background-color: var(--color-bg-active);
    }
  }

  &.active {
    color: var(--color-active);
    background-color: var(--color-bg-active);
  }


  /* ------------------------------------------------------------------------ */
  /*                                Child: Icon                               */
  /* ------------------------------------------------------------------------ */

  .SidebarMenuItemIcon {
    width: 1.25rem;
    height: 1.25rem;

    &.inactive {
      color: var(--color-inactive);
    }

    &.active {
      color: var(--color-active);
    }
  }

  &:hover .SidebarMenuItemIcon.inactive {
    color: var(--color-active);
  }
}
</style>
