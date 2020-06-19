const express = require('express');
const router = express.Router();
const path = require('path');


const Game = require('../../models/game')
const GameSession = require('../../models/gameSession')
const auth = require('../../middleware/auth')



//get a list of games from the db
router.get('/games', async function (req, res) {
    try {
        const games = await Game.find()
        res.send(games)
    } catch (e) {
        res.status(500).send(e)
    }

});

// get game from the db by name
router.get('/games/:name', async function (req, res) {
    const name = req.params.name
    try {
        const game = await Game.findOne({ name: name });
        if(!game){
           return res.status(404).send()
        }
        //Use aggregate method to count the frequency of the game
        const gameSession = await GameSession.find({game:game._id})
        game["frequency"] = gameSession.length
      //   console.log(game)
        res.send(game)
    } catch (e) {
        res.status(400).send(e)
    }
});

//add a new games  to the db
router.post('/games', async function (req, res) {
    const game = new Game(req.body)
    try {
        await game.save()

        res.status(201).send(game)
    } catch (e) {
        res.status(400).send(e)
    }
});

// update game in the db
router.put('/games/:id', async function (req, res) {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    try {
        const game = await Game.findOne({ _id })
        const allowedUpdates = ['locationUrl', 'name', 'description1', 'description2']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
        if (!isValidOperation) {
            return res.status(400).send({ 'Error': 'Invalid Updates!' });
        }
        updates.forEach((update) => {

            game[update] = req.body[update]

        })
        if (!game) {
            res.status(404).send()
        }
        await game.save()
        res.status(201).send(game)
    } catch (e) {
        res.status(400).send(e)
    }
});

//delete game from the db
router.delete('/games/:id', async function (req, res) {
    const _id = req.params.id
    try {
        const game = await Game.findOneAndDelete({ _id })
        if (!game) {
            return res.status(404).send()
        }
        res.send(game)
    } catch (e) {
        res.status(400).send(e)
    }

});

module.exports = router;