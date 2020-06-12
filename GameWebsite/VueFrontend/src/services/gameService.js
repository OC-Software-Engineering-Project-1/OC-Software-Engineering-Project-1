import Api from '@/services/api'
import Path from 'path'

export default {
    getGameList() {
        return Api().get('/games')
    },
    getGameLobbies(gameTitle) {
        return Api().get(Path.combine('/gameServers', gameTitle))
    },
    createGameLobby(gameTitle, username) {
        //xhr = new XMLHttpRequest();
        //var url = "url";
        //xhr.open("POST", url, true);
        //xhr.setRequestHeader("Content-type", "application/json");
        //xhr.onreadystatechange = function () {
        //    if (xhr.readyState == 4 && xhr.status == 200) {
        //        var json = JSON.parse(xhr.responseText);
        //        console.log(json.email + ", " + json.name)
        //    }
        //}
        //var data = JSON.stringify({ "email": "tomb@raider.com", "name": "LaraCroft" });
        //xhr.send(data);
        //////////////////////////////////////////////
        const newServerData = {
            hostUser: username,
            game: gameTitle,
            capacity: "4"
        }

        Api().post('/gameServers', newServerData)
    }
}