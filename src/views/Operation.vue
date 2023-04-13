<template>


    <h2>dsad</h2>
   <!--  <div>
                <el-container>
                        <el-header class="tou">
                              <h1>
                    <img class="logo" src="../img/logo7.png" alt="">
                </h1>
                                <h2 class="aaa">个人网上银行</h2>
                            </el-header>
                        <el-main>
                                <div class="main1">
                                        <div @click="getLogin" class="main1-1">
                                                <el-icon>
                            <Back />
                        </el-icon><span style="margin-left: 10px;">返回登录页</span>
                                            </div>
                                        <h3>万丰银行-个人网银操作手册</h3>
                                        <h4>01、我登陆网银后看见图片怎么全是乱七八糟的</h4>
                                        <p>
                        答：这是您使用了IE6的原因，我行网银系统采用最新的页面交互技术，不支持IE6的排版，请升级您的IE浏览器。使用了其他非IE浏览器也是一样的效果则是因为国产双核浏览器的兼容模式为IE，如果你的电脑里面安装的是IE6，则360浏览器等兼容模式依然调用了IE6模式，所以会排版混乱，请升级IE。
                    </p>
                                        <h4>02、网银登陆密码，UKEY密码，账户密码这三个有联系么？忘记了怎么办</h4>
                                        <p>答：个人网银系统中一共会涉及到这3个密码，企业网银只会使用到网银登陆密码和UKEY密码，所涉及到的密码都没有内在联系，请务必牢记和区分开来这三个密码之间的用途。
                    </p>
                                        <p>1. 网银登陆密码
                        网银登陆密码仅仅只用作网银登陆使用，是进入网银的唯一密码凭证，如果您遗忘了，个人客户请到我行任意网点柜面办理网银登陆密码重置，企业客户请到网银开户行办理。</p>
                                        <p>2. 账户密码（卡密码）
                        此密码就是您拿您的卡去ATM上取款的即为取款密码。此密码由6位数字组成，是网银系统去核心扣账的唯一密码凭证。如果您遗忘此密码，或者密码输入错误次数过多（6次），导致密码锁定，请到柜面做账户密码的重置或者解锁。
                    </p>
                                        <p>3. UKEY密码
                        此密码是您开户时银行配发的UKEY设备的签名密码（也叫pin码），您可以在UKEY管理工具中对UKEY密码进行更改，请牢记此密码。UKEY被锁定后，不会自动解锁，UKEY密码遗忘后，只能携带相关证件到柜面办理。
                    </p>
                                        <h4>03、忘记登录密码怎么办?</h4>
                                        <p>答：网点注册客户，遗忘登录密码，须前往我行营业网点办理密码重置业务。自助注册客户，遗忘登录密码，可通过手机自行发起重置业务。</p>
                                    </div>
                            </el-main>
            <el-footer>
                                <div class="box1">
                                        <div class="xia" style="width: 100%;">
                                                <h3 class="qwe">注意事项</h3>
                                                <ul style="line-height: 1.25rem;font-size: 5px;">
                                                      <li>建议使用1200*800分辨率浏览，低于1200*800的分辨率，部分功能将无法使用</li>
                                                        <li>请您尽量不要在网吧等公共场所使用网上银行系统</li>
                                                        <li>您登录网上银行系统后，如需退出，请点击“退出网银”</li>
                                                        <li>本网站支持IPV6</li>
                                                    </ul>
                                            </div>
                    </ul>
                                        </div>
                                </div>
                    <div class="box2">
                            <div class="box2-1">
                                    <img src="../img/下载.png" alt="">
                                    <span>400-899-7770</span>
                                </div>
                            <div @click="baoxian" class="box2-2">
                                    <img src="../img/ckbx.png" alt="">
 </div>
                        </div>
</el-footer></el-container></div> --></template>

<script>
export default {
    methods: {
        getLogin() {
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
.tou {
    width: 1200px;
    height: 100px;
    /* background: darkcyan; */
    margin: 0 auto;
    display: flex;
    align-items: center;
}

.logo {
    float: left;
    width: 150px;
    height: 50px;
}

.el-footer {
    width: 1200px;
    height: calc(100vh - 600px);
    margin: 0 auto;
    /* background: red; */
    display: flex;
    justify-content: space-between;

}

.box1 {
    width: 100%;
    height: 100%;
    /* background: darkgray; */
}


.qwe {
    border-left: 5px solid red;
    padding-left: 10px;
}

.asd {
    margin: 20px;
    color: cornflowerblue;
    text-decoration: none;
}

.box2-2 {
    margin-top: 73px;
    width: 218px;
    height: 149px;
}

.box2 {
    width: 100%;
    height: 100%;
    /* background: gold; */
    display: flex;
    justify-content: space-between;
}

.box2-2 {
    margin-top: 73px;
    width: 218px;
    height: 149px;
}

.box2-1 {
    display: flex;
    justify-content: space-between;
    margin-top: 120px;
}

.box2-1 img {
    display: block;
    width: 80px;
    height: 64px;
    margin-right: 20px;
}

.box2-1 span {
    font-size: 2.1875rem;
    font-weight: bolder;
    color: #3f3a3a;
}

.box2-2:hover img {
    cursor: pointer;
    border: 2px solid #ccc;

}

.box2-2 img {
    display: block;
    width: 214px;
    height: 145px;

}

.main1 {
    width: 75rem;
    height: 100%;
    min-height: 31.25rem;
    margin: 0 auto;
    background: #fff;
    border: 0.0625rem solid #d9d9d9;
    overflow: hidden;
}

.main1-1 {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 3.125rem;
    padding-left: 1.25rem;
    margin-bottom: 3.125rem;
    font-size: 1rem;
    font-weight: 700;
    line-height: 3.125rem;
    color: #e01a38;
    cursor: pointer;
    background: rgba(224, 26, 56, .1);
}

.main1 h3 {
    width: 100%;
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    color: rgba(0, 0, 0, .85);
    text-align: center;
}

.main1 p {
    text-indent: 2em;
    line-height: 1.875rem;
    color: #959595;
    font-size: 1rem;
    margin-left: 35px;
    margin-right: 35px;
}

.main1 h4 {
    text-indent: 2em;
    line-height: 3.125rem;
    font-weight: 500;
    font-size: 1.25rem;
}
</style>