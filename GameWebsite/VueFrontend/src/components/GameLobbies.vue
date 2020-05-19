<template>
    <div class="gameLobbies">
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
</style>