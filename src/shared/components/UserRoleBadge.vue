<template>
  <span :class="['UserRoleBadge', variant]">
    <slot />
  </span>
</template>


<script setup lang="ts">
defineProps<{
  variant: 'invited' | 'active' | 'inactive'
}>()
</script>


<style scoped lang="scss">
@import '@classroom/assets/theme.scss';

.UserRoleBadge {
  display: inline-flex;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  align-items: center;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  border: 1px solid;
  margin:.5rem;

  &.active {
    color:            color($color-primary);
    border-color:     border-color($color-primary);
    background-color: bg-color($color-primary);
  }
}
</style>