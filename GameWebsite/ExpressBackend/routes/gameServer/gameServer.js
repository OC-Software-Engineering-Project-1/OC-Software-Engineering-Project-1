const express=require('express');
const router=express.Router();


const GameServer = require('../../models/gameServer')

const auth =require('../../middleware/auth')



//get a list of gameServers from the db
router.get('/gameServers', async function(req,res){
   try{
      const gameServers = await GameServer.find()
      res.send(gameServers)
      }catch(e){
         res.status(500).send(e)
      }
   
});

// get gameServer from the db by Id
router.get('/gameServers/:id', async function(req,res){
   const _id = req.params.id
   try{
      const gameServer = await GameServer.findOne({_id})
      res.send(gameServer)
   }catch(e){
      res.status(400).send(e)
   }
});

//add a new gameServers  to the db
router.post('/gameServers',async function(req,res){
    req.body["players"]=req.body["hostUser"]
    const gameServer = new GameServer(req.body)
     try{
         await gameServer.save()
         
         res.status(201).send(gameServer)
     }catch(e){
         res.status(400).send(e)
     }
}); 
// update gameServer in the db
router.put('/gameServers/:id',async function(req,res){
   const updates =  Object.keys(req.body)
   const _id = req.params.id;

   try{
      const gameServer = await GameServer.findOne({_id})
      const allowedUpdates = ['capacity', 'availability']
      const isValidOperation = updates.every((update)=>allowedUpdates.includes(update))
      if(!isValidOperation){
          return res.status(400).send({'Error':'Invalid Updates!'});
      }
      updates.forEach((update)=>{
           
         gameServer[update]=req.body[update]
         
     })
     if(!gameServer){
      res.status(404).send()
     }
     await gameServer.save()
       res.status(201).send(gameServer)
   }catch(e){
       res.status(400).send(e)
   }
}); 
//delete gameServer from the db
router.delete('/gameServers/:id',async function(req,res){
    const _id = req.params.id;
   try{
      const gameServer = await GameServer.findOne({_id})
      if(!gameServer){
         return res.status(404).send()
     }
     gameServer.remove();
      res.send(gameServer)
   }catch(e){
      res.status(400).send(e)
   }
   
}); 
//join gameServer
router.post('/gameServers/:id/join', auth, async function(req, res){
    const _id = req.params.id;
    try{
        //console.log("Hello")
        const gameServer = await GameServer.findOne({_id})
        if(!gameServer){
            return res.status(404).send()
        }
            
        if(gameServer.players.includes(req.user.email)){
            return res.status(400).send({"Error":"Player already in game server"})
        }
        if(gameServer.players.length>=gameServer.capacity){
           return res.status(400).send({"Error":"Current gameServer's capacity has been reached"})
        }

        gameServer.players.push(req.user.email);
        // console.log(gameServer)  
        // gameServer.numberOfConnectedPlayers++;   
        //gameServer.numberOfConnectedPlayers = gameServer.players.length;   
        
        await gameServer.save();
        res.send(gameServer)
    }catch(e){
        res.status(500).send(e)
    }
})
//Leave gameServer
router.post('/gameServers/:id/leave', auth, async function(req, res){
    const _id = req.params.id;
    try{
        //console.log("Hello")
        const gameServer = await GameServer.findOne({_id})
        if(!gameServer){
            return res.status(404).send()
        }
      
        if(!gameServer.players.includes(req.user.email)){
            return res.status(404).send({"Error":"Player not found"})
        }
        if(gameServer.hostUser ===req.user.email){
            return res.status(400).send({"Error":"Host user can't leave game server"})
        }

        gameServer.players= gameServer.players.filter((player)=> { return req.user.email.toString()!==player.toString()});
      
        // gameServer.numberOfConnectedPlayers = gameServer.players.length;   
        
        await gameServer.save();
        res.send(gameServer)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports=router;