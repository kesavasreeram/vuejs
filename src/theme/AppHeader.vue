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

      <!-- <router-link class="navbar-item is-tab" to="/category/front-end" exact>Front-end</router-link>
      <router-link class="navbar-item is-tab" to="/category/mobile" exact>Mobile</router-link> -->

      <!-- taking advantage of 'exact' is good in case of static routes, but that is not always the case. -->
      <!-- we will come across route using query parameters, which are dynamic and accounting for all the usecases -->
      <!-- is not easy if you want to stick with 'exact'. So we need more symantic access to the routes -->
      <!-- we can achieve this by passing objetc to the route and let the vue js parse the 'to' attribute -->
      <!-- by add ':' infront of 'to' attribute. -->
      <router-link class="navbar-item is-tab" :to="{ name: 'category', params: { id: 'front-end' } }" exact>Front-end</router-link>
      <router-link class="navbar-item is-tab" :to="{ name: 'category', params: { id: 'mobile' } }" exact>Mobile</router-link>
      <router-link class="navbar-item is-tab" to="/login" exact>Login</router-link>
    </div>
  </nav>
</template>
