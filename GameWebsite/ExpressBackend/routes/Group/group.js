const express=require('express');
const router=express.Router();

const Group = require('../../models/group')
const User = require('../../models/user')
const auth =require('../../middleware/auth')



//get a list of all groups from the db
router.get('/groups',async function(req,res){
   try{
     groups = await Group.find().populate('users')
     res.send(groups)
   }catch(e){
      res.status(500).send(e)
   }

 
});

// get one group from the db by Id
router.get('/groups/:id',async function(req,res){
   const _id = req.params.id
   try{
      const group = await Group.findOne({_id})
      res.send(group)
   }catch(e){
      res.status(400).send(e)
   }
});

//add a new group  to the db
router.post('/groups', async function(req,res){
   const group = new Group(req.body)
   try{
      await group.save()
       
      res.status(201).send(group)
   }catch(e){
      res.status(400).send(e)
    }
}); 
// update group in the db
router.put('/group/:id',async function(req,res){
   const _id = req.params.id
   const updates =  Object.keys(req.body)
      try{
         const group = await Group.findOne({_id})
         const allowedUpdates = ['name','users', 'groupId']
         const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
         if(!isValidOperation){
             return res.status(400).send({'Error':'Invalid Updates!'});
         }
         updates.forEach((update)=>{
              
            group[update]=req.body[update]
        })
        if(!group){
            res.status(404).send()
        }
        await group.save()
          res.status(201).send(group)
      }catch(e){
          res.status(400).send(e)
      }
   
}); 
//delete group from the db
router.delete('/groups/:id',async function(req,res){
   const _id = req.params.id
   try{
      const group = await Group.findOneAndDelete({_id})
      if(!group){
         res.status(404).send()
     }
      res.send(group)
   }catch(e){
      res.status(400).send(e)
   }
   
}); 
//add users to a group
router.post('/groups/:group_id/users', async function(req,res){
   try{  
   const user = await User.findOne({"_id":req.body.user_id})

   const group = await Group.findOne({"_id":req.params.group_id})
   if(!user||!group){
         res.status(404).send()
      }
   group["users"].push({"_id":user._id})
   await group.save()
   res.send(group)
   }catch(e){
      res.status(500).send(e)
   }



});
//Remove a user from a group
router.delete('/groups/:group_id/users/:user_id', async function(req,res){
   try{   
      const user = await User.findOne({"_id":req.params.user_id})
      const group = await Group.findOne({"_id":req.params.group_id})
         if(!user||!group){
            res.status(404).send()
         }
      group["users"].filter((user)=>{
         return user !== req.params.user_id
     })
     await group.save()
     res.send(group)
      }catch(e){
         res.status(500).send()
      }
   
   
});

module.exports=router;