import http from "../utils/http";
//收支明细
function sendBill(data) {
    return http.get('/bill/userBill', data)
}
//账户总览
function sendBillTotal(data) {
    return http.get('/bill/userBillTotal', data)
}
export{
    sendBill,
    sendBillTotal
}
