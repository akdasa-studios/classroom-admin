<template>
  <div class="py-4 my-4 flex items-center justify-end gap-x-6 border-t border-gray-900/10">
    <Button
      variant="destructive"
    >
      {{ $t('crud-delete') }}
    </Button>
    <div class="grow" />
    <Button variant="ghost">
      {{ $t('crud-cancel') }}
    </Button>
    <Button>
      {{ $t('crud-save') }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/shared/components'
</script>
