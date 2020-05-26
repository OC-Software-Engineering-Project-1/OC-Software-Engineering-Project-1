const express=require('express');
const router=express.Router();


const FriendRequest = require('../../models/friendRequest')


const User = require('../../models/user')


//get a list of all friendRequests from the db
router.get('/friendRequests',async function(req,res){
   try{
      const friendRequests = await FriendRequest.find().populate('requestor recipient')
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
      if(req.body.recipient._id=== req.body.requestor._id){
         
         throw new Error("You cannot send a friend request to yourself")
      }
       await friendRequest.save()
       
       res.status(201).send(friendRequest)
   }catch(e){
       res.status(500).send({"Error":e.message})
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
router.post('/friendRequests/:id/reject', async function(req, res){
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

})

//Reject Friend request
router.post('/friendRequests/:id/accept', async function(req, res){
   const _id = req.params.id
   try{
      const request = await FriendRequest.findOne({"_id":_id})

      if(!request){
         res.statusCode(404).send()

      }
      const requestorId = request['requestor']._id
      const recipientId  = request['recipient']._id
      const user = await User.findOne({ "_id":requestorId });
      const friend = await User.findOne({ "_id":recipientId });
      if (!user||!friend) {
        throw new Error("Unable to add friend");
      }
      
      user.friendsList.push({"_id":recipientId})
      friend.friendsList.push({"_id":requestorId})
      
      request['status']="ACCEPTED"
      await request.save()
      await user.save()
      await friend.save()
      res.send(request)

   }catch(e){
      console.log(e)
      res.status(500).send(e)
   }
   
})
module.exports=router;