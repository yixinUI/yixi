let express = require('express');
let app = express();
let url = require('url');
let body = require('body-parser');
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});
//解码
app.use(body.urlencoded({
	extended: false
}))
app.use(body.json())
//登录
app.post('/login', function(req, res) {
	if(req.body.name == '123' && req.body.pass == 'aaa'){
		res.send({
			code: 0,
			msg: '登录成功000',
		})
	}else{
		res.send({
			code: 1,
			msg: '登录失败111',
		})
	}
})
//订单接口
app.get('/dingdan', function(req, res) {
	res.send({
		code: 0,
		msg: '请求成功',
		listArr:[
					{
						name:'订单一号',
						count:32,
						price:12,
						img:'./static/img2/1.png',
						types:'0'
					},{
						name:'订单二号',
						count:322,
						price:122,
						img:'./static/img2/2.png',
						types:'1'
					},{
						name:'订单三号',
						count:42,
						price:1,
						img:'./static/img2/3.png',
						types:'2'
					},{
						name:'订单四号',
						count:332,
						price:82,
						img:'./static/img2/4.png',
						types:'3'
					},{
						name:'订单五号',
						count:111,
						price:122,
						img:'./static/img2/5.png',
						types:'0'
					},{
						name:'订单六号',
						count:302,
						price:82,
						img:'./static/img2/1.jpg',
						types:'1'
					},{
						name:'订单七号',
						count:42,
						price:452,
						img:'./static/img2/2.jpg',
						types:'2'
					},{
						name:'订单八号',
						count:100,
						price:1022,
						img:'./static/img2/2.jpg',
						types:'3'
					},{
						name:'订单九号',
						count:222,
						price:2,
						img:'./static/img2/4.jpg',
						types:'0'
					}
				]
	})
})
//新建/删除订单接口
app.post('/dingdan',function(req,res){
	console.log(req.body)
	if(req.body instanceof Array){
		res.send({
			code:0,
			msg:'删除成功!!!',
			index:req.body[0]
		})
	}else if(req.body instanceof Object){
		let obj = {
			name:req.body.name,
			count:req.body.count,
			price:req.body.price
		}
		res.send({
			code:0,
			msg:'添加成功!!!',
			obj
		})
	}
})

//地址接口
app.get('/address',function(req,res){
	res.send({
		code:0,
		msg:'获取成功',
		listArr:[
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
				]
	})
})
//删除添加地址信息
app.post('/address',function(req,res){
	if(req.body instanceof Array){
		res.send({
			code:0,
			msg:'删除成功!!!',
			index:req.body[0]
		})
	}else if(req.body instanceof Object){
		res.send({
			code:0,
			msg:'添加成功!!!',
			obj:req.body
		})
	}
})

//店铺图片
app.get('/dimg',function(req,res){
	res.send({
		code:0,
		msg:'请求成功',
		listArr:[
				'./static/img/1.jpg',
				'./static/img/2.jpg',
				'./static/img/3.jpg',
				'./static/img/4.jpg',
				'./static/img/5.jpg',
				'./static/img/1.jpg',
				'./static/img/2.jpg',
				'./static/img/3.jpg',
				'./static/img/4.jpg',
				'./static/img/5.jpg',
				'./static/img/1.jpg',
				'./static/img/2.jpg',
				'./static/img/3.jpg',
				'./static/img/4.jpg',
				'./static/img/5.jpg',
			]
	})
})






app.listen(8083, function() {
	console.log('开启服务成功')
}) 