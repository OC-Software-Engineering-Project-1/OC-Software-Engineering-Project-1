
const mongoose = require('mongoose');


const ScoreSchema = new mongoose.Schema({

    score:{
        type:Number,
        required:true,
        default:0,
        trim:true
    },

    
})