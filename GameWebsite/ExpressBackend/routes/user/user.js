const express=require('express');
const router=express.Router();
const User = require('../../models/user')

const auth =require('../../middleware/auth')
//get a list of users from the db
 router.get('/users',async function(req,res){
     try{
        const users = await User.find().populate("friendsList");
        res.send(users)
     }catch(e){
         res.status(500).send(e)
     }

 });

// get user from the db by Id
router.get('/users/:id', async function(req,res){
    const _id = req.params.id
    try{
        const user = await User.findOne({_id}).populate('friendsList')
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
});

 //Sign up
 router.post('/users',async function(req,res){
     const user = new User(req.body)
     try{
         await user.save()
         const token = await user.generateAuthToken()
         res.status(201).send({user, token})
     }catch(e){
         res.status(400).send(e)
     }
   
}); 
//Signin
router.post('/users/login', async function(req, res){
    console.log("In login")
    try{
    
        const user= await User.findByCredentials(req.body.email, req.body.password)
    
        const token = await user.generateAuthToken()
        res.send({user,token})

    }catch(e){
        res.status(400).send()
    }
})
//Logout
router.post('/users/logout', auth, async function(req,res){
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})
//Logout user from  all devices
router.post('/users/logoutAll',auth, async function(req,res){
    try{
        req.user.tokens=[]
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})
// update user in the db
router.put('/users/:id',auth, async function(req,res){
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['birthDate', 'isActive', 'firstName', 'lastName',
                            'password','nickName', 'email']
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({'Error':'Invalid Updates!'});
    }
    try{
        const user = req.user
        updates.forEach((update)=>{
           
            user[update]=req.body[update]
            
        })
        //Add logic to handle friendsList
        await user.save()
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
}); 
//delete user from the db
router.delete('/users/:id', async function(req,res){
    try{
    const _id = req.params.id
    const user = await User.findOneAndDelete({_id})
    if(!user){
        return res.status(404).send()
    }
    
    res.send(user)
    }catch(e){
        res.status(500).send()
    }

    
}); 

module.exports=router;
