<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div>

                    <img class="logo" src="../img/logo7.png" alt="" style="width: 118px;">
                    <h2 style="display: inline-block; vertical-align:top">个人信息</h2>

                </div>
                <div class="user-info">

                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    <el-dropdown>

                        <span>
                            欢迎：{{ tableData.userRealName }}
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>个人中心</el-dropdown-item>
                                <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-header>
            <el-main>
                <el-tabs v-model="tabActive" type="border-card" @tab-click="hangleBill">
                    <el-tab-pane label="个人信息" name="/message">
                        <el-descriptions title="银行用户信息" direction="vertical" :column="2" border>
                            <template #extra>
                                <el-button type="primary" icon="Edit" @click="handleDialog">修改个人信息</el-button>
                            </template>
                            <el-descriptions-item label="用户名">{{ tableData.userName }}</el-descriptions-item>
                            <el-descriptions-item label="密码">{{ tableData.userPwd }}</el-descriptions-item>
                            <el-descriptions-item label="手机号">{{ tableData.userPhone }}</el-descriptions-item>
                            <el-descriptions-item label="卡号">{{ tableData.bankCardId }}</el-descriptions-item>
                            <el-descriptions-item label="性别">{{ tableData.userSex }}</el-descriptions-item>
                            <el-descriptions-item label="身份证号">{{ tableData.userIdCard }}</el-descriptions-item>
                            <el-descriptions-item label="出生年月日">{{ tableData.userBirthday }}</el-descriptions-item>
                        </el-descriptions>
                        <el-dialog v-model="dialogVisible" title="提示" width="500">
                            <span class="perInfo">其他信息根据用户实名获取，如需更改，请拿身份证自行到银行办理</span>
                            <el-form :model="form" :rules="rules" ref="formRef" label-width="90px" status-icon>
                                <el-form-item label="用户名" prop="userName" >
                                    <el-input v-model="form.userName"  readonly />
                                </el-form-item>
                                <el-form-item label="真实姓名" prop="userRealName">
                                    <el-input v-model="form.userRealName" readonly />
                                </el-form-item>
                                <el-form-item label="密码" prop="userPwd">
                                    <el-input v-model="form.userPwd" readonly />
                                </el-form-item>
                                <el-form-item label="手机号" prop="userPhone">
                                    <el-input v-model="form.userPhone" />
                                </el-form-item>
                                <el-form-item label="卡号" prop="bankCardId">
                                    <el-input v-model="form.bankCardId" readonly />
                                </el-form-item>
                                <el-form-item label="性别" prop="userSex">
                                    <el-input v-model="form.userSex" readonly />
                                </el-form-item>
                                <el-form-item label="身份证号" prop="userIdCard">
                                    <el-input v-model="form.userIdCard" readonly />
                                </el-form-item>
                                <el-form-item label="出生年月日" prop="userBirthday">
                                    <!-- <el-date-picker v-model="form.userBirthday" type="datetime" placeholder="选择时间"
                                        format="YYYY/MM/DD hh:mm:ss" value-format="YYYY-MM-DD h:m:s a" /> -->
                                        <el-input v-model="form.userBirthday" readonly />
                                </el-form-item>
                            </el-form>
                            <template #footer>
                                <span class="dialog-footer">
                                    <el-button @click="onReset($refs.formRef)">重置</el-button>
                                    <el-button type="primary" @click="onSubmit($refs.formRef)">添加</el-button>
                                </span>
                            </template>
                        </el-dialog>
                    </el-tab-pane>
                    <el-tab-pane label="账单" name="/message/bill">
                        <RouterView />
                    </el-tab-pane>
                    <!-- <el-tab-pane label="Role" name="Role">aaaa</el-tab-pane> -->
                </el-tabs>

            </el-main>
        </el-container>
    </div>
</template>

<script>
import { getPerson, updatePerson } from '../api/person'
export default {
    data() {
        return {
            tableData: [
                // {
                //     userId: 1,
                //     bankCardId: '6225123456788',
                //     userBirthday:"1998-08-28",
                //     userRealName: '小轩轩',
                //     userSex: '女',
                //     userPhone: '13612341234',
                //     userIdCard: '410102200010072389',
                //     address: '辽宁省沈阳市',
                // },
            ],
            form: [
                {
                    userId: '',
                    userPwd: '',
                    userName: '',
                    userRealName: '',
                    userPhone: '',
                    bankCardId: '',
                    userSex: '',
                    userIdCard: '',
                    userBirthday: ''
                }
            ],
            dialogVisible: false,
            rules: {
            },
            tabActive: this.$route.path,

        }
    },
    components: {
    },
    created() {
    },
    methods: {
        onReset(formEl) {
            console.log(this.form)
            formEl.resetFields()
        },
        handleLogout() {
            // location.href = '/login'
        },
        handleDialog() {
            this.dialogVisible = true
        },
        onSubmit(formEl) {
            if (!formEl) return
            formEl.validate((valid, fields) => {
                if (valid) {
                    console.log(this.form)
                    updatePerson({
                        "userId": this.form.userId, "userName": this.form.userName,
                        "userRealName": this.form.userRealName, "userPwd": this.form.userPwd, "userPhone": this.form.userPhone, "bankCardId": this.form.bankCardId, "userSex": this.form.userSex, "userIdCard": this.form.userIdCard, "userBirthday": this.form.userBirthday
                    }).then((res) => {
                        console.log(res);
                        this.tableData = res.data.data
                        this.form = res.data.data
                    })
                } else {
                    console.log('error submit!', fields)
                }
            })
            this.dialogVisible = false
        },
        hangleBill(res) {
            this.$router.push(res.paneName)
            // localstorage.getItem
        }

    },
    created() {
        console.log(1111);

        console.log(this.$store.state.userToken.token);
        getPerson({ s: this.$store.state.userToken.token }).then((res) => {
            console.log(res);
            this.tableData = res.data.data
            this.form = res.data.data
            // console.log(res.data.data.userId);
        })
    }
}
</script>

<style lang="scss" scoped>
.el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.user-info {
    display: flex;
    align-items: center;
}

.user-info span {
    margin-left: 10px;
    cursor: pointer;
    outline: none;
}

.perInfo {
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
}

.el-main {
    width: 960px;
    margin: auto;
}

/* .person-head {
    display: flex;
    justify-content: right;
}

.user-info {
    display: flex;
    align-items: center;
}

.user-info span {
    margin-left: 10px;
    cursor: pointer;
    outline: none;
} */
</style>