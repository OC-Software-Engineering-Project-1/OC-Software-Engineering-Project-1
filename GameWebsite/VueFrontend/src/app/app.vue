<template>
	<div id="app">
		<div class="hidden">
        <Navigation v-show="shouldShowNav"></Navigation>
      </div>
    <router-view />
	</div>
</template>

<style>
[v-cloak].hidden {
   display: none;
}
</style>

<script src="./app.js"></script>
