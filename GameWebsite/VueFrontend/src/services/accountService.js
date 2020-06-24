import Api from '@/services/api'

export default {
    
    getUser() {
        return Api().get('/users/me', { headers: { "Authorization": "Bearer " + localStorage.getItem("jwt") } })
    },
    
}