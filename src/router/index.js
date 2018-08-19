import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '../pages/login'
import Home from '../pages/Home'
import homepage from '../pages/homepage'
import collectionChannel from '../pages/collectionChannel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[{
        path:'/Home/homepage',
        name:'homepage',
        component:homepage
      },
        {
          path:'/Home/collectionChannel',
          name:'collectionChannel',
          component:collectionChannel
        }]
    }
  ]
})
