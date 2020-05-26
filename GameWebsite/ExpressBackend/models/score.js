
const mongoose = require('mongoose');

const Game = require('./game')
const User = require('./user')

const ScoreSchema = new mongoose.Schema({

    score:{
        type:Number,
        required:true,
        default:0,
        trim:true
    },
    game:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Game'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }

    
})
const Score=mongoose.model('Score', ScoreSchema)
module.exports= Score