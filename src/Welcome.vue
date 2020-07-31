<template>
  <div id="app">
    <span>BOSS直聘</span>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  components: {
      
  },
  created(){
    console.log("111");
    setTimeout(() => {
        // this.$router.push({ path: 'home' })
        this.$router.replace({ path: 'home' })
    }, 2000);

  }



}
</script>

<style scoped>
#app {
      display: flex;
      width: 100%;
      height: 100%;
      position:fixed;
      background: rgb(29,216,200);
      align-items: center;
      justify-content: center;
}
span {
      font-size: 20px;
      color : white;
      font-weight:bold;
}
</style>
