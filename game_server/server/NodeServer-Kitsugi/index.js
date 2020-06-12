var io = require("socket.io")(
  process.env.PORT || parseInt(process.argv[2]) || 200
);

//Custom Classes
var Player = require("./Classes/Player");

console.log("Server Has Started");
var playerCount = 0;
var players = [];
var sockets = [];
var board = [];

//When a user connects to the server
io.on("connection", function (socket) {
  console.log("A Player Connected");

  var player = new Player();
  var thisPlayerID = player.id;

  players[thisPlayerID] = player;
  sockets[thisPlayerID] = socket;
  playerCount += 1;

  //Tell Client they have connected with a specic ID
  socket.emit("register", { id: thisPlayerID });

  //Tell myself about all other clients
  for (var playerID in players) {
    if (playerID != thisPlayerID) {
      socket.emit("spawn", players[playerID]);
    }
  }

  socket.emit("spawn", player); //Tell own client I spawned
  socket.broadcast.emit("spawn", player); // Tell all other clients I have joined

  //If I am the first player get the board state
  if (playerCount == 1) {
    console.log("BOARD GENERATE");
    socket.emit("sendBoard", { id: thisPlayerID });
  }

  socket.on("sendBoard", function (data) {
    console.log("sendBoard Recieved");
    console.log(data.board);
    this.board = data.board;
  });

  socket.on("getBoard", function (data) {
    socket.emit("getBoard", { board: board });
  });

  //Tell all other clients about my position
  socket.on("updatePosition", function (data) {
    player.position = data.position;

    socket.broadcast.emit("updatePosition", player);
  });

  socket.on("updateUsername", function (data) {
    temp = player.id;
    player.id = data.username;

    name = {
      oldId: temp,
      newId: player.id,
    };

    socket.broadcast.emit("updateUsername", name);
  });

  //Tell all other clients about my roll
  socket.on("makeMove", function (data) {
    console.log(data.roll);
    move = {
      id: thisPlayerID,
      roll: data.roll,
    };
    socket.broadcast.emit("makeMove", move);
  });

  //Tell all other clients I disconnected
  socket.on("disconnect", function () {
    console.log("A Player has Disconnected");
    delete players[thisPlayerID];
    delete sockets[thisPlayerID];
    playerCount -= 1;
    socket.broadcast.emit("disconnected", player);
  });
});
