<template>
  <div class="card">
    <div class="card__inner">
      <slot></slot>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'AppCard'
}
</script>

<style lang="scss" scoped>
  .card__inner {
    padding: ms(2);
    border-radius: $global-radius;
    background-color: $dark-gray;    
  }
</style>

