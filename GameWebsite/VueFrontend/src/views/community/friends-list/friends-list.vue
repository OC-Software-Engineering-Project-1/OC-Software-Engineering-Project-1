<template>
	<div>
		<div class="m-3 p-3 list-entry" v-for="(f, index) in allFriends" :key="index">
			<span class="float-left mr-3 image-placeholder"><!--the profile image would go here--></span>
			<span class="font-weight-bold">{{ f.username }}</span>
			<button class="btn-orange float-right px-2 ml-3">
				<svg class="bi bi-chat-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
				</svg>
				Message
			</button>
			<button class="btn-orange float-right px-2 ml-3">
				<svg class="bi bi-x-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z" />
				</svg>
				Remove Friend				
			</button>
			<br />
			<span>mutual friends: {{ f.mutualFriendsCount }}</span>
		</div>
	</div>
</template>

<script src="./friends-list.js"></script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>
<style scoped src="../community.css"></style>