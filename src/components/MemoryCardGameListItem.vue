<template>
  <li>
    {{name}}
    <!-- <img :src="require(`@/assets/rappers-imgs/${img}`)" :alt="name"> -->
  </li>
</template>


<script>
export default {
  name: 'MemoryCardGameListItem',
  props: {
    name: { 
      type: String,
      required: true
    },
    img: { 
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

