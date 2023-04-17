<template>
  <div class="big-box">
    <h3>还款列表</h3>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="userLoanId" label="贷款编号"/>
      <el-table-column prop="userLoanDate" label="申贷日期"/>
      <el-table-column prop="{{userLoanAmount + userLoanInterest}}" label="应还总额"/>
      <el-table-column prop="userLoanUnPaid" label="未还总额"/>
      <el-table-column prop="remainLoanMonth" label="剩余期数"/>
      <el-table-column prop="userLoanMonthPay" label="本期应还"/>
      <el-table-column prop="status" label="状态"/>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="handleEdit()">详情</el-button>
          <el-button type="primary" @click="handleDelete()">还款</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog
      v-model="dialogVisible"
      title="还款详情"
      width="60%"
  >
    <div class="small-box">
      <p>姓名：{{ userInfo.name }}</p>
      <p>年龄：{{ userInfo.age }}</p>
      <p>头衔：{{ userInfo.position }}</p>
    </div>
  </el-dialog>

</template>

<script>
import {getRepaymentList} from '../../api/loan'


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
      userInfo: {
        name: "胡明浩",
        age: 23,
        position: "青铜"
      }
    }
  },
  methods: {
    handleEdit() {
      this.dialogVisible = true
    },
    handleDelete() {
    },
    getList() {
      getRepaymentList().then((res) => {
        if (res.data.code === 0) {
          this.tableData = res.data.data;
        }
      })
    },

    mounted() {
      this.getList();
    }

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