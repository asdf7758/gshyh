

import http from "../utils/http";

//发送验证码
function sendYzm() {
  return http.get('/users/yzm')
}

//登录
function login(data) {
  return http.post('/users/login', data)
}
//信用卡登录
function loginCard(data) {
  return http.post('/login/card', data)
}

// 校验token，返回用户信息
// 很多个接口都需要携带token，所以不用一个一个去传递，可以通过请求头携带token
function info() {
  return http.get('/users/info')
}
//申请信用卡类型信息
function apply() {              
  return http.get('/apply')
}
//信用卡个人信息
 function greditcard(data){
  return http.post('/gredit/card',data)


 }
 // 信用卡还款

 function  payMoney(data){
  return http.post('/pay/money',data)

 }


//申请额度

 function applycota(data){

  return http.post('/apply/cota',data)
 }


//提交信用卡信息
function submitCard() {              
  return http.post('/submit/card')
}


export {
  sendYzm,
  login,
  info,
  apply,
  submitCard,
  loginCard,
  greditcard,
  payMoney,
  applycota

}