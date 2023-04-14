<template>
    <div>
        <el-container>
            <el-header class="tou">
                <h1><img class="logo" src="../img/logo7.png" alt=""></h1>
                <h2 class="aaa">个人网上银行</h2>
            </el-header>
            <el-main>
                <div class="main1">
                    <div @click="getLogin" class="main1-1">
                        <el-icon>
                            <Back />
                        </el-icon><span style="margin-left: 10px;">返回登录页</span>
                    </div>
                    <h3>万丰银行-个人网银安全提示</h3>
                    <h4>01、我在网上银行交易系统提示操作超时或者通讯失败，我该如何解决?</h4>
                    <p>答：这可能是由于网络通讯原因导致的服务中断。建议您等网络恢复后，重新登录您的网银，请您先到交易明细、余额查询、操作日志查询等功能处，先查询您的上笔交易是否成功，是否扣帐，如果未成功才可以重新做一次该交易，避免重复交易提交。
                    </p>
                    <h4>02、如何设置安全的密码?</h4>
                    <p>答：您可以在网上银行设置登录密码，选择一个高强度、不易猜测的密码对您的资金和信息安全非常重要。在网上银行设置和修改密码时请您注意以下几点：</p>
                    <p>一、不要设置简单密码，您设置的密码必须符合银行安全密码规则：</p>
                    <p>（1）请不要设为相同的数字和字母，如000000、111111、aaaaaa、bbbbbb等；</p>
                    <p>（2）请不要设为连续升降排列的数字或字母。如123456、987654、abcdef、fedcba等；</p>
                    <p>（3）请不要设为计算机键盘排列规律的字母。如asdfgh、qwerty、zxcvbn等；</p>
                    <p>（4）请不要设为您的银行卡号、账号、身份证号、电话号码、手机号的末几位；</p>
                    <p>（5）请不要设为您的生日，包括年、月、日在内的6位或8位数字。针对上述形式的密码统称为网上银行简单密码。由于简单密码具有较为明显的规律性和客户信息的针对性，极易被他人猜测、被黑客破解，因此，我行强烈建议客户在网上银行设置密码时不使用简单密码；
                    </p>
                    <p>二、不要使用与您姓名、电话号码、车牌号、电子邮件、QQ号等容易猜测的号码作为您的网银密码；</p>
                    <p>三、定期更换您的密码。使用不同的账户密码、网上银行登录密码和网上银行交易密码。不同的多重密码能更有效的保障您账户资金的安全；</p>
                    <p>四、在任何情况下，保护好您的账号和密码，不透露给任何人。不要相信任何通过电子邮件、短信、电话等方式索要账号和密码的行为。</p>
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
            </el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    methods: {
        getLogin() {
            this.$router.push('/login')
        },
        baoxian() {
            this.$router.push('/baoxian')
        },
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
}</style>