import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "Checkout" */ '../views/Checkout.vue')
  },
  {
    path: '/Pago',
    name: 'Pago',
    component: () => import(/* webpackChunkName: "Pago" */ '../views/Pago.vue')
  },
  {
    path: '/Exito',
    name: 'Exito',
    component: () => import(/* webpackChunkName: "Exito" */ '../views/Exito.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
