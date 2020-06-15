<template>
    <div>
        <iframe id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr="" mozallowfullscreen="true"
                :src="gameURL" width="960" height="650" onmousewheel="" webkitallowfullscreen="true"></iframe>
    </div>
</template>

<script src="./game.js"></script>