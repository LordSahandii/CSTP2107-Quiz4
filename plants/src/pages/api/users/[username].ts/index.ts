import PlantActions from "@/backend/actions/plants";
import Plant from "@/interfaces/Plant";
import User from "@/interfaces/User";

import { NextApiRequest, NextApiResponse } from "next";


export default async function userHandler(req: NextApiRequest, res: NextApiResponse): Promise<void>{
    const { method } = req;
    const { username } = req.query;
    const usernameString = username as string;

    try {
        if (method === 'GET'){
            const user = await PlantActions.getAUserById(usernameString)
            
            if(user){
                res.status(200).json(user)
            }
            else {
                throw new Error('Invalid Id')
            }
        }
        else if (method === 'PUT'){
            const { body } = req
            const { plants } = body as any
            
            if (!Array.isArray(plants) || !plants.length){
                throw new Error("Missing party secret santa list")
            }

            const result = await PlantActions.updatePlantList(usernameString, plants)
            
            if (result){
                res.status(200).send('Success')
            }
            else {
                throw new Error('Invalid Id')
            }
        }
        else if (method === 'DELETE'){
            const result = await PlantActions.deleteUser(usernameString)

            if (result){
                res.status(200).send('Delete Success')
            }
            else{
                throw new Error('Invalid Id')
            }
        }
        else {
            throw new Error('Unsupported Method ' + method)  
        }
    }catch(error){
        res.status(400).json({
            error: error.message,
            success: false
        })
    }

}