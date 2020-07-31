<template>
  <div>
      messages

      <cube-popup type="my-popup" ref="myPopup">    
          <div class="pop">
              <img src="../../../images/message_dialog.png" alt="">
               <div class="pop-text">
                <h2>你发现了知识的池塘</h2>
                <span>求职攻略，面试真题，同行问答，沟通技巧，等你来get</span>    
               </div> 
               <span class="get" @click="cloedDailog">Get!</span>
          </div>
      </cube-popup>
        <cube-button @click="showPopup('myPopup')">
        Show Popup
      </cube-button>

  </div>
</template>

<script>
export default {
  name: 'My',
  components: {
      
  },
 data(){
     return {
         component:null
     }
 },
  created(){

  },
  methods:{
      showPopup(refId) {
      this.component  = this.$refs[refId]
      this.component.show()
    
    //   setTimeout(() => {
    //     component.hide()
    //   }, 1000)
    },
    cloedDailog(){
        this.component&&this.component.hide()
    },

  }



}
</script>

<style scoped>
    .pop{
        width:300px;
        height: 300px;
        background: #fff;
        position: relative;
    }
    .pop img{
        width: 300px;
        height: 160px;
    }
    .pop-text{
        padding:20px;
    }
    .pop-text h2{
        font-size:16px;
        color: #333;
        margin-bottom: 6px;
    }
    .pop-text span{
       line-height: 20px; 
    }
    .get{
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
        font-size:20px;
        color:#18a6aa
    }
</style>
