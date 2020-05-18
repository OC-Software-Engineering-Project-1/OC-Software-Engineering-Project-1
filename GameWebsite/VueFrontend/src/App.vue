<template>
    <div id="app">
        <p>
            <router-link :to="{ name: 'home', params: { title: 'Board Game Website' }}">Home</router-link>
            <br/>
            <router-link :to="{ name: 'gamelobbies', params: { lobbyList: lobbyListData }}">Game Lobbies</router-link>
        </p>
        <router-view />
    </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
    import Home from './components/Home.vue';
    import GameLobbies from './components/GameLobbies.vue';

    export default {
        name: 'app',
        components: {
            Home,
            GameLobbies
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

