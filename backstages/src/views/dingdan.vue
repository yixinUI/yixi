<template>
	<div class="dingdan">
		<div class="div">
			<h3>我的订单</h3>
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
				dingdanArr:[],
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
				this.axios.post('/a/dingdan/',[index]).then(res=>{
					this.dingdanArr.splice(res.data.index,1)
				})
			},
			getData(){
				this.axios.get('/a/dingdan/').then(res=>{
					this.dingdanArr = res.data.listArr;
				})
			}
		},
		mounted(){
			this.getData();
		}
	}
</script>
<style scoped="" lang="scss">
@import '@/assets/css/index.scss';
</style>