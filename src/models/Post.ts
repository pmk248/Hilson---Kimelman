import mongoose, { Document, Schema } from "mongoose";

export interface Ipost extends Document {
    
}

export const postSchema = new Schema<Ipost>({

}, { timestamps: true}) 

export const Post = mongoose.model("Post", postSchema)