<template>
  <tr class="TableRow">
    <slot />
  </tr>
</template>


<style scoped lang="scss">
@import '@classroom/assets/theme.scss';
.TableRow:hover {
  background-color: rgba($color-gray, .025);
}
</style>