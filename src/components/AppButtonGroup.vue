<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppButtonGroup'
}
</script>

<style lang="scss" scoped>
  .button-group {
    button:not(:last-of-type) {
      margin-right: ms(1);
    }
  }
</style>


