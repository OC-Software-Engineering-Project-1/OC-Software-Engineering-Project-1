<template>
    <div id="app">
        <div class="hidden">
          <Navigation v-show="shouldShowNav"></Navigation>
        </div>
        <router-view />
    </div>
</template>

<style>
[v-cloak].hidden {
   display: none;
}
</style>

<script>
import Navigation from './components/Navigation'
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
</script>
