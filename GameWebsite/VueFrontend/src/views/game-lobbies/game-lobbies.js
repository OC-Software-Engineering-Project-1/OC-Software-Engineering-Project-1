import VueJwtDecode from "vue-jwt-decode";
export default {
    name: 'GameLobbies',
    props: {
        gameTitle: String
    },
    methods:{
        getUserDetails() {
            let token = localStorage.getItem("jwt");
            let decoded = VueJwtDecode.decode(token);
            this.user = decoded;
            if (localStorage.getItem("jwt")==""){
                this.$router.push("/")
                alert("Need to be authenticated")
            }


        }
    },
    created() {
        this.getUserDetails(); // need this in other pages
    },
    data() {
        return {
            lobbyList: [
                {
                    "port": "1111",
                    "occupancy": "3",
                    "capacity": "4",
                    "availability": "public",
                    "host": "chillindude829",
                    "gameURL": "http://localhost:3000/empty_game"
                },
                {
                    "port": "2222",
                    "occupancy": "2",
                    "capacity": "4",
                    "availability": "public",
                    "host": "mew2king",
                    "gameURL": "http://localhost:3000/empty_game"
                },
                {
                    "port": "3333",
                    "occupancy": "1",
                    "capacity": "4",
                    "availability": "private",
                    "host": "armada",
                    "gameURL": "http://localhost:3000/empty_game"
                },
            ]
        }
    }
};