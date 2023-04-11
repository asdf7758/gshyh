import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('../views/Login.vue')
const Index = () => import('../views/Index.vue')
const message = () => import('../views/message.vue')



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
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})

export default router
