<template>
    <div class="common-layout">
    <el-container>
      <el-header class="tou">
        <h1><img class="logo" src="../img/logo.png" alt=""></h1>
        <h2 class="a">个人网上银行</h2>
      </el-header>
      <el-main>
        <el-form :model="form" label-width="120px">
        
        </el-form>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
    export default {
        data(){
            return{
              
            }
        }
    }
</script>

<style lang="scss" scoped>
.tou{
width: 1200px;
height: 100px;
/* background: darkcyan; */
margin: 0 auto;
display: flex;
align-items: center;
}
.el-main{
    width: 1680px;
    height: 500px;
    background: url(../img/banner.png);
}
.el-footer{
    width: 1200px;
    height: calc(100vh - 600px);
    margin: 0 auto;
    background: red;
}
.logo{
    float: left;
    width: 150px;
    height: 50px;
}
.a{
    float: left;
    line-height: px;
    margin-left: 10px;
    border-left: 2px solid black;
    padding-left: 50px;
    font-weight: normal;
}
</style>