import Vue from 'vue'
import Vuex from 'vuex'

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
    logout (context) {
      context.commit('logout') // commit command will create a mutation, which will update the state
    }
  },
  mutations: {
    logout (state) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('loginToken', null)
        window.localStorage.setItem('loginTokenExpiration', null)
      }
      state.isAuthenticated = false
    }
  }
})

export default stateStore
