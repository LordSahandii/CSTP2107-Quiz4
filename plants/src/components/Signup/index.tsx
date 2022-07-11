import Styles from "@/styles/Signup.module.sass"
import Image from "next/image"
import { signIn } from 'next-auth/client';

export default function Signup(){
    const onFormSubmit = async (e) => {
        e.preventDefault();
        //Getting value from useRef()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        //Validation
        if (!email || !email.includes('@') || !password) {
            alert('Invalid details');
            return;
        }
        //POST form values
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        //Await for data for any desirable next steps
        const data = await res.json();
        console.log(data);
    };
    return(
        <div className={Styles.container}>
            <div className={Styles.picture}>
                <Image src="/signup.png" width={300} height={500}/>
            </div>
            <div className={Styles.logForm}>
                <h1 className={Styles.title}>SIGN IN</h1>
                <input type="email" placeholder="email" className={Styles.inputs}/>
                <input type="email" placeholder="confirm email" className={Styles.inputs}/>
                <input type="password" placeholder="password" className={Styles.inputs}/>
                <input type="password" placeholder="confirm password" className={Styles.inputs}/>
                <button className={Styles.button}>SIGN UP</button>
            </div>
        </div>
    )
}