<template>
  <span :class="['EnrollmentStatusBadge', variant]">
    <slot />
  </span>
</template>


<script setup lang="ts">
import { useTheme } from '@classroom/shared/composables'

// --- Interface ---------------------------------------------------------------
defineProps<{
  variant: 'pending' | 'approved' | 'declined' | 'graduated'
}>()


// --- Dependencies ------------------------------------------------------------
const { primary, success, danger } = useTheme()
</script>


<style scoped lang="scss">
.EnrollmentStatusBadge {
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  border: 1px solid;
  border-radius: 0.375rem;

  &.pending {
    --color-text:   v-bind(primary.lighten(.2).hsl);
    --color-self:   v-bind(primary.lighten(.9).hsl);
    --color-border: v-bind(primary.lighten(.7).hsl);

    color:            var(--color-text);
    border-color:     var(--color-border);
    background-color: var(--color-self);
  }

  &.approved {
    --color-text:   v-bind(success.lighten(.2).hsl);
    --color-self:   v-bind(success.lighten(.9).hsl);
    --color-border: v-bind(success.lighten(.7).hsl);

    color:            var(--color-text);
    border-color:     var(--color-border);
    background-color: var(--color-self);
  }

  &.graduated {
    --color-text:   v-bind(success.lighten(.2).hsl);
    --color-self:   v-bind(success.lighten(.9).hsl);
    --color-border: v-bind(success.lighten(.7).hsl);

    color:            var(--color-text);
    border-color:     var(--color-border);
    background-color: var(--color-self);
  }

  &.declined {
    --color-text:   v-bind(danger.lighten(.2).hsl);
    --color-self:   v-bind(danger.lighten(.9).hsl);
    --color-border: v-bind(danger.lighten(.7).hsl);

    color:            var(--color-text);
    border-color:     var(--color-border);
    background-color: var(--color-self);
  }
}
</style>
