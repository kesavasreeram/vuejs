import appService from '../app.service.js'

const state = {
  posts: [],
  categoryId: 0
}

const getters = {
  posts: state => state.posts
}

const actions = {
  updateCategory (context, params) {
    let categoryId = params.categoryId
    let pageSize = params.pageSize

    return appService.getPosts(categoryId, pageSize)
      .then(data => {
        context.commit('updateCategory', { categoryId, posts: data })
      })
  }
}

const mutations = {
  updateCategory (state, category) {
    state.categoryId = category.categoryId
    state.posts = category.posts
  }
}

export default {
  namespaced: true, // this will make sure that the module can be reached by using the module name. When using this module name
  // only methods accessible from this module are available
  actions,
  getters,
  mutations,
  state
}
