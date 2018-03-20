import 'es6-promise/auto'
import Vue from 'vue'
import Category from '../../../src/theme/Category.vue'
import store from '../../../src/state-management.js'
import VueRouter from 'vue-router'

describe('Category.vue', () => {
  Vue.use(VueRouter)
  // lets initialize the router and set the default to category
  // so the route will have a state and will not be null

  const router = new VueRouter({
    routes: [
      {
        path: '/',
        component: Category
      }
    ]
  })
  const vm = new Vue({
    el: document.createElement('div'),
    router,
    store,
    render: h => h('router-view')
  })

  it('should load front-end links', () => {


  })
})
