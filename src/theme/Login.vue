<template>
  <div class="content">
    <div v-if="isAuthenticated">
      Hello authenticated user!
      <p>Name: {{profile.firstName}}</p>
      <p>Favourite Sandwich: {{profile.favouriteSandwich}}</p>
      <button v-on:click="logout()" class="button is-primary">Logout</button>
    </div>
    <div v-else>
      <h2>Login</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input v-model="username" class="input" type="text" placeholder="Your username">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input v-model="password" class="input" type="password" placeholder="Your password">
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button v-on:click="login()" class="button is-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import appService from '../app.service.js'

  export default {
    data () {
      return {
        username: '',
        password: '',
        isAuthenticated: false,
        profile: {}
      }
    },
    // we are adding a watcher for isAuthenticated to make sure that everytime this component is
    // invoked, we do not want to invoke the getProfile method if the isAuthenticated flag is true
    // we want to cache the profile.
    watch: {
      isAuthenticated: function (val) {
        if (val) {
          appService.getProfile()
            .then(profile => {
              this.profile = profile
            })
        } else {
          this.profile = {}
        }
      }
    },
    methods: {
      login () {
        appService.login({
          username: this.username,
          password: this.password
        })
          .then((data) => {
            window.localStorage.setItem('loginToken', data.token)
            window.localStorage.setItem('loginTokenExpiration', data.expiration)
            this.isAuthenticated = true
            this.username = ''
            this.password = ''
          })
          .catch(() => window.alert('Could not login!!'))
      },
      logout () {
        window.localStorage.removeItem('loginToken')
        window.localStorage.removeItem('loginTokenExpiration')
        this.isAuthenticated = false
        this.profile = {}
      }
    },
    created () {
      let expiration = window.localStorage.getItem('loginTokenExpiration')
      var timeStampInSecs = new Date().getTime() / 1000

      if (this.isAuthenticated && expiration !== null && (parseInt(expiration) - timeStampInSecs > 0)) {
        this.isAuthenticated = true
      } else {
        this.isAuthenticated = false
      }
    }
  }
</script>
