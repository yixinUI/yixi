<template>
	<div class="home">
		<div class="title">
			<h3>
				艺欣后台管理系统
			</h3>
			<div class="name">会员: 齐文蒸先生</div>
			<p>(艺欣艺术学校管理系统)</p>
			<div class="tui">退出</div>
		</div>
		<div class="box">
			<ul class="list">
				<li v-for="item,index in listArr" @click="qiehuan(index)" :class="curIndex == index?'active':''"><router-link :to="{path:item.src}" tag="div">{{item.title}}</router-link></li>
			</ul>
			<router-view class="aaa"/>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				curIndex:0,
				listArr:[
					{
						title:'店铺图片数据管理',
						src:'img'
					},{
						title:'开设课程列表数据管理',
						src:'kecheng'
					},{
						title:'我的订单数据管理',
						src:'dingdan'
					},{
						title:'我的预约数据管理',
						src:'yuyue'
					},{
						title:'我的优惠券数据管理',
						src:'youhui'
					},{
						title:'我的砍价数据管理',
						src:'kanjia'
					},{
						title:'我的拼团数据管理',
						src:'pintuan'
					},{
						title:'我的地址数据管理',
						src:'address'
					}
				]
			}
		},
		methods:{
			qiehuan(index){
				this.curIndex = index;
			}
		}
	}
</script>
<style scoped="" lang="scss">
*{
	margin:0;
	padding:0;
}
.box{
	display: flex;
	justify-content:flex-start;
	.aaa{
		border:1px solid #ccc;
		margin-top:30px;
		margin-left:20px;
		width:80%;
	}
}
.title{
	display: flex;
	justify-content:flex-start;
	align-items: center;
	background:goldenrod;
	color:#fff;
	height:50px;
	line-height: 50px;
	padding-left:50px;
	.name{
		margin-left:60%;
	}
	p{
		margin-left:1%;
	}
	.tui{
		margin-left:3%;
	}
}
.list{
	display: flex;
	justify-content: space-between;
	align-content: center;
	flex-flow: column;
	margin-top:30px;
	width:200px;
	border:1px solid #ccc;
	height:500px;
	li{
		width:200px;
		list-style: none;
		cursor: pointer;
		text-align: center;
		div{
			padding:15px 0 15px 0px;
		}
	}
	.active{
		background: red;
		color:#fff;
	}
}
</style>