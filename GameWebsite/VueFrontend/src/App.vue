<template>
    <div id="app">
            <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
            </div>
            
            <router-view @authenticated="setAuthenticated" />
        
    </div>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount:{
                    username: "admin",                //Use this credentials for testing. Wait until Database is implemented to connect with backend
                    password: "password",
                },
                lobbyListData: [
                    {
                        "gameTitle": "Cryptogram Game",
                        "occupancy": "1",
                        "capacity": "2"
                    },
                    {
                        "gameTitle": "Kintsugi",
                        "occupancy": "3",
                        "capacity": "4"
                    }
                ]
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    };
</script>

<style>
</style>

