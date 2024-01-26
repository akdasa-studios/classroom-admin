<template>
  <th
    scope="col"
    :class="['TableHeader', variant]"
  >
    <slot />
  </th>
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
.TableHeader {
  padding-right: 0.75rem;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  text-align: left;
  color: #111827;

  &.normal {
    padding-left: 0.75rem;
  }

  &.first {
    padding-left: 1.5rem;
  }
}
</style>