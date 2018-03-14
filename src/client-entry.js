// import the app variable from app.js
import { app } from './app';

// mount the app variable to the DOM elements. The selection of dom elements is
// done using the selection parameter, # is used for selecting elements by id
// . is used for selecting elements by class. In case of class only first element of the class name
// is selected
app.$mount('#app');
