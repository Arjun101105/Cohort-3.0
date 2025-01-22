"use client"

import axios from "axios"

export default function Signin(){
    return <div className="flex justify-center items-center w-screen h-screen">
        <div className="border p-2">
            <input type="text" placeholder="username"  />
            <input type="password" placeholder="password" />
            <button onClick={()=>{
            axios.post("localhost:3000/api/v1/signin")
            }}>Sign In</button>
        </div>
    </div>
}