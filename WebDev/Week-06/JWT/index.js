const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

app.use(express.json())

const users = []
const JWT_SECRET = "randomBS"

app.post("/sign-up", function(req,res){
    const username = req.body.username
    const password = req.body.password

    if(users.find(u=>u.username === username)){
        res.json({
            messgae: "you are already signed up "
        })
        return
    }

    users.push({
        username: username,
        password: password
    })
    res.send({
        messgae: "singed up !!"
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
        }, JWT_SECRET) // converts their username to a JWT

        res.json({
            messgae: token
        })
    }else{
        res.status(403).send({
            messgae: "Invalid username or password"
        })
    }
    console.log(users);
})

app.get("/me", function(req,res){
    const token = req.headers.token // here the token will be a JWT
    const decodedInfo = jwt.verify(token, JWT_SECRET) // converts the JWT back to the username and password .. i.e, decodes data using key/token   
    const username = decodedInfo.username
    
    let user = users.find(user=>user.username === username)

    if(user){
        res.send({
            username: user.username,
            password: user.password
        })
    }else{
        res.status(401).send({
            messgae: "Unauthorized !"
        })
    }
})


app.listen(3000)