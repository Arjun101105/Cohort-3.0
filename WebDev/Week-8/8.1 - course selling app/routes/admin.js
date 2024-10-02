const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {z} = require("zod")

const adminRouter = Router()
const {adminModel, userModel} = require("../db")

adminRouter.post("/signup", async function(req,res){
    
    const requiredBody = z.object({
        email: z.string().min(5).max(50).email(),
        password: z.string().min(6).max(20),
        firstName: z.string().min(2).max(20),
        lastName: z.string().min(2).max(20),
        
    })

    const parsedData = requiredBody.safeParse(req.body)

    if(!parsedData.success){
        res.json({
            message: "not an admin",
        })
        return
    }
    
    const email = req.body.email
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName  
    
    const hashedPass = await bcrypt.hash(password, 5)

    let errorThrown = false

    try{await userModel.create({
        email: email,
        password: hashedPass,
        firstName: firstName,
        lastName: lastName
    })}catch(e){
        res.json({
            message: "User already exists"
        })
        errorThrown = true
    }
    if(!errorThrown){
        res.json({
            message: "You are signed up"
        })
    }
})

adminRouter.post("/signin", function(req,res){
    
})

adminRouter.post("/create-course", function(req,res){
    
})

adminRouter.put("/edit-course", function(req,res){
    
})
adminRouter.get("/courses/bulk", function(req,res){
    
})

module.exports = {
    adminRouter: adminRouter
}