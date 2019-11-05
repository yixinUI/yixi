<template>
	<div class="dingdan">
		<div class="div">
			<h3>我的拼团</h3>
			<p @click="onAdd()">新建</p>
		</div>
		<ul class="list">
			<li v-for="item,index in dingdanArr" :key="index">
				<img :src="item.img || require('@/assets/img/1.png')"/>
				<div class="name">{{item.name}}</div>
				<div class="count">数量: {{item.count}}</div>
				<div class="price">¥{{item.price}}</div>
				<div class="remove" @click="onRemove(index)">删除</div>
			</li>
		</ul>
		<dingdanadd v-show="flag"></dingdanadd>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				dingdanArr:[
					{
						name:'订单一号',
						count:32,
						price:12,
						img:require('@/assets/img/1.png')
					},{
						name:'订单二号',
						count:322,
						price:122,
						img:require('@/assets/img/2.png')
					},{
						name:'订单三号',
						count:42,
						price:1,
						img:require('@/assets/img/3.png')
					},{
						name:'订单四号',
						count:332,
						price:82,
						img:require('@/assets/img/4.png')
					},{
						name:'订单五号',
						count:111,
						price:122,
						img:require('@/assets/img/5.png')
					},{
						name:'订单六号',
						count:302,
						price:82,
						img:require('@/assets/img/1.jpg')
					},{
						name:'订单七号',
						count:42,
						price:452,
						img:require('@/assets/img/2.jpg')
					},{
						name:'订单八号',
						count:100,
						price:1022,
						img:require('@/assets/img/3.jpg')
					},{
						name:'订单九号',
						count:222,
						price:2,
						img:require('@/assets/img/4.jpg')
					}
				],
				flag:false
			}
		},
		methods:{
			onAdd(){
				this.flag = true;
			},
			onAddBack(obj){
				if(obj){
					this.dingdanArr.push(obj)
				}
				this.flag = false;
			},
			onRemove(index){
				this.dingdanArr.splice(index,1)
			}
		}
	}
</script>
<style scoped="" lang="scss">
@import '@/assets/css/index.scss';
</style>