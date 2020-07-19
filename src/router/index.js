import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../../src/App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
