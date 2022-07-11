import Styles from "@/styles/Login.module.sass"
import Image from "next/image"


export default function Login(){
    
    
    return(
        <div className={Styles.container}>
            <div className={Styles.picture}>
                <Image src="/login.png" width={200} height={650}/>
            </div>
            <div className={Styles.logForm}>
                <h1 className={Styles.title}>LOG IN</h1>
              
                <input type="email" placeholder="email" className={Styles.inputs}/>
                <input type="password" placeholder="password" className={Styles.inputs}/>
              
               
                <div className={Styles.txt}>Don't have an account? <a href="/" className={Styles.create}>create one</a></div>
                <button className={Styles.button}>LOG IN</button>
               
            </div>
        </div>
    )
}