const mongoose = require("mongoose");

const Game = require("./game");
const User = require("./user");
const GameServerSchema = new mongoose.Schema({
  port: {
    type: Number,
    unique: true,
    required: true,
  },
  // numberOfConnectedPlayers:{
  //     type:Number,
  //     required:true
  // },
  capacity: {
    type: Number,
    required: true,
  },
  availability: {
    type: String,
    enum: ["PRIVATE", "PUBLIC"],
    default: "PUBLIC",
  },
  hostUser: {
    //username is email.
    type: String,
    required: true,
    ref: "User",
  },
  startTime: {
    type: Date,
    required: false,
    default: new Date()
  },
  game: {
    type: String,
    required: true,
    ref: "Game",
  },
  players: [
    {
      type: String,
      ref: "User",
    },
  ],
});

const GameServer = mongoose.model("GameServer", GameServerSchema);
module.exports = GameServer;
