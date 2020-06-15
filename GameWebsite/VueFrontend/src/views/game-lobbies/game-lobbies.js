import GameService from '@/services/gameService';
import VueJwtDecode from "vue-jwt-decode";

export default {
    name: 'GameLobbies',
    data() {
        return {
            gameTitle: this.$route.params.gameTitle,
            lobbyList: Array
        }
    },
    methods: {
        async getLobbies() {
            const response = await GameService.getGameLobbies()
            this.lobbyList = response.data.filter(function (lobby) {
                return lobby.players.length != lobby.capacity
            })
        },
        async createLobby() {
            const response = await GameService.getUser()
            const lobbyResponse = await GameService.createGameLobby(this.gameTitle, response.data["email"])
            this.$router.push({ name: "game", params: { lobby: lobbyResponse, gameURL: `http://localhost:3000` + "/" + this.gameTitle } })
        },
        async joinLobby(lobby) {
            const response = await GameService.getUser()

            if (lobby.players.includes(response.data["email"])) {
                alert("You have already joined this lobby.")
                return
            }

            const lobbyResponse = await GameService.joinGameLobby(lobby._id, response.data["email"])

            if (lobbyResponse.data["players"].includes(response.data["email"])) {
                this.$router.push({ name: "game", params: { lobby: lobby, gameURL: `http://localhost:3000` + "/" + this.gameTitle } })
            }
            else {
                alert("This lobby is full. Please refresh and try again.")
            }
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
        this.getLobbies()
        this.getUserDetails(); // need this in other pages
    },
};