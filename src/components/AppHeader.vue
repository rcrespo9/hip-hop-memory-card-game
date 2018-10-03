<template>
  <header class="site-header">
    <nav class="header__nav">
      <router-link 
        v-for="route in routes" 
        :key="route.id" 
        :to="route.url" 
        class="nav__link">{{route.name}}</router-link>
    </nav>
  </header>  
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      routes: [
        {
          id: 1,
          name: 'Home',
          url: '/'
        },
        {
          id: 2,
          name: 'Statistics',
          url: '/statistics'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .header__nav {
    padding: ms(2) 0 ms(1);
  }

    .nav__link {
      @include anchor-styles;

      &:not(:last-of-type) {
        margin-right: ms(1);
      }

      &.router-link-exact-active {
        color: $white;
      }
    }
</style>
