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

<script src="./game-lobbies.js"></script>