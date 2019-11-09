var express= require('express')
var app=express()
var url=require('url')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/login',function(req,res){
	console.log(req.body)
	res.send({
		code:0,
		ml:'成功'
	})
})

app.get('/lis',function(req,res){
	res.send(
		[{
			name:'121',
			price:'300',
			list:'4870',
			type:1,
			zan:'7',
			pl:'2',
			index:1
		},{
			name:'111',
			price:'300',
			list:'4870',
			type:1,
			zan:'7',
			pl:'2',
			index:1
		},
		{
			name:'111',
			price:'300',
			list:'4870',
			type:1,
			zan:'7',
			pl:'2',
			index:1
		},{
			name:'111',
			price:'300',
			list:'4870',
			type:1,
			zan:'7',
			pl:'2',
			index:1
		}]
		)
})


app.listen(8082,function(){
	console.log('启动完成')
})