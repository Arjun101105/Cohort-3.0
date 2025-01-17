import express from "express";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
const app = express();
app.use(express.json());


app.get("/users", async(req,res)=>{
    const users = await client.user.findMany();
    res.json({
        users
    })
})

app.get("/todos/:id", async(req,res)=>{
    const id = req.params.id;
    const users = await client.user.findFirst({
        where:{
            id: Number(id) // parseInt(id)
        },
        select:{
            todos:true
        }
    })
    res.json({
        users
    })
})

app.listen(3000);

async function createUser() {
    
    // await client.user.create({
    //     data:{
    //         username: "arjun",
    //         password: "1234",
    //         city:"mumbai",
    //         age: 19
    //     }
    // })

    const user = await client.user.findFirst({
        where:{
            id: 1
        },
        include:{
            todos:true
        }

    })
    console.log(user);
}

createUser();