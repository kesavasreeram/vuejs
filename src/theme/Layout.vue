<template>
  <div>
    <app-header></app-header>
    <section class="main-section section">
      <div class="container content">
        <category></category>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  import Category from './Category.vue'
  // component will be exported as a JS module
  // default flag in the export makes sure that there is only one export within this file
  export default {
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'category': Category
    }
  }
</script>
<style lang='scss'>
  $primary: #287ab1;
  @import '~bulma'; // sass import style requires an @ in the front

  .columns {
    flex-wrap: wrap
  }
</style>

