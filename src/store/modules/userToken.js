//用户的状态管理
const state = {
    // token:''
  }
  const actions = {//同步
    // info(context, data){
    //   return http.get('/login', data)
    // }
  }
  const getters = {}
  const mutations = {
    updateToken(state,payload){
      state.token = payload
    },
  /*   clearToken(state) {
      state.token = ''
  }, */
  }
   
  export default {
      namespaced: true,
      state,
      actions,
      getters,
      mutations
    }