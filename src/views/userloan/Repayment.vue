<template>
  <div class="big-box">
    <h3>还款列表</h3>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="userLoanId" label="贷款编号"/>
      <el-table-column prop="userLoanDate" label="申贷日期"/>
      <el-table-column prop="" label="应还总额"/>
      <el-table-column prop="userLoanUnPaid" label="未还总额"/>
      <el-table-column prop="remainLoanMonth" label="剩余期数"/>
      <el-table-column prop="userLoanMonthPay" label="本期应还"/>
      <el-table-column prop="status" label="状态"/>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" @click="handleDelete(scope.userLoanId)">还款</el-button>
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

    还款期数：<el-input v-model="formData" placeholder="Please input" />

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script>
import {getRepaymentList} from '../../api/loan'
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
        remainLoanMonth: '',
        userLoanInterest: ''
      }],
      dialogVisible: false,
      centerDialogVisible: false,
      formData: {
        userLoanId: "胡明浩",
        userCardId: 23,
        userPayPwd: "青铜"
      }
    }
  },
  methods: {
    handleEdit() {
      this.dialogVisible = true
    },
    handleDelete() {
      this.centerDialogVisible = true
    },
    getList() {
      getRepaymentList().then((res) => {
        if (res.data.code === 0) {
          this.tableData = res.data.data;
        }
      })
    },
  }
  , mounted() {
    const data = {}
    getUserId(data);
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