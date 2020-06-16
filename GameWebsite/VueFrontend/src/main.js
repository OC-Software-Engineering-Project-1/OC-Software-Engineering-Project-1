import Vue from "vue";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from "./app/app.vue";
import router from "./router";
import axios from "axios";
import '../fa.config';

Vue.use(BootstrapVue);

const base = axios.create({
  baseURL: "http://localhost:3000"
});


Vue.prototype.$http = base;
Vue.config.productionTip = false;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


