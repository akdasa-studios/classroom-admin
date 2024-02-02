<template>
  <div
    class="ActionBoardItem"
    @click="onItemClicked"
  >
    <div :class="[background, 'ActionBoardItemPlate']">
      <component
        :is="icon"
        class="icon"
        aria-hidden="true"
      />
    </div>

    <div>
      <h3 class="header">
        <div>
          <span>{{ title }}</span>
          <span aria-hidden="true"> &rarr;</span>
        </div>
      </h3>
      <p class="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>


<script setup lang="ts">
import type { FunctionalComponent } from 'vue'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

defineProps<{
  title: string,
  description: string,
  icon: FunctionalComponent
  background: string
}>()

const emit = defineEmits<{
  click: []
}>()

/* -------------------------------------------------------------------------- */
/*                                  Handlers                                  */
/* -------------------------------------------------------------------------- */

function onItemClicked() {
  emit('click')
}
</script>


<style scoped lang="scss">
.ActionBoardItem {
  display: flex;
  position: relative;
  padding: 0.5rem;
  margin: -0.5rem;
  gap: 1rem;
  align-items: center;
  border-radius: 0.75rem;
  cursor: pointer;

  // TODO
  // &:hover {
  //   background-color: rgb(229 231 235);
  // }
}

.ActionBoardItemPlate {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  width: 4rem;
  height: 4rem;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #ffffff;
}

.header {
  line-height: 1.25rem;
  font-weight: 500;
  color: var(--color-text-900);
}

.description {
  margin-top: 0.25rem;
  line-height: 1.25rem;
  color: var(--color-text-500);
}
</style>