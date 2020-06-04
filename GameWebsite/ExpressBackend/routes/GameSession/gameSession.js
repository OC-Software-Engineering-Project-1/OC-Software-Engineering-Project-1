const express = require("express");
const router = express.Router();

const Game = require("../../models/game");
const User = require("../../models/user");
const Group = require("../../models/group");
const GameSession = require("../../models/gameSession");

//get a list of all gamesSessions from the db
router.get("/gameSessions", async function (req, res) {
  try {
    const gameSession = await GameSession.find().populate("game users groups");
    res.send(gameSession);
  } catch (e) {
    res.status(500).send(e);
  }
});

// get one gamesSession from the db by Id
router.get("/gameSessions/:id", async function (req, res) {
  const _id = req.params.id;
  try {
    const gameSession = await GameSession.findOne({ _id }).populate(
      "game users groups"
    );
    if (!gameSession) {
      res.status(404).send();
    }
    res.send(gameSession);
  } catch (e) {
    res.status(400).send(e);
  }
});

//add a new gamesSessions  to the db
router.post("/gameSessions", async function (req, res) {
  const gameSession = new GameSession(req.body);
  try {
    await gameSession.save();

    res.status(201).send(gameSession);
  } catch (e) {
    res.status(400).send(e);
  }
});
// update gamesSession in the db
router.put("/gameSessions/:id", async function (req, res) {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  try {
    const gameSession = await GameSession.findOne({ _id });
    const allowedUpdates = ["isActive", "game"];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
      return res.status(400).send({ Error: "Invalid Updates!" });
    }
    updates.forEach((update) => {
      gameSession[update] = req.body[update];
    });
    if (!gameSession) {
      res.status(404).send();
    }
    await gameSession.save();
    res.status(201).send(gameSession);
  } catch (e) {
    res.status(400).send(e);
  }
});
//delete gamesSession from the db
router.delete("/gameSessions/:id", async function (req, res) {
  const _id = req.params.id;
  try {
    const gameSession = await GameSession.findOneAndDelete({ _id });
    if (!gameSession) {
      return res.status(404).send();
    }
    
    res.send();
  } catch (e) {
    res.status(400).send(e);
  }
});
//remove user
router.delete("/gameSessions/:sessionId/users/:userId", async function (
  req,
  res
) {
   const _id=req.params.userId
  try {
    const gameSession = await GameSession.findOne({
      _id: req.params.sessionId
    });
    const user = await User.findOne({ _id});
    if (!gameSession || !user) {
      return res.status(404).send();
    }

       //check if user is already in gamesession
       if(!gameSession["users"].includes(user._id)){
         return res.status(400).send({"Error":"User not found!"})
       }
       gameSession["users"]=gameSession["users"].filter((user) => {
      return user.toString() !== req.params.userId.toString();
    });
    await gameSession.save();
    res.send(gameSession);
  } catch (e) {
    res.status(500).send(e);
  }
});

//remove group
router.delete("/gameSessions/:sessionId/groups/:groupId", async function (
  req,
  res
) {
  try {
    const gameSession = await GameSession.findOne({
      _id: req.params.sessionId,
    });
    const group = await Group.findOne({ _id: req.params.groupId });
    if (!gameSession || !group) {
      return res.status(404).send();
    }
      //check if group does not exist in gamesession
      if(!gameSession["groups"].includes(group._id)){
         return res.status(400).send({"Error":"Group not found!"})
       }
    gameSession["groups"] = gameSession["groups"].filter((group) => {
      return group.toString() !== req.params.groupId.toString();
    });
    await gameSession.save();
    res.send(gameSession);
  } catch (e) {
    res.status(500).send(e);
  }
});

//add user
router.post("/gameSessions/:sessionId/users", async function (req, res) {
  try {
    const gameSession = await GameSession.findOne({
      _id: req.params.sessionId,
    });

    const user = await User.findOne({ _id: req.body.userId });
    if (!gameSession || !user) {
      return res.status(404).send();
    }
    //check if user is already in gamesession
    if(gameSession["users"].includes(user._id)){
      return res.status(400).send({"Error":"User already exists"})
    }
    gameSession["users"].push({ _id: req.body.userId });
    await gameSession.save();
    res.status(201).send(gameSession);
  } catch (e) {
    res.status(500).send(e);
  }
});

//add group
router.post("/gameSessions/:sessionId/groups", async function (req, res) {
  try {
    const gameSession = await GameSession.findOne({
      _id: req.params.sessionId,
    });
    const group = await Group.findOne({ _id: req.body.groupId });
    if (!gameSession || !group) {
      return res.status(404).send();
    }
    
    //check if group is already in gamesession
    if(gameSession["groups"].includes(group._id)){
      return res.status(400).send({"Error":"Group already exists"})
    }

    gameSession["groups"].push({ _id: req.body.groupId });
    await gameSession.save();

    res.status(201).send(gameSession);
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = router;
