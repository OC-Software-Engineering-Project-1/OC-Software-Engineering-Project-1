const mongoose = require("mongoose");
const validator = require("validator");
const jwt= require('jsonwebtoken')
const bcrypt =require('bcrypt')
const JWT_SECRET ="Thisisoursecret"
//Relationships
//https://stackoverflow.com/questions/26008555/foreign-key-mongoose
//https://vegibit.com/mongoose-relationships-tutorial/
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    nickName: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    gamesWon:{
        type:Number,
        default:0
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
    },
    birthDate: {
      type: Date,
      required: false,
      default:new Date(1999, 00, 01)  
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    friendsList:[{
        
            type: mongoose.Schema.Types.ObjectId,
            ref:'User'
        
    }],
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;
};
//adds a friend to the user's friendsList and vice versa
UserSchema.statics.addFriend = async (userId, friendId )=>{
  const user = await User.findOne({ "_id":userId });
  const friend = await User.findOne({ "_id":friendId });
  if (!user||!friend) {
    throw new Error("Unable to add friend");
  }
  
  user.friendsList.push({"_id":friendId})
  friend.friendsList.push({"_id":userId})


};
//Generates auth token
UserSchema.methods.generateAuthToken=async function(){
    token=jwt.sign({_id:this._id.toString()}, process.env.JWT_SECRET||JWT_SECRET)   
    this.tokens=this.tokens.concat({token})
    await this.save()
    return token

};

UserSchema.methods.toJSON = function(){
    const  userObjects= this.toObject()
    //delete userObjects.password
    delete userObjects.tokens
    delete userObjects.avatar
    return userObjects
}

//hash password
UserSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password=await  bcrypt.hash(this.password,8)
    }

    next()
})

const User=mongoose.model('User', UserSchema)
module.exports= User
