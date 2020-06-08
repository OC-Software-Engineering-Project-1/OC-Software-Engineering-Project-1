<template>
    <div class="home">
        <h1>Board Game Website</h1>
        <ul class="list-group">
            <li class="list-group-item">Name : {{ user }}</li>
            <li class="list-group-item">Email : {{ user.email }}</li>
        </ul>
    </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script src="./home.js"></script>