import mongoose from 'mongoose';
import { MongoClient } from "mongodb"



export default class Database {
    

    static client: typeof mongoose;
    
    /**
     * sets up the database singleton
     * @param uri connection uri of the database
     * @returns the database that has been setup
     */
    static async setup(uri: string): Promise<typeof mongoose>{
        if (!this.client){
            await this.setupClient(uri);
        }

        return this.client;
    }

    /**
     * sets up the client object
     * @param uri connection uri of the database 
     * (expected to contain database name)
     */
    static async setupClient(uri: string): Promise<void>{
        const client = await mongoose.connect(uri)
        

        this.client = client;
    }
}
