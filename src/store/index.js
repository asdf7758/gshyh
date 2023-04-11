<<<<<<< HEAD

=======
>>>>>>> 4e410922b986a83051865241fd582d7625b883b4
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