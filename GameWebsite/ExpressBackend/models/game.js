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
        trim:true
    },
    
    

    
})