import Vue from 'vue'
import './cube-ui'
import App from './App.vue'

Vue.config.productionTip = false


import router from './router/index'
import Cube from 'cube-ui'
import "./reset.css"
import "./assets/icon/iconfont.css"

Vue.use(Cube)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
