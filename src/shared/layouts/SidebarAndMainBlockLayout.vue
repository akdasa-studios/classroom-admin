<template>
  <div class="Sidebar">
    <slot name="sidebar" />
  </div>

  <main class="Main">
    <slot />
  </main>
</template>


<style scoped>
.Sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  width: 18rem;
}

.Main {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 20em;
  padding-right: 2rem;
}
</style>
