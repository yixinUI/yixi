<template>
	<div class="home">
		<h2 class="title">
			艺欣后台管理系统
		</h2>
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
	margin:30px 0 0 15px;
}
.list{
	display: flex;
	justify-content: center;
	align-content: center;
	flex-flow: column;
	margin-top:30px;
	width:200px;
	border:1px solid #ccc;
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