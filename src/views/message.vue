<template>
    <el-container>
        <el-header>
            <h2>个人资料</h2>
            <div class="user-info">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                <el-dropdown>
                    <span>
                        欢迎：小轩轩
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
            <div class="person-head">
                <el-button type="primary" icon="Edit" @click="handleDialog">修改</el-button>
            </div>
            <el-table :data="tableData" style="width: 100%" height="250">
                <el-table-column fixed prop="cardNumber" label="卡号" width="150" />
                <el-table-column prop="name" label="姓名" width="120" />
                <el-table-column prop="gender" label="性别" width="80" />
                <el-table-column prop="job" label="职业" width="120" />
                <el-table-column prop="phone" label="手机号" width="120" />
                <el-table-column prop="cardID" label="身份证号" width="200" />
                <el-table-column prop="address" label="地址" width="120" />
            </el-table>
            <el-dialog v-model="dialogVisible" title="提示" width="500">
                <el-form :model="tableData" :rules="rules" ref="formRef" label-width="90px" status-icon>
                    <el-form-item label="职业类型" prop="title">
                        <el-select style="width: 100%" v-model="tableData.job" placeholder="请选择职业类型">
                            <el-option label="学生" value="学生" />
                            <el-option label="教师" value="教师" />
                            <el-option label="工人" value="工人" />
                            <el-option label="程序员" value="程序员" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="地址" prop="info">
                        <el-input v-model="form.info" type="textarea" :rows="4" />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="onReset($refs.formRef)">重置</el-button>
                        <el-button type="primary" @click="onSubmit($refs.formRef)">添加</el-button>
                    </span>
                </template>
            </el-dialog>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    userId: 1,
                    bankCardId: '6225123456788',
                    userBirthday:"1998-08-28",
                    userRealName: '小轩轩',
                    userSex: '女',
                    userPhone: '13612341234',
                    userIdCard: '410102200010072389',
                    address: '辽宁省沈阳市',
                },
            ],
            dialogVisible: false,
            rules:{
                name: [
                    { required: true, message: '菜品名称不能为空', trigger: 'blur' },
                ],
                title: [
                    { required: true, message: '菜品分类不能为空', trigger: 'blur' },
                ],
                price: [
                    { required: true, message: '价格不能为空', trigger: 'blur' },
                ],
                info: [
                    { required: true, message: '描述不能为空', trigger: 'blur' },
                ],
            }
        }
    },
    components: {
    },
    created() {
    },
    methods: {
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
                    // console.log('submit!', form)
                    updateShop({ dynamictags: dynamictags.value, username: userTokenStore.username }).then((res) => {
                        if (res.data.errcode === 0) {
                            activeName.value = form.title
                            dialogVisible.value = false
                            this.$refs.formRef.resetFields()
                            ElMessage.success('添加成功')
                        }
                        else {
                            ElMessage.error('添加失败')
                        }
                    })
                } else {
                    console.log('error submit!', fields)
                }
            })
            this.dialogVisible = false
        },
        onReset(formEl) {
            formEl.resetFields()
        }
    }
}
</script>

<style lang="scss" scoped>
.el-header {
    background: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
}

.person-head {
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
    color: white;
}
</style>