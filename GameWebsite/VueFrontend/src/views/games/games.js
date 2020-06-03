import GameService from '@/services/gameService'
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
        }
    }
};