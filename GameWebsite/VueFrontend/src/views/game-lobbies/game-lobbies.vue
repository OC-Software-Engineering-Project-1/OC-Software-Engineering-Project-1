<template>
    <div class="gameLobbies">
        <h1>{{ this.gameTitle }}</h1>
        <p>Empty Game was voted most exhilarating game of 2020! There are no rules! Good luck!</p>
        <button v-on:click="createLobby">Create New Lobby</button>
        <ul id="lobbyList" style="list-style: none;">
            <li v-for="(lobby) in lobbyList" :key="lobby.port">
                <div>
                    <h3>Host: {{ lobby.hostUser }}</h3>
                    <h3>Seats Available: ({{ lobby.players.length }}/{{ lobby.capacity }})</h3>
                    <button v-on:click="joinLobby(lobby)">Join Server</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script src="./game-lobbies.js"></script>