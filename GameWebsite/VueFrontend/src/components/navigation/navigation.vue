<!-- Credits to Maegan Wilson (source: https://medium.com/@maeganwilson_/how-to-create-a-navigation-bar-in-vue-js-8a70e7f29f80) -->
<template>
    <div class="navbar"> 
      <nav> 
        <router-link v-for="(routes,index) in links"
        :class="{
          first : index === 0,
          last : index === (links.length-1)
        }"
        :key="routes.id" 
        :to="`${routes.page}`">
          {{ routes.text }}
        </router-link>  
      </nav> 
  </div>
</template>

<script src="./navigation.js"></script>

<style scoped src="./navbar.css"></style>
