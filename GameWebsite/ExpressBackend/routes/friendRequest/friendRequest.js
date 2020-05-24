const express=require('express');
const router=express.Router();


const FriendRequest = require('../../models/friendRequest')


const User = require('../../models/User')


//get a list of all friendRequests from the db
router.get('/friendRequests',async function(req,res){
   try{
      const friendRequests = await FriendRequest.find()
      res.send(friendRequests)
      }catch(e){
         res.status(500).send(e)
      }
   
});

// get one friendRequest from the db by Id
router.get('/friendRequests/:id',async function(req,res){
   const _id = req.params.id
   try{
      const friendRequest = await FriendRequest.findOne({_id})
      if(!friendRequest){
         res.status(404).send()
      }
      res.send(friendRequest)
   }catch(e){
      res.status(400).send(e)
   }
});

//add a new friendRequest  to the db
router.post('/friendRequests',async function(req,res){
   const friendRequest = new FriendRequest(req.body)
   try{
       await friendRequest.save()
       
       res.status(201).send(friendRequest)
   }catch(e){
       res.status(400).send(e)
   }
}); 
// update friendRequest in the db
router.put('/friendRequests/:id',async function(req,res){

}); 
//delete friendRequest from the db
router.delete('/friendRequests/:id',async function(req,res){
   const _id = req.params.id
   try{
      const friendRequest = await FriendRequest.findOneAndDelete({_id})
      if(!friendRequest){
         return res.status(404).send()
     }
      res.send(friendRequest)
   }catch(e){
      res.status(400).send(e)
   }
   
}); 

//Accept Friend request
router.post('/friendRequests/:id/accept', async function(req, res){
 

})

//Reject Friend request
router.post('/friendRequests/:id/reject', async function(req, res){
   const _id = req.params.id
   try{
      const request = FriendRequest.findOne({"_id":_id})
      if(!request){
         res.statusCode(404).send()

      }
      const requestorId = request['requestor'] 
      const recipientId  = request['recipient']
      await User.addFriend(requestorId, recipientId)
      request['status']="ANSWERED"
   }catch(e){
      res.statusCode(500).send()
   }
   
})
module.exports=router;