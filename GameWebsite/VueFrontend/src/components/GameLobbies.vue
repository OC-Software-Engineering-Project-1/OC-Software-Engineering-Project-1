<template>
    <div class="gameLobbies">
        <h1>{{ title }}</h1>
        <p>
        <router-link :to="{ name: 'home', params: { title: 'Board Game Website' }}">Home</router-link>
        <br/>
        <router-link :to="{ name: 'gamelobbies', params: { lobbyList: lobbyListData }}">Game Lobbies</router-link>
        <br/>
        </p>
        <ul id="lobbyList">
            <li v-for="(lobby, index) in lobbyList" :key="index">
                {{ lobby.gameTitle }} ({{ lobby.occupancy }}/{{ lobby.capacity }})
            </li>
        </ul>
    </div>
</template>

<script>
  
    export default {
        name: 'GameLobbies',
        
        props: {
            lobbyList: Array
        }
    };
</script>

<style scoped>
    #gameLobbies {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>