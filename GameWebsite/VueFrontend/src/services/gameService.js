import Api from '@/services/api'

export default {
    getGameList() {
        return Api().get('/games')
    },
    getGameLobbies() {
        return Api().get('/gameServers')
    },
    getUser() {
        return Api().get('/users/me', { headers: { "Authorization": "Bearer " + localStorage.getItem("jwt") } })
    },
    createGameLobby(gameTitle, email) {
        Api().post('/gameServers', {
            capacity: '2',
            hostUser: email,
            game: gameTitle,
        })
    },
    joinGameLobby(serverId) {
        return Api().post('/gameServers/' + serverId + '/join', this.user, { headers: { "Authorization": "Bearer " + localStorage.getItem("jwt") } }).catch(() => {
            alert("Unable to join lobby. Please refresh and try again.")
        })
    }
}