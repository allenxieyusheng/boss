<template>
  <div>
      <div>
        <tab-home v-if = "selectedLabel== '职位' "/> 
        <my v-if = "selectedLabel== '我的' "/> 
        <tab-message v-if = "selectedLabel== '消息' "/> 
      </div>

      <cube-tab-bar v-model="selectedLabel" class="tab_bottom">
        <cube-tab v-for="(item) in tabs"  :label="item.label" :key="item.label" >
          <div class='tab'>
            <span v-if=" item.icon==1" class="iconfont">&#xe66a;</span>
            <span v-if=" item.icon==2" class="iconfont">&#xe621;</span>
            <span v-if=" item.icon==3" class="iconfont">&#xe762;</span>
            <span v-if=" item.icon==4" class="iconfont">&#xe62f;</span>
            <div style="margin-top:5px">{{item.label}}</div>
          </div>
        </cube-tab>
      </cube-tab-bar>

  </div>
</template>

<script>

import My from '../my/My'
import TabHome from '../tab_home/TabHome'
import TabMessage from '../tab_message/TabMessage'

export default {
  name: 'Home',
  components: {
      My,
      TabHome,
      TabMessage
  },
  data () {
    return {
      selectedLabel: '职位',
      tabs: [{
        label: '职位',
        icon: 1
       
      }, {
        label: '发现',
        icon: 2
        
      },
      {
        label: '消息',
        icon: 3
       
      },
      {
        label: '我的',
        icon: 4
       
      }

      ]

    }
  },

  methods: {
    clickHandler () {
      // if you clicked home tab, then print 'Home'
    },
    changeHandler () {
      // if you clicked different tab, this methods can be emitted
    }
  }



}
</script>

<style scoped>
  .tab_bottom{
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: #fff;
  }
  .tab{
    display: flex;
    flex-direction: column;
  }
</style>