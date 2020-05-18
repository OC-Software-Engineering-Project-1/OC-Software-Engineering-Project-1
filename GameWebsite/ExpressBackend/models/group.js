const mongoose = require('mongoose');

const User = require('./user')
const GroupSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
       },
       users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
       }],

    
})

const Group=mongoose.model('Group', GroupSchema)
module.exports= Group