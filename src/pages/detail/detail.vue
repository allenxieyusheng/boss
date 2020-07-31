<template>
  <div>
    <div class="wrapper">
    
    <div class="header">
      <div>
        <h1>后端开发-Node.js</h1>
        <div class="base-info">
          <div><span class="iconfont">&#xe632;</span>上海</div>
          <div><span class="iconfont">&#xe66a;</span>3-5年</div>
          <div><span class="iconfont">&#xe690;</span>本科</div>
        </div>
      </div>
      <div>
        <span class="money">15-40K</span>
      </div>
    </div>

    <div class="hr">
        <div class="hr-logo">
          <img src="../../../images/download.png" alt="">
          <div>
            <h5 style="color:#333;font-size:13px">赵先生</h5>
            <h3 style="margin-top:5px">携程旅游网·前端开发工程师</h3>
          </div>
        </div>

        <div class="arrow"><i class="cubeic-arrow"></i></div>
    </div>

    <div class="detail">
      <h2>职位详情</h2>
      <div></div>

      <pre class="detail-introduce">
 职位描述：
 1. 为前端应用（h5/pc/app）实现和涉及后端restful接口；
 2. 参加后端架构设计和产品的研发，开发高性能，高可靠的服务；
 3. 持续提升服务性能和改进业务架构；
 职位要求：
 1. 熟悉常用的数据结构和算法
 2.熟练使用node.js对node.js的运行机制有一定的了解；
 3.熟悉服务端的缓存技术，如redis；
 4.良好的dinamante编写，涉及和测试；
 5.较强的逻辑思维能力，善于分析梳理业务需求并实现；
 6.良好的沟通和协作能力
      </pre>
    </div>



    <div class="hr">
        <div class="hr-logo">
          <img src="../../../images/company.png" alt="">
          <div>
            <h5 style="color:#333;font-size:13px">携程计算机技术（上海）有限公司</h5>
            <h3 style="margin-top:5px">已上市·10000人以上·互联网</h3>
          </div>
        </div>

        <div class="arrow"><i class="cubeic-arrow"></i></div>
    </div>

    <div class="map">
      <img src="../../../images/map.png" alt="">
    </div>

    <div class="options">
      <h2>你的竞争力分析</h2>
      <div class="options-number">
        <span>三个月内共和<span class="number">8</span>位牛人沟通，你的竞争力排名<span class="number">19</span>位，你处在<span class="number">8</span>位置</span>
      </div>

      <div class="progress">
         <div class="progress-item left"/>
         <div class="progress-item middle"/>
         <div class="progress-item middle"/>
         <div class="progress-item right"/>
      </div>
    </div>

  </div>

  <div class="contarct">
      <cube-button class="button">立即沟通</cube-button>
  </div>

    </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  name: 'My',
  components: {
      
  },
  data(){
    return{
        
    }
  },
  created(){
      let wrapper = document.querySelector('.wrapper')
      let scroll = new BScroll(wrapper)
  },
  methods:{

  }



}
</script>

<style scoped>
#app{
  width: 100%;
  overflow: hidden;
}
.header{
  display: flex;
  flex-direction: row;  
  padding: 20px; 
  justify-content: space-between;
   
}
h1{
  font-size: 25px;
  color: #000;
  font-weight: 500;
}
.money{
  color: #249fa3;
  font-weight: 400;
  font-size: 20px;
}
.base-info{
  margin-top:20px;
  color: #333;
  display: flex;
  align-items: center;
}
.base-info div{
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.detail{
  padding: 20px;

}
.detail h2 {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}
.contarct{
  /* width: 100%; 这样使用会影响布局*/
  position: fixed;
  padding:20px;
  bottom:0px;
  left:0;
  right:0;
  background: #fff;
}
.button{
  background: #38c1b9;
  font-size: 14px;
}
.detail-introduce{
  margin-top: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid #f5f5f5;
  line-height: 25px;
}
.hr{
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  /* border-bottom: 1px solid red; */
}
.hr-logo{
  display: inline-flex;
  /* flex-direction: row; */
  align-items: center;
}
.hr img{
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 15px;
}
.arrow{
  display: flex;
  align-self: center;
}
.wrapper{
  margin-bottom: 90px;
}
.map{
  display: flex;
  justify-content: center;

}
.map img{
  width: 90%;
  height: 200px;
  border-radius: 10px;
}
.options{
  padding:20px;
}
.options h2{
  font-size: 15px;
  color: #333;
  font-weight: 600;
  margin-bottom: 10px;
}

.number{
  color: #249fa3;
}
.options-number{
  font-size: 15px;
  line-height: 25px;
}
.progress{
  display: flex;
  height: 15px;
  margin-top:10px;
}
.progress-item{
  display: inline-flex;
  flex:1;
  height: 10px;
}
.progress .left{
  background:linear-gradient(to right, #58dffc , #53dfee);
  border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
   margin-right: 2px;
}
.progress .middle{
  background:linear-gradient(to right, #4ae4ee , #3deae4);
  margin-right: 2px;
}
.progress .right{
  background: linear-gradient(to right, #29eed0 , #19f7c6);
  border-top-right-radius: 5px;
   border-bottom-right-radius: 5px;
}
</style>
