<template>
    <div>
        <div>
            <img src="../img/未标题-1.png" alt="" style="vertical-align:middle">
            <img src="../img/未标题-2.png" alt="" style="vertical-align:top">
            <span style="float:right">
                <el-space>
                    <el-button @click="handleIndex">万丰银行首页</el-button>
                    <el-button>使用指南</el-button>
                    <el-button>在线客服</el-button>

                </el-space>

                <p style="margin-right: 20px;font-size: 20px;font-style: italic;font-weight: bold;">
                    服务热线：400-1431-3423-342323</p>
            </span>
            <span>
            </span>
        </div>
        <el-tabs v-model="activeName" type="card" class="demo-tabs"
            style="width: 1000px;margin: 0 auto;background-color:#ddd  ;height: 1050px;color: black;">
            <el-tab-pane label="信用卡申请" name="first">
                <!--    <van-notice-bar left-icon="volume-o" text=" 重要公告，
关于2023年国际主要金融市场休市期间账户交易、外汇买卖及外币兑换暂停业务时间的通告。" /> -->

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
                <h2>您申请的 审核进度</h2>
                <van-steps :active="active">
                    <van-step>提交成功</van-step>
                    <van-step>正在审核</van-step>
                    <van-step>审核完成</van-step>
                </van-steps>
            </el-tab-pane>

            <el-tab-pane label="我的信用卡" name="four">
                <div>

                    <div>
                        <p> <span style="font-weight: bold;">
                                信用额度
                            </span>
                        <div style="float:right; margin-top: -20px;">
                            <h3>

                                尊贵的：牡丹超惠系列信用卡用户您好！
                            </h3>
                            <h3> 613***************6511</h3>
                        </div>
                        </p>
                        <p>
                            可用额度 <b> ￥{{ greditList.money }} </b> <el-button type="primary" @click="handleCota(11)">申请额度

                                <el-dialog v-model="dialogVisible33" width="300">

                                    <el-form :model="formCota" :rules="rules2" label-width="" ref="formRef2" status-icon>
                                        <el-form-item label="" prop="summoney">
                                            <el-input v-model="formCota.summoney" placeholder="请输入申请金额"
                                                style="width: 220px; " />
                                        </el-form-item>


                                        <el-button type="primary" @click="handleSubmitCode($refs.formRef2)"
                                            style="width: 200px;margin-top: 20px;   "> 提交 </el-button>
                                    </el-form>
                                </el-dialog>
                            </el-button>
                            <el-button type="primary" @click="handleFenqi">分期还款 </el-button>
                            <el-select v-model="value" clearable placeholder="Select">
                                <el-option v-for="item in options" :key="item.value" :value="item.value" />
                            </el-select>


                        </p>
                    </div>


                </div>

                <hr>
                <ul style="margin-top: 30px  ;">
                    <li v-for="item, index in billsearch" :key="item.id"
                        style="border-bottom: 1px solid  #ccc;width: 700px;margin: 0 auto;margin-top: 10px  ;">
                        <span style="border-right: 2px solid #ccc;width: 200px;display: inline-block;"> 待还金额：{{ item.meta }}
                        </span>
                        <span style="border-right: 2px solid #ccc;width: 200px;display: inline-block;"> 还款日： {{ item.date }}
                        </span>
                        <span style="border-right: 2px solid #ccc;width: 200px;display: inline-block;"> {{ zuiDi }} {{
                            item.zdMeta
                        }} </span>
                        <el-button type="primary" @click="handleGredit(index)">立即还款 </el-button>


                    </li>

                    <el-dialog v-model="dialogVisible22" width="300">
                        <h3 style="text-align: center;">还款金额</h3>
                        <el-form :model="formStill" :rules="rules1" label-width="" ref="formRef1" status-icon>
                            <el-form-item label="" prop="sum">
                                <el-input v-model="formStill.sum" placeholder="请输入还款金额" style="width: 220px; " />
                            </el-form-item>


                            <el-form-item label="">
                                <el-select v-model="formStill.type" placeholder="请选择支付方式" prop="type">
                                    <el-option label="微信" value="微信" />
                                    <el-option label="支付宝" value="支付宝" />
                                    <el-option label="工商银行" value="工商银行" />
                                    <el-option label="中国银行" value="中国银行" />
                                    <el-option label="建设银行" value="建设银行" />
                                </el-select>

                                <el-form-item label="" prop="password">
                                    <el-input v-model="formStill.password" placeholder="请输入密码" style="width: 220px; " />
                                </el-form-item>

                                <el-button type="primary" @click="handleSubmitStill($refs.formRef1)"
                                    style="width: 200px;margin-top: 20px;">立即还款</el-button>
                            </el-form-item>
                        </el-form>
                    </el-dialog>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="历史账单" name="five">

            </el-tab-pane>
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
                <el-button type="danger" @click="onSubmit($refs.formRef)"
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



                <el-button type="danger" style="width: 100%;height: 50px; cursor:pointer;"
                    @click="handleClsose">我知道了</el-button>
            </p>
        </el-dialog>

    </div>
</template>

<script>

import { apply, submitCard, sendYzm, greditcard, payMoney, applycota, fenqi } from '../api/users'
import { ElMessage } from 'element-plus'
import store from '../store'

export default {
    data() {

        return {
            activeName: 'first',
            txtValue: '发送验证码',
            list: [],
            dialogVisible: false,
            dialogVisible11: false,
            dialogVisible22: false,
            dialogVisible33: false,
            disYzm: false,
            username: '',
            zuiDi:'最低还款',
            value: '',
            options: [{ value: '1月' }, { value: '2月' }, { value: '3月' }, { value: '4月' }, { value: '5月' }, { value: '6月' }, { value: '7月' }, { value: '8月' }, { value: '9月' }, { value: '10月' }, { value: '11月' }, { value: '12月' },


            ],
            id: '',
            active: '',

            greditList: [],
            billsearch: [],

            form: {
                name: '',
                idCard: '',
                telePhone: '',
                yzm: '',
            },
            formStill: {
                sum: '',
                type: '',
                password: ''
            },
            formCota: {
                summoney: ''
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
                ]



            },



            rules1: {
                sum: [
                    { required: true, message: '还款金额不能为空', trigger: 'blur' },
                ],
                type: [
                    { required: true, message: '请选择支付方式', trigger: 'change' },
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 4, max: 16, message: '4-16位验证码', trigger: 'blur' },
                ],

            },
            rules2: {
                summoney: [
                    { required: true, message: '申请金额不能为空', trigger: 'blur' },
                ]

            },
        }
    },

    methods: {
        showInput() {
            this.dialogVisible = true
        },
        handleIndex() {
            console.log(1111);
            this.$router.push('/')
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
            console.log(111);
            sendYzm().then((res) => {
                console.log(res.data)
            })
            if (!this.name) {
                return;
            }
        },
        handleGredit(id) {
            this.id = id
            this.dialogVisible22 = true
        },

        //还款
        handleSubmitStill(formEl, index) {


            if (!formEl) return
            formEl.validate((valid, fields) => {
                if (valid) {
                    console.log(111);
                    payMoney([this.formStill, this.id, this.username]).then((res) => {
                        if (res.data.code === 0) {
                            ElMessage.success('提交成功')
                            this.$refs.formRef1.resetFields()
                            this.dialogVisible22 = false
                            this.billsearch.splice(index, 1)
                        }
                    })
                } else {
                    console.log(222);
                }
            }
            )
        },
        //申请信用卡
        onSubmit(formEl) {
            console.log(formEl);
            if (this.checked) {
                if (!formEl) return
                formEl.validate((valid, fields) => {
                    if (valid) {
                        console.log(111);

                        submitCard(this.form).then((res) => {
                            if (res) {

                                console.log(res);
                                ElMessage.success('提交成功')

                                this.dialogVisible = false
                            }
                        })

                    } else {
                        console.log(222);
                    }
                }
                )
            } else {
                ElMessage.error('请先阅读条款')

            }
        },
        //打开申请额度：
        handleCota(index) {
            console.log(this.$store.state.userToken.username);
            this.dialogVisible33 = true
        },
        //分期
        handleFenqi() {
            if (this.greditList.billsearch.length !== 0) {
                console.log(this.value);
                fenqi(this.value).then((res) => {
                    if (res.data.code === 0) {
                        console.log(res);
                        this.billsearch = res.data.billsearch1
                        this.zuiDi=''
                    }
                })
            } else {
                ElMessage.success('没有可分期的贷款')
            }
        },




        //提交申请额度
        handleSubmitCode(formEl) {
            if (!formEl) return
            formEl.validate((valid, fields) => {
                if (valid) {
                    console.log(111);
                    applycota(this.formCota, this.username).then((res) => {
                        if (res.data.code === 0) {
                            ElMessage.success('申请额度成功')
                            this.dialogVisible33 = false
                            this.$refs.formRef2.resetFields()
                        }
                    })

                } else {
                    console.log(222);
                }
            }
            )
        }
    },
    computed() {
        this.username = store.state.userToken.username

    },

    created() {
        apply().then((res) => {

            if (res.data.code === 0) {
                this.list = res.data.applycard
            }
        }),
            greditcard().then((res) => {
                if (res.data.code === 0) {
                    this.greditList = res.data
                    this.billsearch = this.greditList.billsearch
                }
            })
    }
}
</script>
<style  scoped>
.el-tabs {

    --el-tabs-header-height: 60px;
    ;
}


.el-tabs__item.is-active:hover {
    background: #c7000b !important
}
</style>