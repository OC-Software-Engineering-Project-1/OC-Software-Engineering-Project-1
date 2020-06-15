import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/home.vue";
import Games from "../views/games/games.vue";
import GameLobbies from "../views/game-lobbies/game-lobbies.vue";
import Game from "../views/game/game.vue";
import About from "../views/about/about.vue";
import Account from "../views/account/account.vue";
import Community from "../views/community/community.vue";


Vue.use(VueRouter);
const routes = [
    {
        path: "/home",
        name: "home",
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/games",
        name: "games",
        component: Games,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/games/:gameTitle",
        name: "gamelobbies",
        component: GameLobbies,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/game/:port",
        name: "game",
        component: Game,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/",
        name: "login",
        component: () => import("../views/login/login.vue")
    },
    {
        path: "/logout",
        name: "logout",
        component: () => import("../views/logout/logout.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/",
        name: "login",
        component: () => import("../views/login/login.vue")
    },
    {
        path: "/about",
        name: "about",
        component: About,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/register/register.vue")
    },
    {
        path: "/account",
        name: "account",
        component: Account,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/community",
        name: "community",
        component: Community,
        meta: {
            requiresAuth: true
        }
    },
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("jwt") == null) {
            next({
                path: "/"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;