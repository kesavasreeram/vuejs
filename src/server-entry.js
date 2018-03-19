import { app, router, store } from './app.js'

export default context => { // exporting a function instead of an object
  router.push(context.url) // in server side rendering the content is loaded asyncly and some onload methods will not execute
  // in order to get past that we need to push current url to the router.

  return Promise.all(router.getMatchedComponents().map(component => {
    if (component.asyncData) {
      return component.asyncData(store, router.currentRoute)
    }
  })).then(() => {
    context.initialState = store.state

    return app
  })
}
