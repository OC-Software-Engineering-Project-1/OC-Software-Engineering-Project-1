const express=require('express');
const router=express.Router();

const Game = require('../../models/game')
const User = require('../../models/user')
const Group = require('../../models/group')
const GameSession = require('../../models/gameSession')


//get a list of all gamesSessions from the db
router.get('/gameSessions',async function(req,res){
   try{
      const gameSession = await GameSession.find()
      res.send(gameSession)
      }catch(e){
         res.status(500).send(e)
      }
});

// get one gamesSession from the db by Id
router.get('/gameSessions/:id',async function(req,res){
   const _id = req.params.id
   try{
      const gameSession = await GameSession.findOne({_id})
      if(!gameSession){
         res.status(404).send()
      }
      res.send(gameSession)
   }catch(e){
      res.status(400).send(e)
   }
});

//add a new gamesSessions  to the db
router.post('/gameSessions',async function(req,res){
   const gameSession = new GameSession(req.body)
   try{
       await gameSession.save()
       
       res.status(201).send(gameSession)
   }catch(e){
       res.status(400).send(e)
   }
 
}); 
// update gamesSession in the db
router.put('/gameSession/:id',async function(req,res){
   const _id = req.params.id
   const updates =  Object.keys(req.body)
      try{
         const gameSession = await GameSession.findOne({_id})
         const allowedUpdates = ['is_active', 'game']
         const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
         if(!isValidOperation){
             return res.status(400).send({'Error':'Invalid Updates!'});
         }
         updates.forEach((update)=>{
              
            gameSession[update]=req.body[update]
        })
        if(!gameSession){
            res.status(404).send()
        }
        await gameSession.save()
          res.status(201).send(gameSession)
      }catch(e){
          res.status(400).send(e)
      }
}); 
//delete gamesSession from the db
router.delete('/gameSession/:id',async function(req,res){
      const _id = req.params.id
      try{
         const gameSession = await GameSession.findOneAndDelete({_id})
         if(!gameSession){
            return res.status(404).send()
        }

         res.send(gameSession)
      }catch(e){
         res.status(400).send(e)
      }
   
}); 
//remove user
router.delete('/gameSession/:sessionId/users/:userId', async function (req, res){
   try{
      const gameSession = await GameSession. findOne({"_id":req.params.id})
       if(!gameSession){
            return res.status(404).send()
      }
      gameSession.removeUser(req.params.userId)
      await gameSession.save()  
       
      }catch(e){
         res.status(500).send(e)
      }
   
})


//remove group
router.delete('/gameSession/:sessionId/groups/:groupId', async function (req, res){
   try{
      const gameSession = await GameSession. findOne({"_id":req.params.id})
       if(!gameSession){
            return res.status(404).send()
      }
      gameSession.removeGroup(req.params.groupId)
      await gameSession.save()  
       
      }catch(e){
         res.status(500).send(e)
      }
   
})

//add user
router.delete('/gameSession/:sessionId/users/:userId', async function (req, res){
   try{
      const gameSession = await GameSession. findOne({"_id":req.params.id})
       if(!gameSession){
            return res.status(404).send()
      }
      gameSession.addUser(req.params.userId)
      await gameSession.save()  
       
      }catch(e){
         res.status(500).send(e)
      }
   
})


//add group
router.post('/gameSession/:sessionId/groups/:groupId', async function (req, res){
   try{
      const gameSession = await GameSession. findOne({"_id":req.params.id})
       if(!gameSession){
            return res.status(404).send()
      }
      gameSession.addGroup(req.params.groupId)
      await gameSession.save()  
       
      }catch(e){
         res.status(500).send(e)
      }
   
})
module.exports=router;