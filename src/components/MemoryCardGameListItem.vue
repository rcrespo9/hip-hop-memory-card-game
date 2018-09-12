<template>
  <li>
    <span>{{ name }}</span>
    <img :src="img" alt="">
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

