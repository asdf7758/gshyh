<template>
    <div>
        <h3>贷款申请详情</h3>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="number" label="申请单号" />
            <el-table-column prop="date" label="到期日期" />
            <el-table-column prop="lv" label="贷款利率" />
            <el-table-column prop="money" label="贷款金额" />
            <el-table-column prop="type" label="还款方式" />
            <el-table-column prop="zt" label="状态" />

        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    number: 'X123456798123',
                    lv: '0.035%',
                    money: '10000',
                    type: '等额本息',
                    zt: '审核中'
                }
            ]
        }
    }
}
</script>

<style scoped></style>