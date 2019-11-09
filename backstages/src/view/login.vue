<template>
	<div>
		<div class="logio">
			<p>艺欣艺校登陆</p>
			<label>
				账号:
				<input type="text" value="name" v-model="name" placeholder="账号" />
			</label>
			<label>
				密码:
				<input type="password" value="pass" v-model="pass" placeholder="密码" />
			</label>
			<span class="btn" @click="getData()">登陆</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				name:'',
				pass:''
			}
		},
		methods:{
			getData(){
				let obj = {
					name:this.name,
					pass:this.pass
				}
				this.axios.post('/a/login/',{obj}).then(res=>{
					if(res.data.code == 0){
						this.$router.push({
							name:'home'
						})
						localStorage.setItem('login',true);
					}else if(res.data.code == 1){
						console.log('登陆失败!')
					}
				})
			}
		}
	}
</script>

<style scoped="" lang="scss">
input{
	outline: none;
}
.bottomTabbar{
	display:none;
}
.logio{
	width: 800px;
	height: 400px;
	margin:30px auto;
	box-sizing: border-box;
	padding: rem;
	box-shadow: 5px 0 10px #ccc;
	p{
		font-size:40px;
		line-height: rem(80);
		text-align: center;
	}
	label{
		height: 80px;
		display: block;
		padding-left: 240px;
		font-size: 26px;
		font-family:"微软雅黑";
		input{
			height: 40px;
			font-size: 20px;
		}
	}
	.btn{
		width: 300px;
		height: 40px;
		background: green;
		text-align: center;
		font-size: 20px;
		line-height: 40px;
		display: block;
		color: #fff;
		margin:10px auto ;
		box-shadow: 0 0 10px green;
	}
}
</style>
