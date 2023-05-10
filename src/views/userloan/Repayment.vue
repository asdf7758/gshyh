<template>
  <div class="big-box">
    <h3>还款列表</h3>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="userLoanId" label="贷款编号"/>
      <el-table-column prop="userLoanDate" label="申贷日期"/>
      <el-table-column prop="userLoanUnPaid" label="未还总额"/>
      <el-table-column prop="userLoanMonthResidue" label="剩余期数"/>
      <el-table-column prop="userLoanMonthPay" label="本期应还"/>
      <el-table-column prop="payMentStatus" label="状态"/>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" @click="show(scope.row)">还款</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <el-dialog
      v-model="centerDialogVisible"
      title="还款"
      width="80%"
      align-center
  >
    本期应还：
    <el-input v-model="formData.userLoanMonthPay" disabled/>
    未还总额：
    <el-input v-model="formData.userLoanPay" disabled/>
    支付密码：
    <el-input v-model="formData.userPayPwd" placeholder="请输入密码"/>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="payload()">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script>
import {repaymentMoney, getLoanList} from '../../api/loan'
import {getUserId} from "../../api/users";

export default {
  data() {
    return {
      tableData: [{
        userLoanId: '',
        userLoanDate: '',
        userLoanAmount: '',
        userLoanUnPaid: '',
        userLoanMonthPay: '',
        status: '',
        amount: '',
        remainLoanMonth: '',
        userLoanInterest: ''
      }],
      dialogVisible: false,
      centerDialogVisible: false,
      formData: {
        userLoanId: "",
        userId: '',
        userCardId: "",
        userLoanPay: '',
        userPayPwd: ''
      },
    }
  },
  methods: {
    getList() {
      getLoanList({}, this.formData.userId).then((res) => {
        this.tableData = res.data.data;
      })
    },
    show(data) {
      this.centerDialogVisible = true
      this.formData.userLoanPay = data.userLoanUnPaid;
      this.formData.userLoanMonthPay = data.userLoanMonthPay;
      this.formData.userLoanId = data.userLoanId;
    },
    payload() {
      repaymentMoney(this.formData).then(
          res => {
            console.log(res)
            this.centerDialogVisible = false;
            this.$message.success(res.msg)
            this.getList();
          }
      )
    }
  }
  , mounted() {
    getUserId().then(res => {
      if (res.data.data.userId) {
        this.formData.userId = res.data.data.userId
        this.formData.bankCardId = res.data.data.bankCardId
        this.getList();
      }
    });
  }
}
</script>

<style scoped>
.big-box {
  padding: 20px;
}

.small-box {
  display: flex;
  flex-wrap: wrap;
}

.small-box p {
  width: 30%;
}
</style>