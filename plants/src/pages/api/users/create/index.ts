import PlantActions from "@/backend/actions/plants";
import Plant from "@/interfaces/Plant";
import User from "@/interfaces/User";

import { NextApiRequest, NextApiResponse } from "next";


export default async function userCreateHandler(req: NextApiRequest, res: NextApiResponse): Promise<void>{
    const { method } = req;

    try{
        if(method === 'POST'){
            const { body } = req;
            const { name, username, password, plants } = body as User

            // checks here
            if (!name || !name.length){
                throw new Error("Missing name", )
            }

            if (!username || !username.length){
                throw new Error("Missing username")
            }
            if (!password || !password.length){
                throw new Error("Missing password")
            }

            if (!Array.isArray(plants) || !plants.length){               
                throw new Error("Missing plant list")
            }


            const result = await PlantActions.createUser(name, username, password, plants)
            
            if(result){
                res.status(200).send('Success')
            }
            else {
                throw new Error('Cannot create party')
            }    
        }
        else {
            throw new Error('Unsupported Method ' + method)  
        }
    }catch(error){
        if(error.message.startsWith("E11000")){
            res.status(409).json({
                error: error.message,
                success: false
            })
            return
        }
        res.status(400).json({
            error: error.message,
            success: false
        })
    }
}