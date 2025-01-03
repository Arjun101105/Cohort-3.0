import {z} from 'zod';
import express from 'express';

const app = express();

const userProfileSchema = z.object({
    name: z.string().min(1, {message:"Name cannot be empty"}),
    age: z.number().min(18, {message: "Age cannot be less that 18"}),
    email: z.string().email({message: "Invalid email format"}),
})

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req,res)=>{
    const {success} = userProfileSchema.safeParse(req.body);
    const updateBody:FinalUserSchema = req.body;

    if(!success){
        res.status(411).json({})
        return
    }
    // update db here
    res.json({
        message: "user updated successfully !!"
    })
})