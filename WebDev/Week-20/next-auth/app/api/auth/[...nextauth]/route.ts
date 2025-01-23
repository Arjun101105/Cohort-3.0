import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import { resourceUsage } from "process";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: "email",
            credentials:{
                username:{label: "Username", type:"text", placeholder: "example@gmail.com"},
                password: {label:"Password", type:"password"}
            },
            async authorize(credentials, req){
                const username = credentials?.username;
                const password = credentials?.password;
                
                // db request to check if the username and password are correct 

                const user = {
                    name: "arjun",
                    id:"1",
                    username:"arjunnn10@google.com"
                }
                if(user){
                    return user;
                }
                else{
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId:"asd",
            clientSecret:"asd"
        }),

    ]
})

export {handler as GET, handler as POST}