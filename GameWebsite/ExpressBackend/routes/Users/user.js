const express=require('express');
const router=express.Router();




router.get('/',function(req,res){
    res.send({type:'welecome to game board'});
});


//get a list of users from the db
 router.get('/users',function(req,res){
     res.send({type:'GET'});
 });

// get user from the db by Id
router.get('/user/:id',function(req,res){
    res.send({type:'GET'});
});

 //add a new users  to the db
 router.post('/users',function(req,res){
     console.log(req.body);
    res.send({type:'POST',
              name:req.body.name,
              game:req.body.game
});
}); 
// update user in the db
router.put('/user/:id',function(req,res){
    res.send({type:'PUT'});
}); 
//delete user from the db
router.delete('/user/:id',function(req,res){
    res.send({type:'DELETE'});
    
}); 

module.exports=router;
