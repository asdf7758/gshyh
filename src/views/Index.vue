<template>
    <div>

        <el-container>
      <el-header>
  <ul class="left" >
    <li>个人客户</li>
    <li>企业客户</li>
    <li></li>
</ul>

<ul class="right">
    <li>无障碍浏览</li>
    <li>全球主站</li>
    <li>服务价目表</li>
    <li>业务咨询</li>
    <li>繁体字EN</li>
</ul>
<el-input v-model="input2" placeholder="请输入关键字">
  
      <template #append>
       
        <el-icon><Search /></el-icon>
      </template>
    </el-input>






      </el-header>


      <el-main>


        <div class="h-6" />
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#c7000b"
            text-color="#fff" active-text-color="#fff" @select="handleSelect">

            <el-sub-menu index="1">
                <template #title>账户服务</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-menu-item index="2-4">item three</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="2">
                <template #title>存款与贷款</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-menu-item index="2-4">item three</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3">
                <template #title>信用卡</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-menu-item index="2-4">item three</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="4">
                <template #title>用户服务</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-menu-item index="2-4">item three</el-menu-item>



                
            </el-sub-menu>


            <el-sub-menu index="5">
                <template #title>投资理财</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-menu-item index="2-4">item three</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="6">
                <template #title>金融市场</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-menu-item index="2-4">item three</el-menu-item>
            </el-sub-menu>
        </el-menu>

        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="https://v.icbc.com.cn/userfiles/adresources/696822366318919680.jpg"
                    alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="	https://v.icbc.com.cn/userfiles/adresources/784815572151369728.jpg
"
                    alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://v.icbc.com.cn/userfiles/adresources/783700658196332544.jpg"
                    alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="https://v.icbc.com.cn/userfiles/adresources/771737438250004480.jpg"
                    alt="">
            </van-swipe-item>
        </van-swipe>


       

    </el-main>
    </el-container>

<el-footer>
<ul>
    <li>网站声明</li>
    <li>网站服务</li>
    <li>分支机构</li>
    <li>联系我们</li>
    <li>服务热线</li>
</ul>    

</el-footer>

    </div>
</template>

<script>


export default {

}
</script>

<style  scoped>
.el-menu {
    display: flex;
    justify-content: space-around;
    font-weight: bold;
}
/* .el-menu .el-menu-item{background: #fff !important;color: black !important; } */
.van-swipe {
    height: 380px;
    margin: .625rem;
    overflow: hidden;
    border-radius: .9375rem;
}



.left{float: left;text-align: center;}
.left li,.right li{display: inline-block;margin: 0 5px;font-size: 15px;line-height: 40px;}
.right{float: right;text-align: center;}
.left li:hover,.right li:hover{color:#c7000b}
.el-header{height: 40px;padding-top: 10px;}
.el-input{float: right;width: 300px;}
.van-swipe img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>