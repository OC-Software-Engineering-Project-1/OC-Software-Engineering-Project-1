const mongoose = require('mongoose');


const GameSchema = new mongoose.Schema({

    name:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    port:{
        type:Number,
        required:true
    },
    frequency:{
        type:Number,
        required:true,
        default:0
    }
    
})



const Game=mongoose.model('Game', GameSchema)
module.exports= Game