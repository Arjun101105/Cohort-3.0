const express = require("express")
const app = express()

app.use(express.json())

const users = []

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for(let i = 0; i<32; i++){
        token += options[Math.floor(Math.random()*options.length)]
    }
    return token;
}

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
        const token = generateToken()
        user.token = token
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
    const token = req.headers.token
    let user = users.find(user=>user.token === token)

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