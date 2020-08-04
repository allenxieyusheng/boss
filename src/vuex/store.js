import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store =  new Vuex.Store({
     state: {
        count: 0,
        isLogin:false
      },
      //同步触发
      mutations: {
        increment (state) {
          state.count++
        },
        login(state){
            state.isLogin = true
        }
      },
      //状态转变输出-->computed 计算属性
      getters:{
        money:state=>state.count-1
      },

      //异步触发
      actions:{
        incrementAsyn({commit}){
            setTimeout(()=>{
                commit('increment')
            },1000)
        },
        login(store,agrs){
            const {commit}  =  store;
            console.log("agrd",agrs);
            return new Promise((resolve,reject)=>{
                //登录操作--request
                setTimeout(()=>{
                    commit('login')
                    resolve({
                        succeed:true,
                        code:1
                    })
                },2000)
            })
        },

      },

})

export default store
