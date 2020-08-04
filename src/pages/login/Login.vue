<template>
  <div>
    <h1>手机号登录/注册</h1>
    <div class="input">
      <cube-input 
      placeholder="请输入您的手机号码" 
      class="input-input" 
      v-model="value" >
      </cube-input>  
    </div>
    <!-- <span>{{count}}</span>
    <span>111111{{money}}</span>
    <span>{{count1}}</span>
    <span>你好{{countAlias}}</span> -->
    <!-- <span>{{isLogin}}</span> -->
    <div class="login-wrap"> 
        <cube-button class="login" @click="login">立即登录</cube-button>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
    name: 'Home',
    components: {

    },
    data () {
        return {
            value:"",
            redirect:"",
        }
    },

    created(){
        // console.log("111",this.$store.state.count) // -> 1
    },
    watch:{
        $route:{
            handler: function(route) {
                console.log("路由",route);
			    this.redirect = route.query && route.query.redirect
            },
            immediate: true
        }
    },
    methods: {
        login(){
            if(!this.value){
                alert("请输入电话")
                return
            }

            const toast = this.$createToast({
                    txt: '登录中...',
                    mask: true
            })
            toast.show()

            console.log(this.$store) 
            //   this.$router.push('home')
            //同步触发 increment
            // this.$store.commit('increment')
            //异步触发
            // this.$store.dispatch('incrementAsyn')
        
            this.$store.dispatch('login',{
                username:"xieyusheng",
                password:"123456"
            }).then(res => {
                console.log("abc",res);
                toast.hide()
                if(res.succeed){
                    //登录成功
                //   this.$router.push('home')
                // this.redirect 之前的页面
                this.$router.push({
                        path: this.redirect || 'home'
                  })        
                }

            }) 
        }
    },
    computed:{
        count(){
            return this.$store.state.count
        },
        money(){
            return this.$store.getters.money
        },
        //减小computed的map操作
        ...mapState({
            isLogin:state => state.isLogin,
            count1: state => state.count,
            countAlias: 'count', //传字符串参数 'count' 等同于 `state => state.count`
        })
        // 为啥要... 
        // 因为
        // computed: mapState([
        //     // 映射 this.count 为 store.state.count
        //     'count'
        //  ])



    },

}
</script>

<style scoped>
    h1{
        color: #333;
        font-size: 25px;
        padding-top: 60px;
        padding-left: 20px;
    }
    .login{
        background-color: #249fa3;
    }
    .login-wrap{
        margin-top: 20px;
        padding:20px;
    }
    .input{
        margin-top: 70px;
        border: none;
        padding:20px;
    }
    .input-input{
        border: 0px;
       position: static;
        border-bottom: 1px solid #999;
    }
</style>