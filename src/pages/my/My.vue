<template>
  <div>
      <div class="header">

          <div class="header_my">
            <div>
              <span class="name">周杰伦</span>
              <div class="edit-my">
                <span><i class="cubeic-edit"></i>在线编辑我的简历</span>
              </div>
            </div>
            <div>
              <img src="../../../images/download.png" alt="">
            </div>
          </div>

          <div class="contract-number">
              <div>
                <span class="contract-number-number">178</span> 
                <span>沟通过</span>
              </div>
              <div>
                <span class="contract-number-number">0</span> 
                <span>面试</span>
              </div>

              <div>
                <span class="contract-number-number">0</span> 
                <span>已投简历</span>
              </div>

              <div>
                <span class="contract-number-number">0</span> 
              <span>收藏</span>
              </div>

          </div>

          <div class="vip">
              <div>
                <img src="../../../images/vip.png" alt="">
              </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'My',
  components: {
      
  },
  created(){

  }



}
</script>

<style scoped>
  .header{
    background: #36c1bc;
    padding:20px;
    color: #fff;
    position: relative;
    padding-bottom: 50px;
  }
  .header_my{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header_my img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  .name{
    font-size: 25px;
  }
  .edit-my{
    margin-top:10px;
    font-size: 13px;
  }
  .contract-number{
    margin: 15px;
    display: flex;
    justify-content: space-between;
  }
  .contract-number div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .contract-number span{
    display: block;
    margin-bottom: 10px;
    color:#c3ffff
  }
  .contract-number .contract-number-number{
    font-size:20px;
    color:#fff
  }
  .vip{
    background: linear-gradient(to right, #1a1a1a , #2c2c2c);
    position: absolute;
    bottom: 0;
    left:0;
    right:0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;
  }
  .vip img{
    height: 30px;
  }
</style>
