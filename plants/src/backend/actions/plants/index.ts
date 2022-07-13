import Database from "@/backend/database"
import { UserModel } from "@/backend/models/plants"
import Plant from "@/interfaces/Plant";
import User from "@/interfaces/User"

export default abstract class PlantActions{
    constructor(){
        throw new Error('[ERROR] Cannot instantiate an abstract class')
    }

    private static async connectDB(): Promise<void>{
        await Database.setupClient(process.env.MONGODB_URI);
    }

    static async createUser(username: string, password: string, plants: Plant[]){
        PlantActions.connectDB();
        console.log(username)
        const newUser = new UserModel(
            {
                username,
                password,
                plants
            }
        )
        const result = await newUser.save();
        return result as User ?? null
    }
    static async getUsers(): Promise<User[]>{
        PlantActions.connectDB();
        const users = await UserModel.find();

        return users as User[] ?? null
    }

    static async getAUserById(id: string): Promise<User>{
        PlantActions.connectDB();
        const user = await UserModel.findOne({username:id});

        return user as User ?? null
    }

    static async updatePlantList(id: string, list: Plant[]): Promise<User>{
        PlantActions.connectDB();

        const result = await UserModel.findOneAndUpdate({username:id}, { "plants" : list });
        return result as User ?? null
    }

    static async deleteUser(id: string){
        PlantActions.connectDB();

        const result = await UserModel.findOneAndDelete({username:id});
        return result as User ?? null
    }

}