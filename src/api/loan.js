import http from "../utils/http";

// 获取贷款申请列表
function getLoanList(data) {
    // 获取全部的列表数据 用户id 为1 写死
    return http.get('/userloan/selectAllByUserId',data);
}

// 新增贷款数据
function addLoanInfo(data) {
    // 获取全部的列表数据 用户id 为1 写死
    return http.post('/userloan/add',data)
}


// 新增计算数据
function calculate(data) {
    // 获取全部的列表数据 用户id 为1 写死
    return http.get(`/userloan/calrate/${data.userLoanMonth}/${data.userLoanTypeTarget}/${data.userLoanAmount}`)
}

// 获取还款申请列表
function getRepaymentList(data) {
    return http.get('/userloan/repaymentList',data);
}


export{getLoanList,addLoanInfo,calculate,getRepaymentList};