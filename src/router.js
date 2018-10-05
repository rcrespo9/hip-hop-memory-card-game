import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Statistics from './views/Statistics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/boom-bap-memory-game',
      name: 'home',
      component: Home
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics
    }
  ]
})
