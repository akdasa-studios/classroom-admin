<template>
  <div class="Table">
    <table class="tbl">
      <thead class="table-head">
        <slot name="head" />
      </thead>
      <tbody class="tbd">
        <slot />
      </tbody>
    </table>
  </div>
</template>


<style scoped>
.Table {
  overflow: hidden;
  box-shadow: 0 1px 3px  0   hsla(var(--color-test), 50%, .1),
              0 1px 2px -1px hsla(var(--color-test), 50%, .1),
              0 0   0    1px hsla(var(--color-test), 50%, .1);
  border-radius: 0.5rem;
}

.tbl {
  min-width: 100%;
}

.tbl::v-deep > * + * {
  border-color: hsla(var(--color-test), 50%, .1);
  border-top-width: 1px;
  border-bottom-width: 0px;
}

.tbd::v-deep > * + * {
  border-color: hsla(var(--color-test), 50%, .05);
  border-top-width: 1px;
  border-bottom-width: 0px;
}

.table-head {
  background-color: hsl(var(--color-test), 99%);
}
</style>