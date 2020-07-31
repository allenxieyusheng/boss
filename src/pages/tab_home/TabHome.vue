<template>
  <div class="body">
    <div class="header">
      <div class="header_left">Node.js</div>
      <div class="header_right">
          <i class="cubeic-search" style="font-size:17px;"></i>
      </div>
    </div>

    <div class="search_wrap">
      <div class="search_wrap_left">
        <span :class="{'active':searchActive=='revote'}" @click="changeTab('revote')">推荐</span>
        <span :class="{ 'active' : searchActive=='adress' }" @click="changeTab('adress')">附近</span>
        <span :class="{ 'active' : searchActive=='new' }" @click="changeTab('new')">最新</span>
      </div>
      <div class="search_wrap_right">
        <cube-button :outline="false" :light="true" class="search_button">上海</cube-button>
        <cube-button :light="true" class="search_button">筛选</cube-button>
        <cube-button :light="true" class="search_button">关键词</cube-button>
      </div>
    </div>

  <!-- list -->
  <div class="list_wrapper" >
    <ul style="margin-bottom:40px">
      <li v-for="(item,index) in list" key="index" class="liet_item" @click="goDetail">
          <div class="item_left">
              <h1>前端开发工程师</h1>
              <div>
                <span class="label">本科</span>
                <span class="label">3-5年</span>
              </div>
              <div class="company">蝉觉科技 天使轮 0-30人</div>
              <div class="info">
                  <img src="../../../images/download.png" alt="">
                  <span>胡先生·创始人</span>
              </div>
          </div>
          <div class="item_right">
              <span>15K-40K</span>
              <span class="adress">上海</span> 
          </div>
      </li>
    </ul>
  <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
  </div>


  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  name: 'TABHOME',
  components: {
      
  },
  data(){
    return{
        list:[
          1,1,2,1,1
        ],
        searchActive:"revote"
    }
  },

  methods:{
    goDetail(){
      this.$router.push({path:"detail"})
    },
    changeTab(t){
        this.searchActive = t
    },
    onScroll(pos) {
        console.log(`Now position is x: ${pos.x}, y: ${pos.y}`)
    },

  },

  created(){
      // let wrapper = document.querySelector('.list_wrapper')
      // let scroll = new BScroll('.list_wrapper', {
      //   pullUpLoad: true
      // })

      // scroll.on('scroll', onScroll)
  }



}
</script>

<style scoped>
  .body{
    width:100%;
    overflow: hidden;
  }
 .header{
   
   display: flex;
   height:50px;
   background:#38c1b9;
   color: #fff;
   justify-content: space-between;
   overflow: hidden;
   padding-left: 15px;
   padding-right: 15px;
   align-items: center;
   position: fixed;
   left:0;
   top:0;
   right: 0;
 }
 .header_left{
   font-size: 20px;
   font-weight: 200;
 }
 .search_wrap{
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
  margin:55px 10px 5px 10px;
  padding-bottom: 5px;

 }
 .search_wrap_left{
   display: flex;
   flex:1;
   justify-content: space-around;
   align-items: center;
 }
  .search_wrap_right{
    display: flex;
    flex-direction: row;
    flex:2;
    justify-content: flex-end;

 }
 .search_button{
   width:50px;
   height: 15px;
   align-self: center;
   font-size: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 5px;
   border: none;
   background: #f5f5f5;
 }
 .active{
   font-size: 16px;
   color: #000;
 }
 .liet_item{
   padding: 20px;
   display: flex;
   justify-content: space-between;
 }
 h1{
   font-size: 18px;
   color: #000;
 }
 .label{
   padding:7px;
   background: #f5f5f5;
   display: inline-block;
   margin-top: 10px;
   margin-bottom: 10px;
   color: #626262;
   margin-right: 5px;
 }
 .company{
   font-size: 14px;
   color: #2f2f2f;
 }
 .item_right{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-end;
 }
  .adress{
   font-size: 10px;
   color:#aaaaaa
 }
 .item_right :first-child {
   color: #249fa3;
   font-size: 15px;
   font-weight: 800; 
 }
 img{
   width: 25px;
   height: 25px;
   border-radius: 25px;
   margin-right: 10px;
  
 }
 .info{
   display: flex;
   align-items: center;
   margin-top: 10px;
 }
</style>
