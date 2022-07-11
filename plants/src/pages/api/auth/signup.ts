import PlantActions from "@/backend/actions/plants";

import { NextApiRequest, NextApiResponse } from "next";

import {hash} from "bcryptjs";


export default async function Signup(req: NextApiRequest, res: NextApiResponse): Promise<void>{
    const { username, password, plants } = req.body;
    const {method} = req;
    
    try {
        
        if (method === 'POST'){
            const users = await PlantActions.getAUserById(username)
            if (!username || !password) {
                res.status(422).json({ message: 'Invalid Data' });
                return;
            }
            
            if (users){
                res.status(422).json({ message: 'User already exists' });
                return;
            }
            else {
                const securePass = await hash(password, 12)
                const result = await PlantActions.createUser( username, securePass, plants)
            
                if(result){
                    res.status(200).send('Success')
                }
                else {
                    throw new Error('Cannot create party')
                }    
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