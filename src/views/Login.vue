<template>
  <div class="common-layout">
    <el-container>
      <el-header class="tou">
        <h1><img class="logo" src="../img/logo7.png" alt=""></h1>
        <h2 class="aaa">个人网上银行</h2>
      </el-header>
      <el-main>
        <el-form ref="ruleFormRef" :model="form" label-width="120px" :rules="rules">
          <h3>登录页面</h3>
          <el-form-item prop="userName">
            <el-input v-model="form.userName" placeholder="用户名" />
          </el-form-item>
          <el-form-item prop="userPwd">
            <el-input v-model="form.userPwd" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item class="denglu">
            <el-button type="primary" @click="onSubmit($refs.ruleFormRef)">登录</el-button>
          </el-form-item>
          <div class="box"> <el-checkbox v-model="checked1" label="记住用户名" size="large" /><a href="#"
              class="forget-password">忘记密码？</a></div>
          <div class="register">未注册个人网银?<a @click="toRegister" class="register1">立即注册</a></div>
        </el-form>
      </el-main>
      <el-footer>
        <div class="box1">
          <div class="shang">
            <h3 class="qwe">使用指南</h3>
            <a class="asd" href="#" @click="handleOperation" >操作手册</a><a @click="handleProblem" class="asd" href="#">常见问题</a><a class="asd" href="#" @click="handleSafety" >安全手册</a>
          </div>
          <div class="xia" style="width: 100%;">
            <h3 class="qwe">注意事项</h3>
            <ul style="line-height: 1.25rem;font-size: 5px;">
              <li>建议使用1200*800分辨率浏览，低于1200*800的分辨率，部分功能将无法使用</li>
              <li>请您尽量不要在网吧等公共场所使用网上银行系统</li>
              <li>您登录网上银行系统后，如需退出，请点击“退出网银”</li>
              <li>本网站支持IPV6</li>
            </ul>
          </div>
        </div>
        <div class="box2">
          <div class="box2-1">
            <img src="../img/下载.png" alt="">
            <span>400-899-7770</span>
          </div>
          <div @click="baoxian" class="box2-2">
            <img src="../img/ckbx.png" alt="">
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import { login } from '../api/users'
import { values } from 'lodash'
export default {
  data() {
    return {
      form: {
        userName: '',
        userPwd: ''
      },
      rules: {
        userName: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          // { pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        userPwd: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    onSubmit(formEl) {
      if (!formEl) return
      formEl.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
          login(this.form).then((res) => {
            console.log(res);
            if (res.data.code === 0) {
              // 添加到状态管理和本地存储中
              // userTokenStore.updateToken(res.data.token)
              console.log(res.data.data);
              ElMessage.success('登录成功')
              this.$router.push('/')
              // localStorage.setItem('token',auth )
               this.$store.commit('userToken/updateToken',res.data.data)
            }
            else {
              ElMessage.error('登录失败')
            }
          })
        } else {
          console.log('error submit!', fields)
        }
      })

    },
    toRegister() {
      this.$router.push('/register')
    },
    baoxian(){
      this.$router.push('/baoxian')
    },
    handleOperation(){
      this.$router.push('/operation')
    },
    handleProblem(){
      this.$router.push('/problem')
    },
    handleSafety(){
      this.$router.push('/safety')
    }
  }
}
</script>

<style lang="scss" scoped>
.tou {
  width: 1200px;
  height: 100px;
  /* background: darkcyan; */
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.el-main {
  width: 100%px;
  height: 500px;
  background: url(../img/banner.png) no-repeat 50%;
  background-size: cover;
}

.el-footer {
  width: 1200px;
  height: calc(100vh - 600px);
  margin: 0 auto;
  /* background: red; */
  display: flex;
  justify-content: space-between;

}

.logo {
  float: left;
  width: 150px;
  height: 50px;
}

.aaa {
  float: left;
  margin-left: 10px;
  border-left: 2px solid black;
  padding-left: 50px;
  font-weight: normal;
}

.el-main {
  overflow: hidden;
}
 
.el-form {
  display: inline-block;
  width: 24.375rem;
  height: 24.375rem;
  padding: 0;
  /* margin: 5rem 1.875rem 3.125rem; */
  text-align: center;
  background: hsla(0, 0%, 100%, .8);
  border-radius: 0.625rem;
  margin-left: 850px;
  margin-top: 50px;

}

.el-form-item {
  margin: 10px;
  margin-top: 40px;
  margin-right: 50px;
  margin-left: -70px;
}

.denglu {
  width: 100%;
  /* background: wheat; */
  margin: 0 auto;
  margin-top: 30px;
}

.el-button {
  width: 170px;
  margin: auto;
  margin-right: 120px;
}

.box {
  width: 300px;
  margin: 0 auto;
  height: 30px;
  /* background: darkcyan; */
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  margin-top: 20px;
}

.forget-password {
  text-decoration: none;
  color: rgba(0, 0, 0, .45);
}

.forget-password:hover {
  color: cornflowerblue;
}

.register {
  margin-top: 10px;
  color: rgba(0, 0, 0, .45);
}

.register1 {
  margin-left: 10px;
  color: cornflowerblue;
  text-decoration: none;
}

.box1 {
  width: 100%;
  height: 100%;
  /* background: darkgray; */
}

.box2 {
  width: 100%;
  height: 100%;
  /* background: gold; */
  display: flex;
  justify-content: space-between;
}

.shang {
  width: 100%;
  display: flex;
  align-content: space-evenly;
}

.qwe {
  border-left: 5px solid red;
  padding-left: 10px;
}

.asd {
  margin: 20px;
  color: cornflowerblue;
  text-decoration: none;
}

.box2-2 {
  margin-top: 73px;
  width: 218px;
  height: 149px;
}

.box2-1 {
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
}

.box2-1 img {
  display: block;
  width: 80px;
  height: 64px;
  margin-right: 20px;
}

.box2-1 span {
  font-size: 2.1875rem;
  font-weight: bolder;
  color: #3f3a3a;
}

.box2-2:hover img {
  cursor: pointer;
  border: 2px solid #ccc;

}

.box2-2 img {
  display: block;
  width: 214px;
  height: 145px;

}</style>