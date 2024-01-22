<template>
  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
    <table class="min-w-full divide-y divide-gray-300">
      <thead class="bg-gray-50">
        <slot name="head" />
      </thead>
      <tbody class="divide-y divide-gray-200 bg-white">
        <slot />
      </tbody>
    </table>
  </div>
</template>



<style scoped>
.Table {
  border-top-width: 1px;
  border-color: #D1D5DB;
  min-width: 100%;
}
</style>