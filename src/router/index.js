import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '../Welcome'
import Home from '../pages/home/Home'

import Detail from '../pages/detail/detail'


import Login from '../pages/login/Login'

Vue.use(Router)

const routes = [
   { path: '/', component: Welcome },
   { path: '/home' , component: Home},
   { path: '/detail' , component: Detail},
   {path:"/login",component:Login},
 ]


 //路由守护
//  router.beforeEach((to, from, next) => {

//     // ...
//  })


const router = new Router({
   routes // (缩写) 相当于 routes: routes
 })


 export default router

