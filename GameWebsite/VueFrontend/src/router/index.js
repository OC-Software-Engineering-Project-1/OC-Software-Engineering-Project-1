import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GameLobbies from "../views/GameLobbies.vue";
import Game from "../views/Game.vue";

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
        path: "/gamelobbies",
        name: "gamelobbies",
        component: GameLobbies,
        meta: {
            requiresAuth: true
          }
    },
    {
        path: "/game",
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
        component: () => import("../views/login.vue")
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/register.vue")
    }
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