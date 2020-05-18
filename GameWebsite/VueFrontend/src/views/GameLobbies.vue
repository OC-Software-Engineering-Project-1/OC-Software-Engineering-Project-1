<template>
    <div class="gameLobbies">
        <ul id="lobbyList" style="list-style: none;">
            <li v-for="(lobby, index) in lobbyList" :key="index">
                <router-link :to="{ name: 'game', params: { lobby: lobby }}">
                    {{ lobby.gameTitle }} ({{ lobby.occupancy }}/{{ lobby.capacity }})
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'GameLobbies',
        data() {
            return {
                lobbyList: [
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

<style scoped>
</style>