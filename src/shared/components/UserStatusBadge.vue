<template>
  <span :class="['UserStatusBadge', variant]">
    <slot />
  </span>
</template>


<script setup lang="ts">
import { useTheme } from '@classroom/shared/composables'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

defineProps<{
  variant: 'invited' | 'active' | 'inactive'
}>()


/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

const { primary, success, danger } = useTheme()
</script>


<style scoped lang="scss">
@import '@classroom/assets/theme.scss';


.UserStatusBadge {
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  border: 1px solid;
  border-radius: 0.375rem;

  &.invited {
    --color-text:   v-bind(primary.lighten(.2).hsl);
    --color-self:   v-bind(primary.lighten(.9).hsl);
    --color-border: v-bind(primary.lighten(.7).hsl);

    color:            var(--color-text);
    border-color:     var(--color-border);
    background-color: var(--color-self);
  }

  &.active {
    --color-text:   v-bind(success.lighten(.2).hsl);
    --color-self:   v-bind(success.lighten(.9).hsl);
    --color-border: v-bind(success.lighten(.7).hsl);

    color:            var(--color-text);
    border-color:     var(--color-border);
    background-color: var(--color-self);
  }

  &.inactive {
    --color-text:   v-bind(danger.lighten(.2).hsl);
    --color-self:   v-bind(danger.lighten(.9).hsl);
    --color-border: v-bind(danger.lighten(.7).hsl);

    color:            var(--color-text);
    border-color:     var(--color-border);
    background-color: var(--color-self);
  }
}
</style>