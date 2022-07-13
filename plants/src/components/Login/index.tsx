import Styles from "@/styles/Login.module.sass"
import axios from "axios"
import Image from "next/image"
import { useState } from "react"
import { signIn } from "next-auth/react"


export default function Login(){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const handleLogin = async () =>{
        if(username==="" && password===""){
            alert("It cant be empty");
            return;
        }
        console.log(password)
        await signIn('credentials',{username: username, password: password})

    }
    const usernameHandle = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value;
        setUsername(value);
    }
    const passwordHandle = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value;
        setPassword(value);
    }
    
    return(
        <div className={Styles.container}>
            <div className={Styles.picture}>
                <Image src="/login.png" width={200} height={650}/>
            </div>
            <div className={Styles.logForm}>
                <h1 className={Styles.title}>LOG IN</h1>
              
                <input type="text" placeholder="username" className={Styles.inputs} onChange={usernameHandle}/>
                <input type="password" placeholder="password" className={Styles.inputs} onChange={passwordHandle}/>
              
               
                <div className={Styles.txt}>Don't have an account? <a href="/signup" className={Styles.create}>create one</a></div>
                <button className={Styles.button} onClick={handleLogin}>LOG IN</button>
               
            </div>
        </div>
    )
}