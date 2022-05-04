import Vue from 'vue'
import VueRouter from 'vue-router'
import EVENT from '@/views/EVENT'
import GridSystem from '@/views/GridSystem'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'EVENT',
    component: EVENT
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
