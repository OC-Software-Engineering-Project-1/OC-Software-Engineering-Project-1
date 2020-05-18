'use strict';
const express = require('express');

const bodyParser=require('body-parser');
  
// set up express app
const app = express();
app.use(bodyParser.json()); 
 
app.use(function (error, req, res, next) {
    if(error instanceof SyntaxError){ 
        
        //Handle SyntaxError here.
      return res.status(500).send({data : "Invalid data"});
    } else {
      next();
    }
  });
  
//initialize routes 
app.use('/api',require('./routes/Users/user')); 
 
//listen for requests
const port=process.env.PORT||3000;
app.listen(port,()=>console.log("listening on port ${port} ..."));

  

// var router = express.Router();

// /* GET home page. */
// router.get('/', function (req, res) {
//     res.render('index', { title: 'Express' });
// });

// module.exports = router;
 