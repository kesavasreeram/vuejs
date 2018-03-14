import Vue from 'vue'

// What does the following statement do?
// Vue instance will control a part or the whole application. The object which is being passed as the variable
// to this instance creation will contain the details.

const app = new Vue({
  // el: '#app',
  // property to determine the part of the application being controlled by this vue instance
  // in this case we are selecting an element in dom which has an id called 'app', hence the prefix '#'
  // if you want to select an element of class 'app' you can provide '.app' but it will pick the first element of class 'app'
  // rather than all elements of class 'app'
  // there is another way in which the vue instance can be allocated to a dom element, by using $mount on the vue instance
  // $mount allows you to explicitly mount the Vue instance when you need to. This means that you can delay the mounting
  // of your vue instance until a particular element exists in your page or some async process has finished, which can be
  // particularly useful when adding vue to legacy apps which inject elements into the DOM,
  data: { // the data model which is being modified by this instance
    name: 'Vue js practice app',
    website: 'https://www.facebook.com'
  },
  methods: { // as the name suggests, this will hold the methods accessible within this instance
    func1: function (parameters) { // they can have parameters are well
      // within this we can access all of the data using 'this' keyword followed by the property name
      // ex: this.name to access the name property within the data object.
      return 'func1 was called'
    }
  },
  template: `<div id='app'>
      <h1>{{name}}</h1>
      <h1>{{func1()}}</h1>
      <a href='website'>Facebook</a>
    </div>`
}) // creating a vue instance.

// Now export the app variable object in JSON export so that it will be accessible to other files
export { app }
