<template>
  <div class="Table">
    <table class="min-w-full divide-y divide-gray-300 bg-gray-50">
      <thead>
        <slot name="head" />
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <slot />
      </tbody>
    </table>
  </div>
</template>


<style scoped lang="scss">
.Table {
  overflow: hidden;
  box-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  --ring-color: #000000;
  --ring-opacity: 0.05;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.25rem;
}
</style>