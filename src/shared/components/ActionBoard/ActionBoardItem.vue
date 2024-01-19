<template>
  <a
    href="#"
    class="ActionBoardItem"
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
        <a href="#">
          <span>{{ title }}</span>
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </h3>
      <p class="description">
        {{ description }}
      </p>
    </div>
  </a>
</template>


<script setup lang="ts">
import type { FunctionalComponent } from 'vue';

defineProps<{
  title: string,
  description: string,
  icon: FunctionalComponent
  background: string
}>()
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

  &:hover {
    background-color: rgb(229 231 235);
  }
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
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #111827;
}

.description {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #6B7280;
}
</style>