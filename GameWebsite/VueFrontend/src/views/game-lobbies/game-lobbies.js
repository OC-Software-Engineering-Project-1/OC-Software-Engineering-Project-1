import GameService from '@/services/gameService';
import VueJwtDecode from "vue-jwt-decode";

export default {
    name: 'GameLobbies',
    props: {
        gameTitle: String,
        lobbyList: Object
    },
    mounted() {
        this.getLobbies()
    },
    methods: {
        async getLobbies() {
            const response = await GameService.getGameLobbies(this.gameTitle)
            this.gameList = response.data
        },
        createLobby: async function () {
            console.log("TEST")
            await GameService.createLobby(this.gameTitle, this.user.email)
        },
        getUserDetails() {
            let token = localStorage.getItem("jwt");
            let decoded = VueJwtDecode.decode(token);
            this.user = decoded;
            if (localStorage.getItem("jwt") == "") {
                this.$router.push("/")
                alert("Need to be authenticated")
            }
        }

    },
    created() {
        this.getUserDetails(); // need this in other pages
    },
};