const express = require('express')
const app = express()

let requestCount = 0;   

// you have been given an express server which has a few endpoints.
// Your task is to create a global middleware which will maintain a count 
// of the number of requests made to the server in the global request count variable

app.use(function(req,res,next){
    requestCount = requestCount + 1;
    next()
})

app.get("/", function(req,res){
    res.status(200).json({user: "Arjun"})
})

app.post("/", function(req,res,next){
    res.status(200).json({msg:"created dummy user"})
})

app.get("/request_count", function(req,res,next){
    res.status(200).json({requestCount})
})

app.listen(3000)
console.log(`listening on port 3000 ...`);