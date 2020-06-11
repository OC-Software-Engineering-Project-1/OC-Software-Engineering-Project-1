<!-- Credits to Maegan Wilson (source: https://medium.com/@maeganwilson_/how-to-create-a-navigation-bar-in-vue-js-8a70e7f29f80) -->
<template>
  <div class="navbar clearfix">
    <div class="dropdown">
      <button class="dropbtn" @click="showList">User Info</button>
      <div class="dropdown-content" id="myDropdown">
        <nav>
          <router-link v-for="(routes,index) in dropdownLinks"
          :class="{
            firstLink : index === 0,
            lastLink : index === (dropdownLinks.length - 1)
          }"
          :key="routes.id"
          :to="`${routes.page}`">
            {{ routes.text }}
          </router-link>
        </nav>
      </div>
    </div> 
    <nav> 
      <router-link v-for="(routes,index) in links"
      :class="{
        first : index === 0
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
