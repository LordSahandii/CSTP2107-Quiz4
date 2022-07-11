import Image from "next/image"
import Styles from "@/styles/EditPlants.module.sass"
import { GetServerSideProps } from "next"
import PlantActions from "@/backend/actions/plants"
import User from "@/interfaces/User"
import Plant from "@/interfaces/Plant"
import { useState } from "react"
import axios from "axios"
import { getToken } from "next-auth/jwt"


export default function EditPlants(props: Plant & User){

    const [name,setName] = useState("");
    const [desc, setDesc] = useState("");
    
    const deletePlant = async () =>{
        const [plants, setPlants] = useState(props.plants);
        for(let i = 0; i < plants.length; i++){
            if(props.Plantname === plants[i].Plantname){
                plants.pop();     
                break;           
            }
        }
  
        const body = {
            plants
        };
  
        try {
            const { data } = await axios.post('http://localhost:3000/api/users/'+props.username, body);
            
        } catch(error) {
            console.log('NETWORK ERROR', error);
        }
    } 

    const updatePlant = async () => {
        const [plants, setPlants] = useState(props.plants);
        for(let i = 0; i < plants.length; i++){
            if(props.Plantname === plants[i].Plantname){
                plants[i].Plantname = name;
                plants[i].description = desc;
                break;        
            }
        }
  
        const body = {
            plants
        };
  
        try {
            const { data } = await axios.post('http://localhost:3000/api/users/'+props.username, body);
            
        } catch(error) {
            console.log('NETWORK ERROR', error);
        }
    } 

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setDesc(value);
      }
      const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setName(value);
      }
      
        return(
            <div>
                <h1 className={Styles.title}>Edit Plants</h1>
                <div className={Styles.edit}>
                    <Image  src={props.Plantname} width={300} height={300} />
                    <div className={Styles.form}>
                        <div>
                            <h2>Name</h2>
                            <input type="text" className={Styles.inputs} onChange={handleNameChange}/>
                        </div>
                        <div >
                            <h2>Description</h2>
                            <input type="text" className={Styles.inputs} onChange={handleDescriptionChange}/>
                        </div>
                        <br/>
                        <button className={Styles.button} onClick={updatePlant}>Done</button>
                        <br/>
                        <button className={Styles.button} onClick={deletePlant}>Delete</button>
    
                    </div>
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
    const plantname = context.params.plantname as string
    const user = await PlantActions.getAUserById(username);
    
    const userList = JSON.parse(JSON.stringify(user)) as User
    let plant : Plant;
    userList.plants.map((p,i)=>{
        if(p.Plantname === plantname){
            plant = p;
        }
    })
    if(!plant){
        throw Error("Plant not found");
    }

    return {
        props:{
            plant,
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