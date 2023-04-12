<template>
    <div>
        <van-notice-bar left-icon="volume-o" text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。" />

        <el-tabs v-model="activeName" type="card" class="demo-tabs">
            <el-tab-pane label="信用卡申请" name="first">

                <ul style="list-style: none;margin-left: 200px;">

                    <li v-for="item, index in list" style="display: inline-block;width: 220px;margin-right: 20px;;;"
                        :key="item.id">
                        <img :src="item.image" alt="" style="width: 200px;height: 124px">
                        <h3> {{ item.title }}</h3>
                        <p style="font-size: 13px;">{{ item.content }}</p>
                        <van-button type="primary" style="margin: left 25px; ;width: 150px;"
                            @click="showInput">立即申请</van-button>

                    </li>
                </ul>


            </el-tab-pane>
            <el-tab-pane label="查询办卡进度" name="second">

                <h2>您的{{ list[0].title }} 审核进度</h2>
                <van-steps :active="active">
                    <van-step>提交成功</van-step>
                    <van-step>正在审核</van-step>
                   
                    <van-step>审核完成</van-step>
                </van-steps>

            </el-tab-pane>
            <el-tab-pane label="查询换卡进度" name="third">查询换卡进度</el-tab-pane>
        </el-tabs>

        <el-dialog v-model="dialogVisible" title="提示" width="500">
            <el-form :model="form" :rules="rules" label-width="90px" ref="formRef" status-icon>

                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="身份证号" prop="idCard">
                    <el-input v-model="form.idCard" />
                </el-form-item>

                <el-form-item label="手机号" prop="telePhone">
                    <el-input v-model="form.telePhone" />
                </el-form-item>


                <el-form-item label="验证码" prop="yzm">
                    <el-row>
                        <el-col :span="16">
                            <el-input class="yzm-content" v-model="form.yzm" />
                        </el-col>
                        <el-col :span="8">
                            <el-button class="yzm-button" @click="handleSendYzm" :disabled="disYzm">
                                {{ txtValue }}</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>




            </el-form>

            <p class="dialog-footer">
                <el-button type="danger" @click="onSubmit"
                    style="margin-left: 120px;height: 50px;">同意以下合约条款并同意申请</el-button>
            </p>

            <input type="checkbox" v-model="checked" />本人已阅读清楚知晓 <span style="color: blue; cursor:pointer;"
                @click="handleDetail">《工商银行信用卡（个人卡）领用合约》
                《个人资信信息（含个人信用信息）处理授权书》涉及电信网络新型违法犯罪合约法律责任及防范提示告知书 </span>
            <p>该信用卡的相关信息，愿意遵守合约条款的各项规则。
                本人授权如因流程中断未完成申卡，中信银行可通过不限于网络、电话等方式协助完成。
                如无法获发金卡，将获发普卡，具体结果以最终审核为准。</p>
            <p> 温馨提示</p>
            <p> 1.通过网络渠道申请的客户：申请主卡年龄范围需在18-65周岁，申请附属卡年龄范围需在16-75周岁。</p>
            <p> 2.目前只支持中国二代居民身份证进行网络申请。</p>
            <p> 3.如客户需进行面签确认，则相关条款内容以面签确认时版本为准。</p>
            <p> 4.客户可登陆“中信银行信用卡”PC官网>客户指南>信用卡服务>信用卡知识，查阅《中信银行信用卡章程》。</p>


        </el-dialog>
        <el-dialog v-model="dialogVisible11" title="提示" width="500">
            <p>
                中信银行信用卡（个人卡）领用合约
                （信银卡字[2023]31号）

                中信银行（以下简称“甲方”）与中信银行信用卡（以下简称“信用卡”）申请人（以下简称“乙方”,指主卡申请人一方或主卡申请人及其附属卡申请人双方）就乙方向甲方申领使用信用卡的有关事宜特签订如下合约，乙方在申请表上签名或使用信用卡时，即视为乙方已理解和接受本合约，并同意受其约束。

                名词定义

                信用卡账户：是指乙方在甲方开立的信用卡项下账户，双币信用卡的账户分为人民币账户和外币账户。信用卡按卡片介质分为实体信用卡和电子信用卡。

                记账日：是指甲方将信用卡交易记入信用卡账户的日期。

                到期还款日：是指乙方每个账单周期所对应的还款期限届满日。

                预借现金：包括现金提取和现金转账业务。

                信用卡现金提取是指乙方使用信用卡在银行柜台、自动柜员机（ATM）等自助机具、网络渠道或以其他经本行认可的交易方式提取现金行为。但甲方与乙方另有约定的除外。

                信用卡现金转账是指乙方基于信用卡业务申请且经甲方核准通过后，甲方将款项转账至乙方指定的本人名下的借记卡或他行借记卡等收款账户的行为。

                分期业务：是指甲方基于其信用卡业务为乙方办理的消费分期、账单分期和现金分期等业务。

                信用额度：是指甲方根据乙方的信用状况核定的，在卡片有效期内可以使用的最高限额，是乙方名下所有卡片（含主卡、附属卡）的共用额度，也是人民币账户与外币账户的共同额度。办理分期业务时使用的专项额度也是信用额度的一部分。

                通知方式：是指甲方与乙方约定的告知方式，包括但不限于网站公告、营业网点公告、对账单、信函、电子邮件、手机短信、微信、报刊公告、语音电话、客户服务电话或手机客户端信息推送等。

                积分计划：是指甲方为回馈乙方所推出的甲方信用卡积分奖励计划，规则详见《中信银行积分计划条款与细则》等。



                第一条 申请

                1.为订立及履行本协议之目的，乙方保证向甲方提供的所有申请资料是真实完整、准确有效的，同意并授权甲方自信用卡申领之日起，以信用卡审核、风险管理、资产管理和异议核查等信用卡相关业务为目的，向中国人民银行金融信用信息基础数据库查询、使用个人信用信息及信用报告。向百行征信有限公司、朴道征信有限公司和其他依法设立的征信机构及其他合法机构（包括依法设立的资信评估机构或有关法律、监管机构许可的类似机构；行政机关；事业单位；司法机关；教育部学生服务与素质发展中心；电信运营商（或其授权的服务商）；乙方所属工作单位/组织；中信集团成员（含分支机构及附属机构）、中信银行的服务机构、代理人、外包作业机构）和个人依法收集、传输、提供乙方的个人身份信息、信用信息、个人生物特征信息、资产财产及负债信息、工作信息、运营商信息、学历/学籍信息、社保信息、公积金信息、设备信息、地址信息、航空出行信息、保险信息等，并对上述信息进行存储、使用及加工。

                甲方处理个人信息应当具有明确、合理的目的，并应当与处理目的直接相关，采取对个人权益影响最小的方式。乙方同意甲方根据法律法规要求和业务需要保留上述必要的相关资料。

                2.甲方有权依据乙方的资信状况决定是否批准乙方的主卡或附属卡的申请。主卡申请人应当确保附属卡申请人知悉、理解并遵守本合约，并对附属卡申请人的所有用卡行为承担责任，包括但不限于清偿附属卡全部债务，具有完全民事行为能力的附属卡申请人对本人附属卡产生的全部债务承担连带清偿责任。

                3.乙方同意甲方根据乙方所申请之信用卡（含中途或到期补换新卡）的既定发卡服务模式为其发放实体信用卡和/或电子信用卡。

                电子信用卡与实体信用卡享有同等的权利义务，且电子信用卡与其对应的实体信用卡（如有）共享乙方同一信用卡额度。电子信用卡通过甲方指定的官方渠道验证身份信息并激活后方可启用。同一信用卡的实体信用卡和/或电子信用卡有效期、安全校验码（CVV2)等卡片信息以乙方最新激活的卡片所示信息为准。

                4.甲方按照指定的电子渠道发出电子信用卡账户信息或按照乙方预留的通信地址寄出实体信用卡后，即履行完发卡义务。乙方电子信用卡信息可在甲方指定的电子渠道通过个人信息核验后进行查看。乙方应确保通讯信息准确无误并能正常收取邮件、短信和电子邮件等，否则，因此发生遗失、被窃等风险甲方不承担任何责任。

                5.乙方开通或使用电子信用卡服务的，须妥善保管账户信息，勿通过抄录、截屏、拍照等方式留存账户信息、鉴别信息；收到实体信用卡的，应立即在信用卡背面的签名栏签署本人姓名，并确保卡片为本人使用。

                6.乙方承诺：本人充分了解并清楚知晓出租、出借、出售、购买账户的相关法律责任和惩戒措施，承诺依法依规开立和使用本人账户。

                7.
                乙方知悉并同意，为便利乙方小额交易用卡，依据银联相关规定，其向甲方申请的带有“闪付”或“QuickPass”标识的银联IC信用卡，乙方可选择开通小额免密免签功能，功能开通后乙方在指定商户进行单笔1000元及以下金额交易时，无需验证密码也无需在交易凭证上签名，即可实现快速支付。小额免密免签功能适用范围仅限于IC卡或承载IC卡信息的移动设备以闪付联机方式发起的交易，使用限额以甲方对外公布的限额为准并可经公告后调整。甲方将在乙方卡片激活环节与乙方确认是否开通小额免密免签功能，乙方用卡过程中也可通过“动卡空间”APP、客户服务热线、短信、银行网点等方式随时进行小额免密免签功能的开通或关闭。

                8.乙方确认，其激活使用的第二张（含）以上中信信用卡，同样受本领用合约及后续公示变更条款的约定，并对所有中信信用卡产生的全部欠款及相关息费承担还款责任。

                第二条 使用

                1.信用卡仅限乙方用于购买商品、接受服务、信用卡现金提取等合法合规领域，不得用于生产经营、证券市场、股本权益性投资及房地产开发等非消费领域，严禁用于套现，更严禁用作违法用途。

                2.甲方获悉乙方有下列情形之一的，有权立即采取取消乙方参加甲方积分计划，取消权益和参与市场活动资格，强制更换卡片，重置密码，降低或取消信用额度，限制用卡，要求提前偿还全部应还款项，要求落实第二还款来源，取消用卡资格、停止卡片使用并终止本合约等措施，乙方承担由此产生的全部责任，同时甲方有权对乙方因此取得的全部利益进行追索并要求乙方赔偿甲方因此造成的全部损失：

                （1）乙方有欺诈、恶意串通或违反诚信原则的行为，包括但不限于利用信用卡进行虚假交易等欺诈活动套取银行信贷资金、积分、权益、里程、奖品或增值服务，倒卖或违反规定转赠权益等；

                （2）乙方将信用卡用于生产经营、证券市场、股本权益性投资及房地产开发等非消费领域的，或利用信用卡从事非法活动的，或有涉赌、涉诈、洗钱嫌疑的；

                （3）乙方向甲方提供虚假申请资料的，或明知受理人非甲方认可渠道的工作人员或非法中介，而将资料交给他人办理信用卡从而造成甲方资金损失的；

                （4）乙方未妥善保管其信用卡、证件及相关信息，导致信用卡、身份证件被盗用或冒用，敏感信息丢失、泄露的，或将信用卡出租、转借或交由他人使用的；

                （5）乙方拒不配合或失联、难联，导致甲方难以对相关持卡人身份、信用卡交易或争议等情况进行调查的；

                （6）乙方自其信息资料发生变更7日内未主动进行更新的，包括但不限于个人身份信息、身份证明文件有效期、职业信息、有效的手机号码、办公电话、住宅电话、其他联系人电话、配偶信息、居住信息、附属卡持卡人信息等；

                （7）乙方未依约履行还款义务；

                （8）乙方有其他违反法律法规规章、行业组织规定，违反本合约约定或存在其他非正常用卡的情形。

                3. 乙方应当合法合规用卡。当乙方发生违反本条第1、2款约定的非正常用卡情形时，乙方将可能出现个人信息泄露、个人征信受损、司法诉讼等风险，乙方除需承担本合约约定的责任外，还需承担法律法规规定的其他责任。

                4.乙方进行销户、销卡、卡片降级的，乙方账户或相关卡片对应的权益及参加相关活动的资格将被取消。

                <el-button type="danger" style="width: 100%;height: 50px; cursor:pointer;"
                    @click="handleClsose">我知道了</el-button>
            </p>
        </el-dialog>

    </div>
</template>

<script>

import { apply, submitCard, sendYzm } from '../api/users'
import { ElMessage } from 'element-plus'
export default {
    data() {

        return {
            activeName: 'first',
            txtValue: '发送验证码',
            list: [
                {
                    id: '1300022', title: '牡丹超惠系信用卡', content: '真金制、真回馈、真减费、真让利，专享三大分期、透支利率六折，爱购新客礼。硬核超惠，真情回馈！适用计息方式二。详询官网',
                    image: 'https://img2.baidu.com/it/u=4106670977,2761874286&fm=253&fmt=auto&app=138&f=JPEG?w=805&h=500'
                },
                {
                    id: '1410386', title: '工银未来系列信用卡 ', content: '   5折乘地铁，5折乘高铁，2折乘公交，1分钱骑单车！绿色消费兑换礼遇，新客达标领拉杆箱或红包。适用计息方式二。详询官网 ',
                    image: 'https://img2.baidu.com/it/u=3103486797,1843925878&fm=253&fmt=auto&app=138&f=PNG?w=500&h=281'
                },
                {
                    id: '1418991', title: '工银北京环球度假区联名卡', content: ' 独家授权发行，尊享提前入园，消费达标送门票，赢2天1晚旅行套餐等多重限定礼遇，适用计息方式一。详询官网 ',
                    image: 'https://img2.baidu.com/it/u=564944949,1857846756&fm=253&fmt=auto&app=120&f=JPEG?w=1000&h=750'
                }
            ],
            dialogVisible: false,
            dialogVisible11: false,
            disYzm: false,
            form: {
                name: '',
                idCard: '',
                telePhone: '',
                yzm: '',


            },
            checked: '',
            rules: {
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' },
                ],
                idCard: [
                    { required: true, message: '身份证号不能为空', trigger: 'blur' },
                ],
                telePhone: [
                    { required: true, message: '电话不能为空', trigger: 'blur' },
                   /*  { pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/, message: '请输入正确的手机号', trigger: 'blur' } */
                ],
                yzm: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' },
                    { min: 4, max: 4, message: '四位验证码', trigger: 'blur' },
                ],

            }
        }
    },

    methods: {
        showInput() {
            this.dialogVisible = true
        },
        handleDetail() {
            this.dialogVisible11 = true
        },
        handleClsose() {
            this.dialogVisible11 = false
        },
        handleSendYzm() {
            let count = 10
            this.disYzm = true;
            const timer = setInterval(() => {
                count--
                this.txtValue = `${count}秒后可再次发送`
                if (count === 0) {
                    this.disYzm = false;
                    this.txtValue = '发送验证码',
                        clearInterval(timer)
                }
            }, 1000)
            if (!this.name) {

                return;
            } else {

                console.log(111);
                sendYzm().then((res) => {
                    console.log(res.data)
                })
            }


        },





        onSubmit() {
            if (this.checked) {
                console.log(this.form);
                console.log(this.checked);
            } else {
                ElMessage.error('请先阅读条款')

            }


            if (!this.form) { return }
            else {
                submitCard(this.form).then((res) => {
                    if (res.status) {

                        ElMessage.success('提交成功')
                        this.dialogVisible = false
                    }
                })
            }
        }
    },


    created() {
        /*  apply().then((res) => {
 
             if (res.data.code === 0) {
                 this.list = res.data.data.applycard
 
             }
         }) */



        /*  fetch('http://localhost:5173/api/apply').then( response=>response.json() ) 
 
 .then( res=>this.list = res.data.data.applycard ) */



    }
}
</script>

<style  scoped>
.el-tabs {

    --el-tabs-header-height: 60px;
    ;
}

.el-tabs__item {
    background: #c7000b !important
}</style>