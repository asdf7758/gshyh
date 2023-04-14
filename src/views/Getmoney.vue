<template>
    <div class="common-layout">
        <el-container>
            <el-header class="tou">
                <h1><img class="logo" src="../img/logo7.png" alt=""></h1>
                <h2 class="aaa">个人网上银行</h2>
            </el-header>
            <el-main>
                <h3 class="new-user">个人取款</h3>
                <el-form ref="ruleFormRef" :model="form" label-width="120px" :rules="rules">
                    <el-form-item label="手机号:" prop="userPhone">
                        <el-input class="nav" v-model="form.userPhone" placeholder="请输入手机号" />
                        <span>请填写本人手机号</span>
                    </el-form-item>
                    <el-form-item label="真实姓名:" prop="userRealName">
                        <el-input class="nav" v-model="form.userRealName" placeholder="请输入真实姓名" />
                        <span>请填写真实姓名</span>
                    </el-form-item>
                    <el-form-item label="取款金额:" prop="userGetmoney">
                        <el-input class="nav" v-model="form.userGetmoney" placeholder="请输入取款金额" />
                        <span>请填写取款金额</span>
                    </el-form-item>
                    <el-form-item label="日期:" prop="userGetmoneyTime">
                        <el-date-picker v-model="form.userGetmoneyTime" type="datetime" />
                        <span>请填写日期</span>
                    </el-form-item>
                    <el-form-item class="denglu">
                        <el-button type="primary" @click="onSubmit($refs.ruleFormRef)">申请取款</el-button>
                    </el-form-item>
                </el-form>
            </el-main>
            <el-footer>
                <div class="box1">
                    <div class="shang">
                        <h3 class="qwe">使用指南</h3>
                        <a class="asd" href="#" @click="handleOperation">操作手册</a><a @click="handleProblem" class="asd"
                            href="#">常见问题</a><a class="asd" href="#" @click="handleSafety">安全手册</a>
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
import { money } from '../api/users'
import { values } from 'lodash'
export default {
    data() {
        return {
            form: {
                userPhone: '',
                userGetmoney: '',
                userGetmoneyTime: '',
                userRealName: ''
            },
            rules: {
                userGetmoney: [
                    { required: true, message: '不能为空', trigger: 'blur' },
                ],
                userGetmoneyTime: [
                    { required: true, message: '不能为空', trigger: 'blur' },
                ],
                userPhone: [
                    { required: true, message: '手机号不能为空', trigger: 'blur' },
                    { pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
                ],
                userRealName: [
                    { required: true, message: '真实姓名不能为空', trigger: 'blur' },
                    { pattern: /^(?:[\u4e00-\u9fa5·]{2,16})$/, message: '请输入中文', trigger: 'blur' }
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
                    money(this.form).then((res) => {
                        if (res.data.code === 1) {
                            // 添加到状态管理和本地存储中
                            ElMessage.success('注册成功')
                            this.$router.push('/')
                        }
                        else {
                            ElMessage.error('注册失败')
                        }
                    })
                } else {
                    console.log('error submit!', fields)
                }
            })
        },
        baoxian() {
            this.$router.push('/baoxian')
        },
        handleOperation() {
            this.$router.push('/operation')
        },
        handleProblem() {
            this.$router.push('/problem')
        },
        handleSafety() {
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
    background: url(../img/register.png) no-repeat 50%;
    background-size: cover;
}

.nav {
    /* display: inline-block; */
    width: 300px;
    margin-right: 30px;

}

.new-user {
    height: 1.875rem;
    margin-top: -10px;
    margin-left: 5.125rem;
    font-size: 1.5rem;
    line-height: 1.875rem;
    color: rgba(0, 0, 0, .85);
    text-align: left;
    letter-spacing: 0;
    font-weight: normal;
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



.el-form {
    display: inline-block;
    /* width: 100%; */
    /* height: 24.375rem; */
    padding: 0;
    /* margin: 5rem 1.875rem 3.125rem; */
    text-align: center;
    /* background: hsla(0, 0%, 100%, .8); */
    border-radius: 0.625rem;
    margin-top: 20px;

}

.el-form-item {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    /* margin-top: 40px; */
    margin-left: 550px;
    margin-top: 30px;
}

.el-form-item span {
    font-size: .75rem;
    margin-left: -1.375rem;
    color: rgba(0, 0, 0, .25);
}

.denglu {
    width: 100%;
    /* background: wheat; */
    margin: 0 auto;
    margin-top: 30px;
    margin-left: 250px;
}

.el-button {
    width: 170px;
    margin: auto;
    margin-left: 370px;
    margin-bottom: 20px;
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

.box2-2 img {
    display: block;
    width: 214px;
    height: 145px;
    margin-top: 73px;
}

.box2-2:hover img {
    cursor: pointer;
    border: 2px solid #ccc;

}

.tou span {
    margin-left: 670px;
    color: rgba(0, 0, 0, .65);
}

.tou span:hover {
    color: cornflowerblue;
    cursor: pointer;
}
</style>