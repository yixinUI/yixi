<template>
	<div class="kecheng">
		<div class="btn-add"><p>添加</p></div>
		<div class="lis-box" v-for="(item,index) in cartlis">
			<ul class="ul-list">
				<li><img src="../../build/logo.png"/></li>
				<li>
					<span>{{item.name}}</span>
					<p class="text-p">￥{{item.price}} <span>{{item.list}}浏览</span> <span>{{item.zan}}赞</span> <span>{{item.pl}}评论</span></p>
				</li>
				
				<li class="btn-list">
					<p @click="remove(index)">删除</p>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				cartlis:[
					{
						name:'121',
						price:'300',
						list:'4870',
						type:1,
						zan:'7',
						pl:'2',
						index:0
					},{
						name:'121',
						price:'300',
						list:'4870',
						type:1,
						zan:'7',
						pl:'2',
						index:1
					},{
						name:'121',
						price:'300',
						list:'4870',
						type:1,
						zan:'7',
						pl:'2',
						index:2
					},{
						name:'121',
						price:'300',
						list:'4870',
						type:1,
						zan:'7',
						pl:'2',
						index:3
					}
				]
			}
		},
		mounted(){
//			this.axios.get('/lis').then(res=>{
//				console.log(res)
//			})
		},
		methods:{
			remove(index){
				for(var i=0;i<this.cartlis.length;i++){
					if(index==this.cartlis[i].index){
						 
					}
				}
				
			}
		}
	}
</script>

<style lang="scss">

	ul,li{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.kecheng{
		height: 400px;
		overflow: scroll;
	}
	.btn-add{
		p{
			padding: 0;
			margin: 0;
			width: 60px;
			height: 30px;
			font-size: 14px;
			line-height: 30px;
			text-align: center;
			border: 1px solid #ccc;
			margin-left: 50px;
			border-radius: 20px;
			margin-top: 5px ;
		}
	}
	.lis-box{
		box-sizing: border-box;
		padding: 20px;

		.ul-list{
			display: flex;
			li{
				padding-left: 20px;
				font-size: 14px;
				img{
					width: 60px;
					height: 60px;
					border-radius:50%;
				}
				.text-p{
					color: orange;
					span{
						color: #000;
					}
				}
				
			}
			.btn-list{
				margin-left: 190px;
				  p{
				  	width: 50px;
					height: 25px;
					border: 1px solid #ccc;
					text-align: center;
					line-height: 25px;
					border-radius: 10px;
				  }	
				
			}
		}
	}
</style>