<template>
  <RoleCrudForm
    :name="name"
    :description="''"
    :permissions="[]"
  />
</template>


<script setup lang="ts">
import { RoleCrudForm } from '@/org/containers'
import { ref } from 'vue'

const name = ref("123")

// const role = ref({
//   name: "test",
//   description: "Description",
//   permissions: []
// })
</script>
