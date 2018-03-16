import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'

const appService = {
  getPosts (categoryId, pageSize) {
    return new Promise((resolve) => {
      axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${pageSize}`)
        .then(response => {
          resolve(response.data)
        })
    })
  }
}

export default appService
