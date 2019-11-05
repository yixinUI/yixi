// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
import load from 'vue-lazyload'
import BScroll from 'better-scroll'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'





Vue.use(load,{
	error:'@/assets/logo.png',//加载失败图片
	loading:'@/assets/logo.png',//加载图片
	preLoad:1.3,
	attempt:1
})
Vue.use(VueAxios, axios)
Vue.use(Mint)
Vue.use(ElementUI)


Vue.config.productionTip = false









/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
