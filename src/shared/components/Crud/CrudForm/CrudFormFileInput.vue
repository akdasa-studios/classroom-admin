<template>
  <div class="CrudFormFileInput">
    <div class="label">
      {{ label }}
    </div>
    <div class="input-section">
      <div 
        ref="dropZoneRef"
        class="Input" 
        :class="{'active': isOverDropZone}" 
      >
        {{ text || "Drop file here" }}
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useDropZone } from '@vueuse/core'

// --- Interface ---------------------------------------------------------------
defineProps<{
  label: string
  text: string
}>()

const modelValue = defineModel<string>()

// --- State -------------------------------------------------------------------
const dropZoneRef = ref<HTMLDivElement>()
const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop //, dataTypes: ['image/jpeg']
})

async function onDrop(files: File[] | null) {
  if (!files) { return }
  console.log(files)
  const formData = new FormData()
  formData.append('file', files[0], files[0].name)

  const response = await fetch('http://localhost:3000/media', {
    method: 'POST',
    // headers: {
    //   "Content-Type": "You will perhaps need to define a content-type here"
    // },
    body: formData
  })
  const data = await response.json()
  if (data.path) { modelValue.value = data.path }
  console.log(data)
}
</script>


<style scoped>
.CrudFormFileInput {
  margin-top: var(--form-margin);
  margin-bottom: var(--form-margin);
}

.label {
  margin-bottom: var(--form-margin-label);
}

.Input {
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 0.375rem;
  border-width: 1px;
  width: 100%;
  height: 15rem;
  line-height: 1.25rem;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
}

.active {
  background-color: lightgreen;
}
</style>
