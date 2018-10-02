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
  name: 'Header',
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
  .site-header {
    margin-bottom: ms(0);
  }

    .header__nav {
      padding: ms(2) 0;
    }

      .nav__link {
        display: inline-block;
        border-bottom: 2px solid;
        color: $md-gray;
        font-size: ms(0);
        font-weight: 500;
        text-decoration: none;
        @include hover-transition(color);

        &:not(:last-of-type) {
          margin-right: ms(1);
        }

        &:hover, 
        &.router-link-exact-active {
          color: $white;
        }
      }
</style>
