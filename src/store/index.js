import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
const store = createStore({
  modules: {
  },
  plugins: [createPersistedState({
    paths:['users.token']
  })],
})

export default store;