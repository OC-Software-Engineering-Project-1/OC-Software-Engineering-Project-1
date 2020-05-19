const express=require('./node_modules/express');
const router=express.Router();




//get a list of all friendRequests from the db
router.get('/friendRequests',function(req,res){
    res.send({type:'GET the list of friendRequests'});
});

// get one friendRequest from the db by Id
router.get('/friendRequest/:id',function(req,res){
   res.send({type:'GET  one friendRequest'});
});

//add a new friendRequest  to the db
router.post('/friendRequest',function(req,res){
    console.log(req.body);
   res.send({type:'POST',
             name:req.body.name,
             game:req.body.game
});
}); 
// update friendRequest in the db
router.put('/friendRequest/:id',function(req,res){
   res.send({type:'PUT friendRequest'});
}); 
//delete friendRequest from the db
router.delete('/friendRequest/:id',function(req,res){
   res.send({type:'DELETE friendRequest'});
   
}); 

module.exports=router;