<template>
  <table class="min-w-full divide-y divide-gray-300">
    <thead>
      <slot name="head" />
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white">
      <slot />
    </tbody>
  </table>
</template>



<style scoped>
.Table {
  border-top-width: 1px;
  border-color: #D1D5DB;
  min-width: 100%;
}
</style>