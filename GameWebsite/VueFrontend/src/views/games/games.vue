<template>
    <div class="games">
        <ul id="gameList" style="list-style: none;">
            <li v-for="(game, index) in gameList" :key="index">
                <div>
                    <router-link :to="{ name: 'gamelobbies', params: { gameTitle: game.name }}" tag="button">{{ game.name }}</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script src="./games.js"></script>