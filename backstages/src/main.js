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
import dingdanadd from '@/page/dingdanAdd'
import addressadd from '@/page/addressAdd'


router.beforeEach((to,from,next)=>{
	if(to.meta.login){//判断有没有定义拦截
		//如果定义的话就判断有没有登录
		if(window.localStorage.getItem('login') == 'true'){
			next()
		}else{
			next({
				path:'/login',
				query:{
					login:to.fullPath
				}
			})
		}
	}else{
		next()
	}
})





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


Vue.component('dingdanadd',dingdanadd)
Vue.component('addressadd',addressadd)







/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
