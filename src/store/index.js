
import { createStore } from 'vuex'
// import users from './modules/users'
import createPersistedState from "vuex-persistedstate";
const store = createStore({
  modules: {
  },
  plugins: [createPersistedState({
    paths:['users.token']
  })],
})

export default store;