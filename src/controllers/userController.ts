import { Request, Response } from "express";
import Iuser, { User } from "../models/User";

export const getAllUsers = async (req: Request, res: Response ) => {
    try {
        const userList = await User.find({});
        res.status(200).json(userList);
        console.log("List received");
    } catch(err) {
        const error = err as Error; 
        console.error(error.message);
        res.status(400).send(error.message);
    }
}

export const createUser = async (
    req: Request<any, any, Iuser>, 
    res: Response 
) => {
    try {
        const user = new User(req.body);
        const creation = await user.save();
        res.status(201).json(creation);
        console.log(req.body.username, "added successfully");
    } catch(err) {
        const error = err as Error; 
        console.error(error.message);
        res.status(400).send(error.message);
    }
}

export const editByName = async (
    req: Request<any, any, Iuser>, 
    res: Response 
) => {
    try {
        const user = new User(req.body);
        const identical = await User.findOne({ username: user.username })
        if (!identical) throw new Error("user doesn't exist");
        identical.password = user.password;
        identical.email    = user.email;
        identical.age      = user.age;
        await identical.save();
        res.status(201).json(identical);
        console.log(req.body.username, "editted successfully");
    } catch(err) {
        const error = err as Error; 
        console.error(error.message);
        res.status(400).send(error.message);
    }
}