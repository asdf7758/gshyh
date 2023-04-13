const state = {
    token: ''
}
const actions = {//同步
    info(context, data) {
        return http.get('users/info', data)
    }
}
const getters = {}
const mutations = {
    updateToken(state, payload) {
        state.token = payload
    },
    clearToken(state) {
        state.token = ''
    },
}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}