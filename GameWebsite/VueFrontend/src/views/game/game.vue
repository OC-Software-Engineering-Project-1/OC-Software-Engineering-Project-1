<template>
    <div>
        <h1 class="gameTitle">The Game of Life</h1>
        <h1>{{ lobby.gameTitle }}</h1>
        <div class="game">
        <iframe id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr="" mozallowfullscreen="true"
                :src="lobby.gameURL" width="960" height="650" onmousewheel="" webkitallowfullscreen="true"></iframe>
        </div>
    </div>
</template>

<script src="./game.js"></script>
<style src="./game.css"></style>