import { createStore } from 'vuex'
import userToken from './modules/userToken'
import createPersistedState from "vuex-persistedstate";
const store = createStore({
  modules: {
    // userToken
  },
  plugins: [createPersistedState({
    paths:['userToken.token']
  })],
})

export default store;