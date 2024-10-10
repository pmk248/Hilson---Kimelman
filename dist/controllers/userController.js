"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editByName = exports.createUser = exports.getAllUsers = void 0;
const User_1 = require("../models/User");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userList = yield User_1.User.find({});
        res.status(200).json(userList);
        console.log("List received");
    }
    catch (err) {
        const error = err;
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new User_1.User(req.body);
        const creation = yield user.save();
        res.status(201).json(creation);
        console.log(req.body.username, "added successfully");
    }
    catch (err) {
        const error = err;
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
exports.createUser = createUser;
const editByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new User_1.User(req.body);
        const identical = yield User_1.User.findOne({ username: user.username });
        if (!identical)
            throw new Error("user doesn't exist");
        identical.password = user.password;
        identical.email = user.email;
        identical.age = user.age;
        yield identical.save();
        res.status(201).json(identical);
        console.log(req.body.username, "editted successfully");
    }
    catch (err) {
        const error = err;
        console.error(error.message);
        res.status(400).send(error.message);
    }
});
exports.editByName = editByName;
