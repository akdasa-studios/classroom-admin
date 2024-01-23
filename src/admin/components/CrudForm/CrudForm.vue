<template>
  <div class="space-y-4">
    <CrudFormSectionHeader
      :title="title"
      :description="description"
    />
    <slot />
  </div>

  <CrudFormActionButtons />
</template>


<script setup lang="ts">
import { CrudFormActionButtons, CrudFormSectionHeader } from '@/admin/components'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

defineProps<{
  title: string,
  description: string
}>()
</script>

