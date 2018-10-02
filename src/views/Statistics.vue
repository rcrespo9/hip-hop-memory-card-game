<template>
  <wrapper header-text="Statistics">
    <MemoryCardGameStatistics />
  </wrapper>
</template>

<script>
import Wrapper from '@/components/AppWrapper.vue';
import MemoryCardGameStatistics from '@/components/MemoryCardGameStatistics.vue'

export default {
  name: 'statistics',
  components: {
    Wrapper,
    MemoryCardGameStatistics
  }
}
</script>
