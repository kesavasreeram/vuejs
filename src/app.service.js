import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'

// using interceptors to add information in headers so every request will have it automatically
axios.interceptors.request.use(function (config) {
  // if there is server side rendering and code doesnt run on browser, then the access to window
  // is not available. so lets have a check on window object availability
  if (typeof window === 'undefined') {
    return config
  }

  const token = window.localStorage.getItem('loginToken')

  if (token) {
    config.headers.Authoriazation = `Bearer ${token}`
  }

  return config
})

const appService = {
  getPosts (categoryId, pageSize) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${pageSize}`)
        .then(response => {
          resolve(response.data)
        })
        .catch(response => {
          reject(response.status)
        })
    })
  },
  getProfile () {
    // one way to make sure that the user profile information is requested successfully is to
    // add the login token within the headers. This can be done manually or automatically
    // below is the manual way of adding authorization token to every request sent to rest api calls
    // another way is to use interceptors
    return new Promise((resolve, reject) => {
      axios.get('/service/profile.php', {
        headers: {
          'Authoriazation': `Bearer ${window.localStorage.getItem('loginToken')}`
        }
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(response => {
          reject(response.status)
        })
    })
  },
  login (credentials) {
    return new Promise((resolve, reject) => {
      axios
        .post('/service/auth.php', credentials)
        .then(response => {
          resolve(response.data)
        })
        .catch(response => {
          reject(response.status)
        })
    })
  }
}

export default appService
