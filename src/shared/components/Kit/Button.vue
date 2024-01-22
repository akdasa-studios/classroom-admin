<template>
  <component
    :is="as"
    :class="['Button', variant, size]"
  >
    <slot />
  </component>
</template>


<script setup lang="ts">

interface Props {
  variant?: "default"
  size?: "normal" | "small" | "large"
  as?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'normal',
  as: 'button',
})
</script>


<style scoped lang="scss">
.Button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;

  border-radius: 0.375rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;


  &.default {
    color: #ffffff;
    background-color: #4F46E5;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

    &:hover {
      background-color: #6366F1;
    }
  }


  &.normal {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  &.small {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: 0.375rem;
  }

  &.large {
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 0.375rem;
    height: 2.75rem;
  }
}
</style>