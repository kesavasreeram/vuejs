import Vue from 'vue'
import Post from '../../../src/theme/Post.vue'

describe('Post.vue', () => {
  const createComponent = (url) => {
    const PostConstructor = Vue.extend(Post) // this will extend the Post componenet and create a sub class
    const urlMock = url || ''
    const postComponent = new PostConstructor({
      propsData: {
        link: urlMock
      }
    }).$mount() // this will mount the created component within phanthom browser

    return postComponent
  }

  it('should render the link', () => {
    const urlMock = 'https://some.dummy.url'
    const component = createComponent(urlMock)

    // lets use the assertions from chai to make sure that the component generated has all expected data
    expect(component.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal(urlMock)
  })

  it('should update the element\'s href when the link property is update', (done) => {
    const urlMock = 'https://some.dummy.url'
    const component = createComponent(urlMock)
    // lets use the assertions from chai to make sure that the component generated has all expected data
    expect(component.$el.querySelector('.card-footer-item').getAttribute('href'))
      .to.equal(urlMock)

    const urlMockUpdated = 'https://some.other.dummy.url'
    component.link = urlMockUpdated
    // we need to make sure that the dom is updated before asserting that the content is updated
    // vue has a method called nextTick which has a callback. This callback will be executed when the
    // dom update cycle is completed.
    Vue.nextTick(() => {
      expect(component.$el.querySelector('.card-footer-item').getAttribute('href'))
        .to.equal(urlMockUpdated)
      done() // since nextTick is an async call, we need to wait till the async call is executed before continuing or else we will get false results
    })
  })
})
