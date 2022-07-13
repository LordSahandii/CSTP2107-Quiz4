import Styles from "@/styles/myPlants.module.sass";
import SearchBar from "@/components/SearchBar";
import Image from "next/image"
import Router, { useRouter } from "next/router";
import PlantActions from "@/backend/actions/plants";
import User from "@/interfaces/User";
import { GetServerSideProps } from "next";
import { useState } from "react";
import Header from "@/components/Header";
import { getToken } from "next-auth/jwt";



export default function MyPlants(props:User){
    const searchHandler = () =>{

    }
    const router = useRouter();
    const [plants, setPlants] = useState(props.plants)
    const plantShow = () => {
        if (plants) {
            
            plants.map((p,i)=>{
                return(
                    <div className={Styles.plants} key={i}>
                        <Image src={p.plantImage} width={234} height={449}></Image>
                        <div className={Styles.captions}>
                            <h1>{p.Plantname}</h1>
                            <p>{p.description}</p>
                            <button className={Styles.editButton} onClick={()=>{router.push("/"+props.username+"/"+p.Plantname)}}>EDIT</button>
                        </div>
                    </div>
                )
            })
        } else {
        return (
            <>
            </>
        )
        }
    }
    return(
        
        <div>
            <Header/>
            <SearchBar onChange={searchHandler}/>
            <div className={Styles.box1}>
                <h1 className={Styles.title}>MY PLANTS</h1>
                <button className={Styles.AddButton} onClick={()=>{router.push("/AddPlants/"+props.username)}}>ADD PLANTS</button>
            </div>
            <div className={Styles.plantsShow}>
                <div className={Styles.plants}>
                    <Image src="/HomePlant4.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                    <h1>Dummy</h1>
                    <p>Dummy</p>
                    <button className={Styles.editButton} onClick={()=>{}}>EDIT</button>
                    </div>
                </div>
                <div className={Styles.plants}>
                    <Image src="/HomePlant4.png" width={234} height={449}></Image>
                    <div className={Styles.captions}>
                    <h1>Dummy</h1>
                    <p>Dummy</p>
                    <button className={Styles.editButton} onClick={()=>{}}>EDIT</button>
                    </div>
                </div>
                        )
                {/* {
                    plants.map((p,i)=>{
                        return(
                            <div className={Styles.plants} key={i}>
                                <Image src={p.plantImage} width={234} height={449}></Image>
                                <div className={Styles.captions}>
                                    <h1>{p.Plantname}</h1>
                                    <p>{p.description}</p>
                                    <button className={Styles.editButton} onClick={()=>{router.push("/"+props.username+"/"+p.Plantname)}}>EDIT</button>
                                </div>
                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    )
}

export const getServerSideProps : GetServerSideProps = async (context)=> {
    
    try{
    const secret = process.env.NEXTAUTH_SECRET;
    const token = await getToken(
        {
            req: context.req,
            secret
        }
    );

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }
    
    const username = context.params.username as string
    const user = await PlantActions.getAUserById(username);
    
    const userList = JSON.parse(JSON.stringify(user)) as User

    return {
        props:{
            userList        
        }
    }
    }catch(e){
        return{
            redirect: {
              destination: '/404',
              permanent: false,
            },
        }
    }
}