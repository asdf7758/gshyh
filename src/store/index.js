import { createStore } from 'vuex'
import usersToken from './modules/usersToken'
import createPersistedState from "vuex-persistedstate";
const store = createStore({
  modules: {
    usersToken
  },
  plugins: [createPersistedState({
    paths:['users.token']
  })],
})

export default store;