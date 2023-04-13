<template>
    <div>
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
                   <h3>存款保险</h3>
                   <p>
                        本机构吸收的本外币存款依照《存款保险条例》受到保护。所有参加存款保险的金融机构都经中国人民银行授权使用如下存款保险标识。参加存款保险的金融机构名单可在中国人民银行网站查询（网址：www.pbc.gov.cn）。
                    </p>
                    <div>
                       <img class="ckbx" src="../img/ckbx.png" alt="">
                        </div>
                   <p>关于存款保险，您关心什么？（Q&A）</p>
                       <h4>1、什么是存款保险？</h4>
                       <p>存款保险又称存款保障，是指国家通过立法的形式，设立专门的存款保险基金，明确当个别金融机构经营出现问题时，依照规定对存款人进行及时偿付，保障存款人权益。</p>
                    <p>根据存款保险条例，存款保险覆盖所有吸收存款的银行业金融机构，包括在我国境内设立的商业银行、农村合作银行、农村信用合作社等。</p>
                    <p>
                        被保险存款包括投保机构吸收的人民币存款和外币存款。但是，金融机构同业存款、投保机构的高级管理人员在本投保机构的存款以及存款保险基金管理机构规定不予保险的其他存款除外。</p>
                                        <h4>3、偿付限额是多少？</h4>
                                        <p>
                        根据存款保险条例，存款保险实行限额偿付，最高偿付限额为人民币50万元。同一存款人在同一家投保机构所有被保险存款账户的存款本金和利息合并计算的资金数额在最高偿付限额以内的，实行全额偿付；超出最高偿付限额的部分，依法从投保机构清算财产中受偿。
                    </p>
                                        <h4>4、存款人需要交纳保费吗？</h4>
                                        <p>
                        不需要。存款保险作为国家金融安全网的一部分，其资金来源主要是金融机构按规定交纳的保费。收取保费的主要目的是为了加强对金融机构的市场约束，促使银行审慎经营和健康发展。</p>
                                        <h4>5、什么情况下进行偿付？</h4>
                                        <p>
                        根据存款保险条例，当出现下列情形时，存款人有权要求存款保险基金管理机构使用存款保险基金偿付被保险存款：存款保险基金管理机构担任投保机构的接管组织；存款保险基金管理机构实施被撤销投保机构的清算；人民法院裁定受理对投保机构的破产申请；经国务院批准的其他情形。为了保障偿付的及时性，充分保护存款人的权益，条例规定，存款保险基金管理机构应当在上述情形发生之日起7个工作日内足额偿付存款。
                    </p>
                                        <h4>6、什么时候开始实施？</h4>
                                        <p>存款保险条例从2015年5月1日起施行。</p>
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

.ckbx {
    width: 50%;
    height: 50%;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
    margin: 1.875rem 0;
}

.main1 h4 {
    text-indent: 2em;
    line-height: 3.125rem;
    font-weight: 500;
    font-size: 1.25rem;
}
</style>
