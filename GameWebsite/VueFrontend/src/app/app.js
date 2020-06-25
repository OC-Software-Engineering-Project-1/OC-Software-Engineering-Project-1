import Navigation from '../components/navigation/navigation.vue'
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';


// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  },
  computed: {
    shouldShowNav() {
      return !(this.$route.name === null || this.$route.name === 'login' || this.$route.name === 'logout' || this.$route.name === 'register');
    }
  }
}
