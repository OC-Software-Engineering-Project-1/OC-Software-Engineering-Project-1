const mongoose=require('mongoose')
const databaseName = "GameDB";
const URL = "mongodb+srv://admin:oc@123@cluster0-e3zof.azure.mongodb.net/"+databaseName;
mongoose.connect(URL, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
})



//To connect to the db using command line, use (make sure you have mongoshell installed and add to environment variables):
//mongo "mongodb+srv://cluster0-e3zof.azure.mongodb.net/test" --username admin
//Password: oc@123 (When prompted the password)