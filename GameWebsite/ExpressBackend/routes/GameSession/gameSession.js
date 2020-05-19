const express=require('./node_modules/express');
const router=express.Router();




//get a list of all gamesSessions from the db
router.get('/gamesSessions',function(req,res){
    res.send({type:'GET the list of gamesSessions'});
});

// get one gamesSession from the db by Id
router.get('/gamesSessions/:id',function(req,res){
   res.send({type:'GET  one gamesSessions'});
});

//add a new gamesSessions  to the db
router.post('/gamesSessions',function(req,res){
    console.log(req.body);
   res.send({type:'POST',
             name:req.body.name,
             game:req.body.game
});
}); 
// update gamesSession in the db
router.put('/gamesSession/:id',function(req,res){
   res.send({type:'PUT gamesSession'});
}); 
//delete gamesSession from the db
router.delete('/gamesSession/:id',function(req,res){
   res.send({type:'DELETE gamesSession'});
   
}); 

module.exports=router;