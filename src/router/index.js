import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: '/home',
        
        name: 'Dashboard',
        component: () => import('../views/Layout/Home/Home.vue')
      },
      {
        path: '/order',
        
        name: 'order',
        component: () => import('../views/Layout/Order/Order.vue')
      },
      {
        path: '/params',
        
        name: 'params',
        component: () => import('../views/Layout/Params/Prams.vue')
      },
    ]
  },
  {
    path: '/login', 
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
