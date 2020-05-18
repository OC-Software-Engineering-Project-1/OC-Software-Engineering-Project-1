const mongoose = require('mongoose');


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
        
})