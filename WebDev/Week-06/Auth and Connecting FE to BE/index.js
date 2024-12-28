const express = require('express')
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())

const users = []
const JWT_SECRET = "arjun101105"

app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/sign-up", function(req,res){
    const username = req.body.username
    const password = req.body.password
    
    if(users.find(user=>user.username === username)){
        res.json({
            message: "you are already signed up"
        })
        return
    }

    users.push({
        username: username,
        password: password
    })
    res.send({
        message:"signed up !!"
    })
    console.log(users);
})

app.post("/sign-in", function(req,res){
    const username = req.body.username
    const password = req.body.password

    const user = users.find(user=>user.username === username && user.password === password)

    if(user){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)
        user.token = token

        res.json({
            message: token
        })
    }else{
        res.status(403).send({
            message: "invalid username or password !"
        })
    }
    console.log(users);
})

// Create an Auth middleware that verifies if the user is logged in ... and ends the request early if the user isn't logged in


function auth(req,res,next){
    const token = req.headers.token
    const decodedInfo = jwt.verify(token, JWT_SECRET)
    
    if(decodedInfo.username){   
        req.username = decodedInfo.username 
        next()
    }else{
        res.json({
            message: "you are not logged in !!"
        })
}
}
app.get("/me",auth, function(req,res){
    
    let user = users.find(index=>index.username === req.username)

    if(user){
        res.send({
            username: user.username,
            password: user.password
        })
    }else{
        res.status(401).send({
            message: "Unauthorized !"
        })
    }

})



app.listen(3000)