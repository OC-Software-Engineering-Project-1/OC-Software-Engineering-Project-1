const mongoose = require('mongoose');


const GameSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    frequency:{
        type:Number,
        required:true,
        default:0
    }
    
})



const Game=mongoose.model('Game', GameSchema)
module.exports= Game