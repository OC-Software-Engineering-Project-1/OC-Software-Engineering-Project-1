<template>
	<div>
		<h1>{{ lobby.gameTitle }}</h1>
		<h2>{{ lobby.port }}</h2>
		<iframe id='webgl_iframe' frameborder="0" allow="autoplay; fullscreen; vr" allowfullscreen="" allowvr="" mozallowfullscreen="true"
				src="https://connect.unity3dusercontent.com/webgl/e7d074d1-e369-4064-b0b8-216057593f0f?screenshot=false&embedType=embed"
				width="810" height="640" onmousewheel="" webkitallowfullscreen="true"></iframe>
	</div>
</template>

<script src="./game.js"></script>