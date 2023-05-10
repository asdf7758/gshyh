<template>
  <div class="big-box">

    <h3>贷款申请表    </h3>
    <p class="prompt-language">* 请真实填写以下信息，我行将根据您提供的信息对您的贷款申请业务进行审核</p>
    <hr class="break-up">
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px"
             label-position="right">
      <el-row type="flex" justify="start" align="top">
        <el-col :span="8">
          <el-form-item label="贷款金额" prop="userLoanAmount">
            <el-input v-model="formData.userLoanAmount" placeholder="请输入贷款金额 单位：元" clearable
                      :style="{width: '100%'}" type="number">
              <template #append>元</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="贷款方式" prop="userLoanTypeTarget">
            <el-select v-model="formData.userLoanTypeTarget" placeholder="请选择贷款方式" clearable
                       :style="{width: '100%'}">
              <el-option v-for="(item, index) in userLoanTypeTargetOptions" :key="index" :label="item.label"
                         :value="item.value" :disabled="item.disabled"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="贷款期限" prop="userLoanMonth">
            <el-select v-model="formData.userLoanMonth" placeholder="请选择贷款期限" clearable
                       :style="{width: '100%'}" :disabled="monthDisable">
              <el-option v-for="(item, index) in userLoanMonthOptions" :key="index" :label="item.label"
                         :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="start" align="top">
        <el-col :span="8">
          <el-form-item label="贷款日期" prop="userLoanDate">
            <el-date-picker v-model="formData.userLoanDate" :style="{width: '100%'}" placeholder="请选择贷款日期"
                            clearable></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="还款方式" prop="repaymentType">
            <el-input v-model="formData.repaymentType" placeholder="请输入还款方式" :disabled='true' clearable
                      :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="月收入" prop="userlncome">
            <el-input v-model="formData.userlncome" placeholder="请输入月收入" clearable :style="{width: '100%'}" type="number">
              <template #append>元</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
        <el-col :span="16">
          <el-form-item label="工作单位" prop="userWork">
            <el-input v-model="formData.userWork" placeholder="请输入工作单位" clearable :style="{width: '100%'}">
            </el-input>
          </el-form-item>
        </el-col>
      <el-row type="flex" justify="start" align="top">
        <el-col :span="12">
          <el-form-item prop="calculate">
            <el-button type="primary" size="medium" @click="calculate"> 计算贷款信息 </el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="贷款利率" prop="userLoanRate">
            <el-input v-model="formData.userLoanRate" placeholder="请输入贷款利率" :disabled='true' clearable
                      :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="每期还款" prop="userLoanMonthPay">
            <el-input v-model="formData.userLoanMonthPay" type="Number" placeholder="请输入月供" :disabled='true' clearable
                      :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="贷款利息" prop="userLoanInterest">
            <el-input v-model="formData.userLoanInterest" placeholder="请输入贷款利息" :disabled='true' clearable
                      :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm" >提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {calculate,addLoanInfo} from '../../api/loan'
import {getUserId} from "../../api/users";
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        userLoanAmount: '',
        userLoanMonth: '',
        userLoanDate: null,
        userLoanTypeTarget: '',
        repaymentType: "按月等额本息",
        userlncome: '',
        userWork: '',
        userLoanRate: '',
        userLoanMonthPay: '',
        userLoanInterest: '',
        userId: '',
        loanRateId: ''
      },
      rules: {
        userLoanAmount: [{
          required: true,
          message: '请输入贷款金额 单位：元',
          trigger: 'blur'
        }],
        userLoanMonth: [{
          required: true,
          message: '请输入贷款期限 单位：月',
          trigger: 'blur'
        }],
        userLoanDate: [{
          required: true,
          message: '请选择贷款日期',
          trigger: 'change'
        }],
        userLoanTypeTarget: [{
          required: true,
          message: '请选择贷款方式',
          trigger: 'change'
        }],
        repaymentType: [{
          required: true,
          message: '请输入还款方式',
          trigger: 'blur'
        }],
        userlncome: [{
          required: true,
          message: '请输入月收入',
          trigger: 'blur'
        }],
        userWork: [],
        userLoanRate: [{
          required: true,
          message: '请输入贷款利率',
          trigger: 'blur'
        }],
        userLoanMonthPay: [{
          required: true,
          message: '请输入月供',
          trigger: 'blur'
        }],
        userLoanInterest: [{
          required: true,
          message: '请输入贷款利息',
          trigger: 'blur'
        }],
      },
      userLoanTypeTargetOptions: [{
        "label": "商业贷款",
        "value": "商业贷款"
      }, {
        "label": "公积金贷款",
        "value": "公积金贷款"
      }, {
        "label": "消费者贷款",
        "value": "消费者贷款"
      }],
      userLoanMonthOptions: [],
      monthDisable: true
    }
  },
  computed: {},
  // watch: {
  //   // "formData.userLoanTypeTarget":{
  //   //   handler(val){
  //   //     if(val){
  //   //       this.monthDisable = false;
  //   //     }
  //   //     immediate:true;
  //   //   },
  //   //
  //   // }
  //
  // },
  watch: {
    ["formData.userLoanTypeTarget"]: {
      handler(val) {
        // ...
        // debugger
        if (val){
          this.monthDisable = false;
          if(val === "消费者贷款"){
            this.userLoanMonthOptions = [{
              "label": "6",
              "value": "6"
            }, {
              "label": "18",
              "value": "18"
            }, {
              "label": "36",
              "value": "36"
            }, {
              "label": "37",
              "value": "37"
            }]
          }
          if(val === "商业贷款" || val === '公积金贷款'){
            this.userLoanMonthOptions = [{
              "label": "120",
              "value": "120"
            }, {
              "label": "240",
              "value": "240"
            }, {
              "label": "241",
              "value": "241"
            }]
          }
        }else {
          this.monthDisable = true;
          this.userLoanMonthOptions = [];
        }

      },
      deep: true,
      immediate: true
    }
  },
  created() {},
  mounted() {
    getUserId().then(res =>{
      if(res.data.data.userId){
        this.formData.userId = res.data.data.userId
        console.log(this.formData.userId)
      }
    });
  },
  methods: {
    calculate(){
      this.formData.userLoanMonth =  Number(this.formData.userLoanMonth);
      calculate(this.formData).then((res) => {
        if (res.data.code === 0) {
          // debugger
          // 贷款利息
          this.formData.userLoanInterest = res.data.data.userLoanInterest;
          // 每期还款
          this.formData.userLoanMonthPay = res.data.data.userLoanMonthPay;
          // 贷款利率
          this.formData.userLoanRate = res.data.data.loanRate.loanRateFigure;
          this.formData.loanRateId = res.data.data.loanRate.loanRateId
          this.$message.success("计算成功");

        }else if(res.data.code === -1){
          this.$message.warning(res.data.msg);
        }
      })
    },
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
        addLoanInfo(this.formData).then(()=>{
          this.$message.success("提交成功");
          this.$router.push('/loanlist');
        }).catch((e)=>{
          this.$message.error(e);
        })
      })
    },
    resetForm() {
      this.$refs['elFxorm'].resetFields()
    },
    handlerepayment(){
      this.$router.push('/repayment')
    }
  }
}

</script>
<style scoped>
.big-box {
  padding: 0 20px 20px 20px;
}
.prompt-language {
  color: red;
}
.break-up{
  margin-bottom: 30px;
}
:deep input::-webkit-outer-spin-button,
:deep input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
:deep input[type='number'] {
  -moz-appearance: textfield !important;
}
</style>
