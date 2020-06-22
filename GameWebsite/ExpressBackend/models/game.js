const mongoose = require('mongoose');


const GameSchema = new mongoose.Schema({

    name:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    description1: {
        type: String,
        trim: true
    },
    description2: {
        type: String,
        trim: true
    },
    frequency:{
        type:Number,
        required:true,
        default:0
    }
    
})

const Game=mongoose.model('Game', GameSchema)
module.exports= Game