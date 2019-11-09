<template>
	<div class="kecheng">
		<div class="btn-add"><p>添加</p></div>
		<div class="lis-box">
			<ul class="ul-list">
				<li><img src="../../build/logo.png"/></li>
				<li>
					<span>艺欣艺术,美术组、天使宝宝班300元学费任你砍！砍！砍！</span>
					<p class="text-p">￥300 <span>4870浏览</span> <span>67赞</span> <span>0评论</span></p>
				</li>
				
				<li class="btn-list">
					<p>删除</p>
				</li>
			</ul>
		</div>
		<div class="lis-box">
			<ul class="ul-list">
				<li><img src="../../build/logo.png"/></li>
				<li>
					<span>艺欣艺术,美术组、天使宝宝班300元学费任你砍！砍！砍！</span>
					<p class="text-p">￥300 <span>4870浏览</span> <span>67赞</span> <span>0评论</span></p>
				</li>
				<li class="btn-list">
					<p>删除</p>
				</li>
			</ul>
		</div>
		<div class="lis-box">
			<ul class="ul-list">
				<li><img src="../../build/logo.png"/></li>
				<li>
					<span>艺欣艺术,美术组、天使宝宝班300元学费任你砍！砍！砍！</span>
					<p class="text-p">￥300 <span>4870浏览</span> <span>67赞</span> <span>0评论</span></p>
				</li>
				<li class="btn-list">
					<p>删除</p>
				</li>
			</ul>
		</div>
		<div class="lis-box">
			<ul class="ul-list">
				<li><img src="../../build/logo.png"/></li>
				<li>
					<span>艺欣艺术,美术组、天使宝宝班300元学费任你砍！砍！砍！</span>
					<p class="text-p">￥300 <span>4870浏览</span> <span>67赞</span> <span>0评论</span></p>
				</li>
				<li class="btn-list">
					<p>删除</p>
				</li>
			</ul>
		</div>
		<div class="lis-box">
			<ul class="ul-list">
				<li><img src="../../build/logo.png"/></li>
				<li>
					<span>艺欣艺术,美术组、天使宝宝班300元学费任你砍！砍！砍！</span>
					<p class="text-p">￥300 <span>4870浏览</span> <span>67赞</span> <span>0评论</span></p>
				</li>
				<li class="btn-list">
					<p>删除</p>
				</li>
			</ul>
		</div>
		<div class="lis-box">
			<ul class="ul-list">
				<li><img src="../../build/logo.png"/></li>
				<li>
					<span>艺欣艺术,美术组、天使宝宝班300元学费任你砍！砍！砍！</span>
					<p class="text-p">￥300 <span>4870浏览</span> <span>67赞</span> <span>0评论</span></p>
				</li>
				<li class="btn-list">
					<p>删除</p>
				</li>
			</ul>
		</div>
		<div class="lis-box">
			<ul class="ul-list">
				<li><img src="../../build/logo.png"/></li>
				<li>
					<span>艺欣艺术,美术组、天使宝宝班300元学费任你砍！砍！砍！</span>
					<p class="text-p">￥300 <span>4870浏览</span> <span>67赞</span> <span>0评论</span></p>
				</li>
				<li class="btn-list">
					<p>删除</p>
				</li>
			</ul>
		</div>
		<div class="lis-box">
			<ul class="ul-list">
				<li><img src="../../build/logo.png"/></li>
				<li>
					<span>艺欣艺术,美术组、天使宝宝班300元学费任你砍！砍！砍！</span>
					<p class="text-p">￥300 <span>4870浏览</span> <span>67赞</span> <span>0评论</span></p>
				</li>
				<li class="btn-list">
					<p>删除</p>
				</li>
			</ul>
		</div>
		<div class="lis-box">
			<ul class="ul-list">
				<li><img src="../../build/logo.png"/></li>
				<li>
					<span>艺欣艺术,美术组、天使宝宝班300元学费任你砍！砍！砍！</span>
					<p class="text-p">￥300 <span>4870浏览</span> <span>67赞</span> <span>0评论</span></p>
				</li>
				<li class="btn-list">
					<p>删除</p>
				</li>
			</ul>
		</div>
		<div class="lis-box">
			<ul class="ul-list">
				<li><img src="../../build/logo.png"/></li>
				<li>
					<span>艺欣艺术,美术组、天使宝宝班300元学费任你砍！砍！砍！</span>
					<p class="text-p">￥300 <span>4870浏览</span> <span>67赞</span> <span>0评论</span></p>
				</li>
				<li class="btn-list">
					<p>删除</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		mounted(){
			this.axios.get('/lis').then(res=>{
				console.log(res)
			})
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