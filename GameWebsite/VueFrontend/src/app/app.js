import Navigation from './components/navigation/navigation.vue'

export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  },
  computed: {
    shouldShowNav() {
      return !(this.$route.name === null || this.$route.name === 'login' || this.$route.name === 'register');
    }
  }
}
