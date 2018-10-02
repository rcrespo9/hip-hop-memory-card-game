<template>
  <wrapper header-text="Boom Bap Memory Game">
    <MemoryCardGame />
  </wrapper>
</template>

<script>
import Wrapper from '@/components/AppWrapper.vue';
import MemoryCardGame from '@/components/MemoryCardGame.vue'

export default {
  name: 'home',
  components: {
    Wrapper,
    MemoryCardGame
  }
}
</script>
