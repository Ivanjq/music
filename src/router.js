import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'views/rank/rank.vue'
import Recommend from 'views/recommend/recommend.vue'
import Search from 'views/search/search.vue'
import Singer from 'views/singer/singer.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    }, {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }, {
      path: '/search',
      name: 'search',
      component: Search
    }, {
      path: '/singer',
      name: 'singer',
      component: Singer
    }
  ]
})
