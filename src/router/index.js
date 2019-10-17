import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Tabbar/Home'
import Member from '@/components/Tabbar/Member'
import Shopbar from '@/components/Tabbar/Shopbar'
import Search from '@/components/Tabbar/Search'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/Newinfo'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/member',component:Member},
    {path:'/shopcar',component:Shopbar},
    {path:'/serch',component:Search},
    {path:'/home/newlist',component:NewsList},
    {path:'/home/newsinfo/:id',component:NewsInfo},

  ]
})
