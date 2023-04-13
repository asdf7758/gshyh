<template>
    <div>
        <div class="header">
            <h3>我的贷款</h3>
            <el-button @click="onSubmit" type="primary">申请贷款</el-button>
        </div>
        <div class="el-card-box" >
            <el-card class="box-card" v-for="item in form" :key="item.number" @click="handleCard">
                <div class="card-left">
                    <div class="card-header">
                        <span>贷款：{{ item.amount }}元</span>
                        <span>{{ item.loanType }}</span>
                    </div><br>
                    <span>申请订单号：{{ item.number }}</span>
                </div>
                <div class="card-right">
                    <div>申请中</div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: [{
                amount: '50000',
                loanType: '公积金贷款',
                number: 'X123456789123'
            },
            {
                amount: '50000',
                loanType: '公积金贷款',
                number: 'X123456789123'
            },
            {
                amount: '50000',
                loanType: '公积金贷款',
                number: 'X123456789123'
            },
            {
                amount: '50000',
                loanType: '公积金贷款',
                number: 'X123456789123'
            }, {
                amount: '50000',
                loanType: '公积金贷款',
                number: 'X123456789123'
            }, {
                amount: '50000',
                loanType: '公积金贷款',
                number: 'X123456789123'
            }, {
                amount: '50000',
                loanType: '公积金贷款',
                number: 'X123456789123'
            },]
        }
    },
    methods: {
        onSubmit() {
            this.$router.push('/loanform')
        },
        handleCard(){
            this.$router.push('/applicationdetail')
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px 0 30px;
}

.el-card {
    width: 45%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.card-header {
    display: flex;
    justify-content: space-between;
}

:deep(.el-card__body) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.card-right {
    color: rgb(255, 191, 0);
}

.el-card-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px;
}
</style>