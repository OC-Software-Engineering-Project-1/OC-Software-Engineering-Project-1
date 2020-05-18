const mongoose = require('mongoose');

const Game = require('./game')
const User = require('./user')
const Group = require('./group')
const GameSessionSchema = new mongoose.Schema({

    isActive:{
        type:Boolean,
        required:true,
        trim:true
    },
    frequency:{
        type:Number,
        required:true,
        trim:true
    },
    game:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Game'
    },
    users:[
        {
       
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        
    }],
    groups:[
        {
       
            type:mongoose.Schema.Types.ObjectId,
            ref:'Group'
        
    }],

        
})
const GameSession=mongoose.model('GameSession', GameSessionSchema)
module.exports= GameSession