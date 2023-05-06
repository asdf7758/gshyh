import http from "../utils/http";
//收支明细
function sendBill(data) {
    return http.get(`/bill/userBill/${data}`)
}
//账户总览
function sendBillTotal(data) {
    return http.get(`/bill/userBillTotal/${data}`)
}
//获取个人信息
function getPerson(data){
    return http.get('/user/userselect',data)
}
// 更改个人信息
function updatePerson(data,toke){
    return http.put('/user/userupdate',data,toke)
}

export{
    sendBill,
    sendBillTotal,
    getPerson,
    updatePerson
}
