import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('../views/Login.vue')
const Index = () => import('../views/Index.vue')
const ApplyCard = () => import('../views/ApplyCard.vue')
const Baoxian = () => import('../views/Baoxian.vue')
const Register = () => import('../views/Register.vue')
const Operation = () => import('../views/Operation.vue')





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        auth:false
      }
    }, {
      path: '/login',
      name: 'login',
      component: Login,
     
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
     
    },
    {
      path: '/applycard',
      name: 'applycard',
      component: ApplyCard,
    
    },
    {
      path: '/operation',
      name: 'operation',
      component: Operation,
    
    },
    {
      path: '/baoxian',
      name: 'baoxian',
      component: Baoxian,
      /* meta:{
        auth:false
      } */
    },

  ]
})
/* 
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    store.dispatch('usersToken/info').then((res) => {
      if (res.data.errcode === 0) { //token校验成功
        next()
      }
      else { //token校验失败
        next('/login')
      }
    })
  }
  else {
    next()
  }
}) */


export default router
