<template>
  <div class="card">
    <div class="card-content">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
    <footer class="card-footer">
      <!-- You can use v-bind:href or just :href to bind a dynamic value to the attribute-->
      <a class="card-footer-item" v-bind:href="link" target="_blank">Read More</a>
    </footer>
  </div>
</template>
<script>
  export default {
    props: ['link'] // reserved property. THis is an array that bings the property of the component with the
    // attribute of the element. In this case we used post.
  }
</script>
