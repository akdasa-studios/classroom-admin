<template>
  <div
    role="list"
    class="ActionBoardList"
  >
    <slot />
  </div>
</template>


<style scoped>
.ActionBoardList {
  display: grid;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-top: 1.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #E5E7EB;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>