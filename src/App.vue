<template>
  <div id="app">
    
    <!--顶部 Hearder 区域 -->
    <Hearder></Hearder>
    <!-- 中间路由 router-view 区域 -->
    <transition mode="out-in">
      <router-view/>
    </transition>
    <!-- 底部 Tabbar 区域 -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Hearder from '../src/components/Header'
import Tabbar from '../src/components/Tabbar'

export default {
  name: 'App',
  components:{
    Hearder,
    Tabbar
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow-x: hidden;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%)
}
.v-enter-active,.v-leave-active{
  transition: all .5s ease;
}
</style>
