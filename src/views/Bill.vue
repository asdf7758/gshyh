<template>
    <div>
        <el-button @click="centerDialogVisible = true" type="primary">
            选取时间
        </el-button>
        <el-button @click="category = true" type="primary">
            选取类型
        </el-button>
        <el-button @click="money = true" type="primary">
            金额区间
        </el-button>
        <el-dropdown @command="handleCommand" style="float: right;">
            <span class="el-dropdown-link">
                Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item command="a">收支明细</el-dropdown-item>
                    <el-dropdown-item command="b">快捷筛选</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        
        <el-dialog v-model="centerDialogVisible" title="时间" width="40%" style="margin-top: 10%;">
            <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="月份选择" name="first">
                    <div class="demo-date-picker">
                        <div class="block">
                            <span class="demonstration">Month</span>
                            <el-date-picker v-model="value1" type="month" placeholder="选择月份" format="YYYY/MM"
                                value-format="YYYYMM" />
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="自定义" name="second">
                    <div>
                        <p>交易时间</p>
                        <el-button @click="lastMonth">上月</el-button>
                        <el-button @click="lastThreeMonths">近三月</el-button>
                        <el-button @click="lastYear">近一年</el-button>
                    </div>
                    <div class="demo-date-picker">
                        <span class="demonstration" style="margin-top: 10px;">自定义</span>
                        <div class="block" style="margin-left: 0;">
                            <el-date-picker v-model="value2" type="daterange" unlink-panels range-separator="To"
                                start-placeholder="Start date" end-placeholder="End date" format="YYYY/MM/DD"
                                value-format="YYYYMMDD" />
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
            <template #footer>
                <span class="dialog-footer">
                    <!-- centerDialogVisible = false -->
                    <el-button @click="centerDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="handleTime">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>


        <el-dialog v-model="category" title="类型" width="30%" align-center>

            <el-tabs v-model="typeName" class="demo-tabs">
                <el-tab-pane label="收入" name="1">
                    <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全部收入</el-checkbox>
                    {{ checkedIncome }}
                    <el-checkbox-group v-model="checkedIncome" @change="handleCheckedIncomeChange">
                        <el-checkbox v-for="income in incomes" :key="income.type" :label="income.type">{{
                            income.title
                        }}</el-checkbox>
                    </el-checkbox-group>
                </el-tab-pane>
                <el-tab-pane label="支出" name="0">
                    <el-checkbox v-model="spendAll" @change="handleSpendAllChange">全部支出</el-checkbox>
                    <el-checkbox-group v-model="checkedSpends" @change="handleCheckedSpendsChange">
                        <el-checkbox v-for="spend in spends" :key="spend.type" :label="spend.type">{{
                            spend.title
                        }}</el-checkbox>
                    </el-checkbox-group>
                </el-tab-pane>
            </el-tabs>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="category = false">Cancel</el-button>
                    <el-button type="primary" @click="handleType">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>

        <el-dialog v-model="money" title="提示" width="500">
            <el-form :model="muchMoney" :rules="rules" ref="formRef" label-width="90px" status-icon>
                <el-form-item label="最低金额" prop="minMoney">
                    <el-input v-model="muchMoney.minMoney" @input="handleSmall(muchMoney.minMoney)" />
                    <span style="color: red;">{{ smallDialog }}</span>
                </el-form-item>
                <el-form-item label="最高金额" prop="maxMoney">
                    <el-input v-model="muchMoney.maxMoney" @input="handleBig(muchMoney.maxMoney)" />
                    <span style="color: red;">{{ bigDialog }}</span>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="onReset($refs.formRef)">重置</el-button>
                    <el-button type="primary" @click="onSubmit($refs.formRef)">确定</el-button>
                </span>
            </template>
        </el-dialog>
        <el-table :data="tablePageData" border stripe style="width: 100%">
            <el-table-column prop="billBalance" label="账单余额记录" />
            <el-table-column prop="billDate" label="交易时间" />
            <el-table-column prop="billFlag" label="消费类型" />
            <el-table-column prop="billId" label="账单号" />
            <el-table-column prop="billIncome" label="收入" />
            <el-table-column prop="billMemo" label="交易信息" />
            <el-table-column prop="billMoney" label="交易金额" />
            <el-table-column prop="billPay" label="支出" />
        </el-table>
    </div>
</template>

<script>
import { sendBill, sendBillTotal } from '../api/person'
import _ from "lodash"//导入整个lodash库
export default {
    data() {
        return {
            userId:'1',
            centerDialogVisible: false,
            category: false,
            activeName: 'second',
            command:'',
            value1: '',
            value2: '',
            dateFlag: '0',
            dayStart: '0',
            dayEnd: '0',
            monthStart: '0',
            monthEnd: '0',
            yearStart: '0',
            yearEnd: '0',
            checkedIncome: [20, 21, 22],
            incomes: [
                { type: 20, title: '薪酬' },
                { type: 22, title: '其他收入' },
                { type: 21, title: '贷款' },
            ],
            checkAll: true,
            checkedSpends: [10, 11, 12, 13, 14],
            spends: [
                { type: 10, title: '餐饮' },
                { type: 11, title: '购物' },
                { type: 12, title: '交通' },
                { type: 13, title: '其他支出' },
                { type: 14, title: '还款' },
            ],
            spendAll: true,
            money: false,
            billIncome: [0],
            billPay: [0],
            billFlag: [0],
            typeName: '1',
            rules: {
            },
            muchMoney: {
                minMoney: '0',
                maxMoney: '0'
            },
            smallDialog: '',
            bigDialog: '',
            tablePageData: [],
            billFlagList:[0],
            billPayList:[0],
            billIncomeList:[0],
        }
    },
    methods: {
        handleClick() {
        },
        handleCheckAllChange(val) {
            console.log(this.checkedIncome);
            this.checkedIncome = val ? this.incomes : []
        },
        handleCheckedIncomeChange(value) {
            const checkedCount = value.length
            this.checkAll = checkedCount === this.incomes.length
        },
        handleSpendAllChange(val) {
            this.checkedSpends = val ? this.spends : []
        },
        handleCheckedSpendsChange(value) {
            const checkedCount = value.length
            this.spendAll = checkedCount === this.spends.length
        },
        handleSmall(smallNumber) {
            if (parseInt(smallNumber) > 0 && parseInt(smallNumber) != NaN) {
                this.muchMoney.minMoney = parseInt(smallNumber)
                this.smallDialog = ''
            } else {
                this.smallDialog = '输入错误，请重新输入'
            }

        },
        handleBig(bigNumber) {
            if (parseInt(bigNumber) > 0 && parseInt(bigNumber) != NaN && parseInt(bigNumber) > parseInt(this.muchMoney.minMoney)) {
                this.muchMoney.maxMoney = parseInt(bigNumber)
                this.bigDialog = ''
            } else {
                this.bigDialog = '输入错误，请重新输入'
            }

        },/* 
        handConfirm() {
            if (this.monthStart) {
                this.monthStart = this.monthStart < 9 ? '' + 0 + this.monthStart : (this.monthStart).toString
            }
            if (this.monthEnd!='0') {
                this.monthEnd = this.monthEnd < 9 ? '' + 0 + this.monthEnd : (this.monthEnd).toString
            }
            if(this.monthEnd=='0'){
                this.monthEnd='0'
            }
            console.log(this.yearStart, this.monthStart, this.yearEnd, this.monthEnd);

        }, */
        lastMonth() {
            this.dateFlag = '20'
            this.dayStart = '0'
            this.dayEnd = '0'
            this.monthEnd = '0'
            this.yearEnd = '0'
            var d = new Date()
            this.yearStart = (d.getFullYear()).toString()
            this.monthStart = ((d.getMonth() + 1) - 1)
        },
        lastThreeMonths() {
            this.dateFlag = '21'
            this.dayStart = '0'
            this.dayEnd = '0'
            this.monthEnd = '0'
            this.yearEnd = '0'
            var d = new Date()
            this.yearStart = (d.getFullYear()).toString()
            this.monthStart = ((d.getMonth() + 1) - 3)
            console.log(this.yearStart, this.monthStart);

        },
        lastYear() {
            this.dateFlag = '22'
            this.monthStart = '0'
            this.dayStart = '0'
            this.dayEnd = '0'
            this.monthEnd = '0'
            this.yearEnd = '0'
            var d = new Date()
            this.yearStart = (d.getFullYear()).toString()
        },
        handleTime() {
            this.centerDialogVisible = false
            if (this.activeName == 'first') {
                console.log(this.activeName);
                console.log(this.value1);
                this.dateFlag = '10'
                this.value2 = ''
                if (this.value1) {
                    console.log(this.value1);
                    this.dayStart = '0'
                    this.dayEnd = '0'
                    this.monthEnd = '0'
                    this.yearEnd = '0'
                    this.yearStart = (parseInt(((this.value1 - 0) / 100))).toString()
                    this.monthStart = ((this.value1 - 0) % 100)
                    console.log(this.yearStart, this.monthStart);
                }
                return
            } else if (this.activeName == 'second') {
                console.log(this.activeName);
                this.value1 = ''
                if (this.value2) {
                    console.log(this.value2, this.value2[0]);
                    this.dayStart = ((this.value2[0] - 0) % 100).toString()
                    console.log("this.dayStart",this.dayStart);
                    this.dayEnd = ((this.value2[1] - 0) % 100).toString()
                    this.monthEnd = parseInt((this.value2[1] - 0) % 10000/100)
                    this.yearEnd = (parseInt(((this.value2[1] - 0) / 10000))).toString()
                    this.yearStart = (parseInt(((this.value2[0] - 0) / 10000))).toString()
                    this.monthStart = parseInt((this.value2[0] - 0) % 10000/100)
                    this.dateFlag=30
                    console.log(this.yearStart, this.monthStart, this.yearEnd, this.monthEnd,this.dayStart,this.dayEnd);
                }
            }

            // console.log(parseInt(this.value1))
            // console.log(this.value2);
            // console.log(this.dateFlag);
        },
        handleType() {
            this.category = false
            if(_.isEqual(this.checkedIncome,[20, 21, 22])&&_.isEqual(this.checkedSpends,[10, 11, 12, 13, 14])){
                this.billFlag.splice(0, this.billFlag.length, 1,2)
                
            }else if(_.isEqual(this.checkedIncome,[20, 21, 22])&&!(_.isEqual(this.checkedSpends,[10, 11, 12, 13, 14]))){
                this.billFlag.splice(0, this.billFlag.length, 1)
            }else if(!(_.isEqual(this.checkedIncome,[20, 21, 22]))&&_.isEqual(this.checkedSpends,[10, 11, 12, 13, 14])){
                this.billFlag.splice(0, this.billFlag.length, 2)
            }
            // console.log(this.billFlag,this.checkedIncome,this.checkedSpends);
        },
        //ajax请求
        handleCommand(command){
            // bill/userBill/一堆参数
            
            if (this.monthStart) {
                this.monthStart = this.monthStart < 9 ? '' + 0 + this.monthStart : (this.monthStart).toString
            }
            if (this.monthEnd!='0') {
                this.monthEnd = this.monthEnd < 9 ? '' + 0 + this.monthEnd : (this.monthEnd).toString
            }
            if(this.dayStart){
                this.dayStart = this.dayStart < 9 ? '' + 0 + this.dayStart : this.dayStart
            }
            if (this.dayEnd!='0') {
                this.dayEnd = this.dayEnd < 9 ? '' + 0 + this.dayEnd : this.dayEnd
            }
            // if(this.checkedIncome==[20, 21, 22]&&this.checkedIncome==[10, 11, 12, 13, 14]){
            //     this.billFlag.splice(0, this.billFlag.length, 1,2)
            //     console.log(this.billFlag.splice(0, this.billFlag.length, 1,2));
            //     // this.billFlag=[1,2]
            // }else if(this.checkedIncome==[20, 21, 22]&&this.checkedSpends!=[10, 11, 12, 13, 14]){
            //     this.billFlag.splice(0, this.billFlag.length, 1)
            // }else if(this.checkedIncome!=[20, 21, 22]&&this.checkedSpends==[10, 11, 12, 13, 14]){
            //     this.billFlag.splice(0, this.billFlag.length, 2)
            // }
            console.log(this.yearStart, this.monthStart, this.yearEnd, this.monthEnd);
            if(command === "a"){
                console.log(this.monthEnd,this.dayEnd)
                const all = `${this.userId}/${this.billFlag}/${this.dateFlag}/${this.yearStart}/${this.monthStart}/${this.dayStart}/${this.yearEnd}/${this.monthEnd}/${this.dayEnd}`
                console.log(all);
                sendBill(all).then((res)=>{
                    console.log(res.data.data);
                    this.tablePageData=res.data.data
                })
            }
            if(command=='b'){
                this.billFlagList=this.billFlag
                this.billPayList=this.checkedSpends
                this.billIncomeList=this.checkedIncome
                const all = `${this.userId}/${this.billFlagList}/${this.billPayList}/${this.billIncomeList}/${this.muchMoney.minMoney}/${this.muchMoney.maxMoney}`
                console.log(all);
                sendBillTotal(all).then((res)=>{
                    console.log(res.data.data);
                    this.tablePageData=res.data.data
                })
            }
        },
        onReset(formEl) {
            console.log(this.form)
            formEl.resetFields()
        },
        onSubmit(formEl) {
            if (!formEl) return
            formEl.validate((valid, fields) => {
                if (valid) {
                    console.log('submit!')
                    // updateShop({ dynamictags: dynamictags.value, username: userTokenStore.username }).then((res) => {
                    //     if (res.data.errcode === 0) {
                    //         activeName.value = form.title
                    //         dialogVisible.value = false
                    //         this.$refs.formRef.resetFields()
                    //         ElMessage.success('添加成功')
                    //     }
                    //     else {
                    //         ElMessage.error('添加失败')
                    //     }
                    // })
                    console.log(this.muchMoney.minMoney);
                } else {
                    console.log('error submit!', fields)
                }
            })
            this.money = false
        },
        
    },
    mounted() {
        // 等DOM加载后触发的时机
        const all = `${this.userId}/${this.billFlag}/${this.dateFlag}/${this.yearStart}/${this.monthStart}/${this.dayStart}/${this.yearEnd}/${this.monthEnd}/${this.dayEnd}`
                console.log(all);
                sendBill(all).then((res)=>{
                    console.log(res.data.data);
                    this.tablePageData=res.data.data
                })
    },
    // created() {
    //     console.log(1111);
    //     console.log(this.$store.state.userToken.token);
    //     getPerson({ s: this.$store.state.userToken.token }).then((res) => {
    //         console.log(res);
    //         this.userId = res.data.data.userId

    //     })
    // }
}
</script>

<style lang="scss" scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}

.demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}

.demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    flex: 1;
}

.demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}

.buyTime p {
    color: lightgray;
}

.el-table {
    margin-top: 10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  outline: none;
}
</style>