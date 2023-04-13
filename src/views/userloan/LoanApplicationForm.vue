<template>
    <div class="formbox">
        <h3>申请贷款</h3>
        <el-form :model="form" label-width="120px">
            <el-form-item label="贷款金额">
                <el-input v-model="form.amount" placeholder="请输入贷款金额 单位：元" />
            </el-form-item>
            <el-form-item label="贷款期限">
                <el-input v-model="form.loanTime" placeholder="请输入贷款期限 单位：月" />
            </el-form-item>
            <el-form-item label="贷款方式">
                <el-select v-model="form.loanType" placeholder="请选择贷款方式">
                    <el-option label="商业贷款" value="商业贷款" />
                    <el-option label="公积金贷款" value="公积金贷款" />
                    <el-option label="消费者贷款" value="消费者贷款" />
                </el-select>
            </el-form-item>
            <el-form-item label="还款方式">
                <el-select v-model="form.repaymentType" placeholder="请选择还款方式">
                    <el-option label="按月等额本息" value="按月等额本息" />
                    <el-option label="按月等额本金" value="按月等额本金" />
                    <el-option label="按月付息一次还本" value="按月付息一次还本" />
                </el-select>
            </el-form-item>
            <el-form-item label="贷款利率">
                <el-input v-model="form.interestRate" disabled />
            </el-form-item>
            <el-form-item label="贷款利息">
                <el-input v-model="form.loanInterest" disabled />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交申请</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                amount: '',
                loanTime: '',
                loanType: '',
                repaymentType: '',
                interestRate: '',
                loanInterest: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$router.push('/submitsuccess')
           
        }
    }
}
</script>

<style scoped>
.el-form {
    width: 600px;
    border: 2px solid #ccc;
    padding: 30px;
    border-radius: 15px;

}

.el-form-item {
    width: 500px;
}

.formbox {
    width: 600px;
    margin: auto;
    margin-top: 70px;
}
</style>