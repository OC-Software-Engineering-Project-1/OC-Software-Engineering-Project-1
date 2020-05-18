const mongoose = require("mongoose");
const validator=require('validator')

const  UserSchema =  new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
       },
    lastname:{
        type:String,
        required:true,
        trim:true
       },
    nickName:{
        type:String,
        required:false,
        trim:true
       },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },


    password:{
        type:String,
        required:true,
        minlength:7,
        trim:true
    },
    birthDate:{
        type: Date,
        required:false
    },
    isActive:{
        type: Boolean,
        default:true
    }

})