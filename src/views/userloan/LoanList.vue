<template>
  <div>
    <div class="header">
      <h3>贷款申请列表</h3>
      <el-button @click="onSubmit" type="primary">申请贷款</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="userLoanId" label="贷款编号" />
      <el-table-column prop="currentDate" label="申贷日期" />
      <el-table-column prop="userLoanAmount" label="贷款金额" />
      <el-table-column prop="userLoanMonth" label="贷款期限" />
      <el-table-column prop="userLoanTypeTarget" label="贷款方式" />
      <el-table-column prop="userLoanRate" label="贷款利率" />
      <el-table-column prop="userLoanInterest" label="贷款利息" />
      <el-table-column prop="userLoanMonthPay" label="每期还款" />
      <el-table-column prop="status" label="状态" />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        userLoanId: '',
        currentDate: '',
        userLoanAmount: '',
        userLoanMonth: '',
        userLoanTypeTarget: '',
        userLoanMonthPay: '',
        userLoanInterest: '',
        userLoanRate: '',
        status: ''
      }]
    }
  },
  methods: {
    onSubmit(){this.$router.push('/loanform')}
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 10px;
}

</style>