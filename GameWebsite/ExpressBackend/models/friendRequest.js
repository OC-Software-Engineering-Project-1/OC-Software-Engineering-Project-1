const mongoose = require('mongoose');


const FriendRequestSchema = new mongoose.Schema({

    status:{
        type:String,
        required:true,
        default:"pending",
        trim:true
       },

    
})