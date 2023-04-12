<template>
    <div class="submitSuccessBox">
        <div>
            <p>贷款申请提交成功！</p>
            <div><el-icon><SuccessFilled /></el-icon></div>
        </div><br>
        <p>尊敬的客户：<br>你的贷款申请已提交，请你耐心等待审批结果。稍后您可以通过“我的贷款”功能查询本贷款申请审批结果。</p><br>
        <el-button @click="onSubmit" type="primary">完成</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        onSubmit() {
            this.$router.push('/userloan')
        }
    }
}
</script>

<style scoped>
.submitSuccessBox {
    width: 500px;
    margin: auto;
    margin-top: 80px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 30px;
}

.submitSuccessBox>div {
    text-align: center;
}

.el-button {
    width: 100%;
}

.el-icon {
    font-size: 80px;
    color: #5a9cf8;
    margin: auto;
}
p {
    line-height: 28px;
}
</style>