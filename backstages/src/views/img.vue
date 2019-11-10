<template>
	<div class="img">
		<div  @click="jia()" >添加</div>
		<div class='jia'><input @keyup.enter="add($event)" v-model="str" v-show="states?'active':''" type="text" placeholder="写下图片路径点击回车添加"/></div>
		<ul class='list-i'>
			<li class='list-li' v-for="item,index in imgs"><img :src="item" alt="" /><span @click="remove(index)">删除</span></li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'imgs',
		data(){
			return{
				states:false,
				imgs:[],
				str:'',
			}
		},
		methods:{
			remove(index){
				this.imgs.splice(index,1)
			},
			jia(){
				this.states=!this.states
				console.log(this.states)
			},
			add(e){
				if(e.target.value==''){
					alert('无路径')
					this.states=false
				}else{
					var add=e.target.value
					this.imgs.push(add)
					e.target.value=''
					this.states=false
				}
			},
			getData(){
				this.axios.get('/a/dimg/').then(res=>{
					this.imgs = res.data.listArr;
				})
				for(var i=0;i<this.imgs.length;i++){
					if(this.str!=this.imgs[i]){
						console.log('路径错误')
					}else{
						var add=e.target.value
						this.imgs.push(add)
						e.target.value=''
						this.states=false
					}
				}
			}
		},
		mounted(){
			this.getData();
		}
	}
</script>
<style>
	*{
		margin:0;
		padding:0;
	}
	ul,li{
		list-style: none;
	}
.list-i{
	width:100%;
	height:400px;
	display: flex;
	flex-wrap: wrap;
	overflow: hidden;
	overflow: scroll;
}
.list-li{
		width:200px;
		height:220px;
		margin-left:20px;
		margin-top:20px;
	}
.list-li img{
		width:200px;
		height:200px;
}
.img{
	position: relative;
}
.img .jia{
	position: absolute;
	width:100px;
	height:200px;
	text-align: center;
	line-height: 200px;
	top:50%;
	left:50%;
	margin-left:-100px;
	margin-top:-100px;
}
</style>
