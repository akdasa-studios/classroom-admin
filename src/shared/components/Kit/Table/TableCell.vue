<template>
  <td
    :class="['TableCell', variant, align, header ? 'header' : 'cell']"
  >
    <slot />
  </td>
</template>

<script setup lang="ts">
interface Props {
  header?: boolean
  variant?: 'normal' | 'first' | undefined
  align: 'left' | 'center' | 'right'
}

withDefaults(defineProps<Props>(), {
  header: false,
  variant: 'normal',
  align: 'left'
})

</script>


<style scoped lang="scss">
.TableCell {
  padding-right: 0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  white-space: nowrap;

  &.header {
    font-weight: 600;
    color: #111827;
  }

  &.cell {
    font-weight: 500;
  }

  &.normal {
    padding-left: 0.75rem;
  }

  &.first {
    padding-left: 1.5rem;
  }


  &.left {
    text-align: left;
  }

  &.center {
    text-align: center;
  }

  &.right {
    text-align: right;
  }
}
</style>