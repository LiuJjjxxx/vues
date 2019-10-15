// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import '../lib/mui-master/dist/css/mui.css'
// 导入 Mint-ui 组件
import { Header,Tabbar,TabItem,Badge,Swipe,SwipeItem,Toast} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Badge.name, Badge);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
