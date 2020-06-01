import Api from '@/services/api'
import Path from 'path'

export default {
    fetchGame(gameName) {
        return Api().get(Path.join('/games', gameName))
    }
}