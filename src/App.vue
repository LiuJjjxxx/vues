<template>
  <div id="app">
    
    <!--顶部 Hearder 区域 -->
    <Hearder></Hearder>
    <!-- 中间路由 router-view 区域 -->
    <router-view/>

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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
