<template>
  <div class="columns">
    <div class="column is-one-third" v-for="post in posts" v-bind:key="post.id">
      <!-- :post is the name of the attribute of the component app-post -->
      <app-post :link="post.rest_api_enabler.link">
        <!-- In some situations we can get away with passing data to the custom componenet
        however in some situations we may want to have more control over the child elements
        one way to do it is to have flags within the propeties passed to the custom element
        and use the flag to switch the content. But this will result in a large template full of
        flag checks.
        Other way to solve it is by using slot. Slot is a reseved keyword in vue. You can declare
        the custom template using a slot attribute and matching the name of the slot within the
        custom component template to make sure the rendered DOM elements are dispalyed
        In this case we have two slots, one for title and other for content.-->
        <h3 slot="title">{{ post.title.rendered }}</h3>
        <!-- This api returns html data along with element tags E.g (<p>Lets use ....</p>) -->
        <!-- This data needs to be sanitized before rendering them in brower -->
        <!-- This can be done by using v-html instead of binding the data using {{}} -->
        <span slot="content" v-html="post.excerpt.rendered"></span>
      </app-post>
    </div>
  </div>
</template>
<script>
  import Post from './Post.vue'
  import AppService from '../app.service.js'

  export default {
    components: {
      'app-post': Post
    },
    data () {
      return {
        // vue js exposes the router through $route which can be accessed through this.$route
        // using this route object you can navigate to another route using this.$route.push(<route>)
        // or access the parameters within route using this.$route.params
        id: this.$route.params.id,
        posts: []
      }
    },
    methods: {
      loadPosts () {
        let categoryId = 2

        if (this.id === 'mobile') {
          categoryId = 11
        }

        AppService.getPosts(categoryId, 10)
          .then(data => {
            this.posts = data
          })
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.params.id !== this.id) {
          this.id = to.params.id
          this.loadPosts()
        }
      }
    },
    created () {
      // this will be triggered whenever the component is created
      // however it will not be triggered if we updating the route parameters and using the same component
      // in order to resolve this we need to check if the route params changed to trigger the loadPosts method.
      this.loadPosts()
    }
  }
</script>
