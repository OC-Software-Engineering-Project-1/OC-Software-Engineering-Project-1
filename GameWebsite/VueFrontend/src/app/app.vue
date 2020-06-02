<template>
	<div id="app">
		<div class="hidden">
        <Navigation v-show="shouldShowNav"></Navigation>
      </div>
    <router-view />
	</div>
</template>

<script src="./app.js"></script>
