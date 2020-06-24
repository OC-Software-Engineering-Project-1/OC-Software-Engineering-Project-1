// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

//Firebase config
const firebaseConfig = {
  // firebase initialization 
  apiKey: 'AIzaSyA0qVgt62Wn3RBsyAeaZTAZ6OE3_nVDV5w',
  authDomain: "oc-boardgames-85ef0.firebaseio.com",
  databaseURL: "https://oc-boardgames-85ef0.firebaseio.com",
  projectId: "oc-boardgames-85ef0",
  storageBucket: "gs://oc-boardgames-85ef0.appspot.com",
  messagingSenderId: "303496283538",
  appId: "1:303496283538:web:3f69e89774df3fccc56d4b"
};

firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
