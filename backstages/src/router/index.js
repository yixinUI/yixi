import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/view/home'
import img from '@/views/img'
import kecheng from '@/views/kecheng'
import dingdan from '@/views/dingdan'
import yuyue from '@/views/yuyue'
import youhui from '@/views/youhui'
import kanjia from '@/views/kanjia'
import pintuan from '@/views/pintuan'
import address from '@/views/address'
import login from '@/mao/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/',
      name: 'home',
      component: home,
      redirect:'/img',
      children:[
      	{
      		path: 'img',
		      name: 'img',
		      component: img,
      	},{
      		path: 'kecheng',
		      name: 'kecheng',
		      component: kecheng,
      	},{
      		path: 'dingdan',
		      name: 'dingdan',
		      component: dingdan,
      	},{
      		path: 'yuyue',
		      name: 'yuyue',
		      component: yuyue,
      	},{
      		path: 'youhui',
		      name: 'youhui',
		      component: youhui,
      	},{
      		path: 'kanjia',
		      name: 'kanjia',
		      component: kanjia,
      	},{
      		path: 'pintuan',
		      name: 'pintuan',
		      component: pintuan,
      	},{
      		path: 'address',
		      name: 'address',
		      component: address,
      	},{
      		path: 'login',
		      name: 'login',
		      component: login,
      	}
      ]
    }
  ]
})
