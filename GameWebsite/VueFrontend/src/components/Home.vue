<template>
    <div class="home" id="home">
        <h1>{{ title }}</h1>
        <h5>Hi {{ username }}!</h5>
        <p>Welcome to your new single-page application, built with <a href="https://vuejs.org" target="_blank">Vue.js</a>.</p>
        <p>
        <router-link :to="{ name: 'home', params: { title: 'Board Game Website' }}">Home</router-link>
        <br/>
        <router-link :to="{ name: 'gamelobbies', params: { lobbyList: lobbyListData }}">Game Lobbies</router-link>
        <br/>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #home {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>

