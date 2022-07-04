import Styles from "@/styles/Signup.module.sass"
import Image from "next/image"

export default function Signup(){

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