export default {
    name: 'GameLobbies',
    props: {
        gameTitle: String
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