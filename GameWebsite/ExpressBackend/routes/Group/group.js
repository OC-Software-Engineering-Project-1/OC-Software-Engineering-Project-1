const express=require('./node_modules/express');
const router=express.Router();




//get a list of all groups from the db
router.get('/groups ',function(req,res){
    res.send({type:'GET the list of groups '});
});

// get one group from the db by Id
router.get('/group/:id',function(req,res){
   res.send({type:'GET  one group'});
});

//add a new group  to the db
router.post('/group ',function(req,res){
    console.log(req.body);
   res.send({type:'POST',
             name:req.body.name,
             game:req.body.game
});
}); 
// update group in the db
router.put('/group/:id',function(req,res){
   res.send({type:'PUT group'});
}); 
//delete group from the db
router.delete('/group /:id',function(req,res){
   res.send({type:'DELETE group'});
   
}); 

module.exports=router;