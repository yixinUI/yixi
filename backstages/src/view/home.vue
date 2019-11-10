<template>
	<div class="home">
		<el-container>
			<el-header>
				<h3>
					艺欣后台管理系统
				</h3>
				<div class="name" v-show="flag">会员: 齐文蒸先生</div>
				<div class="name" v-show="!flag" @click="onLogin()">请您先登录</div>
				<p>(艺欣艺术学校管理系统)</p>
				<div class="tui" @click="drop()">退出</div>
			</el-header>
		</el-container>
		<el-container>
			<el-aside width="202px">
				<ul class="list">
					<li v-for="item,index in listArr" @click="qiehuan(index)" :class="curIndex == index?'active':''"><router-link :to="{path:item.src}" tag="div">{{item.title}}</router-link></li>
				</ul>
			</el-aside>
			<el-main><router-view class="aaa"/></el-main>
		</el-container>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				flag:window.localStorage.getItem('login'),
				curIndex: 0,
				listArr: [{
					title: '店铺图片数据管理',
					src: 'img'
				}, {
					title: '开设课程列表数据管理',
					src: 'kecheng'
				}, {
					title: '我的订单数据管理',
					src: 'dingdan'
				}, {
					title: '我的预约数据管理',
					src: 'yuyue'
				}, {
					title: '我的优惠券数据管理',
					src: 'youhui'
				}, {
					title: '我的砍价数据管理',
					src: 'kanjia'
				}, {
					title: '我的拼团数据管理',
					src: 'pintuan'
				}, {
					title: '我的地址数据管理',
					src: 'address'
				}]
			}
		},
		methods: {
			qiehuan(index) {
				this.curIndex = index;
			},
			drop(){
				let flag = window.localStorage.getItem('login');
				if(flag == 'true'){
					alert('退出成功');
					window.localStorage.setItem('login',false);
					this.flag = JSON.parse(window.localStorage.getItem('login'))
				}else{
					alert('您还未登录')
					this.flag = JSON.parse(window.localStorage.getItem('login'))
				}
			},
			onLogin(){
				this.$router.push({
					path:'/login'
				})
			}
		}
	}
</script>
<style scoped="" lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	.home{
		width:100%;
		height:100vh;
	}
	.el-container{
		width:100%;
		.el-header{
			box-sizing: border-box;
			width:100%;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			background: goldenrod;
			color: #fff;
			height: 50px;
			line-height: 50px;
			padding-left: 50px;
			.name {
				margin-left: 60%;
			}
			p {
				margin-left: 1%;
			}
			.tui {
				margin-left: 3%;
			}
		}
		.el-aside{
			.list {
				justify-content: space-between;
				align-content: center;
				flex-flow: column;
				margin-top: 30px;
				width: 200px;
				border: 1px solid #ccc;
				height: 500px;
				li {
					width: 200px;
					list-style: none;
					cursor: pointer;
					text-align: center;
					div {
						padding: 15px 0 15px 0px;
					}
				}
				.active {
					background: red;
					color: #fff;
				}
			}
		}
		.el-main{
			.aaa {
				border: 1px solid #ccc;
				margin-top: 30px;
				margin-left: 20px;
				width: 95%;
			}
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>