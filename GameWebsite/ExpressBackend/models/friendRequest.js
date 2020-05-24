const mongoose = require('mongoose');

const User = require('./user')

const FriendRequestSchema = new mongoose.Schema({
//Status={"Pending","Answered"}
    status:{
        type:String,
        enum:["PENDING","ANSWERED"],
        default:"PENDING",
        trim:true
       },
    requestor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    recipient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    
    
})
const FriendRequest=mongoose.model('FriendRequest', FriendRequestSchema)
module.exports= FriendRequest