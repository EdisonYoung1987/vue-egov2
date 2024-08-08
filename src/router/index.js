import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        
        name: 'Dashboard',
        component: () => import('../views/Layout/Home/Home.vue'),
        
      },
      {
        path: '/order',
        
        name: 'order',
        component: () => import('../views/Layout/Order/OrderList/OrderList.vue'),
        children: [
          {
            path: 'order-list',
            component: () => import('../views/Layout/Order/OrderList/OrderList.vue')
          },
          {
            path: 'order-back',
            component: () => import('../views/Layout/Order/OrderBack/OrderBack.vue')
          },
          {
            path: 'order-back2',
            component: () => import('../views/Layout/Order/OrderBack/OrderBack.vue')
          },
        ]
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
