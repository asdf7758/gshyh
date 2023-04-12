import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('../views/Login.vue')
const Index = () => import('../views/Index.vue')
<<<<<<< HEAD
const UserLoan = () => import('../views/userloan/Index.vue')
const LoanApplicationForm = () => import('../views/userloan/LoanApplicationForm.vue')
const SubmitSuccess = () => import('../views/userloan/SubmitSuccess.vue')
const ApplicationDetail = () => import('../views/userloan/ApplicationDetail.vue')
=======
const message = () => import('../views/message.vue')
>>>>>>> ed289251334f19fe18508304b03a20a556e4e13a

ApplicationDetail
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/login',
      name: 'login',
      component: Login
    },
<<<<<<< HEAD
    ,{
      path: '/userloan',
      name: 'userLoanindex',
      component: UserLoan
    },
    {
      path: '/loanform',
      name: 'loanApplicationForm',
      component: LoanApplicationForm
    },
    {
      path: '/submitsuccess',
      name: 'submitSuccess',
      component: SubmitSuccess
    },
    {
      path: '/applicationdetail',
      name: 'applicationDetail',
      component: ApplicationDetail
=======
    {
      path: '/message',
      name: 'message',
      component: message
>>>>>>> ed289251334f19fe18508304b03a20a556e4e13a
    }
  ]
})

export default router
