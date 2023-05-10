import http from "../utils/http";

// 获取贷款申请列表
function getLoanList(data,userId) {
    // 获取全部的列表数据 用户id 为1 写死
    return http.get(`/userloan/selectAllByUserId/${userId}`,data);
}

// 新增贷款数据
function addLoanInfo(data) {
    // 获取全部的列表数据 用户id 为1 写死
    return http.post('/userloan/applyloan',data)
}


// 新增计算数据
function calculate(data) {
    // 获取全部的列表数据 用户id 为1 写死
    return http.get(`/userloan/calrate/${data.userLoanMonth}/${data.userLoanTypeTarget}/${data.userLoanAmount}`)
}

// 还款确认
function repaymentMoney(data) {
    return http.put(`/userloan/payloan/${data.userId}/${data.userLoanId}/${data.bankCardId}/${data.userLoanPay}/${data.userPayPwd}`,data);
}

// 多条件筛选
function getSiftlist(data,userId){
    return http.get(`/userloan/screen?userId=${userId}`,data);
}


export{getLoanList,addLoanInfo,calculate,repaymentMoney,getSiftlist};