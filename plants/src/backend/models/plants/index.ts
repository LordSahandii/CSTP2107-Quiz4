import { Schema, model, models } from "mongoose";
import Plant from "@/interfaces/Plant";

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true

        },
        plantList:{
            type: [] as unknown as Plant,


        }

    }
)

export const UserModel = models.Users || model('Users', userSchema);