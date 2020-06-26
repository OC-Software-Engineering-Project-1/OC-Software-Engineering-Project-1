<template>
	<div>
		<div class="m-3 p-3 news-entry" v-for="(e, index) in events" :key="index">
			<span class="font-weight-bold">{{ e.eventType }}</span>
			<br />
			by: <span class="user-link">{{ e.causedByUser }}</span>
			<span class="float-right font-italic">{{ e.timeStamp }}</span>
		</div>
	</div>
</template>

<script src="./news.js"></script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>
<style scoped src="../community.css"></style>