const express=require('express');
const router=express.Router();

const Score = require('../../models/score')

const auth =require('../../middleware/auth')


//get a list of all scores from the db
router.get('/scores', async function(req,res){
   try{
   const scores = await Score.find().populate('user game')
   res.send(scores)
   }catch(e){
      res.status(500).send(e)
   }

});

// get score from the db by Id
router.get('/score/:id',async function(req,res){
   const _id = req.params.id
   try{
      const score = await Score.findOne({_id})
      res.send(score)
   }catch(e){
      res.status(400).send(e)
   }
});

//add a new scores  to the db
router.post('/scores', async function(req,res){
   const score = new Score(req.body)
     try{
         await score.save()
         
         res.status(201).send(score)
     }catch(e){
         res.status(400).send(e)
     }
   
}); 
// update score in the db
router.put('/scores/:id', async function(req,res){
const _id = req.params.id
const updates =  Object.keys(req.body)
   try{
      const score = await Game.findOne({_id})
      updates.forEach((update)=>{
           
         score[update]=req.body[update]
         
     })
     if(!score){
      res.status(404).send(score)
     }
     await score.save()
       res.status(201).send(score)
   }catch(e){
       res.status(400).send(e)
   }

}); 
//delete score from the db
router.delete('/score/:id',async function(req,res){
   const _id = req.params.id
   try{
      const score = await Score.findOneAndDelete({_id})
      if(!score){
         return res.status(404).send()
     }
      res.send(score)
   }catch(e){
      res.status(400).send(e)
   }
}); 

module.exports=router;