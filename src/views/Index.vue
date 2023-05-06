<template>
    <div style="position: relative;">
        <ul class="position">
            <li>业务咨询</li>
            <li>立即申请</li>
            <li>APP下载</li>
            <li>手机网站</li>
            <li>安全提示</li>
            <li class="back">回到顶部</li>
        </ul>
        <el-container>
            <el-header style="height: 70px;">
                <ul class="left">
                    <li>个人客户</li>
                    <li>企业客户</li>
                    <li>


                    </li>
                </ul>

                <img src="../img/未标题-1.png" alt="" style="vertical-align:middle">
                <img src="../img/未标题-2.png" alt="" style="vertical-align:top">


                <ul class="right">
                    <li>无障碍浏览</li>
                    <li>全球主站</li>
                 
                    <li>业务咨询</li>
                    <li @click="handleClose">退出登录</li>
                </ul>
                <el-input v-model="input2" placeholder="请输入关键字">

                    <template #append>

                        <el-icon>
                            <Search />
                        </el-icon>
                    </template>
                </el-input>






            </el-header>


            <el-main>


                <div class="h-6" />
                <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#c7000b"
                    text-color="#fff" active-text-color="#fff" @select="handleSelect">

                    <el-sub-menu index="1">
                        <template #title>账户服务</template>
                        <el-menu-item index="2-1" @click="handleGetmoney">申请取款</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                        <el-menu-item index="2-4">item three</el-menu-item>
                    </el-sub-menu>

                    <el-sub-menu index="2">
                        <template #title>存款与贷款</template>
                        <el-menu-item index="2-1" @click="handleDetail">贷款申请页</el-menu-item>
                        <el-menu-item index="2-2" @click="handlerepayment">还款列表</el-menu-item>
                       
                    
                    </el-sub-menu>

                    <el-sub-menu index="3">
                        <template #title>信用卡</template>
                        <el-menu-item index="2-1" @click="handleLogin">我的信用卡</el-menu-item>
                    
                        <el-menu-item index="2-3">信用卡还款</el-menu-item>
                        <el-menu-item index="2-4" @click="handleApplyCard">我要办卡</el-menu-item>
                    </el-sub-menu>

                    <el-sub-menu index="4">
                        <template #title>用户服务</template>
                        <el-menu-item index="2-1"  @click="handleMessege">个人信息</el-menu-item>
                        <el-menu-item index="2-2"  @click="handleBill">个人账单</el-menu-item>
                       




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
                        <img src="https://v.icbc.com.cn/userfiles/adresources/696822366318919680.jpg" alt="">
                    </van-swipe-item>
                    <van-swipe-item>

                        <img src="	https://v.icbc.com.cn/userfiles/adresources/784815572151369728.jpg" alt="">
                    </van-swipe-item>
                    <van-swipe-item>
                        <img src="https://v.icbc.com.cn/userfiles/adresources/783700658196332544.jpg" alt="">
                    </van-swipe-item>
                    <van-swipe-item>
                        <img src="https://v.icbc.com.cn/userfiles/adresources/771737438250004480.jpg" alt="">
                    </van-swipe-item>
                </van-swipe>           


                <el-dialog v-model="dialogVisible11" title="提示" width="500">
                    <p>
                        尊敬的客户：
                        中国工商银行遵循平等自愿、诚实守信、勤勉尽责的原则，努力为您提供专业化、高质量的金融服务。在签订本协议之前，请务必仔细阅读本协议全部条款，特别是关注您的权利义务和风险提示条款。若不理解或不同意本协议条款的，请您不要签字、点击确认或进行注册、登录操作，您签字、点击确认或进行后续操作的，视为理解并接受本协议。


                        中国工商银行电子银行个人客户服务协议


                        为明确双方的权利和义务，规范双方业务行为，甲方(客户) 、乙方(中国工商银行)本着平等互利的原则，就电子银行服务相关事宜达成本协议。
                        第一条 定义
                        下列用语在本协议中的含义为：
                        “电子银行”是指乙方通过面向社会公众开放的通讯通道或开放型公众网络，为甲方提供的离柜金融服务，包括个人手机银行、网上银行、电话银行。
                        “密码”指客户自行设定并用于验证客户身份的字符和图形等信息。
                        “动态口令”是指按照特定规则动态产生并用于识别客户身份的字符组合，动态口令的载体包括口令卡、工银电子密码器、短信验证码等。
                        “客户证书”指用于存放客户身份标识，并对客户发送的电子银行交易信息进行数字签名的电子文件。乙方为甲方提供的客户证书存放介质为“U盾”。
                        第二条 甲方权利、义务
                        一、权利
                        （一）甲方可通过柜面或自助注册方式申请注册电子银行。甲方到乙方营业网点办理柜面注册手续，注册完成后可办理全部电子银行业务。甲方通过自助注册可办理部分电子银行业务，如需办理自助注册无法提供的电子银行业务，可到乙方营业网点办理柜面注册手续。柜面注册、自助注册可办理的业务类型以相关法律法规、监管规定及乙方公布的业务规则为准。
                        （二）甲方需要变更电子银行注册信息的，可按相关法律法规、监管规定及乙方公布的业务规则，到乙方营业网点，或通过个人手机银行、个人网上银行办理。
                        （三）甲方可到乙方营业网点，或通过个人手机银行、个人网上银行办理电子银行注销手续。甲方注销电子银行后，乙方将删除甲方电子银行账户信息，法律法规或监管机构对个人信息存储时间另有规定的除外。
                        （四）甲方办理电子银行业务过程中，如遇到问题或无法获得电子银行服务时，可通过乙方营业网点、门户网站（www.icbc.com.cn）或手机银行在线客服咨询投诉，或拨打乙方服务热线95588。
                        （五）甲方同意并授权乙方在依法合规提前下，依据《工银融e行个人信息保护政策》处理（包括收集、存储、使用、加工、传输、提供、公开、删除等）甲方个人信息。甲方可通过门户网站（www.icbc.com.cn）、个人手机银行等渠道查看《工银融e行个人信息保护政策》。



                        <el-button type="danger" style="width: 100%;height: 50px; cursor:pointer;"
                            @click="handleClsose">我知道了</el-button>
                    </p>
                </el-dialog>


            </el-main>
        </el-container>

        <el-footer>
           
<ul>
    <li>关于我们 |</li>
    <li>联系我们 |</li>
    <li>网站声明 |</li>
    <li>合作招商 |</li>
    <li>商家帮助 |</li>
    <li>分支机构 |</li>
   
    <li>Media & IR</li>
</ul>

<p>京公网安备 11000002000088号 | 京ICP备11041704号 | ICP | 互联网药品信息服务资格证编号(京)-经营性-2014-0008 | 新出发京零 字第大120007号</p>
<p>互联网出版许可证编号新出网证(京)字150号 | 出版物经营许可证 | 网络文化经营许可证京网文[2020]6112-1201号 | 违法和不良信息举报电话：4006561155</p>




        </el-footer>

    </div>
</template>

<script>




export default {
    data() {
        return {
            form: {
                telephone: '',
                password: ''

            },
           
            dialogVisible11: false,
            checked: '',
            rules: {
                telePhone: [
                    { required: true, message: '账号不能为空', trigger: 'blur' },
                    /*  { pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/, message: '请输入正确的手机号', trigger: 'blur' } */
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 6, max: 16, message: '6~16位密码', trigger: 'blur' },
                ],

            },

        }
    },
    methods: {
        handleApplyCard() {
            
            this.$router.push('/applycard')
        },
        handleDetail(){
          this.$router.push('/loanlist')
        },
        handleMessege(){
            this.$router.push('/message')
        },
        handleBill(){
            this.$router.push('/message/bill')
        },
        handleGetmoney(){
            this.$router.push('/getmoney')
        },
        handleClose(){
           //清楚token   跳转登录页
           this.$router.push('/login')
          localStorage.removeItem("vuex");
           
        },
        handleClsose() {
            this.dialogVisible11 = false

        },
        handlerepayment(){
            this.$router.push('/repayment')
        }
    }
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
.position li{
    text-align: center;
    width: 40px;
    padding:0 9px ;
    padding-top: 5px;
    height: 48px;
    font-size: 15px;
   
    border-bottom: 1px solid #ccc;
}
.position li:hover{background-color:#c7000b;color: #fff;}

.position {
    width: 58px;
    height: 323px;
    background:#fff;
    position: fixed;
    right: 30px;
    top: 100px;
   
    z-index: 2;
}
.left {
    float: left;
    text-align: center;
}
.el-footer{background: #999999;height: 130px;}
.el-footer ul{text-align: center;margin-top: 20px;}
.el-footer ul li{display: inline-block;font-size: 16px;margin: 5px;text-align: center;}
.el-footer ul li:hover{color: crimson;}


.right li {
    display: inline-block;
    margin: 0 10px;
    font-size: 15px;
    line-height: 40px;
    padding: 0 5px;
}

.right {
    float: right;
    text-align: center;
}

.left li:hover,
.right li:hover {
       color:#fff;
       border-radius: 5px;
    background: #c7000b
}

.el-header {
    height: 40px;
    padding-top: 10px;
}

.el-input {
    float: right;
    width: 300px;
}

.van-swipe img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.el-dialog {
    height: 400px;
}
</style>