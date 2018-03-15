<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <!-- <a href="/">
        <img src="http://bit.ly/vue-img"
          alt="Vue SPA" />
      </a> -->
      <!-- using the anchor tag will make the whole page to reload when ever user clicks on the tag-->
      <!-- we just want to make sure that the content is refreshed rather than the whole page reload-->
      <!-- this can be achieved by using router-link tag. Router-link tells the application to update -->
      <!-- the content of router-view with whatever content the router is providing -->
      <router-link to="/">
        <img src="http://bit.ly/vue-img"
          alt="Vue SPA" />
      </router-link>
      <!-- lets add more route links to the page -->
      <!-- 'exact' is a reserved attribute in vue to make sure that the router picks up exact route matching -->
      <!-- for example consider /about and /about/contact . In this case if you havent used the 'exact' attribute -->
      <!-- both /about and /about/contact are considered as active routes when /about/contact is selected and -->
      <!-- displays the content of the route depending on which route is resolved at the end. Which is not desirable -->
      <router-link class="navbar-item is-tab" to="/category/front-end" exact>Home</router-link>
      <router-link class="navbar-item is-tab" to="/login" exact>Login</router-link>
    </div>
  </nav>
</template>
