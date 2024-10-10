"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const database_1 = require("./config/database");
const app = (0, express_1.default)();
dotenv_1.default.config();
(0, database_1.dbConnection)();
app.use('/users', userRoute_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("listening at post", PORT);
});
