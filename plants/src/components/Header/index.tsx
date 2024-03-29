import Styles from "@/styles/Header.module.sass"
import {CgProfile} from "react-icons/cg"
import React from "react"
import { useRouter } from "next/router";

import { useSession, signIn, signOut } from "next-auth/react"
import User from "@/interfaces/User"
interface Props{
    Home ?: () => void;
    PlantsF ?: () => void;
    PlantsC ?: () => void;
}

export default function Header(props:Props){
    const { data: session } = useSession();
    const router = useRouter();
    const handleMyplants = (id ?: string) =>{
        router.push("/MyPlants/"+id)
    }
    if (session && session.user){
        return(
            <div className={Styles.container}>
                {/* <div className={Styles.hContainer}> */}
                    
                    <button className={Styles.buttons} onClick={()=>{router.push("/")}}>Home</button>
                    <button className={Styles.buttons} onClick={()=>{router.push("/plantFinder")}}>Plants Finder</button>
                    <button className={Styles.buttons} onClick={()=>{router.push("/plantCare")}}>Plants Care</button>
                    <button className={Styles.buttons} onClick={()=>handleMyplants(session.user.name)}>My Plants</button>
                    <button className={Styles.buttons} onClick={()=>signOut()}>Sign out</button>
                
            </div>
    )
    }else{
        return(
            <div className={Styles.container}>
            {/* <div className={Styles.hContainer}> */}
                
                <button className={Styles.buttons} onClick={()=>{router.push("/")}}>Home</button>
                <button className={Styles.buttons} onClick={()=>{router.push("/plantFinder")}}>Plants Finder</button>
                <button className={Styles.buttons} onClick={()=>{router.push("/plantCare")}}>Plants Care</button>
                <button className={Styles.buttons} onClick={()=>{router.push("/login")}}>My Plants</button>
                <button className={Styles.buttons} onClick={()=>{router.push("/login")}}><CgProfile className={Styles.icon}/></button>
            
            </div>
        )
    }
}

