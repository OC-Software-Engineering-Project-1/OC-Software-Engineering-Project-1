<template>
    <div class="gamesContent">
        <div class="header">Welcome to the Game Website!</div>
        <hr>
        <div class="games">
            <ul id="gameList">
                <li v-for="(game, index) in gameList" :key="index">
                    <div class="container">
                        <img :src="'http://localhost:3000/' + game.name.replace(&quot; &quot;, '') + '/ReferencePic.PNG'" class="gameImg"> 
                        <router-link :to="{ name: 'gamelobbies', params: { gameTitle: game.name }}" tag="button" class="gameButton">{{ game.name }}</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="./games.js"></script>

<style scoped src="./games.css"></style>