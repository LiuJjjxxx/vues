import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Tabbar/Home'
import Member from '@/components/Tabbar/Member'
import Shopbar from '@/components/Tabbar/Shopbar'
import Search from '@/components/Tabbar/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/member',component:Member},
    {path:'/shopcar',component:Shopbar},
    {path:'/serch',component:Search},

  ]
})
