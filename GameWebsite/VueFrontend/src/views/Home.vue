<template>
    <div class="home">
        <h1>Board Game Website</h1>
        <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" @click="logUserOut"> Logout</a>
            </li>
          </ul>
        <p>
            <router-link :to="{ name: 'gamelobbies', params: { lobbyList: lobbyListData }}">Game Lobbies</router-link>
        </p>
        <ul class="list-group">
              <li class="list-group-item">Name : {{ user.name }}</li>
              <li class="list-group-item">Email : {{ user.email }}</li>
        </ul>
    </div>
    
</template>

<script>
    export default {
        name: 'Home',
        props: {
            title: String
        }
    };
</script>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
    import GameLobbies from "./GameLobbies.vue";
    import Game from "./Game.vue";

    export default {
        name: 'Home',
        components: {
            GameLobbies,
            Game,
        }
    };
</script>
<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    }
  },
  created() {
    this.getUserDetails();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

