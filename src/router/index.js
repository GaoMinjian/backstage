import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '../pages/login'
import Home from '../pages/Home'
import homepage from '../pages/homepage'
import collectionChannel from '../pages/collectionChannel'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: 'app',
  routes: [
    { 
      path: '',
      redirect: '/login',
    },
    {
      path: '/login',
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
        path: '/Home/article',
        name: 'article',
        component:require('../pages/article').default
      },
        {
          path:'/Home/collectionChannel',
          name:'collectionChannel',
          component:collectionChannel
        }]
    }
  ]
})

router.onError(() => {
  console.log('router error')
})
router.beforeEach((to, from, next) => {
  console.log(to,from)
  /* if(to.name === "homepage"){
    next(error)
  } else {
   next()
  } */
  next()
})

export default router