<template>
	<div class="dingdan">
		<div class="div">
			<h3>我的地址</h3>
			<p @click="onAdd()">添加</p>
		</div>
		<ul class="list">
			<li v-for="item,index in dingdanArr" :key="index">
				<div class="name">{{item.name}}</div>
				<div class="diqu">地址: {{item.areas}}</div>
				<div class="remove" @click="onRemove(index)">删除</div>
			</li>
		</ul>
		<addressadd v-show="flag"></addressadd>
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
				this.axios.post('/a/address/',[index]).then(res=>{
					this.dingdanArr.splice(res.data.index,1);
				})
			},
			getData(){
				this.axios.get('/a/address/').then(res=>{
					this.dingdanArr = res.data.listArr;
				})
			}
		},
		mounted(){
			this.getData()
		}
	}
</script>
<style scoped="" lang="scss">
@import '@/assets/css/index.scss';
</style>