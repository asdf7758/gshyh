
const movies = [
  { id: '1300022', nm: '不止不休', desc: '由真实事件改编，贾樟柯监制，白客、张颂文以“调查记者”视角，讲述“一个人为一亿人发声”的反歧视故事。全员飚戏，演绎年度必看现实题材良心佳作！2003年的中国，社会变革激荡，人们野心勃勃。当时互联网尚未席卷一切，纸媒为王。没钱、没学历、没背景的“三无青年” 韩东(白客 饰)怀揣新闻理想与女友小竹(苗苗 饰)开始了北漂生涯，期间在知名记者黄江(张颂文 饰)的帮助下进入报社实习，在一次案件调查中，韩东发现了背后更大的真相。一边是光明的前途，一边是心中的正义，韩东在两难中选择挺身而出……' },
  { id: '1410386', nm: '铃芽之旅', desc: '生活在日本九州田舍的17岁少女・铃芽遇见了为了寻找“门”而踏上旅途的青年。追随着青年的脚步，铃芽来到了山上一片废墟之地，在这里静静伫立着一扇古老的门，仿佛是坍塌中存留的唯一遗迹。铃芽仿佛被什么吸引了一般，将手伸向了那扇门…不久之后，日本各地的门开始一扇一扇地打开。据说，开着的门必须关上，否则灾祸将会从门的那一边降临于现世。星星，夕阳，拂晓，误入之境的天空，仿佛溶解了一切的时间。在神秘之门的引导下，铃芽踏上了关门的旅途。' },
  { id: '1418991', nm: '回廊亭', desc: '根据东野圭吾畅销悬疑小说《长长的回廊》改编。回廊亭大宅中暗藏无数秘密，绝望女人为爱复仇的欲望纷争正在上演！富商病逝，他的亲属们聚集在回廊亭等待数⼗亿遗产将会如何分配，众⼈各怀⿁胎。关键时刻，律师周扬带着遗嘱和一本神秘日记而来，更牵扯出⼀场发⽣在一年前的⽕灾凶杀案，死者是富商流落在外的私⽣⼦，更是全部遗产的第⼀顺位继承⼈！凶⼿，似乎就隐藏在众⼈之中……' }
];
const applycard = [
  {
    id: '1300022', title: '牡丹超惠系信用卡', content: '真金制、真回馈、真减费、真让利，专享三大分期、透支利率六折，爱购新客礼。硬核超惠，真情回馈！适用计息方式二。详询官网',
    image: 'http://creditcard2.ccb.com/cn/creditcard/upload/2019923135237316109.png'
  },
  {
    id: '1410386', title: '工银未来系列信用卡 ', content: '   5折乘地铁，5折乘高铁，2折乘公交，1分钱骑单车！绿色消费兑换礼遇，新客达标领拉杆箱或红包。适用计息方式二。详询官网 ',
    image: 'http://creditcard2.ccb.com/cn/creditcard/upload/2019923135345605071.jpg'
  },
  {
    id: '1418991', title: '工银北京环球区联名卡', content: ' 独家授权发行，尊享提前入园，消费达标送门票，赢2天1晚旅行套餐等多重限定礼遇，适用计息方式一。详询官网 ',
    image: '	http://creditcard2.ccb.com/cn/creditcard/upload/2019923135540193367.jpg'
  }
];

const billsearch = [
  { id: '1511515', date: '2023 - 04 - 20', meta: '1314', zdMeta: '1055' },
  
]
const billsearch1 = [
  { id: '1511515', date: '2023 - 04 - 20', meta: '1314', },
  { id: '1511515', date: '2023 - 05 - 20', meta: '1314', },
  { id: '1511515', date: '2023 - 06 - 20', meta: '1314', },
  { id: '1511515', date: '2023 - 07 - 20', meta: '1314', },
  { id: '1511515', date: '2023 - 08 - 20', meta: '1314', },
  { id: '1511515', date: '2023 - 09 - 20', meta: '1314', },
  { id: '1511515', date: '2023 - 10 - 20', meta: '1314', },
  { id: '1511515', date: '2023 - 11 - 20', meta: '1314', },
  
]






export default [
  {
    url: '/api/login/card',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: {
          name: '登陆成功'
        },
      }
    },

  },
   {
     url: '/api/gredit/card',
     method: 'post',
     response: () => {
       return {
         code: 0,
         
         idcard:'161***********64661',
         image:'	htp://creditcard3.ccb.com/cn/creditcard/upload/2019923135237316109.png',
         money:'19420',
         billsearch
         
       }
     }
 
   },


  //提交申请信息
  {
    url: '/api/submit/card',
    method: 'post',
    response: (req) => {
      return 'errorcord:0', '提交成功'
    }
  },
  {
    url: '/api/fenqi',
    method: 'post',
    response: (req) => {
      return{
        code: 0,
        billsearch1
      } 
    }
  },
  {
    url: '/api/users/yzm',
    method: 'get',
    response: () => {
      return 'yzm:1231'
    }
  },

  {
    url: '/api/test',
    method: 'get',
    response: (req) => {
      return movies
      /*    return movies.find((v)=> v.id === req.query.id) */
    },
  },
  //申请信用卡类型信息
  {
    url: '/api/apply',
    method: 'get',
    response: (req, res) => {
      return {
        code: 0,
        applycard


      }

    },
  },

  {
    url: '/api/pay/money',
    method: 'post',
    response: (req, res) => {
      return {
        code: 0,
        conten:'提交成功'
      

      }

    },
  },
  

  {
    url: '/api/apply/cota',
    method: 'post',
    response: (req, res) => {
      return {
        code: 0,
        conten:'提交成功'   

      }

    },
  },
  {
    url: '/api/userloan/selectAllByUserId/4',
    method: 'get',
    response: (req, res) => {
      return {
        "code": 0,
        "msg": "操作成功",
        "data":[
          {
            "userLoanId":"2",
            "userId": 1,
            "userLoanTypeLimit": 36,
            "userLoanTypeTarget": "商业贷款",
            "userLoanAmount": 6000.0,
            "userLoanMonth": 6,
            "loanRateId": null,
            "userLoanRate": 0.056,
            "userLoanInterest": 1,
            "examine": "是",
            "userLoanPaid": 2500.0,
            "userLoanUnPaid": 3500.0,
            "userLoanMonthPay": 300,
            "userWork":"国家电网",
            "userIncome": 5500.0,
            "userLoanDate": "2022-3-15",
            "status": "申请中"
          }
        ]
      }
    },
  },
  {
    url: '/api/userloan/repaymentList',
    method: 'get',
    response: (req, res) => {
      return {
        "code": 0,
        "msg": "操作成功",
        "data":[
          {
            "userLoanId": "12121212",
            "userLoanDate": "2023.1.26",
            "userLoanAmount": "300000",
            "userLoanUnPaid": "260000",
            "userLoanMonthPay": "4000",
            "status": "还款中",
            "remainLoanMonth": "21",
            "userLoanInterest": "200"
          }
        ]
      }
    },
  },
]













