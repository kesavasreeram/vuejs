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
  }
})

export default stateStore
