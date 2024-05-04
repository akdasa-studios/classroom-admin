<template>
  <div class="CrudFormComboboxListItem">
    <slot />
  </div>
</template>


<script setup lang="ts">
</script>


<style scoped>
.CrudFormComboboxListItem {
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 0.375rem;
  width: 100%;
  cursor: pointer;
}

.CrudFormComboboxListItem:hover {
  /* background-color: var(--form-item-selected-background-color); */
  /* color: var(--form-item-selected-color); */
}
</style>
