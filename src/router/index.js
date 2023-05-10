import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const Login = () => import('../views/Login.vue')
const Index = () => import('../views/Index.vue')
const Message = () => import('../views/Message.vue')
const Bill = () => import('../views/Bill.vue')
const ApplyCard = () => import('../views/ApplyCard.vue')
const Baoxian = () => import('../views/Baoxian.vue')
const Register = () => import('../views/Register.vue')
const Operation = () => import('../views/Operation.vue')
const LoanForm = () => import('../views/userloan/LoanForm.vue')
const Repayment = () => import('../views/userloan/Repayment.vue')
const LoanList = () => import('../views/userloan/LoanList.vue')
const Getmoney = () => import('../views/Getmoney.vue')
const Problem = () => import('../views/Problem.vue')
const Safety = () => import('../views/Safety.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        auth: false
      }
    }, {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        auth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        auth: false
      }

    },
    {
      path: '/getmoney',
      name: 'getmoney',
      component: Getmoney,
      meta: {
        auth: true
      }
    },
    {
      path: '/applycard',
      name: 'applycard',
      component: ApplyCard,
      meta: {
        auth: false
      }

    },
    {
      path: '/operation',
      name: 'operation',
      component: Operation,
      meta:{
        auth:false
      }

    },
    ,
    {
      path: '/problem',
      name: 'problem',
      component: Problem,
      meta:{
        auth:false
      }

    },
    {
      path: '/safety',
      name: 'safety',
      component: Safety,
      meta: {
        auth: false
      }

    },
    {
      path: '/baoxian',
      name: 'baoxian',
      component: Baoxian,
      meta: {
        auth: false
      }
    }
    ,
    {
      path: '/loanform',
      name: 'loanForm',
      component: LoanForm
    },
    {
      path: '/repayment',
      name: 'repayment',
      component: Repayment
    }
    ,
    {
      path: '/message',
      name: 'message',
      component: Message,
      children:[
        {
          path:'bill',
          name:'bill',
          component:Bill,
        }
      ]
    },
    {
      path: '/loanlist',
      name: 'loanList',
      component: LoanList
    }

  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    console.log(1111)
    store.commit('userToken/updateUsername', '15012341234')
    store.dispatch('userToken/info').then((res) => {
      console.log(res);
      if (res.data.code === 0) {  //token校验成功
        next()

      } else {  //token校验失败
        // console.log("进来了")
        next('/login')
      }
    })
  }
  else {
    next()
  }
  // if (to.meta.auth) {
  //   console.log('全局首位已启动');
  //   store.commit('userToken/updateUsername', '15012341234')
  //   console.log(111);
  //   // store.commit('userToken/updateUsername','15012341234')
  //   next()
  //   /* store.dispatch('usersToken/info').then((res) => {
  //     if (res.data.errcode === 0) { //token校验成功
  //       next()
  //     }
  //     else { //token校验失败
  //       next('/login')
  //     }
  //   }) */
  // }
  // else {
  //   next()
  // }
})


export default router
