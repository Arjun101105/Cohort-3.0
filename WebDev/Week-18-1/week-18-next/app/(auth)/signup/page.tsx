"use client"

import axios from "axios"
import { useRef, useState } from "react"

export default function Signup(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="flex justify-center items-center w-screen h-screen">
        <div className="border p-2">
            <input type="text" placeholder="username" onChange={e=>{
                setUsername(e.target.value)
            }}/>
            <input type="password" placeholder="password" onChange={e=>{
                setPassword(e.target.value)
            }} />
            <button onClick={()=>{
            axios.post("http://localhost:3000/api/v1/signup",{
                username,
                password
            })
            }}>Sign Up</button>
        </div>
    </div>
}