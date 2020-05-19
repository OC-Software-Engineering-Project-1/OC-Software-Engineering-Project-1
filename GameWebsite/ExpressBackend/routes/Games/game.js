const express=require('./node_modules/express');
const router=express.Router();




//get a list of games from the db
router.get('/games',function(req,res){
    res.send({type:'GET the list of games'});
});

// get game from the db by Id
router.get('/game/:id',function(req,res){
   res.send({type:'GET one game'});
});

//add a new games  to the db
router.post('/games',function(req,res){
    console.log(req.body);
   res.send({type:'POST',
             name:req.body.name,
             game:req.body.game
});
}); 
// update game in the db
router.put('/game/:id',function(req,res){
   res.send({type:'PUT game'});
}); 
//delete game from the db
router.delete('/game/:id',function(req,res){
   res.send({type:'DELETE game'});
   
}); 

module.exports=router;