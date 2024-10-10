import mongoose, { Document, Schema } from "mongoose"
import { Ipost } from "./Post"

export default interface Iuser extends Document {
    username    : string;
    email   : string;
    password: string;
    age     : number;
    posts   : Ipost[];
}

const userSchema = new Schema<Iuser>({
    username: { 
        type    : String, 
        required: [true, "Name is mandatory!"], 
        unique  : true
    },
    email: { 
        type  : String, 
        required: true 
    },
    password: { 
        type  : String, 
        required: [true, "Password is mandatory!"]
    },
    age: {
        type  : Number, 
        required: [true, "Age is mandatory!"],
        max: 120,
        min: 18
    },
    posts: {
        type: [Schema.Types.ObjectId],
        ref: "Post",
        default: []
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema);