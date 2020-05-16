import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Home from './components/Home.vue'
import GameLobbies from './components/GameLobbies.vue'

Vue.config.productionTip = true;
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            props: true
        },
        {
            path: '/gamelobbies',
            name: 'gamelobbies',
            component: GameLobbies,
            props: true
        }
    ]
});

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
