<template>
  <div class="columns">
    <div class="column is-one-third" v-for="post in posts" v-bind:key="post.id">
      <!-- :post is the name of the attribute of the component app-post -->
      <app-post :link="post.link">
        <!-- In some situations we can get away with passing data to the custom componenet
        however in some situations we may want to have more control over the child elements
        one way to do it is to have flags within the propeties passed to the custom element
        and use the flag to switch the content. But this will result in a large template full of
        flag checks.
        Other way to solve it is by using slot. Slot is a reseved keyword in vue. You can declare
        the custom template using a slot attribute and matching the name of the slot within the
        custom component template to make sure the rendered DOM elements are dispalyed
        In this case we have two slots, one for title and other for content.-->
        <h3 slot="title">{{ post.title }}</h3>
        <span slot="content">{{ post.content }}</span>
      </app-post>
    </div>
  </div>
</template>
<script>
  import Post from './Post.vue'
  export default {
    components: {
      'app-post': Post
    },
    data () {
      return {
        posts: [
          { id: 1, title: 'PWA Stats', content: 'A community-driven list of stats and news related to Progressive Web Apps', link: 'https://www.pwastats.com/' },
          { id: 2, title: 'A Comprehensive Guide To HTTP/2 Server Push', content: 'No longer is HTTP/2 a feature we pine for. It has arrived, and with it comes server push!', link: 'https://www.smashingmagazine.com/2017/04/guide-http2-server-push/' },
          { id: 3, title: 'So what’s this GraphQL thing I keep hearing about?', content: 'Why now is the perfect time to learn what exactly this GraphQL thing you keep hearing about really is.', link: 'https://medium.freecodecamp.com/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf' },
          { id: 4, title: 'State of The Mobile Gap Between Native and Web', content: 'Clearly PhoneGap, and Cordova are still required today in the mobile world, but when is it really needed? Did the web ever catch up?', link: 'https://remysharp.com/2016/05/28/state-of-the-gap' },
          { id: 5, title: 'Learning JavaScript Design Patterns', content: 'Design patterns are reusable solutions to commonly occurring problems in software design.', link: 'https://addyosmani.com/resources/essentialjsdesignpatterns/book/' },
          { id: 6, title: 'The Power of Custom Directives in Vue', content: 'The beautiful thing about Vue is that it\'s incredibly feature-rich.', link: 'https://css-tricks.com/power-custom-directives-vue/' }
        ]
      }
    }
  }
</script>
