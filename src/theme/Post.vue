<template>
  <div class="card">
    <div class="card-content">
      <h3>{{ post.title }}</h3>
      {{ post.content }}
    </div>
    <footer class="card-footer">
      <!-- You can use v-bind:href or just :href to bind a dynamic value to the attribute-->
      <a class="card-footer-item" v-bind:href="post.link" target="_blank">Read More</a>
    </footer>
  </div>
</template>
<script>
  export default {
    props: ['post'] // reserved property. THis is an array that bings the property of the component with the
    // attribute of the element. In this case we used post.
  }
</script>
