import GameService from '@/services/gameService';
import VueJwtDecode from "vue-jwt-decode";

export default {
    name: 'GameLobbies',
    props: {
        game: Object,
        gameTitle: String,
        gameURL: String,
        gameImage: String,
        gameDescription1: String,
        gameDescription2: String,
        lobbyList: Array
    },
    mounted() {
        this.getGameData()
    },
    methods: {
        async getGameData() {
            const response = await GameService.getGame(this.gameTitle)
            this.game = response.data
            this.gameTitle = this.game.name
            this.gameURL = `http://localhost:3000` + "/" + this.game.name.replace(" ", '')
            this.gameImage = this.gameURL + "/ReferencePic.png"
            this.gameDescription1 = this.game.description1
            this.gameDescription2 = this.game.description2

            if (this.gameDescription2.length <= 0) {
                this.$refs.collapseButton.style.display = "none"
            }
        },
        async getLobbies() {
            const response = await GameService.getGameLobbies()
            this.lobbyList = response.data

            // The below code filters out full lobbies.
            //
            //this.lobbyList = response.data.filter(function (lobby) {
            //    return lobby.players.length != lobby.capacity
            //})
        },
        async createLobby() {
            const response = await GameService.getUser()
            const lobbyResponse = await GameService.createGameLobby(this.gameTitle, response.data["email"])
            this.$router.push({ name: "game", params: { lobby: lobbyResponse, gameURL: this.gameURL } })
        },
        async joinLobby(lobby) {
            const response = await GameService.getUser()

            if (lobby.players.includes(response.data["email"])) {
                alert("You have already joined this lobby.")
                return
            }

            const lobbyResponse = await GameService.joinGameLobby(lobby._id, response.data["email"])

            if (lobbyResponse.data["players"].includes(response.data["email"])) {
                this.$router.push({ name: "game", params: { lobby: lobby, gameURL: this.gameURL } })
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