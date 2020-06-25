<!-- Credits to Maegan Wilson (source: https://medium.com/@maeganwilson_/how-to-create-a-navigation-bar-in-vue-js-8a70e7f29f80) -->
<template>
  <div class="navbar clearfix">
    <div class="dropdown">
      <div class="dropbtn">
        <div class="profileBorder">
          <img v-if="avatar" :src="avatar" alt="profile_icon" class="profilePic" @click="showList"/>
          <img v-else src="./usericon.jpg" alt="profile_icon" class="profilePic" @click="showList">
        </div>
      </div>
      <div class="dropdown-content" id="myDropdown">
        <nav>
          <router-link v-for="(routes,index) in dropdownLinks"
          :class="{
            firstLink : index === 0,
            lastLink : index === (dropdownLinks.length - 1),
            otherLink
          }"
          :key="routes.id"
          :to="`${routes.page}`">
            <font-awesome-icon :icon="routes.icon" class="icon"></font-awesome-icon>
            {{ routes.text }}
          </router-link>
        </nav>
      </div>
    </div> 
    <nav> 
      <router-link v-for="routes in links"
      :key="routes.id" 
      :to="`${routes.page}`">
        {{ routes.text }}
      </router-link>  
    </nav>
    <div class="first">
      GameWebsite
    </div>
  </div>
</template>

<script src="./navigation.js"></script>

<style scoped src="./navbar.css"></style>
