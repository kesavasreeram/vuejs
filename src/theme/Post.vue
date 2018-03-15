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
<style scoped>
  /* scoped keyword within the the style tag makes sure that the styles defined within this vue component
  doesnt bleed into the application. This makes sure that the application will not be affected adversely when
  a style within a child component is changed.

  In this example, we added custom styles to footer element within this child component. However if we didnt
  scope these custom styles within this child component they will affect the parent footer element as well.
  Which is not desired.*/
  .card {
    height: 100%;
    padding-bottom: 40px;
  }

  footer {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
  }
</style>

