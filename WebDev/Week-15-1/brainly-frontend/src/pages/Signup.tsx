import { useRef } from "react";
import { Button } from "../components/Buttons";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup(){

    const usernameRef = useRef<any>()
    const passwordRef = useRef<any>()
    const navigate = useNavigate()

    async function signup(){
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value
        await axios.post(`${BACKEND_URL}/api/v1/signup`,{username,password})
        alert("Signup Successful")
        navigate("/signin");
    }

    return <div className="h-screen w-screen flex justify-center items-center">
        <div className="flex-row ">
        <h1 className="text-2xl font-bold ">Sign-Up</h1> <br />
        <div className="bg-white rounded-xl border p-8">
            <Input reference={usernameRef} placeholder="Username"/>
            <Input reference={passwordRef} placeholder="Password" type="password"/>
            <div className="flex justify-center pt-4">
            <Button onClick={signup} text="Sign-Up" variant="primary" size="md" />
            </div>
        </div>
        </div>
    </div>
}