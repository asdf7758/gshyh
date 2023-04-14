const state = {
    token: '',
    username:''
}
/* const actions = {//同步
    info(context, data) {
        return http.get('users/info', data)
    }
} */
const getters = {}
const mutations = {
    updateToken(state, payload) {
        state.token = payload
    },
    updateUsername(state, payload) {
        state.username = payload
    },

    clearToken(state) {
        state.token = ''
    },
}
export default {
    namespaced: true,
    state,
  /*   actions, */
    getters,
    mutations
}