import Vue from 'vue'
import Vuex from 'vuex'
import appService from './app.service.js'

Vue.use(Vuex)

const state = {
  isAuthenticated: false
}

const stateStore = new Vuex.Store({
  state,
  getters: { // getters is a reserved property which act as a computed property
    isAuthenticated: (state) => {
      return state.isAuthenticated
    }
  },
  actions: {
    login (context, credentials) {
      return new Promise((resolve, reject) => {
        appService.login(credentials)
          .then((data) => {
            context.commit('login', data)
            resolve()
          })
          .catch(() => window.alert('Could not login!!'))
      })
    },
    logout (context) {
      context.commit('logout') // commit command will create a mutation, which will update the state
    }
  },
  mutations: {
    login (state, data) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('loginToken', data.token)
        window.localStorage.setItem('loginTokenExpiration', data.expiration)
      }
      state.isAuthenticated = true
    },
    logout (state) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('loginToken', null)
        window.localStorage.setItem('loginTokenExpiration', null)
      }
      state.isAuthenticated = false
    }
  }
})

if (typeof window !== 'undefined') {
  // trigger an event once the document is loaded
  document.addEventListener('DOMContentLoaded', function (event) {
    let expiration = window.localStorage.getItem('loginTokenExpiration')
    var timeStampInSecs = new Date().getTime() / 1000

    if (this.isAuthenticated && expiration !== null && (parseInt(expiration) - timeStampInSecs > 0)) {
      stateStore.state.isAuthenticated = true
    } else {
      stateStore.state.isAuthenticated = false
    }
  })
}

export default stateStore
