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
				dingdanArr:[
					{
						name:'齐文蒸',
						areas:'北京北工商管理专修学院'
					},{
						name:'毛志远',
						areas:'北京北工商管理学院'
					},{
						name:'禄宇童',
						areas:'河北商管理专修学院'
					},{
						name:'阿猫',
						areas:'北京北工商管理专修学院阿猫'
					},{
						name:'阿狗',
						areas:'北京北工商管理专修学院阿狗'
					},{
						name:'阿绿',
						areas:'北京北工商管理专修学院阿绿'
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