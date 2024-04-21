<template>
  <div
    class="CrudFormCheckbox"
    @click="onClicked"
  >
    <div class="checkbox-section">
      <div class="ttt">
        <input
          v-model="modelValue"
          type="checkbox"
          class="checkbox"
          :value="value"
        >
      </div>

      <div class="label-section">
        <div class="label">
          {{ title }}
        </div>
        <p class="description">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
// --- Interface ---------------------------------------------------------------
const props = defineProps<{
  title: string,
  description: string
  value?: string
}>()
const modelValue = defineModel<boolean|string[]>()

// --- Interface ---------------------------------------------------------------
function onClicked(value: boolean|string[]) {
  if (typeof value === 'boolean') {
    modelValue.value = !modelValue.value
  } else {
    if (modelValue.value.includes(props.value)) {
      modelValue.value = modelValue.value.filter(x => x !== props.value)
    } else {
      modelValue.value.push(props.value)
    }
  }
}
</script>


<style scoped lang="scss">
.CrudFormCheckbox {

  cursor: pointer;
  margin-top: var(--form-margin);
  margin-bottom: var(--form-margin);

  .label-section {
    line-height: 1.5rem;
  }

  .checkbox-section {
    display: flex;
    position: relative;
    column-gap: 0.75rem;
  }

  .ttt {
    display: flex;
    align-items: center;
    height: 1.5rem;
  }

  .checkbox {
    width: 1rem;
    height: 1rem;
    accent-color: var(--color-primary);
  }

  .label {
    font-weight: 500;
  }

  .description {
    color: var(--color-text-500);
  }
}
</style>
