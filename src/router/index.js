import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('../views/Login.vue')
const Index = () => import('../views/Index.vue')
const UserLoan = () => import('../views/userloan/Index.vue')
const LoanApplicationForm = () => import('../views/userloan/LoanApplicationForm.vue')
const SubmitSuccess = () => import('../views/userloan/SubmitSuccess.vue')
const ApplicationDetail = () => import('../views/userloan/ApplicationDetail.vue')

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
    }
  ]
})

export default router
