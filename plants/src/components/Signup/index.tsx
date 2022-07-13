import Styles from "@/styles/Signup.module.sass"
import Image from "next/image"

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Signup(){
    const [username1,setUsername] = useState("")
    const [password1, setPassword] = useState("")
    const [confirmPass1, setConfirm] = useState("")
    const router = useRouter();
    const createUserHandle = async (e) => {
        e.preventDefault();
        //Getting value from useRef()
        const username = username1
        const password = password1
        //Validation
        if (!username || !password) {
            alert('Invalid details');
            return;
        }
        if (password !== confirmPass1) {
            alert('password not matched');
            return;
        }
        const body = {
            username: username,
            password: password,
            plants: [{plantName:"dummy",PlantImage:"",description:"dummy"}],
        }
        //POST form values
        const {data} = await axios.post('/api/auth/signup',body)

        console.log(data);
        if(data){
            router.push("/")
        }else{
            alert('user already exists');
            
        }
    };
    const usernameHandle = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value;
        setUsername(value);
    }
    const passwordHandle = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value;
        setPassword(value);
    }
    const confirmPasswordHandle = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value;
        setConfirm(value)
    }

    return(
        <div className={Styles.container}>
            <div className={Styles.picture}>
                <Image src="/signup.png" width={300} height={500}/>
            </div>
            <div className={Styles.logForm}>
                <h1 className={Styles.title}>SIGN UP</h1>
                <input type="text" placeholder="username" className={Styles.inputs} onChange={usernameHandle}/>
                
                <input type="password" placeholder="password" className={Styles.inputs} onChange={passwordHandle}/>
                <input type="password" placeholder="confirm password" className={Styles.inputs} onChange={confirmPasswordHandle}/>
                <button className={Styles.button} onClick={createUserHandle}>SIGN UP</button>
            </div>
        </div>
    )
}