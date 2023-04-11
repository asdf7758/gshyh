<template>
    <el-table :data="tableData" style="width: 100%" height="250">
        <el-table-column fixed prop="cardNumber" label="卡号" width="150" />
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="gender" label="性别" width="80" />
        <el-table-column prop="password" label="密码" width="120" />
        <el-table-column prop="phone" label="手机号" width="120" />
        <el-table-column prop="cardID" label="卡号" width="200" />
        <el-table-column prop="address" label="地址" width="120" />
    </el-table>
</template>

<script>
    export default {
        data(){
            return {
                tableData: [
                    {
                        cardNumber: '6225123456788',
                        name: '小轩轩',
                        gender:'女',
                        password: 'xiaoxuanxuan',
                        phone: '13612341234',
                        cardID:'410102200010072389',
                        address: '辽宁省沈阳市',
                    },
                ]
            }
        },
        components: {
        },
        created() {
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
.el-header {
  background: skyblue;
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
</style>