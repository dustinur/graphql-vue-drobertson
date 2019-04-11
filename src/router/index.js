import Vue from 'vue'
import Router from 'vue-router'

import CreateChar from '../components/CreateChar'
import WitcherList from '../components/WitcherList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: WitcherList
    },
    {
      path: '/create',
      component: CreateChar
    }
  ],
  mode: 'history'
})