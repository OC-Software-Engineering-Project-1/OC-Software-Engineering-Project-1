<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
    import Home from './views/Home.vue';
    import GameLobbies from "./views/GameLobbies.vue";
    import Game from "./views/Game.vue";

    export default {
        name: 'app',
        components: {
            Home,
            GameLobbies,
            Game,
        },
        data() {
            return {
                lobbyListData: [
                    {
                        "gameTitle": "Cryptogram Game",
                        "occupancy": "1",
                        "capacity": "2",
                        "gameID": "00001",
                        "port": "1111"
                    },
                    {
                        "gameTitle": "Kintsugi",
                        "occupancy": "3",
                        "capacity": "4",
                        "gameID": "00002",
                        "port": "2222"
                    }
                ]
            }
        }
    };
</script>

<style>
</style>

