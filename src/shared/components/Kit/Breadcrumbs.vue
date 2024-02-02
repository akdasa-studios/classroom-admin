<template>
  <nav class="Breadcrumbs">
    <a
      href="#"
      class="item"
    >
      <HomeIcon
        class="icon"
        aria-hidden="true"
      />
    </a>

    <span
      v-for="(page, idx) in stack"
      :key="page.name"
      class="item"
    >
      <ChevronRightIcon class="icon" />
      <span
        class="link"
        @click="onItemClicked(page, stack.length - idx - 1)"
      >{{ page.name }}</span>
    </span>
  </nav>
</template>



<script setup lang="ts">
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'

/* -------------------------------------------------------------------------- */
/*                                  Interface                                 */
/* -------------------------------------------------------------------------- */

export interface Breadcrumb {
  name: string,
  to: object
}

defineProps<{
  stack: Breadcrumb[]
}>()

const emit = defineEmits<{
  click: [
    breadcrumb: Breadcrumb,
    indexFromTop: number
  ]
}>()

/* -------------------------------------------------------------------------- */
/*                                  Handlers                                  */
/* -------------------------------------------------------------------------- */

/**
 * Handles the click event when a breadcrumb item is clicked.
 * @param {Breadcrumb} breadcrumb - The clicked breadcrumb item.
 * @param {number} indexFromTop - The index of the clicked breadcrumb item from the top.
 * @emits click - Event emitted when a breadcrumb item is clicked.
 */
function onItemClicked(
  breadcrumb: Breadcrumb,
  indexFromTop: number,
) {
  emit('click', breadcrumb, indexFromTop)
}
</script>


<style scoped lang="scss">
.Breadcrumbs {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 2rem;
  margin-left: -.5rem;
  cursor: pointer;

  .item {
    display: flex;
    flex-direction: row;
    color: var(--color-text-500);
  }

  .icon {
    margin-left: .5rem;
    margin-right: .5rem;
    margin-top: 3px;
    width: 1.25rem;
    height: 1.25rem;
  }


  .link {
    color: var(--color-text-500);

    &:hover {
      color: var(--color-text-900);
    }
  }
}
</style>