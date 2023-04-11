import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store'
<<<<<<< HEAD

import vant from 'vant'
=======
// import './assets/main.css'
>>>>>>> 4e410922b986a83051865241fd582d7625b883b4

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router)
app.use(ElementPlus)
<<<<<<< HEAD
app.use(vant)
=======
>>>>>>> 4e410922b986a83051865241fd582d7625b883b4
app.use(store)
app.mount('#app')
