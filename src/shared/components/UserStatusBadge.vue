<template>
  <span :class="['UserStatusBadge', variant]">
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
    color:            cl($color-primary, $text-lightness);
    border-color:     cl($color-primary, $border-lightness);
    background-color: cl($color-primary, $bg-lightness);
  }

  &.active {
    color:            cl($color-success, $text-lightness);
    border-color:     cl($color-success, $border-lightness);
    background-color: cl($color-success, $bg-lightness);
  }

  &.inactive {
    color:            cl($color-danger, $text-lightness);
    border-color:     cl($color-danger, $border-lightness);
    background-color: cl($color-danger, $bg-lightness);
  }
}
</style>