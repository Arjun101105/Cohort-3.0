const express = require("express")
const app = express()

var users = [{

        name:"John",
        kidneys: [{
            healthy:"false"
        }]
    
}]

app.use(express.json())

app.get("/", function(req,res){
    const john_kidneys = users[0].kidneys
    const numOfKidneys = john_kidneys.length    
    let unhealthyKidneys = 0;
    for(let i = 0;i<john_kidneys.length;i++){
        if(john_kidneys[i].healthy === "false"){
            unhealthyKidneys = unhealthyKidneys + 1
        }
    }
    let healthyKidneys = 0;
    healthyKidneys = numOfKidneys - unhealthyKidneys
    
    res.json({
        numOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    })

})

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "DONE !"
    })
})

app.put("/", function(req,res){
    for(let i = 0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true
    }
    res.json({})
})

app.delete("/", function(req, res){
    const newKidneys = []
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy==="true"){
            newKidneys.push({
                healthy: true
            })
        } 
    }
    users[0].kidneys = newKidneys
    res.json({msg: "done"})

})

app.listen(3000)
console.log(`listening on port 3000 ...`);
