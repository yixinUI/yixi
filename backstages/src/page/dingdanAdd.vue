<template>
	<div class="dingdanAdd">
		<div>名称: <input type="text" value="name" v-model="name" /></div>
		<div>数量: <input type="number" value="count" v-model.number="count" /></div>
		<div>价格: <input type="number" value="price" v-model.number="price" /></div>
		<div class="btn">
			<button @click="onSave()">保存</button>
			<button @click="onAddG()">取消</button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				name:'',
				count:'',
				price:'',
			}
		},
		methods:{
			onAddG(){//取消
				this.$parent.onAddBack()
			},
			onSave(){//保存
				if(this.name.length<1 || this.count.length<1 || this.price.length<1){
					alert('不能为空!');
				}else{
					let obj = {
						name:this.name,
						count:this.count,
						price:this.price,
					}
					this.$parent.onAddBack(obj)
					this.name = '';
					this.count = '';
					this.price = '';
				}
			}
		}
	}
</script>
<style scoped="" lang="scss">
*{
	margin:0;
	padding:0;
}
.dingdanAdd{
	position: fixed;
	width:400px;
	height:400px;
	background: #fff;
	top:50%;
	left:50%;
	margin-left:-200px;
	margin-top:-200px;
	box-shadow: 0px 0px 20px #666;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-flow: column;
	padding-top:20px;
	box-sizing: border-box;
	div{
		margin:10px 0;
		input{
			border:none;
			outline: none;
			border:1px solid #ccc;
			width:250px;
			height:40px;
		}
	}
	.btn{
		display: flex;
		flex-flow: row;
		justify-content: space-around;
		width:350px;
		button{
			border:none;
			outline: none;
			width:70px;
			height: 35px;
			border:1px solid #ccc;
			border-radius: 5px;
			cursor: pointer;
		}
	}
}
</style>