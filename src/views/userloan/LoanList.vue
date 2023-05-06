<template>
  <div class="big-box">
    <div class="header">
      <h3>贷款申请列表</h3>
      <el-button @click="onSubmit" type="primary">申请贷款</el-button>
    </div>
    <el-form :model="searchParams" ref="queryForm" :inline="true" label-width="68px">
      <el-row>
        <el-row :span="6">
          <el-form-item label="贷款方式" prop="userLoanTypeTarget" class="grid-content">
            <el-select v-model="searchParams.userLoanTypeTarget" placeholder="请选择">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-row>
        <el-row :span="6">
          <el-form-item label="贷款编号" prop="userLoanId" class="grid-content">
            <el-input
                v-model="searchParams.userLoanId"
                type="text"
                placeholder="贷款编号"
            >
            </el-input>
          </el-form-item>
        </el-row>
        <el-row :span="6">
          <el-form-item label="申贷日期" class="grid-content">
            <el-date-picker
                v-model="searchParams.month"
                value-format="YYYY-MM-DD"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
        </el-row>
        <el-row :span="6">
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button type="primary" @click="reset">重置</el-button>
        </el-row>
      </el-row>
    </el-form>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="userLoanId" label="贷款编号"/>
      <el-table-column prop="userLoanDate" label="申贷日期"/>
      <el-table-column prop="userLoanAmount" label="贷款金额"/>
      <el-table-column prop="userLoanMonth" label="贷款期限"/>
      <el-table-column prop="userLoanTypeTarget" label="贷款方式"/>
      <el-table-column prop="userLoanRate" label="贷款利率"/>
      <el-table-column prop="userLoanInterest" label="贷款利息"/>
      <el-table-column prop="userLoanMonthPay" label="每期还款"/>
      <el-table-column prop="payMentStatus" label="状态"/>
    </el-table>
  </div>
</template>

<script>
import {getLoanList,getSiftlist} from '../../api/loan'
import {getUserId} from "../../api/users";

export default {
  data() {
    return {
      userId:"",
      tableData: [{
        userLoanId: '',
        userLoanDate: '',
        userLoanAmount: '',
        userLoanMonth: '',
        userLoanTypeTarget: '',
        userLoanMonthPay: '',
        userLoanInterest: '',
        userLoanRate: '',
        payMentStatus: '',
      }]
      , options: [
        {
          value: '商业贷款',
          label: '商业贷款',
        },
        {
          value: '公积金贷款',
          label: '公积金贷款',
        },
        {
          value: '消费者贷款',
          label: '消费者贷款',
        }
      ],
      searchParams: {
        userLoanTypeTarget: '',
        month: [],
        userLoanId: '',
        userLoanDateStart: '',
        userLoanDateEnd: ''
      },
      searchParam: {
        userLoanTypeTarget: '',
        userLoanId: '',
        userLoanDateStart: '',
        userLoanDateEnd: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$router.push('/loanform')
    },
    getList() {
      const data = {

      }
      getLoanList(data,this.userId).then((res) => {
          this.tableData = res.data.data;
          this.tableData.forEach(item =>{
            item.userLoanRate = item.loanRate.loanRateFigure
          })
          console.log(this.tableData)
      })
    },
    reset(){
      this.searchParams.userLoanId = ''
      this.searchParams.month = []
      this.searchParams.userLoanTypeTarget = ''
    },
    search(){
      if(this.searchParams.month){
        this.searchParams.userLoanDateStart = this.searchParams.month[0];
        this.searchParams.userLoanDateEnd = this.searchParams.month[1];
      }
      if(this.searchParams.userLoanTypeTarget){
        this.searchParam.userLoanTypeTarget = this.searchParams.userLoanTypeTarget;
      }
      if(this.searchParams.userLoanId){
       this.searchParam.userLoanId = this.searchParams.userLoanId;
      }
      if(this.searchParams.userLoanDateStart){
        this.searchParam.userLoanDateStart = this.searchParams.userLoanDateStart;
      }
      if(this.searchParams.userLoanDateEnd){
        this.searchParam.userLoanDateEnd = this.searchParams.userLoanDateEnd;
      }
      getSiftlist(this.searchParam,this.userId).then((res) => {
        console.log(res)
          res.data.forEach(item =>{
            item.userLoanRate = item.LoanRate.loanRateFigure
          })
          this.tableData = res.data.data;
      })
    }
  },
  mounted() {
    getUserId().then(res =>{
      if(res.data.data.userId){

        this.userId = res.data.data.userId
        console.log(this.userId)
        this.getList();
      }
    });

  }
}
</script>

<style scoped>

.big-box{
  padding: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

el-row {
  margin-bottom: 20px;
}

el-row:last-child {
  margin-bottom: 0;
}

el-col {
  border-radius: 4px;
}

grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>