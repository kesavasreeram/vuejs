import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'

// use the vue router within vue.
Vue.use(VueRouter)

const router = new VueRouter({
  // this is needed or else it will add '#' in between domain and the page path.
  // lets take advantage of the history api available within vue and skip the #
  mode: 'history',
  // if there is a tab and you want the active tab to be shown with updated styles
  // linkActiveClass is a reserved property in vue-router to add a class to route which is active
  linkActiveClass: 'is-active',
  // you can also use
  // scrollBehavior: (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   }
  //   if (to.hash) {
  //     return { selector: to.hash }
  //   }
  // },
  scrollBehavior: (to, from, savedPosition) => ({
    y: 0
  }),
  // notice that both '/' and '/login' contain '/'. so is-active class is applied for both of the routes
  // whenever /login is selected. this can be resolved using exact match.
  routes: [
    {
      path: '/category/:id',
      component: Category
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/category/front-end'
    }
  ]
})

export default router
