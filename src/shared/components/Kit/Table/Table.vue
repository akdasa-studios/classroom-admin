<template>
  <table class="Table">
    <thead class="table-head">
      <slot name="head" />
    </thead>
    <tbody class="table-body">
      <slot />
    </tbody>
  </table>
</template>


<script setup lang="ts">
import { useTheme } from '@classroom/shared/composables'

const { panel } = useTheme()
</script>


<style scoped lang="scss">
.Table {
  --color-self:      v-bind(panel.hsl);
  --color-highlight: v-bind(panel.alpha(.75).hsl);
  --color-ring:      v-bind(panel.darken(.15).alpha(.5).hsl);
  --color-devide-header: v-bind(panel.darken(.05).hsl);
  --color-devide-rows:   v-bind(panel.darken(.025).hsl);

  width: 100%;
  overflow: hidden;
  box-shadow: 0 1px 3px  0   var(--color-ring),
              0 1px 2px -1px var(--color-ring),
              0 0   0    1px var(--color-ring);
  border-radius: 0.5rem;

  .table-head {
    background-color: var(--color-self);
    border-color: var(--color-devide-header);
    border-bottom-width: 1px;
    border-top-width: 0px;
  }

  .table-body > :deep(* + *) {
    border-color: var(--color-devide-rows);
    border-top-width: 1px;
    border-bottom-width: 0px;
  }

  :deep(.TableRow:hover) {
    background-color: var(--color-highlight);
  }
}
</style>