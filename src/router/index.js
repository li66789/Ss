import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ss from '../index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ss',
      component: Ss
    }
  ]
})
