
const movies = [
  {id: '1300022', nm: '不止不休', desc: '由真实事件改编，贾樟柯监制，白客、张颂文以“调查记者”视角，讲述“一个人为一亿人发声”的反歧视故事。全员飚戏，演绎年度必看现实题材良心佳作！2003年的中国，社会变革激荡，人们野心勃勃。当时互联网尚未席卷一切，纸媒为王。没钱、没学历、没背景的“三无青年” 韩东(白客 饰)怀揣新闻理想与女友小竹(苗苗 饰)开始了北漂生涯，期间在知名记者黄江(张颂文 饰)的帮助下进入报社实习，在一次案件调查中，韩东发现了背后更大的真相。一边是光明的前途，一边是心中的正义，韩东在两难中选择挺身而出……'},
  {id: '1410386', nm: '铃芽之旅', desc: '生活在日本九州田舍的17岁少女・铃芽遇见了为了寻找“门”而踏上旅途的青年。追随着青年的脚步，铃芽来到了山上一片废墟之地，在这里静静伫立着一扇古老的门，仿佛是坍塌中存留的唯一遗迹。铃芽仿佛被什么吸引了一般，将手伸向了那扇门…不久之后，日本各地的门开始一扇一扇地打开。据说，开着的门必须关上，否则灾祸将会从门的那一边降临于现世。星星，夕阳，拂晓，误入之境的天空，仿佛溶解了一切的时间。在神秘之门的引导下，铃芽踏上了关门的旅途。'},
  {id: '1418991', nm: '回廊亭', desc: '根据东野圭吾畅销悬疑小说《长长的回廊》改编。回廊亭大宅中暗藏无数秘密，绝望女人为爱复仇的欲望纷争正在上演！富商病逝，他的亲属们聚集在回廊亭等待数⼗亿遗产将会如何分配，众⼈各怀⿁胎。关键时刻，律师周扬带着遗嘱和一本神秘日记而来，更牵扯出⼀场发⽣在一年前的⽕灾凶杀案，死者是富商流落在外的私⽣⼦，更是全部遗产的第⼀顺位继承⼈！凶⼿，似乎就隐藏在众⼈之中……'}
];


export default [
  {
    url: '/api/test1',
    method: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          name: 'vben',
        },
      }
    },
  },
  {
    url: '/api/test',
    method: 'get',
    response: (req) => {
      return movies
   /*    return movies.find((v)=> v.id === req.query.id) */
    },
  }
]













