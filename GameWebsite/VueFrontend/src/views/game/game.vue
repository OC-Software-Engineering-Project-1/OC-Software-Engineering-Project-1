<template>
    <div>
        <h1>{{ lobby.gameTitle }}</h1>
        <h2>{{ lobby.port }}</h2>
        <iframe id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr="" mozallowfullscreen="true"
                :src="lobby.gameURL" width="960" height="650" onmousewheel="" webkitallowfullscreen="true"></iframe>
    </div>
</template>

<script src="./game.js"></script>