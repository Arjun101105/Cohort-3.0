const exrpress = require("express")

const app = exrpress()

app.get("/multiply", function(req,res){
    const a = req.query.a
    const b = req.query.b

    res.json({
        ans: a*b
    })
})

app.get("/add/:fisrtArg/:secondArg", function(req,res){
    const a = parseInt(req.params.fisrtArg)
    const b = parseInt(req.params.secondArg)
    
    res.json({
        ans: a+b
    })
})

app.get("divide", function(req,res){
    const a = req.query.a
    const b = req.query.b

    res.json({
        ans: a/b
    })
})

app.get("/subtract", function(req,res){
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans: (a-b)
    })
})

app.listen(3000)
console.log(`listening on port 3000`);