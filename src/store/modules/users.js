/* //用户状态管理
import http from '@/utils/http.js'
<<<<<<< HEAD
=======

>>>>>>> 4e410922b986a83051865241fd582d7625b883b4
const state = {
    token: '',
    username:''
}
//掉接口信息
const actions = {
    yzm(context, data) {
        return http.get('/users/yzm', data)
    },
    login(context, data) {
        return http.post('/users/login', data)
    },
    info(context, data) {
        return http.get('users/info', data)
    }
}
const getters = {}
const mutations = {
    updateToken(state, payload) {
        state.token = payload;
    },
    clearToken(state) {
        state.token = ''
    },
    updateUsername(state, payload){
        state.username = payload
    }
}
<<<<<<< HEAD
=======


>>>>>>> 4e410922b986a83051865241fd582d7625b883b4
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
<<<<<<< HEAD
=======

>>>>>>> 4e410922b986a83051865241fd582d7625b883b4
} */