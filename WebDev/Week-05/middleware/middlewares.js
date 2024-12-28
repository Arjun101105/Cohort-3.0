const express = require("express")
const app = express()

let requestCount = 0

function requestTally(){
    requestCount += 1
    console.log(`Total number of requests is: ${requestCount}`);
}

function requestIncreaser(req,res,next){
    requestCount +=1
    req.name = `RandomUser123`
    console.log(`Total number of requests is: ${requestCount}`);
    next()
}
function realSumHandler(req,res){

    // requestTally()    

    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    console.log(req.name);

    res.json({
        sum: a+b
    })
}

app.get("/sum", requestIncreaser, realSumHandler)

app.listen(3000)
console.log(`listening on port 3000 ...`);