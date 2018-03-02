new Vue({
    el: '#app',  // property to determine the part of the application being controlled by this vue instance
    data: {      // the data model which is being modified by this instance
        name: 'Vue js practice app',
        website: 'https://www.facebook.com'
    },
    methods: {   // as the name suggests, this will hold the methods accessible within this instance
        func1: function(parameters) { // they can have parameters are well

            // within this we can access all of the data using 'this' keyword followed by the property name
            // ex: this.name to access the name property within the data object.
            return 'func1 was called'
        }
    }
}); // creating a vue instance.

// What does this do?
// Vue instance will control a part or the whole application. The object which is being passed as the variable
// to this instance creation will contain the details.