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

GameSessionSchema.methods.addUser=async (userId)=>{
    const user = User.findOne({"_id":userId})
    if(!user){
        throw("Unable to add user!")
    }
    this.users.push({"_id":userId})
};
GameSessionSchema.methods.removeUser=async (userId)=>{
    const user = User.findOne({"_id":userId})
    if(!user){
        throw("Unable to add user!")
    }
    this.users.filter((user)=>{ return user!=userId})
};
GameSessionSchema.methods.addGroup=async (groupId)=>{
    const group = Group.findOne({"_id":groupId})
    if(!group){
        throw("Unable to add group!")
    }
    this.groups.push({"_id":groupId})
};
GameSessionSchema.methods.removeGroup=async (groupId)=>{
    const group = Group.findOne({"_id":groupId})
    if(!group){
        throw("Unable to add user!")
    }
    this.groups.filter((group)=>{ return group!=groupId})
};

const GameSession=mongoose.model('GameSession', GameSessionSchema)
module.exports= GameSession