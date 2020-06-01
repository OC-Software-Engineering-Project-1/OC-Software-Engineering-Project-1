import GameLobbies from "../game-lobbies/game-lobbies.vue";
import Game from "../game/game.vue";
import VueJwtDecode from "vue-jwt-decode";

export default {
    name: 'Home',
    props: {
        title: String
    },
    components: {
        GameLobbies,
        Game,
    },
    data() {
        return {
            //user: {
            //    firstName,
            //    email
            //},
            lobbyList: [
                {
                    "gameTitle": "Cryptogram Game",
                    "occupancy": "1",
                    "capacity": "2",
                    "gameID": "00001",
                    "port": "1111"
                },
                {
                    "gameTitle": "Kintsugi",
                    "occupancy": "3",
                    "capacity": "4",
                    "gameID": "00002",
                    "port": "2222"
                }
            ]

        };
    },
    methods: {
        getUserDetails() {
            let token = localStorage.getItem("jwt");
            let decoded = VueJwtDecode.decode(token);
            this.user = decoded;
        },
        logUserOut() {
            localStorage.removeItem("jwt");
            this.$router.push("/");
        }
    },
    created() {
        this.getUserDetails();
    }
};