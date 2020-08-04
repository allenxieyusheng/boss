<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"scrollView",
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            tap:true,
            pullDownRefresh:true,//这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新
            pullUpLoad:true//这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
        })
    },
    methods:{
        //下拉刷新加载数据
        handlepullingDown(callback){
             this.scroll.on("pullingDown",()=>{
                 callback();
             })
        },
        //下拉刷新加载数据完毕通知better-scroll
        handlefinishPullDown(){
            this.scroll.finishPullDown();//通知bettwer-scroll已经加载完毕
            this.scroll.refresh();//重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
        },
        //上拉加载更多
        handlepullingUp(callback){
            this.scroll.on("pullingUp",()=>{
                callback()
            })
        },
        handlefinishPullUp(){
            this.scroll.finishPullUp();
            this.scroll.refresh();
        }
    }
}
</script>


<style>
    .wrapper{
        height: 100%;
    }
</style>