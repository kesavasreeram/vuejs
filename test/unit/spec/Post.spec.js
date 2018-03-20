import Vue from 'vue'
import Post from '../../../src/theme/Post.vue'

describe('Post.vue', () => {
  it('should render the link', () => {
    const PostConstructor = Vue.extend(Post) // this will extend the Post componenet and create a sub class
    const urlMock = 'https://some.dummy.url'
    const postComponent = new PostConstructor({
      propsData: {
        link: urlMock
      }
    }).$mount() // this will mount the created component within phanthom browser

    // lets use the assertions from chai to make sure that the component generated has all expected data
    expect(postComponent.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal(urlMock)
  })
})
