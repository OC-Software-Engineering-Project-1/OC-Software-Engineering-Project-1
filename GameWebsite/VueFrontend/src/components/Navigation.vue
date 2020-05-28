// Credits to Maegan Wilson (source: https://medium.com/@maeganwilson_/how-to-create-a-navigation-bar-in-vue-js-8a70e7f29f80)
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

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      activeIndex: undefined,
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/home'
        },
        {
          id: 1,
          text: 'Game Lobbies',
          page:'/gamelobbies'
        },
        {
          id: 2,
          text: 'About',
          page: '/about'
        },
        {
          id: 3,
          text: 'Logout',
          page:'/logout'
        },
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
    overflow: hidden;
    background-color: #0041a8;
    padding: 0;
    display: block;
}

.last {
  float:right !important;
  border-right: none !important;
}

.navbar a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 25px;
    /* border-right: 1px solid #bbb; */
}

.navbar a:hover:not(.router-link-active) {
  background-color: #34d2eb;
  color: #FFFFFF;
  transition: all 0.25s;
}

.router-link-active {
  background-color: #e4b303;
  transition: all 0.25s;
}
</style>
