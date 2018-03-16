import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'

const appService = {
  getPosts (categoryId, pageSize) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${pageSize}`
        )
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
