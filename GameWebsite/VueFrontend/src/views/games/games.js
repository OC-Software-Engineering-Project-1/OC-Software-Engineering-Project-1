import GameService from '@/services/gameService'
import VueJwtDecode from "vue-jwt-decode";
export default {
    name: 'Games',
    props: {
        gameList: Object
    },
    mounted() {
        this.getGames()
    },
    methods: {
        async getGames() {
            const response = await GameService.getGameList()
            this.gameList = response.data
        },
        getUserDetails() {
            let token = localStorage.getItem("jwt");
            let decoded = VueJwtDecode.decode(token);
            this.user = decoded;
            if (localStorage.getItem("jwt")==""){
                this.$router.push("/")
                alert("Need to be authenticated")
            }

        },
        
    },
    created() {
        this.getUserDetails(); // need this in other pages
    }
};