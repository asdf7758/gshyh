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
        <el-button @click="handConfirm" type="primary" style="float: right;">
            确定选择
        </el-button>
        <el-dialog v-model="centerDialogVisible" title="时间" width="40%" style="margin-top: 10%;">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleTabTime">
                <el-tab-pane label="月份选择" name="first">
                    <div class="demo-date-picker">
                        <div class="block">
                            <span class="demonstration">Month</span>
                            <el-date-picker v-model="value1" type="month" placeholder="Pick a month" format="YYYY/MM"
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
                                value-format="YYYYMM" />
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

            <el-tabs v-model="typeName" class="demo-tabs" @tab-change="handleTabType">
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
                    <el-button type="primary" @click="category = false">
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
            <el-table-column prop="billData" label="交易时间" />
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
export default {
    data() {
        return {
            centerDialogVisible: false,
            category: false,
            activeName: 'second',
            value1: '',
            value2: '',
            dateFlag: '',
            dayStart: '',
            dayEnd: '',
            monthStart: '',
            monthEnd: '',
            yearStart: '',
            yearEnd: '',
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
            billFlag: [],
            typeName: '1',
            rules: {
            },
            muchMoney: {
                minMoney: '',
                maxMoney: ''
            },
            smallDialog: '',
            bigDialog: '',
            tablePageData: [
                {
                    billBalance: '+500',
                    billData: '2016-05-03 12:30',
                    billFlag: '1-支出',
                    billId: 1,
                    billIncome: '20',
                    billMemo: '大连设计城9-1',
                    billMoney: '4500',
                    billPay: 10
                },
                {
                    billBalance: '+500',
                    billData: '2016-05-03 12:30',
                    billFlag: '1-支出',
                    billId: 1,
                    billIncome: '20',
                    billMemo: '大连设计城9-1',
                    billMoney: '4500',
                    billPay: 10
                },
                {
                    billBalance: '+500',
                    billData: '2016-05-03 12:30',
                    billFlag: '1-支出',
                    billId: 1,
                    billIncome: '20',
                    billMemo: '大连设计城9-1',
                    billMoney: '4500',
                    billPay: 10
                },
                {
                    billBalance: '+500',
                    billData: '2016-05-03 12:30',
                    billFlag: '1-支出',
                    billId: 1,
                    billIncome: '20',
                    billMemo: '大连设计城9-1',
                    billMoney: '4500',
                    billPay: 10
                },
                {
                    billBalance: '+500',
                    billData: '2016-05-03 12:30',
                    billFlag: '1-支出',
                    billId: 1,
                    billIncome: '20',
                    billMemo: '大连设计城9-1',
                    billMoney: '4500',
                    billPay: 10
                },
                {
                    billBalance: '+500',
                    billData: '2016-05-03 12:30',
                    billFlag: '1-支出',
                    billId: 1,
                    billIncome: '20',
                    billMemo: '大连设计城9-1',
                    billMoney: '4500',
                    billPay: 10
                }
            ]
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

        },
        handConfirm() {
            if (this.monthStart) {
                this.monthStart = this.monthStart < 9 ? '' + 0 + this.monthStart : (this.monthStart).toString
            }

            console.log(this.yearStart, this.monthStart);
        },
        lastMonth() {
            this.dateFlag = '20'
            this.dayStart = ''
            this.dayEnd = ''
            this.monthEnd = ''
            this.yearEnd = ''
            var d = new Date()
            this.yearStart = (d.getFullYear()).toString()
            this.monthStart = ((d.getMonth() + 1) - 1).toString()
        },
        lastThreeMonths() {
            this.dateFlag = '21'
            this.dayStart = ''
            this.dayEnd = ''
            this.monthEnd = ''
            this.yearEnd = ''
            var d = new Date()
            this.yearStart = (d.getFullYear()).toString()
            this.monthStart = ((d.getMonth() + 1) - 3).toString()
            console.log(this.yearStart, this.monthStart);

        },
        lastYear() {
            this.dateFlag = '22'
            this.monthStart = ''
            this.dayStart = ''
            this.dayEnd = ''
            this.monthEnd = ''
            this.yearEnd = ''
            var d = new Date()
            this.yearStart = (d.getFullYear()).toString()
        },
        handleTime() {
            this.centerDialogVisible = false
            if (this.value1) {
                console.log(this.value1);
                this.dayStart = ''
                this.dayEnd = ''
                this.monthEnd = ''
                this.yearEnd = ''
                this.yearStart = (parseInt(((this.value1 - 0) / 100))).toString()
                this.monthStart = ((this.value1 - 0) % 100)

                console.log(this.yearStart, this.monthStart);
            }
            // console.log(parseInt(this.value1))
            // console.log(this.value2);
            // console.log(this.dateFlag);
        },
        handleTabTime() {
            if (this.activeName = 'first') {
                console.log(this.activeName);
                this.dateFlag = '10'
                this.value2 = ''
                return
            } else if (this.activeName = 'second') {
                console.log(this.activeName);
                this.value1 = ''
            }
        },
        handleTabType(){
            if(this.typeName==1){
                this.billFlag.splice(0,this.billFlag.length,1)
            }else if(this.typeName==0){
                this.billFlag.splice(0,this.billFlag.length,0)
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
                } else {
                    console.log('error submit!', fields)
                }
            })
            this.money = false
        },
    }
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
</style>