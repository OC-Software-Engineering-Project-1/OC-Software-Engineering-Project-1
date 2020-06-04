<template>
    <div class="gameLobbies">
    <h1>Empty Game</h1>
        <h1>{{ gameTitle }}</h1>
        <p>Empty Game was voted most exhilarating game of 2020! There are no rules! Good luck!</p>
        <ul id="lobbyList" style="list-style: none;">
            <li v-for="(lobby, index) in lobbyList" :key="index">
                <div>
                    <h3>Host: {{ lobby.host }}</h3>
                    <h3>Seats Available: ({{ lobby.occupancy }}/{{ lobby.capacity }})</h3>
                    <router-link :to="{ name: 'game', params: { lobby: lobby }}" tag="button">Join</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script src="./game-lobbies.js"></script>