import PlantActions from "@/backend/actions/plants";

import { NextApiRequest, NextApiResponse } from "next";


export default async function plantsHandler(req: NextApiRequest, res: NextApiResponse): Promise<void>{
    const { method } = req;
    
    try {
        if (method === 'GET'){
            const users = await PlantActions.getUsers()
            
            if (users){
                res.status(200).json(users)
            }
            else {
                throw new Error('Cannot find users ')
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