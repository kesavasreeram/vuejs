import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'

// use the vue router within vue.
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // this is needed or else it will add '#' in between domain and the page path
  routes: [
    {
      path: '/',
      component: Category
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
