const express=require('express');
const router=express.Router();




//get a list of all scores from the db
router.get('/scores',function(req,res){
    res.send({type:'GET the list of scores'});
});

// get score from the db by Id
router.get('/score/:id',function(req,res){
   res.send({type:'GET  score'});
});

//add a new scores  to the db
router.post('/scores',function(req,res){
    console.log(req.body);
   res.send({type:'POST',
             name:req.body.name,
             game:req.body.game
});
}); 
// update score in the db
router.put('/score/:id',function(req,res){
   res.send({type:'PUT score'});
}); 
//delete score from the db
router.delete('/score/:id',function(req,res){
   res.send({type:'DELETE score'});
   
}); 

module.exports=router;