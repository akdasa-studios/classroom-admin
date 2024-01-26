<template>
  <td
    scope="col"
    :class="['TableCell', variant]"
  >
    <slot />
  </td>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'normal' | 'first' | undefined
}

withDefaults(defineProps<Props>(), {
  variant: 'normal',
})

</script>


<style scoped lang="scss">
.TableCell {
  padding-right: 0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  white-space: nowrap;
  text-align: left;
  // color: #111827;

  &.normal {
    padding-left: 0.75rem;
  }

  &.first {
    padding-left: 1.5rem;
  }
}
</style>