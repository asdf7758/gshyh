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
                        <el-icon><Back /></el-icon><span style="margin-left: 10px;">返回登录页</span>
                    </div>
                    <h3>万丰银行-个人网银常见问题</h3>
                    <h4>01、在网银系统动账后，交易失败，但是查询相关交易明细并收到短息通知，上面交易状态为“冲正”是什么意思呢?</h4>
                    <p>答：此状态为交易处理结果为失败后，在稍后的时间里系统会自动将之前扣除的金额返回给您到付款账户。</p>
                    <h4>02、为什么在晚上做金额较大的转账总是不成功?</h4>
                    <p>答：我行网银系统连接了人民银行大额支付系统，使跨行转账无需人工处理，可做到方便、快捷，但受大额支付系统的限制，5万以上的转账必须在工作日9:00-17:00之间进行。您可选择系统自动顺延预约处理，或改为工作时间转账，或将金额拆分成多笔5万以下转账。</p>
                    <h4>03、挂失能在网上撤销吗?</h4>
                    <p>答：您在网上银行办理了账户挂失后不能通过网上银行进行挂失撤销，为安全起见，您需到当地银行柜台办理撤销挂失手续。</p>
                    <h4>04、在网上办理账户挂失后还要去柜台办理正式挂失吗?</h4>
                    <p>答：您在网上办理的账户挂失仅相当于口头挂失，正式挂失手续还必须到当地银行营业网点办理。在网上银行办理的账户挂失5天后会自动解挂，为了您的资金安全，请您尽快到当地银行网点办理正式挂失手续。</p>
                    <h4>05、自助注册用户在网上绑卡认证时，为什么提示“证件号码不符”?</h4>
                    <p>答：您开通网上银行服务后，出现“证件号码不符”的提示可能是以下原因之一造成的：</p>
                    <p>一、可能您填写的证件号码或类型与该账户（卡）在网点开户时所用证件的号码或类型不一致。请注意：</p>
                    <p>（1）15位身份证与18位身份证之分（现银行客户身份证均已更正为18位第二代身份证）；</p>
                    <p>（2）证件号码中若有字母和汉字，字母的大小写和汉字也必须相符。您可至开户网点核对您证件信息。如果是由于您开户时登记的证件类型或号码有误，请您先在网点办理该账户的证件号码更新手续后，重新申请开通网银。一般情况我行记录的“X”为大写X；</p>
                    <p>二、可能您在柜台开户时使用的证件号码与您在网上银行进行操作时输入的证件号码不匹配，请您携带有效证件及账户资料到我行任一网点修改证件号码后再重新申请开户。</p>
                    <h4>06、我做了预约转账选择了上午或者下午，请问账务是在何时处理?</h4>
                    <p>答：如果您在预约转账中选择了某日的上午，则该笔交易在当日上午10点系统自动处理；如果您选择了某日的下午，在该笔交易在当日下午2点系统自动处理。预约时间若为非工作日，则交易失败。</p>
                    <h4>07、我在网上银行交易系统提示操作超时或者通讯失败，我该如何解决?</h4>
                    <p>答：这可能是由于网络通讯原因导致的服务中断。建议您等网络恢复后，重新登录您的网银，请您先到交易明细、余额查询、操作日志查询等功能处，先查询您的上笔交易是否成功，是否扣帐，如果未成功才可以重新做一次该交易，避免重复交易提交。</p>
                    <h4>08、如何设置安全的密码?</h4>
                    <p>答：您可以在网上银行设置登录密码，选择一个高强度、不易猜测的密码对您的资金和信息安全非常重要。在网上银行设置和修改密码时请您注意以下几点：</p>
                    <p>一、不要设置简单密码，您设置的密码必须符合银行安全密码规则：</p>
                    <p>（1）请不要设为相同的数字和字母，如000000、111111、aaaaaa、bbbbbb等；</p>
                    <p>（2）请不要设为连续升降排列的数字或字母。如123456、987654、abcdef、fedcba等；</p>
                    <p>（3）请不要设为计算机键盘排列规律的字母。如asdfgh、qwerty、zxcvbn等；</p>
                    <p>（4）请不要设为您的银行卡号、账号、身份证号、电话号码、手机号的末几位；</p>
                    <p>（5）请不要设为您的生日，包括年、月、日在内的6位或8位数字。针对上述形式的密码统称为网上银行简单密码。由于简单密码具有较为明显的规律性和客户信息的针对性，极易被他人猜测、被黑客破解，因此，我行强烈建议客户在网上银行设置密码时不使用简单密码；</p>
                    <p>二、不要使用与您姓名、电话号码、车牌号、电子邮件、QQ号等容易猜测的号码作为您的网银密码；</p>
                    <p>三、定期更换您的密码。使用不同的账户密码、网上银行登录密码和网上银行交易密码。不同的多重密码能更有效的保障您账户资金的安全；</p>
                    <p>四、在任何情况下，保护好您的账号和密码，不透露给任何人。不要相信任何通过电子邮件、短信、电话等方式索要账号和密码的行为。</p>
                    <h4>09、首次登陆成功时让我输入三个密码是什么意思?</h4>
                    <p>答：在我行柜面开通个人网银时，您只能通过密码键盘预留6位纯数字的密码，为了您的网银登陆密码更加的安全，系统会在首次登陆时强制您修改您的网银登陆密码为6-9位字母、字符和数字组合。 开通企业网银时，网银的初始密码打印在密码信封，同样为了网银安全，系统会在首次登陆成功后，强制修改网银登录密码为6-9位字母、字符和数字的组合。</p>
                    <h4>10、我成功登陆网银后，操作界面部分菜单或者按钮被遮盖导致无法点击，我该做哪些设置?</h4>
                    <p>答：请检查您的网页显示比例是否为100%，如果不是，请您将比例调至最佳。在此同时建议您把您的电脑分辨率调至1200*800像素以上。</p>
                    <h4>11、我登陆网银后看见图片怎么全是乱七八糟的?</h4>
                    <p>答：这是您使用了IE6的原因，我行网银系统采用最新的页面交互技术，不支持IE6的排版，请升级您的IE浏览器。使用了其他非IE浏览器也是一样的效果则是因为国产双核浏览器的兼容模式为IE，如果你的电脑里面安装的是IE6，则360浏览器等兼容模式依然调用了IE6模式，所以会排版混乱，请升级IE。</p>
                    <h4>12、网银登陆密码，UKEY密码，账户密码这三个有联系么？忘记了怎么办?</h4>
                    <p>答：个人网银系统中一共会涉及到这3个密码，企业网银只会使用到网银登陆密码和UKEY密码，所涉及到的密码都没有内在联系，请务必牢记和区分开来这三个密码之间的用途。</p>
                    <p>1. 网银登陆密码 网银登陆密码仅仅只用作网银登陆使用，是进入网银的唯一密码凭证，如果您遗忘了，个人客户请到我行任意网点柜面办理网银登陆密码重置，企业客户请到网银开户行办理。</p>
                    <p>2. 账户密码（卡密码）此密码就是您拿您的卡去ATM上取款的即为取款密码。此密码由6位数字组成，是网银系统去核心扣账的唯一密码凭证。如果您遗忘此密码，或者密码输入错误次数过多（6次），导致密码锁定，请到柜面做账户密码的重置或者解锁。</p>
                    <p>3. UKEY密码 此密码是您开户时银行配发的UKEY设备的签名密码（也叫pin码），您可以在UKEY管理工具中对UKEY密码进行更改，请牢记此密码。UKEY被锁定后，不会自动解锁，UKEY密码遗忘后，只能携带相关证件到柜面办理。</p>
                    <h4>13、忘记登录密码怎么办?</h4>
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
    methods:{
        getLogin(){
            this.$router.push('/login')
        },
        baoxian(){
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
.main1-1{
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
    background: rgba(224,26,56,.1);
}
.main1 h3{
    width: 100%;
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
    color: rgba(0,0,0,.85);
    text-align: center;
}
.main1 p{
    text-indent: 2em;
    line-height: 1.875rem;
    color: #959595;
    font-size: 1rem;
    margin-left: 35px;
    margin-right: 35px;
}
.main1 h4{
    text-indent: 2em;
    line-height: 3.125rem;
    font-weight: 500;
    font-size: 1.25rem;
}
</style>