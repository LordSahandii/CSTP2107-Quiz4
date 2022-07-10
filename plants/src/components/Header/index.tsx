import Styles from "@/styles/Header.module.sass"
import {CgProfile} from "react-icons/cg"
import React from "react"

interface Props{
    Home ?: () => void;
    PlantsF ?: () => void;
    PlantsC ?: () => void;
}

export default function Header(props:Props){

    return(
        <div className={Styles.container}>
            {/* <div className={Styles.hContainer}> */}
                
                <button className={Styles.buttons} onClick={props.Home}>Home</button>
                <button className={Styles.buttons} onClick={props.PlantsF}>Plants Finder</button>
                <button className={Styles.buttons} onClick={props.PlantsC}>Plants Care</button>
                <button className={Styles.buttons}>My Plants</button>
            {/* </div> */}
            <button className={Styles.buttons} onClick={()=>{}}><CgProfile className={Styles.icon}/></button>
            
        </div>
    )
}