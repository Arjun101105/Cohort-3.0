// create a middleware function that logs each incoming request's HTTP method, URL and Timestamp to the console


const express = require("express")
const app = express()

function logger(req,res,next){
    console.log(`method is: ${req.method}`);
    console.log(`URL is: ${req.url}`);
    console.log(`URL is: ${req.hostname}`);
    console.log(new Date().toLocaleString());
}

app.use(logger)
    
app.get("/home", function(req,res){

})

app.get("/about", function(req,res){

})


app.listen(3000)
console.log(`listening on port 3000 ...`);