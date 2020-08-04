import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '../Welcome'
import Home from '../pages/home/Home'

import Detail from '../pages/detail/detail'
// 导入 store 判断之前是否登录哦
import store from '../vuex/store'

import Login from '../pages/login/Login'

Vue.use(Router)

const routes = [
   { path: '/', component: Welcome },
   { path: '/home' , component: Home},
   { path: '/detail' , component: Detail},
   {path:"/login",component:Login},
 ]


const router = new Router({
   routes // (缩写) 相当于 routes: routes
 })
 
 //路由守护，是否登录？权限？动态路由等等
 router.beforeEach((to, from, next) => {
   console.log("是否登录",store.state.isLogin);
  //  console.log(to,from,next); 这里呢 ，还是得用本地存储，要不然刷新store就木有了
  const isLogin = store.state.isLogin || false
  if(isLogin){
    //如果返回到登录页面了
    // next()
    // console.log(to);
    if(to.path=='/login'){
      next(`/home`)
    }else{
      next()
    }
  }else{
    //这里注意了，每次刷新的时候都会到这里，所以呢，🉐️在加上个判断，防止死循环
    if(to.path=='/login'){
      next()
    }else{
      next(`/login`)
    }
    
  }
  // ...
})


 export default router

