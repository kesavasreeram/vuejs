import Vue from 'vue'
import AppLayout from './theme/Layout.vue' // within the import statement you are providing an alias for the vue component you are importing
// in this files, the component within Layout.vue is aliased as AppLayout

// // What does the following statement do?
// // Vue instance will control a part or the whole application. The object which is being passed as the variable
// // to this instance creation will contain the details.

// const app = new Vue({
//   // el: '#app',
//   // property to determine the part of the application being controlled by this vue instance
//   // in this case we are selecting an element in dom which has an id called 'app', hence the prefix '#'
//   // if you want to select an element of class 'app' you can provide '.app' but it will pick the first element of class 'app'
//   // rather than all elements of class 'app'
//   // there is another way in which the vue instance can be allocated to a dom element, by using $mount on the vue instance
//   // $mount allows you to explicitly mount the Vue instance when you need to. This means that you can delay the mounting
//   // of your vue instance until a particular element exists in your page or some async process has finished, which can be
//   // particularly useful when adding vue to legacy apps which inject elements into the DOM,
//   data: { // the data model which is being modified by this instance
//     name: 'Vue js practice app',
//     website: 'https://www.facebook.com'
//   },
//   methods: { // as the name suggests, this will hold the methods accessible within this instance
//     func1: function (parameters) { // they can have parameters are well
//       // within this we can access all of the data using 'this' keyword followed by the property name
//       // ex: this.name to access the name property within the data object.
//       return 'func1 was called'
//     }
//   },
//   template: `<app-component></app-component>`
// }) // creating a vue instance.

// // we can declare a component in vue using Vue.component followed by the component name and structure of the component
// Vue.component('app', {
//   template: `
//     <div id="app">
//       <nav class="nav has-shadow">
//         <div class="container">
//           <a href="/">
//             <img src="http://bit.ly/vue-img"
//               alt="Vue SPA" />
//           </a>
//         </div>
//       </nav>
//       <section class="main-section section"></section>
//       <footer class="footer">
//         <div class="container">
//           <div class="content has-text-centered">
//             Follow us on
//             <a href="https://twitter.com"
//             target="_blank">Twitter</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   `
// })

// const app = new Vue({
//   render: h => h('app') // vue js property that will return an element. Here we want to return appComponent
//   // this render function will be similar to using ` template: '<app></app>' `
// })

// const app = new Vue({
//   render: h => h(AppLayout)
// })

// once we start implementing the .vue files, there is no need to use the render function explicitly
// render is alread available within the .vue file. So you can use spread syntax as below
// however that doesnt automatically do the same thing as render as most of the ES6 functionality are not
// suitable or supported in all loaders. So lets try to use babel transpiler and its dependencies, and update webpack base config file

const app = new Vue({
  ...AppLayout
})

// Now export the app variable object in JSON export so that it will be accessible to other files
export { app }
