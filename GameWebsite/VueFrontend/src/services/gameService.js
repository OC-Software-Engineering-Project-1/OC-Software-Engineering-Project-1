import Api from '@/services/api'
import Path from 'path'

export default {
    getGameList() {
        return Api().get('/games')
    }
}