<template>
    <div class="home">
        <h1>Board Game Website</h1>
        <p>
            <router-link :to="{ name: 'gamelobbies', params: { lobbyList: lobbyListData }}">Game Lobbies</router-link>
        </p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

