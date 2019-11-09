<template>
  <div class="firstdemo">
      <el-form ref="form" :model="form" label-width="100px">
          <el-row type="flex" justify="center">
              <el-col :span="5">
                  <el-form-item label-width="30px">
                    <span><font color="pink" size="8">登录页面</font></span>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row type="flex" style='margin-left: -70px;' justify="center">
              <el-col :span="5">
                  <el-form-item label="账户：" prop="name">
                      <el-input v-model="form.name" size="small"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row type="flex" style='margin-left: -70px;' justify="center">
              <el-col :span="5">
                  <el-form-item label="密码：" prop="password">
                      <el-input v-model="form.password" size="small"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row type="flex" justify="center">
              <el-col :span="5">
                  <el-form-item>
                      <el-button type="primary" >登录</el-button>
                  </el-form-item>
              </el-col>
          </el-row>
      </el-form>
         
  </div>
</template>
 
<script>
export default {
  name: 'firstdemo',
  data () {
    return {
        form:{
            name:'',
            password:'',
        }
      
    }
  }
}
</script>
 

<style scoped lang='scss'>
 body{
 	background:url(../../build/logo.png);
 }
 .el-input{
 	width:260px;
 }
 .el-form-item__content{
 	width: 300px;
 }
</style>
