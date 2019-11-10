<template>
  <div class="login">
  	<div class="box">
  		<p class="p">艺欣后台登录平台</p>
  		<div><span>账号: </span><input type="text" placeholder="请输入用户名" value="forms.name" v-model="forms.name" /></div>
  		<div><span>密码: </span><input type="password" placeholder="请输入用户密码" value="forms.pass" v-model="forms.pass"  /></div>
  		<button @click="onLogin()">登录</button>
  	</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
        forms:{
            name:'',
            pass:'',
        }
    }
  },
  methods:{
  	onLogin(){
  		if(this.forms.name.length>0 && this.forms.pass.length>0){
  			window.localStorage.setItem('login',true);
  			this.axios.post('/a/login',{'name':this.forms.name,'pass':this.forms.pass}).then(res=>{
	  			if(res.data.code == 0){
	  				this.$router.push({
		  				path:this.$route.login || '/'
		  			})
	  			}else{
	  				alert('密码错误!')
	  			}
	  		})
  		}else{
  			alert('不能为空')
  		}
  	}
  }
}
</script>
<style scoped lang='scss'>
*{
	margin:0;
	padding:0;
}
.login{
	width:100%;
	height:100vh;
	background: skyblue;
	overflow: hidden;
}
.box{
	width:500px;
	height:500px;
	border:1px solid #fff;
	background: #fff;
	margin:100px auto 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-flow: column;
	.p{
		margin:30px 0;
		text-align: center;
		font-size:30px;
		color:skyblue;
	}
	div{
		width:350px;
		margin-top:40px ;
		input{
			margin-left:10px;
			height:40px;
			padding-left:10px;
			border:none;
			border:1px solid #ccc;
			outline:none;
			width:280px;
			border-radius:5px;
		}
	}
	button{
		width:300px;
		height:30px;
		border:1px solid #ccc;
		margin-top:60px;
		outline:none;
		height:50px;
		line-height:50px;
		border-radius: 10px;
		background: blue;
		color:#fff;
		cursor: pointer;
	}
}
</style>
