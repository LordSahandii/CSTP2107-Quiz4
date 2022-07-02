import Styles from "@/styles/Header.module.sass"
import {CgProfile} from "react-icons/cg"
import React from "react"

export default function Header(){

    return(
        <div className={Styles.container}>
            {/* <div className={Styles.hContainer}> */}
                
                <button className={Styles.buttons}>Home</button>
                <button className={Styles.buttons}>Plants Finder</button>
                <button className={Styles.buttons}>Plants Care</button>
                <button className={Styles.buttons}>My Plants</button>
            {/* </div> */}
            <button className={Styles.buttons} onClick={()=>{}}><CgProfile className={Styles.icon}/></button>
            
        </div>
    )
}