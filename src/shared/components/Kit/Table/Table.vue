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


<style scoped lang="scss">
@import '@classroom/assets/theme.scss';

.Table {
  overflow: hidden;
  box-shadow: 0 1px 3px  0   rgba($color-gray, 0.2),
              0 1px 2px -1px rgba($color-gray, 0.2),
              0 0   0    1px rgba($color-gray, 0.1);
  border-radius: 0.5rem;
}

.tbl {
  min-width: 100%;
}

.tbl::v-deep > * + * {
  border-color: rgba($color-gray, .2);
  border-top-width: 1px;
  border-bottom-width: 0px;
}

.tbd::v-deep > * + * {
  border-color: rgba($color-gray, .1);
  border-top-width: 1px;
  border-bottom-width: 0px;
}

.table-head {
  background-color: rgba($color-gray, .05);
}
</style>